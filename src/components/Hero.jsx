import { Fragment, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { letterVariants } from '../animations'
import { IMAGES } from '../constants'

const HEADLINE = 'PRECISION. STYLE. IDENTITY.'
const HEADLINE_WORDS = HEADLINE.split(' ')

const wordContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
    >
      {/* Background image + dark overlay */}
      <div className="absolute inset-0 z-0">
        <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Location tag */}
      <div className="absolute top-24 left-8 z-20">
        <span className="font-display text-xs text-gold tracking-[0.3em]">RĪGA, LATVIA</span>
      </div>

      {/* Headline + CTA */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/*
          Each word is a whitespace-nowrap inline-block span — the browser can only
          line-break at the space text nodes between words, never mid-word.
        */}
        <motion.div
          variants={wordContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-display leading-none tracking-wider text-white mb-6"
          style={{ fontSize: 'clamp(3rem, 9vw, 9rem)' }}
          aria-label={HEADLINE}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <Fragment key={word}>
              <motion.span
                variants={letterVariants}
                aria-hidden="true"
                style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
              >
                {word}
              </motion.span>
              {i < HEADLINE_WORDS.length - 1 && ' '}
            </Fragment>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
          className="font-body text-white/50 text-sm md:text-base tracking-[0.2em] uppercase mb-10"
        >
          Barbershop augstākajā līmenī — Rīgā kopš 2018.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.7, duration: 0.6, ease: 'easeOut' }}
          className="inline-block font-display text-xl tracking-widest bg-gold text-black-void px-10 py-4 hover:bg-white transition-colors duration-300"
        >
          BOOK NOW
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] text-white/30 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-white/20" />
      </motion.div>
    </section>
  )
}
