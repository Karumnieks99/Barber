import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUpVariants, staggerContainerVariants } from '../animations'
import { CONTACT } from '../constants'

export default function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="bg-surface py-28 px-8">
      <motion.div
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
      >
        {/* Left: CTA */}
        <div className="flex flex-col justify-center">
          <motion.span variants={fadeUpVariants} className="font-body text-xs text-gold tracking-[0.3em] uppercase mb-3">
            Pierakstīties
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="font-display text-5xl md:text-6xl text-white tracking-wider mb-4 leading-tight">
            BOOK YOUR<br />SESSION
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="font-body text-white/50 text-sm mb-10 leading-relaxed">
            Rezervē savu laiku tagad — pieejams caur WhatsApp. Atbildam nekavējoties.
          </motion.p>
          <motion.a
            variants={fadeUpVariants}
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-black-void font-display text-xl tracking-widest px-10 py-4 self-start hover:bg-white transition-colors duration-300"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L0 24l6.335-1.508A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.007-1.376l-.36-.213-3.721.976.993-3.63-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            WHATSAPP
          </motion.a>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col gap-10 justify-center">
          <motion.div variants={fadeUpVariants}>
            <span className="font-body text-xs text-gold tracking-[0.3em] uppercase block mb-3">Adrese</span>
            <p className="font-display text-2xl text-white tracking-wider">{CONTACT.address}</p>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <span className="font-body text-xs text-gold tracking-[0.3em] uppercase block mb-4">Darba laiks</span>
            <div className="flex flex-col gap-3">
              {CONTACT.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-8 border-b border-white/[0.06] pb-3 last:border-0">
                  <span className="font-body text-white/45 text-sm">{h.day}</span>
                  <span className="font-body text-white text-sm tabular-nums">{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <span className="font-body text-xs text-gold tracking-[0.3em] uppercase block mb-3">Instagram</span>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl text-white tracking-wider hover:text-gold transition-colors duration-200"
            >
              {CONTACT.instagramHandle}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
