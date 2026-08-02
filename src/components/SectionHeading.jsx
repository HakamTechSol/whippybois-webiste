import FadeIn from './FadeIn'

/**
 * Consistent eyebrow + title + subtitle block used across sections.
 */
export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <FadeIn className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">{subtitle}</p>}
    </FadeIn>
  )
}
