import { Sparkles } from 'lucide-react'
import { flavors, toppings } from '../data/content'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'

/**
 * "Menu & Flavors" — grid of signature flavors plus a toppings strip.
 */
export default function FlavorMenu() {
  return (
    <section id="menu" className="scroll-mt-20 bg-lavender-100 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Menu & flavors"
          title="Fresh scoops, made daily"
          subtitle="Real cream, real fruit, no shortcuts. Pick your flavors, top them however you like."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flavors.map((f, i) => (
            <FadeIn key={f.id} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.alt || f.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {f.tag && (
                    <span className="bg-brand-gradient absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-bold text-white shadow-card">
                      {f.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{f.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{f.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Toppings strip */}
        <FadeIn delay={0.15} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-card">
            <span className="mr-2 flex items-center gap-1.5 text-sm font-bold text-gray-900">
              <Sparkles size={16} className="text-brand-600" />
              Free toppings:
            </span>
            {toppings.map((t) => (
              <span
                key={t}
                className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
