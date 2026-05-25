import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUpVariants, staggerContainerVariants } from '../animations'
import { IMAGES } from '../constants'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="bg-black-void overflow-hidden">
      <motion.div
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] md:min-h-[70vh]"
      >
        {/* Image — full bleed left column */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }}
          className="relative h-64 md:h-auto overflow-hidden"
        >
          <img
            src={IMAGES.about}
            alt="BLADES & CO interior"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>

        {/* Text — offset down on desktop; motion.div so children stagger */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col p-10 md:justify-end md:p-16 md:pt-40"
        >
          <motion.span variants={fadeUpVariants} className="font-body text-xs text-gold tracking-[0.3em] uppercase mb-3">
            Mūsu stāsts
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="font-display text-5xl md:text-6xl text-white tracking-wider mb-6">
            WHO WE ARE
          </motion.h2>
          <motion.div variants={fadeUpVariants} className="w-12 h-[2px] bg-gold mb-8" />
          <motion.p variants={fadeUpVariants} className="font-body text-white/60 text-base md:text-lg leading-relaxed mb-6">
            Mēs neesam tikai barberi. Mēs esam meistari, kas rada identitāti. Katrs grieziens ir precizitātes māksla — ne mazāk, ne vairāk.
          </motion.p>
          <motion.p variants={fadeUpVariants} className="font-body text-white/35 text-sm leading-relaxed">
            Dibināts 2018. gadā Rīgā ar vienu mērķi: dot katram vīrietim to, ko viņš pelna — perfektu izskatu.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
