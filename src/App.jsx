import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Masters from './components/Masters'

export default function App() {
  return (
    <div className="bg-black-void">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Masters />
    </div>
  )
}
