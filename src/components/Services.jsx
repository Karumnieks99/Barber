import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUpVariants, staggerContainerVariants } from '../animations'
import { SERVICES } from '../constants'

const ICONS = {
  scissors: (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  razor: (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" viewBox="0 0 24 24">
      <path d="M4 4l16 0M4 12h16M9 4v16M15 4v16" />
    </svg>
  ),
  towel: (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="16" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="4" x2="8" y2="2" />
      <line x1="12" y1="4" x2="12" y2="2" />
      <line x1="16" y1="4" x2="16" y2="2" />
    </svg>
  ),
  crown: (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" viewBox="0 0 24 24">
      <path d="M3 18l3-9 4.5 5.5L12 6l1.5 8.5L18 9l3 9H3z" />
    </svg>
  ),
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="bg-black-void py-28 px-8">
      <motion.div
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUpVariants} className="mb-16">
          <span className="font-body text-xs text-gold tracking-[0.3em] uppercase">What We Do</span>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mt-2">OUR SERVICES</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/[0.06]">
          {SERVICES.map((service) => (
            <motion.div
              key={service.name}
              variants={fadeUpVariants}
              className="bg-black-void p-10 flex flex-col gap-4 hover:bg-surface transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between">
                {ICONS[service.icon]}
                <span className="font-display text-3xl text-gold">{service.price}</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white tracking-wider">{service.name}</h3>
              <p className="font-body text-white/50 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-4 w-8 h-[1px] bg-gold/40 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
