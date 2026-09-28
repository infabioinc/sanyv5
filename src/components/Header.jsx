import { useEffect, useState } from 'react'
import SanyLogo from './SanyLogo'

// Header styled to match the SANY v4 site: light utility strip, white main bar
// with the red SANY logo + search + REQUEST QUOTE, and a nav strip below.
// Links are wired to v5's on-page sections.
const navItems = [
  { label: 'Trucks', href: '#trucks' },
  { label: 'Applications', href: '#applications' },
  { label: 'Electric Technology', href: '#technology' },
  { label: 'Ownership', href: '#economics' },
  { label: 'Insights', href: '#insights' },
  { label: 'Services', href: '#service' },
]

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12.5 12.5 16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 3.5 8.5 7 5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white ${
        scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      {/* Main bar */}
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-6 md:px-10 lg:px-14">
        <a href="#top" aria-label="SANY" className="flex items-center">
          <SanyLogo variant="red" className="h-6 w-auto md:h-7" />
        </a>

        <div className="flex items-center gap-4">
          {/* Search */}
          <label className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-slate-400 focus-within:border-slate-400 md:flex">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="w-40 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none lg:w-56"
            />
          </label>

          <a
            href="#cta"
            className="hidden items-center gap-1.5 rounded-md bg-sany-black px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-sany-ink md:inline-flex"
          >
            Request Quote
            <Chevron />
          </a>

          {/* Mobile toggle */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-0.5 w-6 bg-slate-900 transition-transform ${open ? 'translate-y-[8px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-slate-900 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-slate-900 transition-transform ${open ? '-translate-y-[8px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Nav strip */}
      <nav className="hidden border-y border-slate-200 bg-slate-50/70 md:block">
        <div className="mx-auto flex h-12 max-w-site items-center gap-8 px-6 md:px-10 lg:px-14">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-[15px] font-semibold text-slate-800 transition-colors hover:text-sany-red"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-site flex-col px-6 py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3 text-[15px] font-semibold text-slate-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-md bg-sany-black px-5 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white"
            >
              Request Quote
              <Chevron />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
