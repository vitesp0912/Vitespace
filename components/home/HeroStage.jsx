'use client';

const PLACEHOLDER = '/portfolio/placeholder-hero.svg';

function BrowserFrame({ url, src, alt, className = '' }) {
  return (
    <div className={`device-browser ${className}`}>
      <div className="flex items-center gap-2 h-8 sm:h-9 px-3 bg-white/[0.04] border-b border-white/[0.06]">
        <span className="flex gap-1.5">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
        </span>
        <div className="flex-1 mx-2">
          <div className="h-4 sm:h-5 max-w-[160px] mx-auto rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">
            <span className="text-[8px] sm:text-[9px] tracking-wide text-white/35 truncate px-2">
              {url}
            </span>
          </div>
        </div>
      </div>
      <div className="relative aspect-[16/10] bg-black overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = PLACEHOLDER;
          }}
        />
      </div>
    </div>
  );
}

function PhoneFrame({ src, alt, className = '' }) {
  return (
    <div className={`device-phone ${className}`}>
      <div className="relative rounded-[1.45rem] overflow-hidden bg-black aspect-[9/19]">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-white/15 z-10" />
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = PLACEHOLDER;
          }}
        />
      </div>
    </div>
  );
}

function DashboardCard({ className = '' }) {
  const bars = [42, 68, 54, 88, 61, 76, 94, 70];

  return (
    <div
      className={`rounded-2xl border border-white/12 bg-[#0b1016]/90 backdrop-blur-md p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-white/50">
          Operations
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-cyan-300/80">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Live
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { k: 'Leads', v: '128' },
          { k: 'Booked', v: '41' },
          { k: 'Close', v: '18%' },
        ].map((m) => (
          <div key={m.k} className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-2 py-1.5">
            <div className="text-[9px] text-white/40 uppercase tracking-wide">{m.k}</div>
            <div className="text-xs sm:text-sm font-semibold text-white tabular-nums">{m.v}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1 h-12 sm:h-14">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-cyan-700/70 to-cyan-300/90 bar-rise"
            style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroStage() {
  return (
    <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px] xl:h-[560px]">
      <div className="absolute inset-0 hero-glow pointer-events-none" aria-hidden />

      {/* Back website — desktop only, for depth */}
      <div className="hidden lg:block absolute top-[6%] right-[2%] w-[54%] z-10 float-d">
        <BrowserFrame
          url="theaamaltair.com"
          src="/portfolio/aamaltair.png"
          alt="Hospitality website by Vitespace"
          className="opacity-70"
        />
      </div>

      {/* Main website */}
      <div className="absolute top-[8%] sm:top-[14%] lg:top-[18%] left-[4%] sm:left-[2%] w-[86%] sm:w-[78%] lg:w-[68%] z-20 float-a">
        <BrowserFrame
          url="celesteabode.com"
          src="/portfolio/celeste.png"
          alt="Real estate website by Vitespace"
        />
      </div>

      {/* Phone */}
      <div className="absolute bottom-[2%] right-[4%] sm:right-[6%] w-[28%] sm:w-[24%] max-w-[150px] z-30 float-c">
        <PhoneFrame src="/portfolio/PETROFI.png" alt="Business software on mobile" />
      </div>

      {/* Dashboard overlay */}
      <div className="absolute bottom-[4%] left-[2%] sm:left-[4%] w-[56%] sm:w-[46%] lg:w-[42%] max-w-[240px] z-40 float-b">
        <DashboardCard />
      </div>
    </div>
  );
}
