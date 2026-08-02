import { steps } from '../data/content'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import Icon from './Icon'
import FloatingIcecream from './FloatingIcecream'

/**
 * "How it works" — three numbered steps with icon, title and description.
 */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-20 bg-cream-100 py-14 sm:py-20">
      <FloatingIcecream
        src="/animation-image/images__2_-removebg-preview.png"
        size={120}
        mobileSize={44}
        top={8}
        right={20}
        opacity={0.7}
        parallax={70}
        scrollRotate={12}
        className="block"
      />
      <FloatingIcecream
        src="/animation-image/3d-cartoon-colorful-ice-cream-character-waffle-cone_894067-21329-removebg-preview.png"
        size={72}
        mobileSize={44}
        bottom={10}
        left={16}
        opacity={0.6}
        parallax={50}
        scrollRotate={10}
        className="block"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Book your van in 3 simple steps"
          subtitle="No phone tag, no back-and-forth. Tell us about your event and we handle the rest."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.12}>
              <article className="group relative h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-card ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="absolute right-6 top-6 text-5xl font-black text-gray-100 transition-colors group-hover:text-brand-100">
                  {s.step}
                </span>
                <span className="bg-brand-gradient relative flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-card transition-transform duration-300 group-hover:scale-110">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3 className="relative mt-6 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
