'use client';

import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const steps = [
  {
    n: '01',
    title: 'Discover',
    line: 'We understand your business.',
    text: 'Your goals, customers, current setup, and what needs to change.',
  },
  {
    n: '02',
    title: 'Plan',
    line: "You know what's being built.",
    text: 'Clear scope, timeline, priorities, and cost before we begin.',
  },
  {
    n: '03',
    title: 'Build & Launch',
    line: 'We handle the work.',
    text: 'Design, development, marketing, automation, testing, and launch.',
  },
  {
    n: '04',
    title: 'Grow',
    line: 'We keep improving.',
    text: 'Support, optimisation, new features, and ongoing growth when you need it.',
  },
];

function StepPanel({ step }) {
  return (
    <div className="rounded-[22px] border border-white/[0.08] bg-[#0c0c0c] px-6 py-7 sm:px-8 sm:py-8">
      <p className="text-[13px] tabular-nums tracking-[0.18em] text-cyan-300/80">{step.n}</p>
      <h3 className="home-card-title mt-3 text-white">{step.title}</h3>
      <p className="mt-4 text-[15px] sm:text-base text-white/70 leading-snug tracking-tight">
        {step.line}
      </p>
      <p className="home-body mt-5 text-white/40">{step.text}</p>
    </div>
  );
}

function SectionIntro({ className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease }}
    >
      <p className="text-eyebrow text-white/40 mb-5">How we work</p>
      <h2 className="home-section-title text-white">
        Four steps.
        <br />
        <span className="text-white/45">From idea to growth.</span>
      </h2>
      <p className="home-lede mt-6 max-w-[34rem] text-white/45">
        Whether you need a website, software, marketing, or automation, we keep the process simple, from the first conversation to the final result.
      </p>
    </motion.div>
  );
}

function layoutCenter(el, root) {
  const point = {
    x: el.offsetLeft + el.offsetWidth / 2,
    y: el.offsetTop + el.offsetHeight / 2,
    r: el.offsetWidth / 2,
  };
  let node = el.offsetParent;

  while (node && node !== root) {
    point.x += node.offsetLeft;
    point.y += node.offsetTop;
    node = node.offsetParent;
  }

  return point;
}

function stepRoute(points) {
  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i];
    const b = points[i + 1];
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const sign = i % 2 === 0 ? 1 : -1;
    d += ` Q ${mx} ${my + sign * 36} ${b.x} ${b.y}`;
  }

  return d;
}

export default function ProcessEditorial() {
  const reduce = useReducedMotion();
  const routeRef = useRef(null);
  const circleRefs = useRef([]);
  const [route, setRoute] = useState('');
  const [points, setPoints] = useState([]);
  const [frame, setFrame] = useState({ w: 0, h: 0 });
  const routeInView = useInView(routeRef, { amount: 0.45 });
  const [active, setActive] = useState(0);
  const scrollerRef = useRef(null);

  const onScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    if (!width) return;
    const next = Math.round(el.scrollLeft / width);
    setActive(Math.min(steps.length - 1, Math.max(0, next)));
  }, []);

  useLayoutEffect(() => {
    const root = routeRef.current;
    if (!root) return undefined;

    const measure = () => {
      const box = root.getBoundingClientRect();
      const next = circleRefs.current.filter(Boolean).map((el) => layoutCenter(el, root));
      if (next.length === 4 && box.width > 0 && box.height > 0) {
        setPoints(next);
        setRoute(stepRoute(next));
        setFrame({ w: box.width, h: box.height });
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, []);

  const goTo = (index) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
    setActive(index);
  };

  return (
    <section id="process" className="home-section scroll-mt-24">
      <div className="home-shell">
        <div className="lg:hidden">
          <SectionIntro className="mb-8" />

          <div
            className="mb-5 grid grid-cols-4 gap-1 rounded-[18px] border border-white/[0.10] bg-white/[0.03] p-1"
            role="tablist"
            aria-label="Process steps"
          >
            {steps.map((step, index) => {
              const selected = active === index;
              return (
                <button
                  key={step.n}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-label={`${step.n} ${step.title}`}
                  onClick={() => goTo(index)}
                  className={`flex min-h-[3.25rem] flex-col items-center justify-center rounded-[14px] px-1 transition-colors duration-300 ${
                    selected ? 'bg-white text-black' : 'text-white/40'
                  }`}
                >
                  <span className={`text-[10px] tabular-nums tracking-[0.14em] ${selected ? 'text-black/50' : 'text-white/30'}`}>
                    {step.n}
                  </span>
                  <span className="mt-0.5 text-[11px] font-medium tracking-tight leading-tight text-center">
                    {step.title === 'Build & Launch' ? 'Launch' : step.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {steps.map((step) => (
              <div key={step.n} className="w-full shrink-0 snap-start snap-always">
                <StepPanel step={step} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <SectionIntro className="mb-16 xl:mb-20" />

          <div ref={routeRef} className="relative">
            {route && (
              <svg
                viewBox={`0 0 ${frame.w} ${frame.h}`}
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
                aria-hidden
              >
                <defs>
                  <mask id="home-process-route-mask">
                    <rect x="0" y="0" width={frame.w} height={frame.h} fill="white" />
                    {points.map((point) => (
                      <circle key={`${point.x}-${point.y}`} cx={point.x} cy={point.y} r={point.r - 0.5} fill="black" />
                    ))}
                  </mask>
                </defs>
                <g mask="url(#home-process-route-mask)">
                  <path d={route} fill="none" stroke="rgba(103,232,249,0.16)" strokeWidth="6" strokeLinecap="round" />
                  <path d={route} fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.15" strokeLinecap="round" />
                  {!reduce && routeInView && [0, 1, 2].map((i) => (
                    <path
                      key={`${route}-${i}`}
                      d="M -10 -3.6 L 1.2 0 L -10 3.6"
                      fill="none"
                      stroke="#67e8f9"
                      strokeWidth="1.5"
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
          <div className="relative z-10 grid grid-cols-4 gap-8 xl:gap-10">
            {steps.map((step, i) => {
              return (
                <motion.article
                  key={step.n}
                  className="group relative text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease }}
                >
                  <span
                    ref={(node) => {
                      circleRefs.current[i] = node;
                    }}
                    className="relative z-10 mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.14] bg-black text-[11px] tabular-nums tracking-[0.12em] text-cyan-300/80 transition-colors duration-300 group-hover:border-cyan-300/40"
                  >
                    {step.n}
                  </span>
                  <h3 className="mt-8 text-[1.35rem] xl:text-[1.5rem] font-semibold tracking-tight text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[15px] xl:text-base text-white/70 leading-snug tracking-tight">
                    {step.line}
                  </p>
                  <p className="home-body mt-4 text-white/40">{step.text}</p>
                </motion.article>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
