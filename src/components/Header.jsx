import { useEffect, useState } from 'react'
import { nav } from '../data/site'
import { ArrowRight, Search } from './Icons'
import SanyLogo from './SanyLogo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-sany-black/95 backdrop-blur'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-site items-center justify-between px-6 md:px-10 lg:px-14">
        <a href="#top" className="flex items-center text-white">
          <SanyLogo variant="white" className="h-6 w-auto md:h-7" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-[13px] font-medium text-white/85 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-sany-sky transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="hidden text-white/85 transition-colors hover:text-white md:block"
          >
            <Search />
          </button>
          <a
            href="#service"
            className="hidden text-[13px] font-medium text-white/85 transition-colors hover:text-white md:block"
          >
            Find a Dealer
          </a>
          <a href="#cta" className="btn-primary hidden !py-2.5 !px-4 text-[12px] md:inline-flex">
            Talk to SANY
            <ArrowRight />
          </a>

          {/* Mobile toggle */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-white transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span className={`h-px w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-px w-6 bg-white transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-sany-black lg:hidden">
          <nav className="mx-auto flex max-w-site flex-col px-6 py-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-medium text-white/85"
              >
                {item.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="btn-primary mt-4 justify-center">
              Talk to SANY
              <ArrowRight />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
