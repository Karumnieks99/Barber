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
    <div className="bg-black-void">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Masters />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />

      {/* Fixed mobile BOOK button — hidden on md+ */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-50 bg-gold text-black-void font-display text-lg tracking-widest px-7 py-3 hover:bg-white transition-colors duration-300"
      >
        BOOK
      </a>
    </div>
  )
}
