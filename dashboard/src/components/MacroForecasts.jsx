/* ══════════════════════════════════════════════════════════
   Tab 2 — Macro Forecasts
   ══════════════════════════════════════════════════════════ */

import { EDRAM, COMPETITORS, MACRO_KEYS, MACRO_LABELS, TRUE_PEER_IDS } from '../data.js';

/* Dot component */
function SentimentDot({ sentiment, size = 8 }) {
  const color =
    sentiment === 'bullish' ? '#10b981' :
    sentiment === 'bearish' ? '#ef4444' : '#6b7280';
  return (
    <span
      className="inline-block rounded-full shrink-0"
      style={{ width: size, height: size, background: color }}
    />
  );
}

/* Sentiment badge */
function SentimentBadge({ sentiment }) {
  const cls =
    sentiment === 'bullish' ? 'badge-bullish' :
    sentiment === 'bearish' ? 'badge-bearish' : 'badge-neutral';
  const label = sentiment === 'bullish' ? 'Bullish' : sentiment === 'bearish' ? 'Bearish' : 'Neutral';
  return <span className={`badge ${cls}`}>{label}</span>;
}

/* ── Single macro panel card ────────────────────────────────── */
function MacroPanel({ macroKey }) {
  const label = MACRO_LABELS[macroKey];
  const edramMacro = EDRAM.macro[macroKey];

  const counts = { bullish: 0, neutral: 0, bearish: 0 };
  COMPETITORS.forEach(f => {
    const s = f.macro[macroKey]?.sentiment;
    if (s && counts[s] !== undefined) counts[s]++;
  });

  const total = counts.bullish + counts.neutral + counts.bearish || 1;

  const edSentiment = edramMacro.sentiment;
  const segWidths = {
    bearish: (counts.bearish / total) * 100,
    neutral: (counts.neutral / total) * 100,
    bullish: (counts.bullish / total) * 100,
  };

  const markerLeft = (() => {
    const half = v => v / 2;
    if (edSentiment === 'bearish') {
      return `${half(segWidths.bearish)}%`;
    }
    if (edSentiment === 'neutral') {
      return `${segWidths.bearish + half(segWidths.neutral)}%`;
    }
    return `${segWidths.bearish + segWidths.neutral + half(segWidths.bullish)}%`;
  })();

  return (
    <div
      className="rounded-lg"
      style={{ background: 'var(--ds-surface)', border: '1px solid var(--ds-border)' }}
    >
      {/* Panel header */}
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderBottom: '1px solid var(--ds-border)' }}
      >
        <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ds-text)' }}>{label}</h3>
      </div>

      {/* Consensus bar */}
      <div className="px-4 pt-4 pb-3">
        <div
          className="relative rounded-full overflow-hidden"
          style={{ height: 26, background: 'var(--ds-bg)', border: '1px solid var(--ds-border)' }}
        >
          <div
            className="absolute inset-y-0"
            style={{ left: markerLeft, width: 0, borderLeft: '2px solid #c9a84c' }}
          />
          <div className="flex h-full w-full">
            <div
              className="macro-seg macro-seg-bearish"
              style={{
                width: `${segWidths.bearish}%`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                whiteSpace: 'nowrap',
                padding: '0 6px',
              }}
            >
              {counts.bearish} Bearish
            </div>
            <div
              className="macro-seg macro-seg-neutral"
              style={{
                width: `${segWidths.neutral}%`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                whiteSpace: 'nowrap',
                padding: '0 6px',
              }}
            >
              {counts.neutral} Neutral
            </div>
            <div
              className="macro-seg macro-seg-bullish"
              style={{
                width: `${segWidths.bullish}%`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                whiteSpace: 'nowrap',
                padding: '0 6px',
              }}
            >
              {counts.bullish} Bullish
            </div>
          </div>
        </div>
      </div>

      {/* EdRAM row — gold tinted */}
      <div
        className="px-4 py-3 flex items-center gap-3"
        style={{
          background: 'rgba(201,168,76,0.07)',
          borderBottom: '1px solid var(--ds-border)',
        }}
      >
        <div
          className="flex shrink-0 items-center justify-center rounded font-black"
          style={{ width: 28, height: 28, background: '#c9a84c', color: '#0a0e1a', fontSize: '11px' }}
        >
          E
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#c9a84c' }}>EdRAM</span>
            <SentimentBadge sentiment={edramMacro.sentiment} />
            {edramMacro.value && (
              <span className="num" style={{ fontSize: '13px', color: '#c9a84c' }}>
                {edramMacro.value}
              </span>
            )}
          </div>
          <p className="mt-0.5 truncate" style={{ fontSize: '12px', color: 'var(--ds-text)', opacity: 0.75 }}>
            {edramMacro.label}
          </p>
        </div>
      </div>

      {/* Competitor rows */}
      <div className="overflow-y-auto px-4 pb-3" style={{ maxHeight: 260 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          {COMPETITORS.map(firm => {
            const m = firm.macro[macroKey];
            if (!m) return null;
            const isTruePeer = TRUE_PEER_IDS.includes(firm.id);
            return (
              <div
                key={firm.id}
                className="flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors"
                style={{
                  background: isTruePeer ? 'var(--ds-elevated)' : 'transparent',
                  border: '1px solid var(--ds-border)',
                }}
              >
                <SentimentDot sentiment={m.sentiment} size={7} />
                <span
                  className="shrink-0"
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--ds-text)',
                    maxWidth: 110,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {firm.name}
                </span>
                {m.value && (
                  <span
                    className="num shrink-0"
                    style={{ fontSize: '11px', color: 'var(--ds-gold-muted)', minWidth: 40 }}
                  >
                    {m.value}
                  </span>
                )}
                <span
                  className="truncate"
                  style={{
                    fontSize: '11px',
                    color: 'var(--ds-text)',
                    opacity: 0.82,
                  }}
                >
                  {m.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export default function MacroForecasts() {
  return (
    <div className="space-y-6">
      {/* Legend */}
      <div className="flex items-center gap-6 mb-6">
        <span
          className="uppercase tracking-widest"
          style={{ fontSize: '10px', fontWeight: 600, color: 'var(--ds-muted)' }}
        >
          Sentiment
        </span>
        {[
          { label: 'Bullish', sentiment: 'bullish' },
          { label: 'Neutral', sentiment: 'neutral' },
          { label: 'Bearish', sentiment: 'bearish' },
        ].map(({ label, sentiment }) => (
          <span key={label} className="flex items-center gap-2" style={{ fontSize: '13px', color: 'var(--ds-muted)' }}>
            <SentimentDot sentiment={sentiment} size={8} />
            {label}
          </span>
        ))}
      </div>

      {/* 2-column grid of macro panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {MACRO_KEYS.map(key => (
          <MacroPanel key={key} macroKey={key} />
        ))}
      </div>
    </div>
  );
}
