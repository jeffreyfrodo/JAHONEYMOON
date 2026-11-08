const STORAGE_KEY = "honeymoon-atlas-v1";
const PARTNERS = ["a", "b"];

const state = loadState();

function defaultState() {
  const weights = Object.fromEntries(CATEGORIES.map((c) => [c.id, 3]));
  return {
    names: { a: "You", b: "Fiancée" },
    weights: { a: { ...weights }, b: { ...weights } },
    balances: Object.fromEntries(WALLETS.map((w) => [w.id, w.balance])),
    depart: "2027-12-11",
    likes: {},
    filter: "all",
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

const $ = (sel) => document.querySelector(sel);
const fmt = (n) => n.toLocaleString("en-US");
const usd = (n) => "$" + Math.round(n / 1000) + "k";
const pct = (x) => Math.round(x * 100) + "%";

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

// ---------- scoring ----------

function match(dest, weights) {
  let total = 0;
  let max = 0;
  for (const c of CATEGORIES) {
    total += weights[c.id] * dest.scores[c.id];
    max += weights[c.id] * 10;
  }
  return max === 0 ? 0 : total / max;
}

function pointsNeeded(dest) {
  const needed = Object.fromEntries(WALLETS.map((w) => [w.id, 0]));
  for (const [, wallet, points] of dest.plan) needed[wallet] += points;
  return needed;
}

function coverage(dest) {
  const needed = pointsNeeded(dest);
  const short = WALLETS.filter((w) => needed[w.id] > state.balances[w.id]);
  return { needed, short };
}

function ranked() {
  return DESTINATIONS.map((d) => {
    const a = match(d, state.weights.a);
    const b = match(d, state.weights.b);
    return { d, a, b, both: (a + b) / 2 };
  }).sort((x, y) => y.both - x.both);
}

function isShortlisted(id) {
  const l = state.likes[id];
  return Boolean(l && (l.a || l.b));
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
    const when = days > 0 ? `in ${days} days` : "open now";
    root.append(
      el("li", { class: days > 0 ? "" : "is-open" },
        el("span", { class: "win-prog", text: w.program }),
        el("span", { class: "win-date", text: opens.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) }),
        el("span", { class: "win-when", text: when }))
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
  const table = $("#board");
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
  const body = rows.map(({ d, a, b, both }, i) => {
    const { short } = coverage(d);
    const link = el("a", { href: `#${d.id}`, text: d.name });
    return el("tr", { class: isShortlisted(d.id) ? "is-short" : "" },
      el("td", { class: "num rank", text: i + 1 }),
      el("td", { class: "left trip" }, link),
      el("td", { class: "num strong", text: pct(both) }),
      el("td", { class: "num col-a", text: pct(a) }),
      el("td", { class: "num col-b", text: pct(b) }),
      ...CATEGORIES.map((c) => el("td", { class: `heat ${heatClass(d.scores[c.id])}`, text: d.scores[c.id] })),
      el("td", { class: short.length ? "pts short" : "pts ok", text: short.length ? "Top-up" : "Covered" }),
      el("td", { class: "num", text: `${usd(d.cash[0])}–${usd(d.cash[1])}` })
    );
  });
  table.replaceChildren(el("thead", {}, head), el("tbody", {}, ...body));
}

// ---------- cards ----------

const cardNodes = new Map();

function buildCard(d) {
  const track = el("div", { class: "photo-track", tabindex: "0", "aria-label": `${d.name} photos` });
  for (const [slug, caption] of d.photos) {
    const p = PHOTOS[slug];
    if (!p) throw new Error(`Missing photo credit for ${slug}`);
    track.append(
      el("figure", { class: "photo" },
        el("img", { src: `photos/${slug}.jpg`, alt: caption, loading: "lazy", width: "1000", height: "640" }),
        el("figcaption", {},
          el("span", { class: "cap", text: caption }),
          el("a", { class: "credit", href: p.source, target: "_blank", rel: "noopener", text: `${p.artist} · ${p.license}` })))
    );
  }
  const prev = el("button", { type: "button", class: "nav prev", "aria-label": "Previous photo", text: "‹" });
  const next = el("button", { type: "button", class: "nav next", "aria-label": "Next photo", text: "›" });
  prev.addEventListener("click", () => track.scrollBy({ left: -track.clientWidth, behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: track.clientWidth, behavior: "smooth" }));
  const gallery = el("div", { class: "gallery" }, track, prev, next);

  const route = el("ol", { class: "route" }, ...d.route.map(([place, nights]) =>
    el("li", {}, el("span", { class: "stop", text: place }), el("span", { class: "nights", text: `${nights}n` }))));
  const totalNights = d.route.reduce((s, [, n]) => s + n, 0);

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

  const bars = el("ul", { class: "bars" }, ...CATEGORIES.map((c) =>
    el("li", {},
      el("span", { class: "bar-label", text: c.label }),
      el("span", { class: "bar-track" }, el("span", { class: `bar-fill ${heatClass(d.scores[c.id])}`, style: `width:${d.scores[c.id] * 10}%` })),
      el("span", { class: "bar-num", text: d.scores[c.id] }))));

  const planRows = d.plan.map(([label, wallet, points]) =>
    el("tr", {},
      el("td", { text: label }),
      el("td", { class: "wallet-tag", text: WALLETS.find((w) => w.id === wallet).label }),
      el("td", { class: "num", text: fmt(points) })));
  const plan = el("table", { class: "plan" },
    el("thead", {}, el("tr", {}, el("th", { text: "Booked with points" }), el("th", { text: "From" }), el("th", { class: "num", text: "Points" }))),
    el("tbody", {}, ...planRows));
  const usage = el("div", { class: "usage" });

  const scoreA = el("span", { class: "score-a" });
  const scoreB = el("span", { class: "score-b" });
  const scoreBoth = el("span", { class: "score-both" });
  const rank = el("span", { class: "rank-badge" });

  const card = el("article", { class: "card", id: d.id },
    gallery,
    el("div", { class: "card-body" },
      el("div", { class: "card-top" },
        el("div", { class: "title-block" },
          rank,
          el("h3", { text: d.name }),
          el("p", { class: "tagline", text: d.tagline })),
        el("div", { class: "match" }, scoreBoth, el("span", { class: "match-label", text: "match" }), el("div", { class: "match-split" }, scoreA, scoreB))),
      el("div", { class: "route-wrap" }, route, el("span", { class: "total", text: `${totalNights} nights · ${d.hours}` })),
      el("div", { class: "likes" }, ...likeBtns),
      el("p", { class: "december" }, el("strong", { text: "December: " }), d.december),
      el("div", { class: "detail-grid" },
        bars,
        el("div", { class: "pros-cons" },
          el("h4", { text: "Why go" }),
          el("ul", { class: "pros" }, ...d.highlights.map((h) => el("li", { text: h }))),
          el("h4", { text: "Watch out for" }),
          el("ul", { class: "cons" }, ...d.watchouts.map((h) => el("li", { text: h }))))),
      el("div", { class: "money" },
        el("div", { class: "plan-scroll" }, plan),
        el("div", { class: "money-side" },
          usage,
          el("p", { class: "cash" }, el("span", { class: "cash-num", text: `${usd(d.cash[0])}–${usd(d.cash[1])}` }), el("span", { class: "cash-label", text: "estimated cash for two, on top of points" }))))));

  return { card, rank, scoreA, scoreB, scoreBoth, likeBtns, usage };
}

function updateCard(node, d, row, i) {
  node.rank.textContent = `No. ${i + 1}`;
  node.scoreBoth.textContent = pct(row.both);
  node.scoreA.textContent = `${state.names.a} ${pct(row.a)}`;
  node.scoreB.textContent = `${state.names.b} ${pct(row.b)}`;
  const likes = state.likes[d.id] || {};
  PARTNERS.forEach((p, idx) => {
    const btn = node.likeBtns[idx];
    btn.setAttribute("aria-pressed", String(Boolean(likes[p])));
    btn.textContent = `${likes[p] ? "♥" : "♡"} ${state.names[p]}`;
  });
  const { needed } = coverage(d);
  node.usage.replaceChildren(...WALLETS.filter((w) => needed[w.id] > 0).map((w) => {
    const bal = state.balances[w.id];
    const ratio = bal === 0 ? 1 : Math.min(needed[w.id] / bal, 1);
    const over = needed[w.id] > bal;
    return el("div", { class: `use ${over ? "over" : ""}` },
      el("div", { class: "use-head" },
        el("span", { text: w.label }),
        el("span", { class: "num", text: over ? `short ${fmt(needed[w.id] - bal)}` : `${fmt(needed[w.id])} of ${fmt(bal)}` })),
      el("span", { class: "use-track" }, el("span", { class: "use-fill", style: `width:${ratio * 100}%` })));
  }));
  node.card.hidden = state.filter === "short" && !isShortlisted(d.id);
}

function renderCards(rows) {
  const root = $("#cards");
  rows.forEach((row, i) => {
    if (!cardNodes.has(row.d.id)) cardNodes.set(row.d.id, buildCard(row.d));
    const node = cardNodes.get(row.d.id);
    updateCard(node, row.d, row, i);
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

function renderFilter() {
  $("#filter-all").setAttribute("aria-pressed", String(state.filter === "all"));
  $("#filter-short").setAttribute("aria-pressed", String(state.filter === "short"));
}

// ---------- wiring ----------

function update() {
  const rows = ranked();
  const visible = state.filter === "short" ? rows.filter((r) => isShortlisted(r.d.id)) : rows;
  renderBoard(visible);
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
  renderPlaybook();
  renderCredits();
  update();
}

init();
