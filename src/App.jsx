import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Masters from './components/Masters'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'

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
    </div>
  )
}
