# SANY India — Electric Heavy-Duty Trucks

Marketing site for SANY India's heavy-duty electric truck range (5565E · 5550E · 5538E).
Built for Fabulous Media. Single-page homepage in the layout of the approved mockup,
extended with the reliability / economics / proof argument from the client brief, and a
footer benchmarked to the Volvo Trucks structure.

## Stack

- **Vite** + **React 18**
- **Tailwind CSS 3**
- **Manrope** (the single site typeface, via Google Fonts)

## Brand rules baked in

- Palette is **SANY red + black + white only** — no blue in the UI. Tokens live in
  `tailwind.config.js` under `theme.extend.colors.sany`.
- One typeface: **Manrope**, everywhere.
- The official Fabulous Media / GoCommercially **site credit** is in the footer
  (`src/components/SiteCredit.jsx`).

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

```
public/               placeholder imagery (SVG) — swap for real photography
  hero/               5 hero slider frames
  trucks/             5565e / 5550e / 5538e cards
  tech/               cell / battery / motor / axle / os tiles
  scenes/             argument + economics band images
src/
  data/site.js        nav, trucks, Power of Six, applications, footer content
  components/
    Header.jsx        sticky nav + mobile menu
    Hero.jsx          5-frame hero slider (mockup section 01)
    Argument.jsx      section 02 — "Electric should change the powertrain"
    ThreeTrucks.jsx   section 03 — the three-variant range
    Applications.jsx  Indian deployment sectors
    Technology.jsx    section 04 — "The SANY difference" component row
    PowerOfSix.jsx    the product platform
    Economics.jsx     ownership economics (EMI vs earnings)
    Proof.jsx         57 back-to-back trials + open challenge
    CTA.jsx           book a trial / plant visit
    Footer.jsx        Volvo-benchmarked footer + SiteCredit
  App.jsx             page assembly
```

## Swapping in the real assets

Everything in `/public` is a **branded placeholder**. Replace with the real SANY
photography from the client Drive (`Sany/Images/HD Images` — `_DSC0181` front 3/4,
`_DSC0141` side profile, etc.) and the brochure interior page. Keep the same file
names/paths (or update the `image` fields in `src/data/site.js`). Recommended: real
JPG/WebP for the hero frames and truck cards; keep the tech tiles on clean white.

## Figures pending SANY sign-off

Per the project handover, these still need SANY's **written** confirmation before the
site goes public: 98% uptime, the per-day EMI vs earnings economics, the "Power of Six"
claims, the 57-trials / open-challenge numbers, and market-share. They are marked with
code comments where used (`Economics.jsx`, `Proof.jsx`, `data/site.js`).

## SEO foundation (started)

`index.html` ships India-first `<title>`, meta description, canonical, robots and
Open Graph tags. Still to do for the "search is the first job" mandate: real
`robots.txt` + `sitemap.xml`, hreflang for India-vs-global routing, and JSON-LD.

---

Site credit: FabulousMedia · GoCommercially
