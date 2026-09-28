import { powerOfSix } from '../data/site'

export default function PowerOfSix() {
  return (
    <section id="power" className="bg-sany-black text-white">
      <div className="mx-auto max-w-site section-pad py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">
            <span className="mr-3 text-sany-sky">03</span> The power of six
          </p>
          <h2 className="display text-4xl sm:text-5xl md:text-[3.2rem]">
            Six reasons.
            <br />
            One business outcome — <span className="text-sany-sky">keep moving.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {powerOfSix.map((p, i) => (
            <div
              key={p.n}
              className="group border-b border-white/10 p-8 transition-colors hover:bg-sany-ink sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r"
            >
              <span className="text-sm font-bold text-sany-sky">{p.n}</span>
              <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
