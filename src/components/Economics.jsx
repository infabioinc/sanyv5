import { ArrowRight } from './Icons'

// NOTE: the figures below (EMI, daily earnings, uptime) are from the client
// brief and still require SANY's written sign-off before this goes public.
export default function Economics() {
  return (
    <section id="economics" className="relative overflow-hidden bg-sany-ink text-white">
      <img
        src="/scenes/economics.svg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sany-black via-sany-black/85 to-transparent" />

      <div className="relative mx-auto max-w-site section-pad py-16 lg:py-24">
        <p className="eyebrow mb-6">
          <span className="mr-3 text-sany-red">06</span> Ownership economics
        </p>
        <h2 className="display max-w-3xl text-3xl sm:text-4xl md:text-[2.8rem]">
          A truck never carries just a load.
          <br />
          It carries a business.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
          The economics are unforgiving — which is exactly why reliability, not
          discounting, is the argument that holds. A truck that stops is a day that
          doesn’t pay.
        </p>

        <div className="mt-12 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-3">
          {[
            ['~₹8,000', 'per-day EMI to service'],
            ['₹4–5,000', 'earned per working day'],
            ['98%', 'SANY fleet uptime'],
          ].map(([n, l]) => (
            <div key={l} className="bg-sany-ink px-6 py-8">
              <div className="text-3xl font-extrabold tabular-nums text-sany-red md:text-4xl">
                {n}
              </div>
              <div className="mt-2 text-sm text-white/60">{l}</div>
            </div>
          ))}
        </div>

        <a href="#cta" className="link-arrow mt-10 text-white hover:text-sany-red">
          See the reliability case
          <ArrowRight />
        </a>
      </div>
    </section>
  )
}
