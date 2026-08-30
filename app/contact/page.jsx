'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';

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
  currentSystems: '',
  primaryChallenge: '',
  budgetRange: '',
};

export default function ContactPage() {
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
Current Systems: ${formData.currentSystems}
Primary Challenge: ${formData.primaryChallenge}
Budget Range: ${formData.budgetRange || 'Prefer to discuss'}
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
        <section className="home-section pt-32 sm:pt-36 lg:pt-40">
          <div className="home-shell">
            <motion.div
              className="mx-auto max-w-xl text-center"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <p className="text-eyebrow text-white/40 mb-5">Contact</p>
              <h1 className="home-section-title text-white">Ready when you are.</h1>
              <p className="home-lede mt-6 text-white/45">
                Give us the basics. We&apos;ll come back with what we&apos;d recommend, what it would take, and what happens next.
              </p>
              <a
                href="mailto:support@vitespace.com"
                className="mt-6 inline-block text-sm text-white/70 hover:text-cyan-300/80 transition-colors tracking-tight"
              >
                support@vitespace.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="mx-auto mt-10 sm:mt-12 max-w-3xl rounded-[24px] border border-white/[0.12] bg-[#0B0B0B] px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
            >
                {submitted ? (
                  <div className="py-10 sm:py-14 text-center">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">Got it.</h2>
                    <p className="home-body text-white/50">We&apos;ll be in touch soon.</p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm text-white/60 hover:text-cyan-300/80 transition-colors"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                    <div className="pt-2">
                      <p className="text-[13px] text-white/35 tracking-tight">Business</p>
                      <div className="mt-3 h-px w-full bg-white/[0.08]" />
                    </div>

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
                        placeholder="e.g. Real estate, hospitality, retail"
                        className={fieldClass}
                      />
                    </label>

                    <label className="block relative">
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
                      <span className="pointer-events-none absolute right-4 bottom-4 text-white/40" aria-hidden>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[13px] text-white/45">Current systems</span>
                      <input
                        type="text"
                        name="currentSystems"
                        value={formData.currentSystems}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. Shopify, HubSpot, none"
                        className={fieldClass}
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[13px] text-white/45">Primary challenge</span>
                      <textarea
                        name="primaryChallenge"
                        value={formData.primaryChallenge}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        rows={4}
                        placeholder="What is the biggest thing holding the business back?"
                        className={`${fieldClass} resize-none`}
                      />
                    </label>

                    <label className="block relative">
                      <span className="mb-2 block text-[13px] text-white/45">Budget range</span>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`${fieldClass} appearance-none pr-10 cursor-pointer ${
                          formData.budgetRange ? 'text-white' : 'text-white/30'
                        }`}
                      >
                        <option value="">Prefer to discuss</option>
                        <option value="500-2k" className="bg-[#111]">$500 - $2K</option>
                        <option value="2k-5k" className="bg-[#111]">$2K - $5K</option>
                        <option value="5k-10k" className="bg-[#111]">$5K - $10K</option>
                        <option value="10k-25k" className="bg-[#111]">$10K - $25K</option>
                        <option value="25k-50k" className="bg-[#111]">$25K - $50K</option>
                        <option value="50k+" className="bg-[#111]">$50K+</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 bottom-4 text-white/40" aria-hidden>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </label>

                    {error && <p className="text-sm text-red-400/90">{error}</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center min-h-12 px-7 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.01] transition-all duration-300 ease-premium disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isSubmitting ? 'Sending…' : 'Start your project'}
                    </button>

                    <p className="text-center text-xs text-white/35">
                      We reply with a plan, not a long sales loop.
                    </p>
                  </form>
                )}
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
