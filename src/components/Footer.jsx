import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin, ShieldCheck, Lock, BadgeCheck } from 'lucide-react'
import { brand, footerLinks } from '../data/content'

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
]

const badges = [
  { icon: Lock, label: 'SSL Secured' },
  { icon: BadgeCheck, label: 'Licensed & Insured' },
  { icon: ShieldCheck, label: '5.0 Star Rated' },
]

/**
 * Multi-column footer with brand blurb, link columns, trust badges and socials.
 */
export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand blurb */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt={`${brand.name} logo`}
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {brand.name} is a fully-insured mobile ice cream van bringing fresh scoops, cones and
              smiles to weddings, birthdays, corporate events and festivals across the Philadelphia
              area.
            </p>
            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  <b.icon size={14} className="text-brand-600" />
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith('/') && !link.to.includes('#') ? (
                      <Link
                        to={link.to}
                        className="text-sm text-gray-600 transition-colors hover:text-brand-600"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.to} className="text-sm text-gray-600 transition-colors hover:text-brand-600">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-7 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-card"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
