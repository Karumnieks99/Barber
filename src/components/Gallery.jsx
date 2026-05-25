import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUpVariants, staggerContainerVariants } from '../animations'
import { GALLERY_IMAGES } from '../constants'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="bg-black-void py-28 px-8">
      <motion.div
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.05 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUpVariants} className="mb-12">
          <span className="font-body text-xs text-gold tracking-[0.3em] uppercase">Portfolio</span>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mt-2">THE WORK</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={src}
              variants={fadeUpVariants}
              className="overflow-hidden bg-surface"
              style={{ aspectRatio: '1/1' }}
            >
              <img
                src={src}
                alt={`Barbershop work example ${i + 1}`}
                loading="eager"
                width="800"
                height="800"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
