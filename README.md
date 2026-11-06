# 87px.co.uk

The 87PX studio site. Plain HTML, CSS and JS with no build step.

- `index.html`: the whole page, styles and scripts inline
- `assets/`: images, logos and the Films loop (`films.mp4` / `films.webm`)
- `netlify.toml`: deploy settings (copies the site into `dist/` and publishes that)

To preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.

## Search

- `robots.txt` and `sitemap.xml` are copied into `dist/` on production builds. Deploy previews and branch deploys get a disallow-all `robots.txt` so they stay out of Google.
- Every page has a canonical URL on https://87px.co.uk (clean paths: `/privacy`, `/cookies`, `/terms`).
- `index.html` carries Organization, WebSite and SoftwareApplication (SHFTRS) structured data, and links to https://shftrs.app/ from the client strip and the Side quests section.
- Update `<lastmod>` in `sitemap.xml` when the page content changes.
