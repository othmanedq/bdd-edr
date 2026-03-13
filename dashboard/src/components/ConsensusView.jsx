/* ══════════════════════════════════════════════════════════
   Tab 5 — Consensus vs EdRAM
   ══════════════════════════════════════════════════════════ */

import { CONSENSUS_ASSET, CONSENSUS_MACRO } from '../data.js';
import { LightningIcon, CheckIcon } from './icons.jsx';

/* Position badge (inline) */
function PosBadge({ value, gold = false }) {
  const cls =
    value === 'OW' ? 'badge-ow' :
    value === 'UW' ? 'badge-uw' : 'badge-n';
  return (
    <span
      className={`badge ${cls}`}
      style={{
        minWidth: 36,
        justifyContent: 'center',
        fontSize: '12px',
        outline: gold ? '2px solid rgba(201,168,76,0.5)' : 'none',
        outlineOffset: '1px',
      }}
    >
      {value}
    </span>
  );
}

/* Macro sentiment badge */
function MacroBadge({ label, gold = false }) {
  const lc = label.toLowerCase();
  const cls =
    lc === 'bullish' ? 'badge-bullish' :
    lc === 'bearish' ? 'badge-bearish' : 'badge-neutral';
  return (
    <span
      className={`badge ${cls}`}
      style={{
        fontSize: '11px',
        outline: gold ? '2px solid rgba(201,168,76,0.5)' : 'none',
        outlineOffset: '1px',
      }}
    >
      {label}
    </span>
  );
}

/* Status cell */
function StatusCell({ aligned }) {
  return aligned ? (
    <span className="flex items-center justify-center gap-1.5 status-aligned">
      <CheckIcon className="w-3.5 h-3.5" />
      Aligned
    </span>
  ) : (
    <span className="flex items-center justify-center gap-1.5 status-diverge">
      <LightningIcon className="w-3.5 h-3.5" />
      Diverging
    </span>
  );
}

/* Stat card */
function StatCard({ value, label, positive }) {
  return (
    <div
      className="rounded-lg p-4 text-center"
      style={{
        background: positive ? 'rgba(16,185,129,0.07)' : 'rgba(239,68,68,0.07)',
        border: `1px solid ${positive ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)'}`,
      }}
    >
      <div
        className="num"
        style={{ fontSize: '32px', fontWeight: 800, color: positive ? '#10b981' : '#ef4444' }}
      >
        {value}
      </div>
      <div style={{ fontSize: '12px', fontWeight: 500, color: positive ? '#6ee7b7' : '#fca5a5', marginTop: 4 }}>
        {label}
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export default function ConsensusView() {
  const assetAligned  = CONSENSUS_ASSET.filter(r => r.aligned).length;
  const assetDiverge  = CONSENSUS_ASSET.filter(r => !r.aligned).length;
  const macroAligned  = CONSENSUS_MACRO.filter(r => r.aligned).length;
  const macroDiverge  = CONSENSUS_MACRO.filter(r => !r.aligned).length;

  return (
    <div className="space-y-7">

      {/* Top contrarian callout */}
      <div
        className="rounded-lg p-5"
        style={{
          background: 'rgba(201,168,76,0.07)',
          border: '1px solid rgba(201,168,76,0.35)',
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <LightningIcon className="w-4 h-4 shrink-0" style={{ color: '#c9a84c' }} />
          <span
            className="uppercase tracking-widest"
            style={{ fontSize: '11px', fontWeight: 700, color: '#c9a84c' }}
          >
            EdRAM Top Contrarian Call
          </span>
        </div>
        <p style={{ fontSize: '15px', fontWeight: 600, color: '#d4b96e', lineHeight: 1.6 }}>
          Explicit AI bubble warning (dot-com parallels); rejects US Big Tech consensus
        </p>
      </div>

      {/* Summary stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value={assetAligned} label="Asset Positions Aligned"   positive={true}  />
        <StatCard value={assetDiverge} label="Asset Positions Diverging"  positive={false} />
        <StatCard value={macroAligned} label="Macro Views Aligned"        positive={true}  />
        <StatCard value={macroDiverge} label="Macro Views Diverging"      positive={false} />
      </div>

      {/* Two tables side by side */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Asset Positioning table */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: '1px solid var(--ds-border)', background: 'var(--ds-surface)' }}
        >
          <div
            className="px-4 py-3"
            style={{ borderBottom: '1px solid var(--ds-border)', background: 'var(--ds-elevated)' }}
          >
            <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ds-text)' }}>
              Asset Positioning: EdRAM vs Street Consensus
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-left" style={{ padding: '10px 16px', width: '45%' }}>Asset Class</th>
                <th className="text-center" style={{ color: '#c9a84c' }}>EdRAM</th>
                <th className="text-center">Street</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {CONSENSUS_ASSET.map((row, i) => (
                <tr
                  key={row.label}
                  style={{ background: i % 2 === 0 ? 'transparent' : 'var(--ds-elevated)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--ds-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'transparent' : 'var(--ds-elevated)'}
                >
                  <td style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 500, color: 'var(--ds-text)' }}>
                    {row.label}
                  </td>
                  <td className="text-center" style={{ padding: '7px 8px' }}>
                    <PosBadge value={row.edram} gold />
                  </td>
                  <td className="text-center" style={{ padding: '7px 8px' }}>
                    <PosBadge value={row.street} />
                  </td>
                  <td className="text-center" style={{ padding: '7px 8px', fontSize: '12px' }}>
                    <StatusCell aligned={row.aligned} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Macro Sentiment table */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: '1px solid var(--ds-border)', background: 'var(--ds-surface)' }}
        >
          <div
            className="px-4 py-3"
            style={{ borderBottom: '1px solid var(--ds-border)', background: 'var(--ds-elevated)' }}
          >
            <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ds-text)' }}>
              Macro Sentiment: EdRAM vs Street Consensus
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-left" style={{ padding: '10px 16px', width: '42%' }}>Indicator</th>
                <th className="text-center" style={{ color: '#c9a84c' }}>EdRAM</th>
                <th className="text-center">Street</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {CONSENSUS_MACRO.map((row, i) => (
                <tr
                  key={row.label}
                  style={{ background: i % 2 === 0 ? 'transparent' : 'var(--ds-elevated)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--ds-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'transparent' : 'var(--ds-elevated)'}
                >
                  <td style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 500, color: 'var(--ds-text)' }}>
                    {row.label}
                  </td>
                  <td className="text-center" style={{ padding: '7px 8px' }}>
                    <MacroBadge label={row.edram} gold />
                  </td>
                  <td className="text-center" style={{ padding: '7px 8px' }}>
                    <MacroBadge label={row.street} />
                  </td>
                  <td className="text-center" style={{ padding: '7px 8px', fontSize: '12px' }}>
                    <StatusCell aligned={row.aligned} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Risk perception comparison */}
      <div className="space-y-3">
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 600,
            color: 'var(--ds-text)',
          }}
        >
          Risk Perception Comparison
        </h3>
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: '1px solid var(--ds-border)', background: 'var(--ds-surface)' }}
        >
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-left" style={{ padding: '10px 16px', width: '46%' }}>
                  Risk Category
                </th>
                <th className="text-center" style={{ color: '#c9a84c' }}>EdRAM</th>
                <th className="text-center">Consensus</th>
                <th className="text-center">Divergence</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: 'AI Bubble / Valuation Risk',
                  edram: 'High',
                  street: 'Low-Medium',
                  aligned: false,
                },
                {
                  label: 'Geopolitical Risk',
                  edram: 'Medium',
                  street: 'High',
                  aligned: true,
                },
                {
                  label: 'Fiscal Deficit Risk',
                  edram: 'High',
                  street: 'Medium',
                  aligned: false,
                },
                {
                  label: 'Liquidity Risk',
                  edram: 'Medium',
                  street: 'Low',
                  aligned: false,
                },
                {
                  label: 'Financial Stability Risk',
                  edram: 'Medium',
                  street: 'Low',
                  aligned: false,
                },
                {
                  label: 'USD Regime Change Risk',
                  edram: 'High',
                  street: 'Low',
                  aligned: false,
                },
              ].map((row, i) => {
                const sevBadge = sev => {
                  const s = sev.toLowerCase();
                  if (s === 'high') {
                    return {
                      label: 'HIGH',
                      bg: 'rgba(239,68,68,0.12)',
                      color: '#fecaca',
                      border: 'rgba(239,68,68,0.7)',
                    };
                  }
                  if (s === 'medium' || s === 'low-medium') {
                    return {
                      label: sev.toUpperCase(),
                      bg: 'rgba(245,158,11,0.12)',
                      color: '#fed7aa',
                      border: 'rgba(245,158,11,0.7)',
                    };
                  }
                  return {
                    label: 'LOW',
                    bg: 'rgba(148,163,184,0.12)',
                    color: '#e5e7eb',
                    border: 'rgba(148,163,184,0.6)',
                  };
                };

                const edCfg = sevBadge(row.edram);
                const stCfg = sevBadge(row.street);

                return (
                  <tr
                    key={row.label}
                    style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(26,34,53,0.3)' }}
                  >
                    <td
                      style={{
                        padding: '9px 16px',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: '#e2e8f0',
                      }}
                    >
                      {row.label}
                    </td>
                    <td className="text-center" style={{ padding: '7px 8px' }}>
                      <span
                        className="badge"
                        style={{
                          background: edCfg.bg,
                          color: edCfg.color,
                          borderColor: edCfg.border,
                          fontSize: '11px',
                        }}
                      >
                        {edCfg.label}
                      </span>
                    </td>
                    <td className="text-center" style={{ padding: '7px 8px' }}>
                      <span
                        className="badge"
                        style={{
                          background: stCfg.bg,
                          color: stCfg.color,
                          borderColor: stCfg.border,
                          fontSize: '11px',
                        }}
                      >
                        {stCfg.label}
                      </span>
                    </td>
                    <td className="text-center" style={{ padding: '7px 8px', fontSize: '12px' }}>
                      <StatusCell aligned={row.aligned} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
