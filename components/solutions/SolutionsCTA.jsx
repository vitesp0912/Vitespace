'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EmailPopup from '@/components/EmailPopup';
import { ArchField } from '@/components/solutions/visuals';

const ease = [0.16, 1, 0.3, 1];

export default function SolutionsCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="cta" className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
      <ArchField />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 100%, rgba(8,145,178,0.18), transparent 60%)',
        }}
      />
      <div className="home-shell relative text-center">
        <motion.p
          className="text-eyebrow text-cyan-300/70 mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
        >
          Next step
        </motion.p>
        <motion.h2
          className="home-closing-title text-white mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.08, ease }}
        >
          Tell us what you need.
        </motion.h2>
        <motion.p
          className="home-lede text-white/55 max-w-xl mx-auto mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.85, delay: 0.16, ease }}
        >
          Tell us what you&apos;re trying to solve. We&apos;ll help you find the right next step.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.85, delay: 0.24, ease }}
        >
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center px-10 py-4 sm:py-5 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.03] hover:shadow-[0_16px_50px_rgba(255,255,255,0.2)] transition-all duration-300 ease-premium"
          >
            Let&apos;s Build →
          </button>
        </motion.div>
      </div>
      <EmailPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
