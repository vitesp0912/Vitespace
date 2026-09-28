'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { BusinessBrief } from '@/components/about/AboutRings';

const ease = [0.16, 1, 0.3, 1];
const view = { once: false, amount: 0.3 };

const identity = [
  {
    word: 'SOFTWARE',
    items: ['Websites', 'Apps', 'Custom Software'],
    image: '/Ecommerce.png',
    alt: 'Website and digital product design',
  },
  {
    word: 'MARKETING',
    items: ['SEO', 'Google Ads', 'Meta Ads'],
    image: '/growthimage.png',
    alt: 'Search and paid marketing',
  },
  {
    word: 'AUTOMATION',
    items: ['AI Chatbots', 'Voice Agents', 'Workflows'],
    image: '/automationsection.png',
    alt: 'Chatbots, voice agents and workflows',
  },
];

const flow = [
  { title: 'BUILD', text: 'Make the product the business actually needs.' },
  { title: 'REACH', text: 'Put it in front of the people who should see it.' },
  { title: 'RESPOND', text: 'Give them a clear way to take the next step.' },
  { title: 'CONVERT', text: 'Turn that interest into a customer.' },
  { title: 'FOLLOW UP', text: 'Let a system handle what happens after.' },
  { title: 'IMPROVE', text: 'Keep what is working, and fix what is not.' },
];

const nextLines = [
  'Website should convert.',
  'Marketing needs somewhere useful to send people.',
  'A lead needs a system behind it.',
  'Software needs users.',
  'Automation needs a real process to improve.',
];

const steps = [
  {
    n: '01',
    title: 'DISCOVER',
    text: 'Understand the business, customers, goals and existing systems.',
  },
  {
    n: '02',
    title: 'PLAN',
    text: 'Define what needs to be built, how it should work and what success looks like.',
  },
  {
    n: '03',
    title: 'BUILD & LAUNCH',
    text: 'Design, develop, test and launch.',
  },
  {
    n: '04',
    title: 'GROW',
    text: 'Improve through marketing, optimisation, new features and automation.',
  },
];

const questions = [
  { n: '01', q: 'What are you trying to achieve?' },
  { n: '02', q: 'Who are you trying to reach?' },
  { n: '03', q: 'Where are customers getting stuck?' },
  { n: '04', q: 'What is still being done manually?' },
];

const industries = [
  'REAL ESTATE',
  'SERVICE BUSINESSES',
  'STARTUPS',
  'GROWING COMPANIES',
  'DIGITAL PRODUCTS',
  'LOCAL BUSINESSES',
];

const teamPoints = [
  {
    title: 'Fewer layers',
    text: 'Fewer handoffs between an idea and the person building it.',
  },
  {
    title: 'Direct access',
    text: 'You work directly with the people working on the project.',
  },
  {
    title: 'Clear next step',
    text: 'You know what is being built, why it is being built and what happens next.',
  },
];

const closeLines = [
  'Build the product.',
  'Get it in front of the right people.',
  'Turn interest into customers.',
  'Automate what comes next.',
];

function RevealWords({ text, className = '', delay = 0, play }) {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  const controlled = play !== undefined;
  const visible = reduce || !controlled || play;

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.28em] last:mr-0"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={controlled ? { opacity: visible ? 1 : 0, y: visible ? 0 : 18 } : undefined}
          whileInView={controlled ? undefined : { opacity: 1, y: 0 }}
          viewport={controlled ? undefined : { once: false, amount: 0.85, margin: '0px 0px -12% 0px' }}
          transition={{
            duration: visible ? 0.62 : 0.25,
            delay: visible ? delay + i * 0.055 : 0,
            ease,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function BridgeArrow() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const shaft = 'M 8 96 C 118 96, 168 30, 294 67';

  return (
    <div ref={ref} className="flex justify-center" aria-hidden>
      <svg viewBox="0 0 24 72" className="h-16 w-6 lg:hidden">
        <motion.path
          d="M12 2 V48"
          fill="none"
          stroke="rgba(103,232,249,0.9)"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={reduce || inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.7, ease }}
        />
        <motion.path
          d="M4 44 L12 62 L20 44"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce || inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.35, delay: inView ? 0.4 : 0, ease }}
        />
      </svg>
      <svg viewBox="0 0 328 124" className="hidden h-40 w-full lg:block">
        <defs>
          <linearGradient id="about-bridge-arrow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
            <stop offset="62%" stopColor="rgba(255,255,255,0.78)" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>
        </defs>
        <path d={shaft} fill="none" stroke="rgba(103,232,249,0.16)" strokeWidth="8" strokeLinecap="round" />
        <motion.path
          d={shaft}
          fill="none"
          stroke="url(#about-bridge-arrow)"
          strokeWidth="1.45"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0.35 }}
          animate={reduce || inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.35 }}
          transition={{ duration: 1.05, ease }}
        />
        <motion.path
          d="M 292 75 L 314 72 L 297 59"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={reduce || inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: inView ? 0.72 : 0, ease }}
        />
        <circle cx="8" cy="96" r="2.7" fill="rgba(255,255,255,0.82)" />
      </svg>
    </div>
  );
}

export function AboutProblem() {
  const reduce = useReducedMotion();

  return (
    <section className="about-section about-band-alt">
      <div className="about-shell">
        <h2 className="about-kicker mb-8 lg:mb-10">About Vitespace</h2>
        <div className="about-grid items-center">
          <div className="lg:col-span-5">
            <motion.p
              className="about-h2 text-white"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ duration: 0.65, ease }}
            >
              Most businesses don&apos;t have a technology problem or a marketing problem.
            </motion.p>
            <motion.p
              className="about-h2 mt-4 text-white/40"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ duration: 0.6, delay: 0.05, ease }}
            >
              They have a connection problem.
            </motion.p>
          </div>
          <div className="lg:col-span-2">
            <BridgeArrow />
          </div>
          <div className="max-w-[26rem] space-y-3.5 lg:col-span-5 lg:max-w-none">
            <p className="about-body">
              Most businesses use one company to build their website, another for marketing, another tool for CRM and another system for automation.
            </p>
            <p className="about-body">The pieces work individually.</p>
            <p className="about-body">They just don&apos;t always work together.</p>
            <p className="about-body text-white/55">This is where Vitespace comes in.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutIdentity() {
  const reduce = useReducedMotion();
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: false,
    amount: 0.72,
    margin: '0px 0px -14% 0px',
  });

  return (
    <section className="about-section about-band">
      <div className="about-shell">
        <div className="about-grid">
          <div className="lg:col-span-10">
            <h2 ref={headingRef} className="about-h2 about-h2-lead text-white">
              <RevealWords text="More than a marketing agency." play={headingInView} />
              <br />
              <span className="text-white/45">
                <RevealWords text="More than a software company." play={headingInView} delay={0.34} />
              </span>
            </h2>
            <p className="about-lede mt-5 max-w-[34rem]">
              Vitespace builds the digital systems businesses need and helps them market and grow those systems.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:col-span-12 lg:mt-12">
            {identity.map((item, i) => (
              <motion.article
                key={item.word}
                className="group"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
              >
                <p className="about-kicker mb-3 flex items-center gap-2">
                  {item.word}
                  <span className="text-cyan-300/50" aria-hidden>→</span>
                </p>
                <div className="about-frame">
                  <img src={item.image} alt={item.alt} />
                </div>
                <ul className="mt-4 space-y-1.5">
                  {item.items.map((line) => (
                    <li key={line} className="about-body flex items-center gap-2">
                      <span className="text-[10px] text-cyan-300/45" aria-hidden>→</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const connectLines = [
  'A website nobody visits does not help the business.',
  'Ads that land on a weak page waste the money spent to get there.',
  'A lead goes cold if nothing happens after someone shows interest.',
];

export function AboutConnect() {
  const reduce = useReducedMotion();

  const lineRow = ['lg:row-start-4', 'lg:row-start-5', 'lg:row-start-6'];
  const stepRow = ['lg:row-start-1', 'lg:row-start-2', 'lg:row-start-3', 'lg:row-start-4', 'lg:row-start-5', 'lg:row-start-6'];

  return (
    <section className="about-section about-band-alt">
      <div className="about-shell">
        <div className="border border-white/15">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:grid-rows-6">
            <div className="flex flex-col justify-center border-b border-white/15 px-6 py-8 sm:px-8 sm:py-10 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:border-r lg:px-9">
              <motion.h2
                className="about-h2 text-white lg:max-w-[9em]"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.65, ease }}
              >
                Where Software Meets Marketing
              </motion.h2>
              <p className="mt-5 max-w-[24rem] text-[1.05rem] font-light leading-snug tracking-[-0.02em] text-white/85">
                It still has to be found, used and followed up.
              </p>
            </div>

            {connectLines.map((line, i) => (
              <motion.div
                key={line}
                className={`flex items-center border-b border-white/15 px-6 py-4 sm:px-8 lg:col-start-1 lg:border-r lg:px-9 ${lineRow[i]} ${i === connectLines.length - 1 ? 'lg:border-b-0' : ''}`}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
              >
                <p className="text-[0.95rem] font-light leading-snug text-white/70">{line}</p>
              </motion.div>
            ))}

            {flow.map((item, i) => (
              <motion.div
                key={item.title}
                className={`flex flex-col items-start gap-2 border-b border-white/15 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6 lg:col-start-2 ${stepRow[i]} ${i === flow.length - 1 ? 'border-b-0' : ''}`}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.45, delay: i * 0.05, ease }}
              >
                <span className="flex shrink-0 items-center gap-3">
                  <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-cyan-300">{item.title}</p>
                  <svg viewBox="0 0 28 10" className="h-[0.55rem] w-7 text-cyan-300" aria-hidden>
                    <path d="M0 5 H20 M16 1.2 L26 5 L16 8.8" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="min-w-0 text-[0.95rem] font-light leading-snug text-white/80">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutNextStep() {
  const reduce = useReducedMotion();
  const rowStart = ['lg:row-start-1', 'lg:row-start-2', 'lg:row-start-3', 'lg:row-start-4', 'lg:row-start-5'];

  return (
    <section className="about-section about-band">
      <div className="about-shell">
        <div className="border border-white/15">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:grid-rows-5">
            <div className="flex flex-col justify-end border-b border-white/15 px-6 py-8 sm:px-8 sm:py-10 lg:col-start-1 lg:row-span-5 lg:row-start-1 lg:border-r lg:border-b-0 lg:px-9">
              <p className="about-kicker mb-6">Why the pieces have to connect</p>
              <motion.h2
                className="about-h2 max-w-[16rem] text-white"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.65, ease }}
              >
                We build with the next step in mind.
              </motion.h2>
            </div>
            {nextLines.map((line, i) => (
              <motion.div
                key={line}
                className={`flex items-center border-b border-white/15 px-6 py-4 sm:px-8 lg:col-start-2 lg:px-8 ${rowStart[i]} ${i === nextLines.length - 1 ? 'border-b-0' : ''}`}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.45, delay: i * 0.05, ease }}
              >
                <p className="text-[0.95rem] font-light leading-snug tracking-[-0.02em] text-white/85 sm:text-[1.02rem]">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function processRoute(points) {
  const horizontal = Math.abs(points[3].x - points[0].x) > Math.abs(points[3].y - points[0].y);
  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i];
    const b = points[i + 1];
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const sign = i % 2 === 0 ? 1 : -1;
    const bow = horizontal ? 58 : 16;
    const cx = horizontal ? mx : mx - bow;
    const cy = horizontal ? my + sign * bow : my;
    d += ` Q ${cx} ${cy} ${b.x} ${b.y}`;
  }

  return d;
}

export function AboutProcess() {
  const reduce = useReducedMotion();
  const rootRef = useRef(null);
  const circleRefs = useRef([]);
  const [route, setRoute] = useState('');
  const [points, setPoints] = useState([]);
  const [frame, setFrame] = useState({ w: 0, h: 0 });
  const inView = useInView(rootRef, { amount: 0.45 });

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const measure = () => {
      const box = root.getBoundingClientRect();
      const next = circleRefs.current.filter(Boolean).map((el) => {
        const b = el.getBoundingClientRect();
        return {
          x: b.left - box.left + b.width / 2,
          y: b.top - box.top + b.height / 2,
          r: b.width / 2,
        };
      });
      if (next.length === 4 && box.width > 0 && box.height > 0) {
        setPoints(next);
        setRoute(processRoute(next));
        setFrame({ w: box.width, h: box.height });
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section about-band-alt">
      <div className="about-shell">
        <h2 className="about-h2 max-w-[28rem] text-white">From first idea to ongoing growth.</h2>
        <div ref={rootRef} className="relative mt-12 lg:mt-16">
          {route && (
            <svg
              viewBox={`0 0 ${frame.w} ${frame.h}`}
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
              aria-hidden
            >
              <defs>
                <mask id="process-route-mask">
                  <rect x="0" y="0" width={frame.w} height={frame.h} fill="white" />
                  {points.map((point) => (
                    <circle key={`${point.x}-${point.y}`} cx={point.x} cy={point.y} r={point.r - 0.5} fill="black" />
                  ))}
                </mask>
              </defs>
              <g mask="url(#process-route-mask)">
                <path d={route} fill="none" stroke="rgba(103,232,249,0.16)" strokeWidth="6" strokeLinecap="round" />
                <path d={route} fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.15" strokeLinecap="round" />
                {!reduce && inView && [0, 1, 2].map((i) => (
                  <path
                    key={`${route}-${i}`}
                    d="M -12 -4.5 L 1.5 0 L -12 4.5"
                    fill="none"
                    stroke="#67e8f9"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <animateMotion
                      dur="7.5s"
                      begin={`${-i * 2.5}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                      path={route}
                    />
                  </path>
                ))}
              </g>
            </svg>
          )}
          <ol className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <li key={step.n} className="flex items-start gap-5 lg:flex-col lg:items-center lg:text-center">
                <div
                  ref={(node) => {
                    circleRefs.current[i] = node;
                  }}
                  className="relative z-10 flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-full border border-white/20 bg-black"
                >
                  <span className="text-[0.95rem] font-semibold tracking-[0.16em] text-cyan-300">{step.n}</span>
                </div>
                <div className="pt-1 lg:max-w-[15rem] lg:pt-0">
                  <p className="about-label text-white/85">{step.title}</p>
                  <p className="about-body mt-2">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function AboutBusiness() {
  const reduce = useReducedMotion();

  return (
    <section className="about-section about-band">
      <div className="about-shell">
        <div className="about-grid items-center">
          <div className="lg:col-span-5">
            <BusinessBrief />
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <p className="about-kicker mb-4">We start with the business</p>
            <motion.h2
              className="about-h2 text-white"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ duration: 0.65, ease }}
            >
              Technology is not the starting point.
              <br />
              <span className="text-white/40">The business is.</span>
            </motion.h2>
            <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {questions.map((item) => (
                <li key={item.n}>
                  <p className="about-kicker mb-2">{item.n}</p>
                  <p className="text-[0.9375rem] font-light leading-snug tracking-[-0.02em] text-white/80">
                    {item.q}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutClients() {
  const reduce = useReducedMotion();
  const loop = [...industries, ...industries];

  return (
    <section className="relative z-0 isolate overflow-hidden bg-black py-10 lg:py-14">
      <div className="about-shell">
        <h2 className="about-h2 max-w-[28rem] text-white">
          Different businesses need different systems.
        </h2>
        <p className="sr-only">{industries.join(', ')}</p>
      </div>
      <div className="about-marquee mt-10 sm:mt-12" aria-hidden="true">
        <div
          className="about-marquee-track"
          style={reduce ? { animation: 'none' } : undefined}
        >
          {loop.map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center">
              <span className="about-marquee-item">{name}</span>
              <span className="about-marquee-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutTeam() {
  const reduce = useReducedMotion();
  const rowStart = ['lg:row-start-1', 'lg:row-start-2', 'lg:row-start-3'];

  return (
    <section className="about-section relative z-0 bg-black">
      <div className="about-shell">
        <div className="border border-white/15">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:grid-rows-3">
            <div className="flex flex-col justify-end border-b border-white/15 px-6 py-8 sm:px-8 sm:py-10 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:border-r lg:border-b-0 lg:px-9">
              <p className="about-kicker mb-6">The team</p>
              <motion.h2
                className="text-[clamp(1.7rem,8vw,3.15rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-white"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.65, ease }}
              >
                <span className="block whitespace-nowrap">Small team.</span>
                <span className="block whitespace-nowrap">Direct execution.</span>
              </motion.h2>
              <p className="mt-5 max-w-[20rem] text-[0.92rem] font-light leading-relaxed text-white/55">
                Vitespace is built as a lean team.
              </p>
            </div>
            {teamPoints.map((item, i) => (
              <motion.div
                key={item.title}
                className={`flex flex-col items-start gap-2 border-b border-white/15 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6 lg:col-start-2 ${rowStart[i]} ${i === teamPoints.length - 1 ? 'border-b-0' : ''}`}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.45, delay: i * 0.05, ease }}
              >
                <span className="flex shrink-0 items-center gap-3">
                  <p className="text-[0.98rem] font-medium leading-snug tracking-[-0.02em] text-white">{item.title}</p>
                  <svg viewBox="0 0 28 10" className="h-[0.55rem] w-7 text-cyan-300" aria-hidden>
                    <path d="M0 5 H20 M16 1.2 L26 5 L16 8.8" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="min-w-0 text-[0.92rem] font-light leading-snug text-white/65">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutClose() {
  const reduce = useReducedMotion();

  return (
    <section className="about-section about-band">
      <div className="about-shell text-center lg:text-left">
        <p className="about-kicker mb-8 lg:mb-14">How it comes together</p>
        <div className="about-grid items-center">
          <ul className="space-y-3.5 lg:col-span-5 lg:space-y-4">
            {closeLines.map((line, i) => (
              <motion.li
                key={line}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.55, delay: i * 0.06, ease }}
              >
                <p className="text-[1.35rem] font-semibold leading-snug tracking-[-0.03em] text-white sm:text-[1.6rem] lg:text-[1.85rem]">
                  {line}
                </p>
              </motion.li>
            ))}
          </ul>
          <div className="min-w-0 lg:col-span-7">
            <h2 className="text-[clamp(1.85rem,8.6vw,3.15rem)] font-semibold leading-none tracking-[-0.045em] text-white lg:whitespace-nowrap lg:text-[4.65rem]">
              <RevealWords text="That is" />
              <span className="ml-[0.22em] text-cyan-300">
                <RevealWords text="Vitespace." delay={0.18} />
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-[18rem] text-[0.8125rem] font-light leading-snug text-white/55 sm:max-w-none lg:mx-0 lg:mt-5 lg:whitespace-nowrap lg:text-[clamp(0.5rem,2.15vw,0.8125rem)] lg:leading-none">
              Software, marketing and automation for businesses that want to build and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutInlineCTA({ onStart, title, note }) {
  return (
    <div className="about-shell relative z-10 my-4 lg:my-6">
      <div className="flex flex-col items-center justify-between gap-4 rounded-[18px] border border-white/10 bg-[#0c0c0c] px-5 py-5 text-center sm:flex-row sm:px-7 sm:text-left">
        <div>
          <p className="text-[1.05rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.2rem]">{title}</p>
          {note ? <p className="mt-1 text-sm font-light leading-relaxed text-white/50">{note}</p> : null}
        </div>
        <button type="button" onClick={onStart} className="about-btn w-full shrink-0 sm:w-auto">
          Start a conversation
        </button>
      </div>
    </div>
  );
}

export function AboutCTA({ onStart }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 md:py-40">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 100%, rgba(8,145,178,0.18), transparent 60%)',
        }}
      />
      <div className="about-shell relative text-center">
        <motion.p
          className="about-kicker mb-5"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
        >
          Next step
        </motion.p>
        <motion.h2
          className="mb-6 text-[clamp(1.45rem,6.2vw,2.85rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:mb-8 lg:text-[4rem]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.05, ease }}
        >
          Have something
          <br />
          you want to build?
        </motion.h2>
        <motion.p
          className="about-lede mx-auto mb-10 max-w-xl text-white/55 sm:mb-12"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
        >
          Tell us what you&apos;re working on. We&apos;ll figure out what needs to be built, marketed or automated.
        </motion.p>
        <motion.div
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
        >
          <button type="button" onClick={onStart} className="about-btn w-full px-10 py-4 sm:w-auto sm:py-5">
            Start a conversation
          </button>
          <Link href="/solutions" className="about-btn-ghost w-full sm:w-auto">
            Explore solutions →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
