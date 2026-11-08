// Honeymoon Atlas configuration. All award prices are estimates (business class,
// saver-level, as of 2026) and must be verified when award calendars open.

const CATEGORIES = [
  { id: "food", label: "Food & wine" },
  { id: "adventure", label: "Adventure" },
  { id: "relax", label: "Relaxation" },
  { id: "romance", label: "Romance" },
  { id: "wildlife", label: "Wildlife & nature" },
  { id: "culture", label: "Culture & history" },
  { id: "weather", label: "December weather" },
  { id: "unique", label: "Once-in-a-lifetime" },
  { id: "luxury", label: "Luxury stays" },
  { id: "ease", label: "Ease of travel" },
  { id: "points", label: "Points-friendly" }, // computed from the chosen stays
];

const WALLETS = [
  { id: "amex", label: "Amex MR", balance: 1500000 },
  { id: "chase", label: "Chase UR", balance: 100000 },
  { id: "delta", label: "Delta SkyMiles", balance: 100000 },
  { id: "marriott", label: "Marriott Bonvoy", balance: 100000 },
];

// How each hotel program is paid for. `ratio` is program points per wallet point.
// Marriott draws on the Marriott balance first, then Amex at 1:1.
const PROGRAMS = {
  hyatt: { label: "Hyatt", wallet: "chase", ratio: 1, fifthNightFree: false },
  ihg: { label: "IHG", wallet: "chase", ratio: 1, fifthNightFree: false },
  hilton: { label: "Hilton", wallet: "amex", ratio: 2, fifthNightFree: true },
  marriott: { label: "Marriott", wallet: "marriott", ratio: 1, fifthNightFree: true },
  cash: { label: "Cash" },
};

// Days before departure that award inventory typically opens (approximate).
const BOOKING_WINDOWS = [
  { program: "Hyatt (via Chase)", days: 395 },
  { program: "Marriott Bonvoy", days: 365 },
  { program: "Qatar Privilege Club", days: 361 },
  { program: "Hilton Honors", days: 360 },
  { program: "Flying Blue (Air France/KLM)", days: 359 },
  { program: "Aeroplan / British Airways", days: 355 },
  { program: "United MileagePlus", days: 337 },
  { program: "Delta SkyMiles", days: 331 },
];

const PLAYBOOK = [
  "Amex MR is the engine: it transfers 1:1 to Qatar/BA Avios, Aeroplan, Flying Blue, Delta, Virgin Atlantic, Singapore, Cathay, Avianca and more, 1:2 to Hilton, and 1:1 to Marriott (weak value — only to top up).",
  "Chase UR is best spent on Hyatt (1:1): Park Hyatt Maldives, Kyoto, Niseko, Sydney and Zanzibar, plus the Alila resorts in Bali, Oman and Rajasthan. Hyatt points also book many Small Luxury Hotels of the World.",
  "Delta SkyMiles can't transfer out. Use them on LATAM, Aeroméxico, SAS or KLM, or for short flights to Mexico, Central America and the Caribbean.",
  "Award transfers are one-way and usually instant. Find the seat first, then transfer.",
  "Hilton and Marriott both give the 5th night free on standard award stays. Book in blocks of five.",
  "Watch for Amex transfer bonuses (often 15–30% to Hilton, Flying Blue or Virgin Atlantic) during 2027.",
];
