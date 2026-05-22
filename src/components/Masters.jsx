import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUpVariants, staggerContainerVariants } from '../animations'
import { MASTERS } from '../constants'

export default function Masters() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="masters" className="bg-black-void py-28 px-8">
      <motion.div
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUpVariants} className="mb-16">
          <span className="font-body text-xs text-gold tracking-[0.3em] uppercase">Komanda</span>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mt-2">THE MASTERS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MASTERS.map((master) => (
            <motion.div key={master.name} variants={fadeUpVariants} className="group cursor-default">
              <div className="overflow-hidden mb-5 bg-surface" style={{ aspectRatio: '3/4' }}>
                <img
                  src={master.image}
                  alt={master.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="font-display text-3xl text-white tracking-wider">{master.name}</h3>
              <p className="font-body text-gold text-xs tracking-[0.25em] uppercase mt-1">{master.specialty}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
