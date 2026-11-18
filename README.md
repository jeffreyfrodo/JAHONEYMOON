# Honeymoon Atlas

A small static page for comparing once-in-a-lifetime honeymoon options for December 2027.

- **Two sets of priorities.** Each of you weights 11 categories (food, adventure, relaxation, romance, wildlife, culture, December weather, uniqueness, luxury, ease of travel, points-friendliness) from 0 to 5. Each trip gets a match score per person and a combined score, and the list re-ranks live.
- **36 trips in 8 regions, none in a country you've already visited.** Each trip has at most three stops. Trips built around a 5-night Marriott splurge (a stop of five or more nights with a Marriott at 50k+ points a night) are tagged and rank first. Filter by region or by your shortlist.
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
| `trips.js` | All 36 trips: scores, stops and the hotels offered at each |
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
