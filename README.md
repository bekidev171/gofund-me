# HERCARE – Science Fair Website

HERCARE is a science fair project representing a government-style social initiative that supports women facing financial hardship and promotes women's empowerment in Ethiopia.

## Structure

- `index.html` – Main single-page website (Home, About Us, Support Women sections).
- `styles.css` – Visual design, responsive layout, color system, and animations.
- `script.js` – Interactive behavior: scroll reveal, impact counters, sliders, donation logic, and modals.
- `assets/hercare-logo.png` – HERCARE logo (you should place your logo file here).
- `fonts/` – Folder for the **FORTA** and **CARAMEL** font files.

## Fonts

The design expects the following font files (or equivalents) to exist:

- `fonts/FORTA.woff2` and/or `fonts/FORTA.woff` – used for all headings, body text, and cards.
- `fonts/CARAMEL.woff2` and/or `fonts/CARAMEL.woff` – used for buttons.

If you do not have these exact files, you can temporarily replace them with other font files using the same names, or adjust the `@font-face` declarations in `styles.css`.

## Running the Site

Open `index.html` in any modern web browser (Chrome, Edge, Firefox). All functionality runs client-side with plain HTML, CSS, and JavaScript.

For the best animation performance (especially the image slider and scroll effects), you can serve the folder from a simple local HTTP server, but this is not required for the science fair presentation.

