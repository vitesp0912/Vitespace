'use client';

import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const steps = [
  {
    n: '01',
    title: 'Discover',
    line: 'We understand your business.',
    text: 'Your goals, customers, current setup, and what needs to change.',
  },
  {
    n: '02',
    title: 'Plan',
    line: "You know what's being built.",
    text: 'Clear scope, timeline, priorities, and cost before we begin.',
  },
  {
    n: '03',
    title: 'Build & Launch',
    line: 'We handle the work.',
    text: 'Design, development, marketing, automation, testing, and launch.',
  },
  {
    n: '04',
    title: 'Grow',
    line: 'We keep improving.',
    text: 'Support, optimisation, new features, and ongoing growth when you need it.',
  },
];

function StepPanel({ step }) {
  return (
    <div className="rounded-[22px] border border-white/[0.08] bg-[#0c0c0c] px-6 py-7 sm:px-8 sm:py-8">
      <p className="text-[13px] tabular-nums tracking-[0.18em] text-cyan-300/80">{step.n}</p>
      <h3 className="home-card-title mt-3 text-white">{step.title}</h3>
      <p className="mt-4 text-[15px] sm:text-base text-white/70 leading-snug tracking-tight">
        {step.line}
      </p>
      <p className="home-body mt-5 text-white/40">{step.text}</p>
    </div>
  );
}

function SectionIntro({ className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease }}
    >
      <p className="text-eyebrow text-white/40 mb-5">How we work</p>
      <h2 className="home-section-title text-white">
        Four steps.
        <br />
        <span className="text-white/45">From idea to growth.</span>
      </h2>
      <p className="home-lede mt-6 max-w-[34rem] text-white/45">
        Whether you need a website, software, marketing, or automation, we keep the process simple, from the first conversation to the final result.
      </p>
    </motion.div>
  );
}

export default function ProcessEditorial() {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef(null);

  const onScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    if (!width) return;
    const next = Math.round(el.scrollLeft / width);
    setActive(Math.min(steps.length - 1, Math.max(0, next)));
  }, []);

  const goTo = (index) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
    setActive(index);
  };

  return (
    <section id="process" className="home-section scroll-mt-24">
      <div className="home-shell">
        <div className="lg:hidden">
          <SectionIntro className="mb-8" />

          <div
            className="mb-5 grid grid-cols-4 gap-1 rounded-[18px] border border-white/[0.10] bg-white/[0.03] p-1"
            role="tablist"
            aria-label="Process steps"
          >
            {steps.map((step, index) => {
              const selected = active === index;
              return (
                <button
                  key={step.n}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-label={`${step.n} ${step.title}`}
                  onClick={() => goTo(index)}
                  className={`flex min-h-[3.25rem] flex-col items-center justify-center rounded-[14px] px-1 transition-colors duration-300 ${
                    selected ? 'bg-white text-black' : 'text-white/40'
                  }`}
                >
                  <span className={`text-[10px] tabular-nums tracking-[0.14em] ${selected ? 'text-black/50' : 'text-white/30'}`}>
                    {step.n}
                  </span>
                  <span className="mt-0.5 text-[11px] font-medium tracking-tight leading-tight text-center">
                    {step.title === 'Build & Launch' ? 'Launch' : step.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {steps.map((step) => (
              <div key={step.n} className="w-full shrink-0 snap-start snap-always">
                <StepPanel step={step} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <SectionIntro className="mb-16 xl:mb-20" />

          <div className="grid grid-cols-4 gap-8 xl:gap-10">
            {steps.map((step, i) => {
              const align = i === 0 ? 'left' : i === steps.length - 1 ? 'right' : 'center';
              const lineClass = {
                0: 'left-[18px] w-[calc(150%+2rem-18px)] xl:w-[calc(150%+2.5rem-18px)]',
                1: 'left-1/2 w-[calc(100%+2rem)] xl:w-[calc(100%+2.5rem)]',
                2: 'left-1/2 w-[calc(150%+2rem-18px)] xl:w-[calc(150%+2.5rem-18px)]',
              }[i];
              return (
                <motion.article
                  key={step.n}
                  className={`group relative ${
                    align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left'
                  }`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease }}
                >
                  {lineClass && (
                    <span
                      className={`pointer-events-none absolute top-[18px] z-0 h-px bg-white/[0.10] ${lineClass}`}
                      aria-hidden
                    />
                  )}
                  <span
                    className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.14] bg-black text-[11px] tabular-nums tracking-[0.12em] text-cyan-300/80 transition-colors duration-300 group-hover:border-cyan-300/40 ${
                      align === 'right' ? 'ml-auto' : align === 'center' ? 'mx-auto' : ''
                    }`}
                  >
                    {step.n}
                  </span>
                  <h3 className="mt-8 text-[1.35rem] xl:text-[1.5rem] font-semibold tracking-tight text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[15px] xl:text-base text-white/70 leading-snug tracking-tight">
                    {step.line}
                  </p>
                  <p className="home-body mt-4 text-white/40">{step.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
