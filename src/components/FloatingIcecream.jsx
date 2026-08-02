import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Tailwind `sm` breakpoint is 640px — below that we run the mobile fallback.
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return isMobile
}

// Only renders the decoration while it is at (or near) the viewport, so off-screen
// cones run no scroll listeners, no animations and no will-change — keeping the page
// cheap to scroll even when many decorations are mounted across sections.
function useNearViewport(rootMargin = '300px') {
  const ref = useRef(null)
  const [near, setNear] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setNear(true)
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setNear(entry.isIntersecting))
    }, { rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])
  return { ref, near }
}

/**
 * FloatingIcecream — ambient decorative illustration that bobs, sways and, on
 * desktop, drifts with scroll (parallax).
 *
 * Purely visual: pointer-events-none, aria-hidden, lazy-loaded and animated with
 * transform/opacity only (GPU-friendly), so it never blocks clicks or distracts
 * from readable content. Place it in empty section corners / background space.
 *
 * On small screens the icon shrinks (mobileSize) and the scroll-parallax wrapper
 * is skipped entirely, keeping just the gentle idle float for a lighter, clutter-free
 * mobile feel.
 *
 * Props:
 * - src          image path
 * - size         pixel size (default 96)
 * - mobileSize   pixel size below `sm` (defaults to ~55% of `size`)
 * - top/right/bottom/left
 *                position within a `relative` parent
 * - delay        seconds before the idle loop starts (defaults to a stable
 *                pseudo-random value per instance so icons drift out of sync)
 * - duration     seconds per idle loop (default 5, sweet spot 4–6)
 * - rotateRange  degrees of idle rotation sway (default 5)
 * - opacity      rendered opacity (default 0.85)
 * - parallax     total upward drift in px across the scroll range (default 90)
 * - scrollRotate total rotation in deg added by scroll (default 14)
 * - className    extra classes (e.g. "block" to force display)
 */
export default function FloatingIcecream({
  src,
  size = 96,
  mobileSize,
  top,
  right,
  bottom,
  left,
  delay,
  duration = 5,
  rotateRange = 5,
  opacity = 0.85,
  className = '',
  parallax = 90,
  scrollRotate = 14,
}) {
  const isMobile = useIsMobile()
  const { ref, near } = useNearViewport()

  // Mobile: smaller + no parallax, just the idle float.
  const effSize = isMobile ? (mobileSize ?? Math.round(size * 0.55)) : size

  // Deterministic stagger so visually identical instances never drift in sync.
  const seed = `${src}|${size}|${top ?? ''}|${right ?? ''}|${bottom ?? ''}|${left ?? ''}`
  const hash = seed.split('').reduce((acc, ch) => (acc * 33 + ch.charCodeAt(0)) % 9973, 7)
  const effectiveDelay = delay ?? (hash % 50) / 10

  const position = {
    ...(top !== undefined && { top }),
    ...(right !== undefined && { right }),
    ...(bottom !== undefined && { bottom }),
    ...(left !== undefined && { left }),
  }

  const shared = {
    src,
    opacity,
    duration,
    rotateRange,
    effectiveDelay,
    parallax,
    scrollRotate,
  }

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ ...position, width: effSize, height: effSize }}
      className={`pointer-events-none absolute z-0 select-none ${className}`}
    >
      {near &&
        (isMobile ? (
          <MobileFloat {...shared} />
        ) : (
          <DesktopParallax {...shared} />
        ))}
    </div>
  )
}

function MobileFloat({ src, opacity, duration, rotateRange, effectiveDelay }) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      draggable={false}
      className="h-full w-full object-contain"
      style={{ opacity }}
      animate={{ y: [0, -15, 0], rotate: [-rotateRange, rotateRange, -rotateRange] }}
      transition={{ duration, delay: effectiveDelay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function DesktopParallax({
  src,
  opacity,
  duration,
  rotateRange,
  effectiveDelay,
  parallax,
  scrollRotate,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -parallax])
  const scrollRot = useTransform(scrollYProgress, [0, 1], [0, scrollRotate])

  return (
    <motion.div
      ref={ref}
      className="h-full w-full"
      style={{ y: scrollY, rotate: scrollRot, willChange: 'transform' }}
    >
      <motion.img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        draggable={false}
        className="h-full w-full object-contain"
        style={{ opacity }}
        animate={{ y: [0, -15, 0], rotate: [-rotateRange, rotateRange, -rotateRange] }}
        transition={{ duration, delay: effectiveDelay, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
