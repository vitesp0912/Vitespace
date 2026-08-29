'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function HomeCTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
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
          className="text-eyebrow text-cyan-300/70 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
        >
          Next step
        </motion.p>
        <motion.h2
          className="font-semibold text-white tracking-tight leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.05, ease }}
        >
          Ready when
          <br />
          you are.
        </motion.h2>
        <motion.p
          className="text-white/55 text-base sm:text-lg max-w-md mx-auto mb-10 sm:mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
        >
          Tell us what you need. We’ll reply with a plan.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 sm:py-5 bg-white text-black font-semibold text-sm sm:text-base rounded-full hover:scale-[1.03] hover:shadow-[0_16px_50px_rgba(255,255,255,0.2)] transition-all duration-300 ease-premium"
          >
            Start your project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
