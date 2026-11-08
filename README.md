# Honeymoon Atlas

A small static page for comparing once-in-a-lifetime honeymoon options for December 2027.

- **Two sets of priorities.** Each of you weights 11 categories (food, adventure, relaxation, romance, wildlife, culture, December weather, uniqueness, luxury, ease of travel, points-friendliness) from 0 to 5. Each trip gets a match score per person and a combined score, and the list re-ranks live.
- **Points wallet.** Every trip has a points plan (flights + hotels) drawn from Amex MR, Chase UR, Delta SkyMiles and Marriott Bonvoy, checked against your balances.
- **Booking windows.** Enter a departure date to see when each program's award calendar opens.
- **Shortlist.** Heart the trips you each like; filter the scoreboard to the shortlist. Choices are saved in your browser.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page markup |
| `styles.css` | Styles (light and dark themes) |
| `data.js` | Categories, wallets, booking windows and all 14 trips — edit here to add or rescore trips |
| `photos.js` | Credits for every photo in `photos/` |
| `app.js` | Scoring, rendering and saved state |

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Caveats

Award prices are estimates for saver-level business class as of 2026 and change often; December holiday dates price at peak. Cash estimates are for two people and cover what points don't (lodges, cruises, transfers, permits, fees). Verify everything when calendars open.

Photos are from Wikimedia Commons under the licenses listed in `photos.js`.
