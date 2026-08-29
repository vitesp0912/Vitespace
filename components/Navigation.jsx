'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import EmailPopup from '@/components/EmailPopup';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation({ onMenuClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBuildOpen, setIsBuildOpen] = useState(false);
  const pathname = usePathname() || '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 py-4 sm:py-6">
      {isScrolled && (
        <>
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: 'radial-gradient(ellipse at center top, transparent 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.8) 100%)',
              backdropFilter: 'blur(8px)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 80%, transparent 100%)',
              filter: 'blur(4px)',
              transform: 'scaleY(2)',
            }}
          />
        </>
      )}
      <div className="relative flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity">
          <img
            src="/logo.png"
            alt="VITESPACE Logo"
            className="h-8 md:h-10 w-auto"
          />
          <div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wider text-white">
            VITESPACE
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`relative text-sm tracking-tight transition-colors duration-300 ${
                isActive(link.href)
                  ? 'text-white after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px after:bg-white'
                  : 'text-white/55 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setIsBuildOpen(true)}
            className="hidden md:inline-flex glass-button px-5 lg:px-6 py-2.5 rounded-full text-sm font-medium tracking-wider"
          >
            Let’s Build
          </button>
          <button
            onClick={onMenuClick}
            className="relative p-4 sm:p-5 hover:opacity-70 transition-opacity md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
              <span className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
            </div>
          </button>
        </div>
      </div>
      <EmailPopup isOpen={isBuildOpen} onClose={() => setIsBuildOpen(false)} />
    </nav>
  );
}
