/* ══════════════════════════════════════════════════════════
   Tab 1 — Competitor Map (rebuilt)
   ══════════════════════════════════════════════════════════ */

import { useMemo, useState } from 'react';
import {
  EDRAM,
  STANCE_CLASSES,
  TIER1_FIRMS,
  TIER2_FIRMS,
  TIER3_FIRMS,
} from '../data.js';
import { ArrowRightIcon } from './icons.jsx';
import AMLogo from './AMLogo.jsx';

/* ── Peer groups ──────────────────────────────────────────── */
const PEER_GROUPS = [
  { tier: 1, title: 'Tier 1 — Macro Reference', badge: 'badge-tier1', firms: TIER1_FIRMS },
  { tier: 2, title: 'Tier 2 — Direct Competitors', badge: 'badge-tier2', firms: TIER2_FIRMS },
  { tier: 3, title: 'Tier 3 — True Peers', badge: 'badge-tier3', firms: TIER3_FIRMS },
];

/* ── Logo color rotation ──────────────────────────────────── */
const LOGO_CLASSES = ['logo-blue', 'logo-emerald', 'logo-purple', 'logo-red', 'logo-orange', 'logo-cyan'];

/* ── Country Badge ────────────────────────────────────────── */
function CountryBadge({ code }) {
  return <span className={`country-badge country-${code}`}>{code}</span>;
}

/* ── Stance Badge ─────────────────────────────────────────── */
function StanceBadge({ stance }) {
  const cls = STANCE_CLASSES[stance] || 'stance-balanced';
  return <span className={`badge ${cls}`}>{stance}</span>;
}

/* ── EdRAM Benchmark Card ─────────────────────────────────── */
function EdRAMCard() {
  return (
    <div className="card-gold">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <AMLogo firm={EDRAM} size={42} fallbackClass="logo-gold" />
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-gold font-bold text-lg">EdRAM</span>
              <span className="badge" style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c', borderColor: 'rgba(201,168,76,0.3)' }}>
                BENCHMARK
              </span>
              <StanceBadge stance={EDRAM.stance} />
            </div>
            <p className="text-muted text-sm mt-1">{EDRAM.fullName}</p>
          </div>
        </div>

        {/* Right side */}
        <div className="text-right">
          <div className="text-gold font-bold text-lg tabular-nums">{EDRAM.aum}</div>
          <div className="flex gap-1.5 mt-2 justify-end">
            {EDRAM.markets.map(m => <CountryBadge key={m} code={m} />)}
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t flex items-center gap-2" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
        <ArrowRightIcon className="w-4 h-4 text-gold" />
        {EDRAM.outlookUrl ? (
          <a
            href={EDRAM.outlookUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gold text-sm font-semibold italic underline-offset-2 hover:underline"
          >
            {EDRAM.outlookTitle}
          </a>
        ) : (
          <span className="text-gold text-sm font-semibold italic">{EDRAM.outlookTitle}</span>
        )}
      </div>
    </div>
  );
}

/* ── Competitor Card ──────────────────────────────────────── */
function CompCard({ firm, index, tier, onClick }) {
  const logoClass = tier === 3 ? 'logo-gold' : LOGO_CLASSES[index % LOGO_CLASSES.length];

  return (
    <div className="card cursor-pointer transition-all duration-200 hover:-translate-y-0.5" onClick={onClick}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <AMLogo firm={firm} size={40} fallbackClass={logoClass} />
          <div className="min-w-0">
            <div className="font-semibold text-sm truncate">{firm.name}</div>
            <div className="text-muted text-xs truncate mt-0.5">{firm.fullName}</div>
          </div>
        </div>
        <div className="text-muted text-xs tabular-nums bg-elevated px-2 py-1 rounded-md">
          {firm.aum}
        </div>
      </div>

      {/* Stance + Markets */}
      <div className="flex items-center justify-between gap-2 mt-4">
        <StanceBadge stance={firm.stance} />
        <div className="flex gap-1 flex-wrap justify-end">
          {firm.markets.map(m => <CountryBadge key={m} code={m} />)}
        </div>
      </div>

      {/* Outlook */}
      <div className="mt-4 pt-3 border-t border-subtle flex items-center gap-2">
        <ArrowRightIcon className="w-3.5 h-3.5 text-muted" />
        {firm.outlookUrl ? (
          <a
            href={firm.outlookUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted text-xs font-medium italic truncate underline-offset-2 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {firm.outlookTitle}
          </a>
        ) : (
          <span className="text-muted text-xs font-medium italic truncate">{firm.outlookTitle}</span>
        )}
      </div>
    </div>
  );
}

/* ── Modal (simplified) ───────────────────────────────────── */
function CompetitorModal({ firmMeta, onClose }) {
  const m = firmMeta.modal;
  const sourceList = (m?.sources && m.sources.length > 0)
    ? m.sources
    : (m?.source ? [m.source] : []);

  const sentimentClass = (sentiment) => {
    if (sentiment === 'bullish') return 'badge badge-bullish';
    if (sentiment === 'bearish') return 'badge badge-bearish';
    return 'badge badge-neutral';
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.7)' }}
      onClick={onClose}
    >
      <div 
        className="bg-surface rounded-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
        style={{ borderTop: '4px solid #c9a84c' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-subtle">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AMLogo firm={firmMeta} size={40} fallbackClass="logo-gold" />
              <div>
                <div className="font-bold text-lg">{firmMeta.name}</div>
                <div className="text-muted text-sm">{firmMeta.fullName}</div>
                {firmMeta.stanceDetail && (
                  <div className="text-xs text-muted mt-1 italic">{firmMeta.stanceDetail}</div>
                )}
                {firmMeta.tagline && (
                  <div className="text-xs mt-1" style={{ color: '#d4b96e' }}>{firmMeta.tagline}</div>
                )}
                <div className="mt-1 flex items-center gap-2 flex-wrap">
                  <StanceBadge stance={firmMeta.stance} />
                  <span className="text-xs text-muted bg-elevated px-2 py-1 rounded-md">{firmMeta.aum}</span>
                  {m?.isEstimated && (
                    <span className="badge" style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b', borderColor: 'rgba(245,158,11,0.4)' }}>
                      ESTIMATED
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button onClick={onClose} className="text-muted hover:text-white text-2xl leading-none">&times;</button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <section className="space-y-2">
            <div className="text-xs uppercase tracking-wider text-muted font-semibold">Source</div>
            {sourceList.length > 0 ? (
              <div className="space-y-2">
                {sourceList.map((src, idx) => (
                  <div key={`${src.label || 'source'}-${idx}`} className="text-sm text-muted">
                    {src?.url ? (
                      <a href={src.url} target="_blank" rel="noreferrer" className="text-gold hover:underline underline-offset-2">
                        {src.label || firmMeta.outlookTitle}
                      </a>
                    ) : (
                      <span>{src?.label || firmMeta.outlookTitle}</span>
                    )}
                    {src?.asOf && <span className="ml-2 text-xs">({src.asOf})</span>}
                    {src?.localFile && (
                      <div className="text-xs text-muted mt-1">
                        Fichier local: <span className="text-gold">{src.localFile}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-muted">{firmMeta.outlookTitle}</div>
            )}
          </section>

          <section className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-muted font-semibold">Macro Highlights</div>
            <div className="space-y-2">
              {(m?.macroOutlook || []).map((row) => (
                <div key={row.indicator} className="flex items-center justify-between gap-3 bg-elevated rounded-md px-3 py-2 border border-subtle">
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-white">{row.indicator}</div>
                    <div className="text-xs text-muted truncate">{row.view}</div>
                  </div>
                  <span className={sentimentClass(row.sentiment)}>{row.sentiment || 'neutral'}</span>
                </div>
              ))}
            </div>
          </section>

          {firmMeta.note && (
            <section className="rounded-lg p-3" style={{ background: 'rgba(148,163,184,0.08)', border: '1px solid rgba(148,163,184,0.2)' }}>
              <div className="text-xs uppercase tracking-wider text-muted font-semibold mb-1">Note</div>
              <p className="text-sm text-muted">{firmMeta.note}</p>
            </section>
          )}

          <section className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-muted font-semibold">Key Themes</div>
            <ul className="space-y-1.5">
              {(firmMeta.themes || []).map((theme) => (
                <li key={theme} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>{theme}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg p-4" style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.25)' }}>
            <div className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">Contrarian Call</div>
            <p className="text-sm" style={{ color: '#d4b96e' }}>{firmMeta.contrarian}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────────── */
export default function CompetitorMap() {
  const [activeMarket, setActiveMarket] = useState(null);
  const [selectedFirm, setSelectedFirm] = useState(null);
  const markets = ['FR', 'DE', 'CH', 'IT', 'ES'];

  const grouped = useMemo(() => {
    return PEER_GROUPS.map(group => ({
      ...group,
      firms: activeMarket
        ? group.firms.filter(f => f.markets.includes(activeMarket))
        : group.firms,
    }));
  }, [activeMarket]);

  const totalCount = grouped.reduce((acc, g) => acc + g.firms.length, 0);

  return (
    <div className="space-y-8">
      {/* Market Filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-muted text-xs font-semibold uppercase tracking-wider mr-2">Market</span>
        
        {[{ label: 'ALL', val: null }, ...markets.map(m => ({ label: m, val: m }))].map(({ label, val }) => {
          const active = activeMarket === val;
          return (
            <button
              key={label}
              onClick={() => setActiveMarket(val)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                active 
                  ? 'font-bold' 
                  : 'bg-elevated text-muted hover:text-white'
              }`}
              style={active ? { background: '#c9a84c', color: '#0a0e1a' } : { border: '1px solid #374151' }}
            >
              {label}
            </button>
          );
        })}
        
        <span className="ml-auto text-muted text-xs">{totalCount} competitors</span>
      </div>

      {/* EdRAM Benchmark */}
      <EdRAMCard />

      {/* Competitor Groups */}
      <div className="space-y-8">
        {grouped.map(group => {
          if (!group.firms.length) return null;
          return (
            <section key={group.tier} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-muted text-xs font-semibold uppercase tracking-wider">{group.title}</span>
                  <span className={`badge ${group.badge}`}>{group.firms.length} firms</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {group.firms.map((firm, idx) => (
                  <CompCard
                    key={firm.id}
                    firm={firm}
                    index={idx}
                    tier={group.tier}
                    onClick={() => setSelectedFirm(firm)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Modal */}
      {selectedFirm && (
        <CompetitorModal firmMeta={selectedFirm} onClose={() => setSelectedFirm(null)} />
      )}
    </div>
  );
}
