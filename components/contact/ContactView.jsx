'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import ContactGlobe from '@/components/globe/ContactGlobe';

const ease = [0.16, 1, 0.3, 1];

const fieldClass =
  'w-full px-4 py-3.5 text-sm rounded-xl border border-white/12 bg-white/[0.04] text-white placeholder-white/30 focus:border-cyan-400/50 focus:outline-none transition-colors disabled:opacity-50';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  industry: '',
  revenueRange: '',
};

const nextSteps = [
  { n: '01', title: 'You tell us the basics', text: 'What you need, and where the business is today.' },
  { n: '02', title: 'We come back with a plan', text: 'What we would recommend, what it would take, and what happens next.' },
  { n: '03', title: 'You decide if we start', text: 'No long sales loop. A clear yes, no, or not yet.' },
];

function SelectChevron() {
  return (
    <span className="pointer-events-none absolute right-4 bottom-4 text-white/40" aria-hidden>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ContactDetails() {
  const cells = [
    { key: 'reach' },
    ...nextSteps.map((step) => ({ key: step.n, ...step })),
  ];

  return (
    <div className="mt-12 border border-white/15 sm:mt-14 lg:mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cells.map((cell, i) => (
          <div
            key={cell.key}
            className={[
              'border-white/15 px-5 py-6 sm:px-6 lg:px-7 lg:py-8',
              i < 3 ? 'border-b lg:border-b-0' : '',
              i < 2 ? 'sm:border-b' : 'sm:border-b-0',
              i % 2 === 0 ? 'sm:border-r' : '',
              i < 3 ? 'lg:border-r' : '',
            ].join(' ')}
          >
            {cell.key === 'reach' ? (
              <>
                <p className="text-eyebrow mb-4 text-cyan-300/80">Reach us</p>
                <a
                  href="mailto:support@vitespace.com"
                  className="block text-[0.95rem] font-medium tracking-tight text-white transition-colors hover:text-cyan-300"
                >
                  support@vitespace.com
                </a>
                <p className="mt-1.5 text-sm font-light text-white/45">India · Worldwide</p>
              </>
            ) : (
              <>
                <p className="text-eyebrow mb-4 text-cyan-300/80">{cell.n}</p>
                <p className="text-[0.95rem] font-semibold tracking-tight text-white">{cell.title}</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/55">{cell.text}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactHero() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="text-center"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
    >
      <p className="text-eyebrow text-cyan-300/70 mb-5">Contact</p>
      <h1 className="home-display text-white">
        Ready when
        <br />
        you are.
      </h1>
      <p className="home-lede mx-auto mt-5 max-w-[36rem] text-white/55 sm:mt-7">
        Give us the basics. We&apos;ll come back with what we&apos;d recommend, what it would take, and what happens next.
      </p>
    </motion.div>
  );
}

export default function ContactView() {
  const reduce = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `
Business Name: ${formData.businessName}
Industry: ${formData.industry}
Revenue Range: ${formData.revenueRange || 'Not specified'}
          `.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData(emptyForm);
    } catch (err) {
      setError(err.message || 'Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="relative z-10 text-white">
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:min-h-[100svh] lg:pb-24">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 55% 50% at 80% 20%, rgba(8,145,178,0.10), transparent 55%)',
            }}
          />

          <div className="home-shell relative">
            <ContactHero />

            <div className="mt-10 grid grid-cols-1 items-stretch gap-10 sm:mt-12 lg:mt-16 lg:grid-cols-2 lg:gap-10 xl:gap-14">
              <motion.div
                className="flex h-full min-h-[22rem] items-center justify-center lg:min-h-0"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.06, ease }}
              >
                <ContactGlobe />
              </motion.div>

              <motion.div
                className="flex h-full"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease }}
              >
                <div
                  className="flex h-full w-full flex-col justify-center rounded-[22px] border border-white/[0.12] bg-[#0B0B0B] px-5 py-7 sm:px-8 sm:py-9 lg:px-9"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
                >
                  {submitted ? (
                    <div className="py-10 text-center sm:py-14">
                      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="mb-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">Got it.</h2>
                      <p className="home-body text-white/50">We&apos;ll be in touch soon.</p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-8 text-sm text-white/60 transition-colors hover:text-cyan-300/80"
                      >
                        Send another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <p className="text-eyebrow text-cyan-300/70">The brief</p>
                        <p className="mt-2 text-sm text-white/45">A few details so we can come back with something useful.</p>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-[13px] text-white/45">Name</span>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            autoComplete="name"
                            placeholder="Your name"
                            className={fieldClass}
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-[13px] text-white/45">Phone</span>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            autoComplete="tel"
                            placeholder="Phone"
                            className={fieldClass}
                          />
                        </label>
                      </div>

                      <label className="block">
                        <span className="mb-2 block text-[13px] text-white/45">Email</span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          autoComplete="email"
                          placeholder="Email"
                          className={fieldClass}
                        />
                      </label>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-[13px] text-white/45">Business name</span>
                          <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            placeholder="Your company"
                            className={fieldClass}
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-[13px] text-white/45">Industry</span>
                          <input
                            type="text"
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            placeholder="e.g. Real estate, retail"
                            className={fieldClass}
                          />
                        </label>
                      </div>

                      <label className="relative block">
                        <span className="mb-2 block text-[13px] text-white/45">Current annual revenue</span>
                        <select
                          name="revenueRange"
                          value={formData.revenueRange}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className={`${fieldClass} appearance-none pr-10 cursor-pointer ${
                            formData.revenueRange ? 'text-white' : 'text-white/30'
                          }`}
                        >
                          <option value="">Select range</option>
                          <option value="0-100k" className="bg-[#111]">$0 - $100K</option>
                          <option value="100k-500k" className="bg-[#111]">$100K - $500K</option>
                          <option value="500k-1m" className="bg-[#111]">$500K - $1M</option>
                          <option value="1m-5m" className="bg-[#111]">$1M – $5M</option>
                          <option value="5m+" className="bg-[#111]">$5M+</option>
                        </select>
                        <SelectChevron />
                      </label>

                      {error && <p className="text-sm text-red-400/90">{error}</p>}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 ease-premium hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)] disabled:opacity-50 disabled:hover:scale-100"
                      >
                        {isSubmitting ? 'Sending…' : 'Start your project'}
                      </button>

                      <p className="text-center text-xs text-white/35">We reply with a plan, not a long sales loop.</p>
                    </form>
                  )}
                </div>
              </motion.div>

            </div>

            <ContactDetails />
          </div>
        </section>
      </div>
    </main>
  );
}
