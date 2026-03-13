/* ══════════════════════════════════════════════════════════
   Tab 3 — Asset Positioning Heatmap
   ══════════════════════════════════════════════════════════ */

import { useState } from 'react';
import { EDRAM, COMPETITORS, POS_KEYS, POS_LABELS } from '../data.js';
import { DownloadIcon } from './icons.jsx';

/* Position badge */
function PosBadge({ value, highlight = false }) {
  const cls =
    value === 'OW' ? 'badge-ow' :
    value === 'UW' ? 'badge-uw' : 'badge-n';

  return (
    <span
      className={`badge ${cls}`}
      style={{
        minWidth: 38,
        justifyContent: 'center',
        fontSize: '12px',
        outline: highlight ? '2px solid rgba(201,168,76,0.5)' : 'none',
        outlineOffset: '1px',
      }}
    >
      {value}
    </span>
  );
}

/* Short column label */
const SHORT_LABEL = {
  equityUS:     'EQ. US',
  equityEurope: 'EQ. EU',
  equityEM:     'EQ. EM',
  equityJapan:  'EQ. JP',
  fixedIG:      'FI IG',
  fixedHY:      'FI HY',
  fixedEMBonds: 'FI EM',
  duration:     'DUR.',
  gold:         'GOLD',
  oil:          'OIL',
  alternatives: 'ALTS',
};

/* Translation gap score helper */
function computeGapScore(firm) {
  let diverge = 0;
  POS_KEYS.forEach(k => {
    if (firm.positioning[k] !== EDRAM.positioning[k]) diverge += 1;
  });
  return diverge;
}

function gapLabelAndColor(score) {
  if (score === null) {
    return { label: 'BENCHMARK', bg: 'rgba(201,168,76,0.12)', color: '#facc15', border: 'rgba(234,179,8,0.6)' };
  }
  if (score <= 3) {
    return { label: 'Low Gap', bg: 'rgba(22,163,74,0.14)', color: '#6ee7b7', border: 'rgba(22,163,74,0.6)' };
  }
  if (score <= 6) {
    return { label: 'Medium Gap', bg: 'rgba(245,158,11,0.14)', color: '#fed7aa', border: 'rgba(245,158,11,0.7)' };
  }
  return { label: 'High Gap', bg: 'rgba(239,68,68,0.14)', color: '#fecaca', border: 'rgba(239,68,68,0.7)' };
}

/* Export CSV */
function downloadCSV() {
  const headers = ['Firm', ...POS_KEYS.map(k => POS_LABELS[k]), 'Gap Score'];
  const rows = [EDRAM, ...COMPETITORS].map(f => [
    f.name,
    ...POS_KEYS.map(k => f.positioning[k]),
    f.id === 'edram' ? 'BENCHMARK' : computeGapScore(f),
  ]);
  const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'edram-asset-positioning-2026.csv';
  a.click();
  URL.revokeObjectURL(url);
}

/* ── Main component ─────────────────────────────────────────── */
export default function AssetPositioning() {
  const [downloaded, setDownloaded] = useState(false);

  const handleExport = () => {
    downloadCSV();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <div className="space-y-6">

      {/* Top bar: legend + export */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <span
            className="uppercase tracking-widest"
            style={{ fontSize: '10px', fontWeight: 600, color: '#6b7280' }}
          >
            Position
          </span>
          {[
            { v: 'OW', cls: 'badge-ow', lbl: 'Overweight' },
            { v: 'N',  cls: 'badge-n',  lbl: 'Neutral' },
            { v: 'UW', cls: 'badge-uw', lbl: 'Underweight' },
          ].map(({ v, cls, lbl }) => (
            <span key={v} className="flex items-center gap-2" style={{ fontSize: '13px', color: '#94a3b8' }}>
              <span className={`badge ${cls}`}>{v}</span>
              {lbl}
            </span>
          ))}
        </div>

        <button
          onClick={handleExport}
          className="flex items-center gap-2 rounded-lg transition-all"
          style={{
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: 600,
            background: 'transparent',
            color: downloaded ? '#10b981' : '#c9a84c',
            border: `1px solid ${downloaded ? '#10b981' : '#c9a84c'}`,
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          <DownloadIcon className="w-4 h-4" />
          {downloaded ? 'Downloaded!' : 'Export CSV'}
        </button>
      </div>

      {/* Table */}
      <div
        className="rounded-lg overflow-hidden"
        style={{ border: '1px solid #1e2d45', marginTop: 4 }}
      >
        <div className="overflow-x-auto">
          <table className="data-table" style={{ minWidth: 900 }}>
            <thead>
              <tr>
                <th
                  className="sticky left-0 z-10 text-left"
                  style={{
                    background: '#0a0e1a',
                    borderRight: '1px solid #1e2d45',
                    width: 160,
                    padding: '10px 16px',
                  }}
                >
                  Firm
                </th>
                {POS_KEYS.map(k => (
                  <th
                    key={k}
                    className="text-center"
                    style={{ padding: '10px 4px', minWidth: 62 }}
                  >
                    {SHORT_LABEL[k]}
                  </th>
                ))}
                <th
                  className="text-center"
                  style={{ padding: '10px 8px', minWidth: 90 }}
                >
                  GAP SCORE
                </th>
              </tr>
            </thead>

            <tbody>
              {/* EdRAM pinned row */}
              <tr style={{ background: 'rgba(201,168,76,0.07)' }}>
                <td
                  className="sticky left-0 z-10"
                  style={{
                    background: 'rgba(26,18,6,0.98)',
                    borderRight: '1px solid #1e2d45',
                    borderBottom: '2px solid #c9a84c',
                    padding: '10px 16px',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="flex shrink-0 items-center justify-center rounded font-black"
                      style={{ width: 24, height: 24, background: '#c9a84c', color: '#0a0e1a', fontSize: '10px' }}
                    >
                      E
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#c9a84c' }}>EdRAM</span>
                    <span
                      className="badge uppercase"
                      style={{ fontSize: '9px', background: 'rgba(201,168,76,0.15)', color: '#c9a84c', borderColor: 'rgba(201,168,76,0.4)', letterSpacing: '0.08em' }}
                    >
                      BMRK
                    </span>
                  </div>
                </td>
                {POS_KEYS.map(k => (
                  <td
                    key={k}
                    className="text-center"
                    style={{ padding: '8px 4px', borderBottom: '2px solid #c9a84c' }}
                  >
                    <PosBadge value={EDRAM.positioning[k]} highlight />
                  </td>
                ))}
                <td
                  className="text-center"
                  style={{ padding: '8px 8px', borderBottom: '2px solid #c9a84c' }}
                >
                  <span
                    className="badge"
                    style={{
                      background: 'rgba(201,168,76,0.12)',
                      color: '#facc15',
                      borderColor: 'rgba(234,179,8,0.6)',
                      fontSize: '11px',
                    }}
                  >
                    BENCHMARK
                  </span>
                </td>
              </tr>

              {/* Competitor rows */}
              {COMPETITORS.map((firm, i) => (
                <tr
                  key={firm.id}
                  style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(26,34,53,0.3)' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#1a2235'}
                  onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'transparent' : 'rgba(26,34,53,0.3)'}
                >
                  <td
                    className="sticky left-0 z-10"
                    style={{
                      background: i % 2 === 0 ? '#111827' : 'rgb(18,24,40)',
                      borderRight: '1px solid #1e2d45',
                      padding: '8px 16px',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: 500, color: '#f1f5f9' }}>
                      {firm.name}
                    </span>
                  </td>
                  {POS_KEYS.map(k => (
                    <td key={k} className="text-center" style={{ padding: '6px 4px' }}>
                      <PosBadge value={firm.positioning[k]} />
                    </td>
                  ))}
                  <td className="text-center" style={{ padding: '6px 8px' }}>
                    {(() => {
                      const score = computeGapScore(firm);
                      const cfg = gapLabelAndColor(score);
                      return (
                        <span
                          className="badge"
                          style={{
                            background: cfg.bg,
                            color: cfg.color,
                            borderColor: cfg.border,
                            fontSize: '11px',
                          }}
                        >
                          {cfg.label}
                        </span>
                      );
                    })()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
