import { CalendarDays, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/content'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import FloatingIcecream from './FloatingIcecream'

/**
 * Blog/guides preview — 3 card grid with image, date, title, linking to articles.
 */
export default function BlogPreview() {
  return (
    <section id="blog" className="relative scroll-mt-20 bg-white py-14 sm:py-20">
      <FloatingIcecream
        src="/animation-image/images-removebg-preview.png"
        size={110}
        mobileSize={44}
        top={8}
        right={20}
        opacity={0.7}
        parallax={60}
        scrollRotate={10}
        className="block"
      />
      <FloatingIcecream
        src="/animation-image/3d-cartoon-colorful-ice-cream-character-waffle-cone_894067-21329-removebg-preview.png"
        size={72}
        mobileSize={40}
        bottom={10}
        left={16}
        opacity={0.6}
        parallax={50}
        scrollRotate={10}
        className="block"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog & guides"
          title="Sweet ideas for your event"
          subtitle="Fresh advice from our planners and hosts — from timelines to 99s."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.1} className="h-full">
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt || post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-brand-600" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-brand-600" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-brand-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-3">
                    Read article <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
