'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MenuOverlay({ isOpen, onClose }) {
  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Section links for smooth scrolling
  const menuItems = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'INSTAGRAM ↗', href: 'https://instagram.com' },
    { name: 'DRIBBBLE ↗', href: 'https://dribbble.com' },
    { name: 'TWITTER ↗', href: 'https://twitter.com' },
  ];

  const pathname = usePathname() || '/';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[999] bg-black text-white overflow-hidden"
        >
          {/* Close button (center top) */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute top-8 left-1/2 -translate-x-1/2 text-3xl text-gray-400 hover:opacity-70"
          >
            ×
          </button>

          {/* CENTER MENU */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            {menuItems.map((item, i) => {
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.04 }}
                  className="leading-[0.9] font-extrabold uppercase"
                  style={{
                    fontSize: '8vw',
                    color: '#fff',
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                      if (typeof onClose === 'function') onClose();
                    }}
                    className="inline-block hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* BOTTOM SECTION - Stacked on mobile, side by side on desktop */}
          <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-10 right-4 sm:right-10 flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-between gap-4 sm:gap-0">
            {/* COPYRIGHT */}
            <div className="text-xs tracking-wider text-gray-300 text-center sm:text-left order-2 sm:order-1">
              ©2025 ALL RIGHTS RESERVED
            </div>

            {/* SOCIAL LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-6 sm:gap-8 text-xs tracking-wider justify-center sm:justify-start order-1 sm:order-2"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-gray-300 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
