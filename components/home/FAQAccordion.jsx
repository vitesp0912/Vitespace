'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Most websites and tools ship in 15 to 20 days. Bigger software takes longer. We tell you the date before we start.',
  },
  {
    q: 'What do you actually build?',
    a: 'We build business websites, mobile apps, custom software, ERPs, CRMs, dashboards and other digital systems. We also provide SEO, Google Ads, Meta Ads, offline marketing and automation.',
  },
  {
    q: 'Do we own the work?',
    a: 'Yes. Once the agreed project is fully paid for, you own the final website, software, design assets and business data created for your project, subject to any third-party licences.',
  },
  {
    q: 'What do you need from us?',
    a: "Mostly your business knowledge. We'll guide you through the information, content, access and decisions we need from your side before and during the project.",
  },
  {
    q: 'Can you help after launch?',
    a: 'Yes. We provide ongoing support, updates, improvements, marketing and additional development based on what your business needs.',
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on the work. After a short call we send a clear number. No hourly fog.',
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="home-section scroll-mt-24">
      <div className="home-shell">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-20">
          <motion.div
            className="lg:sticky lg:top-32 lg:self-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-eyebrow text-white/40 mb-5">FAQ</p>
            <h2 className="home-section-title text-white">
              Straight answers.
            </h2>
          </motion.div>

          <div className="border-t border-white/[0.08]">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={item.q}
                  className="border-b border-white/[0.08]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-6 py-5 sm:py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] sm:text-[17px] text-white font-medium tracking-tight group-hover:text-cyan-200 transition-colors">
                      {item.q}
                    </span>
                    <span
                      className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-white/15 text-white/60 text-lg leading-none flex items-center justify-center transition-transform duration-500 ${
                        isOpen ? 'rotate-45 text-cyan-300 border-cyan-300/30' : ''
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="home-body pb-6 sm:pb-7 text-white/55 max-w-xl">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
