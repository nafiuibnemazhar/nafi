# Nafi Siam — ORM Executive & AI Engineer

Personal profile site built with Next.js (static export). Deploys to both
**Vercel** and **GitHub Pages** from the same repository.

## Edit content

All content lives in one file: `lib/site.js` (identity, services, projects).
Page copy is in `app/*/page.js`. Photo: `public/nafi-siam.png`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy 1 — Vercel

1. Push this folder to a GitHub repo (e.g. `nafi-siam`):
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nafi-siam.git
   git push -u origin main
   ```
2. vercel.com → **Add New Project** → import the repo → Deploy.
   Vercel auto-detects Next.js. No settings needed — `lib/site.js` reads
   Vercel's auto-injected `VERCEL_PROJECT_PRODUCTION_URL` at build time, so
   canonicals/sitemap/schema resolve to the real deployed URL with zero
   manual config (no domain is hardcoded in source).
3. If you ever need to force a specific URL (custom domain, staging, etc.),
   set `BASE_URL` in the project's environment variables — it always wins
   over the Vercel auto-detection.

## Deploy 2 — GitHub Pages (same repo)

GitHub Pages serves the static build from the `gh-pages` branch, under a
subpath (`/nafi-siam`), so build with the base path set:

```bash
BASE_PATH=/nafi-siam BASE_URL=https://YOUR_USERNAME.github.io/nafi-siam npm run build
npx gh-pages -d out
```

Then: repo **Settings → Pages → Source: Deploy from a branch → gh-pages / root**.

Your second URL: `https://YOUR_USERNAME.github.io/nafi-siam/`

> Note: the GitHub Pages build bakes in its own canonical/sitemap URLs via
> `BASE_URL`. If you prefer the Vercel site to be the "primary" in Google's
> eyes, you can instead keep `BASE_URL` pointed at the Vercel URL so the
> GitHub Pages copy canonicalizes to Vercel — either strategy works, pick one.

## SEO already included

- Name in `<title>` and `<h1>` on every page
- JSON-LD: Person, WebSite, ProfessionalService, Service, AboutPage,
  ContactPage, BreadcrumbList, ItemList/CreativeWork
- Self-referencing canonicals on every page
- `sitemap.xml`, `robots.txt`, `llms.txt`
- Open Graph tags, semantic HTML, mobile responsive
