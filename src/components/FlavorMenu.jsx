import { useState } from 'react'
import { motion } from 'framer-motion'
import { IceCream, Leaf } from 'lucide-react'
import { menu } from '../data/content'
import SectionHeading from './SectionHeading'
import FloatingIcecream from './FloatingIcecream'

// Scroll-triggered stagger entrance — fade-up + slight scale, 90ms per card.
const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.09, ease: 'easeOut' },
  }),
}

// Soft tinted backgrounds per cone type card.
const coneTints = [
  { card: 'bg-pink-50', ring: 'ring-pink-100', icon: 'bg-brand-gradient' },
  { card: 'bg-lavender-100', ring: 'ring-lavender-200', icon: 'bg-gradient-to-br from-violet-500 to-fuchsia-500' },
  { card: 'bg-cream-200', ring: 'ring-amber-100', icon: 'bg-gradient-to-br from-amber-400 to-orange-500' },
]

/**
 * "Menu & Flavors" — traditional soft whippy 99, cone types, flavours and vegan lollies.
 * Premium redesign: gradient-glow featured card, tinted cone cards, swatch flavour cards
 * and a mint vegan callout, all with a staggered scroll entrance.
 */
export default function FlavorMenu() {
  const [selectedCone, setSelectedCone] = useState(menu.coneTypes[0]?.name ?? '')

  return (
    <section id="menu" className="relative scroll-mt-20 overflow-hidden bg-lavender-100 py-14 sm:py-20">
      {/* decorative drip accent */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-8 h-40 w-40 text-brand-200/40"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2c-4 4-6.5 7-6.5 10.5A6.5 6.5 0 0 0 12 19a6.5 6.5 0 0 0 6.5-6.5C18.5 9 16 6 12 2zm0 15a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 -left-6 h-32 w-32 text-fuchsia-200/50"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2c-4 4-6.5 7-6.5 10.5A6.5 6.5 0 0 0 12 19a6.5 6.5 0 0 0 6.5-6.5C18.5 9 16 6 12 2zm0 15a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z" />
      </svg>

      {/* Floating decorative cones in empty background space */}
      <FloatingIcecream
        src="/animation-image/images__1_-removebg-preview.png"
        size={140}
        mobileSize={80}
        top={120}
        left={32}
        opacity={0.85}
        parallax={90}
        scrollRotate={15}
        className="block"
      />
      <FloatingIcecream
        src="/animation-image/images-removebg-preview.png"
        size={110}
        mobileSize={64}
        bottom={140}
        right={28}
        opacity={0.8}
        parallax={80}
        scrollRotate={12}
        className="block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Menu & flavors"
          title="Traditional soft serve, made fresh"
          subtitle="The classic whippy 99 — real soft serve from the machine, not scooped from a tub. Cone it, flake it, enjoy it."
        />

        {/* Classic 99 featured card — gradient glow border + tactile cone pills */}
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -1, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-12 rounded-3xl bg-gradient-to-br from-brand-200 via-fuchsia-200 to-amber-100 p-[1.5px] shadow-[0_24px_60px_-16px_rgba(185,21,242,0.4)]"
        >
          <div className="grid items-center gap-8 overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-white p-6 sm:p-8 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={menu.classic99.image}
                alt={menu.classic99.alt}
                loading="lazy"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
                <IceCream size={14} /> Our signature
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {menu.classic99.title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">{menu.classic99.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {menu.coneTypes.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedCone(c.name)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                      selectedCone === c.name
                        ? 'bg-brand-gradient scale-105 text-white shadow-card'
                        : 'border border-brand-200 bg-brand-50 text-brand-700 hover:scale-105 hover:bg-brand-100 hover:shadow-card'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cone type cards — tinted backgrounds + icon badges */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {menu.coneTypes.map((cone, i) => {
            const tint = coneTints[i % coneTints.length]
            return (
              <motion.article
                key={cone.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group rounded-2xl p-6 shadow-card ring-1 ${tint.card} ${tint.ring}`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${tint.icon}`}
                >
                  <IceCream size={26} />
                </span>
                <h4 className="mt-4 text-lg font-bold text-gray-900">{cone.name}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{cone.description}</p>
              </motion.article>
            )
          })}
        </div>

        {/* Flavours — swatch cards, 2 cols mobile / 4 cols desktop */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {menu.flavours.map((f, i) => (
            <motion.div
              key={f.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex h-full flex-col items-center justify-center gap-2.5 rounded-xl border border-gray-100 bg-white p-5 text-center shadow-card"
            >
              <span
                className={`h-3.5 w-3.5 rounded-full ring-4 ring-white shadow-card ${f.color ?? 'bg-brand-400'}`}
              />
              <h4 className="text-base font-extrabold text-gray-900">{f.name}</h4>
              <p className="text-xs leading-relaxed text-gray-500">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vegan lollies — mint callout card */}
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: 2, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-8 grid items-center gap-8 overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6 shadow-soft ring-1 ring-green-100 sm:p-8 lg:grid-cols-2"
        >
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-card">
              <Leaf size={14} /> Plant-based
            </span>
            <h3 className="mt-4 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              {menu.lollies.title}
            </h3>
            <p className="mt-3 leading-relaxed text-gray-600">{menu.lollies.description}</p>
          </div>
          <div className="group order-1 overflow-hidden rounded-2xl lg:order-2">
            <img
              src={menu.lollies.image}
              alt={menu.lollies.alt}
              loading="lazy"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
