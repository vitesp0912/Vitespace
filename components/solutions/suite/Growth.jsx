'use client';

import { useState } from 'react';
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
import {
  AdsPresentation,
  GrowthPreview,
  GrowthWorkbench,
  OfflineStudio,
  SearchEngineVisual,
} from '@/components/solutions/suite/visuals';
import {
  IconAds,
  IconBrand,
  IconContent,
  IconPerformance,
  IconSeo,
} from '@/components/solutions/icons';
import { paths } from '@/components/solutions/paths';
import EmailPopup from '@/components/EmailPopup';

const services = [
  {
    n: '01',
    title: 'Offline marketing',
    text: 'Print, signage and the places people still find you in person.',
    Icon: IconContent,
    kind: 'offline',
  },
  {
    n: '02',
    title: 'SEO',
    text: 'Get found by the people already looking for what you do.',
    Icon: IconSeo,
    kind: 'seo',
  },
  {
    n: '03',
    title: 'Google Ads',
    text: 'Reach people who are searching, and turn the click into an enquiry.',
    Icon: IconAds,
    kind: 'ads',
  },
  {
    n: '04',
    title: 'Meta Ads',
    text: 'Reach the right audience on the platforms they already use.',
    Icon: IconPerformance,
    kind: 'meta',
  },
  {
    n: '05',
    title: 'Brand & creative',
    text: 'A look and feel people remember.',
    Icon: IconBrand,
    kind: 'brand',
  },
];

export default function Growth() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SuiteShell>
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="home-shell">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            <Breadcrumb label="Growth" />
          </motion.div>

          <div className="mt-10 grid grid-cols-1 items-end gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <motion.p
                className="text-eyebrow text-white/40 mb-5"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                02 / Growth
              </motion.p>
              <motion.h1
                className="home-display text-white mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease }}
              >
                Get found.
                <br />
                Get noticed.
                <br />
                <span className="text-cyan-300">Get customers.</span>
              </motion.h1>
              <motion.p
                className="home-lede text-white/55 max-w-lg mb-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              >
                SEO, advertising, brand and offline marketing that put your business in front of the right people.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16, duration: 0.5, ease }}>
                <PrimaryButton onClick={() => setIsOpen(true)}>Let&apos;s Grow →</PrimaryButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease }}
            >
              <GrowthWorkbench />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <Reveal className="max-w-[34rem] mb-10 sm:mb-14">
            <p className="text-eyebrow text-white/40 mb-4">What we do</p>
            <h2 className="home-section-title text-white">Search, ads, brand, and the world outside the screen.</h2>
          </Reveal>

          <div className="border-t border-white/[0.10]">
            {services.map((item, i) => {
              const Icon = item.Icon;
              return (
                <Reveal key={item.title} delay={i * 0.03}>
                  <div className="suite-growth-row group relative grid grid-cols-[2.5rem_1.75rem_1fr] items-start gap-3 border-b border-white/[0.10] py-6 sm:grid-cols-[3.5rem_2rem_minmax(0,0.38fr)_minmax(0,0.36fr)_9rem_1.25rem] sm:items-center sm:gap-5 sm:py-7">
                    <span className="text-[12px] tabular-nums tracking-[0.14em] text-white/30">{item.n}</span>
                    <Icon className="h-5 w-5 text-white/40 transition-colors duration-300 group-hover:text-cyan-300/80" />
                    <h3 className="text-[1.15rem] font-semibold tracking-tight text-white sm:text-[1.3rem]">
                      {item.title}
                    </h3>
                    <p className="col-start-3 home-body text-white/40 sm:col-start-auto sm:text-white/45">
                      {item.text}
                    </p>
                    <div className="pointer-events-none hidden w-[9rem] opacity-0 transition-opacity duration-300 lg:block lg:group-hover:opacity-100">
                      <GrowthPreview kind={item.kind} />
                    </div>
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
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <Reveal className="max-w-md">
              <p className="text-eyebrow text-white/40 mb-5">Search</p>
              <h2 className="home-section-title text-white">Show up first when it matters.</h2>
              <p className="home-lede mt-6 text-white/50">
                We set up the site and the pages so people who are already looking can find you.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <SearchEngineVisual />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <Reveal className="max-w-xl mb-10 sm:mb-14">
            <p className="text-eyebrow text-white/40 mb-4">Ads</p>
            <h2 className="home-section-title text-white">Paid attention, aimed at enquiries.</h2>
            <p className="home-lede mt-6 text-white/50">
              Search ads and social ads built to bring people in, not just clicks.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <AdsPresentation />
          </Reveal>
        </div>
      </section>

      <section className="home-section pt-0">
        <div className="home-shell">
          <Reveal className="max-w-xl mb-10 sm:mb-14">
            <p className="text-eyebrow text-white/40 mb-4">Offline</p>
            <h2 className="home-section-title text-white">The places people still find you in person.</h2>
            <p className="home-lede mt-6 text-white/50">
              Cards, posters and signage that feel like the same business as the site.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <OfflineStudio />
          </Reveal>
        </div>
      </section>

      <section className="pb-4">
        <div className="home-shell">
          <Reveal className="max-w-lg">
            <p className="text-eyebrow text-white/40 mb-4">What you get</p>
            <h2 className="home-section-title text-white">More of the right people find you.</h2>
          </Reveal>
        </div>
      </section>

      <RelatedStrip current={paths.growth} />
      <SuiteCTA
        align="start"
        title={
          <>
            Ready to get more
            <br />
            people through the door?
          </>
        }
        cta="Let's Grow →"
      />
      <EmailPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </SuiteShell>
  );
}
