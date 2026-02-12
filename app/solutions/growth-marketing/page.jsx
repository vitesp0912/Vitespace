'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import Link from 'next/link';

const FloatingLines = dynamic(() => import('@/components/FloatingLines'), { ssr: false });

export default function GrowthMarketingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const performanceMarketing = [
    {
      title: 'Meta Ads (Facebook & Instagram)',
      description: 'Targeted campaigns with audience segmentation, retargeting, and conversion optimization.'
    },
    {
      title: 'Google Ads (Search & Display)',
      description: 'Intent-based search campaigns and display networks for high-conversion traffic.'
    },
    {
      title: 'Funnel Engineering',
      description: 'Multi-step conversion funnels with landing pages, lead magnets, and automated follow-ups.'
    },
    {
      title: 'Retargeting Systems',
      description: 'Pixel-based retargeting to convert warm traffic and abandoned cart recovery.'
    },
    {
      title: 'Conversion Optimization',
      description: 'A/B testing, analytics tracking, and continuous optimization for better ROI.'
    }
  ];

  const brandAmplification = [
    {
      title: 'Influencer Collaborations',
      description: 'Strategic partnerships with relevant influencers to amplify brand reach and credibility.'
    },
    {
      title: 'Hoardings & Outdoor Advertising',
      description: 'High-visibility outdoor placements in strategic locations across target cities.'
    },
    {
      title: 'Newspaper Promotions',
      description: 'Print media campaigns for local brand awareness and credibility building.'
    },
    {
      title: 'Retail Signboards',
      description: 'Point-of-sale and retail location branding for physical business presence.'
    },
    {
      title: 'Regional Activation Campaigns',
      description: 'Localized marketing initiatives tailored to specific regions and demographics.'
    }
  ];

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Content */}
      <div className="relative z-10 text-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
          
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute inset-0 w-full h-full opacity-75" style={{ mixBlendMode: 'screen' }}>
              <FloatingLines
                enabledWaves={['top', 'middle', 'bottom']}
                lineCount={5}
                lineDistance={5}
                bendRadius={5}
                bendStrength={-0.5}
                interactive={false}
                parallax={false}
                linesGradient={['#052e16', '#166534', '#0f766e', '#22d3ee']}
                mixBlendMode="screen"
              />
            </div>
            <div className="absolute inset-0 w-full h-full bg-black/45" aria-hidden />
          </div>
<div className="container-content max-w-5xl mx-auto text-center relative z-10">
            <motion.span
              className="text-eyebrow text-cyan-400 block mb-4 uppercase tracking-wider"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Growth & Brand Marketing
            </motion.span>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Strategic Growth Across Digital and Physical.
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Performance advertising combined with brand amplification — engineered for results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-black font-semibold text-sm sm:text-base rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
              >
                Discuss Growth Strategy
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Performance Marketing */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">DIGITAL</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-4">
                Performance Marketing
              </h2>
              <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl">
                Data-driven digital campaigns optimized for conversions, not just clicks.
              </p>
            </motion.div>

            <div className="space-y-6">
              {performanceMarketing.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white uppercase mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Amplification (India) */}
        <section className="section-padding bg-black/60 border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">OFFLINE (INDIA)</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-4">
                Brand Amplification
              </h2>
              <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl">
                Strategic offline brand-building across India — from influencer partnerships to high-visibility outdoor advertising.
              </p>
            </motion.div>

            <div className="space-y-6">
              {brandAmplification.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white uppercase mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Approach */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-4xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">APPROACH</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                Strategic Approach
              </h2>
            </motion.div>

            <motion.div
              className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white uppercase mb-3">We Don't Just Run Ads</h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    We design complete growth systems — from initial awareness to conversion and retention. Every campaign is connected to your funnel, CRM, and business goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase mb-3">Performance + Brand</h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    Digital campaigns drive immediate conversions. Offline amplification builds long-term brand equity. Together, they compound growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase mb-3">Data-Driven Optimization</h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    Continuous testing, tracking, and optimization ensure every marketing dollar works harder over time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding border-t border-white/10 min-h-[60vh] flex flex-col justify-center">
          <div className="container-content max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-6">
                Scale Your Growth
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Let's design a strategic marketing system that drives measurable results.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-black font-semibold text-sm sm:text-base rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
              >
                Schedule Strategy Call
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </main>
  );
}
