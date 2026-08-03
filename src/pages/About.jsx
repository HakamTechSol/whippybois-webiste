import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  BadgeCheck,
  Umbrella,
  UserCheck,
  Sparkles,
  MapPin,
  ArrowRight,
} from 'lucide-react'
import { brand, aboutImage, serviceAreas } from '../data/content'
import FadeIn from '../components/FadeIn'
import FinalCTA from '../components/FinalCTA'
import FloatingIcecream from '../components/FloatingIcecream'

const trustBadges = [
  {
    icon: ShieldCheck,
    title: 'Registered Food Business',
    text: 'Registered as a food business with our local council',
  },
  {
    icon: BadgeCheck,
    title: '5-Star Food Hygiene Rating',
    text: 'Proud holders of a 5-star food hygiene rating',
  },
  {
    icon: Umbrella,
    title: 'Public Liability Insurance',
    text: 'Fully covered by public liability insurance',
  },
  {
    icon: UserCheck,
    title: 'DBS-Checked Drivers',
    text: 'Operated by DBS-checked drivers',
  },
  {
    icon: Sparkles,
    title: 'High Hygiene Standards',
    text: 'Committed to the highest standards of food hygiene & care',
  },
]

const badgeAnim = {
  hidden: { opacity: 0, scale: 0.7, y: 16 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.1, ease: 'easeOut' },
  }),
}

/**
 * About page — full WHIPPY BOIS story, coverage areas, product + trust badges.
 */
export default function About() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-gradient-to-b from-lavender-100 via-cream-100 to-white pt-28 pb-14 sm:pt-36 sm:pb-20">
        <FloatingIcecream
          src="/animation-image/images__2_-removebg-preview.png"
          size={130}
          mobileSize={44}
          top={76}
          right={24}
          opacity={0.8}
          parallax={70}
          scrollRotate={12}
          className="block"
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              About us
            </span>
            <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Welcome to <span className="text-brand-gradient">{brand.name}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              A trusted, professional ice cream van hire company based in Slough — serving classic
              soft-serve 99s since {brand.since}.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro + image */}
      <section className="relative bg-white py-14 sm:py-20">
        <FloatingIcecream
          src="/animation-image/3d-cartoon-colorful-ice-cream-character-waffle-cone_894067-21329-removebg-preview.png"
          size={72}
          mobileSize={40}
          top={12}
          right={16}
          opacity={0.6}
          parallax={50}
          scrollRotate={10}
          className="block"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <div className="relative">
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                loading="lazy"
                className="w-full rounded-3xl object-cover shadow-soft ring-1 ring-black/[0.05]"
              />
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white px-6 py-4 shadow-soft sm:-right-6">
                <p className="text-2xl font-black text-brand-gradient">Since {brand.since}</p>
                <p className="text-xs font-medium text-gray-500">Based in Slough, UK</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Our story
            </span>
            <p className="mt-4 leading-relaxed text-gray-600">
              Welcome to {brand.name}, a trusted and professional ice cream van hire company based
              in Slough. Since {brand.since}, we have been providing high-quality ice cream van
              services for private and public events, helping create unforgettable memories for
              customers of all ages.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Whether you’re organising a birthday party, wedding, school fete, corporate event,
              sports day, community festival, charity event, fun day, family celebration, or
              business promotion, our modern, fully equipped ice cream vans are ready to add
              something special to your occasion. We serve a delicious range of soft-serve ice
              cream, cones, tubs, ice lollies, and frozen treats that guests of all ages can enjoy.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              At {brand.name}, we take pride in delivering not only fantastic ice cream but also
              exceptional customer service. We are known for being reliable, friendly, punctual,
              and professional, ensuring every event runs smoothly from start to finish.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service areas */}
      <section className="relative bg-cream-100 py-14 sm:py-20">
        <FloatingIcecream
          src="/animation-image/images__1_-removebg-preview.png"
          size={100}
          mobileSize={40}
          top={8}
          right={20}
          opacity={0.65}
          parallax={55}
          scrollRotate={12}
          className="block"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <MapPin size={14} /> Where we serve
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Proudly serving Berkshire & beyond
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              We proudly serve Slough and the surrounding areas, including Windsor, Maidenhead,
              Reading, Bracknell, Ascot, Wokingham, Beaconsfield, High Wycombe, Marlow,
              Henley-on-Thames, Uxbridge, Langley, Burnham, Gerrards Cross, Eton, London, Surrey,
              the South Bucks area, and throughout Berkshire and Oxfordshire. If your event is
              outside these areas, please get in touch — we’re always happy to discuss travelling
              further.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-card"
                >
                  {area}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Trust badges */}
      <section className="relative bg-white py-14 sm:py-20">
        <FloatingIcecream
          src="/animation-image/images-removebg-preview.png"
          size={100}
          mobileSize={40}
          top={8}
          right={20}
          opacity={0.65}
          parallax={55}
          scrollRotate={10}
          className="block"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Your safety & peace of mind
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Your safety and peace of mind are important to us. Every event is delivered to the
              highest standards of food hygiene, cleanliness and customer care.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.title}
                custom={i}
                variants={badgeAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="group flex h-full flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-card ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="bg-brand-gradient flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <badge.icon size={26} />
                </span>
                <h3 className="mt-4 text-sm font-extrabold text-gray-900">{badge.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{badge.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing + CTA */}
      <section className="relative bg-cream-100 py-14 sm:py-20">
        <FloatingIcecream
          src="/animation-image/3d-cartoon-colorful-ice-cream-character-waffle-cone_894067-21329-removebg-preview.png"
          size={72}
          mobileSize={40}
          bottom={10}
          right={20}
          opacity={0.6}
          parallax={50}
          scrollRotate={10}
          className="block"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <p className="text-lg leading-relaxed text-gray-700">
              No event is too big or too small. From intimate garden parties to large public
              festivals, we tailor our service to meet your needs and make your event one to
              remember.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Thank you for considering {brand.name}. We look forward to bringing delicious ice
              cream, friendly service, and plenty of smiles to your next event.
            </p>
            <Link
              to="/contact"
              className="bg-brand-gradient group mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              Get a Free Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
