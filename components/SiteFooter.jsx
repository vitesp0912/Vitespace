'use client';

import Link from 'next/link';

export default function SiteFooter() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const solutionLinks = [
    { label: 'AI Voice Agents', href: '/solutions/ai-voice-agents' },
    { label: 'AI Chatbots', href: '/solutions/ai-chatbots' },
    { label: 'AI Automation Systems', href: '/solutions/ai-automation-systems' },
    { label: 'Digital Infrastructure', href: '/solutions/digital-infrastructure' },
    { label: 'Growth & Brand Marketing', href: '/solutions/growth-marketing' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/90">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cyan-400/5 via-transparent to-transparent" />
      <div className="container-content relative z-10 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="VITESPACE logo" className="h-12 sm:h-14 w-auto" />
              <span className="text-white text-2xl sm:text-3xl font-semibold tracking-wider">VITESPACE</span>
            </div>
          </div>

          <div>
            <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/65 hover:text-cyan-300 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-3">Solutions</h3>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/65 hover:text-cyan-300 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-center text-center">
          <p className="text-white/45 text-xs">© {new Date().getFullYear()} VITESPACE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
