'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const pillars = [
  {
    key: 'build',
    index: '01',
    title: 'Build',
    line: 'We build the digital side of your business.',
    image: '/BUILD.png',
    href: '/solutions/digital-infrastructure',
    services: [
      'Business websites',
      'Web & mobile apps',
      'Custom software systems',
      'ERPs & CRMs',
      'Internal dashboards and tools',
    ],
  },
  {
    key: 'grow',
    index: '02',
    title: 'Grow',
    line: 'We help more people find your business.',
    image: '/GROW.png',
    href: '/solutions/growth-marketing',
    services: [
      'Search Engine Optimization',
      'Google Ads',
      'Meta Ads',
      'Brand & creative work',
      'Offline marketing',
    ],
  },
  {
    key: 'automate',
    index: '03',
    title: 'Automate',
    line: "We take the repeat work off your team's plate.",
    image: '/AUTOMATE.png',
    href: '/solutions/ai-automation-systems',
    services: [
      'AI chatbots',
      'Voice agents',
      'Automated workflows',
      'Lead qualification',
      'Business process automation',
    ],
  },
];

export default function ServicePillars() {
  return (
    <section id="services" className="home-section scroll-mt-24">
      <div className="home-shell">
        <motion.div
          className="max-w-[38rem] mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-eyebrow text-white/40 mb-5">What we do</p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-white tracking-tight leading-[1.05]">
            Three ways we help.
          </h2>
          <p className="mt-6 text-[15px] sm:text-base text-white/50 leading-relaxed">
            We build the digital side of your business, help you reach the right audience and automate the work that slows you down.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.key}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease }}
            >
              <Link
                href={pillar.href}
                className="pillar-card group grid grid-rows-[minmax(0,6fr)_1px_minmax(0,4fr)] h-full min-h-[520px] sm:min-h-[560px] rounded-[22px] border border-white/[0.08] bg-[#0c0c0c] overflow-hidden"
              >
                <div className="relative min-h-0 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to top, #0c0c0c 0%, rgba(12,12,12,0.92) 28%, rgba(12,12,12,0.35) 55%, transparent 78%)',
                    }}
                    aria-hidden
                  />

                  <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
                    <span className="text-[11px] tabular-nums tracking-[0.18em] text-white/35">
                      {pillar.index}
                    </span>
                    <span
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 transition-[border-color,color] duration-300 ease-out group-hover:border-cyan-300/40 group-hover:text-cyan-300/80"
                      aria-hidden
                    >
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-[3px]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-10 px-6 sm:px-7 pb-5 sm:pb-6">
                    <h3 className="text-[1.75rem] sm:text-[1.85rem] font-semibold text-white tracking-tight leading-none">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] sm:text-[15px] text-white/70 leading-snug tracking-tight">
                      {pillar.line}
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-white/[0.08]" aria-hidden />

                <div className="min-h-0 flex flex-col justify-center px-6 sm:px-7">
                  <ul>
                    {pillar.services.map((item, idx) => (
                      <li
                        key={item}
                        className={`flex items-center gap-3 text-sm text-white/70 py-3.5 ${
                          idx < pillar.services.length - 1 ? 'border-b border-white/[0.06]' : ''
                        }`}
                      >
                        <span className="tabular-nums text-[10px] tracking-[0.14em] text-white/25 w-4 shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
