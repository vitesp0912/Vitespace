'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import Link from 'next/link';

const FloatingLines = dynamic(() => import('@/components/FloatingLines'), { ssr: false });

export default function AIChatbotsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const deploymentChannels = [
    { name: 'Website', icon: '🌐' },
    { name: 'WhatsApp', icon: '💬' },
    { name: 'Instagram', icon: '📱' },
    { name: 'Messenger', icon: '💬' }
  ];

  const capabilities = [
    'Lead qualification',
    'Support automation',
    'Order tracking',
    'FAQ intelligence',
    'Funnel routing',
    'Multi-language support',
    'CRM integration',
    'Analytics & insights'
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
                linesGradient={['#1e1b4b', '#7c3aed', '#22d3ee', '#a5f3fc']}
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
              AI Chatbots
            </motion.span>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Chatbots That Convert at Scale.
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Structured conversation systems — not template widgets.
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
                Discuss Implementation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Deployment Channels Section */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">DEPLOYMENT</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                Deployment Channels
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {deploymentChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-3">{channel.icon}</div>
                  <h3 className="text-white font-semibold text-sm sm:text-base uppercase">
                    {channel.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="section-padding bg-black/60 border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">CAPABILITIES</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                Capabilities
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-sm sm:text-base font-medium">{capability}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Chatbots Section */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">SOLUTIONS</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                Two Approaches
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white uppercase mb-4">
                  Rule-Based Chatbots
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  Structured conversation flows with predefined decision trees — perfect for FAQs, order tracking, and guided processes.
                </p>
                <div className="space-y-2">
                  {['Predictable responses', 'Fast performance', 'Easy to control', 'Cost-effective'].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white uppercase mb-4">
                  Generative AI Chatbots
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  AI-powered natural language understanding — handles complex queries, adapts to context, and provides intelligent responses.
                </p>
                <div className="space-y-2">
                  {['Natural conversations', 'Context awareness', 'Learns over time', 'Handles complexity'].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
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
                Deploy Chatbots for Your Business
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Let's design a conversational AI system tailored to your business.
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
