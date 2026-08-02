import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '../data/content'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * Sticky top navbar.
 * - Transparent at top of the page, gains a soft shadow + blur once scrolled.
 * - Logo left, links right, "Get a Quote" CTA (collapses to a mobile menu).
 * - Links either scroll to an on-page section or route to a page.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    if (pathname === '/') {
      scrollToSection(id)
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label={`${brand.name} home`}>
          <img
            src="/logo.png"
            alt={`${brand.name} logo`}
            className="h-12 w-auto transition-transform duration-200 hover:scale-[1.03] sm:h-14"
          />
        </Link>

        {/* Center links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.to ? (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-600"
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={`/#${link.section}`}
                  onClick={(e) => handleNav(e, link.section)}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Action buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="bg-brand-gradient group inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-brand-50 hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={`/#${link.section}`}
                    onClick={(e) => handleNav(e, link.section)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-brand-50 hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="bg-brand-gradient group flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
