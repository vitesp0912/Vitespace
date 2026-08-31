'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { AutomationShot, GrowthShot, OperationsShot, prefetchSolutionShots } from '@/components/solutions/visuals';
import SolutionsCTA from '@/components/solutions/SolutionsCTA';
import EmailPopup from '@/components/EmailPopup';
import { paths } from '@/components/solutions/paths';
import {
  IconApp,
  IconAutomation,
  IconGrowth,
  IconMobile,
  IconSoftware,
  IconSystem,
  IconWebApp,
  IconWebsite,
} from '@/components/solutions/icons';

const ease = [0.22, 1, 0.36, 1];
const view = { once: true, amount: 0.32, margin: '0px 0px -10% 0px' };

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: view,
};

const cellRise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function SoftShot({ children, className = '' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [16, -16]);

  return (
    <div ref={ref} className={`h-full min-h-0 ${className}`}>
      <motion.div
        className="h-full"
        style={{ y }}
        initial={reduce ? false : { opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 1.15, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const needs = [
  {
    id: 'website',
    n: '01',
    label: 'Website',
    href: '#digital-products',
    line: 'A website that brings in the right customers.',
    Icon: IconWebsite,
  },
  {
    id: 'app',
    n: '02',
    label: 'App',
    href: '#digital-products',
    line: 'A web or mobile app for your customers or team.',
    Icon: IconApp,
  },
  {
    id: 'software',
    n: '03',
    label: 'Software',
    href: '#digital-products',
    line: 'Custom software around how your business works.',
    Icon: IconSoftware,
  },
  {
    id: 'system',
    n: '04',
    label: 'Business system',
    href: '#business-systems',
    line: 'ERP, dashboards and tools that keep work organised.',
    Icon: IconSystem,
  },
  {
    id: 'growth',
    n: '05',
    label: 'Growth',
    href: '#growth',
    line: 'SEO, ads and marketing that bring more customers.',
    Icon: IconGrowth,
  },
  {
    id: 'automation',
    n: '06',
    label: 'Automation',
    href: '#automation',
    line: 'Automate repetitive work in sales, support and operations.',
    Icon: IconAutomation,
  },
];

const products = [
  {
    title: 'Websites',
    hook: 'Turn more visitors into customers.',
    line: 'Explain what you do, build trust, and make it easy to get in touch.',
    href: paths.products,
    Icon: IconWebsite,
  },
  {
    title: 'Web applications',
    hook: 'A better way for customers or teams to get things done.',
    line: 'Portals, platforms, dashboards and tools people can use from anywhere.',
    href: paths.products,
    Icon: IconWebApp,
  },
  {
    title: 'Mobile applications',
    hook: "Put your business in your customers' hands.",
    line: 'iOS and Android apps with a clear job, for customers or your team.',
    href: paths.products,
    Icon: IconMobile,
  },
  {
    title: 'Custom software',
    hook: "If off-the-shelf doesn't fit, we build what does.",
    line: 'Software made around your process, your team and how you work.',
    href: paths.products,
    Icon: IconSoftware,
  },
];

const growthRows = [
  {
    n: '01',
    title: 'Search Engine Optimization',
    hook: 'Show up when people look for what you sell.',
    line: 'Improve search visibility and bring the right people to your site.',
    href: paths.growth,
  },
  {
    n: '02',
    title: 'Google Ads',
    hook: 'Reach people ready to search, compare and buy.',
    line: 'Ads that put you in front of people already looking for what you sell.',
    href: paths.growth,
  },
  {
    n: '03',
    title: 'Meta Ads',
    hook: 'Reach the people most likely to care.',
    line: 'Facebook and Instagram campaigns that reach the right audience.',
    href: paths.growth,
  },
  {
    n: '04',
    title: 'Offline marketing',
    hook: 'Put your business where people can see it.',
    line: 'Print, signage and campaigns that get you noticed in the real world.',
    href: paths.growth,
  },
  {
    n: '05',
    title: 'Brand & creative',
    hook: 'Look like a business people remember.',
    line: 'Identity and creative that make you easier to recognise and trust.',
    href: paths.growth,
  },
];

const automationRows = [
  {
    n: '01',
    title: 'AI automation',
    hook: 'Automate the steps your team repeats.',
    line: 'Connect the tools you already use and take routine work off your team.',
    href: paths.automation,
  },
  {
    n: '02',
    title: 'AI chatbots',
    hook: 'Answer customers even when your team is busy.',
    line: 'Answer common questions, guide visitors and capture enquiries.',
    href: paths.chatbots,
  },
  {
    n: '03',
    title: 'AI voice agents',
    hook: 'Answer calls without making customers wait.',
    line: 'Handle common calls, qualify enquiries and pass the right ones on.',
    href: paths.voice,
  },
];

function RevealWords({ text, className = '', delay = 0 }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.28em]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.55, delay: delay + i * 0.05, ease }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function SolutionsHero() {
  const reduce = useReducedMotion();
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.25, ease }}
        aria-hidden
      >
        {!loaded && (
          <div className="absolute inset-0 z-[1] flex items-center justify-center bg-black">
            <span className="h-6 w-6 rounded-full border border-white/15 border-t-cyan-300/80 animate-spin" />
          </div>
        )}
        <motion.img
          ref={imgRef}
          src="/solutionshero.png"
          alt=""
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover object-[78%_center] sm:object-[72%_center] lg:object-center will-change-transform transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ scale: reduce ? 1 : 1.08 }}
          animate={{ scale: reduce ? 1 : 1.02 }}
          transition={{ duration: reduce ? 0 : 16, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 sm:hidden" />
        <div className="absolute inset-0 bg-black/20 sm:hidden" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/15 lg:via-black/45 lg:to-transparent" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25 pointer-events-none" />
      </motion.div>

      <div className="home-shell relative z-10 w-full">
        <div className="max-w-[20.5rem] sm:max-w-xl lg:max-w-[40rem]">
          <motion.p
            className="text-eyebrow text-white/40 mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            Solutions
          </motion.p>
          <h1 className="home-display text-white mb-6 sm:mb-8">
            {['Build', 'what', 'your', 'business'].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.28em]"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.22 + i * 0.05, ease }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {['needs', 'next.'].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.28em] text-cyan-300"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.42 + i * 0.05, ease }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="home-lede text-white/55 sm:text-white/60 max-w-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.58, ease }}
          >
            Websites, apps, software, marketing and automation for businesses that want to grow.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function NeedOrientation() {
  const [active, setActive] = useState(needs[0].id);

  return (
    <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
      <div className="home-shell">
        <motion.div
          className="max-w-xl mb-7 sm:mb-14 lg:mb-16"
          {...fadeUp}
          transition={{ duration: 0.9, ease }}
        >
          <p className="text-eyebrow text-white/40 mb-4">Start here</p>
          <h2 className="home-section-title text-white">
            What do you need?
          </h2>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-[24px] border border-white/[0.12]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.85, ease, staggerChildren: 0.055, delayChildren: 0.08 },
            },
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.10]">
            {needs.map((item) => {
              const selected = item.id === active;
              return (
                <motion.a
                  key={item.id}
                  variants={cellRise}
                  href={item.href}
                  onMouseEnter={() => setActive(item.id)}
                  onFocus={() => setActive(item.id)}
                  onClick={(event) => {
                    event.preventDefault();
                    setActive(item.id);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="sol-product group relative flex flex-col justify-between bg-[#0B0B0B] px-3.5 py-4 sm:p-7 xl:p-9 min-h-0 sm:min-h-[13rem] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-cyan-300/45"
                >
                  <span
                    className={`block text-[10px] sm:text-[12px] tabular-nums tracking-[0.16em] transition-colors duration-300 ${
                      selected ? 'text-cyan-300/85' : 'text-white/28 group-hover:text-cyan-300/60'
                    }`}
                  >
                    {item.n}
                  </span>
                  <div className="mt-3 sm:mt-8">
                    <span
                      className={`block font-semibold tracking-tight leading-[1.15] text-[1.05rem] sm:text-[1.45rem] lg:text-[1.65rem] transition-colors duration-300 ${
                        selected ? 'text-white' : 'text-white/50 group-hover:text-white/85'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`mt-3 hidden sm:block text-[14px] sm:text-[15px] leading-relaxed transition-colors duration-300 ${
                        selected ? 'text-white/50' : 'text-white/30 group-hover:text-white/45'
                      }`}
                    >
                      {item.line}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCarousel({ onBuild }) {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = [...el.querySelectorAll('[data-slide]')];
    let best = 0;
    let dist = Infinity;
    cards.forEach((card, i) => {
      const d = Math.abs(card.offsetLeft - el.scrollLeft);
      if (d < dist) {
        dist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  const goTo = (index) => {
    const el = scrollerRef.current;
    const card = el?.querySelectorAll('[data-slide]')[index];
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    setActive(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={view}
      transition={{ duration: 0.9, ease }}
    >
      <div className="mb-5 flex items-center justify-end">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous product"
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] text-white/55 transition-all duration-300 ease-premium hover:border-white/30 hover:text-white disabled:opacity-25 disabled:hover:border-white/[0.12] disabled:hover:text-white/55"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next product"
            disabled={active === products.length - 1}
            onClick={() => goTo(active + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] text-white/55 transition-all duration-300 ease-premium hover:border-white/30 hover:text-white disabled:opacity-25 disabled:hover:border-white/[0.12] disabled:hover:text-white/55"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain gap-3 sm:gap-4 py-6 sm:py-8"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {products.map((item) => (
          <button
            key={item.title}
            type="button"
            data-slide
            onClick={onBuild}
            className="sol-product sol-carousel-card group relative flex w-[min(19.5rem,82vw)] sm:w-[min(28rem,72%)] lg:w-[min(34rem,58%)] shrink-0 snap-start snap-always flex-col justify-between overflow-hidden rounded-[20px] border border-white/[0.12] bg-[#0B0B0B] px-6 py-6 sm:px-8 sm:py-8 min-h-[17rem] sm:min-h-[20rem] text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-cyan-300/45"
          >
            <div className="flex items-start justify-end">
              <item.Icon className="h-[18px] w-[18px] text-white/35 transition-colors duration-300 group-hover:text-cyan-300" />
            </div>
            <div className="mt-12 sm:mt-16">
              <h3 className="text-[1.45rem] sm:text-[1.75rem] font-semibold tracking-tight leading-[1.1] text-white/90 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] sm:text-[16px] font-medium tracking-tight text-white/65 transition-colors duration-300 group-hover:text-white/85">
                {item.hook}
              </p>
              <p className="mt-2 home-body text-white/40 max-w-sm transition-colors duration-300 group-hover:text-white/55">
                {item.line}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Digital products">
        {products.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={item.title}
            onClick={() => goTo(index)}
            className={`h-1 rounded-full transition-all duration-500 ease-premium ${
              active === index ? 'w-7 bg-cyan-300/80' : 'w-2 bg-white/20 hover:bg-white/35'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function DigitalProducts({ onBuild }) {
  return (
    <section id="digital-products" className="scroll-mt-24 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
      <div className="home-shell">
        <div className="max-w-[38rem] mb-8 sm:mb-10">
          <motion.p
            className="text-eyebrow text-white/40 mb-5"
            {...fadeUp}
            transition={{ duration: 0.85, ease }}
          >
            Digital products
          </motion.p>
          <motion.h2
            className="home-section-title text-white"
            {...fadeUp}
            transition={{ duration: 0.95, delay: 0.06, ease }}
          >
            Websites, apps and software that help your business do more.
          </motion.h2>
          <motion.p
            className="home-lede mt-6 text-white/50"
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.12, ease }}
          >
            From your public website to the software your team uses every day.
          </motion.p>
        </div>

        <ProductCarousel onBuild={onBuild} />
      </div>
    </section>
  );
}

function StatementStrip() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28">
      <div className="home-shell text-center">
        <h2 className="home-closing-title text-white">
          <RevealWords text="Not just something that looks good." />
          <br />
          <span className="text-white/50">
            <RevealWords text="Something that works." delay={0.45} />
          </span>
        </h2>
        <motion.p
          className="home-lede mt-8 text-white/45 max-w-md mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.85, delay: 0.7, ease }}
        >
          Designed around the people who use it.
        </motion.p>
      </div>
    </section>
  );
}

function BusinessSystems() {
  return (
    <section id="business-systems" className="scroll-mt-24 pb-16 sm:pb-20 lg:pb-24">
      <div className="home-shell">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="max-w-lg">
            <motion.p
              className="text-eyebrow text-white/40 mb-5"
              {...fadeUp}
              transition={{ duration: 0.85, ease }}
            >
              Business systems
            </motion.p>
            <motion.h2
              className="home-section-title text-white"
              {...fadeUp}
              transition={{ duration: 0.95, delay: 0.06, ease }}
            >
              The software your business runs on.
            </motion.h2>
            <motion.p
              className="home-lede mt-6 text-white/50"
              {...fadeUp}
              transition={{ duration: 0.9, delay: 0.12, ease }}
            >
              ERP, dashboards and internal tools for everyday work, information and operations.
            </motion.p>
          </div>

          <SoftShot>
            <OperationsShot />
          </SoftShot>
        </div>
      </div>
    </section>
  );
}

function GrowthBlock({ onBuild }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="growth" className="home-section scroll-mt-24">
      <div className="home-shell">
        <div className="max-w-[38rem] mb-12 sm:mb-16">
          <motion.p
            className="text-eyebrow text-white/40 mb-5"
            {...fadeUp}
            transition={{ duration: 0.85, ease }}
          >
            Growth
          </motion.p>
          <motion.h2
            className="home-section-title text-white"
            {...fadeUp}
            transition={{ duration: 0.95, delay: 0.06, ease }}
          >
            Get found. Get noticed. Get customers.
          </motion.h2>
          <motion.p
            className="home-lede mt-6 text-white/50"
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.12, ease }}
          >
            SEO, ads, brand and offline marketing that put you in front of the right people.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] gap-8 lg:gap-10 xl:gap-12 items-stretch">
          <SoftShot className="order-1 h-full min-h-0">
            <GrowthShot />
          </SoftShot>

          <div className="order-2 overflow-hidden rounded-[20px] border border-white/[0.12] bg-[#0B0B0B]">
            {growthRows.map((item, i) => (
              <motion.div
                key={item.title}
                className={i >= 3 && !showMore ? 'hidden lg:block' : undefined}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.7, delay: i * 0.06, ease }}
              >
                <button
                  type="button"
                  onClick={onBuild}
                  className={`sol-product group block w-full text-left px-5 py-4 sm:px-6 sm:py-5 ${
                    i !== growthRows.length - 1 ? 'border-b border-white/[0.10]' : ''
                  }`}
                >
                    <h3 className="text-[1.05rem] sm:text-[1.15rem] font-semibold tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] sm:text-[14px] font-medium text-white/65 transition-colors duration-300 group-hover:text-white/80">
                      {item.hook}
                    </p>
                    <p className="mt-1 text-[13px] sm:text-[14px] leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/55">
                      {item.line}
                    </p>
                </button>
              </motion.div>
            ))}
            <button
              type="button"
              className={`lg:hidden w-full px-5 py-4 text-left text-[13px] tracking-[0.14em] uppercase text-white/40 transition-colors duration-300 hover:text-white/70 ${
                showMore ? 'hidden' : ''
              }`}
              onClick={() => setShowMore(true)}
            >
              View more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutomationBlock({ onBuild }) {
  return (
    <section id="automation" className="relative py-20 sm:py-24 lg:py-28 scroll-mt-24">
      <div className="home-shell">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <motion.p
            className="text-eyebrow text-white/40 mb-5"
            {...fadeUp}
            transition={{ duration: 0.85, ease }}
          >
            Automation
          </motion.p>
          <motion.h2
            className="home-section-title text-white"
            {...fadeUp}
            transition={{ duration: 0.95, delay: 0.06, ease }}
          >
            Spend less time doing the same work.
          </motion.h2>
          <motion.p
            className="home-lede mt-6 text-white/50 max-w-lg"
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.12, ease }}
          >
            Automation for sales, support and everyday tasks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <SoftShot className="order-1 lg:order-2 min-h-0">
            <AutomationShot />
          </SoftShot>

          <div className="order-2 lg:order-1 overflow-hidden rounded-[20px] border border-white/[0.12] bg-[#0B0B0B]">
            {automationRows.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.7, delay: i * 0.07, ease }}
              >
                <button
                  type="button"
                  onClick={onBuild}
                  className={`sol-product group block w-full text-left px-6 py-5 sm:px-7 sm:py-6 ${
                    i !== automationRows.length - 1 ? 'border-b border-white/[0.10]' : ''
                  }`}
                >
                  <h3 className="text-[1.15rem] sm:text-[1.25rem] font-semibold tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] sm:text-[15px] font-medium text-white/65 transition-colors duration-300 group-hover:text-white/80">
                    {item.hook}
                  </p>
                  <p className="mt-1.5 text-[13px] sm:text-[14px] leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/55">
                    {item.line}
                  </p>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionsView() {
  const [isBuildOpen, setIsBuildOpen] = useState(false);

  useEffect(() => {
    prefetchSolutionShots();
  }, []);

  const onBuild = () => setIsBuildOpen(true);

  return (
    <>
      <SolutionsHero />
      <NeedOrientation />
      <DigitalProducts onBuild={onBuild} />
      <StatementStrip />
      <BusinessSystems />
      <GrowthBlock onBuild={onBuild} />
      <AutomationBlock onBuild={onBuild} />
      <SolutionsCTA />
      <EmailPopup isOpen={isBuildOpen} onClose={() => setIsBuildOpen(false)} />
    </>
  );
}
