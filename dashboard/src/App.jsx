/* ══════════════════════════════════════════════════════════
   App — EdRAM Competitive Intelligence Dashboard
   ══════════════════════════════════════════════════════════ */

import { useState, useEffect } from 'react';
import Header          from './components/Header.jsx';
import TabNav          from './components/TabNav.jsx';
import CompetitorMap   from './components/CompetitorMap.jsx';
import MacroForecasts  from './components/MacroForecasts.jsx';
import AssetPositioning from './components/AssetPositioning.jsx';
import ThemesConvictions from './components/ThemesConvictions.jsx';
import ConsensusView   from './components/ConsensusView.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className="min-h-screen flex flex-col bg-ds-bg text-ds-text">
      {/* ── Sticky header + tabs ─────────────────── */}
      <header className="sticky top-0 z-50 bg-ds-surface border-b border-ds-border">
        <div className="max-w-[1600px] mx-auto">
          <Header isDark={isDark} toggleTheme={toggleTheme} />
          <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </header>

      {/* ── Main content area ────────────────────── */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 0 && <CompetitorMap />}
        {activeTab === 1 && <MacroForecasts />}
        {activeTab === 2 && <AssetPositioning />}
        {activeTab === 3 && <ThemesConvictions />}
        {activeTab === 4 && <ConsensusView />}
      </main>

      {/* ── Footer ───────────────────────────────── */}
      <footer className="text-center py-5 px-8 text-xs text-ds-muted border-t border-ds-border">
        Edmond de Rothschild Asset Management · Competitive Intelligence Dashboard · March 2026
      </footer>
    </div>
  );
}
