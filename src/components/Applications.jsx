import { applications } from '../data/site'

export default function Applications() {
  return (
    <section id="applications" className="border-y border-sany-mist bg-white text-sany-black">
      <div className="mx-auto max-w-site section-pad py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow text-sany-steel">Proven in Indian operations</p>
          <p className="max-w-md text-sm text-sany-steel">
            Deployed across the sectors that move India — from cement and steel to
            coal, ports and beyond.
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-2 gap-y-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {applications.map((a, i) => (
            <li key={a} className="flex items-center">
              <span className="text-sany-black transition-colors hover:text-sany-sky-deep">{a}</span>
              {i < applications.length - 1 && (
                <span className="mx-3 text-sany-sky-deep md:mx-4">/</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
