'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Arrow,
  Breadcrumb,
  GhostLink,
  PrimaryButton,
  RelatedStrip,
  Reveal,
  SuiteCTA,
  SuiteShell,
  ease,
} from '@/components/solutions/suite/shared';
import {
  OperationsInterface,
  ProductEcosystem,
  ProductHeroVisual,
} from '@/components/solutions/suite/visuals';
import {
  IconMobile,
  IconSoftware,
  IconWebApp,
  IconWebsite,
} from '@/components/solutions/icons';
import { paths } from '@/components/solutions/paths';
import EmailPopup from '@/components/EmailPopup';

const offerings = [
  {
    n: '01',
    title: 'Websites',
    text: 'A site that explains what you do, builds trust and brings in enquiries.',
    Icon: IconWebsite,
    featured: true,
  },
  {
    n: '02',
    title: 'Web applications',
    text: 'Online tools and platforms built around how customers or teams work.',
    Icon: IconWebApp,
  },
  {
    n: '03',
    title: 'Mobile applications',
    text: 'iOS and Android apps built around a clear purpose.',
    Icon: IconMobile,
  },
  {
    n: '04',
    title: 'Custom software',
    text: "Software made around your process when existing tools don't fit.",
    Icon: IconSoftware,
  },
];

const steps = [
  { n: '01', title: 'Understand' },
  { n: '02', title: 'Plan' },
  { n: '03', title: 'Design' },
  { n: '04', title: 'Build' },
  { n: '05', title: 'Launch' },
];

export default function DigitalProducts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SuiteShell>
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="home-shell">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            <Breadcrumb label="Digital products" />
          </motion.div>

          <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
            <div className="max-w-xl">
              <motion.p
                className="text-eyebrow text-white/40 mb-5"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                01 / Digital products
              </motion.p>
              <motion.h1
                className="home-display text-white mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease }}
              >
                Websites, apps and software
                <br />
                <span className="text-white/50">built for your business.</span>
              </motion.h1>
              <motion.p
                className="home-lede text-white/55 max-w-lg mb-8 sm:mb-10"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              >
                We design and build digital products that help your customers, your team and your business get more done.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16, ease }}
              >
                <PrimaryButton onClick={() => setIsOpen(true)}>Let&apos;s Build →</PrimaryButton>
                <GhostLink href="#what-we-build">See what we build</GhostLink>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
            >
              <ProductHeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="what-we-build" className="scroll-mt-24 home-section pt-0">
        <div className="home-shell">
          <Reveal className="max-w-[36rem] mb-12 sm:mb-16">
            <p className="text-eyebrow text-white/40 mb-4">01 / What we build</p>
            <h2 className="home-section-title text-white">Digital products built around real needs.</h2>
          </Reveal>

          <div className="border-t border-white/[0.10]">
            {offerings.map((item, i) => {
              const Icon = item.Icon;
              return (
                <Reveal key={item.title} delay={i * 0.04}>
                  <div
                    className={`suite-offer group grid grid-cols-[3rem_2rem_1fr] items-start gap-3 border-b border-white/[0.10] py-7 sm:grid-cols-[4.5rem_2rem_minmax(0,0.42fr)_minmax(0,0.58fr)_1.5rem] sm:gap-6 ${
                      item.featured ? 'sm:py-10' : 'sm:py-8'
                    }`}
                  >
                    <span className="text-[12px] tabular-nums tracking-[0.14em] text-white/30">{item.n}</span>
                    <Icon className="h-5 w-5 text-white/40 transition-colors duration-300 group-hover:text-cyan-300/80" />
                    <h3
                      className={`font-semibold tracking-tight text-white ${
                        item.featured ? 'text-[1.45rem] sm:text-[1.7rem]' : 'text-[1.2rem] sm:text-[1.35rem]'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="col-start-3 home-body text-white/45 transition-colors duration-300 group-hover:text-white/60 sm:col-start-auto">
                      {item.text}
                    </p>
                    <Arrow className="hidden h-4 w-4 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300/80 sm:block" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <Reveal className="mb-10 sm:mb-14 max-w-xl">
            <p className="text-eyebrow text-white/40 mb-4">One place to work from</p>
            <h2 className="home-section-title text-white">
              A site. An app.
              <br />
              <span className="text-white/45">The software behind them.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <ProductEcosystem />
          </Reveal>
        </div>
      </section>

      <section id="business-systems" className="home-section pt-0 scroll-mt-24">
        <div className="home-shell">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <Reveal className="max-w-lg">
              <p className="text-eyebrow text-white/40 mb-5">Business systems</p>
              <h2 className="home-section-title text-white">The software your business runs on.</h2>
              <p className="home-lede mt-6 text-white/50">
                ERP systems, dashboards and internal tools that help your team manage everyday work.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <OperationsInterface />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <Reveal className="max-w-[34rem] mb-12 sm:mb-16">
            <p className="text-eyebrow text-white/40 mb-4">How it works</p>
            <h2 className="home-section-title text-white">From idea to something people can use.</h2>
          </Reveal>

          <div className="lg:hidden border-t border-white/[0.10]">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.03}>
                <div className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-white/[0.10] py-5">
                  <span className="text-[12px] tabular-nums tracking-[0.14em] text-cyan-300/70">{step.n}</span>
                  <h3 className="text-[1.15rem] font-medium tracking-tight text-white">{step.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="hidden lg:grid grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05} className="relative">
                {i < steps.length - 1 && (
                  <span className="pointer-events-none absolute left-[18px] top-[18px] z-0 h-px w-[calc(100%+1.5rem)] bg-white/[0.10]" />
                )}
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.14] bg-black text-[11px] tabular-nums tracking-[0.12em] text-cyan-300/80">
                  {step.n}
                </span>
                <h3 className="mt-6 text-[1.25rem] font-semibold tracking-tight text-white">{step.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-4">
        <div className="home-shell">
          <Reveal className="max-w-xl">
            <p className="text-eyebrow text-white/40 mb-4">What you get</p>
            <h2 className="home-section-title text-white">Something your team can actually use.</h2>
            <p className="home-lede mt-6 text-white/50">
              A first version that ships and works. The next piece should be easy to add.
            </p>
          </Reveal>
        </div>
      </section>

      <RelatedStrip current={paths.products} />
      <SuiteCTA
        title={
          <>
            Have something in mind?
          </>
        }
        text="Tell us what you're trying to build."
        cta="Let's Build →"
      />
      <EmailPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </SuiteShell>
  );
}
