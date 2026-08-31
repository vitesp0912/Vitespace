const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Icon({ children, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
      {children}
    </svg>
  );
}

export function IconWebsite({ className } = {}) {
  return (
    <Icon className={className}>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M3 8.5h18" />
      <circle cx="6.2" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8.4" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function IconWebApp({ className } = {}) {
  return (
    <Icon className={className}>
      <rect x="3" y="4" width="11" height="9" rx="1.2" />
      <rect x="10" y="11" width="11" height="9" rx="1.2" />
      <path d="M6 7h5M13 14h5" />
    </Icon>
  );
}

export function IconMobile({ className } = {}) {
  return (
    <Icon className={className}>
      <rect x="7.5" y="3" width="9" height="18" rx="1.8" />
      <path d="M10.5 5.2h3" />
      <circle cx="12" cy="18.6" r="0.55" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function IconSoftware({ className } = {}) {
  return (
    <Icon className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
    </Icon>
  );
}

export function IconSystem({ className } = {}) {
  return (
    <Icon className={className}>
      <rect x="3" y="4" width="18" height="16" rx="1.4" />
      <path d="M3 8.5h18M8.5 8.5v11.5" />
      <path d="M11.5 11.5h7M11.5 14.5h5M11.5 17.5h6" />
    </Icon>
  );
}

export function IconGrowth({ className } = {}) {
  return (
    <Icon className={className}>
      <path d="M4 17.5V14M8.5 17.5V10.5M13 17.5V8M17.5 17.5V5.5" />
      <path d="M3.5 19.5h17" />
    </Icon>
  );
}

export function IconAutomation({ className } = {}) {
  return (
    <Icon className={className}>
      <circle cx="6.5" cy="7" r="2.2" />
      <circle cx="17.5" cy="7" r="2.2" />
      <circle cx="12" cy="17" r="2.2" />
      <path d="M8.4 8.3l2.2 6.2M15.6 8.3l-2.2 6.2M8.7 7h6.6" />
    </Icon>
  );
}

export function IconSeo({ className } = {}) {
  return (
    <Icon className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16.2L20.5 20.5" />
      <path d="M8.2 11h5.6" />
    </Icon>
  );
}

export function IconAds({ className } = {}) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <path d="M12 4v2.2M12 17.8V20M4 12h2.2M17.8 12H20" />
    </Icon>
  );
}

export function IconPerformance({ className } = {}) {
  return (
    <Icon className={className}>
      <path d="M4 16.5l4.2-4.2 3.2 2.4 6.6-7.2" />
      <path d="M14.5 7.5h3.8v3.8" />
      <path d="M4 19.5h16" />
    </Icon>
  );
}

export function IconContent({ className } = {}) {
  return (
    <Icon className={className}>
      <rect x="5" y="4" width="12" height="15" rx="1.2" />
      <path d="M8 8.2h6M8 11.2h6M8 14.2h4" />
      <path d="M8 4V3.2a.8.8 0 0 1 .8-.8h6.4a.8.8 0 0 1 .8.8V4" />
    </Icon>
  );
}

export function IconBrand({ className } = {}) {
  return (
    <Icon className={className}>
      <path d="M12 3.5l7.5 4.2v8.6L12 20.5l-7.5-4.2V7.7z" />
      <path d="M12 8.2v8M8.6 10.2l6.8 3.6M15.4 10.2l-6.8 3.6" />
    </Icon>
  );
}

export function IconChat({ className } = {}) {
  return (
    <Icon className={className}>
      <path d="M5 15.5V6.8A1.8 1.8 0 0 1 6.8 5h8.4A1.8 1.8 0 0 1 17 6.8v5.4A1.8 1.8 0 0 1 15.2 14H9l-4 3.2z" />
      <path d="M17 9.2h.8A1.8 1.8 0 0 1 19.6 11v5.2L17 18.2" />
    </Icon>
  );
}

export function IconVoice({ className } = {}) {
  return (
    <Icon className={className}>
      <rect x="9.4" y="4.5" width="5.2" height="9.2" rx="2.6" />
      <path d="M6.4 11.2a5.6 5.6 0 0 0 11.2 0M12 16.8V19.5M9.2 19.5h5.6" />
    </Icon>
  );
}

export function IconApp({ className } = {}) {
  return (
    <Icon className={className}>
      <rect x="4" y="4" width="7" height="7" rx="1.4" />
      <rect x="13" y="4" width="7" height="7" rx="1.4" />
      <rect x="4" y="13" width="7" height="7" rx="1.4" />
      <rect x="13" y="13" width="7" height="7" rx="1.4" />
    </Icon>
  );
}
