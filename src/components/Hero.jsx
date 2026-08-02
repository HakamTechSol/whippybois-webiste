import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, ShieldCheck, BadgeCheck, IceCream, ArrowRight } from 'lucide-react'
import { brand, heroImages } from '../data/content'

const trustPoints = [
  { icon: ShieldCheck, label: 'Fully insured & licensed' },
  { icon: IceCream, label: 'Fresh scoops on site' },
  { icon: BadgeCheck, label: '500+ events served' },
]

/**
 * Hero section: headline + CTAs + trust row (left),
 * image collage with floating rating card (right).
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-lavender-100 via-cream-100 to-white pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* decorative depth: gradient blobs + subtle dot pattern */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />
      <div className="bg-dots pointer-events-none absolute right-1/4 top-10 h-64 w-64 opacity-60" />
      <div className="bg-dots pointer-events-none absolute bottom-0 left-8 h-48 w-48 opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left column */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-card"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Mobile ice cream van · Philadelphia area
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-5 text-5xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Sweeten your event with a{' '}
            <span className="text-brand-gradient">mobile ice cream van</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-5 text-lg leading-relaxed text-gray-600"
          >
            Weddings, birthdays, corporate parties and festivals — we bring fresh scoops, cones and
            smiles to your celebration. Tell us your date and get a tailored quote within 24 hours.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/contact"
              className="bg-brand-gradient group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/#menu"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-soft"
            >
              See our flavors
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-900">
                {brand.rating}
                <span className="font-normal text-gray-500"> ({brand.reviewCount})</span>
              </p>
            </div>
            {trustPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-1.5 text-sm text-gray-600">
                <point.icon size={16} className="text-brand-600" />
                {point.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column: image collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {heroImages.map((c) => (
              <img
                key={c.src}
                src={c.src}
                alt={c.alt}
                loading="lazy"
                className={`h-40 w-full rounded-2xl object-cover shadow-soft ring-1 ring-white/60 transition-transform duration-300 hover:scale-[1.02] sm:h-52 ${
                  c.tall ? 'md:col-span-2 md:row-span-2 sm:h-64 lg:h-[420px]' : ''
                }`}
              />
            ))}
          </div>

          {/* Floating rating card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-soft sm:-left-6 sm:translate-x-0"
          >
            <span className="bg-brand-gradient flex h-10 w-10 items-center justify-center rounded-xl text-white">
              <IceCream size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900">{brand.eventsServed} events served</p>
              <p className="text-xs text-gray-500">with a 5.0 star rating</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
