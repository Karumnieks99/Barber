# GitHub Pages Deployment — BLADES & CO

**Date:** 2026-05-23
**Status:** Approved

## Goal

Publish the BLADES & CO landing page to GitHub Pages with a live URL and a polished README.

## Live URL

`https://karumnieks99.github.io/Barber/`

## Changes Required

### 1. `vite.config.js`
Add `base: '/Barber/'` to the Vite config so all built asset paths resolve correctly when served under a sub-path.

### 2. `.github/workflows/deploy.yml`
GitHub Actions workflow triggered on every push to `master`:
- Checkout repo
- Setup Node 20
- `npm ci`
- `npm run build`
- Deploy `dist/` to `gh-pages` branch using `peaceiris/actions-gh-pages@v3`

GitHub Pages is configured to serve from the `gh-pages` branch.

### 3. `README.md`
Sections:
- Project title (BLADES & CO) with live link badge
- Brief description (premium barbershop landing page, demo project)
- Tech stack: React 19, Vite, Tailwind CSS v3, Framer Motion
- Local dev: `npm install` / `npm run dev`

## GitHub Setup (manual — one-time)
1. Create repo `Barber` at github.com/karumnieks99
2. `git remote add origin https://github.com/karumnieks99/Barber.git`
3. `git push -u origin master`
4. In repo Settings → Pages → Source: `gh-pages` branch, `/ (root)`

After the first Actions run completes, the site is live.

## Out of Scope
- Custom domain
- Environment-specific configs
- PR preview deployments
