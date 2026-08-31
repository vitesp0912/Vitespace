'use client';

import { useReducedMotion } from 'framer-motion';

function Dots({ active = 2 }) {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i === active ? 'bg-cyan-300/70' : 'bg-white/20'}`}
        />
      ))}
    </div>
  );
}

function Chrome({ title, children, className = '' }) {
  return (
    <div className={`suite-surface overflow-hidden rounded-[16px] border border-white/[0.12] bg-[#0B0B0B] ${className}`}>
      <div className="flex items-center justify-between border-b border-white/[0.08] px-3 py-2.5">
        <Dots />
        <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">{title}</p>
        <span className="w-8" aria-hidden />
      </div>
      {children}
    </div>
  );
}

export function ProductHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
      <svg viewBox="0 0 420 520" className="absolute inset-0 h-full w-full opacity-50" aria-hidden>
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" fill="none">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h-${i}`} x1="40" y1={64 + i * 48} x2="380" y2={80 + i * 44} />
          ))}
        </g>
        <path
          d="M28 28h16M28 28v16M392 28h-16M392 28v16M28 492h16M28 492v-16M392 492h-16M392 492v-16"
          stroke="rgba(103,232,249,0.45)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      <Chrome title="Website" className="absolute left-0 top-[4%] w-[78%] rotate-[-1.5deg]">
        <div className="p-3.5 sm:p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-white/30 mb-3">
            <span>Field &amp; Co.</span>
            <span className="text-cyan-300/70">Work</span>
          </div>
          <div className="h-16 sm:h-20 rounded-[6px] border border-white/[0.08] bg-white/[0.03] mb-3" />
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1.5">
              <span className="block h-1.5 w-16 bg-white/20" />
              <span className="block h-1.5 w-12 bg-white/10" />
            </div>
            <div className="space-y-1.5">
              <span className="block h-1.5 w-14 bg-white/15" />
              <span className="block h-1.5 w-10 bg-white/10" />
            </div>
          </div>
        </div>
      </Chrome>

      <div className="device-phone suite-surface absolute right-0 top-[18%] w-[38%] rotate-[3deg]">
        <div className="overflow-hidden rounded-[1.4rem] bg-[#0B0B0B]">
          <div className="px-3 pt-3 pb-2">
            <span className="mx-auto mb-3 block h-1 w-8 rounded-full bg-white/15" />
            <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">App</p>
            <p className="mt-2 text-[12px] font-medium tracking-tight text-white/80">Today</p>
          </div>
          <div className="px-3 pb-3 space-y-2">
            {['Visit booked', 'Order 1842', 'New message'].map((row, i) => (
              <div
                key={row}
                className={`rounded-[8px] border px-2.5 py-2 text-[10px] ${
                  i === 0
                    ? 'border-cyan-300/30 bg-cyan-300/[0.06] text-white/80'
                    : 'border-white/[0.08] text-white/45'
                }`}
              >
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Chrome title="Software" className="absolute bottom-[2%] left-[6%] hidden w-[70%] sm:block rotate-[1deg]">
        <div className="grid grid-cols-[4.5rem_1fr]">
          <div className="border-r border-white/[0.08] px-2.5 py-3 space-y-2">
            {['Home', 'Orders', 'Team'].map((item, i) => (
              <p key={item} className={`text-[10px] ${i === 1 ? 'text-cyan-300/75' : 'text-white/30'}`}>
                {item}
              </p>
            ))}
          </div>
          <div className="p-3 space-y-2">
            {['1842  North studio', '1841  Harbour desk', '1840  Atelier west'].map((row, i) => (
              <div key={row} className="flex items-center justify-between text-[10px] text-white/45">
                <span>{row}</span>
                <span className={i === 0 ? 'text-cyan-300/70' : 'text-white/25'}>
                  {i === 0 ? 'Open' : 'Done'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Chrome>
    </div>
  );
}

export function ProductEcosystem() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
        aria-hidden
      >
        <line x1="32" y1="50" x2="46" y2="50" stroke="rgba(255,255,255,0.14)" strokeWidth="0.4" />
        <line x1="58" y1="50" x2="68" y2="50" stroke="rgba(255,255,255,0.14)" strokeWidth="0.4" />
        <circle cx="32" cy="50" r="0.7" fill="rgba(103,232,249,0.7)" />
        <circle cx="68" cy="50" r="0.7" fill="rgba(255,255,255,0.3)" />
      </svg>

      <div className="relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_0.55fr_1fr] lg:items-center lg:gap-8">
        <Chrome title="Desktop">
          <div className="p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between text-[11px] text-white/35">
              <span>fieldandco.site</span>
              <span className="text-cyan-300/70">Live</span>
            </div>
            <div className="h-24 rounded-[8px] border border-white/[0.08] bg-white/[0.03] sm:h-28" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <span className="h-8 rounded-[4px] border border-white/[0.08] bg-white/[0.03]" />
              <span className="h-8 rounded-[4px] border border-cyan-300/25 bg-cyan-300/[0.05]" />
              <span className="h-8 rounded-[4px] border border-white/[0.08] bg-white/[0.03]" />
            </div>
          </div>
        </Chrome>

        <div className="device-phone suite-surface mx-auto w-[180px] lg:w-auto">
          <div className="overflow-hidden rounded-[1.45rem] bg-[#0B0B0B] px-3 py-4">
            <span className="mx-auto mb-4 block h-1 w-8 rounded-full bg-white/15" />
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">Mobile</p>
            <p className="mt-2 text-[13px] font-medium tracking-tight text-white/80">Book a visit</p>
            <div className="mt-4 space-y-2">
              <span className="block h-8 rounded-[8px] border border-white/[0.08]" />
              <span className="block h-8 rounded-[8px] border border-cyan-300/30 bg-cyan-300/[0.06]" />
            </div>
          </div>
        </div>

        <Chrome title="System">
          <div className="p-4 sm:p-5">
            <div className="mb-3 grid grid-cols-[2.4rem_1fr_4rem] text-[10px] uppercase tracking-[0.12em] text-white/30">
              <span>No.</span>
              <span>Record</span>
              <span className="text-right">Status</span>
            </div>
            {[
              ['1842', 'North studio', 'Open'],
              ['1841', 'Harbour desk', 'Done'],
              ['1840', 'Atelier west', 'Review'],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-[2.4rem_1fr_4rem] border-t border-white/[0.06] py-2 text-[12px]"
              >
                <span className="tabular-nums text-white/35">{row[0]}</span>
                <span className="text-white/65">{row[1]}</span>
                <span className={`text-right ${row[2] === 'Open' ? 'text-cyan-300/75' : 'text-white/35'}`}>
                  {row[2]}
                </span>
              </div>
            ))}
          </div>
        </Chrome>
      </div>
    </div>
  );
}

export function OperationsInterface() {
  const rows = [
    ['1842', 'North studio', 'In progress'],
    ['1841', 'Harbour desk', 'Complete'],
    ['1840', 'Atelier west', 'Review'],
    ['1838', 'Field ops', 'In progress'],
    ['1836', 'Retail floor', 'Complete'],
  ];

  return (
    <Chrome title="Operations" className="shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5 text-[11px] text-white/30">
        <span>Orders</span>
        <span className="tabular-nums">Week 34</span>
      </div>
      <div className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr]">
        <div className="space-y-3 border-r border-white/[0.08] px-3 py-4 sm:px-4">
          {['Overview', 'Orders', 'People', 'Stock'].map((item, i) => (
            <p key={item} className={`text-[11px] ${i === 1 ? 'text-cyan-300/80' : 'text-white/35'}`}>
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
              <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-white/30">This week</p>
              <div className="flex h-14 items-end gap-1.5">
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
                <span className="text-[11px] text-white/35">People</span>
                <span className="text-sm tabular-nums text-white/80">28</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] text-white/35">Open</span>
                <span className="text-sm tabular-nums text-white/80">14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

export function GrowthWorkbench() {
  return (
    <div className="relative mx-auto min-h-[340px] w-full max-w-[460px] overflow-hidden lg:max-w-none lg:min-h-[400px] lg:overflow-visible">
      <Chrome title="Search" className="absolute left-0 top-0 w-[72%] rotate-[-2deg]">
        <div className="space-y-2.5 p-4">
          <div className="flex items-center gap-2 rounded-full border border-white/[0.10] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            <span className="text-[11px] text-white/45">workshop near me</span>
          </div>
          <div className="rounded-[8px] border border-cyan-300/25 bg-cyan-300/[0.05] px-3 py-2">
            <p className="text-[10px] text-cyan-300/70">1</p>
            <p className="text-[13px] text-white/85">Field &amp; Co. workshop</p>
            <p className="text-[11px] text-white/35">fieldandco.site</p>
          </div>
          <div className="px-3">
            <p className="text-[12px] text-white/40">Harbour desk</p>
            <p className="text-[10px] text-white/25">harbourdesk.com</p>
          </div>
        </div>
      </Chrome>

      <div className="suite-surface absolute right-0 top-[18%] w-[46%] rotate-[3deg] overflow-hidden rounded-[14px] border border-white/[0.12] bg-[#0B0B0B]">
        <div className="h-16 border-b border-white/[0.08] bg-white/[0.04]" />
        <div className="p-3">
          <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">Ad</p>
          <p className="mt-1 text-[12px] text-white/75">Open this Saturday</p>
        </div>
      </div>

      <div className="suite-surface absolute bottom-[6%] left-[8%] w-[36%] -rotate-2 rounded-[10px] border border-white/[0.12] bg-[#111] px-4 py-4">
        <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">Print</p>
        <p className="mt-3 text-[15px] font-semibold leading-tight tracking-tight text-white">
          Field
          <br />
          &amp; Co.
        </p>
        <span className="mt-3 block h-px w-8 bg-cyan-300/50" />
      </div>

      <div className="suite-surface absolute bottom-0 right-[10%] w-[40%] rotate-[1deg] rounded-[12px] border border-white/[0.12] bg-[#0B0B0B] px-3 py-3">
        <p className="mb-2 text-[10px] uppercase tracking-[0.14em] text-white/30">This week</p>
        <div className="flex h-10 items-end gap-1">
          {[30, 48, 40, 72, 58, 86, 64].map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-[1px] ${i === 5 ? 'bg-cyan-300/70' : 'bg-white/15'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SearchEngineVisual() {
  const results = [
    { rank: '01', title: 'Field & Co. workshop', url: 'fieldandco.site', lead: true },
    { rank: '02', title: 'Harbour desk', url: 'harbourdesk.com' },
    { rank: '03', title: 'Atelier west', url: 'atelierwest.co' },
    { rank: '04', title: 'North studio hours', url: 'northstudio.work' },
  ];

  return (
    <Chrome title="Search">
      <div className="p-5 sm:p-6">
        <div className="mb-6 flex items-center gap-3 rounded-full border border-white/[0.10] px-4 py-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <span className="text-[13px] text-white/55">workshop near me</span>
        </div>
        <div className="space-y-1">
          {results.map((item) => (
            <div
              key={item.rank}
              className={`grid grid-cols-[2rem_1fr] gap-3 rounded-[10px] px-3 py-3 ${
                item.lead ? 'border border-cyan-300/25 bg-cyan-300/[0.05]' : ''
              }`}
            >
              <span className={`text-[11px] tabular-nums ${item.lead ? 'text-cyan-300/80' : 'text-white/25'}`}>
                {item.rank}
              </span>
              <div>
                <p className={`text-[15px] tracking-tight ${item.lead ? 'text-white' : 'text-white/70'}`}>
                  {item.title}
                </p>
                <p className="mt-0.5 text-[12px] text-white/30">{item.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

export function AdsPresentation() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
      <Chrome title="Search ad" className="md:col-span-1">
        <div className="p-4 sm:p-5">
          <p className="text-[10px] uppercase tracking-[0.14em] text-cyan-300/70">Sponsored</p>
          <p className="mt-3 text-[16px] font-medium tracking-tight text-white">Field &amp; Co.</p>
          <p className="mt-1 text-[13px] text-white/40">Book a Saturday visit. Same-week slots.</p>
          <p className="mt-4 text-[12px] text-white/30">fieldandco.site</p>
        </div>
      </Chrome>

      <div className="suite-surface overflow-hidden rounded-[16px] border border-white/[0.12] bg-[#0B0B0B]">
        <div className="h-28 border-b border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent" />
        <div className="p-4">
          <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">Social</p>
          <p className="mt-2 text-[14px] text-white/80">Open this Saturday</p>
          <p className="mt-1 text-[12px] text-white/35">A quiet room. A clear next step.</p>
        </div>
      </div>

      <Chrome title="Results">
        <div className="p-4 sm:p-5">
          <p className="mb-4 text-[11px] text-white/35">Enquiries this month</p>
          <div className="flex h-20 items-end gap-1.5">
            {[36, 44, 40, 58, 52, 70, 64, 88, 76, 92].map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-[1px] ${i === 9 ? 'bg-cyan-300/70' : 'bg-white/15'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-[11px] text-white/35">This week</span>
            <span className="text-sm tabular-nums text-white/80">24</span>
          </div>
        </div>
      </Chrome>
    </div>
  );
}

export function OfflineStudio() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div className="suite-surface col-span-2 flex aspect-[1.7/1] flex-col justify-between rounded-[14px] border border-white/[0.12] bg-[#111] p-5 sm:p-6">
        <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">Card</p>
        <div>
          <p className="text-[1.35rem] font-semibold tracking-tight text-white">Field &amp; Co.</p>
          <p className="mt-1 text-[12px] text-white/40">Workshop · Appointments</p>
        </div>
        <span className="h-px w-10 bg-cyan-300/50" />
      </div>

      <div className="suite-surface flex aspect-[3/4] flex-col justify-between rounded-[14px] border border-white/[0.12] bg-[#0B0B0B] p-5">
        <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">Poster</p>
        <p className="text-[1.5rem] font-semibold leading-[0.95] tracking-tight text-white">
          Open
          <br />
          Saturday
        </p>
        <p className="text-[11px] text-white/35">North studio</p>
      </div>

      <div className="suite-surface flex aspect-[3/4] flex-col justify-end rounded-[14px] border border-white/[0.12] bg-[#0E0E0E] p-5">
        <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">Sign</p>
        <p className="mt-auto text-[1.15rem] font-medium tracking-tight text-white">Field &amp; Co.</p>
        <p className="mt-2 text-[11px] text-cyan-300/70">Open</p>
      </div>
    </div>
  );
}

export function GrowthPreview({ kind }) {
  if (kind === 'seo') {
    return (
      <div className="rounded-[10px] border border-white/[0.10] bg-black/40 px-3 py-2.5">
        <p className="text-[10px] text-cyan-300/70">01</p>
        <p className="text-[12px] text-white/75">Field &amp; Co. workshop</p>
      </div>
    );
  }
  if (kind === 'ads') {
    return (
      <div className="rounded-[10px] border border-white/[0.10] bg-black/40 px-3 py-2.5">
        <p className="text-[10px] uppercase tracking-[0.12em] text-white/30">Sponsored</p>
        <p className="text-[12px] text-white/75">Book a Saturday visit</p>
      </div>
    );
  }
  if (kind === 'meta') {
    return (
      <div className="overflow-hidden rounded-[10px] border border-white/[0.10] bg-black/40">
        <div className="h-8 bg-white/[0.05]" />
        <p className="px-3 py-2 text-[12px] text-white/70">Open this Saturday</p>
      </div>
    );
  }
  if (kind === 'brand') {
    return (
      <div className="rounded-[10px] border border-white/[0.10] bg-black/40 px-3 py-2.5">
        <p className="text-[14px] font-semibold tracking-tight text-white">Field &amp; Co.</p>
        <span className="mt-2 block h-px w-8 bg-cyan-300/50" />
      </div>
    );
  }
  return (
    <div className="rounded-[10px] border border-white/[0.10] bg-black/40 px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-[0.12em] text-white/30">Print</p>
      <p className="text-[12px] text-white/75">North studio · Saturday</p>
    </div>
  );
}

const flowSteps = [
  'New enquiry',
  'Information captured',
  'CRM updated',
  'Team notified',
  'Customer receives response',
];

export function AutomationFlow() {
  return (
    <div className="suite-surface rounded-[16px] border border-white/[0.12] bg-[#0B0B0B] px-5 py-6 sm:px-7 sm:py-8">
      <p className="mb-6 text-[10px] uppercase tracking-[0.16em] text-white/30">When someone writes in</p>
      <div className="flex flex-col gap-0 lg:flex-row lg:items-start">
        {flowSteps.map((step, i) => (
          <div key={step} className="flex flex-1 lg:flex-col">
            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:w-full">
              <span
                className={`relative z-10 h-2.5 w-2.5 shrink-0 rounded-full border ${
                  i === 2 ? 'border-cyan-300/80 bg-cyan-300/80' : 'border-white/30 bg-black'
                }`}
              />
              {i < flowSteps.length - 1 && (
                <span className="h-8 w-px bg-white/[0.12] lg:h-px lg:w-full lg:flex-1" />
              )}
            </div>
            <p
              className={`pb-6 pl-4 text-[13px] leading-snug lg:pl-0 lg:pt-4 lg:pr-4 lg:pb-0 ${
                i === 2 ? 'text-white' : 'text-white/50'
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniFlow({ steps, active = 1 }) {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <div key={step} className="flex">
          <div className="flex w-5 flex-col items-center">
            <span
              className={`h-2 w-2 rounded-full ${i === active ? 'bg-cyan-300/80' : 'bg-white/25'}`}
            />
            {i < steps.length - 1 && <span className="h-6 w-px bg-white/[0.12]" />}
          </div>
          <p className={`-mt-1 pl-3 text-[13px] ${i === active ? 'text-white/85' : 'text-white/40'}`}>
            {step}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ChatHeroVisual() {
  return (
    <Chrome title="Website chat" className="max-w-md lg:max-w-none">
      <div className="space-y-4 p-5 sm:p-6">
        <div>
          <p className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-white/30">Visitor</p>
          <p className="max-w-[92%] rounded-[10px] border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13px] text-white/70">
            I want to know more about your service.
          </p>
        </div>
        <div className="text-right">
          <p className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-white/30">Assistant</p>
          <p className="ml-auto max-w-[92%] rounded-[10px] border border-cyan-300/25 bg-cyan-300/[0.06] px-3.5 py-2.5 text-left text-[13px] text-white/80">
            We build websites, apps and software for businesses.
          </p>
        </div>
        <div>
          <p className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-white/30">Visitor</p>
          <p className="max-w-[80%] rounded-[10px] border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13px] text-white/70">
            How do I get started?
          </p>
        </div>
        <div className="text-right">
          <p className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-white/30">Assistant</p>
          <p className="ml-auto max-w-[92%] rounded-[10px] border border-cyan-300/25 bg-cyan-300/[0.06] px-3.5 py-2.5 text-left text-[13px] text-white/80">
            Tell us what you need. We&apos;ll reply with a clear next step.
          </p>
        </div>
      </div>
    </Chrome>
  );
}

export function ChatInSite() {
  return (
    <Chrome title="fieldandco.site">
      <div className="relative min-h-[280px] sm:min-h-[340px]">
        <div className="border-b border-white/[0.08] px-5 py-3 text-[11px] text-white/35">
          <span className="mr-5 text-white/70">Field &amp; Co.</span>
          Work
          <span className="mx-3 text-white/15">/</span>
          Visit
        </div>
        <div className="max-w-sm px-5 py-8 sm:px-8">
          <p className="text-[1.35rem] font-semibold leading-tight tracking-tight text-white">
            A workshop
            <br />
            you can book.
          </p>
          <p className="mt-3 text-[13px] text-white/40">Saturday visits. Same-week slots.</p>
        </div>

        <div className="absolute bottom-4 right-4 w-[min(100%-2rem,17rem)] rounded-[14px] border border-white/[0.14] bg-[#0c0c0c] p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
          <p className="mb-3 text-[10px] uppercase tracking-[0.14em] text-white/30">Assistant</p>
          <p className="rounded-[8px] border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[12px] text-white/60">
            I want to book a visit.
          </p>
          <p className="mt-2 rounded-[8px] border border-cyan-300/25 bg-cyan-300/[0.06] px-3 py-2 text-[12px] text-white/80">
            Two rooms are open on Saturday. I can hold one.
          </p>
        </div>
      </div>
    </Chrome>
  );
}

export function VoiceFlow() {
  const steps = ['Incoming call', 'Answered', 'Conversation', 'Qualified', 'Team handoff'];
  return (
    <div className="suite-surface max-w-md rounded-[16px] border border-white/[0.12] bg-[#0B0B0B] px-5 py-6">
      <p className="mb-5 text-[10px] uppercase tracking-[0.16em] text-white/30">Call path</p>
      {steps.map((step, i) => (
        <div key={step} className="flex">
          <div className="flex w-5 flex-col items-center">
            <span className={`h-2 w-2 rounded-full ${i === 2 ? 'bg-cyan-300/80' : 'bg-white/25'}`} />
            {i < steps.length - 1 && <span className="h-7 w-px bg-white/[0.12]" />}
          </div>
          <p className={`-mt-1 pl-3 text-[13px] ${i === 2 ? 'text-white' : 'text-white/45'}`}>{step}</p>
        </div>
      ))}
    </div>
  );
}

export function VoiceCallUI() {
  const reduce = useReducedMotion();
  const bars = [18, 28, 46, 34, 62, 40, 72, 50, 36, 54, 24, 42, 30, 22, 48, 38];

  return (
    <Chrome title="Inbound" className="max-w-md">
      <div className="px-5 py-6 sm:px-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/30">Caller</p>
            <p className="mt-1 text-[16px] font-medium tracking-tight text-white">New enquiry</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-white/30">Duration</p>
            <p className="mt-1 text-[16px] tabular-nums text-white/80">00:42</p>
          </div>
        </div>

        <div className="flex h-16 items-end justify-center gap-1">
          {bars.map((h, i) => (
            <span
              key={i}
              className={`w-1.5 rounded-[1px] ${i === 6 ? 'bg-cyan-300/80' : 'bg-white/18'} ${
                reduce ? '' : 'suite-wave'
              }`}
              style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
          <p className="text-[13px] text-white/50">Qualified</p>
          <p className="text-[12px] text-cyan-300/75">Ready for handoff</p>
        </div>
      </div>
    </Chrome>
  );
}

export function MiniWave() {
  const bars = [20, 36, 24, 52, 40, 68, 44, 30];
  return (
    <div className="flex h-12 items-end gap-1">
      {bars.map((h, i) => (
        <span
          key={i}
          className={`w-1.5 rounded-[1px] ${i === 5 ? 'bg-cyan-300/75' : 'bg-white/18'}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}
