'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import EmailPopup from './EmailPopup';

export default function FinalCTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="section-padding min-h-screen flex flex-col justify-center">
      <div className="container-content max-w-4xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="text-eyebrow text-white/60">NEXT STEP</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to bring your business online the right way?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-white/80 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Tell us where you are stuck, we'll show you a clear, simple plan.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <button
            onClick={() => setIsPopupOpen(true)}
            className="group relative px-10 py-5 bg-white text-black font-semibold text-lg rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-premium"
          >
            <span className="relative z-10">Book Your Free Strategy Call</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </button>
        </motion.div>

        {/* Secondary Link */}
        <motion.p
          className="text-white/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Just need to talk first?{' '}
          <button
            onClick={() => setIsPopupOpen(true)}
            className="underline underline-offset-4 hover:text-white/80 transition-colors"
          >
            Contact us
          </button>
        </motion.p>
      </div>

      {/* Email Popup */}
      <EmailPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
