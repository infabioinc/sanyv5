// Official SANY wordmark. Red PNG on transparent; use variant="white" on dark
// backgrounds (applies a brightness-0 invert to render it white).
export default function SanyLogo({ className = 'h-7 w-auto', variant = 'red' }) {
  const filterClass = variant === 'white' ? 'brightness-0 invert' : ''
  return (
    <img
      src="/images/sany-logo.png"
      alt="SANY"
      className={`${className} object-contain select-none ${filterClass}`}
    />
  )
}
