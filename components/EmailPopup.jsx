'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmailPopup({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, isSubmitting]);

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
          name,
          phone,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset after 2 seconds and close
    setTimeout(() => {
      setSubmitted(false);
        setName('');
        setPhone('');
      setEmail('');
        setMessage('');
      onClose();
    }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again or contact us directly.');
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
      onClose();
    }
  };

  const popupContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            style={{ zIndex: 999999 }}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center p-3 sm:p-6"
            style={{ zIndex: 999999 }}
            onClick={handleClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-black border-2 border-white/20 rounded-2xl p-4 sm:p-5 md:p-6 max-w-md w-full mx-2 sm:mx-4 shadow-2xl backdrop-blur-xl relative max-h-[90vh] overflow-y-auto"
            >
              {!submitted ? (
                <>
                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors z-10"
                    disabled={isSubmitting}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-1.5 sm:mb-2 pr-8">
                    Let's Connect
                  </h2>
                  <p className="text-white/70 text-xs sm:text-sm md:text-base mb-4 sm:mb-5">
                    Fill in your details and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                    {/* Name Field */}
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-white/30 bg-white/5 focus:border-white focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50"
                    />

                    {/* Phone Number Field */}
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-white/30 bg-white/5 focus:border-white focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50"
                    />

                    {/* Email Field */}
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-white/30 bg-white/5 focus:border-white focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50"
                    />

                    {/* Message Field */}
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project or how we can help..."
                      rows={3}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-white/30 bg-white/5 focus:border-white focus:outline-none text-white placeholder-white/40 transition-colors disabled:opacity-50 resize-none"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black font-bold text-sm md:text-base uppercase tracking-wider py-2.5 md:py-3 rounded-full hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Success!</h3>
                  <p className="text-white/70 text-sm md:text-base">We'll be in touch soon.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Render into document.body so popup is always on top (homepage + our-work)
  if (typeof document !== 'undefined') {
    return createPortal(popupContent, document.body);
  }
  return popupContent;
}
