'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import EmailPopup from '@/components/EmailPopup';
import { paths } from '@/components/solutions/paths';

export const ease = [0.16, 1, 0.3, 1];
export const view = { once: true, amount: 0.3, margin: '0px 0px -8% 0px' };

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: view,
};

export const suiteLinks = [
  { href: paths.products, label: 'Digital Products' },
  { href: paths.growth, label: 'Growth' },
  { href: paths.automation, label: 'Automation' },
  { href: paths.chatbots, label: 'Chatbots' },
  { href: paths.voice, label: 'Voice' },
];

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={view}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Arrow({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function SuiteShell({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className="relative z-10 text-white">{children}</div>
    </main>
  );
}

export function Breadcrumb({ label }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-white/40">
      <Link href={paths.solutions} className="transition-colors hover:text-white/70">
        Solutions
      </Link>
      <span className="mx-2 text-white/20" aria-hidden>
        /
      </span>
      <span className="text-white/55">{label}</span>
    </nav>
  );
}

export function PrimaryButton({ children, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)] active:scale-[0.98] transition-all duration-300 ease-premium ${className}`}
    >
      {children}
    </button>
  );
}

export function GhostLink({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white font-medium text-sm rounded-full hover:border-white/50 hover:bg-white/[0.04] transition-all duration-300 ease-premium ${className}`}
    >
      {children}
      <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function RelatedStrip({ current }) {
  return (
    <section className="pb-8 sm:pb-12">
      <div className="home-shell">
        <Reveal>
          <p className="text-eyebrow text-white/40 mb-8">You may also need</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-x-10 sm:gap-y-4 border-t border-white/[0.10] pt-8">
            {suiteLinks.map((item) => {
              const active = item.href === current;
              if (active) {
                return (
                  <span key={item.href} className="text-[1.05rem] font-medium tracking-tight text-white/30">
                    {item.label}
                  </span>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="suite-link group inline-flex items-center gap-2 text-[1.05rem] font-medium tracking-tight text-white/80 hover:text-white"
                >
                  {item.label}
                  <Arrow className="h-3.5 w-3.5 text-white/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300/80" />
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SuiteCTA({
  title,
  text,
  cta,
  align = 'center',
  quiet = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const centered = align === 'center';

  return (
    <section className={`relative overflow-hidden ${quiet ? 'py-20 sm:py-24' : 'py-24 sm:py-32 md:py-40'}`}>
      {!quiet && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% 100%, rgba(8,145,178,0.14), transparent 60%)',
          }}
        />
      )}
      <div className={`home-shell relative ${centered ? 'text-center' : ''}`}>
        <Reveal>
          <h2 className="home-closing-title text-white mb-6 sm:mb-8">{title}</h2>
          {text && (
            <p className={`home-lede text-white/55 mb-10 sm:mb-12 ${centered ? 'max-w-xl mx-auto' : 'max-w-lg'}`}>
              {text}
            </p>
          )}
          <PrimaryButton onClick={() => setIsOpen(true)}>{cta}</PrimaryButton>
        </Reveal>
      </div>
      <EmailPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
