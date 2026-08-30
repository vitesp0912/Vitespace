'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import EmailPopup from '@/components/EmailPopup';

const ease = [0.16, 1, 0.3, 1];

export default function HomeHero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease }}
        aria-hidden
      >
        <img
          src="/vitespacehero.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[84%_22%] sm:object-[72%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25 sm:hidden" />
        <div className="absolute inset-0 bg-black/25 sm:hidden" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20 lg:via-black/55 lg:to-transparent" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
      </motion.div>

      <div className="home-shell w-full relative z-10">
        <div className="max-w-[20.5rem] sm:max-w-xl lg:max-w-[40rem]">
          <motion.h1
            className="home-display text-white mb-5 sm:mb-7"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
          >
            <span className="sm:hidden">
              Websites, apps,
              <br />
              and software
              <br />
              built to
              <br />
              <span className="text-cyan-300">grow your business.</span>
            </span>
            <span className="hidden sm:inline">
              Websites, apps,
              <br />
              and software built to
              <br />
              <span className="text-cyan-300">grow your business.</span>
            </span>
          </motion.h1>

          <motion.p
            className="home-lede text-white/65 sm:text-white/60 mb-7 sm:mb-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            We design and build digital solutions that help businesses attract customers, streamline operations, and grow.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center justify-center w-full sm:w-auto min-h-12 px-7 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)] active:scale-[0.98] transition-all duration-300 ease-premium"
            >
              Start your project
            </button>
            <Link
              href="#services"
              className="inline-flex items-center justify-center w-full sm:w-auto min-h-12 px-7 py-3.5 bg-transparent border border-white/25 text-white font-medium text-sm rounded-full hover:border-white/50 hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-300 ease-premium"
            >
              See what we build →
            </Link>
          </motion.div>
        </div>
      </div>

      <EmailPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
