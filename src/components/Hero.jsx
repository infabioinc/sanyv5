import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from './Icons'

// Rotating hero copy. The background is a looping video of the real SANY truck;
// the SVG frame under it is the graceful fallback until the mp4 is present.
const frames = [
  {
    fallback: '/hero/hero-1.jpg',
    eyebrow: 'Heavy-duty electric for India',
    title: ['Keep your', 'business', 'moving.'],
    sub: 'Built for the loads, distances and uptime\nthat real Indian operations demand.',
  },
  {
    fallback: '/hero/hero-2.jpg',
    eyebrow: 'Reliability, engineered in',
    title: ['A truck earns', 'only when', 'it moves.'],
    sub: '98% uptime — built to keep business moving,\nlong after the first trip.',
  },
  {
    fallback: '/hero/hero-3.jpg',
    eyebrow: 'SANY 5565E · Long Range',
    title: ['Range isn’t', 'a number. It’s', 'how far the day goes.'],
    sub: '462 kWh · 480 kW · up to 315 km on a single charge.',
  },
  {
    fallback: '/hero/hero-4.jpg',
    eyebrow: 'The SANY difference',
    title: ['The truck', 'is SANY. So is', 'what makes it electric.'],
    sub: 'Cell, battery, motor, axle and software —\ndeveloped in-house.',
  },
  {
    fallback: '/hero/hero-5.jpg',
    eyebrow: 'Where others end',
    title: ['Their', 'maximum.', 'Our beginning.'],
    sub: 'Where conventional heavy duty reaches its limit,\nSANY starts looking further.',
  },
]

// Drop the real footage at this path (public/hero/hero.mp4) and it takes over
// automatically. See public/hero/README.md for the source clip.
const HERO_VIDEO = '/hero/hero.mp4'

export default function Hero() {
  const [active, setActive] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % frames.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-sany-black">
      {/* Fallback background — rotating scene frames (shown until video is ready) */}
      {frames.map((f, i) => (
        <img
          key={f.fallback}
          src={f.fallback}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${
            i === active && !videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Real SANY hero video — fades in once it can play */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero/hero-poster.jpg"
        onCanPlay={() => setVideoReady(true)}
        onError={() => setVideoReady(false)}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Cinematic scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />

      {/* Copy */}
      <div className="relative mx-auto flex h-full max-w-site flex-col justify-end px-6 pb-24 pt-40 md:px-10 lg:px-14">
        <p className="eyebrow mb-6">{frames[active].eyebrow}</p>
        <h1 className="display max-w-[16ch] text-2xl leading-[1.1] text-white sm:text-3xl lg:text-4xl">
          {frames[active].title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-7 max-w-md whitespace-pre-line text-base text-white/75 md:text-lg">
          {frames[active].sub}
        </p>

        <a href="#cta" className="link-arrow mt-10 text-white/90 hover:text-white">
          <span className="rule mr-1" />
          Book a trial
          <ArrowDown className="ml-1" />
        </a>
      </div>

      {/* Slider pagination */}
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
