import Hero from '../components/Hero'
import EventTypes from '../components/EventTypes'
import FlavorMenu from '../components/FlavorMenu'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'
import BlogPreview from '../components/BlogPreview'
import FinalCTA from '../components/FinalCTA'

/**
 * Home page — assembles the full landing page section by section.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <EventTypes />
      <FlavorMenu />
      <HowItWorks />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTABanner />
      <BlogPreview />
      <FinalCTA />
    </>
  )
}
