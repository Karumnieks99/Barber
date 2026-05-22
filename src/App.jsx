import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Masters from './components/Masters'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'

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
    </div>
  )
}
