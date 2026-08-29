'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1];

const fieldClass =
  'w-full px-4 py-3 text-sm rounded-xl border border-white/12 bg-white/[0.04] text-white placeholder-white/30 focus:border-cyan-400/50 focus:outline-none transition-colors disabled:opacity-50';

const services = [
  'Business websites',
  'Web & mobile apps',
  'Custom software systems',
  'ERPs & CRMs',
  'Internal dashboards and tools',
  'Search Engine Optimization',
  'Google Ads',
  'Meta Ads',
  'Brand & creative work',
  'Offline marketing',
  'AI chatbots',
  'Voice agents',
  'Automated workflows',
  'Lead qualification',
  'Business process automation',
  'Something else',
];

export default function EmailPopup({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const reset = useCallback(() => {
    setName('');
    setPhone('');
    setEmail('');
    setService('');
    setSubmitted(false);
    setError('');
  }, []);

  const handleClose = useCallback(() => {
    if (isSubmitting) return;
    reset();
    onClose();
  }, [isSubmitting, onClose, reset]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape' && !isSubmitting) handleClose();
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, isSubmitting, handleClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message: service }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');

      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        reset();
        onClose();
      }, 2200);
    } catch (err) {
      console.error('Error submitting form:', err);
      setIsSubmitting(false);
      setError('Could not send. Please try again.');
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={handleClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="build-form-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease }}
            className="relative w-full max-w-[440px] rounded-[22px] border border-white/[0.1] p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            style={{
              background:
                'linear-gradient(180deg, rgba(18,18,18,0.98) 0%, rgba(8,8,8,0.98) 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 30px 80px rgba(0,0,0,0.55)',
            }}
          >
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 text-white/45 hover:text-white hover:border-white/25 transition-colors disabled:opacity-40"
              aria-label="Close"
            >
              <span className="block leading-none text-lg">×</span>
            </button>

            {!submitted ? (
              <>
                <p className="text-eyebrow text-cyan-300/80 mb-3">Start a project</p>
                <h2
                  id="build-form-title"
                  className="text-2xl sm:text-[1.75rem] font-semibold text-white tracking-tight mb-2"
                >
                  Let’s build.
                </h2>
                <p className="text-sm text-white/50 mb-7 leading-relaxed">
                  A few details. We’ll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                    autoComplete="name"
                    className={fieldClass}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    disabled={isSubmitting}
                    autoComplete="email"
                    className={fieldClass}
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    required
                    disabled={isSubmitting}
                    autoComplete="tel"
                    className={fieldClass}
                  />
                  <div className="relative">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className={`${fieldClass} appearance-none pr-10 cursor-pointer ${
                        service ? 'text-white' : 'text-white/30'
                      }`}
                    >
                      <option value="" disabled>
                        What do you need?
                      </option>
                      {services.map((item) => (
                        <option key={item} value={item} className="bg-[#111] text-white">
                          {item}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40" aria-hidden>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>

                  {error && <p className="text-sm text-red-400/90">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-1 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.01] transition-all duration-300 ease-premium disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Sending…' : 'Send'}
                  </button>
                </form>

                <p className="mt-5 text-center text-xs text-white/35">
                  Need a longer brief?{' '}
                  <Link
                    href="/contact"
                    onClick={handleClose}
                    className="text-white/60 hover:text-cyan-300 transition-colors"
                  >
                    Open the full form
                  </Link>
                </p>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Got it.</h3>
                <p className="text-sm text-white/50">We’ll be in touch soon.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
