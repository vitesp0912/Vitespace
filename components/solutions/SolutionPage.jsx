'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import HomeCTA from '@/components/home/HomeCTA';

const ease = [0.16, 1, 0.3, 1];

export default function SolutionPage({ page }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="relative z-10 text-white">
        <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-24">
          <div className="home-shell">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-12 lg:gap-16 xl:gap-20 items-center">
              <div className="max-w-xl">
                <motion.p
                  className="text-eyebrow tracking-[0.16em] text-white/40 mb-5"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease }}
                >
                  {page.index} / {page.eyebrow}
                </motion.p>

                <motion.h1
                  className="font-semibold text-white tracking-tight leading-[0.98] text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.06, ease }}
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
                  className="text-white/55 text-base sm:text-lg leading-relaxed max-w-lg mb-8 sm:mb-10"
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
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.02] transition-all duration-300 ease-premium"
                  >
                    Start your project
                  </Link>
                  <Link
                    href="/#services"
                    className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white font-medium text-sm rounded-full hover:border-white/50 hover:bg-white/[0.04] transition-all duration-300 ease-premium"
                  >
                    See all services →
                  </Link>
                </motion.div>
              </div>

              <motion.div
                className="relative rounded-[22px] border border-white/[0.08] bg-[#0c0c0c] overflow-hidden aspect-[4/3] lg:aspect-[5/4]"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
              >
                <img
                  src={page.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24 lg:pb-32">
          <div className="home-shell">
            <motion.div
              className="max-w-[36rem] mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease }}
            >
              <p className="text-eyebrow tracking-[0.16em] text-white/40 mb-4">{page.listEyebrow}</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-[1.08]">
                {page.listTitle}
              </h2>
            </motion.div>

            <ul className="max-w-3xl border-t border-white/[0.08]">
              {page.services.map((item, i) => (
                <motion.li
                  key={item}
                  className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-4 sm:gap-8 items-baseline py-5 sm:py-6 border-b border-white/[0.08]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease }}
                >
                  <span className="tabular-nums text-[12px] tracking-[0.14em] text-white/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base sm:text-lg text-white/80 tracking-tight">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="home-section">
          <div className="home-shell">
            <motion.div
              className="max-w-[36rem] mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease }}
            >
              <p className="text-eyebrow tracking-[0.16em] text-white/40 mb-4">How we help</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-[1.08]">
                {page.helpTitle}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
              {page.help.map((item, i) => (
                <motion.article
                  key={item.title}
                  className="rounded-[18px] border border-white/[0.08] bg-[#0c0c0c] p-7 sm:p-8"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease }}
                >
                  <span className="block text-[12px] tabular-nums tracking-[0.08em] text-white/30 mb-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[1.35rem] sm:text-2xl font-semibold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#9A9A9A] leading-[1.55] max-w-sm">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-8 sm:pb-12">
          <div className="home-shell">
            <motion.p
              className="text-eyebrow tracking-[0.16em] text-white/40 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              Also on this studio
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
              {page.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[18px] border border-white/[0.08] bg-[#0c0c0c] p-7 sm:p-8 hover:border-white/[0.16] hover:bg-white/[0.035] transition-[border-color,background-color] duration-300"
                >
                  <span className="text-[12px] tabular-nums tracking-[0.08em] text-white/30">
                    {item.index}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/45 leading-relaxed">{item.line}</p>
                  <span className="mt-6 inline-flex text-sm text-white/55 group-hover:text-cyan-300/80 transition-colors">
                    View →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <HomeCTA />
      </div>
    </main>
  );
}
