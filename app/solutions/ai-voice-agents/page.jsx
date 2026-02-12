'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import Link from 'next/link';
import {
  PhoneIncomingIcon,
  PhoneOutgoingIcon,
  UserIcon,
  BotIcon,
  XCircleIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  ZapIcon,
  ChartBarIcon,
  DatabaseIcon,
  CalendarCheckIcon,
  MegaphoneIcon,
  GlobeIcon,
  CheckShieldIcon,
} from '@/components/Icons';

const FloatingLines = dynamic(() => import('@/components/FloatingLines'), { ssr: false });

export default function AIVoiceAgentsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const painBullets = [
    'Leads call once. If unanswered, they move on.',
    'Human teams cannot handle every call 24/7.',
    'Peak hours create dropped opportunities.',
    'Manual follow-ups get delayed or missed.',
    'Disconnected call data blocks optimization.',
    'Slow response kills conversion momentum.',
  ];

  const inboundFeatures = [
    'Answers instantly, 24/7',
    'Understands customer intent',
    'Handles FAQs naturally',
    'Qualifies leads by urgency and fit',
    'Books appointments automatically',
    'Logs every interaction to CRM',
  ];

  const outboundFeatures = [
    'Auto-calls leads and follow-ups',
    'Runs multi-step qualification',
    'Handles common objections',
    'Routes hot prospects to your team',
    'Updates CRM in real time',
    'Reactivates inactive customers',
  ];

  const comparisonRows = [
    { humans: 'Limited hours', ai: '24/7 availability' },
    { humans: 'One call at a time', ai: 'Parallel call handling' },
    { humans: 'Missed follow-ups', ai: 'Consistent follow-up execution' },
    { humans: 'Higher variable cost', ai: 'Predictable operating cost' },
    { humans: 'Inconsistent scripting', ai: 'Consistent call quality' },
  ];

  const salesImpact = [
    { text: 'Fewer missed calls and missed revenue', icon: TrendingUpIcon },
    { text: 'Faster response, higher conversion rate', icon: ZapIcon },
    { text: 'Clearer call data for better decisions', icon: ChartBarIcon },
  ];

  const techFeatures = [
    { title: 'CRM & Calendar Sync', icon: DatabaseIcon },
    { title: 'Uses Your Existing Tools', icon: CalendarCheckIcon },
    { title: 'Natural Human-Like Voice', icon: MegaphoneIcon },
    { title: 'Multilingual Conversations', icon: GlobeIcon },
    { title: 'Secure & Compliant by Design', icon: CheckShieldIcon },
    { title: 'API & Webhook Ready', icon: ZapIcon },
  ];

  const implementationSteps = [
    {
      number: '1',
      title: 'Business Workflow Analysis',
      description: 'We map your sales process, call scripts, and customer journey to understand where voice AI adds value.'
    },
    {
      number: '2',
      title: 'Conversation Architecture',
      description: 'Design structured conversation flows with decision trees, fallback logic, and escalation paths.'
    },
    {
      number: '3',
      title: 'AI Voice Configuration',
      description: 'Train and configure voice models for your industry, tone, and use cases with natural language processing.'
    },
    {
      number: '4',
      title: 'CRM & API Integration',
      description: 'Connect voice agents to your CRM, calendar, database, and business tools for seamless data flow.'
    },
    {
      number: '5',
      title: 'Testing & Optimization',
      description: 'Run test scenarios, refine responses, monitor performance, and continuously optimize for better results.'
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
                linesGradient={['#0b1120', '#0e7490', '#22d3ee', '#a5f3fc']}
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
              AI Voice Agents
            </motion.span>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Voice Agents Engineered for Revenue.
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              High-volume communication handled by AI — structured around your workflows.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
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
              <a
                href="#demo"
                className="glass-button px-8 py-4 rounded-full font-medium text-sm sm:text-base text-white/80 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors uppercase tracking-wide"
              >
                See Live Use Cases
              </a>
            </motion.div>
          </div>
        </section>

        {/* Business Reality Section */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-4xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">THE REALITY</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                <span className="text-red-400">Missed Calls</span> = Missed Revenue
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {painBullets.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    <XCircleIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-white/85 text-sm sm:text-base">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/90 font-medium text-center max-w-2xl mx-auto py-3 sm:py-4 px-4 sm:px-6 rounded-xl bg-cyan-400/10 border border-cyan-400/20"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              Your competitors do not need a better offer. They just need a faster response system.
            </motion.p>
          </div>
        </section>

        {/* Inbound / Outbound Capability Matrix */}
        <section className="section-padding bg-black/60 border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-cyan-400/60 block mb-3">CAPABILITIES</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                What Your AI Voice Agent Actually Does
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <motion.div
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <PhoneIncomingIcon className="w-6 h-6 text-cyan-400/60" />
                  <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wide">Inbound Calls</h3>
                </div>
                <ul className="space-y-2.5 text-white/75 text-sm">
                  {inboundFeatures.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ delay: 0.05 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <PhoneOutgoingIcon className="w-6 h-6 text-cyan-400/60" />
                  <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wide">Outbound Calls</h3>
                </div>
                <ul className="space-y-2.5 text-white/75 text-sm">
                  {outboundFeatures.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Implementation Model Section */}
        <section className="section-padding bg-black/60 border-t border-white/10">
          <div className="container-content max-w-4xl">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">PROCESS</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                Implementation Process
              </h2>
            </motion.div>

            <div className="space-y-6">
              {implementationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-cyan-400">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white uppercase mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases / Demo Section */}
        <section id="demo" className="section-padding border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">REAL APPLICATIONS</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-6">
                Use Cases
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Real Estate',
                  description: 'Qualify incoming property inquiries, schedule site visits, and follow up with interested buyers automatically.',
                  audio: '/realestate.mp3'
                },
                {
                  title: 'Healthcare',
                  description: 'Book appointments, send reminders, handle patient queries, and manage cancellations 24/7.',
                  audio: '/dentist.mp3'
                },
                {
                  title: 'Professional Services',
                  description: 'Screen leads, handle reception calls, route to appropriate departments, and manage schedules.',
                  audio: '/receptionist.mp3'
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white uppercase mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
                    {useCase.description}
                  </p>
                  <div className="mt-auto">
                    <audio controls className="w-full" preload="metadata">
                      <source src={useCase.audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Humans vs AI Comparison */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-4xl">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">COMPARISON</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                Humans vs AI Voice Agents
              </h2>
            </motion.div>

            <motion.div
              className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 rounded-xl border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              <table className="w-full min-w-[320px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="text-left py-3 px-4 font-semibold uppercase text-xs text-white/50">
                      <span className="inline-flex items-center gap-2">
                        <UserIcon className="w-4 h-4 text-white/40 shrink-0" />
                        Traditional Team
                      </span>
                    </th>
                    <th className="text-left py-3 px-4 font-semibold uppercase text-xs text-white/70">
                      <span className="inline-flex items-center gap-2">
                        <BotIcon className="w-4 h-4 text-cyan-400/60 shrink-0" />
                        AI Voice Agent
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-3 px-4 text-white/70 text-sm">
                        <span className="inline-flex items-center gap-2">
                          <XCircleIcon className="w-3.5 h-3.5 text-red-400 shrink-0" />
                          {row.humans}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white/90 text-sm">
                        <span className="inline-flex items-center gap-2">
                          <CheckCircleIcon className="w-3.5 h-3.5 text-green-400 shrink-0" />
                          {row.ai}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Revenue Impact */}
        <section className="section-padding bg-black/60 border-t border-white/10">
          <div className="container-content max-w-4xl">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-white/60 block mb-3">IMPACT</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                How It Increases Sales
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {salesImpact.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <item.icon className="w-5 h-5 text-white/45 shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Layer */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-5xl">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eyebrow text-cyan-400/60 block mb-3">TECH</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-3">
                Works With Your Existing Stack
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
                Your AI voice layer plugs into your current CRM, dialers, calendars, and workflows without disruption.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {techFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/[0.02]"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ delay: 0.02 * i }}
                >
                  <item.icon className="w-4 h-4 text-cyan-400/50 shrink-0" />
                  <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wide">{item.title}</h3>
                </motion.div>
              ))}
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
                Deploy Voice Agents for Your Business
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Let's design a voice AI system tailored to your business workflows.
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
