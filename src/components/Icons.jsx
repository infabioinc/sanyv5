export function ArrowRight({ className = '' }) {
  return (
    <svg
      className={className}
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 6h15M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function ArrowDown({ className = '' }) {
  return (
    <svg
      className={className}
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 1v15M1 12l5 5 5-5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function Search({ className = '' }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 13.5 18 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function Logo({ className = '' }) {
  // Wordmark set in Manrope to keep to the single-typeface rule.
  return (
    <span
      className={`select-none text-2xl font-extrabold tracking-[0.14em] ${className}`}
      aria-label="SANY"
    >
      SANY
    </span>
  )
}
