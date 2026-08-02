import { Star, Quote } from 'lucide-react'
import { testimonials, brand } from '../data/content'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'

/**
 * "Testimonials" — quote cards from hosts who booked the van.
 */
export default function Testimonials() {
  return (
    <section className="border-y border-gray-100 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Hosts love the scoops"
          subtitle="A 5.0 rating across hundreds of events — here’s what they say."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={(i % 2) * 0.1}>
              <figure className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-card ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <Quote size={18} fill="currentColor" />
                </span>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-gray-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs font-medium text-gray-500">{t.event}</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={15} fill="currentColor" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Rated {brand.rating} out of 5 by {brand.reviewCount} happy hosts.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
