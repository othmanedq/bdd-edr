/* ══════════════════════════════════════════════════════════
   SVG Icon Components — EdRAM Dashboard
   All icons are 24×24 viewBox, stroke-based (Heroicons style)
   Props are forwarded to the <svg> element (className, style, etc.)
   ══════════════════════════════════════════════════════════ */

export const MapIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);

export const ChartBarIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3"  y="12" width="4" height="9" rx="0.5" />
    <rect x="10" y="7"  width="4" height="14" rx="0.5" />
    <rect x="17" y="3"  width="4" height="18" rx="0.5" />
  </svg>
);

export const TargetIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const LightbulbIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5C18 10 19 8.5 19 7A7 7 0 1 0 5 7c0 1.5 1 3 2.5 4.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

export const ScaleIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 16h6" />
    <path d="M2 16h6" />
    <path d="M12 3v18" />
    <path d="M5 16 8 7" />
    <path d="M19 16 16 7" />
    <path d="M8 7h8" />
    <path d="M2 21h20" />
  </svg>
);

export const ArrowRightIcon = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const LightningIcon = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13 2 4.09 12.96A1 1 0 0 0 5 14.5h5.5l-1 7.5L19.91 11A1 1 0 0 0 19 9.5h-5.5L13 2z" />
  </svg>
);

export const CheckIcon = ({ className = 'w-3.5 h-3.5', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const DownloadIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
