import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { eventTypes } from '../data/content'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'

/**
 * "Perfect for every event" — grid of the kinds of celebrations we cater for.
 */
export default function EventTypes() {
  return (
    <section id="events" className="scroll-mt-20 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Perfect for every event"
          title="One van, every celebration"
          subtitle="From intimate backyard parties to big festival crowds — we bring the dessert station to your day."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group h-full overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-gray-100/80"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.blurb}</p>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
