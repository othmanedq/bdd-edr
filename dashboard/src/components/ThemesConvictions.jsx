/* ══════════════════════════════════════════════════════════
   Tab 4 — Themes & Convictions
   ══════════════════════════════════════════════════════════ */

import { EDRAM, COMPETITORS, STANCE_CLASSES } from '../data.js';
import { LightningIcon } from './icons.jsx';
import AMLogo from './AMLogo.jsx';

/* Stance badge */
function StanceBadge({ stance }) {
  const cls = STANCE_CLASSES[stance] || 'stance-balanced';
  return (
    <span className={`badge ${cls}`} style={{ fontSize: '11px' }}>
      {stance}
    </span>
  );
}

/* Theme bullet */
function ThemeBullet({ text, color = '#c9a84c' }) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className="shrink-0 rounded-full mt-1.5"
        style={{ width: 7, height: 7, background: color }}
      />
      <span style={{ fontSize: '13px', color: 'var(--ds-text)', lineHeight: 1.5 }}>
        {text}
      </span>
    </div>
  );
}

/* Contrarian call box */
function ContrarianBox({ text, small = false }) {
  return (
    <div
      className="rounded-lg flex items-start gap-2.5"
      style={{
        background: 'rgba(201,168,76,0.06)',
        border: '1px solid rgba(201,168,76,0.3)',
        padding: small ? '8px 12px' : '12px 16px',
      }}
    >
      <LightningIcon
        className="shrink-0 mt-0.5"
        style={{ width: small ? 13 : 15, height: small ? 13 : 15, color: '#c9a84c' }}
      />
      <span style={{ fontSize: small ? '12px' : '13px', color: '#d4b96e', lineHeight: 1.5 }}>
        {small && <strong style={{ color: '#c9a84c' }}>Contrarian: </strong>}
        {text}
      </span>
    </div>
  );
}

/* ── EdRAM full-width showcase card ─────────────────────────── */
function EdRAMThemeCard() {
  return (
    <div
      className="rounded-lg p-6"
      style={{
        background: 'linear-gradient(135deg, color-mix(in srgb, var(--ds-bg) 90%, #c9a84c 10%) 0%, var(--ds-surface) 100%)',
        border: '1px solid #c9a84c',
        borderLeft: '4px solid #c9a84c',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <AMLogo firm={EDRAM} size={48} fallbackClass="logo-gold" />
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span style={{ fontSize: '16px', fontWeight: 700, color: '#c9a84c' }}>
              EdRAM — Our View
            </span>
            <StanceBadge stance={EDRAM.stance} />
          </div>
          <p style={{ fontSize: '12px', color: 'var(--ds-muted)', marginTop: 3 }}>
            {EDRAM.fullName}
          </p>
        </div>
      </div>

      {/* Themes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-5">
        {EDRAM.themes.map((t, i) => (
          <ThemeBullet key={i} text={t} color="#c9a84c" />
        ))}
      </div>

      {/* Contrarian call */}
      <div
        className="rounded-lg p-4"
        style={{
          background: 'rgba(201,168,76,0.09)',
          border: '1px solid rgba(201,168,76,0.35)',
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <LightningIcon className="w-4 h-4 shrink-0" style={{ color: '#c9a84c' }} />
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#c9a84c' }}>
            Top Contrarian Call
          </span>
        </div>
        <p style={{ fontSize: '14px', color: '#d4b96e', lineHeight: 1.6, fontWeight: 500 }}>
          {EDRAM.contrarian}
        </p>
      </div>
    </div>
  );
}

/* ── Competitor theme card ───────────────────────────────────── */
function CompThemeCard({ firm }) {
  return (
    <div
      className="rounded-lg p-4 flex flex-col"
      style={{ background: 'var(--ds-surface)', border: '1px solid var(--ds-border)' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--ds-muted)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--ds-border)'}
    >
      {/* Card header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <AMLogo firm={firm} size={36} fallbackClass="logo-blue" />
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ds-text)' }}>{firm.name}</div>
            <div style={{ fontSize: '11px', color: 'var(--ds-muted)' }}>{firm.fullName}</div>
          </div>
        </div>
        <StanceBadge stance={firm.stance} />
      </div>

      {/* Themes */}
      <div className="flex flex-col gap-2 flex-1 mb-4">
        {firm.themes.map((t, i) => (
          <ThemeBullet key={i} text={t} color="#14b8a6" />
        ))}
      </div>

      {/* Contrarian */}
      {firm.contrarian && (
        <ContrarianBox text={firm.contrarian} small />
      )}
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export default function ThemesConvictions() {
  return (
    <div className="space-y-8">
      {/* EdRAM showcase */}
      <EdRAMThemeCard />

      {/* Section heading */}
      <div
        className="flex items-center gap-3"
        style={{ borderBottom: '1px solid var(--ds-border)', paddingBottom: 12 }}
      >
        <span
          className="uppercase tracking-widest"
          style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ds-muted)' }}
        >
          Competitor Views
        </span>
        <span
          className="rounded-full px-2 py-0.5"
          style={{ fontSize: '11px', background: 'var(--ds-elevated)', color: 'var(--ds-muted)', border: '1px solid var(--ds-border)' }}
        >
          {COMPETITORS.length}
        </span>
      </div>

      {/* Competitor 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {COMPETITORS.map((firm) => (
          <CompThemeCard key={firm.id} firm={firm} />
        ))}
      </div>
    </div>
  );
}
