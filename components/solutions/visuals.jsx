'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const loadedShots = new Set();

const SOLUTION_SHOTS = [
  '/solutionshero.png',
  '/opertionsimage.png',
  '/growthimage.png',
  '/automationsection.png',
];

export function prefetchSolutionShots() {
  SOLUTION_SHOTS.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => loadedShots.add(src);
  });
}

function FrameLoader({ light = false }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${light ? 'bg-white' : 'bg-[#0a0a0a]'}`}
      aria-hidden
    >
      <span
        className={`h-6 w-6 rounded-full animate-spin border-t-cyan-300/80 ${
          light ? 'border border-black/10' : 'border border-white/15'
        }`}
      />
    </div>
  );
}

function SoftImage({ src, className = '', imgClassName = '', light = false }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(() => loadedShots.has(src));

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      loadedShots.add(src);
      setLoaded(true);
      return;
    }
    setLoaded(loadedShots.has(src));
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${light ? 'bg-white' : 'bg-[#0a0a0a]'} ${className}`}>
      {!loaded && <FrameLoader light={light} />}
      <img
        ref={imgRef}
        src={src}
        alt=""
        onLoad={() => {
          loadedShots.add(src);
          setLoaded(true);
        }}
        onError={() => setLoaded(true)}
        className={`${imgClassName} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}

export function ArchComposition({ className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const yA = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const yB = useTransform(scrollYProgress, [0, 1], [10, -28]);

  return (
    <div ref={ref} className={`relative aspect-[4/5] w-full max-w-[420px] ${className}`}>
      <svg viewBox="0 0 420 520" className="absolute inset-0 h-full w-full" aria-hidden>
        <g stroke="rgba(255,255,255,0.09)" strokeWidth="0.7" fill="none">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h-${i}`} x1="48" y1={70 + i * 44} x2="372" y2={88 + i * 40} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`v-${i}`} x1={70 + i * 38} y1="52" x2={48 + i * 42} y2="468" />
          ))}
        </g>
      </svg>

      <motion.svg
        style={{ y: yA }}
        viewBox="0 0 420 520"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <rect x="36" y="40" width="348" height="440" rx="4" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <rect x="62" y="68" width="296" height="384" rx="3" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M36 40h18M36 40v18M384 40h-18M384 40v18M36 480h18M36 480v-18M384 480h-18M384 480v-18" stroke="rgba(103,232,249,0.7)" strokeWidth="1.4" fill="none" />
        <line x1="62" y1="118" x2="358" y2="118" stroke="rgba(255,255,255,0.1)" />
        <rect x="86" y="148" width="168" height="112" fill="rgba(12,12,12,0.5)" stroke="rgba(103,232,249,0.45)" strokeWidth="1" />
        <rect x="86" y="148" width="4" height="112" fill="rgba(103,232,249,0.55)" stroke="none" />
        <path d="M102 176h96M102 196h72M102 216h84" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <rect x="268" y="168" width="70" height="92" fill="none" stroke="rgba(255,255,255,0.14)" />
        <rect x="86" y="292" width="252" height="128" fill="none" stroke="rgba(255,255,255,0.12)" />
        <path d="M86 324h252M168 292v128" stroke="rgba(255,255,255,0.08)" />
        <rect x="102" y="344" width="46" height="8" fill="rgba(255,255,255,0.08)" stroke="none" />
        <rect x="102" y="360" width="34" height="8" fill="rgba(255,255,255,0.05)" stroke="none" />
        <rect x="188" y="340" width="128" height="56" fill="none" stroke="rgba(255,255,255,0.1)" />
      </motion.svg>

      <motion.div
        style={{ y: yB }}
        className="absolute right-[8%] top-[18%] h-16 w-16 border border-cyan-300/30"
        aria-hidden
      >
        <span className="absolute -top-px -left-px h-2 w-2 border-t border-l border-cyan-300/80" />
        <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-cyan-300/80" />
      </motion.div>
    </div>
  );
}

export function OperationsShot() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-white/[0.12] bg-[#0B0B0B] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <SoftImage
        src="/opertionsimage.png"
        className="min-h-[16rem]"
        imgClassName="block h-auto w-full"
      />
    </div>
  );
}

export function GrowthShot() {
  return (
    <div className="h-full min-h-0 overflow-hidden rounded-[20px] border border-white/[0.12] bg-[#0B0B0B] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <SoftImage
        src="/growthimage.png"
        className="min-h-[16rem] lg:h-full lg:min-h-0"
        imgClassName="block h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-cover lg:object-center"
      />
    </div>
  );
}

export function AutomationShot() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-white/[0.12] bg-white">
      <SoftImage
        src="/automationsection.png"
        light
        className="min-h-[12rem]"
        imgClassName="block h-auto w-full object-contain"
      />
    </div>
  );
}

export function SystemInterface() {
  const rows = [
    ['1842', 'North studio', 'In progress'],
    ['1841', 'Harbour desk', 'Complete'],
    ['1840', 'Atelier west', 'Review'],
    ['1838', 'Field ops', 'In progress'],
    ['1836', 'Retail floor', 'Complete'],
  ];

  return (
    <div className="overflow-hidden rounded-[20px] border border-white/[0.12] bg-[#0B0B0B] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
        </div>
        <p className="text-[11px] tracking-[0.16em] uppercase text-white/35">Operations</p>
        <p className="text-[11px] tabular-nums text-white/30">Week 34</p>
      </div>

      <div className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr]">
        <div className="border-r border-white/[0.08] px-3 py-4 sm:px-4 space-y-3">
          {['Overview', 'Orders', 'People', 'Stock'].map((item, i) => (
            <p
              key={item}
              className={`text-[11px] tracking-tight ${i === 1 ? 'text-cyan-300/80' : 'text-white/35'}`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="min-w-0 p-4 sm:p-5">
          <div className="grid grid-cols-[3.2rem_1fr_5.5rem] gap-2 pb-2 text-[10px] uppercase tracking-[0.12em] text-white/30">
            <span>No.</span>
            <span>Record</span>
            <span className="text-right">Status</span>
          </div>
          {rows.map((row) => (
            <div
              key={row[0]}
              className="grid grid-cols-[3.2rem_1fr_5.5rem] gap-2 border-t border-white/[0.06] py-2.5 text-[12px]"
            >
              <span className="tabular-nums text-white/40">{row[0]}</span>
              <span className="truncate text-white/70">{row[1]}</span>
              <span className={`text-right ${row[2] === 'Complete' ? 'text-cyan-300/75' : 'text-white/40'}`}>
                {row[2]}
              </span>
            </div>
          ))}

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.12em] text-white/30 mb-3">Throughput</p>
              <div className="flex items-end gap-1.5 h-14">
                {[40, 62, 48, 78, 55, 88, 70].map((h, i) => (
                  <span
                    key={i}
                    className={`flex-1 rounded-[1px] ${i === 5 ? 'bg-cyan-300/70' : 'bg-white/15'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-end gap-2">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] text-white/35">Active</span>
                <span className="text-sm tabular-nums text-white/80">128</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] text-white/35">Open</span>
                <span className="text-sm tabular-nums text-white/80">14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatVisual() {
  return (
    <div className="relative min-h-[280px] sm:min-h-[320px]">
      <div className="absolute left-0 top-6 w-[78%] rounded-[16px] border border-white/[0.10] bg-[#0B0B0B] p-5">
        <p className="text-[10px] uppercase tracking-[0.14em] text-white/30 mb-4">Visitor</p>
        <div className="space-y-3">
          <div className="max-w-[85%] rounded-[10px] border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13px] text-white/70">
            Do you take bookings for next Friday?
          </div>
          <div className="ml-auto max-w-[85%] rounded-[10px] border border-cyan-300/25 bg-cyan-300/[0.06] px-3.5 py-2.5 text-[13px] text-white/80">
            Yes. Two rooms are open. I can hold one while you decide.
          </div>
          <div className="max-w-[70%] rounded-[10px] border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13px] text-white/70">
            Please hold the garden room.
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[42%] rounded-[14px] border border-white/[0.10] bg-[#0c0c0c] px-4 py-4">
        <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">Passed to team</p>
        <p className="mt-2 text-sm text-white/75 tracking-tight">Garden room · Friday</p>
        <p className="mt-1 text-[12px] text-cyan-300/75">Ready to confirm</p>
      </div>
    </div>
  );
}

export function VoiceVisual() {
  const bars = [18, 28, 46, 34, 62, 40, 72, 50, 36, 54, 24, 42, 30, 20];
  return (
    <div className="overflow-hidden rounded-[20px] border border-white/[0.12] bg-[#0B0B0B] px-6 py-8 sm:px-8">
      <div className="flex items-center justify-between mb-8">
        <p className="text-[11px] tracking-[0.16em] uppercase text-white/35">Inbound</p>
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
      </div>
      <div className="flex items-end justify-center gap-1.5 h-24">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`w-2 rounded-[1px] ${i === 6 ? 'bg-cyan-300/75' : 'bg-white/18'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-8 flex items-baseline justify-between border-t border-white/[0.08] pt-4">
        <p className="text-[13px] text-white/55">New enquiry</p>
        <p className="text-[12px] tabular-nums text-white/35">00:18</p>
      </div>
    </div>
  );
}

export function ArchField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <svg viewBox="0 0 1440 640" className="absolute inset-0 h-full w-full opacity-40">
        <g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1">
          <rect x="180" y="80" width="1080" height="480" />
          <rect x="260" y="140" width="920" height="360" />
          <path d="M180 80h40M180 80v40M1260 80h-40M1260 80v40M180 560h40M180 560v-40M1260 560h-40M1260 560v-40" stroke="rgba(103,232,249,0.35)" />
        </g>
        <line x1="0" y1="320" x2="1440" y2="320" stroke="rgba(255,255,255,0.04)" />
        <line x1="720" y1="0" x2="720" y2="640" stroke="rgba(255,255,255,0.04)" />
      </svg>
    </div>
  );
}
