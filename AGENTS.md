# AGENTS.md

## Project Overview

- This is a static website built with HTML, CSS, and vanilla JavaScript.
- `index.html` contains the page markup and loads styles from `css/style.css` and behavior from `js/`.
- `js/script.js` handles the responsive navigation; `js/animation.js` handles scroll and entrance animations.
- Images and other visual assets live under `img/`.
- Tailwind CSS, ScrollReveal, and Remix Icon are loaded from CDNs. Keep changes compatible with the existing setup unless a task calls for changing it.

## Development Commands

- Install the development dependency with `npm install`.
- Check formatting with `npm run format:check`.
- Format the files covered by the project script with `npm run format`.
- There is no build, test, or local-server script configured in `package.json`.

## Editing Guidelines

- Use JavaScript for browser behavior; keep page structure in HTML and styling in CSS as described above.
- Keep the site static and use the existing HTML, CSS, and JavaScript structure; do not introduce a framework or build system for a small change.
- Install dependencies and tools locally within this project; never install packages or tools globally.
- Always follow the technology stack documented here. Before changing code or configuration, create or update `tmp/tmp.md` with the proposed changes and wait for the user's explicit approval; do not make changes before approval, and keep implementation within the approved scope.
- After completing the approved changes, clear the contents of `tmp/tmp.md` so it is ready for the next session.
- When a relevant technology has a newer stable version, verify it using an authoritative source and let the user know. Do not upgrade dependencies or change the stack without explicit approval.
- Preserve responsive behavior and accessibility, including semantic markup, useful image alt text, keyboard interaction, and accessible labels for controls.
- Keep CSS in `css/style.css` and browser behavior in the appropriate file under `js/`; avoid inline styles and scripts unless required by the existing integration.
- Reuse assets from `img/` and keep asset paths relative to the site files.
- When changing navigation or other interactive behavior, maintain its mobile behavior and keyboard support.
- Keep public claims, testimonials, client details, and project outcomes accurate and approved for publication.
- Keep changes focused and maintainable; follow existing conventions, avoid unrelated edits, and add comments only where they clarify non-obvious behavior.

## Validation

- Run `npm run format:check` after editing files covered by Prettier.
- Review the page in a browser at desktop and mobile widths for visual or interaction changes. No automated browser or test suite is configured.
