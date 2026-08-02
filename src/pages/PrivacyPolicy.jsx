import { useState } from 'react'
import { Link } from 'react-router-dom'
import { brand, contactInfo } from '../data/content'
import FadeIn from '../components/FadeIn'
import FloatingIcecream from '../components/FloatingIcecream'

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information we collect',
    body: [
      'We collect information you provide directly, such as your name, email address, phone number and the details you share when submitting a quote request.',
      'We also collect limited usage information automatically, including device type, browser, pages visited and referral source, to improve the experience.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: '2. How we use your information',
    body: [
      'We use your information to respond to your quote request, prepare your booking, and improve and secure our service.',
      'We may send you service-related updates. You can opt out of marketing emails at any time using the unsubscribe link included in each email.',
    ],
  },
  {
    id: 'sharing',
    title: '3. Sharing your information',
    body: [
      'We use the details you provide to prepare your quote and arrange your event.',
      'We do not sell your personal information. We may share data with trusted service providers who help us operate the platform, under strict confidentiality agreements.',
    ],
  },
  {
    id: 'cookies',
    title: '4. Cookies & tracking',
    body: [
      'We use cookies and similar technologies to keep you signed in, remember preferences and understand how the site is used.',
      'You can disable cookies in your browser settings, although some features may not work as expected.',
    ],
  },
  {
    id: 'data-security',
    title: '5. Data security',
    body: [
      'We use industry-standard encryption and access controls to protect your data in transit and at rest.',
      'While no method is 100% secure, we work continuously to keep your information safe.',
    ],
  },
  {
    id: 'your-rights',
    title: '6. Your rights',
    body: [
      'Depending on your location, you may have the right to access, correct, delete or restrict the use of your personal information.',
      'To exercise any of these rights, contact us using the details below and we’ll respond within 30 days.',
    ],
  },
  {
    id: 'children',
    title: '7. Children’s privacy',
    body: [
      'Our services are intended for businesses and adults aged 18 and over. We do not knowingly collect information from children.',
    ],
  },
  {
    id: 'changes',
    title: '8. Changes to this policy',
    body: [
      'We may update this policy from time to time. We’ll post any changes on this page and update the effective date below.',
    ],
  },
]

/**
 * Privacy Policy page — standard clean text layout.
 */
export default function PrivacyPolicy() {
  const [active, setActive] = useState(sections[0].id)

  return (
    <>
      {/* Page header */}
      <section className="relative bg-gradient-to-b from-lavender-100 via-cream-100 to-white pt-28 pb-10 sm:pt-36 sm:pb-14">
        <FloatingIcecream
          src="/animation-image/images__1_-removebg-preview.png"
          size={72}
          mobileSize={40}
          top={76}
          left={24}
          opacity={0.5}
          parallax={40}
          scrollRotate={8}
          className="block"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Legal
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: <span className="font-semibold text-gray-700">August 1, 2026</span>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 shadow-card">
            <p className="text-sm leading-relaxed text-gray-600">
              At <span className="font-semibold text-gray-900">{brand.name}</span>, your privacy matters.
              This policy explains what information we collect, how we use it and the choices you have.
              By using the platform, you agree to the practices described below.
            </p>
          </FadeIn>

          {/* Sticky section nav (desktop) */}
          <nav className="sticky top-20 z-10 mt-8 hidden rounded-2xl border border-gray-100 bg-white/95 p-2 shadow-card backdrop-blur sm:block">
            <div className="flex flex-wrap gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setActive(s.id)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    active === s.id ? 'bg-brand-600 text-white' : 'text-gray-600 hover:text-brand-600'
                  }`}
                >
                  {s.title.replace(/^\d+\.\s/, '')}
                </a>
              ))}
            </div>
          </nav>

          {/* Sections */}
          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <FadeIn key={s.id} delay={(i % 3) * 0.05}>
                <article id={s.id} className="scroll-mt-36">
                  <h2 className="text-xl font-extrabold text-gray-900">{s.title}</h2>
                  {s.body.map((p, j) => (
                    <p key={j} className="mt-3 text-sm leading-relaxed text-gray-600">
                      {p}
                    </p>
                  ))}
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Contact blurb */}
          <FadeIn className="mt-12 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-700">
              Questions about this policy?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Reach out any time at{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-semibold text-brand-600 hover:underline"
              >
                {contactInfo.email}
              </a>{' '}
              or{' '}
              <Link to="/contact" className="font-semibold text-brand-600 hover:underline">
                send us a message
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
