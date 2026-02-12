'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import Link from 'next/link';

const FloatingLines = dynamic(() => import('@/components/FloatingLines'), { ssr: false });

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Content */}
      <div className="relative z-10 text-white">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-screen flex flex-col justify-center">
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute inset-0 w-full h-full opacity-80" style={{ mixBlendMode: 'screen' }}>
              <FloatingLines
                enabledWaves={['top', 'middle', 'bottom']}
                lineCount={5}
                lineDistance={5}
                bendRadius={5}
                bendStrength={-0.5}
                interactive={false}
                parallax={false}
                linesGradient={['#0e7490', '#22d3ee', '#67e8f9', '#a5f3fc']}
                mixBlendMode="screen"
              />
            </div>
            <div className="absolute inset-0 w-full h-full bg-black/40" aria-hidden />
          </div>
          <div className="container-content w-full max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 md:px-12 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight uppercase mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Build Systems That Scale. Not Dependencies.
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              AI voice agents, automation systems, digital platforms, and strategic growth — engineered for efficiency and revenue predictability.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="px-5 sm:px-7 py-2.5 sm:py-3 bg-white text-black font-semibold text-xs sm:text-sm rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
              >
                Schedule a Strategy Consultation
              </Link>
              <Link
                href="/solutions"
                className="px-5 sm:px-7 py-2.5 sm:py-3 bg-transparent border-2 border-white/30 text-white font-semibold text-xs sm:text-sm rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-300 uppercase tracking-wide"
              >
                Discuss Your Business Infrastructure
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. THE BUSINESS PROBLEM */}
        <section className="section-padding bg-black/60 border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-6">
                Growth Without Systems Is Fragile.
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  Most companies invest in marketing, websites, and sales teams — yet operate without structured automation.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
              {[
                'Leads are delayed.',
                'Sales processes rely on people.',
                'Marketing works in isolation.',
                'Data is fragmented.',
                'Growth depends on manual execution.'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg">{point}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-semibold mb-3">
                The result is inconsistency.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-cyan-400 font-medium">
                We design structured AI-driven ecosystems where every touchpoint is connected and optimized.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. INFRASTRUCTURE FRAMEWORK */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-6xl">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 mb-3 block">INFRASTRUCTURE</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                Our Growth Infrastructure Model
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  number: '1',
                  title: 'Interaction Layer',
                  items: ['AI Voice Agents', 'AI Chatbots', 'Conversational Systems']
                },
                {
                  number: '2',
                  title: 'Automation Layer',
                  items: ['Lead Qualification', 'CRM Workflows', 'WhatsApp Systems', 'Internal Process Automation']
                },
                {
                  number: '3',
                  title: 'Digital Layer',
                  items: ['Conversion Websites', 'SaaS Platforms', 'Custom Applications']
                },
                {
                  number: '4',
                  title: 'Acceleration Layer',
                  items: ['Performance Marketing', 'Influencer Campaigns', 'Offline Brand Execution (India)']
                }
              ].map((layer, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-cyan-400">{layer.number}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white uppercase mt-2">
                      {layer.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {layer.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-8 sm:mt-10"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold text-sm sm:text-base rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
              >
                Explore All Solutions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 4. FLAGSHIP HIGHLIGHT - AI VOICE AGENTS */}
        <section className="section-padding bg-black/60 border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/20 rounded-2xl p-8 sm:p-10 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-4">
                  24/7 Voice Agents Built for Revenue.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  'Instant lead response',
                  'Appointment scheduling',
                  'Follow-up automation',
                  'Inbound query handling',
                  'CRM synchronization',
                  'Multi-language support'
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-black/30 border border-white/10 rounded-lg p-4"
                  >
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/solutions/ai-voice-agents"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black font-semibold text-sm sm:text-base rounded-full hover:bg-cyan-300 transition-all duration-300 uppercase"
                >
                  Explore AI Voice Agents
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. WHY CONSULTATION FIRST */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-4xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-6">
                Why Every Engagement Starts with Strategy.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                No two businesses operate the same way. We design systems around your internal workflows, sales structure, industry behavior, and growth goals.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/90 text-base sm:text-lg mb-6">
                Before implementation, we conduct:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Workflow audit',
                  'Sales process mapping',
                  'Technology stack review',
                  'Growth bottleneck identification'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="py-14 sm:py-16 md:py-20 flex flex-col justify-center border-t border-white/10 noise-bg">
          <div className="container-content max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-4">NEXT STEP</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 leading-tight">
                Ready to Engineer Growth?
              </h2>
              <Link
                href="/contact"
                className="inline-block px-7 sm:px-9 py-3 sm:py-4 bg-white text-black font-bold text-sm sm:text-base rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </main>
  );
}
