import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUpVariants, staggerContainerVariants } from '../animations'
import { TESTIMONIALS } from '../constants'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-black-void py-28 px-8">
      <motion.div
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUpVariants} className="mb-16">
          <span className="font-body text-xs text-gold tracking-[0.3em] uppercase">Klientu viedokļi</span>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mt-2">WHAT THEY SAY</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.author}
              variants={fadeUpVariants}
              className="bg-surface p-8 flex flex-col gap-6"
            >
              <span className="font-display text-7xl text-gold leading-none select-none">"</span>
              <p className="font-body text-white/65 text-base leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-gold flex-shrink-0" />
                <span className="font-display text-xl text-white tracking-wider">{t.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
