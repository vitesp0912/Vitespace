'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const steps = [
  {
    n: '01',
    title: 'Discover',
    line: 'We understand what you need.',
    text: "We start by learning about your business, your goals, your customers, and what's getting in the way. This helps us figure out what you actually need, not just what you think you need.",
  },
  {
    n: '02',
    title: 'Plan',
    line: 'We turn it into a clear plan.',
    text: "We define the right solution, scope, timeline, and priorities. Whether we're building software, planning a marketing campaign, or setting up an automation, you know exactly what we're going to do before we start.",
  },
  {
    n: '03',
    title: 'Build & Launch',
    line: 'We put the plan into action.',
    text: 'Our team handles the design, development, marketing, or automation work from start to finish. We test everything, keep you updated, and get it ready to work in the real world.',
  },
  {
    n: '04',
    title: 'Grow',
    line: "We don't stop when it's live.",
    text: 'Once things are running, we look at what can be improved. From marketing performance to new features and better workflows, we help you keep moving forward as your business grows.',
  },
];

export default function ProcessEditorial() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target);
        if (index >= 0) setActive(index);
      },
      { threshold: [0.35, 0.55], rootMargin: '-18% 0px -38% 0px' }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="home-section scroll-mt-24">
      <div className="home-shell">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 lg:gap-20 xl:gap-28 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease }}
            >
              <p className="text-eyebrow text-white/40 mb-5">How we work</p>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-white tracking-tight leading-[1.08] mb-6">
                Four steps.
                <br />
                <span className="text-white/45">From idea to growth.</span>
              </h2>
              <p className="text-white/45 text-[15px] sm:text-base max-w-[22rem] leading-[1.75] mb-12">
                Whether you need a website, software, marketing, or automation, we keep the process simple, from the first conversation to the final result.
              </p>

              <ol className="hidden lg:flex flex-col">
                {steps.map((step, i) => (
                  <li
                    key={step.n}
                    className={`flex items-baseline gap-4 py-2.5 text-sm tracking-tight border-l transition-colors duration-500 ${
                      active === i
                        ? 'text-white border-cyan-300/50 pl-4'
                        : 'text-white/28 border-white/[0.08] pl-4'
                    }`}
                  >
                    <span
                      className={`tabular-nums tracking-[0.16em] text-[11px] ${
                        active === i ? 'text-cyan-300/80' : 'text-white/25'
                      }`}
                    >
                      {step.n}
                    </span>
                    <span>{step.title}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>

          <ol>
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <li
                  key={step.n}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className={`border-t border-white/[0.08] ${
                    i === 0 ? 'pt-0 lg:border-t-0 pb-16 sm:pb-20 lg:pb-28' : 'py-16 sm:py-20 lg:py-28'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: i * 0.04, ease }}
                  >
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-[3.5rem_minmax(0,1fr)] lg:grid-cols-[4.25rem_minmax(0,1fr)] gap-x-6 lg:gap-x-8 gap-y-5 transition-opacity duration-500 ${
                        isActive ? 'opacity-100' : 'lg:opacity-55'
                      }`}
                    >
                      <span
                        className={`text-[13px] tabular-nums tracking-[0.18em] pt-2 sm:pt-3.5 ${
                          isActive ? 'text-cyan-300/80' : 'text-white/30'
                        }`}
                      >
                        {step.n}
                      </span>

                      <div className="max-w-[34rem]">
                        <h3 className="text-[1.65rem] sm:text-[1.85rem] lg:text-[2.15rem] font-semibold text-white tracking-tight leading-[1.15]">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-base sm:text-[1.05rem] text-white/70 leading-snug tracking-tight">
                          {step.line}
                        </p>
                        <p className="mt-5 sm:mt-6 text-[15px] sm:text-base text-white/40 leading-[1.8]">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
