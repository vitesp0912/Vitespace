'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import EmailPopup from '@/components/EmailPopup';
import SolutionsCTA from '@/components/solutions/SolutionsCTA';
import { paths } from '@/components/solutions/paths';
import {
  ArchComposition,
  AutomationShot,
  ChatVisual,
  GrowthShot,
  OperationsShot,
  VoiceVisual,
} from '@/components/solutions/visuals';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 18, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.35 },
};

function Visual({ kind }) {
  if (kind === 'system') return <OperationsShot />;
  if (kind === 'growth') return <GrowthShot />;
  if (kind === 'automation') return <AutomationShot />;
  if (kind === 'chat') return <ChatVisual />;
  if (kind === 'voice') return <VoiceVisual />;
  return <ArchComposition className="mx-auto lg:ml-auto lg:mr-0" />;
}

export default function SolutionDetail({ page }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="relative z-10 text-white">
        <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
          <div className="home-shell">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <Link
                href={paths.solutions}
                className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 transition-colors"
              >
                <span aria-hidden>←</span>
                All solutions
              </Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-12 lg:gap-16 xl:gap-20 items-center">
              <div className="max-w-xl">
                <motion.p
                  className="text-eyebrow text-white/40 mb-5"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease }}
                >
                  {page.index} / {page.eyebrow}
                </motion.p>
                <motion.h1
                  className="home-display text-white mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.06, ease }}
                >
                  {page.headline}
                  {page.headlineMuted && (
                    <>
                      <br />
                      <span className="text-white/50">{page.headlineMuted}</span>
                    </>
                  )}
                </motion.h1>
                <motion.p
                  className="home-lede text-white/55 max-w-lg mb-8 sm:mb-10"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.12, ease }}
                >
                  {page.support}
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18, ease }}
                >
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)] transition-all duration-300 ease-premium"
                  >
                    Let&apos;s Build →
                  </button>
                  <Link
                    href={paths.solutions}
                    className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white font-medium text-sm rounded-full hover:border-white/50 hover:bg-white/[0.04] transition-all duration-300 ease-premium"
                  >
                    See all solutions
                  </Link>
                </motion.div>
              </div>

              <motion.div
                className="relative w-full max-w-[440px] mx-auto lg:max-w-none lg:ml-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease }}
              >
                <Visual kind={page.visual} />
              </motion.div>
            </div>
          </div>
        </section>

        <section className={page.compact ? 'pb-16 sm:pb-20' : 'pb-20 sm:pb-24 lg:pb-32'}>
          <div className="home-shell">
            <motion.div
              className="max-w-[36rem] mb-10 sm:mb-14"
              {...fadeUp}
              transition={{ duration: 0.65, ease }}
            >
              <p className="text-eyebrow text-white/40 mb-4">{page.offerEyebrow}</p>
              <h2 className="home-section-title text-white">{page.offerTitle}</h2>
            </motion.div>

            <div className="max-w-3xl overflow-hidden rounded-[24px] border border-white/[0.12] bg-[#0B0B0B]">
              {page.offerings.map((item, i) => {
                const Inner = (
                  <div className={`sol-product group grid grid-cols-1 sm:grid-cols-[minmax(10rem,0.38fr)_minmax(0,0.62fr)] gap-1 sm:gap-8 items-baseline px-6 sm:px-8 py-6 sm:py-7 ${i !== page.offerings.length - 1 ? 'border-b border-white/[0.10]' : ''} ${item.quiet ? 'opacity-80' : ''}`}>
                    <h3 className="text-[1.2rem] sm:text-[1.35rem] font-semibold tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="home-body text-white/40 transition-colors duration-300 group-hover:text-white/55">
                      {item.line}
                    </p>
                  </div>
                );

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: i * 0.045, ease }}
                  >
                    {item.href ? <Link href={item.href}>{Inner}</Link> : Inner}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {page.panel && (
          <section className="scroll-mt-24 pb-20 sm:pb-28 lg:pb-36">
            <div className="home-shell">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-center">
                <div className="max-w-lg">
                  <motion.p className="text-eyebrow text-white/40 mb-5" {...fadeUp} transition={{ duration: 0.6, ease }}>
                    {page.panel.eyebrow}
                  </motion.p>
                  <motion.h2 className="home-section-title text-white" {...fadeUp} transition={{ duration: 0.7, delay: 0.04, ease }}>
                    {page.panel.title}
                  </motion.h2>
                  <motion.p className="home-lede mt-6 text-white/50" {...fadeUp} transition={{ duration: 0.65, delay: 0.08, ease }}>
                    {page.panel.text}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease }}
                >
                  <Visual kind={page.panel.visual} />
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {page.clips && (
          <section className="pb-20 sm:pb-24">
            <div className="home-shell">
              <motion.p className="text-eyebrow text-white/40 mb-8" {...fadeUp} transition={{ duration: 0.55, ease }}>
                {page.clips.eyebrow}
              </motion.p>
              <div className="max-w-2xl border-t border-white/[0.10]">
                {page.clips.items.map((clip, i) => (
                  <motion.div
                    key={clip.title}
                    className="py-6 border-b border-white/[0.10]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease }}
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <h3 className="text-[16px] font-medium tracking-tight text-white">{clip.title}</h3>
                      <span className="text-[12px] text-white/30">{clip.note}</span>
                    </div>
                    <p className="home-body text-white/40 mb-4">{clip.line}</p>
                    <audio controls className="w-full max-w-md h-9" preload="none">
                      <source src={clip.src} type="audio/mpeg" />
                    </audio>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {page.help && (
          <section className={page.compact ? 'pb-16 sm:pb-20' : 'home-section'}>
            <div className="home-shell">
              <motion.div
                className="max-w-[36rem] mb-10 sm:mb-14"
                {...fadeUp}
                transition={{ duration: 0.65, ease }}
              >
                <p className="text-eyebrow text-white/40 mb-4">How we help</p>
                <h2 className="home-section-title text-white">{page.helpTitle}</h2>
              </motion.div>
              <div className="max-w-3xl border-t border-white/[0.10]">
                {page.help.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-2 sm:gap-8 py-6 sm:py-7 border-b border-white/[0.10]"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: i * 0.04, ease }}
                  >
                    <span className="text-[12px] tabular-nums tracking-[0.14em] text-white/30 pt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-[17px] sm:text-lg font-medium tracking-tight text-white">{item.title}</h3>
                      <p className="mt-2 home-body text-white/45 max-w-xl">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="pb-8 sm:pb-12">
          <div className="home-shell">
            <motion.p
              className="text-eyebrow text-white/40 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              Also in solutions
            </motion.p>
            <div className="flex flex-wrap gap-x-10 gap-y-5">
              {page.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block max-w-xs"
                >
                  <span className="block text-[12px] tabular-nums tracking-[0.14em] text-white/30 mb-2">
                    {item.index}
                  </span>
                  <span className="block text-[1.25rem] font-semibold tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-white/40">{item.line}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SolutionsCTA />
      </div>
      <EmailPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </main>
  );
}
