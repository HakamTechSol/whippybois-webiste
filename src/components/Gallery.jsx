import { motion } from 'framer-motion'
import { galleryImages } from '../data/content'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'

/**
 * "Gallery" — responsive photo grid with captions.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Life at the van"
          subtitle="Real events, real scoops, real smiles — a peek at what we bring to your celebration."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, i) => (
            <FadeIn key={item.caption} delay={(i % 3) * 0.08}>
              <motion.figure
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-2xl shadow-card ring-1 ring-black/[0.03]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-bold text-white drop-shadow">{item.caption}</p>
                </figcaption>
              </motion.figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
