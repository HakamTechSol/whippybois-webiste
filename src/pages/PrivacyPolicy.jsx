import { useState } from 'react'
import FadeIn from '../components/FadeIn'
import FloatingIcecream from '../components/FloatingIcecream'

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: ['Depending on how you use the app, we may collect the following information:'],
    list: [
      'Name',
      'Email Address',
      'Phone Number',
      'Profile Information',
      'Device Information',
      'Crash Reports',
      'Usage Analytics',
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    list: [
      'Create and manage your account.',
      'Provide app functionality.',
      'Improve our services.',
      'Send notifications.',
      'Provide customer support.',
      'Maintain security and prevent fraud.',
    ],
  },
  {
    id: 'firebase-services',
    title: 'Firebase Services',
    body: ['Our application uses Google Firebase services including:'],
    list: [
      'Firebase Authentication',
      'Cloud Firestore',
      'Firebase Cloud Messaging (Push Notifications)',
      'Firebase Analytics (if enabled)',
      'Firebase Crashlytics (if enabled)',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    body: [
      'We use reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.',
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    body: [
      'The application may use trusted third-party services including Google Firebase. These providers have their own privacy policies.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: 'Children’s Privacy',
    body: ['Our application is not intended for children under the age of 13 without parental consent.'],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    body: ['You may have the right to:'],
    list: [
      'Access your personal information.',
      'Request corrections.',
      'Request deletion of your account.',
      'Contact us regarding your data.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: ['We may update this Privacy Policy from time to time. Any updates will be posted on this page.'],
  },
]

export default function PrivacyPolicy() {
  const [active, setActive] = useState(sections[0].id)

  return (
    <>
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
              Effective Date: <span className="font-semibold text-gray-700">July 20, 2026</span>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 shadow-card">
            <p className="text-sm leading-relaxed text-gray-600">
              This Privacy Policy explains how <span className="font-semibold text-gray-900">Whippy Bois</span> (
              “we”, “our”, or “us”) collects, uses, and protects your information when you use our mobile application.
            </p>
          </FadeIn>

          <nav className="sticky top-20 z-10 mt-8 hidden rounded-2xl border border-gray-100 bg-white/95 p-2 shadow-card backdrop-blur sm:block">
            <div className="flex flex-wrap gap-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setActive(section.id)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    active === section.id ? 'bg-brand-600 text-white' : 'text-gray-600 hover:text-brand-600'
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </nav>

          <div className="mt-10 space-y-10">
            {sections.map((section, index) => (
              <FadeIn key={section.id} delay={(index % 3) * 0.05}>
                <article id={section.id} className="scroll-mt-36">
                  <h2 className="text-xl font-extrabold text-gray-900">{section.title}</h2>
                  {section.body?.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="mt-3 text-sm leading-relaxed text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-600">
                      {section.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-700">Contact Us</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              If you have any questions regarding this Privacy Policy, please contact us at{' '}
              <a href="mailto:support@whippybois.com" className="font-semibold text-brand-600 hover:underline">
                support@whippybois.com
              </a>.
            </p>
          </FadeIn>

          <p className="mt-8 text-center text-xs text-gray-500">© 2026 Whippy Bois. All Rights Reserved.</p>
        </div>
      </section>
    </>
  )
}
