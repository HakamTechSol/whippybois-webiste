import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the window to the top on every route change.
 * Also honors a `location.state.scrollTo` value passed by the Navbar
 * so cross-page anchor navigation works smoothly.
 */
export default function ScrollToTop() {
  const { pathname, state } = useLocation()

  useEffect(() => {
    if (state?.scrollTo) {
      const id = state.scrollTo
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, state])

  return null
}
