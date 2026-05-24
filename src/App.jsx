import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Masters from './components/Masters'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'
import { CONTACT } from './constants'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Fix #2: skip-to-content for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-black-void focus:font-display focus:text-sm focus:tracking-widest focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <div className="bg-black-void">
        <Nav />

        <main id="main">
          <Hero />
          <Services />
          <About />
          <Masters />
          <Gallery />
          <Testimonials />
          <Booking />
        </main>

        <Footer />

        {/* Fix #7: z-30 so this hides behind the nav overlay (z-40) when the menu is open */}
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden fixed bottom-6 right-6 z-30 bg-gold text-black-void font-display text-lg tracking-widest px-7 py-3 hover:bg-white transition-colors duration-300"
        >
          BOOK
        </a>
      </div>
    </MotionConfig>
  )
}
