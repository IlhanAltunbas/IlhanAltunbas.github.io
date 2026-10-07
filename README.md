# ilhanaltunbas.github.io

Personal site: a live demo of [DUS Assistant](https://github.com/IlhanAltunbas/DusAssistant), the evaluation case study behind it, and other projects.

Astro (static), deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
cp .env.example .env   # fill in PUBLIC_DUS_API_KEY for the live demo
npm run dev
```

The demo's key ends up in the built page, like in the mobile app; cost is bounded by the backend's per-IP and global daily limits.
