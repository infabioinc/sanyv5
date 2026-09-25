import { applications } from '../data/site'

export default function Applications() {
  return (
    <section id="applications" className="border-y border-white/10 bg-sany-black text-white">
      <div className="mx-auto max-w-site section-pad py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow text-white/70">Proven in Indian operations</p>
          <p className="max-w-md text-sm text-white/50">
            Deployed across the sectors that move India — from cement and steel to
            coal, ports and beyond.
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-2 gap-y-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {applications.map((a, i) => (
            <li key={a} className="flex items-center">
              <span className="text-white/85 transition-colors hover:text-white">{a}</span>
              {i < applications.length - 1 && (
                <span className="mx-3 text-sany-sky md:mx-4">/</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
