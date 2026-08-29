'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EmailPopup from '@/components/EmailPopup';

const ease = [0.16, 1, 0.3, 1];

const iconStroke = {
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
};

function IconWrap({ children }) {
  return (
    <span
      className="industry-icon shrink-0 inline-flex w-14 h-14 items-center justify-center rounded-[12px] border border-white/[0.10] bg-white/[0.04] text-cyan-300/80"
      aria-hidden
    >
      {children}
    </span>
  );
}

function BuildingIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48">
      <rect x="6" y="10" width="22" height="32" rx="1.5" {...iconStroke} />
      <rect x="28" y="20" width="14" height="22" rx="1.5" {...iconStroke} />
      <path d="M6 42h36" {...iconStroke} />
      <rect x="14" y="32" width="6" height="10" rx="0.8" {...iconStroke} />
      <path d="M12 18h2.5M18 18h2.5M12 24h2.5M18 24h2.5" {...iconStroke} />
      <path d="M32 26h4M32 31h4M32 36h4" {...iconStroke} />
    </svg>
  );
}

function ClocheIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48">
      <circle cx="24" cy="6.5" r="2.4" {...iconStroke} />
      <path d="M24 8.9v2.4" {...iconStroke} />
      <path d="M8.5 31.5C8.5 18.2 15 11.5 24 11.5s15.5 6.7 15.5 20" {...iconStroke} />
      <path d="M7 31.5h34" {...iconStroke} />
      <ellipse cx="24" cy="35" rx="18.5" ry="3.8" {...iconStroke} />
      <path d="M5.5 35c1.6 5.8 9.2 9.5 18.5 9.5s16.9-3.7 18.5-9.5" {...iconStroke} />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48">
      <path d="M12 16h24l2.2 24.5A2.5 2.5 0 0 1 35.7 43H12.3a2.5 2.5 0 0 1-2.5-2.5L12 16Z" {...iconStroke} />
      <path d="M18 16V13.5A6 6 0 0 1 24 7.5 6 6 0 0 1 30 13.5V16" {...iconStroke} />
      <path d="M12.8 22h22.4" {...iconStroke} />
    </svg>
  );
}

function SystemsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48">
      <rect x="17" y="17" width="14" height="14" rx="3" {...iconStroke} />
      <rect x="5" y="5" width="10" height="10" rx="2.2" {...iconStroke} />
      <rect x="33" y="5" width="10" height="10" rx="2.2" {...iconStroke} />
      <rect x="5" y="33" width="10" height="10" rx="2.2" {...iconStroke} />
      <rect x="33" y="33" width="10" height="10" rx="2.2" {...iconStroke} />
      <path d="M15 12h3.5C20.4 12 22 13.6 22 15.5V17" {...iconStroke} />
      <path d="M33 12h-3.5C26.6 12 25 13.6 25 15.5V17" {...iconStroke} />
      <path d="M15 36h3.5C20.4 36 22 34.4 22 32.5V31" {...iconStroke} />
      <path d="M33 36h-3.5C26.6 36 25 34.4 25 32.5V31" {...iconStroke} />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48">
      <rect x="7" y="9" width="26" height="32" rx="2" {...iconStroke} />
      <path d="M13 17h14M13 23h10" {...iconStroke} />
      <rect x="13" y="28" width="9" height="6" rx="1" {...iconStroke} />
      <path d="M27 31.5 39.5 19a2.4 2.4 0 0 1 3.4 3.4L30.4 34.9 25 36.5l1.6-5.4Z" {...iconStroke} />
      <path d="M37.2 21.2l3.6 3.6" {...iconStroke} />
    </svg>
  );
}

function OpsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48">
      <rect x="6" y="8" width="36" height="32" rx="3" {...iconStroke} />
      <path d="M6 16h36" {...iconStroke} />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" />
      <circle cx="16.5" cy="12" r="1.1" fill="currentColor" />
      <circle cx="21" cy="12" r="1.1" fill="currentColor" />
      <path d="M13 36V24M21 36V20M29 36v-9M37 36V17" {...iconStroke} />
    </svg>
  );
}

const industries = [
  {
    n: '01',
    title: 'Real Estate',
    description:
      'Digital tools that help property businesses attract leads, showcase listings, and manage enquiries.',
    capabilities: ['Property Websites', 'Listing Platforms', 'Lead Portals'],
    icon: BuildingIcon,
  },
  {
    n: '02',
    title: 'Hospitality',
    description:
      'Websites and digital systems that make it easier for guests to discover, book, and connect with your business.',
    capabilities: ['Hotel Websites', 'Booking Systems', 'Guest Experience'],
    icon: ClocheIcon,
  },
  {
    n: '03',
    title: 'Retail',
    description:
      'Digital storefronts and business systems that help retailers sell online and manage day-to-day operations.',
    capabilities: ['Ecommerce', 'Online Stores', 'Inventory Systems'],
    icon: BagIcon,
  },
  {
    n: '04',
    title: 'Business Systems',
    description: 'Custom software that brings your everyday business operations into one connected system.',
    capabilities: ['ERPs', 'CRMs', 'Dashboards'],
    icon: SystemsIcon,
  },
  {
    n: '05',
    title: 'Creative Studios',
    description:
      'Websites and digital experiences that present your work clearly and help turn visitors into clients.',
    capabilities: ['Portfolio Websites', 'Case Studies', 'Brand Websites'],
    icon: PenIcon,
  },
  {
    n: '06',
    title: 'Operations',
    description: 'Custom internal tools that help teams manage information, track work, and make better decisions.',
    capabilities: ['Dashboards', 'Workflow Systems', 'Reporting'],
    icon: OpsIcon,
  },
];

export default function IndustriesGrid() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="home-section relative !pb-8 md:!pb-10 lg:!pb-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 55%, black, transparent)',
        }}
      />

      <div className="home-shell relative">
        <motion.div
          className="mb-14 sm:mb-16 lg:mb-[4.5rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-eyebrow tracking-[0.16em] text-white/40 mb-5 sm:mb-6">Where we build</p>
          <h2 className="font-semibold tracking-tight leading-[0.98] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] xl:text-[4.25rem]">
            <span className="text-[#F5F5F5]">We learn your world.</span>
            <br />
            <span className="text-[#777777]">Then we build for it.</span>
          </h2>
          <p className="mt-6 sm:mt-8 max-w-[36rem] text-[17px] sm:text-lg lg:text-xl text-white/45 leading-[1.55]">
            Every business works differently. We combine technology, design and marketing to build solutions that fit the way you work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 items-stretch">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.n}
                className="h-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease }}
              >
                <div className="industry-card flex flex-col h-full min-h-[268px] sm:min-h-[280px] lg:min-h-[292px] rounded-[18px] border border-white/[0.08] bg-[#0c0c0c] p-6 sm:p-8">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <IconWrap>
                      <Icon />
                    </IconWrap>
                    <div className="min-w-0">
                      <span className="block text-[12px] tabular-nums tracking-[0.08em] text-white/35">
                        {item.n}
                      </span>
                      <h3 className="industry-title mt-1.5 text-[1.5rem] sm:text-[1.65rem] lg:text-[1.75rem] font-semibold text-white tracking-tight leading-[1.15]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-[15px] sm:text-[16px] text-[#9A9A9A] leading-[1.5] max-w-[21.5rem] min-h-[4.5rem]">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="h-px w-full bg-white/[0.08] mb-4" />
                    <p className="text-[13px] text-white/35 leading-relaxed tracking-tight">
                      {item.capabilities.map((cap, idx) => (
                        <span key={cap}>
                          {idx > 0 && <span className="mx-1.5 text-white/20">·</span>}
                          {cap}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-10 sm:mt-12 lg:mt-14 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="text-[15px] sm:text-base text-white/45 leading-relaxed">
            Don&apos;t see your industry? We work with businesses of all kinds.
          </p>
          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="mt-2.5 inline-flex items-center gap-2 text-[15px] sm:text-base text-white/80 hover:text-cyan-300/80 transition-colors duration-300 tracking-tight"
          >
            Tell us what you need
            <span aria-hidden>→</span>
          </button>
        </motion.div>
      </div>

      <EmailPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
