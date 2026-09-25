import { footerColumns, social, legal } from '../data/site'
import { ArrowRight, Logo } from './Icons'
import SiteCredit from './SiteCredit'

export default function Footer() {
  return (
    <footer className="bg-sany-black text-white">
      {/* pre-footer strip — dealer / contact (Volvo pattern) */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-6 section-pad py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-semibold">
            Find your nearest SANY dealer or talk to the team.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#service" className="btn-ghost !py-2.5">
              Find a Dealer
              <ArrowRight />
            </a>
            <a href="#cta" className="btn-primary !py-2.5">
              Talk to SANY
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* link columns */}
      <div className="mx-auto max-w-site section-pad py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              SANY India — electric heavy-duty trucks, built for the loads,
              distances and operating realities of modern India.
            </p>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* social + region row */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-6">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/75 transition-colors hover:text-sany-red"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="inline-block h-2 w-3 rounded-[1px] bg-sany-red" />
            India — English
          </div>
        </div>
      </div>

      {/* legal bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-5 section-pad py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45">
            <span>© {new Date().getFullYear()} SANY India. All rights reserved.</span>
            {legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
          <SiteCredit />
        </div>
      </div>
    </footer>
  )
}
