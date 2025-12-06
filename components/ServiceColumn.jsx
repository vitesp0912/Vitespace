'use client';

import { GlobeIcon, SettingsIcon, ZapIcon } from '@/components/Icons';

const iconMap = {
  globe: GlobeIcon,
  settings: SettingsIcon,
  zap: ZapIcon,
};

export default function ServiceColumn({ icon, title, subtitle, description, items = [] }) {
  const IconComponent = iconMap[icon];
  
  return (
    <div className="flex flex-col items-start space-y-6 group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
      {/* Icon indicator */}
      <div className="flex items-center gap-4">
        <div className="text-white opacity-30 group-hover:opacity-50 transition-opacity duration-300">
          {IconComponent && <IconComponent className="w-16 h-16 md:w-20 md:h-20" />}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-white text-sm md:text-base font-medium uppercase tracking-wider opacity-80">
        {subtitle}
      </p>

      {/* Divider line */}
      <div className="w-12 h-[2px] bg-white opacity-30 group-hover:w-20 group-hover:opacity-60 transition-all duration-500"></div>

      {/* Description */}
      {description && (
        <p className="text-white text-sm md:text-base leading-relaxed opacity-80">
          {description}
        </p>
      )}

      {/* Items list */}
      <ul className="space-y-4 text-white w-full">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col gap-1 text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="font-semibold text-white">{item.label}:</span>
            <span className="text-white/70 text-sm">{item.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
