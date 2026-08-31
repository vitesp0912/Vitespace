'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Arrow,
  Breadcrumb,
  PrimaryButton,
  RelatedStrip,
  Reveal,
  SuiteCTA,
  SuiteShell,
  ease,
} from '@/components/solutions/suite/shared';
import { AutomationFlow, MiniFlow, MiniWave } from '@/components/solutions/suite/visuals';
import { paths } from '@/components/solutions/paths';
import EmailPopup from '@/components/EmailPopup';

const services = [
  {
    title: 'AI automation',
    text: 'Automate the steps your team repeats every day.',
    visual: <MiniFlow steps={['Enquiry arrives', 'Details saved', 'Team sees it']} />,
  },
  {
    title: 'AI chatbots',
    text: 'Answer customers even when your team is busy.',
    href: paths.chatbots,
    visual: (
      <div className="space-y-2">
        <p className="max-w-[90%] rounded-[8px] border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[12px] text-white/55">
          Are you open Saturday?
        </p>
        <p className="ml-6 rounded-[8px] border border-cyan-300/25 bg-cyan-300/[0.06] px-3 py-2 text-[12px] text-white/80">
          Yes. Two slots are free after 11.
        </p>
      </div>
    ),
  },
  {
    title: 'AI voice agents',
    text: 'Answer calls, qualify enquiries and pass the right ones to your team.',
    href: paths.voice,
    visual: (
      <div>
        <MiniWave />
        <p className="mt-3 text-[12px] text-white/40">Inbound · 00:18</p>
      </div>
    ),
  },
];

const examples = [
  {
    label: 'Lead',
    title: 'New enquiry automatically captured.',
    steps: ['Form submitted', 'Record created', 'Team notified'],
  },
  {
    label: 'Support',
    title: 'Common questions answered immediately.',
    steps: ['Question asked', 'Answer given', 'Passed on if needed'],
  },
  {
    label: 'Follow-up',
    title: 'Customers contacted without someone remembering to do it.',
    steps: ['Wait period ends', 'Message sent', 'Reply logged'],
  },
];

export default function Automation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SuiteShell>
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="home-shell">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            <Breadcrumb label="Automation" />
          </motion.div>

          <div className="mt-10 max-w-2xl">
            <motion.p
              className="text-eyebrow text-white/40 mb-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              03 / Automation
            </motion.p>
            <motion.h1
              className="home-display text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
            >
              Take repetitive work
              <br />
              <span className="text-white/50">off your team&apos;s plate.</span>
            </motion.h1>
            <motion.p
              className="home-lede text-white/55 max-w-lg mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
            >
              Automation for sales, support and everyday tasks that take up your team&apos;s time.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16, duration: 0.5, ease }}>
              <PrimaryButton onClick={() => setIsOpen(true)}>Let&apos;s Automate →</PrimaryButton>
            </motion.div>
          </div>

          <motion.div
            className="mt-14 sm:mt-16"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            <AutomationFlow />
          </motion.div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <Reveal className="max-w-lg mb-4">
            <p className="text-eyebrow text-white/40 mb-4">What we add</p>
            <h2 className="home-section-title text-white">Only when it earns its place.</h2>
          </Reveal>

          <div className="mt-10 border-t border-white/[0.10]">
            {services.map((item, i) => {
              const body = (
                <div
                  className={`grid grid-cols-1 items-center gap-8 py-12 sm:py-14 lg:grid-cols-2 lg:gap-16 ${
                    i !== services.length - 1 ? 'border-b border-white/[0.10]' : ''
                  }`}
                >
                  <div className={i === 1 ? 'lg:order-2' : ''}>
                    <h3 className="text-[1.5rem] sm:text-[1.75rem] font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 home-body text-white/45 max-w-md">{item.text}</p>
                    {item.href && (
                      <span className="mt-5 inline-flex items-center gap-2 text-sm text-white/50 transition-colors group-hover:text-white">
                        See this in more detail
                        <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    )}
                  </div>
                  <div className={i === 1 ? 'lg:order-1' : ''}>{item.visual}</div>
                </div>
              );

              return (
                <Reveal key={item.title} delay={i * 0.04}>
                  {item.href ? (
                    <Link href={item.href} className="group block">
                      {body}
                    </Link>
                  ) : (
                    body
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <Reveal className="max-w-lg mb-12 sm:mb-16">
            <p className="text-eyebrow text-white/40 mb-4">In practice</p>
            <h2 className="home-section-title text-white">What this looks like day to day.</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {examples.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">{item.label}</p>
                <h3 className="mt-3 text-[1.15rem] font-medium tracking-tight text-white leading-snug">{item.title}</h3>
                <div className="mt-6">
                  <MiniFlow steps={item.steps} active={1} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="home-shell">
          <Reveal className="max-w-lg">
            <p className="text-eyebrow text-white/40 mb-4">What you get</p>
            <h2 className="home-section-title text-white">Hours back. Fewer dropped enquiries.</h2>
          </Reveal>
        </div>
      </section>

      <RelatedStrip current={paths.automation} />
      <SuiteCTA
        quiet
        align="start"
        title="What could your team stop doing manually?"
        cta="Let's Automate →"
      />
      <EmailPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </SuiteShell>
  );
}
