import { motion } from 'framer-motion'

/**
 * Reusable fade-up-on-scroll wrapper using Framer Motion.
 * Use `delay` to stagger sibling cards and `className` to control layout.
 */
export default function FadeIn({ children, delay = 0, y = 28, className, once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
