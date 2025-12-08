'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import EmailPopup from './EmailPopup';

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-20">
      <motion.div 
        className="w-full max-w-5xl mx-auto text-center"
        style={{ y, opacity }}
      >
        {/* Main CTA Title */}
        <motion.h2
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white uppercase tracking-tight mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Ready to
        </motion.h2>
        <motion.h3
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white uppercase tracking-tight mb-16 opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          HUSTLE?
        </motion.h3>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="group relative bg-white text-black font-bold text-xl md:text-2xl uppercase tracking-wider px-16 py-6 rounded-full hover:bg-gray-200 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="text-white opacity-60 text-lg mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Let's build something great together
        </motion.p>
      </motion.div>

      {/* Email Popup */}
      <EmailPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
