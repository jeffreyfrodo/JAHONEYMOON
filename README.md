# Honeymoon Atlas

A small static page for comparing once-in-a-lifetime honeymoon options for December 2027.

- **Resorts first.** Nineteen splurge resorts (Maldives, Bora Bora, Seychelles, the Red Sea, Bali, Mauritius, the Mara, Niseko, Krabi), each with photos, what makes it special, which villa to book, where to eat, and five scores (villa, food, setting, privacy, things to do). Every card prices five nights against your wallets, compares the points to the cash rate in cents per point, and says whether it's a great, good or weak redemption, or cash only. Rank by points value, resort score or your stars; each of you can star and annotate every resort.
- **Two sets of priorities.** Each of you weights 11 categories (food, adventure, relaxation, romance, wildlife, culture, December weather, uniqueness, luxury, ease of travel, points-friendliness) from 0 to 5. Each trip gets a match score per person and a combined score, and the list re-ranks live.
- **43 trips in 8 regions, none in a country you've already visited.** Each trip has at most three stops. Trips built around a 5-night Marriott splurge (a stop of five or more nights with a Marriott at 50k+ points a night) are tagged and rank first. Filter by region or by your shortlist.
- **Hotel choice at every stop.** Each stop lists 1–5 stays (Hyatt, Marriott, Hilton or IHG on points, or cash splurges) with an estimated nightly rate. Picking one updates the trip's points plan, cash estimate and points-friendly score.
- **Points wallet.** Flights and chosen hotels are paid from Amex MR, Chase UR, Delta SkyMiles and Marriott Bonvoy (Hilton via Amex 1:2, Hyatt/IHG via Chase, Marriott shortfall topped up from Amex), applying 5th-night-free rules and checking against your balances.
- **Points feasibility.** One table across all trips: each business-class award flight with its transfer path (for example Amex MR → Aeroplan 1:1), the points drawn from each wallet, hotel nights on points with your picks versus the most possible, and whether your balances cover it.
- **Booking windows.** Enter a departure date to see when each program's award calendar opens.
- **Stars and notes.** Each of you rates every trip 1–5 stars and keeps notes on it. Rank the scoreboard by match or by your stars, or filter to trips either of you gave 4★ or more. "Share our ratings" copies a link; opening it on the other phone merges in whichever ratings and notes are newer. Everything is saved in your browser.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page markup |
| `styles.css` | Styles (light and dark themes) |
| `data.js` | Categories, wallets, point programs, booking windows, playbook |
| `hotels.js` | Every stay: program, nightly rate, one-line note |
| `resorts.js` | Splurge resort profiles: pitch, villa, dining, scores, cash rate, photos |
| `trips.js` | All 43 trips: scores, stops and the hotels offered at each |
| `photos.js` | Photo URLs (Wikimedia Commons) and credits |
| `app.js` | Scoring, rendering and saved state |

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Caveats

Award prices are estimates for saver-level business class as of 2026 and change often; December holiday dates price at peak. Cash estimates are for two people and cover what points don't (lodges, cruises, transfers, permits, fees). Verify everything when calendars open.

Photos load directly from Wikimedia Commons and are credited in `photos.js` and at the bottom of the page.
