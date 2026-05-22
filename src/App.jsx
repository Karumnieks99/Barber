import Nav from './components/Nav'

export default function App() {
  return (
    <div className="bg-black-void">
      <Nav />
      <div className="h-[200vh] flex items-center justify-center">
        <span className="font-display text-4xl text-white/20 tracking-widest">BUILDING...</span>
      </div>
    </div>
  )
}
