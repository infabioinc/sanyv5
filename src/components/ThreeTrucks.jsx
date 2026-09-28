import { trucks } from '../data/site'
import { ArrowRight } from './Icons'

export default function ThreeTrucks() {
  return (
    <section id="trucks" className="bg-sany-black text-white">
      <div className="mx-auto max-w-site section-pad py-16 lg:py-24">
        {/* header row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6">
              <span className="mr-3 text-sany-sky">05</span> Our trucks
            </p>
            <h2 className="display text-4xl sm:text-5xl md:text-[3.4rem]">
              <span className="block">Three trucks.</span>
              <span className="block">Three jobs.</span>
            </h2>
          </div>
          <div className="max-w-sm md:text-right">
            <p className="text-sm leading-relaxed text-white/60">
              Different operations demand different solutions. The SANY electric
              range is built around real work.
            </p>
            <a href="#applications" className="link-arrow mt-5 text-white hover:text-sany-sky md:justify-end">
              Explore all trucks
              <ArrowRight />
            </a>
          </div>
        </div>

        {/* truck cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-white/10 md:grid-cols-3">
          {trucks.map((t) => (
            <article key={t.model} className="group relative flex flex-col bg-sany-black">
              <div className="relative aspect-[16/10] overflow-hidden bg-sany-ink">
                <img
                  src={t.image}
                  alt={`SANY ${t.model} — ${t.range}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {t.flagship && (
                  <span className="absolute left-4 top-4 bg-sany-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]">
                    Flagship
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute bottom-4 left-4 text-3xl font-extrabold tracking-wide">
                  {t.model}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="whitespace-pre-line text-sm text-white/70">{t.role}</p>

                <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
                  {[
                    ['Battery', t.battery],
                    ['Motor', t.power],
                    ['Range', t.reach],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-white/40">{k}</dt>
                      <dd className="mt-1 text-base font-bold tabular-nums">{v}</dd>
                    </div>
                  ))}
                </dl>

                <a href={t.href} className="link-arrow mt-6 text-white hover:text-sany-sky">
                  Explore
                  <ArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
