import { ArrowRight } from './Icons'

export default function CTA() {
  return (
    <section id="cta" className="bg-sany-red text-white">
      <div className="mx-auto max-w-site section-pad py-16 lg:py-20">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/70">
              Start beyond the limit
            </p>
            <h2 className="display mt-5 text-3xl sm:text-4xl md:text-5xl">
              Put a SANY to work
              <br />
              on your own route.
            </h2>
            <p className="mt-5 max-w-lg text-base text-white/85">
              Book a back-to-back trial against your current truck, or visit the
              Chakan plant. Bring the load. We’ll bring the proof.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-sany-black transition-colors hover:bg-sany-black hover:text-white"
            >
              Book a trial
              <ArrowRight />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/60 px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Schedule a plant visit
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
