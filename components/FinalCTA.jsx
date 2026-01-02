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
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight mb-4 sm:mb-6 uppercase px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to bring your business online the right way?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
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
          className="mb-4 sm:mb-6 px-4"
        >
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-black font-semibold text-sm sm:text-base md:text-lg rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-premium w-full sm:w-auto"
          >
            <span className="relative z-10">Book Your Free Strategy Call</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </button>
        </motion.div>
      </div>

      {/* Email Popup */}
      <EmailPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
