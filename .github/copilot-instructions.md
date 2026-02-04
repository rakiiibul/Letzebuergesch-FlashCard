# Copilot / AI Agent Instructions

Purpose: help an AI contributor quickly understand and safely modify this small static flashcard app.

- **Project type:** Single-page, client-side static web app. No build tools or dependencies.
- **Key files:** `index.html` (UI), `script.js` (app data + logic), `style.css` (styles), `category.html` (placeholder), `README.md` (minimal).

Big picture
- The app lives entirely in the browser. `script.js` contains the data model (the `flashcards` array) and all UI logic. The app flow is: render current flashcard -> user clicks card to flip (toggle `flipped` class) -> user navigates with `nextBtn` / `prevBtn` which update `currentIndex` and call `showCard()`.
- State is ephemeral in memory (global `flashcards` and `currentIndex`). No server, no persistence unless you add it.

Important patterns & conventions
- Flashcard objects: { question: "...", answer: "..." }. See `script.js` for examples.
- DOM hooks (use these IDs when editing JS or adding features): `card`, `frontText`, `backText`, `nextBtn`, `prevBtn`.
- Flip animation: toggling the `flipped` class on `card` rotates `.card-inner` via CSS in `style.css`. Keep JS limited to class toggles and text updates.
- Minimal global scope: current code uses simple globals (`flashcards`, `currentIndex`). If you refactor to modules, ensure `showCard()` remains callable and event listeners initialized after DOM load.

How to run locally
- This is static: open `index.html` in a browser. For a local server (recommended for proper module/asset behavior), run from the repo root:

```bash
python -m http.server 8000
# then open http://localhost:8000/
```

Developer/editing examples (safe, small changes)
- Add a card (dev quick-change): in `script.js` push an object then call `showCard()` in the console:

```js
flashcards.push({ question: 'New Q', answer: 'New A' });
// optionally set currentIndex = flashcards.length-1; showCard();
```

- Persist to localStorage (example pattern): serialize `flashcards` to localStorage after changes and load on startup. Keep persistence logic isolated to a small helper function in `script.js`.

Debugging notes
- Use browser DevTools. Breakpoints in `script.js` are effective; functions of interest: `showCard()`, event listeners on `card`, `nextBtn`, `prevBtn`.
- Useful console helpers: `flashcards`, `currentIndex`, `showCard()`.

When modifying UI/animation
- Editing visuals belongs in `style.css`. Preserve the flip animation pattern (class `flipped` on `.card`) to avoid surprising regressions.

Integration points / future extension hints
- No external services currently. If you add remote loading, place fetch logic in `script.js` and keep original `flashcards` fallback so the app still works offline.
- `category.html` is a placeholder for future categorization - if you add routing, keep the main app as `index.html` and add simple links rather than a heavy router.

PR guidance
- Keep changes small and focused. Update `README.md` when adding features or runtime requirements. Include a short manual test (what to click and what to expect) in the PR description.

If anything is unclear or you'd like me to expand a specific section (persistence, tests, modularization, or GitHub Pages deployment), tell me which and I'll iterate.
