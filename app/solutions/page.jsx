'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import Link from 'next/link';

const FloatingLines = dynamic(() => import('@/components/FloatingLines'), { ssr: false });

export default function SolutionsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    {
      id: 'ai',
      label: 'AI SPECIFIC',
      title: 'AI Systems',
      description: 'Conversation and automation layers engineered for response speed, conversion, and operational consistency.',
      accent: 'from-cyan-400/15 to-blue-500/10',
      items: [
        {
          title: 'AI Voice Agents',
          href: '/solutions/ai-voice-agents',
          summary: 'Inbound + outbound voice systems for revenue capture.'
        },
        {
          title: 'AI Chatbots',
          href: '/solutions/ai-chatbots',
          summary: 'Structured conversational flows across website and messaging channels.'
        },
        {
          title: 'AI Automation Systems',
          href: '/solutions/ai-automation-systems',
          summary: 'Workflow automation connecting CRM, reporting, and internal operations.'
        },
      ],
    },
    {
      id: 'digital',
      label: 'DIGITAL INFRA SPECIFIC',
      title: 'Digital Infrastructure',
      description: 'High-performance web platforms designed to support acquisition, conversion, and scale.',
      accent: 'from-indigo-500/15 to-cyan-400/10',
      items: [
        {
          title: 'Digital Infrastructure',
          href: '/solutions/digital-infrastructure',
          summary: 'Conversion-focused platforms with speed, SEO, and analytics architecture.'
        },
      ],
    },
    {
      id: 'growth',
      label: 'GROWTH MARKETING SPECIFIC',
      title: 'Growth & Brand Marketing',
      description: 'Strategic growth execution across paid digital channels and high-impact physical campaigns.',
      accent: 'from-emerald-500/15 to-cyan-400/10',
      items: [
        {
          title: 'Growth & Brand Marketing',
          href: '/solutions/growth-marketing',
          summary: 'Performance marketing + brand amplification for measurable growth.'
        },
      ],
    },
  ];

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
        <section className="relative pt-44 sm:pt-48 md:pt-40 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
          
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
                linesGradient={['#1e3a8a', '#2563eb', '#38bdf8', '#a5f3fc']}
                mixBlendMode="screen"
              />
            </div>
            <div className="absolute inset-0 w-full h-full bg-black/45" aria-hidden />
          </div>
          <div className="container-content max-w-5xl mx-auto text-center relative z-10">
            <motion.span
              className="text-eyebrow text-white/60 block mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              OUR SOLUTIONS
            </motion.span>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Modular Infrastructure for Growth
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Interconnected systems designed to scale together — not isolated tools.
            </motion.p>
          </div>
        </section>

        {/* Categorized Solutions */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-6xl space-y-6 sm:space-y-8">
            {categories.map((category, index) => (
              <motion.section
                key={category.id}
                className={`rounded-2xl border border-white/10 bg-gradient-to-br ${category.accent} p-5 sm:p-7 md:p-8`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="mb-5 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase mb-2">
                    {category.title}
                  </h2>
                  <p className="text-white/70 text-sm sm:text-base max-w-3xl">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {category.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group block rounded-xl border border-white/10 bg-black/35 p-4 sm:p-5 hover:bg-black/55 hover:border-cyan-400/35 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-white uppercase group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-white/65 text-xs sm:text-sm mt-1">
                            {item.summary}
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-2 text-cyan-300 font-semibold text-xs sm:text-sm">
                          <span>Open Solution</span>
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-6">
                Ready to Build Your Infrastructure?
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Let's design a strategic roadmap tailored to your business.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-black font-semibold text-sm sm:text-base rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
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
