// Generates branded placeholder SVGs so the build renders intentionally.
// Replace the files in /public with the real SANY HD Images (Drive:
// Sany/Images/HD Images — _DSC0181 front 3/4, _DSC0141 side, etc.) before launch.
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public')

const write = (rel, svg) => {
  const p = resolve(root, rel)
  mkdirSync(dirname(p), { recursive: true })
  writeFileSync(p, svg.trim() + '\n')
}

// Accent used in placeholder art — sky blue, to match the palette.
// (The one red spot in the UI is the Flagship badge, not these graphics.)
const RED = '#38BDF8'

// ---- cinematic truck scene (hero + cards) ----
const scene = (w, h, { light = false, label = '' } = {}) => {
  const sky1 = light ? '#e9e9e7' : '#141414'
  const sky2 = light ? '#f6f6f4' : '#0a0a0a'
  const road = light ? '#d9d9d6' : '#101010'
  const truck = light ? '#2a2a2a' : '#e6e6e6'
  const cab = light ? '#3a3a3a' : '#f4f4f4'
  const horizonY = Math.round(h * 0.6)
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${sky1}"/>
      <stop offset="1" stop-color="${sky2}"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${RED}" stop-opacity="0"/>
      <stop offset="1" stop-color="${RED}" stop-opacity="${light ? 0.12 : 0.22}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#sky)"/>
  <rect x="0" y="${horizonY}" width="${w}" height="${h - horizonY}" fill="${road}"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <line x1="0" y1="${horizonY}" x2="${w}" y2="${horizonY}" stroke="${RED}" stroke-width="2" opacity="0.55"/>
  <!-- lane markers in perspective -->
  <g stroke="${light ? '#c7c7c4' : '#242424'}" stroke-width="3">
    ${Array.from({ length: 6 })
      .map((_, i) => {
        const y = horizonY + 14 + i * ((h - horizonY) / 6)
        const len = 20 + i * 16
        const cx = w * 0.5
        return `<line x1="${cx - len / 2}" y1="${y}" x2="${cx + len / 2}" y2="${y}"/>`
      })
      .join('\n    ')}
  </g>
  <!-- heavy-duty tractor silhouette -->
  <g transform="translate(${w * 0.5}, ${horizonY}) scale(${(w / 1600).toFixed(3)})">
    <g transform="translate(-360,-250)">
      <rect x="120" y="60" width="230" height="200" rx="14" fill="${cab}"/>
      <rect x="150" y="90" width="150" height="70" rx="8" fill="${light ? '#cfcfcc' : '#3a3a3a'}" opacity="0.6"/>
      <rect x="350" y="20" width="360" height="240" rx="10" fill="${truck}"/>
      <rect x="118" y="252" width="600" height="26" fill="${light ? '#1c1c1c' : '#0d0d0d'}"/>
      <circle cx="215" cy="285" r="40" fill="#0d0d0d"/><circle cx="215" cy="285" r="16" fill="${RED}"/>
      <circle cx="470" cy="285" r="40" fill="#0d0d0d"/><circle cx="470" cy="285" r="16" fill="#3a3a3a"/>
      <circle cx="560" cy="285" r="40" fill="#0d0d0d"/><circle cx="560" cy="285" r="16" fill="#3a3a3a"/>
      <rect x="120" y="150" width="10" height="34" fill="${RED}"/>
    </g>
  </g>
  ${label ? `<text x="${w - 18}" y="${h - 16}" text-anchor="end" font-family="Manrope, sans-serif" font-size="13" fill="${light ? '#9a9a9a' : '#5a5a5a'}" letter-spacing="1">${label}</text>` : ''}
</svg>`
}

// ---- technology component tile (cell / battery / motor / axle / os) ----
const part = (label) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400" role="img" aria-label="${label}">
  <defs>
    <radialGradient id="g" cx="50%" cy="42%" r="60%">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#e8e8e6"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" fill="url(#g)"/>
  <g fill="none" stroke="#2a2a2a" stroke-width="4">
    <rect x="120" y="120" width="160" height="160" rx="14"/>
    <line x1="120" y1="160" x2="280" y2="160"/>
    <line x1="120" y1="240" x2="280" y2="240"/>
    <line x1="200" y1="120" x2="200" y2="280"/>
  </g>
  <rect x="150" y="150" width="40" height="40" fill="${RED}" opacity="0.85"/>
  <text x="200" y="330" text-anchor="middle" font-family="Manrope, sans-serif" font-size="18" font-weight="700" fill="#141414" letter-spacing="3">${label.toUpperCase()}</text>
</svg>`

// NOTE: the hero video, hero stills, truck cards and scene bands now use REAL
// SANY footage (cut from the brand film — see public/hero/README.md), so this
// script only regenerates the technology tiles below. The scene() helper is
// kept for reference / regenerating a placeholder if a real asset is missing.
void scene

// Technology parts
;['Cell', 'Battery', 'Motor', 'Rear Axle', 'OS'].forEach((p) =>
  write(`tech/${p.toLowerCase().replace(/\s+/g, '')}.svg`, part(p)),
)
// filename fix for rear axle / os to match data
write('tech/axle.svg', part('Rear Axle'))
write('tech/os.svg', part('OS'))

console.log('placeholders generated ->', root)
