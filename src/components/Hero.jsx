import { useEffect, useState } from 'react'
import { ArrowDown } from './Icons'

const frames = [
  {
    src: '/hero/frame-1.svg',
    eyebrow: 'SANY Electric Heavy-Duty Trucks',
    title: ['Heavy duty', 'has entered', 'a new era.'],
    sub: 'Built for the loads, distances and operating\nrealities of modern India.',
  },
  {
    src: '/hero/frame-2.svg',
    eyebrow: 'Reliability, engineered in',
    title: ['A truck earns', 'only when', 'it moves.'],
    sub: '98% uptime — built to keep business moving,\nlong after the first trip.',
  },
  {
    src: '/hero/frame-3.svg',
    eyebrow: 'SANY 5565E · Long Range',
    title: ['Range isn’t', 'a number. It’s', 'how far the day goes.'],
    sub: '462 kWh · 480 kW · up to 315 km on a single charge.',
  },
  {
    src: '/hero/frame-4.svg',
    eyebrow: 'The SANY difference',
    title: ['The truck', 'is SANY. So is', 'what makes it electric.'],
    sub: 'Cell, battery, motor, axle and software —\ndeveloped in-house.',
  },
  {
    src: '/hero/frame-5.svg',
    eyebrow: 'Where others end',
    title: ['Their', 'maximum.', 'Our beginning.'],
    sub: 'Where conventional heavy duty reaches its limit,\nSANY starts looking further.',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % frames.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-sany-black">
      {/* frames */}
      {frames.map((f, i) => (
        <img
          key={f.src}
          src={f.src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* copy */}
      <div className="relative mx-auto flex h-full max-w-site flex-col justify-center px-6 pt-16 md:px-10 lg:px-14">
        <p className="eyebrow mb-6">{frames[active].eyebrow}</p>
        <h1 className="display max-w-[15ch] text-[13vw] leading-[0.9] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {frames[active].title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-7 max-w-md whitespace-pre-line text-base text-white/75 md:text-lg">
          {frames[active].sub}
        </p>

        <a href="#argument" className="link-arrow mt-10 text-white/90 hover:text-white">
          <span className="rule mr-1" />
          Explore the range
          <ArrowDown className="ml-1" />
        </a>
      </div>

      {/* slider pagination */}
      <div className="absolute bottom-8 right-6 flex items-center gap-4 md:right-10 lg:right-14">
        {frames.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`text-sm tabular-nums transition-colors ${
              i === active ? 'font-bold text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {String(i + 1).padStart(2, '0')}
            {i === active && <span className="mx-auto mt-1 block h-px w-full bg-sany-sky" />}
          </button>
        ))}
      </div>
    </section>
  )
}
