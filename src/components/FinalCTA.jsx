import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'
import FloatingIcecream from './FloatingIcecream'

/**
 * Final CTA banner shown just before the footer.
 */
export default function FinalCTA() {
  return (
    <section className="bg-white pb-14 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-brand-gradient relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white shadow-soft sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            {/* Floating decorative cone in a corner */}
            <FloatingIcecream
              src="/animation-image/images__1_-removebg-preview.png"
              size={140}
              mobileSize={76}
              top={24}
              right={40}
              opacity={0.9}
              parallax={90}
              scrollRotate={16}
              className="block"
            />

            <h2 className="relative mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Ready to sweeten your next event?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
              Request a free, no-obligation quote today. We’ll reply within one business day with a
              package sized to your celebration.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-700 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                Request a Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Our story
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
