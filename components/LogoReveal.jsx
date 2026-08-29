'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function LogoReveal() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    setShow(true);
    setProgress(1);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduce ? 200 : 1900;
    document.body.style.overflow = 'hidden';

    const start = performance.now();
    let raf;
    let exitTimer;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      const value = Math.max(1, Math.round(eased * 100));
      setProgress(value);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        exitTimer = setTimeout(() => setShow(false), 180);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
    };
  }, [pathname]);

  useEffect(() => {
    if (!show) document.body.style.overflow = '';
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999998] flex items-center justify-center bg-black"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease }}
          aria-hidden
        >
          <div key={pathname} className="flex flex-col items-center">
            <div className="overflow-hidden">
              <motion.img
                src="/logo.png"
                alt=""
                className="h-20 sm:h-24 w-auto"
                initial={{ y: '115%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease }}
              />
            </div>

            <div className="overflow-hidden mt-5">
              <motion.p
                className="text-white font-medium tracking-[0.32em] text-sm sm:text-base"
                initial={{ y: '120%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.75, delay: 0.28, ease }}
              >
                VITESPACE
              </motion.p>
            </div>

            <motion.span
              className="mt-6 block h-px bg-white/45"
              initial={{ width: 0 }}
              animate={{ width: 56 }}
              transition={{ duration: 0.6, delay: 0.72, ease }}
            />
          </div>

          <span
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 tabular-nums select-none"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
              lineHeight: 0.85,
              letterSpacing: '0.08em',
              fontWeight: 600,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.22)',
            }}
          >
            {String(progress).padStart(3, '0')}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
