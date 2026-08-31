'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const items = [
  {
    title: '15–20 Days',
    text: 'Typical delivery for websites and smaller projects.',
    icon: LightningIcon,
  },
  {
    title: '100% Custom',
    text: 'Built around your business',
    icon: ShieldIcon,
  },
  {
    title: 'Built for Growth',
    text: 'Solutions that scale',
    icon: TargetIcon,
  },
  {
    title: 'Ongoing Support',
    text: "We're with you always!",
    icon: HeadsetIcon,
  },
];

function LightningIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2 4 14h7l-1 8 10-12h-7l0-8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 5 6.2v5.3c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5V6.2L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12.2 11 14.2 15.2 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12h2.5M19 12h2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 13.5v-1.8A7.5 7.5 0 0 1 12 4.2a7.5 7.5 0 0 1 7.5 7.5v1.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="3.2" y="12.2" width="4.2" height="6.2" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="16.6" y="12.2" width="4.2" height="6.2" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20.8 16.8v.9A3.1 3.1 0 0 1 17.7 21H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function TrustStrip() {
  return (
    <section className="relative pb-6 sm:pb-8">
      <div className="home-shell">
        <motion.div
          className="rounded-[22px] border border-white/[0.09] overflow-hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.018) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className={[
                    'group px-4 py-5 sm:px-7 sm:py-7 lg:px-9 lg:py-8',
                    i % 2 === 1 ? 'border-l border-white/[0.08]' : '',
                    i >= 2 ? 'border-t border-white/[0.08] lg:border-t-0' : '',
                    i > 0 ? 'lg:border-l lg:border-white/[0.08]' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="flex flex-col items-start gap-3 lg:flex-row lg:gap-4 transition-transform duration-300 ease-premium group-hover:-translate-y-[3px]">
                    <span className="flex-shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-[10px] border border-white/[0.08] bg-white/[0.04] text-cyan-300/85 flex items-center justify-center transition-all duration-300 ease-premium group-hover:border-cyan-400/30 group-hover:shadow-[0_0_18px_rgba(34,211,238,0.14)]">
                      <Icon />
                    </span>
                    <div className="min-w-0 lg:pt-0.5">
                      <p className="text-[1.05rem] sm:text-[1.2rem] lg:text-[1.25rem] font-semibold text-white tracking-tight leading-none">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[12px] sm:text-[13px] lg:text-sm text-white/45 leading-snug">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
