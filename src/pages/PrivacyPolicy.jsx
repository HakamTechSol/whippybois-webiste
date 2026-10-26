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
      'Precise and approximate location information, where location access is enabled',
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
      'Use location to display maps, show live ice cream van locations, and determine when a van is near customers.',
      'Provide customer support.',
      'Maintain security and prevent fraud.',
    ],
  },
  {
    id: 'location-and-proximity-alerts',
    title: 'Location, Live Tracking & Proximity Alerts',
    body: [
      'The app uses location to connect customers with nearby ice cream vans. Depending on the feature and your device settings, it may access precise location (a more exact device position) or approximate location (a less exact area). Location permission is required for location-based features to work as described here.',
      'For drivers, location is used to show the van’s position on the customer map and to update its position while the driver is travelling on an active route. To support live tracking and nearby-van alerts, the app may access a driver’s location in the background during an active route, including when the app is not open on screen. Background location is used for the active route experience and is not intended for continuous tracking outside an active route.',
      'For customers, location may be used to show relevant van locations on a map and to determine whether a van is close enough to trigger a proximity alert. The app uses the location information available to it to compare the van’s position with the customer’s proximity to the van. Customer location access and any required permission depend on the feature and the customer’s device settings.',
      'When an ice cream van on an active route comes within approximately 100 metres of customers, the app may send a notification to customers who are eligible to receive proximity alerts and have notifications enabled. This is intended to let nearby customers know that the van is close. The distance is approximate and may vary because location readings, device settings, and network conditions can affect location accuracy and notification timing.',
      'Location features depend on the relevant location and notification permissions being enabled. If a user disables or limits these permissions, live map updates or proximity notifications may not be available or may be less accurate. Drivers and customers can manage these permissions in their device settings.',
      'We use location information to provide maps, live van tracking, and proximity alerts. We do not sell location data.',
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
