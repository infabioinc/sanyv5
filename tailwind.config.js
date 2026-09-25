/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette — sky blue + black + white. Red is used in ONE place only
        // (the "Flagship" badge) as a single deliberate accent.
        sany: {
          sky: '#38BDF8',        // light / sky blue — primary accent
          'sky-deep': '#0EA5E9', // buttons / links on light (contrast with white)
          'sky-dark': '#0284C7', // hover
          red: '#E1141B',        // reserved — Flagship badge only
          black: '#0A0A0A',      // near-black base for dark sections
          ink: '#141414',        // panel black
          coal: '#1C1C1C',       // raised surfaces on dark
          line: '#2A2A2A',       // hairline on dark
          fog: '#F4F4F3',        // off-white section base
          mist: '#EDEDEB',       // light panel
          steel: '#6B6B6B',      // muted grey text
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
