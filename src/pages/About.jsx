import { Link } from 'react-router-dom'
import { ArrowRight, Target, HeartHandshake, Eye, CheckCircle2 } from 'lucide-react'
import { brand, aboutImage } from '../data/content'
import FadeIn from '../components/FadeIn'
import FinalCTA from '../components/FinalCTA'

const stats = [
  { value: brand.eventsServed, label: 'Events served' },
  { value: '240+', label: 'Five-star reviews' },
  { value: '100%', label: 'Insured & licensed' },
  { value: '5.0/5', label: 'Average rating' },
]

const values = [
  {
    icon: Target,
    title: 'Our mission',
    text: 'Real cream, real fruit, real smiles. We make every batch fresh — no powders, no shortcuts.',
  },
  {
    icon: HeartHandshake,
    title: 'Our promise',
    text: 'On time, every time. We arrive early, set up in minutes and keep the line moving happily.',
  },
  {
    icon: Eye,
    title: 'Our vision',
    text: 'A photo-worthy dessert station that becomes the highlight of your celebration.',
  },
]

/**
 * About page — story, stats and values for the ice cream van.
 */
export default function About() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-lavender-100 via-cream-100 to-white pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              About us
            </span>
            <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl">
              The van behind the <span className="text-brand-gradient">sweetest moments</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              {brand.name} started with one van and a simple idea: real ice cream, served fresh, at
              the celebrations people will remember for years.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-card ring-1 ring-black/[0.03] lg:grid-cols-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08} className="text-center">
                <p className="text-3xl font-black text-brand-gradient sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <div className="relative">
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                loading="lazy"
                className="w-full rounded-3xl object-cover shadow-soft ring-1 ring-black/[0.05]"
              />
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white px-6 py-4 shadow-soft sm:-right-6">
                <p className="text-2xl font-black text-brand-gradient">2022</p>
                <p className="text-xs font-medium text-gray-500">Rolled out in Philadelphia</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Our story
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From one van to a thousand smiles
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              In 2022, we parked our first ice cream van at a neighbourhood block party. By the end
              of the day the line was still going and the answer was clear — this had to be our
              full-time job.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Today, {brand.name} brings fresh scoops to {brand.eventsServed} weddings, birthdays,
              corporate events and festivals. Every flavor is made daily with real cream and fruit,
              and every booking is handled by one dedicated team that shows up early and serves with
              a smile.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Quotes within 24 hours, no obligation',
                'Fully insured & licensed for every event',
                'Fresh, real ice cream made daily',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                  <CheckCircle2 size={18} className="shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="bg-brand-gradient group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Mission / values */}
      <section className="bg-cream-100 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <article className="group h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-card ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="bg-brand-gradient flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-card transition-transform duration-300 group-hover:scale-110">
                    <v.icon size={22} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-gray-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
