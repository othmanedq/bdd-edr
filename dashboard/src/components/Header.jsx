/* ══════════════════════════════════════════
   Header — EdRAM Competitive Intelligence
   ══════════════════════════════════════════ */

export default function Header({ isDark, toggleTheme }) {
  return (
    <div className="px-8 py-5 flex items-center justify-between">
      {/* Left: Brand */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="rounded-md bg-white px-2 py-1 border border-ds-border">
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/f/f1/Logo_Edmond_de_Rotschild.png"
            alt="Edmond de Rothschild"
            className="h-9 w-auto object-contain"
          />
        </div>

        <div>
          <h1 className="flex items-baseline gap-2 leading-none text-lg font-bold">
            <span className="text-ds-gold">EdRAM</span>
            <span className="text-ds-text">Competitive Intelligence</span>
          </h1>
          <p className="mt-1 text-xs font-medium text-ds-muted">
            2026 Investment Outlook — 15 European Asset Managers
          </p>
        </div>
      </div>

      {/* Right: Theme Toggle + Info */}
      <div className="flex items-center gap-4">
        {/* Info */}
        <div className="hidden sm:block text-right">
          <div className="text-sm font-medium text-ds-text">
            Mars 2026
          </div>
          <div className="mt-0.5 text-xs text-ds-muted">
            Asset Management
          </div>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-ds-elevated transition-colors border border-ds-border"
          title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
        >
          {isDark ? (
            <svg className="w-5 h-5 text-ds-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-ds-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
