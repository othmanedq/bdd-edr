import { useState } from 'react';
import { AM_LOGOS } from '../data.js';

export default function AMLogo({ firm, size = 40, fallbackClass = 'logo-blue' }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const domain = AM_LOGOS[firm.id];

  const logoCandidates = domain ? [
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`,
    `https://${domain}/favicon.ico`,
  ] : [];

  const hasError = sourceIndex >= logoCandidates.length;
  const logoUrl = !hasError ? logoCandidates[sourceIndex] : null;

  if (!logoUrl || hasError) {
    return (
      <div
        className={`logo-circle ${fallbackClass}`}
        style={{ width: size, height: size, fontSize: Math.max(11, Math.round(size * 0.35)) }}
      >
        {firm.name[0]}
      </div>
    );
  }

  return (
    <div
      className="logo-circle"
      style={{
        width: size,
        height: size,
        background: 'var(--ds-surface)',
        border: '1px solid var(--ds-border)',
        overflow: 'hidden',
        padding: 2,
      }}
    >
      <img
        src={logoUrl}
        alt={`${firm.name} logo`}
        loading="lazy"
        className="h-full w-full object-cover"
        onError={() => setSourceIndex((prev) => prev + 1)}
      />
    </div>
  );
}
