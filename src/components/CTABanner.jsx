import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ctaImage } from '../data/content'
import FadeIn from './FadeIn'
import FloatingIcecream from './FloatingIcecream'

const perks = [
  'Weddings, birthdays, school fetes & festivals',
  'Classic 99s, whippy cones & vegan lollies',
  '5-star hygiene rated & fully insured',
]

/**
 * Event CTA banner — image + heading + checkmarks + "Request a Quote".
 */
export default function CTABanner() {
  return (
    <section className="bg-cream-100 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-soft">
            {/* background image with gradient overlay */}
            <img
              src={ctaImage.src}
              alt={ctaImage.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/85 to-brand-700/40" />

            {/* Floating decorative cone in the empty right-hand corner */}
            <FloatingIcecream
              src="/animation-image/images__2_-removebg-preview.png"
              size={180}
              mobileSize={80}
              bottom={28}
              right={40}
              opacity={0.95}
              parallax={80}
              scrollRotate={14}
              className="block"
            />

            <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                  Ready to sweeten your next event?
                </h2>
                <ul className="mt-6 space-y-3">
                  {perks.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                      <CheckCircle2 size={18} className="shrink-0 text-brand-300" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
