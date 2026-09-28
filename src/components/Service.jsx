import { ArrowRight } from './Icons'

// Service & uptime — the reassurance a new-entrant brand has to earn.
// Content mirrors the sanctioned Ownership/Services footer copy; no new figures.
const pillars = [
  ['Service network', 'Workshop and roadside support along the corridors you actually run.'],
  ['Parts & support', 'Genuine parts and trained technicians, close to your operation.'],
  ['Charging & uptime', 'Charging guidance and telematics that keep every vehicle moving.'],
  ['Warranty & agreements', 'Clear warranty and service agreements, in place from day one.'],
]

export default function Service() {
  return (
    <section id="service" className="bg-white text-sany-black">
      <div className="mx-auto max-w-site section-pad py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 text-sany-steel">
            <span className="mr-3 text-sany-sky-deep">07</span> Service &amp; uptime
          </p>
          <h2 className="display text-3xl text-sany-black sm:text-4xl md:text-[2.8rem]">
            A truck is only as good
            <br />
            as the support behind it.
          </h2>
          <p className="mt-7 text-base leading-relaxed text-sany-steel">
            SANY India is building a service and uptime network along the country’s
            busiest freight corridors — so a truck spends its day earning, not waiting.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([title, copy]) => (
            <div key={title} className="border-t border-sany-mist pt-5">
              <h3 className="text-lg font-bold text-sany-black">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sany-steel">{copy}</p>
            </div>
          ))}
        </div>

        <a href="#cta" className="link-arrow mt-14 text-sany-black hover:text-sany-sky-deep">
          Talk to the SANY team
          <ArrowRight />
        </a>
      </div>
    </section>
  )
}
