'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import Link from 'next/link';

const FloatingLines = dynamic(() => import('@/components/FloatingLines'), { ssr: false });

export default function DigitalInfrastructurePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const platforms = [
    'Conversion-focused corporate sites',
    'Landing page systems',
    'SaaS platforms',
    'E-commerce engines',
    'Custom portals & dashboards',
    'Booking & appointment systems'
  ];

  const differentiators = [
    {
      title: 'SEO Architecture',
      description: 'Built with technical SEO foundations — proper structure, metadata, sitemaps, and performance optimization from day one.'
    },
    {
      title: 'Speed Optimization',
      description: 'Lightning-fast loading times through code optimization, CDN integration, image compression, and efficient architecture.'
    },
    {
      title: 'Automation-Ready Backend',
      description: 'Designed to integrate with CRM, marketing automation, analytics, and business tools — not just a static website.'
    },
    {
      title: 'Data Analytics Integration',
      description: 'Track every user action, conversion event, and funnel drop-off — built-in analytics and reporting capabilities.'
    },
    {
      title: 'Funnel Compatibility',
      description: 'Optimized for conversion with clear CTAs, lead capture forms, exit intent popups, and strategic user flows.'
    },
    {
      title: 'Mobile-First Design',
      description: 'Fully responsive and optimized for mobile devices — because most of your traffic comes from phones.'
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
                linesGradient={['#111827', '#334155', '#0ea5e9', '#67e8f9']}
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
              Digital Infrastructure
            </motion.span>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Digital Platforms Built for Performance.
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Conversion-focused platforms engineered for speed, SEO, and integration.
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
                Discuss Your Project
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What We Build */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">PLATFORMS</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                What We Build
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white/90 text-sm sm:text-base font-medium">{platform}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Differentiators */}
        <section className="section-padding bg-black/60 border-t border-white/10">
          <div className="container-content max-w-6xl">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">DIFFERENTIATORS</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                Key Differentiators
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">TECHNOLOGY</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-6">
                Technology Stack
              </h2>
              <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                We use proven, scalable technologies — not experimental frameworks. Your platform is built to last.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-white uppercase mb-4">Frontend</h3>
                  <div className="space-y-2">
                    {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive design'].map((tech, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase mb-4">Backend & Infrastructure</h3>
                  <div className="space-y-2">
                    {['Node.js / Python', 'Database design', 'API development', 'Cloud hosting (AWS, Vercel, etc.)'].map((tech, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
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
                Build Your Digital Platform
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Let's engineer a conversion-focused platform that supports your growth.
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
