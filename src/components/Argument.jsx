import { ArrowRight } from './Icons'

export default function Argument() {
  return (
    <section id="argument" className="bg-sany-fog text-sany-black">
      <div className="mx-auto grid max-w-site grid-cols-1 items-stretch lg:grid-cols-2">
        {/* left: the argument */}
        <div className="section-pad flex flex-col justify-center py-16 lg:py-24">
          <p className="eyebrow mb-8 text-sany-steel">
            <span className="mr-3 text-sany-sky-deep">02</span> The argument
          </p>
          <h2 className="display text-4xl text-sany-black sm:text-5xl md:text-[3.4rem]">
            <span className="block">Electric should change</span>
            <span className="block">the powertrain.</span>
            <span className="block">Not the expectation.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-sany-steel md:text-lg">
            Heavy-duty operations still demand the same fundamentals — load, uptime,
            distance, reliability and economics. Electrification must meet these
            realities, not ask operators to compromise.
          </p>
          <a
            href="#trucks"
            className="link-arrow mt-10 text-sany-black hover:text-sany-sky-deep"
          >
            Our approach
            <ArrowRight />
          </a>
        </div>

        {/* right: elevated-road image */}
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
          <img
            src="/scenes/argument.svg"
            alt="A SANY electric truck on an elevated expressway"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
