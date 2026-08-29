'use client';

import Link from 'next/link';

export default function SiteFooter() {
  const studio = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const solutions = [
    { label: 'AI Voice Agents', href: '/solutions/ai-voice-agents' },
    { label: 'AI Chatbots', href: '/solutions/ai-chatbots' },
    { label: 'Automation', href: '/solutions/ai-automation-systems' },
    { label: 'Digital infrastructure', href: '/solutions/digital-infrastructure' },
    { label: 'Growth marketing', href: '/solutions/growth-marketing' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/[0.08] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(8,145,178,0.07), transparent 60%)',
        }}
      />

      <div className="home-shell relative z-10 pt-16 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 sm:mb-20">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img src="/logo.png" alt="VITESPACE" className="h-10 sm:h-11 w-auto" />
              <span className="text-white text-xl sm:text-2xl font-medium tracking-[0.18em]">
                VITESPACE
              </span>
            </Link>
            <p className="mt-5 text-white/50 text-sm leading-relaxed max-w-xs">
              Custom websites and business software. Built with care. Shipped in weeks.
            </p>
            <Link
              href="/contact"
              className="inline-flex mt-6 text-sm text-cyan-300/90 hover:text-cyan-200 transition-colors"
            >
              Start a project →
            </Link>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
              Studio
            </h3>
            <ul className="space-y-2.5">
              {studio.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li>
                <a href="mailto:support@vitespace.com" className="hover:text-white transition-colors">
                  support@vitespace.com
                </a>
              </li>
              <li className="text-white/40">India · Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden select-none pointer-events-none" aria-hidden>
          <p className="footer-mark text-center">VITESPACE</p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col items-center text-center gap-2">
          <p className="text-white/35 text-xs tracking-wide">
            © {new Date().getFullYear()} Vitespace Private Limited. All rights reserved.
          </p>
          <p className="text-white/30 text-xs tracking-wide">Built by hand. Shipped with care.</p>
        </div>
      </div>
    </footer>
  );
}
