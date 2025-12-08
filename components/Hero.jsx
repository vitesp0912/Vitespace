'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-24 pb-10 relative">
      <div className="w-full mx-auto text-center select-none">

        {/* MAIN TITLE */}
        <motion.h1
          className="font-extrabold text-white uppercase tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]"
          style={{ fontSize: '15vw', lineHeight: '0.8' }}
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          VITESPACE
        </motion.h1>

        {/* SUBTITLE */}
        <motion.h2
          className="text-white/90 font-semibold mt-20 tracking-tight drop-shadow-[0_0_18px_rgba(255,255,255,0.4)]"
          style={{ fontSize: '4.8vw', lineHeight: '1' }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        >
          Digital Presence, Made Easy
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className="text-white/70 mt-10 tracking-tight"
          style={{ fontSize: '1.2vw' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        >
          Websites, systems, and automation — everything your business needs in one place
        </motion.p>

      </div>
    </section>
  );
}
