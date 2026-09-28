import { trucks } from '../data/site'
import { ArrowRight } from './Icons'

export default function ThreeTrucks() {
  return (
    <section id="trucks" className="bg-white text-sany-black">
      <div className="mx-auto max-w-site section-pad py-16 lg:py-24">
        {/* header row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6 text-sany-steel">
              <span className="mr-3 text-sany-sky-deep">05</span> Our trucks
            </p>
            <h2 className="display text-4xl sm:text-5xl md:text-[3.4rem]">
              <span className="block">Three trucks.</span>
              <span className="block">Three jobs.</span>
            </h2>
          </div>
          <div className="max-w-sm md:text-right">
            <p className="text-sm leading-relaxed text-sany-steel">
              Different operations demand different solutions. The SANY electric
              range is built around real work.
            </p>
            <a href="#applications" className="link-arrow mt-5 text-sany-black hover:text-sany-sky-deep md:justify-end">
              Explore all trucks
              <ArrowRight />
            </a>
          </div>
        </div>

        {/* truck cards — studio cutouts, minimal */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
          {trucks.map((t) => (
            <article key={t.model} className="group flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={t.cutout}
                  alt={`SANY ${t.model}`}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-sany-black">
                SANY {t.model}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sany-steel">{t.role}</p>
              <a href={t.href} className="link-arrow mt-5 text-sany-black hover:text-sany-sky-deep">
                Read more about SANY {t.model}
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
