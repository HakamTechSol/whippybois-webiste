import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { whyChooseUs } from '../data/content'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import Icon from './Icon'
import FloatingIcecream from './FloatingIcecream'

const benefits = [
  'Transparent packages, no hidden fees',
  'Fresh flavors for every budget',
  'Arrive early, setup done for you',
]

/**
 * "Why choose us" — three feature points on the left, paired with a
 * benefits + CTA banner on the right.
 */
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-20 bg-white py-14 sm:py-20">
      <FloatingIcecream
        src="/animation-image/images__1_-removebg-preview.png"
        size={110}
        mobileSize={40}
        top={8}
        right={20}
        opacity={0.65}
        parallax={60}
        scrollRotate={12}
        className="block"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why choose us"
          title="Booking with total peace of mind"
          subtitle="From the first quote to the last scoop, we make hiring your ice cream van effortless."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Feature points */}
          <div className="space-y-6">
            {whyChooseUs.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <div className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-card ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
                  <span className="bg-brand-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-card transition-transform duration-300 group-hover:scale-110">
                    <Icon name={f.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{f.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Benefits / CTA banner */}
          <FadeIn delay={0.2}>
            <div className="bg-brand-gradient relative overflow-hidden rounded-3xl p-8 text-white shadow-soft sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

              <h3 className="relative text-2xl font-extrabold leading-snug sm:text-3xl">
                A dessert station <br className="hidden sm:block" /> your guests will remember
              </h3>
              <ul className="relative mt-6 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-white/95">
                    <CheckCircle2 size={18} className="shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/about"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
