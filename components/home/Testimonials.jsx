'use client';

import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const quotes = [
  {
    text: 'We had a messy brief and a tight date. They still shipped a site that looks like we spent twice as long on it.',
    name: 'Meera Kapoor',
    role: 'Owner, boutique hotel',
  },
  {
    text: 'Our numbers used to live in five different places. Now the team opens one screen and knows what to do.',
    name: 'Rohan Desai',
    role: 'Operations lead, retail',
  },
  {
    text: 'No surprises. We signed knowing the scope, the timeline, and exactly what would go live.',
    name: 'Aarav Malhotra',
    role: 'Director, real estate',
  },
];

function QuoteCard({ quote, featured = false }) {
  return (
    <blockquote
      className={`flex h-full min-h-[240px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] ${
        featured ? 'p-8 sm:p-10 md:p-12 lg:min-h-[280px]' : 'p-6 sm:p-8'
      }`}
    >
      <p
        className={
          featured
            ? 'text-[1.2rem] sm:text-[1.35rem] lg:text-[1.5rem] text-white leading-snug tracking-tight'
            : 'home-lede text-white/80'
        }
      >
        “{quote.text}”
      </p>
      <footer className={featured ? 'mt-10' : 'mt-6'}>
        <p className="text-sm font-medium text-white tracking-tight">{quote.name}</p>
        <p className="mt-1 text-sm text-white/45">{quote.role}</p>
      </footer>
    </blockquote>
  );
}

export default function Testimonials() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    if (!width) return;
    const next = Math.round(el.scrollLeft / width);
    setActive(Math.min(quotes.length - 1, Math.max(0, next)));
  }, []);

  const goTo = (index) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
    setActive(index);
  };

  return (
    <section className="home-section">
      <div className="home-shell">
        <motion.div
          className="mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-eyebrow text-white/40 mb-5">After launch</p>
          <h2 className="home-section-title text-white">
            What it feels like
            <br />
            on the other side.
          </h2>
        </motion.div>

        <div className="lg:hidden">
          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {quotes.map((quote) => (
              <div key={quote.name} className="w-full shrink-0 snap-start snap-always">
                <QuoteCard quote={quote} featured />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Reviews">
            {quotes.map((quote, index) => (
              <button
                key={quote.name}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={`Show review ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index ? 'w-6 bg-cyan-300/85' : 'w-1.5 bg-white/25'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-[1.35fr_1fr] gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease }}
          >
            <QuoteCard quote={quotes[0]} featured />
          </motion.div>

          <div className="flex flex-col gap-5">
            {quotes.slice(1).map((quote, i) => (
              <motion.div
                key={quote.name}
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.08 + i * 0.08, ease }}
              >
                <QuoteCard quote={quote} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
