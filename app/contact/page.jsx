'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    revenueRange: '',
    currentSystems: '',
    primaryChallenge: '',
    budgetRange: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `
Business Name: ${formData.businessName}
Industry: ${formData.industry}
Revenue Range: ${formData.revenueRange}
Current Systems: ${formData.currentSystems}
Primary Challenge: ${formData.primaryChallenge}
Budget Range: ${formData.budgetRange}
          `.trim()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitting(false);
      setSubmitted(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          businessName: '',
          industry: '',
          revenueRange: '',
          currentSystems: '',
          primaryChallenge: '',
          budgetRange: '',
          name: '',
          email: '',
          phone: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again or contact us directly.');
    }
  };

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Content */}
      <div className="relative z-10 text-white noise-bg">

        {/* Hero Section */}
        <section className="pt-44 sm:pt-48 md:pt-40 pb-12 sm:pb-16">
          <div className="container-content max-w-4xl mx-auto text-center">
            <motion.span
              className="text-eyebrow text-cyan-400 block mb-4 uppercase tracking-wider"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.span>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Schedule Strategy Consultation
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Share your business challenges. We'll design a strategic roadmap.
            </motion.p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding">
          <div className="container-content max-w-3xl mx-auto">
            {!submitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 font-semibold text-sm mb-2 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 text-sm rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 font-semibold text-sm mb-2 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 text-sm rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/90 font-semibold text-sm mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Business Information */}
                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-white font-bold text-lg uppercase mb-4">Business Information</h3>
                  </div>

                  <div>
                    <label className="block text-white/90 font-semibold text-sm mb-2 uppercase tracking-wide">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-white/90 font-semibold text-sm mb-2 uppercase tracking-wide">
                      Industry *
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50"
                      placeholder="e.g., E-commerce, Healthcare, Real Estate"
                    />
                  </div>

                  <div>
                    <label className="block text-white/90 font-semibold text-sm mb-2 uppercase tracking-wide">
                      Current Annual Revenue Range
                    </label>
                    <select
                      name="revenueRange"
                      value={formData.revenueRange}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none text-white disabled:opacity-50"
                    >
                      <option value="">Select range</option>
                      <option value="0-100k">$0 - $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m+">$5M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/90 font-semibold text-sm mb-2 uppercase tracking-wide">
                      Current Systems Used *
                    </label>
                    <input
                      type="text"
                      name="currentSystems"
                      value={formData.currentSystems}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50"
                      placeholder="e.g., Shopify, HubSpot, Google Ads, None"
                    />
                  </div>

                  <div>
                    <label className="block text-white/90 font-semibold text-sm mb-2 uppercase tracking-wide">
                      Primary Growth Challenge *
                    </label>
                    <textarea
                      name="primaryChallenge"
                      value={formData.primaryChallenge}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={4}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50 resize-none"
                      placeholder="What's the biggest challenge preventing your business from scaling?"
                    />
                  </div>

                  <div>
                    <label className="block text-white/90 font-semibold text-sm mb-2 uppercase tracking-wide">
                      Budget Range (Optional)
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none text-white disabled:opacity-50"
                    >
                      <option value="">Prefer to discuss</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k+">$50K+</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-bold text-sm sm:text-base uppercase tracking-wider py-3 sm:py-4 rounded-full hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Schedule Consultation'
                    )}
                  </button>

                  <p className="text-white/50 text-xs text-center">
                    We'll review your submission and get back to you within 24 hours.
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase mb-4">
                  Request Submitted!
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  We've received your consultation request. Our team will reach out within 24 hours.
                </p>
              </motion.div>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}
