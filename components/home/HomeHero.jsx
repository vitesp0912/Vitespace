'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function HomeHero() {
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
          className="absolute inset-0 w-full h-full object-cover object-[78%_center] sm:object-[72%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20 lg:via-black/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
      </motion.div>

      <div className="home-shell w-full relative z-10">
        <div className="max-w-xl lg:max-w-[40rem]">
          <motion.h1
            className="font-semibold text-white tracking-tight leading-[0.96] text-[2.2rem] sm:text-[2.75rem] md:text-[3.35rem] lg:text-[3.4rem] xl:text-[4rem] mb-6 sm:mb-7"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
          >
            Websites, apps,
            <br />
            and software built to
            <br />
            <span className="text-white/55">grow your business.</span>
          </motion.h1>

          <motion.p
            className="text-white/65 text-base sm:text-lg max-w-lg leading-relaxed mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            From your first website to custom business software, we build digital solutions that help you attract customers and run your business better.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)] transition-all duration-300 ease-premium"
            >
              Start your project
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border border-white/25 text-white font-medium text-sm rounded-full hover:border-white/50 hover:bg-white/[0.04] transition-all duration-300 ease-premium"
            >
              See what we build →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
