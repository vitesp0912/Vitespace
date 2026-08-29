'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const quotes = [
  {
    text: 'They treated the site like a product, not a brochure. We went live in three weeks and it still feels expensive.',
    role: 'Founder',
    place: 'Hospitality',
  },
  {
    text: 'I stopped chasing our own data. The dashboard is where the business lives now.',
    role: 'Operator',
    place: 'Fuel retail',
  },
  {
    text: 'Clear from day one. We knew the date, the cost, and what we would get.',
    role: 'Principal',
    place: 'Real estate',
  },
];

export default function Testimonials() {
  return (
    <section className="home-section">
      <div className="home-shell">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-eyebrow text-white/45 mb-4">After launch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.05]">
            What it feels like
            <br />
            on the other side.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-4 sm:gap-5">
          <motion.blockquote
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 md:p-12 flex flex-col justify-between min-h-[280px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease }}
          >
            <p className="text-xl sm:text-2xl md:text-[1.7rem] text-white leading-snug tracking-tight">
              “{quotes[0].text}”
            </p>
            <footer className="mt-10 text-sm text-white/45">
              {quotes[0].role}
              <span className="text-white/20 mx-2">·</span>
              {quotes[0].place}
            </footer>
          </motion.blockquote>

          <div className="flex flex-col gap-4 sm:gap-5">
            {quotes.slice(1).map((q, i) => (
              <motion.blockquote
                key={q.role}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 sm:p-8 flex-1 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.08 + i * 0.08, ease }}
              >
                <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                  “{q.text}”
                </p>
                <footer className="mt-6 text-sm text-white/45">
                  {q.role}
                  <span className="text-white/20 mx-2">·</span>
                  {q.place}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
