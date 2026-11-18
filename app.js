const STORAGE_KEY = "honeymoon-atlas-v2";
const PARTNERS = ["a", "b"];

validateData();
const state = loadState();

// ---------- data checks ----------

function validateData() {
  for (const d of DESTINATIONS) {
    for (const [label, wallet, , airline] of d.flights) {
      if (wallet !== "cash" && !AIRLINES[airline]) throw new Error(`${d.id}: unknown airline program "${airline}" for "${label}"`);
    }
    for (const [place, , ids] of d.stops) {
      for (const id of ids) {
        if (!HOTELS[id]) throw new Error(`${d.id}: unknown hotel "${id}" at ${place}`);
        if (!PROGRAMS[HOTELS[id].program]) throw new Error(`${id}: unknown program "${HOTELS[id].program}"`);
      }
    }
    for (const [slug] of d.photos) {
      if (!PHOTOS[slug]) throw new Error(`${d.id}: missing photo "${slug}"`);
    }
  }
}

// ---------- state ----------

function defaultState() {
  const weights = Object.fromEntries(CATEGORIES.map((c) => [c.id, 3]));
  return {
    names: { a: "You", b: "Fiancée" },
    weights: { a: { ...weights }, b: { ...weights } },
    balances: Object.fromEntries(WALLETS.map((w) => [w.id, w.balance])),
    depart: "2027-12-11",
    likes: {},
    stays: {},
    filter: "all",
    region: "all",
  };
}

function loadState() {
  const base = defaultState();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...base, ...saved } : base;
  } catch {
    return base;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable: the page still works for this visit */
  }
}

// ---------- helpers ----------

const $ = (sel) => document.querySelector(sel);
const fmt = (n) => Math.round(n).toLocaleString("en-US");
const usdK = (n) => "$" + Math.round(n / 1000) + "k";
const pct = (x) => Math.round(x * 100) + "%";
const walletLabel = (id) => (id === "cash" ? "Cash" : WALLETS.find((w) => w.id === id).label);

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  }
  node.append(...children);
  return node;
}

function rateLabel(hotel) {
  if (hotel.program === "cash") return `$${fmt(hotel.rate)}/night`;
  return `${Math.round(hotel.rate / 1000)}k ${PROGRAMS[hotel.program].label}/night`;
}

// ---------- budget ----------

function flightVia(wallet, airline) {
  const a = AIRLINES[airline];
  if (wallet === "delta") return "Delta SkyMiles";
  return `${walletLabel(wallet)} → ${a.label} 1:${a.ratio}`;
}

// Nights at stops that offer at least one stay bookable on points.
function possiblePointNights(d) {
  return d.stops.reduce((sum, [, nights, ids]) => sum + (ids.some((id) => HOTELS[id].program !== "cash") ? nights : 0), 0);
}

function chosenStay(d, i) {
  const ids = d.stops[i][2];
  const saved = state.stays[d.id]?.[i];
  return ids.includes(saved) ? saved : ids[0];
}

function budget(d) {
  const needed = Object.fromEntries(WALLETS.map((w) => [w.id, 0]));
  const lines = [];
  let cash = 0;
  let marriott = 0;
  let pointNights = 0;
  let totalNights = 0;

  for (const [label, wallet, amount, airline] of d.flights) {
    if (wallet === "cash") {
      cash += amount;
      lines.push([label, "Cash", `$${fmt(amount)}`]);
      continue;
    }
    needed[wallet] += amount / AIRLINES[airline].ratio;
    lines.push([label, flightVia(wallet, airline), `${fmt(amount)} ${AIRLINES[airline].label}`]);
  }

  d.stops.forEach(([place, nights], i) => {
    const hotel = HOTELS[chosenStay(d, i)];
    totalNights += nights;
    const label = `${place}: ${hotel.name}, ${nights} ${nights === 1 ? "night" : "nights"}`;
    if (hotel.program === "cash") {
      cash += hotel.rate * nights;
      lines.push([label, "Cash", `$${fmt(hotel.rate * nights)}`]);
      return;
    }
    const prog = PROGRAMS[hotel.program];
    const free = prog.fifthNightFree ? Math.floor(nights / 5) : 0;
    const points = (nights - free) * hotel.rate;
    pointNights += nights;
    if (hotel.program === "marriott") marriott += points;
    else needed[prog.wallet] += points / prog.ratio;
    const via = prog.wallet === "amex" ? `Amex → ${prog.label} 1:${prog.ratio}` : `${walletLabel(prog.wallet)} → ${prog.label}`;
    lines.push([label + (free ? " (5th free)" : ""), hotel.program === "marriott" ? "Marriott Bonvoy" : via, `${fmt(points)} ${prog.label}`]);
  });

  needed.marriott = Math.min(marriott, state.balances.marriott);
  const topUp = marriott - needed.marriott;
  if (topUp > 0) {
    needed.amex += topUp;
    lines.push(["Marriott shortfall", "Amex → Marriott 1:1", fmt(topUp)]);
  }

  const short = WALLETS.filter((w) => needed[w.id] > state.balances[w.id]);
  return {
    lines,
    needed,
    short,
    cash: [d.extras[0] + cash, d.extras[1] + cash],
    pointsScore: Math.round(4 + (6 * pointNights) / totalNights),
    pointNights,
    totalNights,
  };
}

// ---------- scoring ----------

function hasSplurge(d) {
  return d.stops.some(([, nights, ids]) =>
    nights >= 5 && ids.some((id) => HOTELS[id].program === "marriott" && HOTELS[id].rate >= SPLURGE_MIN_RATE));
}

function splurgeTag(d) {
  return hasSplurge(d)
    ? el("span", { class: "splurge-tag yes", text: "Marriott splurge" })
    : el("span", { class: "splurge-tag", text: "No Marriott splurge" });
}

function match(scores, weights) {
  let total = 0;
  let max = 0;
  for (const c of CATEGORIES) {
    total += weights[c.id] * scores[c.id];
    max += weights[c.id] * 10;
  }
  return max === 0 ? 0 : total / max;
}

function ranked() {
  return DESTINATIONS.map((d) => {
    const b = budget(d);
    const scores = { ...d.scores, points: b.pointsScore };
    const a = match(scores, state.weights.a);
    const bb = match(scores, state.weights.b);
    return { d, budget: b, scores, a, b: bb, both: (a + bb) / 2, splurge: hasSplurge(d) };
  }).sort((x, y) => y.splurge - x.splurge || y.both - x.both);
}

function isShortlisted(id) {
  const l = state.likes[id];
  return Boolean(l && (l.a || l.b));
}

function isVisible(d) {
  if (state.region !== "all" && d.region !== state.region) return false;
  if (state.filter === "short" && !isShortlisted(d.id)) return false;
  return true;
}

// ---------- priorities ----------

function renderPriorities() {
  const root = $("#priorities");
  root.replaceChildren();

  const head = el("div", { class: "prio-row prio-head" }, el("span", { class: "prio-label", text: "" }));
  for (const p of PARTNERS) {
    const input = el("input", { id: `name-${p}`, class: `name name-${p}`, value: state.names[p], "aria-label": `Name for traveler ${p.toUpperCase()}` });
    input.addEventListener("input", () => {
      state.names[p] = input.value.trim() || p.toUpperCase();
      saveState();
      update();
    });
    head.append(el("div", { class: "prio-cell" }, input));
  }
  root.append(head);

  for (const c of CATEGORIES) {
    const row = el("div", { class: "prio-row" }, el("span", { class: "prio-label", text: c.label }));
    for (const p of PARTNERS) {
      const id = `w-${p}-${c.id}`;
      const out = el("output", { for: id, class: "prio-val", text: state.weights[p][c.id] });
      const range = el("input", { type: "range", min: "0", max: "5", step: "1", id, class: `range range-${p}`, value: state.weights[p][c.id], "aria-label": `${c.label} for traveler ${p.toUpperCase()}` });
      range.addEventListener("input", () => {
        state.weights[p][c.id] = Number(range.value);
        out.textContent = range.value;
        saveState();
        update();
      });
      row.append(el("div", { class: "prio-cell" }, range, out));
    }
    root.append(row);
  }
}

// ---------- wallet & windows ----------

function renderWallet() {
  const root = $("#wallet");
  root.replaceChildren();
  for (const w of WALLETS) {
    const id = `bal-${w.id}`;
    const input = el("input", { id, type: "text", inputmode: "numeric", value: fmt(state.balances[w.id]) });
    input.addEventListener("change", () => {
      const n = Number(input.value.replace(/[^0-9]/g, ""));
      state.balances[w.id] = n;
      input.value = fmt(n);
      saveState();
      update();
    });
    root.append(el("label", { class: "wallet-item", for: id }, el("span", { class: "wallet-name", text: w.label }), input));
  }
}

function renderWindows() {
  const depart = new Date(state.depart + "T12:00:00");
  const today = new Date();
  const root = $("#windows");
  root.replaceChildren();
  for (const w of BOOKING_WINDOWS) {
    const opens = new Date(depart.getTime() - w.days * 86400000);
    const days = Math.ceil((opens - today) / 86400000);
    root.append(
      el("li", { class: days > 0 ? "" : "is-open" },
        el("span", { class: "win-prog", text: w.program }),
        el("span", { class: "win-date", text: opens.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) }),
        el("span", { class: "win-when", text: days > 0 ? `in ${days} days` : "open now" }))
    );
  }
}

// ---------- scoreboard ----------

function heatClass(score) {
  if (score >= 9) return "h4";
  if (score >= 7) return "h3";
  if (score >= 5) return "h2";
  return "h1";
}

function renderBoard(rows) {
  const head = el("tr", {},
    el("th", { scope: "col", text: "#" }),
    el("th", { scope: "col", class: "left", text: "Trip" }),
    el("th", { scope: "col", text: "Both" }),
    el("th", { scope: "col", class: "col-a", text: state.names.a }),
    el("th", { scope: "col", class: "col-b", text: state.names.b }),
    ...CATEGORIES.map((c) => el("th", { scope: "col", class: "cat", title: c.label }, el("span", { text: c.label }))),
    el("th", { scope: "col", text: "Points" }),
    el("th", { scope: "col", text: "Cash for two" })
  );
  const body = rows.map((r, i) => el("tr", { class: isShortlisted(r.d.id) ? "is-short" : "" },
    el("td", { class: "num rank", text: i + 1 }),
    el("td", { class: "left trip" }, el("a", { href: `#${r.d.id}`, text: r.d.name }), el("span", { class: "board-region", text: r.d.region }), splurgeTag(r.d)),
    el("td", { class: "num strong", text: pct(r.both) }),
    el("td", { class: "num col-a", text: pct(r.a) }),
    el("td", { class: "num col-b", text: pct(r.b) }),
    ...CATEGORIES.map((c) => el("td", { class: `heat ${heatClass(r.scores[c.id])}`, text: r.scores[c.id] })),
    el("td", { class: r.budget.short.length ? "pts short" : "pts ok", text: r.budget.short.length ? "Top-up" : "Covered" }),
    el("td", { class: "num", text: `${usdK(r.budget.cash[0])}–${usdK(r.budget.cash[1])}` })
  ));
  $("#board").replaceChildren(el("thead", {}, head), el("tbody", {}, ...body));
  $("#board-count").textContent = `${rows.length} of ${DESTINATIONS.length} trips`;
}

// ---------- points feasibility ----------

function renderFeasibility(rows) {
  const head = el("tr", {},
    el("th", { scope: "col", class: "left", text: "Trip" }),
    el("th", { scope: "col", class: "left", text: "Business-class award flights" }),
    ...WALLETS.map((w) => el("th", { scope: "col", text: w.label })),
    el("th", { scope: "col", text: "Hotel nights on points" }),
    el("th", { scope: "col", class: "left", text: "Verdict" }));

  const body = rows.map(({ d, budget: b }) => {
    const flights = el("ul", { class: "feas-flights" }, ...d.flights.map(([label, wallet, amount, airline]) =>
      el("li", {},
        el("span", { text: label }),
        el("span", { class: "feas-via", text: wallet === "cash" ? `Cash · $${fmt(amount)}` : `${flightVia(wallet, airline)} · ${fmt(amount)}` }))));
    const possible = possiblePointNights(d);
    const verdict = b.short.length
      ? `Short ${b.short.map((w) => `${fmt(b.needed[w.id] - state.balances[w.id])} ${w.label}`).join(", ")}`
      : "Covered by your points";
    return el("tr", { class: isShortlisted(d.id) ? "is-short" : "" },
      el("td", { class: "left trip" }, el("a", { href: `#${d.id}`, text: d.name })),
      el("td", { class: "left" }, flights),
      ...WALLETS.map((w) => {
        const need = b.needed[w.id];
        return el("td", { class: need > state.balances[w.id] ? "num over" : "num", text: need > 0 ? fmt(need) : "–" });
      }),
      el("td", { class: "num" },
        `${b.pointNights} of ${b.totalNights}`,
        el("span", { class: "feas-max", text: possible > b.pointNights ? ` (up to ${possible})` : "" })),
      el("td", { class: `left pts ${b.short.length ? "short" : "ok"}`, text: verdict }));
  });

  $("#feas").replaceChildren(el("thead", {}, head), el("tbody", {}, ...body));
  const covered = rows.filter((r) => !r.budget.short.length).length;
  $("#feas-count").textContent = `${covered} of ${rows.length} trips fit your balances with the stays you picked`;
}

// ---------- cards ----------

const cardNodes = new Map();

function buildGallery(d) {
  const track = el("div", { class: "photo-track", tabindex: "0", "aria-label": `${d.name} photos` });
  for (const [slug, caption] of d.photos) {
    const p = PHOTOS[slug];
    track.append(
      el("figure", { class: "photo" },
        el("img", { src: p.url, alt: caption, loading: "lazy", width: "1280", height: "720", referrerpolicy: "no-referrer" }),
        el("figcaption", {},
          el("span", { class: "cap", text: caption }),
          el("a", { class: "credit", href: p.source, target: "_blank", rel: "noopener", text: `${p.artist} · ${p.license}` })))
    );
  }
  const gallery = el("div", { class: "gallery" }, track);
  if (d.photos.length > 1) {
    const prev = el("button", { type: "button", class: "nav prev", "aria-label": "Previous photo", text: "‹" });
    const next = el("button", { type: "button", class: "nav next", "aria-label": "Next photo", text: "›" });
    prev.addEventListener("click", () => track.scrollBy({ left: -track.clientWidth, behavior: "smooth" }));
    next.addEventListener("click", () => track.scrollBy({ left: track.clientWidth, behavior: "smooth" }));
    gallery.append(prev, next);
  }
  return gallery;
}

function buildStays(d) {
  return el("div", { class: "stays" }, ...d.stops.map(([place, nights, ids], i) => {
    const name = `stay-${d.id}-${i}`;
    const options = ids.map((id) => {
      const h = HOTELS[id];
      const input = el("input", { type: "radio", name, id: `${name}-${id}`, value: id });
      input.checked = chosenStay(d, i) === id;
      input.addEventListener("change", () => {
        state.stays[d.id] = { ...(state.stays[d.id] || {}), [i]: id };
        saveState();
        update();
      });
      return el("label", { class: `stay prog-${h.program}`, for: `${name}-${id}` },
        input,
        el("span", { class: "stay-main" },
          el("span", { class: "stay-name", text: h.name }),
          el("span", { class: "stay-note", text: h.note })),
        el("span", { class: "stay-rate", text: rateLabel(h) }));
    });
    return el("fieldset", { class: "stop" },
      el("legend", {}, el("span", { class: "stop-place", text: place }), el("span", { class: "stop-nights", text: `${nights} ${nights === 1 ? "night" : "nights"}` })),
      ...options);
  }));
}

function buildCard(d) {
  const route = el("ol", { class: "route" }, ...d.stops.map(([place, nights]) =>
    el("li", {}, el("span", { class: "stop-chip", text: place }), el("span", { class: "nights", text: `${nights}n` }))));
  const totalNights = d.stops.reduce((s, [, n]) => s + n, 0);

  const likeBtns = PARTNERS.map((p) => {
    const b = el("button", { type: "button", class: `like like-${p}`, "aria-pressed": "false" });
    b.addEventListener("click", () => {
      const cur = state.likes[d.id] || { a: false, b: false };
      cur[p] = !cur[p];
      state.likes[d.id] = cur;
      saveState();
      update();
    });
    return b;
  });

  const node = {
    rank: el("span", { class: "rank-badge" }),
    scoreA: el("span", { class: "score-a" }),
    scoreB: el("span", { class: "score-b" }),
    scoreBoth: el("span", { class: "score-both" }),
    bars: el("ul", { class: "bars" }),
    planBody: el("tbody"),
    usage: el("div", { class: "usage" }),
    cash: el("span", { class: "cash-num" }),
    likeBtns,
  };

  node.card = el("article", { class: "card", id: d.id },
    buildGallery(d),
    el("div", { class: "card-body" },
      el("div", { class: "card-top" },
        el("div", { class: "title-block" },
          el("span", { class: "eyebrow-row" }, node.rank, el("span", { class: "region-tag", text: d.region }), splurgeTag(d)),
          el("h3", { text: d.name }),
          el("p", { class: "tagline", text: d.tagline })),
        el("div", { class: "match" }, node.scoreBoth, el("span", { class: "match-label", text: "match" }), el("div", { class: "match-split" }, node.scoreA, node.scoreB))),
      el("div", { class: "route-wrap" }, route, el("span", { class: "total", text: `${totalNights} nights · ${d.hours}` })),
      el("div", { class: "likes" }, ...likeBtns),
      el("p", { class: "december" }, el("strong", { text: "December: " }), d.december),
      el("div", { class: "detail-grid" },
        node.bars,
        el("div", { class: "pros-cons" },
          el("h4", { text: "Why go" }),
          el("ul", { class: "pros" }, ...d.highlights.map((h) => el("li", { text: h }))),
          el("h4", { text: "Watch out for" }),
          el("ul", { class: "cons" }, ...d.watchouts.map((h) => el("li", { text: h }))))),
      el("section", { class: "where" },
        el("h4", { text: "Where to stay" }),
        buildStays(d)),
      el("div", { class: "money" },
        el("div", { class: "plan-scroll" },
          el("table", { class: "plan" },
            el("thead", {}, el("tr", {}, el("th", { text: "Booking" }), el("th", { text: "Paid with" }), el("th", { class: "num", text: "Cost" }))),
            node.planBody)),
        el("div", { class: "money-side" },
          node.usage,
          el("p", { class: "cash" }, node.cash, el("span", { class: "cash-label", text: "cash for two: cash stays plus transfers, fees and meals" }))))));
  return node;
}

function updateCard(node, r, i) {
  const { d, budget: b } = r;
  node.rank.textContent = `No. ${i + 1}`;
  node.scoreBoth.textContent = pct(r.both);
  node.scoreA.textContent = `${state.names.a} ${pct(r.a)}`;
  node.scoreB.textContent = `${state.names.b} ${pct(r.b)}`;

  const likes = state.likes[d.id] || {};
  PARTNERS.forEach((p, idx) => {
    node.likeBtns[idx].setAttribute("aria-pressed", String(Boolean(likes[p])));
    node.likeBtns[idx].textContent = `${likes[p] ? "♥" : "♡"} ${state.names[p]}`;
  });

  node.bars.replaceChildren(...CATEGORIES.map((c) =>
    el("li", {},
      el("span", { class: "bar-label", text: c.label }),
      el("span", { class: "bar-track" }, el("span", { class: `bar-fill ${heatClass(r.scores[c.id])}`, style: `width:${r.scores[c.id] * 10}%` })),
      el("span", { class: "bar-num", text: r.scores[c.id] }))));

  node.planBody.replaceChildren(...b.lines.map(([label, from, cost]) =>
    el("tr", {}, el("td", { text: label }), el("td", { class: "wallet-tag", text: from }), el("td", { class: "num", text: cost }))));

  node.usage.replaceChildren(...WALLETS.filter((w) => b.needed[w.id] > 0).map((w) => {
    const bal = state.balances[w.id];
    const need = b.needed[w.id];
    const over = need > bal;
    return el("div", { class: `use ${over ? "over" : ""}` },
      el("div", { class: "use-head" },
        el("span", { text: w.label }),
        el("span", { class: "num", text: over ? `short ${fmt(need - bal)}` : `${fmt(need)} of ${fmt(bal)}` })),
      el("span", { class: "use-track" }, el("span", { class: "use-fill", style: `width:${bal === 0 ? 100 : Math.min(need / bal, 1) * 100}%` })));
  }));
  node.cash.textContent = `${usdK(b.cash[0])}–${usdK(b.cash[1])}`;
  node.card.hidden = !isVisible(d);
}

function renderCards(rows) {
  const root = $("#cards");
  rows.forEach((r, i) => {
    if (!cardNodes.has(r.d.id)) cardNodes.set(r.d.id, buildCard(r.d));
    const node = cardNodes.get(r.d.id);
    updateCard(node, r, i);
    root.append(node.card);
  });
}

// ---------- static sections ----------

function renderPlaybook() {
  $("#playbook").replaceChildren(...PLAYBOOK.map((t) => el("li", { text: t })));
}

function renderCredits() {
  const used = [...new Set(DESTINATIONS.flatMap((d) => d.photos.map(([slug]) => slug)))];
  $("#credits").replaceChildren(...used.map((slug) => {
    const p = PHOTOS[slug];
    return el("li", {}, el("a", { href: p.source, target: "_blank", rel: "noopener", text: p.title }), ` by ${p.artist}, ${p.license}`);
  }));
}

function renderRegionFilter() {
  const select = $("#region");
  const regions = [...new Set(DESTINATIONS.map((d) => d.region))];
  select.replaceChildren(
    el("option", { value: "all", text: "All regions" }),
    ...regions.map((r) => el("option", { value: r, text: r })));
  select.value = state.region;
  select.addEventListener("change", () => {
    state.region = select.value;
    saveState();
    update();
  });
}

function renderFilter() {
  $("#filter-all").setAttribute("aria-pressed", String(state.filter === "all"));
  $("#filter-short").setAttribute("aria-pressed", String(state.filter === "short"));
}

// ---------- wiring ----------

function update() {
  const rows = ranked();
  const visible = rows.filter((r) => isVisible(r.d));
  renderBoard(visible);
  renderFeasibility(visible);
  renderCards(rows);
  renderFilter();
}

function init() {
  const depart = $("#depart");
  depart.value = state.depart;
  depart.addEventListener("change", () => {
    if (!depart.value) return;
    state.depart = depart.value;
    saveState();
    renderWindows();
  });
  for (const [id, value] of [["#filter-all", "all"], ["#filter-short", "short"]]) {
    $(id).addEventListener("click", () => {
      state.filter = value;
      saveState();
      update();
    });
  }
  renderPriorities();
  renderWallet();
  renderWindows();
  renderRegionFilter();
  renderPlaybook();
  renderCredits();
  update();
}

init();
