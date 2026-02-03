'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import EmailPopup from './EmailPopup';

export default function Navigation({ onMenuClick }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 py-4 sm:py-6">
      {/* Vignette Overlay */}
      {isScrolled && (
        <>
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: 'radial-gradient(ellipse at center top, transparent 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.8) 100%)',
              backdropFilter: 'blur(8px)',
            }}
          />
          {/* Blurry Bottom Border */}
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
        {/* Left: Logo - links to home */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity">
          <img 
            src="/logo.png" 
            alt="VITESPACE Logo" 
            className="h-8 md:h-10 w-auto"
          />
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider text-white">
            VITESPACE
          </div>
        </Link>

        {/* Right: Menu Button (mobile) / Center (desktop) */}
        <div className="flex items-center gap-4">
          {/* Menu Button - Right on mobile, center on desktop */}
        <button
          onClick={onMenuClick}
            className="relative p-4 sm:p-5 hover:opacity-70 transition-opacity md:absolute md:left-1/2 md:-translate-x-1/2"
          aria-label="Toggle menu"
        >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7">
            {/* Top dot */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></span>
            {/* Left dot */}
              <span className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
            {/* Right dot */}
              <span className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
            {/* Bottom dot */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></span>
          </div>
        </button>

          {/* Right: Contact Button - Hidden on mobile, visible on desktop */}
        <button 
          onClick={() => setIsPopupOpen(true)}
            className="hidden md:block glass-button px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-xs md:text-sm font-medium tracking-wider"
        >
          CONTACT NOW
        </button>
        </div>
      </div>

      {/* Email Popup */}
      <EmailPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </nav>
  );
}
