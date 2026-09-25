/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // SANY brand palette — red / black / white ONLY (no blue).
        sany: {
          red: '#E1141B',      // SANY signature red — accents, CTAs, active states
          'red-dark': '#B10E14',
          black: '#0A0A0A',    // near-black base for dark sections
          ink: '#141414',      // panel black
          coal: '#1C1C1C',     // raised surfaces on dark
          line: '#2A2A2A',     // hairline on dark
          fog: '#F4F4F3',      // off-white section base
          mist: '#EDEDEB',     // light panel
          steel: '#6B6B6B',    // muted grey text
          silver: '#9A9A9A',
        },
      },
      fontFamily: {
        // Single typeface across the whole site.
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.02em',
        eyebrow: '0.28em',
      },
      maxWidth: {
        site: '1400px',
      },
    },
  },
  plugins: [],
}
