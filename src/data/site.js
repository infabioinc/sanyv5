// Central content model for the SANY India marketing site.
// Copy figures marked (SIGN-OFF) still require written confirmation from SANY
// before going public — see project handover guardrails.

export const nav = [
  { label: 'Trucks', href: '#trucks' },
  { label: 'Applications', href: '#applications' },
  { label: 'Electric Technology', href: '#technology' },
  { label: 'Ownership', href: '#economics' },
  { label: 'Services', href: '#service' },
  { label: 'Insights', href: '#insights' },
]

// The three-variant heavy-duty range (from HDT Consolidated Brochure).
export const trucks = [
  {
    model: '5565E',
    range: 'Long Range',
    role: 'Heavy-duty electric tractor\nfor long-distance logistics.',
    battery: '462 kWh',
    power: '480 kW',
    reach: '315 km',
    href: '#trucks',
    image: '/trucks/5565e.jpg', cutout: '/trucks/5565e-cutout.png',
    flagship: true,
  },
  {
    model: '5550E',
    range: 'Medium Range',
    role: 'Long-range electric tractor\nfor extended operations.',
    battery: '376 kWh',
    power: '360 kW',
    reach: '245 km',
    href: '#trucks',
    image: '/trucks/5550e.jpg', cutout: '/trucks/5550e-cutout.png',
  },
  {
    model: '5538E',
    range: 'Short Range',
    role: 'Electric tipper for heavy\nconstruction and industrial work.',
    battery: '282 kWh',
    power: '360 kW',
    reach: '189 km',
    href: '#trucks',
    image: '/trucks/5538e.jpg', cutout: '/trucks/5538e-cutout.png',
  },
]

// "The SANY difference" — the electric system, developed in-house.
export const components = [
  { n: '01', label: 'Cell', image: '/tech/cell.svg' },
  { n: '02', label: 'Battery', image: '/tech/battery.svg' },
  { n: '03', label: 'Motor', image: '/tech/motor.svg' },
  { n: '04', label: 'Rear Axle', image: '/tech/axle.svg' },
  { n: '05', label: 'Operating System', image: '/tech/os.svg' },
]

// Power of Six — the product platform (reliability first).
export const powerOfSix = [
  { n: '01', title: 'Reliability', copy: '98% uptime. A truck earns only when it moves.' },
  { n: '02', title: 'Operating economy', copy: 'Lower cost per kilometre, worked out over the whole day.' },
  { n: '03', title: 'Resale value', copy: 'Value that holds long after the first trip.' },
  { n: '04', title: 'Energy efficiency', copy: 'Five-level regeneration. More work from every unit.' },
  { n: '05', title: 'Payload', copy: 'Kerb-weight advantage — carry more, earn more.' },
  { n: '06', title: 'Durability', copy: 'Built for heat, dust, load and distance. Repeat.' },
]

// Application sectors (Indian deployments).
export const applications = [
  'Cement',
  'Steel',
  'Coal',
  'Port logistics',
  'Biomass',
  'Bauxite',
  'Pipes',
]

// ---- Footer (structure benchmarked to Volvo Trucks; content is SANY's own) ----
export const footerColumns = [
  {
    heading: 'Trucks',
    links: [
      { label: 'SANY 5565E', href: '#trucks' },
      { label: 'SANY 5550E', href: '#trucks' },
      { label: 'SANY 5538E', href: '#trucks' },
      { label: 'Compare the range', href: '#trucks' },
    ],
  },
  {
    heading: 'Applications',
    links: [
      { label: 'Cement & construction', href: '#applications' },
      { label: 'Steel & metals', href: '#applications' },
      { label: 'Coal & mining', href: '#applications' },
      { label: 'Port logistics', href: '#applications' },
    ],
  },
  {
    heading: 'Ownership',
    links: [
      { label: 'Book a back-to-back trial', href: '#cta' },
      { label: 'Plant visit — Chakan', href: '#cta' },
      { label: 'Charging & uptime', href: '#technology' },
      { label: 'Warranty & agreements', href: '#service' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Service network', href: '#service' },
      { label: 'Parts & support', href: '#service' },
      { label: 'Telematics & controller', href: '#technology' },
      { label: 'Driver training', href: '#service' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About SANY India', href: '#' },
      { label: 'News & insights', href: '#insights' },
      { label: 'Careers', href: '#' },
      { label: 'Contact us', href: '#cta' },
    ],
  },
]

export const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/sanytruckindia' },
  { label: 'Instagram', href: 'https://www.instagram.com/sanytruckindia' },
  { label: 'Facebook', href: 'https://www.facebook.com/sanytruckindia' },
  { label: 'YouTube', href: 'https://www.youtube.com/@sanytruckindia' },
]

export const legal = [
  { label: 'sanyglobal.com', href: 'https://www.sanyglobal.com' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Cookie Settings', href: '#' },
]
