'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { HeroRing } from '@/components/about/AboutRings';

const ease = [0.16, 1, 0.3, 1];

export default function AboutHero({ onStart }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pb-20">
      <div className="about-shell relative z-10 w-full">
        <div className="about-grid items-center">
          <div className="lg:col-span-6">
            <motion.h1
              className="about-display text-white"
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
            >
              We Build What
              <br />
              Your Business
              <br />
              Needs to <span className="text-cyan-300">Grow.</span>
            </motion.h1>
            <motion.p
              className="about-lede mt-6 max-w-[24rem] text-white/65 sm:mt-8"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
            >
              Vitespace brings software, marketing and automation under one roof.
            </motion.p>
            <motion.p
              className="about-kicker mt-7"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.22, ease }}
            >
              Build. Grow. Automate.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
            >
              <button type="button" onClick={onStart} className="about-btn w-full sm:w-auto">
                Start a conversation
              </button>
              <Link href="/solutions" className="about-btn-ghost w-full sm:w-auto">
                Explore our solutions →
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center lg:col-span-6 lg:block">
            <HeroRing />
          </div>
        </div>
      </div>
    </section>
  );
}
