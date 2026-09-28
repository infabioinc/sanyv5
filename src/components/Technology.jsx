import { components } from '../data/site'
import { ArrowRight } from './Icons'

export default function Technology() {
  return (
    <section id="technology" className="bg-sany-mist text-sany-black">
      <div className="mx-auto max-w-site section-pad py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* left copy */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-8 text-sany-steel">
              <span className="mr-3 text-sany-sky-deep">06</span> The SANY difference
            </p>
            <h2 className="display text-3xl text-sany-black sm:text-4xl md:text-[2.9rem]">
              <span className="block">The truck is SANY.</span>
              <span className="block">So is what makes</span>
              <span className="block">it electric.</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-sany-steel">
              From core components to intelligent control, SANY develops more of the
              electric system in-house — for higher performance, greater reliability
              and a real-world advantage.
            </p>
            <a href="#power" className="link-arrow mt-9 text-sany-black hover:text-sany-sky-deep">
              Explore our technology
              <ArrowRight />
            </a>
          </div>

          {/* component row */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-black/10 sm:grid-cols-3 lg:grid-cols-5">
            {components.map((c) => (
              <figure
                key={c.n}
                className="group flex min-h-[150px] flex-col justify-between bg-sany-mist p-5 transition-colors hover:bg-white"
              >
                <span className="text-sm font-bold tabular-nums text-sany-sky-deep">{c.n}</span>
                <figcaption className="text-[15px] font-bold uppercase leading-tight tracking-[0.04em] text-sany-black">
                  {c.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
