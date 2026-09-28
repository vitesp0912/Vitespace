'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export const heroStack = [
  { title: 'BUILD', note: 'Websites, apps, software' },
  { title: 'GROW', note: 'SEO, Google Ads, Meta Ads' },
  { title: 'AUTOMATE', note: 'AI, voice agents, workflows' },
];

const R = 76;

const heroNodes = [
  {
    id: 'build',
    title: 'BUILD',
    lines: ['Websites, apps', 'and software'],
    cx: 220,
    cy: 94,
    accent: false,
  },
  {
    id: 'grow',
    title: 'GROW',
    lines: ['SEO, Google Ads', 'and Meta Ads'],
    cx: 348,
    cy: 316,
    accent: true,
  },
  {
    id: 'automate',
    title: 'AUTOMATE',
    lines: ['AI, voice agents', 'and workflows'],
    cx: 92,
    cy: 316,
    accent: false,
  },
];

const heroEdges = [
  [heroNodes[0], heroNodes[1], 0],
  [heroNodes[1], heroNodes[2], 1.8],
  [heroNodes[2], heroNodes[0], 3.6],
];

const heroCentroid = {
  x: heroNodes.reduce((sum, node) => sum + node.cx, 0) / heroNodes.length,
  y: heroNodes.reduce((sum, node) => sum + node.cy, 0) / heroNodes.length,
};

function heroCurve(a, b, bow = 108) {
  const mx = (a.cx + b.cx) / 2;
  const my = (a.cy + b.cy) / 2;
  const len = Math.hypot(mx - heroCentroid.x, my - heroCentroid.y) || 1;
  const cx = mx + ((mx - heroCentroid.x) / len) * bow;
  const cy = my + ((my - heroCentroid.y) / len) * bow;
  return `M ${a.cx} ${a.cy} Q ${cx} ${cy} ${b.cx} ${b.cy}`;
}

export function HeroRing() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 90, damping: 24, mass: 0.4 });
  const y = useSpring(my, { stiffness: 90, damping: 24, mass: 0.4 });

  const onMove = (event) => {
    if (reduce || !ref.current) return;
    const box = ref.current.getBoundingClientRect();
    mx.set(((event.clientX - box.left) / box.width - 0.5) * 10);
    my.set(((event.clientY - box.top) / box.height - 0.5) * 8);
  };

  return (
    <motion.svg
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={reduce ? undefined : { x, y }}
      initial={reduce ? false : { opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.18, ease }}
      viewBox="0 0 440 412"
      className="mx-auto h-auto w-full max-w-[28rem] lg:ml-auto lg:mr-0"
      aria-hidden
    >
      <defs>
        <radialGradient id="hero-disc" cx="50%" cy="36%" r="70%">
          <stop offset="0%" stopColor="#171717" />
          <stop offset="68%" stopColor="#070707" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <radialGradient id="hero-disc-accent" cx="50%" cy="36%" r="70%">
          <stop offset="0%" stopColor="#102428" />
          <stop offset="62%" stopColor="#071214" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>

      {heroEdges.map(([a, b, delay]) => {
        const d = heroCurve(a, b);
        return (
          <g key={`${a.id}-${b.id}`}>
            <path d={d} fill="none" stroke="rgba(103,232,249,0.14)" strokeWidth="7" strokeLinecap="round" />
            <path d={d} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.05" strokeLinecap="round" />
            {!reduce && (
              <path
                d={d}
                fill="none"
                stroke="rgba(103,232,249,0.85)"
                strokeWidth="1.35"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray="8 92"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-100"
                  dur="5.6s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </path>
            )}
          </g>
        );
      })}

      {heroNodes.map((node) => (
        <g key={node.id}>
          <circle cx={node.cx} cy={node.cy} r={R} fill={node.accent ? 'url(#hero-disc-accent)' : 'url(#hero-disc)'} />
          <circle
            cx={node.cx}
            cy={node.cy}
            r={R}
            fill="none"
            stroke={node.accent ? 'rgba(103,232,249,0.55)' : 'rgba(255,255,255,0.22)'}
            strokeWidth="1.15"
          />
          <text
            x={node.cx}
            y={node.cy}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Poppins, sans-serif"
          >
            <tspan
              x={node.cx}
              dy="-15"
              fill={node.accent ? '#67e8f9' : '#ffffff'}
              fontSize="15"
              fontWeight="600"
              letterSpacing="1.6"
            >
              {node.title}
            </tspan>
            <tspan x={node.cx} dy="18" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="400" letterSpacing="0">
              {node.lines[0]}
            </tspan>
            <tspan x={node.cx} dy="13" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="400">
              {node.lines[1]}
            </tspan>
          </text>
        </g>
      ))}
    </motion.svg>
  );
}

export function MobileStack({ items }) {
  return (
    <div className="relative pl-6">
      <span className="absolute bottom-1 left-[5px] top-1 w-px bg-cyan-300/25" aria-hidden />
      <ul className="space-y-7">
        {items.map((item) => (
          <li key={item.title}>
            <p className={`text-[1rem] font-semibold tracking-tight ${item.title === 'GROW' ? 'text-cyan-300' : 'text-white'}`}>
              {item.title}
            </p>
            <p className="about-label mt-1">{item.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const brief = [
  {
    n: '01',
    label: 'Goal',
    q: 'What are you trying to achieve?',
    note: 'The outcome the business actually needs.',
  },
  {
    n: '02',
    label: 'Audience',
    q: 'Who are you trying to reach?',
    note: 'The people this should work for.',
  },
  {
    n: '03',
    label: 'Friction',
    q: 'Where are customers getting stuck?',
    note: 'The point where interest drops off.',
  },
  {
    n: '04',
    label: 'Manual',
    q: 'What is still being done manually?',
    note: 'The work a system should take over.',
  },
];

export function BusinessBrief() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return undefined;
    const id = setInterval(() => {
      setActive((n) => (n + 1) % brief.length);
    }, 2400);
    return () => clearInterval(id);
  }, [reduce, inView]);

  const current = brief[active];

  return (
    <div
      ref={ref}
      className="flex h-full min-h-[28rem] flex-col overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0c0c0c]"
    >
      <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
        </div>
        <p className="about-kicker !text-[0.625rem]">Discovery</p>
        <span className="flex items-center gap-1.5 text-[10px] tracking-[0.12em] uppercase text-cyan-300/80">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
          Live
        </span>
      </div>

      <div className="relative flex-1 px-5 py-6 sm:px-6 sm:py-7">
        <p className="about-kicker mb-4">{current.n}</p>
        <div className="min-h-[7.5rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.n}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease }}
            >
              <p className="text-[1.35rem] font-semibold leading-snug tracking-[-0.03em] text-white sm:text-[1.5rem]">
                {current.q}
              </p>
              <p className="about-body mt-3">{current.note}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <ul className="mt-8 space-y-3.5">
          {brief.map((item, i) => {
            const on = i === active;
            return (
              <li key={item.n}>
                <div className="mb-1.5 flex items-center justify-between">
                  <p className={`text-[11px] tracking-[0.14em] uppercase ${on ? 'text-cyan-300' : 'text-white/35'}`}>
                    {item.label}
                  </p>
                  <p className={`text-[10px] tabular-nums ${on ? 'text-cyan-300/80' : 'text-white/25'}`}>{item.n}</p>
                </div>
                <div className="h-[2px] overflow-hidden rounded-full bg-white/[0.08]">
                  <motion.span
                    className="block h-full origin-left bg-cyan-300/80"
                    initial={false}
                    animate={{ width: on ? '100%' : '0%' }}
                    transition={{ duration: on ? 2.3 : 0.35, ease: on ? 'linear' : ease }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="border-t border-white/[0.08] px-5 py-3.5 text-[12px] tracking-tight text-white/40">
        Technology comes after this.
      </p>
    </div>
  );
}
