# Deploy to Vercel

The repo is deploy-ready (Vite auto-detected; `vercel.json` included). Pick one path.

## Fastest — Vercel CLI (one command)

From the project folder on your Mac:

```bash
npm i -g vercel      # once, if you don't have it
vercel               # first run links the project (accept the Vite defaults)
vercel --prod        # ships to production and prints the live URL
```

The first `vercel` run asks a few questions — scope (your account/team),
project name (e.g. `sany-heavy-duty`), and it auto-detects **Vite** with build
`npm run build` and output `dist`. Just accept the defaults.

## Or — GitHub + Vercel (auto-deploy on every push)

This matches how `sanyv3` already works.

```bash
# create the repo under infabioinc and push
gh repo create infabioinc/sany-heavy-duty --private --source=. --push
# (or: create it on github.com, then)
git remote add origin https://github.com/infabioinc/sany-heavy-duty.git
git push -u origin main
```

Then on **vercel.com → Add New → Project → Import** the repo. Framework preset
**Vite** is detected automatically (build `npm run build`, output `dist`). Every
push to `main` redeploys.

## Notes

- No environment variables are required — the site is fully static.
- The hero video (`public/hero/hero.mp4`, ~4.2 MB) is committed in the repo, so
  it ships as-is. If you later want it on a CDN/streaming host instead, swap the
  `<source src>` in `src/components/Hero.jsx`.
- Custom domain: add it in Vercel → Project → Settings → Domains once live.
