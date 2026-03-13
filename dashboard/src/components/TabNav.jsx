/* ══════════════════════════════════════════
   TabNav — 5-tab navigation bar
   ══════════════════════════════════════════ */

import { MapIcon, ChartBarIcon, TargetIcon, LightbulbIcon, ScaleIcon } from './icons.jsx';

const TABS = [
  { label: 'Competitor Map',     Icon: MapIcon       },
  { label: 'Macro Forecasts',    Icon: ChartBarIcon  },
  { label: 'Asset Positioning',  Icon: TargetIcon    },
  { label: 'Themes & Convictions', Icon: LightbulbIcon },
  { label: 'Consensus vs EdRAM', Icon: ScaleIcon     },
];

export default function TabNav({ activeTab, setActiveTab }) {
  return (
    <nav className="flex gap-1 px-8 overflow-x-auto border-t border-ds-border">
      {TABS.map((tab, i) => {
        const active = activeTab === i;
        return (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-2 px-5 py-3 whitespace-nowrap transition-all relative text-[13px] outline-none cursor-pointer border-b-2
              ${active 
                ? 'font-semibold text-ds-gold border-ds-gold bg-ds-gold/10' 
                : 'font-medium text-ds-muted border-transparent hover:text-ds-text hover:bg-ds-surface'
              }
            `}
          >
            <tab.Icon
              className={`w-4 h-4 shrink-0 transition-colors ${active ? 'text-ds-gold' : 'text-ds-muted'}`}
            />
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
