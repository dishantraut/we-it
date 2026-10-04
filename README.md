# WE-IT

Static website for WE-IT, built with HTML, CSS, and JavaScript.

## Tech Stack

- **HTML5** for page structure.
- **CSS3** for custom styling, with **Tailwind CSS 2** loaded from a CDN.
- **Vanilla JavaScript** for page interactions.
- **GSAP 3.7.1** and **ScrollReveal** for animations, loaded from CDNs.
- **Remix Icon 2.5** for icons, loaded from a CDN.
- **Inter** typography from Google Fonts.
- **Prettier 3.6.2** as the only npm dependency, used to format project files.

The site is static and has no frontend framework, backend, or build step configured.

## Folder Structure

```text
.
|-- css/
|   `-- style.css
|-- img/
|   |-- 02.jpg
|   `-- ai_logo.png
|-- js/
|   |-- animation.js
|   `-- script.js
|-- .editorconfig
|-- .gitignore
|-- AGENTS.md
|-- .prettierrc.json
|-- CNAME
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
|-- TODO.md
`-- tmp/
	`-- tmp.md
```

## Development

Install the development dependency with `npm install`.

Format the site files with `npm run format`, or check formatting without
changing files with `npm run format:check`.
