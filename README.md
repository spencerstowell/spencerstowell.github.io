# Spencer Stowell Portfolio

Framework-free static portfolio published with GitHub Pages at `https://spencerstowell.github.io/`.

Open `index.html` directly in a browser, or serve this folder with a static-file server (for example `python -m http.server`). There is no build step; pushing to `main` publishes the site.

Project index data is configured at the top of `script.js`; project records are static pages under `projects/`. The site includes online CV, publication, and presentation pages at `/cv/`, `/publications/`, and `/presentations/`.

## Images

Images in `assets/` are web-sized copies (2000 px long edge, JPEG quality 82). Full-resolution originals are kept locally in `_source-assets/`, which is git-ignored. Resize new photos before committing them.

## Domain

Social-preview tags (`og:url`, `og:image`, `canonical`) use `https://spencerstowell.github.io/`. If a custom domain is configured later, update those URLs and add a `CNAME` file.
