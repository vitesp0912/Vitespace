'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import EmailPopup from '@/components/EmailPopup';

const ease = [0.16, 1, 0.3, 1];

const industries = [
  {
    id: 'real-estate',
    n: '01',
    title: 'Real Estate',
    line: 'Make it easier for buyers and tenants to discover properties, enquire, and take the next step.',
    capabilities: ['Property Websites', 'Listing Platforms', 'Lead Portals'],
    image: '/Realestate.png',
  },
  {
    id: 'hospitality',
    n: '02',
    title: 'Hospitality',
    line: 'Give guests a better way to discover your property, make bookings, and connect with your brand.',
    capabilities: ['Hotel Websites', 'Booking Systems', 'Guest Experience'],
    image: '/Hospitality.png',
  },
  {
    id: 'retail',
    n: '03',
    title: 'Retail & Ecommerce',
    line: 'Turn your products into a better online shopping experience and give your team the tools to manage it.',
    capabilities: ['Ecommerce', 'Online Stores', 'Inventory Systems'],
    image: '/Ecommerce.png',
  },
  {
    id: 'services',
    n: '04',
    title: 'Professional Services',
    line: 'Make it easier for potential clients to find you, understand your services, and get in touch.',
    capabilities: ['Business Websites', 'Lead Systems', 'CRMs'],
    image: '/Professionalservices.png',
  },
  {
    id: 'operations',
    n: '05',
    title: 'Business Operations',
    line: 'Bring the tools your team uses every day into one connected system.',
    capabilities: ['ERPs', 'CRMs', 'Dashboards'],
    image: '/Businessoperations.png',
  },
  {
    id: 'creative',
    n: '06',
    title: 'Creative Businesses',
    line: 'Put your work in front of the right people with a digital presence that does it justice.',
    capabilities: ['Portfolio Websites', 'Case Studies', 'Brand Websites'],
    image: '/Creativestudios.png',
  },
];

const contentEase = { duration: 0.4, ease };

function IndustryPreview({ item, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!item) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [item, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease }}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={onClose}
            className="absolute inset-0 bg-black/70"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${item.title} preview`}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.3, ease }}
            className="relative w-full max-w-[720px] overflow-hidden rounded-[20px] border border-white/[0.12] bg-[#0B0B0B] p-3 sm:p-3.5"
            style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.55)' }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/55 hover:text-white hover:border-white/25 transition-colors"
              aria-label="Close"
            >
              <span className="block text-lg leading-none">×</span>
            </button>
            <img
              src={item.image}
              alt=""
              className="block w-full h-auto rounded-[14px]"
            />
            <div className="flex items-baseline gap-3 px-1 pt-3 pb-0.5">
              <span className="text-[12px] tabular-nums tracking-[0.08em] text-cyan-300/80">{item.n}</span>
              <p className="text-sm font-medium tracking-tight text-white">{item.title}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function FeatureContent({ item, compact = false, onOpen }) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      {!compact && (
        <>
          <p className="text-[14px] sm:text-[15px] tracking-[0.08em] text-cyan-300/80 tabular-nums">
            {item.n}
          </p>
          <h3 className="home-feature-title mt-3 text-[#F5F5F5]">
            {item.title}
          </h3>
        </>
      )}
      <p className={`${compact ? 'mt-0' : 'mt-4'} home-lede max-w-[540px] text-[#B0B0B0]`}>
        {item.line}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.capabilities.map((cap) => (
          <span
            key={cap}
            className="inline-flex items-center rounded-[7px] border border-white/[0.14] px-2.5 py-1.5 text-[11px] sm:text-[12px] uppercase tracking-[0.08em] text-white/70"
          >
            {cap}
          </span>
        ))}
      </div>
      <div className="mt-8 sm:mt-9 h-px w-full shrink-0 bg-white/[0.10]" />
      <div className={`mt-5 sm:mt-6 ${compact ? 'shrink-0' : 'flex min-h-0 flex-1 items-center'}`}>
        <button
          type="button"
          onClick={() => onOpen(item)}
          className="group relative block w-full overflow-hidden rounded-[14px] border border-white/[0.10] bg-[#070707] text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-cyan-300/45"
        >
          <img src={item.image} alt="" className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]" />
          <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[11px] tracking-tight text-white/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View
          </span>
        </button>
      </div>
    </div>
  );
}

export default function IndustriesGrid() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const active = industries.find((item) => item.id === activeId) || industries[0];

  const onNavKeyDown = (event, index) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const next = event.key === 'ArrowDown' ? index + 1 : index - 1;
    const bounded = (next + industries.length) % industries.length;
    setActiveId(industries[bounded].id);
    document.getElementById(`industry-tab-${industries[bounded].id}`)?.focus();
  };

  return (
    <section id="industries" className="home-section relative">
      <div className="home-shell relative">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] gap-12 lg:gap-16 xl:gap-24 items-stretch">
          <motion.div
            className="flex h-full min-h-0 flex-col"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-eyebrow text-white/40 mb-5">
              Where we build
            </p>
            <h2 className="home-section-title">
              <span className="text-[#F5F5F5]">We learn your world.</span>
              <br />
              <span className="text-[#777777]">Then we build for it.</span>
            </h2>
            <p className="home-lede mt-6 max-w-[34rem] text-white/45">
              Every business works differently. We design and build around your customers, processes, and goals.
            </p>

            <div
              className="mt-10 hidden lg:flex flex-1 min-h-0 flex-col"
              role="tablist"
              aria-label="Industries"
            >
              {industries.map((item, index) => {
                const selected = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    id={`industry-tab-${item.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="industry-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveId(item.id)}
                    onMouseEnter={() => {
                      if (!preview) setActiveId(item.id);
                    }}
                    onKeyDown={(event) => onNavKeyDown(event, index)}
                    className={`industry-nav-row group relative flex w-full flex-1 items-center gap-5 py-[18px] text-left border-b transition-colors duration-300 ease-premium focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-cyan-300/45 ${
                      selected
                        ? 'border-white/[0.18]'
                        : 'border-white/[0.10] hover:border-white/[0.16]'
                    }`}
                  >
                    {selected && (
                      <span
                        className="absolute left-0 top-[18px] bottom-[18px] w-[2px] bg-cyan-300/80"
                        aria-hidden
                      />
                    )}
                    <span
                      className={`w-6 pl-3 text-[13px] tabular-nums tracking-[0.06em] ${
                        selected ? 'text-white/70' : 'text-white/35'
                      }`}
                    >
                      {item.n}
                    </span>
                    <span
                      className={`flex-1 text-[16px] sm:text-[17px] font-medium tracking-tight ${
                        selected ? 'text-white' : 'text-white/50 group-hover:text-white/75'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`text-[15px] transition-colors ${
                        selected ? 'text-cyan-300/85' : 'text-white/25 group-hover:text-white/45'
                      }`}
                      aria-hidden
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="hidden h-full min-h-0 lg:flex"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            <div
              id="industry-panel"
              role="tabpanel"
              aria-labelledby={`industry-tab-${active.id}`}
              className="industry-feature-panel flex h-full w-full flex-col rounded-[24px] border border-white/[0.12] bg-[#0B0B0B] px-10 py-10 xl:px-11 xl:py-11"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className="flex min-h-0 flex-1 flex-col"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={contentEase}
                >
                  <FeatureContent item={active} onOpen={setPreview} />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 lg:hidden" role="list">
          {industries.map((item) => {
            const open = item.id === activeId;
            return (
              <div key={item.id} className="border-b border-white/[0.10]" role="listitem">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`industry-mobile-${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className="relative flex w-full items-center gap-4 py-5 text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-cyan-300/45"
                >
                  {open && (
                    <span className="absolute left-0 top-4 bottom-4 w-[2px] bg-cyan-300/80" aria-hidden />
                  )}
                  <span
                    className={`pl-3 text-[12px] tabular-nums ${open ? 'text-white/70' : 'text-white/35'}`}
                  >
                    {item.n}
                  </span>
                  <span className={`flex-1 text-[17px] font-medium tracking-tight ${open ? 'text-white' : 'text-white/55'}`}>
                    {item.title}
                  </span>
                  <span className={open ? 'text-cyan-300/85' : 'text-white/25'} aria-hidden>
                    {open ? '−' : '→'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`industry-mobile-${item.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <div className="industry-feature-panel mb-5 rounded-[22px] border border-white/[0.12] bg-[#0B0B0B] px-6 py-6">
                        <FeatureContent item={item} compact onOpen={setPreview} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 sm:mt-14 lg:mt-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="home-body max-w-xl text-white/45">
            Don&apos;t see your industry? We build around your business, not a fixed industry list.
          </p>
          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="mt-2.5 inline-flex items-center gap-2 text-[15px] text-white/80 hover:text-cyan-300/80 transition-colors duration-300 tracking-tight group"
          >
            Tell us what you need
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </button>
        </motion.div>
      </div>

      <EmailPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <IndustryPreview item={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
