'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import EmailPopup from '@/components/EmailPopup';

const FloatingLines = dynamic(() => import('@/components/FloatingLines'), { ssr: false });
import {
  PhoneIcon,
  PhoneIncomingIcon,
  PhoneOutgoingIcon,
  BotIcon,
  UserIcon,
  ChartBarIcon,
  ZapIcon,
  CheckCircleIcon,
  HeadsetIcon,
  GlobeIcon,
  DatabaseIcon,
  CheckShieldIcon,
  MegaphoneIcon,
  PlayCircleIcon,
  TrendingUpIcon,
  XCircleIcon,
  CalendarCheckIcon,
} from '@/components/Icons';

const painBullets = [
  { text: 'Leads call once. If unanswered, they move on.', icon: PhoneIcon },
  { text: 'Human agents can\'t work 24/7.', icon: XCircleIcon },
  { text: 'Peak hours = dropped calls.', icon: ChartBarIcon },
  { text: 'Sales teams forget follow-ups.', icon: CalendarCheckIcon },
  { text: 'No clean call data = zero optimization.', icon: DatabaseIcon },
  { text: 'You miss one call. They never call back.', icon: HeadsetIcon },
];

const inboundFeatures = [
  'Answers instantly, 24/7',
  'Understands customer intent',
  'Answers FAQs naturally',
  'Qualifies leads (budget, intent, urgency)',
  'Transfers hot leads to humans',
  'Books meetings automatically',
  'Logs every call + conversation',
];

const outboundFeatures = [
  'Auto-calls leads & follow-ups',
  'Handles objections',
  'Routes interested prospects',
  'Updates CRM in real time',
];

const comparisonRows = [
  { humans: 'Limited hours', ai: '24/7' },
  { humans: 'One call at a time', ai: 'Unlimited simultaneous calls' },
  { humans: 'Forgets follow-ups', ai: 'Never forgets' },
  { humans: 'Salary + attrition', ai: 'Flat predictable cost' },
  { humans: 'Inconsistent', ai: 'Same quality every call' },
];

const salesImpact = [
  { text: '30–50% fewer missed calls', icon: TrendingUpIcon },
  { text: 'Faster lead response = higher conversion', icon: ZapIcon },
  { text: 'Clean call data → better sales decisions', icon: ChartBarIcon },
];

const useCases = [
  { title: 'Real Estate Lead Handling', slug: 'real-estate', description: 'Site visit booking agent for real estate companies', audioUrl: '/realestate.mp3', icon: '🏠' },
  { title: 'Appointment Handler', slug: 'appointment', description: 'Clinics, hospitals & service businesses', audioUrl: '/dentist.mp3', icon: '📅' },
  { title: 'Receptionist', slug: 'receptionist', description: '24/7 front desk — qualify, book & transfer', audioUrl: '/receptionist.mp3', icon: '🎧' },
];

const techFeatures = [
  { title: 'CRM & Calendar Sync', description: 'Every call, lead, and booking is logged automatically — no manual updates, no lost data.', icon: DatabaseIcon },
  { title: 'Uses Your Existing Tools', description: 'Connect with the software your team already trusts. No rip-and-replace. No retraining.', icon: CalendarCheckIcon },
  { title: 'Natural, Human-Like Voice', description: 'Sounds professional, calm, and clear — so customers feel heard, not automated.', icon: MegaphoneIcon },
  { title: 'Multilingual Conversations', description: 'Handle callers in multiple languages without hiring separate teams.', icon: GlobeIcon },
  { title: 'Secure & Compliant by Design', description: 'Call data is encrypted, logged, and controlled to meet enterprise standards.', icon: CheckShieldIcon },
  { title: 'APIs & Webhooks Ready', description: 'Trigger actions, automate workflows, and integrate deeply with your systems.', icon: ZapIcon },
];

export default function AICallingAgentPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden text-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="relative z-10">
        {/* 1. Hero — full screen, top aligned with header; header overlaps */}
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
          <div className="container-content max-w-4xl mx-auto text-center relative z-10 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-0">
            <motion.div
              className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg text-cyan-400/70 mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <PhoneIcon className="w-8 h-8" />
            </motion.div>
            <motion.h1
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-2 sm:mb-4 uppercase"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Never Miss a Customer Call Again.
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/80 mb-2 sm:mb-3 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Your AI Sales Agent answers, qualifies, books & follows up — 24/7.
            </motion.p>
            <motion.p
              className="text-white/60 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Turn every inbound & outbound call into a tracked sales opportunity — without hiring more agents.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <button
                onClick={() => setIsPopupOpen(true)}
                className="px-5 sm:px-8 py-2.5 sm:py-3.5 bg-white text-black font-semibold rounded-full hover:opacity-90 transition-opacity text-xs sm:text-sm"
              >
                Book a Live Demo
              </button>
              <a
                href="#demo"
                className="glass-button px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-medium text-center text-xs sm:text-sm text-white/80 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
              >
                See How It Works (90s)
              </a>
            </motion.div>
            <motion.p
              className="text-xs sm:text-sm text-white/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Used by Sales, Real Estate & Service Teams · No missed calls. No human burnout.
            </motion.p>
          </div>
        </section>

        {/* 2. The Pain */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-4xl">
            <span className="text-eyebrow text-white/50 block mb-2 sm:mb-3">THE REALITY</span>
            <motion.h2
              className="text-xl sm:text-2xl md:text-4xl font-semibold text-white uppercase mb-5 sm:mb-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
            >
              <span className="text-red-400">Missed Calls</span> = Missed Revenue
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-8">
              {painBullets.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-lg border border-white/10 bg-white/[0.02]"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.4 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <item.icon className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                  <span className="text-white/80 text-xs sm:text-sm md:text-base">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/90 font-medium text-center max-w-2xl mx-auto py-3 sm:py-4 px-4 sm:px-6 rounded-xl bg-cyan-400/10 border border-cyan-400/20"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
            >
              Your competitors don&apos;t need to be better. They just need to answer faster.
            </motion.p>
          </div>
        </section>

        {/* 3. What Your AI Agent Does (How It Works) */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-5xl">
            <span className="text-eyebrow text-cyan-400/60 block mb-2 sm:mb-3">HOW IT WORKS</span>
            <motion.h2
              className="text-xl sm:text-2xl md:text-4xl font-semibold text-white uppercase mb-6 sm:mb-10"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              What Your AI Agent Actually Does
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <PhoneIncomingIcon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400/50" />
                  <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wide">Inbound Calls</h3>
                </div>
                <ul className="space-y-2.5 text-white/75 text-sm">
                  {inboundFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="text-green-400 text-xs">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ delay: 0.05 }}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <PhoneOutgoingIcon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400/50" />
                  <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wide">Outbound Calls</h3>
                </div>
                <ul className="space-y-2.5 text-white/75 text-sm">
                  {outboundFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="text-white/40 text-xs">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Live Demo (right after How It Works) */}
        <section id="demo" className="section-padding border-t border-white/10">
          <div className="container-content max-w-5xl">
            <span className="text-eyebrow text-cyan-400/60 block mb-2 sm:mb-3">LIVE DEMO</span>
            <motion.h2
              className="text-xl sm:text-2xl md:text-4xl font-semibold text-white uppercase mb-1.5 sm:mb-2"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              Real-World Use Cases
            </motion.h2>
            <motion.p
              className="text-white/55 text-xs sm:text-sm mb-5 sm:mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              Real Estate · Clinics & hospitals · EdTech · E-commerce · Local service businesses
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:items-stretch">
              {useCases.map((useCase, i) => (
                <motion.div
                  key={useCase.slug}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 flex flex-col transition-colors duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-lg opacity-70">{useCase.icon}</span>
                    <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wide">{useCase.title}</h3>
                  </div>
                  <p className="text-white/55 text-sm mb-4 flex-1">{useCase.description}</p>
                  <div className="rounded-lg border border-white/5 bg-black/20 p-3 mt-auto">
                    <p className="text-white/40 text-xs mb-2 flex items-center gap-1.5">
                      <HeadsetIcon className="w-3.5 h-3.5 shrink-0" />
                      Listen to demo
                    </p>
                    <audio
                      controls
                      className="w-full h-9"
                      preload="metadata"
                      style={{ maxHeight: '36px' }}
                      src={useCase.audioUrl || undefined}
                    >
                      <source src={useCase.audioUrl || ''} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    {!useCase.audioUrl && (
                      <p className="text-white/35 text-xs mt-1.5">Add recording URL in page source</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why This Is Better Than Humans */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-4xl">
            <span className="text-eyebrow text-white/50 block mb-2 sm:mb-3">THE DIFFERENCE</span>
            <motion.h2
              className="text-xl sm:text-2xl md:text-4xl font-semibold text-white uppercase mb-5 sm:mb-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              Why This Is Better Than Humans
            </motion.h2>
            <motion.div
              className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 rounded-xl border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              <table className="w-full min-w-[320px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-5 font-semibold uppercase text-[10px] sm:text-xs text-white/50">
                      <span className="inline-flex items-center gap-1.5 sm:gap-2">
                        <UserIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40 shrink-0" />
                        Humans
                      </span>
                    </th>
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-5 font-semibold uppercase text-[10px] sm:text-xs text-white/70">
                      <span className="inline-flex items-center gap-1.5 sm:gap-2">
                        <BotIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400/60 shrink-0" />
                        Your AI Agent
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-2.5 sm:py-3 px-3 sm:px-5 text-white/70 text-xs sm:text-sm">
                        <span className="inline-flex items-center gap-1.5 sm:gap-2">
                          <XCircleIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400 shrink-0" />
                          {row.humans}
                        </span>
                      </td>
                      <td className="py-2.5 sm:py-3 px-3 sm:px-5 text-white/90 text-xs sm:text-sm">
                        <span className="inline-flex items-center gap-2">
                          <CheckCircleIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-400 shrink-0" />
                          {row.ai}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.p
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 font-medium text-center max-w-2xl mx-auto py-3 sm:py-4 px-4 sm:px-6 rounded-xl bg-cyan-400/10 border border-cyan-400/20"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              Humans close deals. AI makes sure they actually get the chance to.
            </motion.p>
          </div>
        </section>

        {/* 6. How It Increases Sales */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-4xl">
            <span className="text-eyebrow text-white/50 block mb-2 sm:mb-3">IMPACT</span>
            <motion.h2
              className="text-xl sm:text-2xl md:text-4xl font-semibold text-white uppercase mb-5 sm:mb-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              How It Increases Sales
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {salesImpact.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/45 shrink-0 mt-0.5" />
                  <span className="text-white/80 text-xs sm:text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Tech */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-5xl">
            <span className="text-eyebrow text-cyan-400/60 block mb-2 sm:mb-3">TECH</span>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-white uppercase mb-2 sm:mb-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              Works With Your Existing Stack. No Disruption.
            </motion.h2>
            <motion.p
              className="text-white/60 text-xs sm:text-sm md:text-base mb-5 sm:mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              You don&apos;t need to change how your team works.
              Your AI agent plugs into your current CRM, calendars, dialers, and workflows — and starts handling calls immediately.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {techFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-lg border border-white/10 bg-white/[0.02]"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ delay: 0.02 * i }}
                >
                  <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400/40 shrink-0" />
                  <h3 className="text-white/90 text-xs sm:text-sm font-semibold uppercase tracking-wide">{item.title}</h3>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg text-white/90 font-medium text-center max-w-2xl mx-auto py-3 sm:py-4 px-4 sm:px-6 rounded-xl bg-cyan-400/10 border border-cyan-400/20"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
            >
              <>
              Setup takes days — not months.
              <br />
              Your operations stay the same. Your call handling doesn&apos;t miss.
            </>
            </motion.p>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="section-padding border-t border-white/10">
          <div className="container-content max-w-3xl mx-auto text-center px-4 sm:px-0">
            <motion.h2
              className="text-xl sm:text-2xl md:text-4xl font-semibold text-white uppercase mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
            >
              Ready to Stop Losing Leads on the Phone?
            </motion.h2>
            <motion.p
              className="text-white/60 text-xs sm:text-sm md:text-base mb-5 sm:mb-8"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
            >
              Setup in days. No new hiring. Cancel anytime.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
            >
              <button
                onClick={() => setIsPopupOpen(true)}
                className="px-5 sm:px-8 py-2.5 sm:py-3.5 bg-white text-black font-semibold rounded-full hover:opacity-90 transition-opacity text-xs sm:text-sm"
              >
                Book a Demo
              </button>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="glass-button px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm text-white/80 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
              >
                Talk to Sales
              </button>
            </motion.div>
          </div>
        </section>
      </div>

      <EmailPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </main>
  );
}