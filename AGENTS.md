# AGENTS.md

## Project type

Static HTML/CSS/JS student portfolio — no build step, no package manager, no dependencies.

## Running

Open `index.html` directly in a browser. No dev server or install needed.

## Structure

- `index.html` — self-contained landing page (inline styles, no external CSS/JS) linking to all 18 exercise pages.
- Numbered HTML files (`1.html` … `10-4.html`) — individual classroom exercises. Filenames contain Chinese characters and spaces (URL-encoded with `%20` in links).
- `script.js` + `styles.css` — standalone particle-background animation snippet. Not currently wired into any page; to integrate, add `<canvas id="bg">` as the first child of `<body>`, then include both files.
- `四级项目html/` — separate project directory.

## Conventions

- No linter, formatter, or test runner configured.
- Exercise pages use inline `<style>` blocks, not external stylesheets.
