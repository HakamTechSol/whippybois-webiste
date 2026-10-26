import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BlogPost from './pages/BlogPost'
import PrivacyPolicy from './pages/PrivacyPolicy'
import QuoteResponse from './pages/QuoteResponse'
import AppVideos from './pages/AppVideos'

/**
 * App shell — navbar + routed pages + footer.
 * Add new routes here as the site grows (e.g. /dashboard for the admin panel later).
 */
export default function App() {
  const { pathname } = useLocation()
  const isAppVideosPage = pathname.replace(/\/+$/, '') === '/app-videos'

  return (
    <div className="flex min-h-screen flex-col">
      {!isAppVideosPage && (
        <>
          <ScrollToTop />
          <Navbar />
        </>
      )}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/quote-response/:id" element={<QuoteResponse />} />
          <Route path="/app-videos" element={<AppVideos />} />
          {/* Catch-all → home for now */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isAppVideosPage && <Footer />}
    </div>
  )
}
