'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Breadcrumb,
  PrimaryButton,
  RelatedStrip,
  Reveal,
  SuiteCTA,
  SuiteShell,
  ease,
} from '@/components/solutions/suite/shared';
import { VoiceCallUI, VoiceFlow } from '@/components/solutions/suite/visuals';
import { paths } from '@/components/solutions/paths';
import EmailPopup from '@/components/EmailPopup';

const uses = [
  {
    label: 'Incoming enquiries',
    text: "Answer calls when your team can't.",
  },
  {
    label: 'Qualification',
    text: 'Ask the right questions before passing the call on.',
  },
  {
    label: 'Appointments',
    text: 'Help customers book or request a callback.',
  },
];

const clips = [
  {
    title: 'Real estate',
    note: 'Enquiry',
    line: 'A first call about a listing, qualified and booked.',
    src: '/realestate.mp3',
  },
  {
    title: 'Healthcare',
    note: 'Booking',
    line: 'An appointment request, confirmed without a front desk.',
    src: '/dentist.mp3',
  },
  {
    title: 'Reception',
    note: 'Routing',
    line: 'A general call, sorted and sent to the right person.',
    src: '/receptionist.mp3',
  },
];

export default function Voice() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SuiteShell>
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="home-shell">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            <Breadcrumb label="Voice" />
          </motion.div>

          <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.7fr)] lg:gap-20">
            <div className="max-w-xl">
              <motion.p
                className="text-eyebrow text-white/40 mb-5"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                05 / AI voice agents
              </motion.p>
              <motion.h1
                className="home-display text-white mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease }}
              >
                Never leave a good call
                <br />
                <span className="text-white/50">unanswered.</span>
              </motion.h1>
              <motion.p
                className="home-lede text-white/55 mb-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              >
                Voice agents that answer common questions, qualify enquiries and pass the right calls to your team.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16, duration: 0.5, ease }}>
                <PrimaryButton onClick={() => setIsOpen(true)}>Talk to Us →</PrimaryButton>
              </motion.div>
            </div>

            <motion.div
              className="lg:pt-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
            >
              <VoiceFlow />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <Reveal className="max-w-lg mb-10">
            <p className="text-eyebrow text-white/40 mb-4">Where it helps</p>
            <h2 className="home-section-title text-white">Three practical jobs. Nothing extra.</h2>
          </Reveal>

          <div className="max-w-2xl border-t border-white/[0.10]">
            {uses.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.04}>
                <div className="grid grid-cols-1 gap-2 border-b border-white/[0.10] py-6 sm:grid-cols-[14rem_1fr] sm:gap-8 sm:py-7">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white">{item.label}</h3>
                  <p className="home-body text-white/45">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.9fr)] lg:gap-20">
            <Reveal className="max-w-md">
              <p className="text-eyebrow text-white/40 mb-5">The call</p>
              <h2 className="home-section-title text-white">A phone line that does not go quiet.</h2>
              <p className="home-lede mt-6 text-white/50">
                The call is answered. The right details are taken. Your team gets who to call next.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <VoiceCallUI />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <Reveal>
            <p className="text-eyebrow text-white/40 mb-8">How it sounds</p>
          </Reveal>
          <div className="max-w-2xl border-t border-white/[0.10]">
            {clips.map((clip, i) => (
              <Reveal key={clip.title} delay={i * 0.04}>
                <div className="py-6 border-b border-white/[0.10]">
                  <div className="mb-3 flex items-baseline justify-between gap-4">
                    <h3 className="text-[16px] font-medium tracking-tight text-white">{clip.title}</h3>
                    <span className="text-[12px] text-white/30">{clip.note}</span>
                  </div>
                  <p className="home-body mb-4 text-white/40">{clip.line}</p>
                  <audio controls className="h-9 w-full max-w-md" preload="none">
                    <source src={clip.src} type="audio/mpeg" />
                  </audio>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedStrip current={paths.voice} />
      <SuiteCTA
        quiet
        align="start"
        title="What happens when every call gets answered?"
        cta="Talk to Us →"
      />
      <EmailPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </SuiteShell>
  );
}
