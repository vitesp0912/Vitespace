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
import { ChatHeroVisual, ChatInSite } from '@/components/solutions/suite/visuals';
import { IconAutomation, IconChat, IconSystem, IconWebsite } from '@/components/solutions/icons';
import { paths } from '@/components/solutions/paths';
import EmailPopup from '@/components/EmailPopup';

const capabilities = [
  {
    label: 'Answer',
    text: 'Handle common questions.',
    Icon: IconChat,
  },
  {
    label: 'Guide',
    text: 'Help visitors find the right information.',
    Icon: IconWebsite,
  },
  {
    label: 'Qualify',
    text: 'Ask useful questions before handing the enquiry to a team.',
    Icon: IconSystem,
  },
  {
    label: 'Capture',
    text: 'Collect contact details when appropriate.',
    Icon: IconAutomation,
  },
];

export default function Chatbots() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SuiteShell>
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="home-shell">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            <Breadcrumb label="Chatbots" />
          </motion.div>

          <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="max-w-lg lg:pt-6">
              <motion.p
                className="text-eyebrow text-white/40 mb-5"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                04 / AI chatbots
              </motion.p>
              <motion.h1
                className="home-display text-white mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease }}
              >
                Give every visitor
                <br />
                <span className="text-white/50">a useful first answer.</span>
              </motion.h1>
              <motion.p
                className="home-lede text-white/55 mb-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              >
                Chatbots that answer common questions, guide visitors and help capture enquiries.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16, duration: 0.5, ease }}>
                <PrimaryButton onClick={() => setIsOpen(true)}>Build a Chatbot →</PrimaryButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
            >
              <ChatHeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <Reveal className="max-w-lg mb-10 sm:mb-12">
            <p className="text-eyebrow text-white/40 mb-4">What it does</p>
            <h2 className="home-section-title text-white">A useful conversation. Not noise.</h2>
          </Reveal>

          <div className="max-w-2xl border-t border-white/[0.10]">
            {capabilities.map((item, i) => {
              const Icon = item.Icon;
              return (
                <Reveal key={item.label} delay={i * 0.04}>
                  <div className="suite-offer group grid grid-cols-[2rem_7rem_1fr] items-start gap-4 border-b border-white/[0.10] py-6 sm:grid-cols-[2rem_8rem_1fr] sm:py-7">
                    <Icon className="h-5 w-5 text-white/40 transition-colors duration-300 group-hover:text-cyan-300/80" />
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white">{item.label}</h3>
                    <p className="home-body text-white/45">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
            <Reveal className="max-w-md">
              <p className="text-eyebrow text-white/40 mb-5">On your site</p>
              <h2 className="home-section-title text-white">Your website gets an assistant.</h2>
              <p className="home-lede mt-6 text-white/50">
                The chat sits on the page. It answers first. Your team steps in when it matters.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <ChatInSite />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="home-shell">
          <Reveal className="max-w-lg">
            <p className="text-eyebrow text-white/40 mb-4">What you get</p>
            <h2 className="home-section-title text-white">A useful first answer, every time.</h2>
          </Reveal>
        </div>
      </section>

      <RelatedStrip current={paths.chatbots} />
      <SuiteCTA
        quiet
        title="Give your customers a better first conversation."
        cta="Build a Chatbot →"
      />
      <EmailPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </SuiteShell>
  );
}
