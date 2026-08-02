import { Link, Navigate, useParams } from 'react-router-dom'
import { CalendarDays, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogPosts, brand } from '../data/content'
import FadeIn from '../components/FadeIn'
import FinalCTA from '../components/FinalCTA'

/**
 * Individual blog article page — renders a post's full content from content.js.
 * Unknown slugs fall back to the home page.
 */
export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/" replace />

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      {/* Article header */}
      <section className="bg-gradient-to-b from-lavender-100 via-cream-100 to-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <Link
              to="/#blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              <ArrowLeft size={16} /> Back to blog
            </Link>
            <span className="mt-5 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Blog & guides
            </span>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm font-medium text-gray-500">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={15} className="text-brand-600" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-brand-600" />
                {post.readTime}
              </span>
              <span className="text-gray-400">By the {brand.name} team</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <img
              src={post.image}
              alt={post.alt || post.title}
              className="w-full rounded-3xl object-cover shadow-soft ring-1 ring-black/[0.05]"
            />
          </FadeIn>

          <div className="mt-10 space-y-10">
            {post.sections.map((s, i) => (
              <FadeIn key={s.heading} delay={(i % 2) * 0.06}>
                <section>
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-[1.7rem]">
                    {s.heading}
                  </h2>
                  {s.body.map((p, j) => (
                    <p key={j} className="mt-3 leading-relaxed text-gray-600">
                      {p}
                    </p>
                  ))}
                  {s.list && (
                    <ul className="mt-4 space-y-2.5">
                      {s.list.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-gray-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </FadeIn>
            ))}
          </div>

          {/* Inline CTA */}
          <FadeIn className="mt-12">
            <div className="bg-brand-gradient relative overflow-hidden rounded-3xl p-8 text-center text-white shadow-soft sm:p-10">
              <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <h3 className="relative text-2xl font-extrabold sm:text-3xl">
                Ready to try it at your event?
              </h3>
              <p className="relative mx-auto mt-3 max-w-md text-sm text-white/85">
                Request a free, no-obligation quote and we’ll reply within one business day.
              </p>
              <Link
                to="/contact"
                className="group relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-700 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                Request a Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          {/* More posts */}
          {others.length > 0 && (
            <div className="mt-14">
              <h3 className="text-xl font-extrabold text-gray-900">Keep reading</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {others.map((p) => (
                  <FadeIn key={p.id}>
                    <Link
                      to={`/blog/${p.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.alt || p.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-medium text-gray-500">
                          {p.date} · {p.readTime}
                        </p>
                        <h4 className="mt-2 flex-1 font-bold leading-snug text-gray-900 transition-colors group-hover:text-brand-700">
                          {p.title}
                        </h4>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
