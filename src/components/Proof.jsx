import { ArrowRight } from './Icons'

const stats = [
  ['57', 'back-to-back trials completed'],
  ['2', 'competitors accepted the open challenge'],
  ['1/3', 'share of the genuinely contested market'],
]

export default function Proof() {
  return (
    <section id="insights" className="bg-sany-fog text-sany-black">
      <div className="mx-auto max-w-site section-pad py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-6 text-sany-steel">
              <span className="mr-3 text-sany-red">07</span> The proof
            </p>
            <h2 className="display text-3xl text-sany-black sm:text-4xl md:text-[2.8rem]">
              We didn’t claim it.
              <br />
              We ran it — side by side.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-sany-steel">
              Identical load. Identical route. Identical traffic. Two loaded vehicles,
              run by the customers themselves. An open challenge was issued to the
              market — and the results are why repeat orders have already begun.
            </p>
            <a href="#cta" className="link-arrow mt-9 text-sany-black hover:text-sany-red">
              Read the trial results
              <ArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 self-center sm:grid-cols-3 lg:grid-cols-1">
            {stats.map(([n, l]) => (
              <div
                key={l}
                className="flex items-baseline gap-5 border-t-2 border-sany-red pt-5"
              >
                <span className="text-4xl font-extrabold tabular-nums text-sany-black md:text-5xl">
                  {n}
                </span>
                <span className="text-sm leading-snug text-sany-steel">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
