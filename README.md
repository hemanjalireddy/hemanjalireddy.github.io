# Hemanjali Reddy — Field Journal

Portfolio site built with [Astro](https://astro.build) and [rough.js](https://roughjs.com).

## Edit content

Almost everything lives in [`src/data/site.ts`](src/data/site.ts): headline, measurements, experience, projects (specimens), greenhouse, field notes, education and toolkit. Replace `public/Hemanjali_Reddy_Resume.pdf` to update the resume.

- A project with `hasPage: true` gets its own page at `/specimens/<slug>/`.
- `map: { x, y }` places it on the specimen map (x: building → evaluating, y: classic ML → LLMs & agents).

## Run locally

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

1. Create a repo named `hemanjalireddy.github.io` and push this folder to its `main` branch.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`. The site is served at https://hemanjalireddy.github.io.
