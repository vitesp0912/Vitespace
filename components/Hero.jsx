'use client';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import EmailPopup from './EmailPopup';

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const primaryButtonRef = useRef(null);
  const secondaryButtonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(null);

  useEffect(() => {
    const updateButtonWidth = () => {
      if (primaryButtonRef.current && window.innerWidth < 640) {
        const width = primaryButtonRef.current.offsetWidth;
        setButtonWidth(width);
      } else {
        setButtonWidth(null);
      }
    };

    updateButtonWidth();
    window.addEventListener('resize', updateButtonWidth);
    return () => window.removeEventListener('resize', updateButtonWidth);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-24 pb-20 relative">
      <div className="container-content w-full max-w-4xl mx-auto">
        {/* Centered Content */}
        <div className="space-y-8 text-center">
            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Bring your business{' '}
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                online
              </span>{' '}
              without the tech overwhelm
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              We handle everything your business needs to go digital—so you can focus on running the business, not handling the tech.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                ref={primaryButtonRef}
                onClick={() => setIsPopupOpen(true)}
                className="px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-premium"
              >
                Book a Free Strategy Call
              </button>
              <button
                ref={secondaryButtonRef}
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-premium sm:w-auto"
                style={buttonWidth ? { width: `${buttonWidth}px` } : {}}
              >
                View Services
              </button>
            </motion.div>
          </div>
        </div>

      {/* Email Popup */}
      <EmailPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
