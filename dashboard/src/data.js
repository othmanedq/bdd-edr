/* ════════════════════════════════════════════════════════════
  EdRAM Competitive Intelligence Dashboard — Data Layer v4
  17 competitors · 3-tier structure · enriched modal data
   AXA IM removed (merged into BNP) · DNCA removed (no public outlook)
   JPM & Goldman enriched from public outlooks (Nov–Dec 2025)
   ════════════════════════════════════════════════════════════ */

/* ── Tier configuration ───────────────────────────────────── */
export const TIER_CONFIG = {
  1: { label: 'Macro Reference',   badgeBg: '#1f2937', badgeColor: '#9ca3af' },
  2: { label: 'Direct Competitor', badgeBg: '#1e3a5f', badgeColor: '#60a5fa' },
  3: { label: 'True Peer',         badgeBg: '#3d2b00', badgeColor: '#c9a84c' },
};

/* ── Positioning keys & labels ─────────────────────────────── */
export const POS_KEYS = [
  'equityUS','equityEurope','equityEM','equityJapan',
  'fixedIG','fixedHY','fixedEMBonds','duration',
  'gold','oil','alternatives',
];
export const POS_LABELS = {
  equityUS:'EQ. US', equityEurope:'EQ. EUROPE', equityEM:'EQ. EM',
  equityJapan:'EQ. JAPAN', fixedIG:'FI IG', fixedHY:'FI HY',
  fixedEMBonds:'FI EM BONDS', duration:'DURATION',
  gold:'GOLD', oil:'OIL', alternatives:'ALTS',
};

/* ── Macro keys & labels ───────────────────────────────────── */
export const MACRO_KEYS = ['usGDP','ezGDP','chinaGDP','globalInflation','fed','ecb'];
export const MACRO_LABELS = {
  usGDP:'US GDP Growth 2026', ezGDP:'Eurozone GDP Growth 2026',
  chinaGDP:'China GDP Growth 2026', globalInflation:'Global Inflation',
  fed:'Fed Terminal Rate', ecb:'ECB Terminal Rate',
};

/* ── Stance → CSS class ────────────────────────────────────── */
export const STANCE_CLASSES = {
  'Risk-On':            'stance-risk-on',
  'Defensive':          'stance-defensive',
  'Cautious-Offensive': 'stance-cautious-off',
  'Opportunistic':      'stance-opportunistic',
  'Balanced':           'stance-balanced',
  'Selective Risk-On':  'stance-selective-on',
};

/* ── Outlook source URLs ──────────────────────────────────── */
export const OUTLOOK_URLS = {
  edram:    'https://www.edmond-de-rothschild.com/en/asset-management/insights',
  blackrock:'https://www.blackrock.com/institutions/en-us/insights',
  jpmorgan: 'https://am.jpmorgan.com/gb/en/asset-management/per/insights/market-insights/investment-outlook/',
  goldman:  'https://am.gs.com/en-us/advisors/insights/article/investment-outlook',
  amundi:   'https://research-center.amundi.com/',
  bnpp:     'https://www.bnpparibas-am.com/en/insights/',
  allianz:  'https://www.allianzgi.com/en/insights/outlook-and-commentary',
  dws:      'https://www.dws.com/en-gb/insights/cio-view/',
  natixis:  'https://www.im.natixis.com/en-intl/insights',
  pictet:   'https://www.am.pictet/en/global/insights',
  lombard:  'https://am.lombardodier.com/home/insights.html',
  candriam: 'https://www.candriam.com/en/professional/market-insights/',
  carmignac:'https://www.carmignac.com/en-gb/insights',
  flossbach:'https://www.flossbachvonstorch.com/en/insights/',
  robeco:   'https://www.robeco.com/en-int/insights',
  lazard:   'https://www.lazardassetmanagement.com/us/en_us/research-insights',
  eurizon:  'https://www.eurizoncapital.com/en/insights/',
  generali: 'https://www.generali-investments.com/global/en/institutional/our-views',
};

export const AM_LOGOS = {
  edram:    'edmond-de-rothschild.com',
  blackrock:'blackrock.com',
  jpmorgan: 'jpmorgan.com',
  goldman:  'gs.com',
  amundi:   'amundi.com',
  bnpp:     'bnpparibas-am.com',
  allianz:  'allianzgi.com',
  dws:      'dws.com',
  natixis:  'im.natixis.com',
  pictet:   'pictet.com',
  lombard:  'lombardodier.com',
  candriam: 'candriam.com',
  carmignac:'carmignac.com',
  flossbach:'flossbachvonstorch.com',
  robeco:   'robeco.com',
  lazard:   'lazardassetmanagement.com',
  eurizon:  'eurizoncapital.com',
  generali: 'generali-investments.com',
};

export const LOCAL_SOURCE_FILES = {
  edram:    'data/EdR.pdf',
  amundi:   'data/Amundi.pdf',
  goldman:  'data/Goldman_Sachs.pdf',
  jpmorgan: 'data/JPMorgan.pdf',
  lombard:  'data/LombardOdier.pdf',
  blackrock:'data/BlackRock.pdf',
  bnpp:     'data/BNPParibas.pdf',
  allianz:  'data/AllianzGI.pdf',
  dws:      'data/DWS.pdf',
  carmignac:'data/Carmignac.pdf',
  flossbach:'data/Flossbach_vs.pdf',
  robeco:   'data/Robeco.pdf',
  lazard:   'data/Lazard.pdf',
  generali: 'data/GeneraliAM.pdf',
};

const localFileToPublicUrl = (localFilePath) => {
  if (!localFilePath) return null;
  return `/${localFilePath.split('/').map(encodeURIComponent).join('/')}`;
};

export const OUTLOOK_FILE_URLS = Object.fromEntries(
  Object.entries(LOCAL_SOURCE_FILES).map(([id, localFile]) => [id, localFileToPublicUrl(localFile)])
);

export const getPreferredOutlookUrl = (id) => OUTLOOK_FILE_URLS[id] || OUTLOOK_URLS[id] || null;

/* ── EdRAM Benchmark ─────────────────────────────────────── */
export const EDRAM = {
  id:'edram', name:'EdRAM', fullName:'Edmond de Rothschild Asset Management',
  isBenchmark:true, aum:'~€84bn', markets:['FR','DE','CH','IT','ES'],
  stance:'Cautious-Offensive', outlookTitle:'Cautious Optimism — Diversification & Resilience',
  outlookUrl: getPreferredOutlookUrl('edram'),
  positioning:{
    equityUS:'N', equityEurope:'OW', equityEM:'OW', equityJapan:'OW',
    fixedIG:'OW', fixedHY:'N', fixedEMBonds:'OW', duration:'UW',
    gold:'OW', oil:'N', alternatives:'N',
  },
  macro:{
    usGDP:          { value:null,      label:'No recession, reduced visibility',  sentiment:'neutral' },
    ezGDP:          { value:null,      label:'Germany as key catalyst',            sentiment:'bullish' },
    chinaGDP:       { value:null,      label:'Selective EM opportunities',         sentiment:'neutral' },
    globalInflation:{ value:null,      label:'Sticky, AI monetisation uncertain',  sentiment:'bearish' },
    fed:            { value:'~3.4%',   label:'Watching before repositioning',      sentiment:'neutral' },
    ecb:            { value:'~1.5–2%', label:'Easing supportive for Europe',       sentiment:'bullish' },
  },
  themes:[
    'AI bubble risk — favour users over producers',
    'EM & Japan rotation away from Mag7',
    'Sovereignty & private markets transition',
    'European revival driven by Germany',
    'Gold as core diversifier',
  ],
  contrarian:'Explicit AI bubble warning (dot-com parallels); rejects US Big Tech consensus',
};

/* ── Placeholder modal factory ────────────────────────────── */
function buildContextualModal(firm) {
  const s = firm.macro;
  const macroOutlook = [
    { indicator:'US GDP Growth',       view: s.usGDP.value ? `${s.usGDP.value} — ${s.usGDP.label}` : s.usGDP.label, sentiment:s.usGDP.sentiment },
    { indicator:'Eurozone GDP Growth', view: s.ezGDP.value ? `${s.ezGDP.value} — ${s.ezGDP.label}` : s.ezGDP.label, sentiment:s.ezGDP.sentiment },
    { indicator:'China GDP Growth',    view: s.chinaGDP.value ? `${s.chinaGDP.value} — ${s.chinaGDP.label}` : s.chinaGDP.label, sentiment:s.chinaGDP.sentiment },
    { indicator:'Global Inflation',    view: s.globalInflation.value ? `${s.globalInflation.value} — ${s.globalInflation.label}` : s.globalInflation.label, sentiment:s.globalInflation.sentiment },
    { indicator:'Fed Policy Rate',     view: s.fed.value ? `${s.fed.value} — ${s.fed.label}` : s.fed.label, sentiment:s.fed.sentiment },
    { indicator:'ECB Policy Rate',     view: s.ecb.value ? `${s.ecb.value} — ${s.ecb.label}` : s.ecb.label, sentiment:s.ecb.sentiment },
  ];
  return {
    distributionModel: firm.tier === 1 ? 'Institutional' : firm.tier === 2 ? 'Wholesale + Institutional' : 'Wholesale + Select Institutional',
    investmentModel: 'Primarily active management',
    macroOutlook,
    currency:{
      usd:{ stance:'neutral', comment:'Range-bound with policy-driven volatility' },
      eurUsd:'EUR/USD broadly stable with episodic divergence',
      deDollarization:'Partial',
    },
    scenarios:{
      base:{ probability:60, description:`${firm.stance} positioning under a soft-landing regime`, assumption:'Disinflation continues without major policy error' },
      bull:{ probability:25, description:'Risk assets re-rate on stronger growth and policy support', assumption:'Macro surprises remain positive and spreads stay contained' },
      bear:{ probability:15, description:'Growth shock and risk-off rotation toward quality duration', assumption:'Geopolitical escalation or delayed inflation normalization' },
    },
    style:{
      growthValue:'Blend with quality tilt',
      largeCap:'Large Cap core, selective satellite exposures',
      sectors: firm.themes.slice(0, 4),
    },
    risks:[
      { name:'Geopolitical Escalation', severity:'High',   description:'Could disrupt supply chains and compress risk appetite' },
      { name:'Inflation Persistence',   severity:'Medium', description:'Could delay easing and pressure duration-sensitive assets' },
      { name:'Growth Slowdown',         severity:'Medium', description:'Earnings revisions would challenge cyclical exposure' },
      { name:'Market Concentration',    severity:'Low',    description:'Narrow leadership could reverse quickly under volatility' },
    ],
    source: {
      label: firm.outlookTitle,
      url: getPreferredOutlookUrl(firm.id),
      asOf: '2026 Outlook cycle',
      localFile: LOCAL_SOURCE_FILES[firm.id] || null,
    },
    sources: [{
      label: firm.outlookTitle,
      url: getPreferredOutlookUrl(firm.id),
      asOf: '2026 Outlook cycle',
      localFile: LOCAL_SOURCE_FILES[firm.id] || null,
    }],
    isEstimated:true,
  };
}

function buildSourcedModal(firm, sourceMeta) {
  const base = buildContextualModal(firm);
  const source = {
    label: sourceMeta.label || firm.outlookTitle,
    url: sourceMeta.url || OUTLOOK_URLS[firm.id] || null,
    asOf: sourceMeta.asOf || 'Outlook 2026',
    localFile: sourceMeta.localFile || LOCAL_SOURCE_FILES[firm.id] || null,
  };
  return {
    ...base,
    source,
    sources: [source],
    isEstimated: false,
  };
}

/* ══════════════════════════════════════════════════════════
   DETAILED MODAL OVERRIDES — real data, isEstimated: false
   ══════════════════════════════════════════════════════════ */

/* ── Amundi ─────────────────────────────────────────────── */
const amundiModal = {
  distributionModel:'Wholesale + Institutional',
  investmentModel:'Active + Passive (ETF)',
  macroOutlook:[
    { indicator:'Global GDP Growth',    view:'3.1% — Moderate expansion',          sentiment:'neutral' },
    { indicator:'US GDP Growth',        view:'1.9% — Trend growth',                sentiment:'neutral' },
    { indicator:'Eurozone GDP Growth',  view:'1.3% — Fiscal impulse',              sentiment:'bullish' },
    { indicator:'China GDP Growth',     view:'4.8% — Policy stimulus',             sentiment:'bullish' },
    { indicator:'Global Inflation',     view:'Sticky above target',                sentiment:'bullish' },
    { indicator:'US Inflation',         view:'Above 3% — Persistent pressure',     sentiment:'bearish' },
    { indicator:'Fed Policy Rate',      view:'~3.50% — Gradual normalisation',     sentiment:'neutral' },
    { indicator:'ECB Policy Rate',      view:'~1.75% — Continued easing',          sentiment:'bullish' },
    { indicator:'Yield Curve Shape',    view:'Bear steepener (long-end pressure)',  sentiment:'neutral' },
    { indicator:'Fiscal Policy Stance', view:'Globally expansionary',              sentiment:'bullish' },
  ],
  currency:{
    usd:{ stance:'neutral', comment:'Range-bound with downside risk from twin deficits' },
    eurUsd:'EUR/USD ~1.08–1.10',
    deDollarization:'Partial',
  },
  scenarios:{
    base:{ probability:60, description:'Soft landing in US, modest Eurozone recovery driven by German fiscal stimulus', assumption:'Fed cuts 3×, no major geopolitical escalation, China stimulus holds' },
    bull:{ probability:25, description:'Stronger AI productivity boost, Eurozone fiscal surprise drives above-trend growth', assumption:'Trade deals resolved, China consumer recovery accelerates significantly' },
    bear:{ probability:15, description:'US recession triggered by tariff shock, credit market stress emerges in H2', assumption:'Fed forced to cut aggressively, EPS downgrades across the board, spreads widen' },
  },
  style:{
    growthValue:'Blend (quality-growth bias)',
    largeCap:'Large Cap',
    sectors:['AI Value Chain (users over producers)','Healthcare Innovation','European Industrials','Emerging Markets Consumer'],
  },
  risks:[
    { name:'Trade War Escalation',      severity:'High',   description:'US tariff broadening beyond China to EU could trigger recessionary conditions' },
    { name:'AI Bubble Correction',      severity:'Medium', description:'Concentration in tech majors remains a systematic portfolio risk' },
    { name:'Inflation Re-acceleration', severity:'Medium', description:'Second-round wage effects could delay Fed cuts and compress multiples' },
    { name:'Geopolitical Shock',        severity:'High',   description:'Middle East or Taiwan scenarios could spike energy prices and risk premia' },
  ],
  source:{
    label:'Amundi Investment Outlook / Research Center',
    url: OUTLOOK_URLS.amundi,
    asOf:'2026 Outlook cycle',
    localFile: LOCAL_SOURCE_FILES.amundi,
  },
  isEstimated:false,
};

/* ── Allianz GI — extracted from Outlook 2026 ───────────── */
const allianzModal = {
  distributionModel:'Institutional & Wholesale',
  investmentModel:'Active multi-asset + private markets integration',
  macroOutlook:[
    { indicator:'Global GDP Growth', view:'~2.7% — resilient despite tariff aftershocks', sentiment:'neutral' },
    { indicator:'US GDP Growth', view:'~1.5–2.0% — slowing but resilient', sentiment:'neutral' },
    { indicator:'Eurozone GDP Growth', view:'~1.0–1.5% — moderate cyclical recovery', sentiment:'bullish' },
    { indicator:'China GDP Growth', view:'Moderating under tariff pressure; targeted support remains', sentiment:'neutral' },
    { indicator:'Global Inflation', view:'Diverging by region — US sticky, Europe/Asia softer', sentiment:'neutral' },
    { indicator:'US Inflation', view:'Above 3% with tariff-related upside risks', sentiment:'bearish' },
    { indicator:'Fed Policy Rate', view:'~3.25–3.50% — gradual cuts continue', sentiment:'neutral' },
    { indicator:'ECB Policy Rate', view:'~1.75% — easing in H1 2026', sentiment:'bullish' },
  ],
  currency:{
    usd:{ stance:'bearish', comment:'Potential weaker USD supports non-US diversification and EM debt' },
    eurUsd:'Bias for stronger EUR/sterling vs USD if policy divergence persists',
    deDollarization:'Partial',
  },
  scenarios:{
    base:{ probability:60, description:'Resilient growth with regional divergence and broadening AI spend', assumption:'No major escalation in trade or geopolitical shocks' },
    bull:{ probability:20, description:'AI productivity broadens globally beyond US tech concentration', assumption:'Rate cuts and fiscal support sustain risk assets' },
    bear:{ probability:20, description:'US labour weakness spills into consumption with stagflationary pressure', assumption:'Tariff effects intensify and policy uncertainty rises' },
  },
  style:{
    growthValue:'Selective growth + diversified income',
    largeCap:'Reduce concentration risk in richly priced US mega-cap tech',
    sectors:['European equities (relative valuation support)','India equities (structural growth)','China contrarian opportunities','Private credit and infrastructure'],
  },
  risks:[
    { name:'US Tech Concentration', severity:'High', description:'Valuations and concentration remain stretched in pockets of US equities' },
    { name:'Trade Fragmentation', severity:'High', description:'Sector-specific tariffs can still disrupt supply chains and inflation' },
    { name:'US Institutional Risk', severity:'Medium', description:'Policy/legal uncertainty around Fed governance may hurt confidence' },
    { name:'Geopolitical Escalation', severity:'Medium', description:'Russia/East Asia remain key tail-risk regions' },
  ],
  source:{
    label:'Outlook 2026: Navigate New Pathways',
    url: OUTLOOK_URLS.allianz,
    asOf:'2026 outlook',
    localFile: LOCAL_SOURCE_FILES.allianz,
  },
  isEstimated:false,
};

/* ── DWS — extracted from Infrastructure Strategic Outlook ─ */
const dwsModal = {
  distributionModel:'Institutional',
  investmentModel:'Infrastructure-led thematic active allocation',
  macroOutlook:[
    { indicator:'Global Growth Regime', view:'More balanced in 2026 after 2025 tariff volatility', sentiment:'neutral' },
    { indicator:'US GDP Growth', view:'Positive surprises in 2025; still strong with fiscal loosening', sentiment:'bullish' },
    { indicator:'Eurozone GDP Growth', view:'Cautious optimism; Germany fiscal impulse key', sentiment:'bullish' },
    { indicator:'China GDP Growth', view:'Forecast resilience but subject to trade and policy uncertainty', sentiment:'neutral' },
    { indicator:'Inflation Trend', view:'Moderating inflation supports infrastructure backdrop', sentiment:'bullish' },
    { indicator:'Fed Policy Rate', view:'~3.00–3.25% by end-2026 (gradual path)', sentiment:'bullish' },
    { indicator:'ECB Policy Rate', view:'DWS does not expect cuts below ~2.0% in 2026', sentiment:'neutral' },
  ],
  currency:{
    usd:{ stance:'neutral', comment:'Policy and election uncertainty may keep FX volatility elevated' },
    eurUsd:'Relative policy divergence remains the key FX driver',
    deDollarization:'Partial',
  },
  scenarios:{
    base:{ probability:60, description:'Slow and steady infrastructure growth with improving deployment conditions', assumption:'Lower rates, less tariff noise, stable policy support' },
    bull:{ probability:20, description:'Europe capex cycle and AI data-centre spend accelerate infrastructure returns', assumption:'Fundraising and transaction activity normalise faster' },
    bear:{ probability:20, description:'Geopolitical/political shocks delay deals and compress realised returns', assumption:'Election/trade uncertainty and listed-market volatility spill over' },
  },
  style:{
    growthValue:'Core infrastructure + selective growth assets',
    largeCap:'Barbell allocation across defensive and growth infrastructure segments',
    sectors:['Electrification and grids','Decarbonisation assets','Digital infrastructure / data centres','Defence-linked European infrastructure'],
  },
  risks:[
    { name:'Execution & Deployment Risk', severity:'High', description:'Longer deal processes and slower realisations can weigh on returns' },
    { name:'Valuation Discipline', severity:'Medium', description:'Firming valuations require tighter underwriting and return assumptions' },
    { name:'Geopolitical Uncertainty', severity:'Medium', description:'Trade and election dynamics can quickly shift sentiment and activity' },
    { name:'Funding Liquidity Mismatch', severity:'Medium', description:'Investor demand and liquidity structures continue to evolve' },
  ],
  source:{
    label:'Infrastructure Strategic Outlook 2026',
    url: OUTLOOK_URLS.dws,
    asOf:'January 2026',
    localFile: LOCAL_SOURCE_FILES.dws,
  },
  isEstimated:false,
};

/* ── J.P. Morgan AM — enriched from public 2026 outlook ── */
const jpmorganModal = {
  distributionModel:'Institutional & Wholesale',
  investmentModel:'Active + Alternatives (multi-asset)',
  macroOutlook:[
    { indicator:'Global GDP Growth',    view:'Broadening regional recovery — fiscal stimulus tailwind',     sentiment:'bullish' },
    { indicator:'US GDP Growth',        view:'~2.0–2.1% — Tariff headwinds offset by fiscal support',      sentiment:'neutral' },
    { indicator:'Eurozone GDP Growth',  view:'~1.1–1.3% — Germany fiscal stimulus feeds through H1 2026',  sentiment:'bullish' },
    { indicator:'China GDP Growth',     view:'~4.5% — Export-led, rare earth & EV supply chains key',      sentiment:'neutral' },
    { indicator:'US Inflation',         view:'Sticky — tariffs pass-through to consumers in H1',           sentiment:'bearish' },
    { indicator:'Eurozone Inflation',   view:'Moderating — ECB rate cuts feeding credit growth',            sentiment:'bullish' },
    { indicator:'Fed Policy Rate',      view:'~3.25–3.50% — cautious cut path; independence risk from May', sentiment:'neutral' },
    { indicator:'ECB Policy Rate',      view:'~1.75–2.00% — continued easing, credit supportive',          sentiment:'bullish' },
    { indicator:'BoJ Policy Rate',      view:'Gradual normalisation — Sanaenomics + corporate reforms',    sentiment:'neutral' },
  ],
  currency:{
    usd:{ stance:'bearish', comment:'Fed independence risk in May weighs on USD; dollar moves major return driver' },
    eurUsd:'EUR/USD upside if Fed independence questioned post-Powell departure',
    deDollarization:'Partial',
  },
  scenarios:{
    base:{ probability:65, description:'Soft landing with global growth broadening; AI supercycle supports earnings 13–15%', assumption:'No major Fed independence shock; tariffs stabilise; Germany stimulus on track' },
    bull:{ probability:20, description:'AI broadens beyond hyperscalers — wave of corporate & government adoption', assumption:'Productivity surprise materialises; inflation falls faster than expected' },
    bear:{ probability:15, description:'Recessionary dynamic if labor demand stays weak and payrolls disappoint', assumption:'Fed pivots hawkish or loses independence; tariffs escalate further' },
  },
  style:{
    growthValue:'Quality-growth with broadening to cyclicals',
    largeCap:'Large cap + European banks (200% return since 2022, still value)',
    sectors:['European banks (8% shareholder yield)','Fiscal beneficiaries (defence, infrastructure)','GRANOLAS (19x P/E — AI sentiment hedge)','Japanese equities (Sanaenomics + corporate reforms)','EM Taiwan / South Korea (rate-sensitive cyclicals)'],
  },
  risks:[
    { name:'Fed Independence Risk', severity:'High',   description:'Powell departure in May + Trump appointments could politicise monetary policy; dollar and bond market most exposed' },
    { name:'AI Bubble / Concentration', severity:'High', description:'Circular capital flows in AI ecosystem; Mag7 concentration back in focus' },
    { name:'Tariff Pass-Through',    severity:'Medium', description:'Consumer inflation pick-up in H1 2026 as retailers stop absorbing costs' },
    { name:'Immigration / Labor Supply', severity:'Medium', description:'Dramatic decline in net immigration pressures working-age population and GDP growth' },
    { name:'Oil Oversupply',         severity:'Low',    description:'Global oil glut expected; downward price pressure contained but broad deflationary offset' },
  ],
  source:{
    label:'Investment Outlook 2026 — Fuel in the Engine',
    url: OUTLOOK_URLS.jpmorgan,
    asOf:'November 2025',
    localFile: LOCAL_SOURCE_FILES.jpmorgan,
  },
  isEstimated:false,
};

/* ── Goldman Sachs AM — enriched from public 2026 outlook ── */
const goldmanModal = {
  distributionModel:'Institutional',
  investmentModel:'Active multi-asset + Alternatives platform',
  macroOutlook:[
    { indicator:'Global GDP Growth',    view:'Sturdy — base case more benign than market pricing (~1.7% priced vs ~2.5% forecast)', sentiment:'bullish' },
    { indicator:'US GDP Growth',        view:'~2.3–2.5% (Q4/Q4) — above trend; fiscal and consumer support H1', sentiment:'bullish' },
    { indicator:'Eurozone GDP Growth',  view:'~1.2% — German fiscal stimulus narrowing GDP gap vs US',           sentiment:'bullish' },
    { indicator:'China GDP Growth',     view:'~4.8% — manufacturing and export resilience; consumer fragile',    sentiment:'bullish' },
    { indicator:'Global Inflation',     view:'Normalising but next cycle = higher inflation, elevated rates',     sentiment:'neutral' },
    { indicator:'US Inflation',         view:'Lower than 2025 — productivity and energy offset tariff pressure',  sentiment:'neutral' },
    { indicator:'Fed Policy Rate',      view:'~3.25% — 50bps of cuts in 2026; new Chair potentially more dovish', sentiment:'bullish' },
    { indicator:'ECB Policy Rate',      view:'~1.75% — continuing easing cycle',                                  sentiment:'bullish' },
    { indicator:'BoJ Policy Rate',      view:'Gradual hikes to ~1.5% by mid-2027',                               sentiment:'neutral' },
  ],
  currency:{
    usd:{ stance:'bearish', comment:'Dollar expected to continue weakening as demand for US assets diminishes' },
    eurUsd:'Structural USD weakness supports international asset returns',
    deDollarization:'Yes',
  },
  scenarios:{
    base:{ probability:60, description:'Broadening bull market — earnings-driven, lower index returns than 2025 but positive across regions', assumption:'Sturdy US growth, lower inflation, 50bps Fed cuts, AI capex boom continues' },
    bull:{ probability:25, description:'Markets shrug off valuation constraints; better growth + lower inflation drives deeper upside', assumption:'AI monetisation accelerates; EM and cyclicals re-rate sharply' },
    bear:{ probability:15, description:'AI capex boom unwinds — overvaluation meets monetisation disappointment or energy/infrastructure constraints', assumption:'Tech-led selloff with credit contagion; Fed forced to pivot hawkish' },
  },
  style:{
    growthValue:'Broadening beyond growth — cyclicals and international catch-up',
    largeCap:'Large cap + small/mid cap opportunities as AI trade broadens',
    sectors:['US equities — tech AI broadening beyond Mag7','European equities — fiscal + reindustrialisation beneficiaries','Japan — earnings + corporate reform + Sanaenomics','EM equities — soft USD and easing EM central banks','High yield credit — strong fundamentals, M&A supportive','Infrastructure — AI digitisation + energy transition'],
  },
  risks:[
    { name:'AI Valuation / Capex Cycle', severity:'High',   description:'Hyperscaler debt financing growing; circularity in AI ecosystem raises sustainability concerns; ~$540bn capex in 2026' },
    { name:'Fed Independence',           severity:'High',   description:'Powell departure May 2026 — new Chair potentially dovish but political risk to credibility' },
    { name:'Equity Concentration',       severity:'Medium', description:'Mag7 weight in S&P still extreme; 60/40 correlation breakdown risk' },
    { name:'Credit Spread Tightness',    severity:'Medium', description:'IG spreads offer limited upside; risk-reward less compelling than equities' },
    { name:'Geopolitical Fragmentation', severity:'Medium', description:'New trade order, reshoring and multipolar world create dislocations and sector-level divergence' },
  ],
  source:{
    label:'Investment Outlook 2026 — Seeking Catalysts Amid Complexity',
    url: OUTLOOK_URLS.goldman,
    asOf:'November 2025',
    localFile: LOCAL_SOURCE_FILES.goldman,
  },
  isEstimated:false,
};

/* ── Natixis ─────────────────────────────────────────────── */
const natixisModal = {
  distributionModel: 'Multi-affiliate institutional & wholesale',
  investmentModel: 'Multi-boutique active platform',
  macroOutlook: [
    { indicator:'Global GDP Growth', view:'~3% — croissance modérée type Goldilocks', sentiment:'neutral' },
    { indicator:'US GDP Growth', view:'~2% — décélération liée aux tarifs et à l\'immigration', sentiment:'neutral' },
    { indicator:'Eurozone GDP Growth', view:'~1.2% — amélioration notable du sentiment', sentiment:'bullish' },
    { indicator:'China GDP Growth', view:'~4% — surproduction et incertitude politique', sentiment:'bearish' },
    { indicator:'Global Inflation', view:'~3% — régime plus haut que 2%', sentiment:'bearish' },
    { indicator:'US Inflation', view:'~3% — risque inflation embedded', sentiment:'bearish' },
    { indicator:'Eurozone Inflation', view:'~2% — plus prévisible', sentiment:'neutral' },
    { indicator:'Fed Policy Rate', view:'~3.5% — 1 à 2 coupes selon emploi', sentiment:'neutral' },
    { indicator:'ECB Policy Rate', view:'~2% — normalisation graduelle', sentiment:'neutral' },
  ],
  currency:{
    usd:{ stance:'bearish', comment:'Affaiblissement structurel du dollar' },
    eurUsd:'USD faible favorable à la dette EM et aux exportateurs non-US',
    deDollarization:'Yes',
  },
  scenarios:{
    base:{ probability:60, description:'Goldilocks: croissance modérée et marchés résilients', assumption:'Pas de récession US et Fed accommodante' },
    bull:{ probability:20, description:'Gains de productivité IA rapides', assumption:'Adoption IA accélère nettement les earnings' },
    bear:{ probability:20, description:'Correction 10-20% sur éclatement de bulle IA ou choc géopolitique', assumption:'Concentration excessive sur segments crowdés' },
  },
  style:{
    growthValue:'Value tilt',
    largeCap:'Small & mid-cap preference',
    sectors:['Défense','Énergie','Industriels','Small caps Europe/EM','Infrastructure IA hors MAG7'],
  },
  risks:[
    { name:'Bulle IA', severity:'High', description:'Risque de surinvestissement capex' },
    { name:'Concentration marché', severity:'High', description:'Poids excessif des mégacaps tech' },
    { name:'Géopolitique', severity:'High', description:'Premier risque cité dans les enquêtes institutionnelles' },
    { name:'Private markets overcrowding', severity:'Medium', description:'Compression des primes de risque private debt/equity' },
  ],
  source:{ label:'Navigating 2026: A Cross-Asset Outlook', url: OUTLOOK_URLS.natixis, asOf:'Outlook 2026', localFile: null },
  isEstimated:false,
};

/* ── Candriam ─────────────────────────────────────────────── */
const candriamModal = {
  distributionModel:'Institutional & Wholesale, ESG-first',
  investmentModel:'Active multi-asset with integrated SRI',
  macroOutlook:[
    { indicator:'Global GDP Growth', view:'~3% — cycle en évolution sans rupture', sentiment:'neutral' },
    { indicator:'US GDP Growth', view:'~2% — décélération modérée', sentiment:'neutral' },
    { indicator:'Eurozone GDP Growth', view:'~1.3% — recovery investment-led', sentiment:'bullish' },
    { indicator:'China GDP Growth', view:'~4.5% — rattrapage IA et manufacturing', sentiment:'bullish' },
    { indicator:'Global Inflation', view:'~2.5% — disinflation en reprise', sentiment:'neutral' },
    { indicator:'US Inflation', view:'~3% — sticky mais gérable', sentiment:'neutral' },
    { indicator:'Eurozone Inflation', view:'~2% — alignée cible BCE', sentiment:'bullish' },
    { indicator:'Fed Policy Rate', view:'~3.5% — deux coupes supplémentaires', sentiment:'neutral' },
    { indicator:'ECB Policy Rate', view:'~2% — normalisation graduelle', sentiment:'neutral' },
  ],
  currency:{
    usd:{ stance:'bearish', comment:'EUR/USD 1.15–1.20 dans le scénario central' },
    eurUsd:'Différentiel de taux plus étroit en faveur de l\'EUR',
    deDollarization:'Yes',
  },
  scenarios:{
    base:{ probability:60, description:'Cycle IA capex intact avec reprise Europe/EM', assumption:'Hyperscalers poursuivent capex soutenu' },
    bull:{ probability:20, description:'Électrification et IA accélèrent fortement', assumption:'Capacité réseau suit rapidement la demande' },
    bear:{ probability:20, description:'Correction du capex IA front-loaded', assumption:'Contraintes physiques et énergie limitent les rendements' },
  },
  style:{
    growthValue:'Growth',
    largeCap:'Small & mid-cap preference',
    sectors:['AI capex / hyperscalers','Chinese tech','Électrification / utilities / grid','Healthcare / biotech','Copper / aluminium'],
  },
  risks:[
    { name:'AI capex overinvestment', severity:'Medium', description:'Capex front-loaded potentiellement excessif' },
    { name:'Credit late cycle', severity:'Medium', description:'Asymétrie de spreads surtout en US IG' },
    { name:'US concentration risk', severity:'Medium', description:'Beta marché trop dépendante des leaders US' },
    { name:'Oil surplus', severity:'Low', description:'Excès d\'offre attendu en 2026' },
  ],
  source:{ label:'New Dynamics — An Investment Playbook for 2026', url: OUTLOOK_URLS.candriam, asOf:'Outlook 2026', localFile: null },
  isEstimated:false,
};

/* ── Lazard ───────────────────────────────────────────────── */
const lazardModal = {
  distributionModel:'Institutional',
  investmentModel:'Active fundamental bottom-up',
  macroOutlook:[
    { indicator:'Global GDP Growth', view:'~2.5% — croissance modérée', sentiment:'neutral' },
    { indicator:'US GDP Growth', view:'~1.5–2% — effets tarifs et emploi', sentiment:'bearish' },
    { indicator:'Eurozone GDP Growth', view:'~1.3% — fiscal et énergie soutiennent', sentiment:'bullish' },
    { indicator:'China GDP Growth', view:'~4% — high-tech soutenu, immobilier fragile', sentiment:'neutral' },
    { indicator:'Global Inflation', view:'~3% — inflation US plus résistante', sentiment:'neutral' },
    { indicator:'US Inflation', view:'>3% — pression tarifaire persistante', sentiment:'bearish' },
    { indicator:'Eurozone Inflation', view:'~2% — désinflation plus avancée', sentiment:'bullish' },
    { indicator:'Fed Policy Rate', view:'~3.75% — dépendante de la dynamique emploi', sentiment:'neutral' },
    { indicator:'ECB Policy Rate', view:'~2% — conditions accommodantes en ZE', sentiment:'bullish' },
  ],
  currency:{
    usd:{ stance:'bearish', comment:'Dollar plus faible favorable aux actifs non-US' },
    eurUsd:'Affaiblissement USD amplifie l\'outperformance non-US',
    deDollarization:'Partial',
  },
  scenarios:{
    base:{ probability:55, description:'Leadership hors US (Europe + EM)', assumption:'Dollar continue de se normaliser' },
    bull:{ probability:20, description:'EM boom plus marqué et surprise Europe', assumption:'Earnings EM accélèrent fortement' },
    bear:{ probability:25, description:'Ralentissement US plus sévère', assumption:'Fragilisation rapide du marché du travail US' },
  },
  style:{
    growthValue:'Value',
    largeCap:'Neutral',
    sectors:['Semi / AI supply chain Asie','Corporate reforms Japan','EM tech','European fiscal beneficiaries'],
  },
  risks:[
    { name:'US AI scrutiny', severity:'High', description:'Rythme capex IA jugé non soutenable' },
    { name:'US labor market', severity:'High', description:'Variable clé pour 2026' },
    { name:'Japan policy risk', severity:'Medium', description:'Incertitudes de politique monétaire et budgétaire' },
    { name:'China housing', severity:'Medium', description:'Crise immobilière persistante' },
  ],
  source:{ label:'Global Outlook 2026', url: OUTLOOK_URLS.lazard, asOf:'Outlook 2026', localFile: null },
  isEstimated:false,
};

/* ── Generali ─────────────────────────────────────────────── */
const generaliModal = {
  distributionModel:'Institutional, insurance-linked',
  investmentModel:'Multi-affiliate active platform',
  macroOutlook:[
    { indicator:'Global GDP Growth', view:'~3% — stable mais sans accélération', sentiment:'neutral' },
    { indicator:'US GDP Growth', view:'Potentiel stabilisé malgré ralentissement emploi', sentiment:'neutral' },
    { indicator:'Eurozone GDP Growth', view:'~1.2% — stimulus fiscal allemand', sentiment:'bullish' },
    { indicator:'China GDP Growth', view:'~4.4% — new productive forces', sentiment:'neutral' },
    { indicator:'Global Inflation', view:'~2.5% — disinflation préservée', sentiment:'neutral' },
    { indicator:'US Inflation', view:'~2.5–3% — risque sur term premia', sentiment:'neutral' },
    { indicator:'Eurozone Inflation', view:'~1.8% — sous cible BCE', sentiment:'bullish' },
    { indicator:'Fed Policy Rate', view:'~4% — une coupe attendue', sentiment:'neutral' },
    { indicator:'ECB Policy Rate', view:'~2% — BCE potentiellement on hold', sentiment:'neutral' },
  ],
  currency:{
    usd:{ stance:'bearish', comment:'Dollar encore cher, avantage de taux en érosion' },
    eurUsd:'Biais baissier USD via narrowing rate differential',
    deDollarization:'Partial',
  },
  scenarios:{
    base:{ probability:60, description:'Pro-risk modéré avec crédit et equities en soutien', assumption:'Global growth ~3% et conditions financières souples' },
    bull:{ probability:20, description:'IA et productivité surprennent positivement', assumption:'Baisse des taux plus rapide sans inflation adverse' },
    bear:{ probability:20, description:'Term premia en hausse et selloff crédit', assumption:'Inflation US sticky + risque de politisation Fed' },
  },
  style:{
    growthValue:'Neutral',
    largeCap:'Neutral',
    sectors:['IG Europe (rising stars)','EM local debt','Infrastructure / real assets','Private credit sélectif'],
  },
  risks:[
    { name:'Fed independence', severity:'High', description:'Risque de politisation monétaire en 2026' },
    { name:'AI bubble / private credit cracks', severity:'High', description:'Choc simultané sur valorisations et crédit privé' },
    { name:'US fiscal dominance', severity:'High', description:'Déficits persistants et hausse de la charge de dette' },
    { name:'Trade fragmentation', severity:'Medium', description:'Trêves géopolitiques fragiles' },
  ],
  source:{ label:'Outlook 2026 — Mania, No Panic', url: OUTLOOK_URLS.generali, asOf:'December 2026', localFile: LOCAL_SOURCE_FILES.generali },
  isEstimated:false,
};

/* ── Eurizon ──────────────────────────────────────────────── */
const eurizonModal = {
  distributionModel:'Institutional & Retail (Intesa Sanpaolo)',
  investmentModel:'Active multi-asset, macro research-led',
  macroOutlook:[
    { indicator:'Global GDP Growth', view:'~3% — cycle global sans rupture', sentiment:'neutral' },
    { indicator:'US GDP Growth', view:'~2% — ralentissement ordonné', sentiment:'neutral' },
    { indicator:'Eurozone GDP Growth', view:'~1.2% — soutien défense et infrastructure', sentiment:'bullish' },
    { indicator:'China GDP Growth', view:'~4% — contribution stable', sentiment:'neutral' },
    { indicator:'Global Inflation', view:'~2.5% — trajectoire en repli', sentiment:'bullish' },
    { indicator:'US Inflation', view:'~2.5–3% — modération graduelle', sentiment:'neutral' },
    { indicator:'Eurozone Inflation', view:'~2% — proche cible', sentiment:'bullish' },
    { indicator:'Fed Policy Rate', view:'~3% — poursuite de la normalisation', sentiment:'neutral' },
    { indicator:'ECB Policy Rate', view:'~2% — normalisation progressive', sentiment:'neutral' },
  ],
  currency:{
    usd:{ stance:'bearish', comment:'Rotation structurelle vers Europe et EM' },
    eurUsd:'Dollar faible accompagne la rotation géographique',
    deDollarization:'Partial',
  },
  scenarios:{
    base:{ probability:65, description:'Cycle global poursuivi, volatilité contenue', assumption:'Fed vers 3% et relais fiscal européen' },
    bull:{ probability:20, description:'Europe surprend à la hausse', assumption:'Meilleure exécution des plans défense/infra' },
    bear:{ probability:15, description:'AI selloff et corrélation risk-off', assumption:'Forte correction tech US' },
  },
  style:{
    growthValue:'Value tilt',
    largeCap:'Neutral',
    sectors:['Défense Europe','Infrastructure','EM diversifiés','Obligations souveraines ZE'],
  },
  risks:[
    { name:'Correction tech US', severity:'Medium', description:'Risque de contagion cross-asset' },
    { name:'Visibilité macro US', severity:'Medium', description:'Qualité des signaux dégradée post-shutdown' },
    { name:'Géopolitique MENA', severity:'Medium', description:'Risque d\'élargissement régional' },
    { name:'Exécution fiscale ZE', severity:'Low', description:'Risque de retard sur les plans annoncés' },
  ],
  source:{ label:'The Globe — Outlook 2026', url: OUTLOOK_URLS.eurizon, asOf:'Outlook 2026', localFile: null },
  isEstimated:false,
};

/* ══════════════════════════════════════════════════════════
  17 COMPETITORS
   Tier 1 (3): BlackRock · J.P. Morgan AM · Goldman Sachs AM
   Tier 2 (5): Amundi · BNP Paribas AM · Allianz GI · DWS · Natixis IM
  Tier 3 (9): Pictet · Lombard Odier · Candriam · Carmignac ·
                Flossbach vS · Robeco · Lazard AM · Eurizon · Generali
   ══════════════════════════════════════════════════════════ */
const _competitors = [

  /* ── TIER 1 — GLOBAL MACRO REFERENCE ── */
  {
    id:'blackrock', name:'BlackRock', fullName:'BlackRock Investment Management',
    tier:1, stance:'Cautious-Offensive', aum:'~€11.5tn',
    markets:['FR','DE','CH','IT','ES'], outlookTitle:'Global Investment Outlook 2026',
    positioning:{ equityUS:'N', equityEurope:'OW', equityEM:'N', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'N', fixedEMBonds:'N', duration:'N', gold:'OW', oil:'UW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'2.0%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.50%', label:'Cautious approach',     sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Gradual easing',        sentiment:'neutral' },
    },
    themes:['AI infrastructure secular growth','Geopolitical hedging via alternatives','Private markets expansion','European fiscal revival'],
    contrarian:'Bonds no longer reliable diversifiers — new macro regime requires portfolio rethink',
  },
  {
    id:'jpmorgan', name:'J.P. Morgan AM', fullName:'J.P. Morgan Asset Management',
    tier:1, stance:'Risk-On', aum:'~$4tn',
    stanceDetail:'Stay on the risk train — fuel still being added to the engine',
    markets:['FR','DE','CH','IT','ES'], outlookTitle:'Investment Outlook 2026 — Fuel in the Engine',
    tagline:'Remain on the Risk Train While Fuel Is Still Being Added to Its Engine',
    positioning:{ equityUS:'OW', equityEurope:'OW', equityEM:'OW', equityJapan:'OW',
      fixedIG:'N', fixedHY:'OW', fixedEMBonds:'N', duration:'N', gold:'OW', oil:'UW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'~2.0%',  label:'Tariff headwinds offset by fiscal support',            sentiment:'neutral' },
      ezGDP:          { value:'~1.1%',  label:'Germany fiscal stimulus feeds through H1 2026',        sentiment:'bullish' },
      chinaGDP:       { value:'~4.5%',  label:'Export-led; rare earth & EV supply chains key',        sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Sticky — tariffs pass-through to consumers in H1',     sentiment:'bearish' },
      fed:            { value:'~3.25%', label:'Fed independence risk from May Powell departure',       sentiment:'neutral' },
      ecb:            { value:'~1.75%', label:'Continued easing, credit supportive',                  sentiment:'bullish' },
    },
    themes:['European banks & fiscal beneficiaries','GRANOLAS as AI-sentiment hedge','Japan Sanaenomics + corporate reforms','EM TA/KR rate-sensitive cyclicals','Private markets maturing — PE + credit'],
    contrarian:'Fed independence risk in May 2026 most underpriced tail risk — USD could suffer most acutely',
  },
  {
    id:'goldman', name:'Goldman Sachs AM', fullName:'Goldman Sachs Asset Management',
    tier:1, stance:'Risk-On', aum:'~$3tn',
    stanceDetail:'Seeking catalysts amid complexity — broadening bull market',
    markets:['FR','DE','CH','IT','ES'], outlookTitle:'Investment Outlook 2026 — Seeking Catalysts Amid Complexity',
    tagline:'Active, Disciplined Investing — Pinpoint Catalysts Across Public and Private Markets',
    positioning:{ equityUS:'OW', equityEurope:'OW', equityEM:'OW', equityJapan:'OW',
      fixedIG:'N', fixedHY:'OW', fixedEMBonds:'OW', duration:'N', gold:'N', oil:'N', alternatives:'OW' },
    macro:{
      usGDP:          { value:'~2.5%',  label:'Above consensus — market pricing ~1.7%, GSAM forecasts 2.5%', sentiment:'bullish' },
      ezGDP:          { value:'~1.2%',  label:'German fiscal + reindustrialisation narrow GDP gap vs US',    sentiment:'bullish' },
      chinaGDP:       { value:'~4.8%',  label:'Manufacturing + export resilience; consumer still fragile',   sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Normalising; next cycle = higher inflation structurally',      sentiment:'neutral' },
      fed:            { value:'~3.25%', label:'50bps cuts in 2026; new Chair potentially more dovish',        sentiment:'bullish' },
      ecb:            { value:'~1.75%', label:'Continuing easing cycle',                                      sentiment:'bullish' },
    },
    themes:['Broadening bull market — tech + cyclicals + international','EM & Japan re-rating on soft USD','AI infrastructure capex — $540bn hyperscaler spend','European reindustrialisation + defence','High yield and EM debt income'],
    contrarian:'US growth ~2.5% meaningfully above market pricing of ~1.7% — bond and equity markets both underestimating US resilience',
  },

  /* ── TIER 2 — LARGE EUROPEAN COMPETITORS ── */
  {
    id:'amundi', name:'Amundi', fullName:'Amundi Asset Management',
    tier:2, stance:'Risk-On', aum:'~€2.2tn',
    markets:['FR','DE','IT','ES'], outlookTitle:'Investment Outlook 2026',
    positioning:{ equityUS:'UW', equityEurope:'OW', equityEM:'N', equityJapan:'UW',
      fixedIG:'OW', fixedHY:'UW', fixedEMBonds:'N', duration:'OW', gold:'N', oil:'UW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'1.9%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'1.3%',   label:'Fiscal impulse',        sentiment:'bullish' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.50%', label:'Gradual normalisation', sentiment:'neutral' },
      ecb:            { value:'~1.75%', label:'Continued easing',      sentiment:'bullish' },
    },
    themes:['AI rotation — hype to fundamentals','Japan reflation & reform','China consumer recovery','Long duration vs consensus'],
    contrarian:'Chinese tech at 15x P/E vs Mag7 at 30x — relative value case dismissed too quickly by consensus',
  },
  {
    id:'bnpp', name:'BNP Paribas AM', fullName:'BNP Paribas Asset Management',
    tier:2, stance:'Defensive', aum:'~€560bn',
    note:'BNP Paribas AM absorbed AXA Investment Managers in December 2025.',
    markets:['FR','DE','IT','ES'], outlookTitle:'Investment Outlook 2026',
    positioning:{ equityUS:'OW', equityEurope:'OW', equityEM:'UW', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'N', fixedEMBonds:'N', duration:'OW', gold:'OW', oil:'OW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'0.5%',   label:'Stagnation risk',       sentiment:'bearish' },
      chinaGDP:       { value:'4.2%',   label:'Structural slowdown',   sentiment:'bearish' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.50%', label:'One cut remaining',     sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Cautious easing path',  sentiment:'neutral' },
    },
    themes:['Japan reflation & reform','Healthcare innovation','Commodity super-cycle','EM local currency bonds'],
    contrarian:'Fed will cut more than market expects — employment focus supersedes inflation concern',
  },
  {
    id:'allianz', name:'Allianz GI', fullName:'Allianz Global Investors',
    tier:2, stance:'Selective Risk-On', aum:'~€560bn',
    markets:['DE','FR','IT','ES'], outlookTitle:'Navigate New Pathways 2026',
    positioning:{ equityUS:'OW', equityEurope:'N', equityEM:'N', equityJapan:'N',
      fixedIG:'OW', fixedHY:'UW', fixedEMBonds:'UW', duration:'UW', gold:'UW', oil:'N', alternatives:'UW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.25%', label:'Two cuts ahead',        sentiment:'bullish' },
      ecb:            { value:'~1.75%', label:'Easing on track',       sentiment:'bullish' },
    },
    themes:['Cautious optimism — navigate new pathways','AI rotation — hype to fundamentals','Defence & security spending','Commodity super-cycle'],
    contrarian:'OW European banks vs tech consensus',
  },
  {
    id:'dws', name:'DWS', fullName:'DWS Group',
    tier:2, stance:'Cautious-Offensive', aum:'~€900bn',
    markets:['DE','FR','IT','ES'], outlookTitle:'CIO Outlook 2026 — Rational Exuberance',
    positioning:{ equityUS:'N', equityEurope:'OW', equityEM:'OW', equityJapan:'N',
      fixedIG:'N', fixedHY:'UW', fixedEMBonds:'OW', duration:'UW', gold:'N', oil:'UW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'1.8%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.50%', label:'On hold',               sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Cautious easing',       sentiment:'neutral' },
    },
    themes:['China consumer recovery','Green capex & energy transition','Small-cap value revival','S&P 500 target 7500'],
    contrarian:'S&P 500 target 7500 — rational exuberance still has legs; calls EUR parity risk',
  },
  {
    id:'natixis', name:'Natixis IM', fullName:'Natixis Investment Managers',
    tier:2, stance:'Cautious-Offensive', aum:'~€1tn',
    stanceDetail:'Normalisation + Goldilocks de retour — discipline et sélectivité',
    markets:['FR','DE','IT','ES'], outlookTitle:'Navigating 2026: A Cross-Asset Outlook',
    tagline:'Normalization is the Story — Volatility Ebbs, Opportunity Favors the Selective',
    positioning:{ equityUS:'N', equityEurope:'OW', equityEM:'OW', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'N', fixedEMBonds:'OW', duration:'N', gold:'OW', oil:'N', alternatives:'OW' },
    macro:{
      usGDP:          { value:'~2%',   label:'Décélération, impact tarifs et immigration',          sentiment:'neutral' },
      ezGDP:          { value:'~1.2%', label:'Amélioration marquée du sentiment européen',          sentiment:'bullish' },
      chinaGDP:       { value:'~4%',   label:'Surproduction et faible confiance privée',            sentiment:'bearish' },
      globalInflation:{ value:'~3%',   label:'Structurellement au-dessus de 2%',                   sentiment:'bearish' },
      fed:            { value:'~3.5%', label:'1-2 coupes selon risque emploi',                      sentiment:'neutral' },
      ecb:            { value:'~2%',   label:'Normalisation graduelle',                             sentiment:'neutral' },
    },
    themes:['Reinvestment trends > macro signals','Tech broadening (hors MAG7)','Défense & énergie','Gold & métaux précieux','EM local debt'],
    contrarian:'Inflation structurellement ancrée à ~3% — les marchés obligataires sous-estiment ce régime',
  },

  /* ── TIER 3 — TRUE PEERS ── */
  {
    id:'pictet', name:'Pictet AM', fullName:'Pictet Asset Management',
    tier:3, stance:'Opportunistic', aum:'~€260bn',
    markets:['CH','FR','DE','IT'], outlookTitle:'Annual Outlook 2026',
    positioning:{ equityUS:'UW', equityEurope:'OW', equityEM:'N', equityJapan:'UW',
      fixedIG:'UW', fixedHY:'N', fixedEMBonds:'OW', duration:'N', gold:'N', oil:'OW', alternatives:'UW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'0.5%',   label:'Stagnation risk',       sentiment:'bearish' },
      chinaGDP:       { value:'4.2%',   label:'Structural slowdown',   sentiment:'bearish' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.75%', label:'Only 1 cut — higher for longer',  sentiment:'bearish' },
      ecb:            { value:'~2.00%', label:'Measured pace',         sentiment:'neutral' },
    },
    themes:['Credit spread compression','Commodity super-cycle','Defence & security spending','Sweet spot +5% equity returns'],
    contrarian:'Fed delivers only 1 cut to 3.75% — more restrictive than consensus expects',
  },
  {
    id:'lombard', name:'Lombard Odier', fullName:'Lombard Odier Investment Managers',
    tier:3, stance:'Defensive', aum:'~€300bn',
    markets:['CH','FR','IT'], outlookTitle:'CIO Outlook 2026',
    positioning:{ equityUS:'OW', equityEurope:'OW', equityEM:'OW', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'N', fixedEMBonds:'OW', duration:'N', gold:'N', oil:'N', alternatives:'UW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.75%', label:'Higher for longer',     sentiment:'bearish' },
      ecb:            { value:'~2.25%', label:'Inflation risk lingers', sentiment:'bearish' },
    },
    themes:['European fiscal expansion trade','Deglobalisation & reshoring','Private credit over HY'],
    contrarian:'Strong USD persistence view — diverges from the broad bearish dollar consensus',
  },
  {
    id:'candriam', name:'Candriam', fullName:'Candriam',
    tier:3, stance:'Cautious-Offensive', aum:'~€150bn',
    stanceDetail:'Constructif mais discriminant — le cycle évolue, ne s\'arrête pas',
    markets:['FR','DE','IT','ES'], outlookTitle:'New Dynamics — An Investment Playbook for 2026',
    tagline:'The Cycle is Evolving, Not Ending — Returns Depend on Quality of Decisions',
    positioning:{ equityUS:'N', equityEurope:'OW', equityEM:'OW', equityJapan:'OW',
      fixedIG:'N', fixedHY:'UW', fixedEMBonds:'OW', duration:'N', gold:'OW', oil:'UW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'~2%',   label:'Décélération modérée, impact tarifs en reflux',       sentiment:'neutral' },
      ezGDP:          { value:'~1.3%', label:'Recovery investment-led en Europe',                    sentiment:'bullish' },
      chinaGDP:       { value:'~4.5%', label:'Accélération IA pragmatique et manufacturing avancé', sentiment:'bullish' },
      globalInflation:{ value:'~2.5%', label:'Disinflation en reprise vers neutralité monétaire',   sentiment:'neutral' },
      fed:            { value:'~3.5%', label:'2 coupes supplémentaires attendues',                  sentiment:'neutral' },
      ecb:            { value:'~2%',   label:'Normalisation graduelle vers neutre',                 sentiment:'neutral' },
    },
    themes:['AI capex super-cycle','Electrification bottleneck','Chinese tech diversifier','Healthcare / biotech','Autonomie stratégique Europe'],
    contrarian:'La Chine IA n\'est qu\'à ~18 mois des US et réduit l\'écart plus vite que le consensus',
  },
  {
    id:'carmignac', name:'Carmignac', fullName:'Carmignac Gestion',
    tier:3, stance:'Balanced', aum:'~€40bn',
    markets:['FR','DE','IT','ES'], outlookTitle:'AI, Guns and Butter — Investment Outlook 2026',
    positioning:{ equityUS:'OW', equityEurope:'UW', equityEM:'UW', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'OW', fixedEMBonds:'UW', duration:'N', gold:'N', oil:'N', alternatives:'OW' },
    macro:{
      usGDP:          { value:'1.9%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'0.5%',   label:'Stagnation risk',       sentiment:'bearish' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.50%', label:'Wait and see',          sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Cautious easing',       sentiment:'neutral' },
    },
    themes:['Late-cycle barbell (AI + defence + bonds)','Selective EM exposure','Quality over growth','Duration extension on rate cuts'],
    contrarian:'Short long-dated govts US/UK/JP/FR — term premia structurally underpriced',
  },
  {
    id:'flossbach', name:'Flossbach vS', fullName:'Flossbach von Storch',
    tier:3, stance:'Risk-On', aum:'~€70bn',
    markets:['DE','CH','FR'], outlookTitle:'Capital Market Outlook 2026',
    positioning:{ equityUS:'UW', equityEurope:'N', equityEM:'OW', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'N', fixedEMBonds:'OW', duration:'OW', gold:'N', oil:'OW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'1.3%',   label:'Fiscal impulse',        sentiment:'bullish' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.25%', label:'Two cuts expected',     sentiment:'bullish' },
      ecb:            { value:'~1.75%', label:'Supportive easing',     sentiment:'bullish' },
    },
    themes:['Quality factor tilt','Gold as core holding','European fiscal expansion trade'],
    contrarian:'Most bullish on gold among all peers — structural de-dollarisation core conviction',
  },
  {
    id:'robeco', name:'Robeco', fullName:'Robeco',
    tier:3, stance:'Opportunistic', aum:'~€180bn',
    markets:['FR','DE','CH','IT','ES'], outlookTitle:'Synchronized Shift — Global Outlook 2026',
    positioning:{ equityUS:'UW', equityEurope:'OW', equityEM:'N', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'UW', fixedEMBonds:'N', duration:'UW', gold:'N', oil:'UW', alternatives:'UW' },
    macro:{
      usGDP:          { value:'1.4%',   label:'Below trend — most bearish on US growth', sentiment:'bearish' },
      ezGDP:          { value:'1.3%',   label:'Fiscal impulse',        sentiment:'bullish' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.50%', label:'Cautious cut path',     sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Gradual easing',        sentiment:'neutral' },
    },
    themes:['Quality factor tilt','Deglobalisation & reshoring','EM local currency bonds','Buy the dips — synchronized shift'],
    contrarian:'Private debt = systemic risk — most explicit warning on private credit among peers',
  },
  {
    id:'lazard', name:'Lazard AM', fullName:'Lazard Asset Management',
    tier:3, stance:'Defensive', aum:'~€200bn',
    stanceDetail:'Shifting market leadership — fin de l\'US exceptionalism',
    markets:['FR','DE','IT'], outlookTitle:'Global Outlook 2026',
    tagline:'Shifting Market Leadership — Non-US Opportunities Build on 2025 Outperformance',
    positioning:{ equityUS:'UW', equityEurope:'OW', equityEM:'OW', equityJapan:'OW',
      fixedIG:'N', fixedHY:'N', fixedEMBonds:'OW', duration:'N', gold:'N', oil:'N', alternatives:'N' },
    macro:{
      usGDP:          { value:'~1.5–2%', label:'Tarifs et emploi fragilisent le momentum',  sentiment:'bearish' },
      ezGDP:          { value:'~1.3%',   label:'Énergie plus basse + expansion fiscale',    sentiment:'bullish' },
      chinaGDP:       { value:'~4%',     label:'Tech soutenue, immobilier encore en crise', sentiment:'neutral' },
      globalInflation:{ value:'~3%',     label:'Core US poussée par tarifs',                sentiment:'neutral' },
      fed:            { value:'~3.75%',  label:'Sensibilité élevée au marché du travail',   sentiment:'neutral' },
      ecb:            { value:'~2%',     label:'Accommodante pour soutenir la zone euro',   sentiment:'bullish' },
    },
    themes:['Non-US leadership','EM — meilleure fenêtre en 10 ans','Dollar faible structurel','Japan corporate reforms','Selective active over passive'],
    contrarian:'Le rythme de contribution IA US observé en 2025 n\'est pas soutenable en 2026 — IA a tiré 2/3 croissance US H1 2025',
  },
  {
    id:'eurizon', name:'Eurizon', fullName:'Eurizon Capital',
    tier:3, stance:'Selective Risk-On', aum:'~€400bn',
    stanceDetail:'Pro-risk prudent — rotation Europe et EM',
    markets:['IT','FR','DE'], outlookTitle:'The Globe — Outlook 2026',
    tagline:'Stable Growth, Low Volatility — Equities Rotate, Bonds Anchor Portfolios',
    positioning:{ equityUS:'N', equityEurope:'OW', equityEM:'OW', equityJapan:'N',
      fixedIG:'OW', fixedHY:'N', fixedEMBonds:'OW', duration:'N', gold:'N', oil:'N', alternatives:'N' },
    macro:{
      usGDP:          { value:'~2%',   label:'Décélération mais consommation encore solide',       sentiment:'neutral' },
      ezGDP:          { value:'~1.2%', label:'Défense/infrastructure en soutien',                  sentiment:'bullish' },
      chinaGDP:       { value:'~4%',   label:'Contribution stable au cycle global',                sentiment:'neutral' },
      globalInflation:{ value:'~2.5%', label:'Repli progressif de l\'inflation',                    sentiment:'bullish' },
      fed:            { value:'~3%',   label:'Poursuite de la normalisation',                      sentiment:'neutral' },
      ecb:            { value:'~2%',   label:'Normalisation continue',                             sentiment:'neutral' },
    },
    themes:['Rotation Europe/EM vs Tech US','Obligations comme ancre','Défense et infrastructure ZE','Crédit sélectif'],
    contrarian:'La rotation hors tech US n\'est pas terminée — encore du chemin pour Europe et EM',
  },
  {
    id:'generali', name:'Generali Inv.', fullName:'Generali Investments / Generali Asset Management',
    tier:3, stance:'Selective Risk-On', aum:'~€600bn',
    stanceDetail:'Moderately pro-risk — Crédit et Equités > Govies et Cash',
    markets:['IT','FR','DE','ES'], outlookTitle:'Key Investment Themes 2026',
    tagline:'Steady Growth, Smart Diversification — Real Assets and Selectivity Rule',
    positioning:{ equityUS:'N', equityEurope:'OW', equityEM:'OW', equityJapan:'N',
      fixedIG:'OW', fixedHY:'N', fixedEMBonds:'OW', duration:'UW', gold:'N', oil:'N', alternatives:'OW' },
    macro:{
      usGDP:          { value:null,     label:'Potentiel stabilisé malgré ralentissement emploi',   sentiment:'neutral' },
      ezGDP:          { value:'~1.2%',  label:'Stimulus allemand en soutien',                       sentiment:'bullish' },
      chinaGDP:       { value:'~4.4%',  label:'New productive forces et manufacturing avancé',      sentiment:'neutral' },
      globalInflation:{ value:'~2.5%',  label:'Disinflation globale préservée',                     sentiment:'neutral' },
      fed:            { value:'~4%',    label:'Une seule coupe attendue',                           sentiment:'neutral' },
      ecb:            { value:'~2%',    label:'BCE potentiellement on hold',                        sentiment:'neutral' },
    },
    themes:['Fragmentation géopolitique','IA + capex','Actifs réels et private markets','Souveraineté industrielle Europe','EM credit / local debt carry'],
    contrarian:'Hedge crédit préféré : iTraxx Subordinated Financials pour couvrir un spread widening',
  },
];

/* ── Modal lookup map ─────────────────────────────────────── */
const MODAL_OVERRIDES = {
  jpmorgan: jpmorganModal,
  goldman:  goldmanModal,
  amundi:   amundiModal,
  allianz:  allianzModal,
  dws:      dwsModal,
  natixis:  natixisModal,
  candriam: candriamModal,
  lazard:   lazardModal,
  generali: generaliModal,
  eurizon:  eurizonModal,
};

const SOURCED_MODAL_META = {
  blackrock: {
    label: 'Investment Directions 2026: Exposures for today’s markets',
    url: OUTLOOK_URLS.blackrock,
    asOf: '2026 outlook',
    localFile: LOCAL_SOURCE_FILES.blackrock,
  },
  bnpp: {
    label: 'The Investment Outlook for 2026 — The Shifting Investment Landscape',
    url: OUTLOOK_URLS.bnpp,
    asOf: '2026 outlook',
    localFile: LOCAL_SOURCE_FILES.bnpp,
  },
  allianz: {
    label: 'Navigate new pathways — Outlook 2026',
    url: OUTLOOK_URLS.allianz,
    asOf: '2026 outlook',
    localFile: LOCAL_SOURCE_FILES.allianz,
  },
  dws: {
    label: 'Infrastructure Strategic Outlook 2026',
    url: OUTLOOK_URLS.dws,
    asOf: 'January 2026',
    localFile: LOCAL_SOURCE_FILES.dws,
  },
  lombard: {
    label: '2026 investment outlook — Striking a new balance',
    url: OUTLOOK_URLS.lombard,
    asOf: 'December 2025',
    localFile: LOCAL_SOURCE_FILES.lombard,
  },
  carmignac: {
    label: 'Carmignac Perspectives 2026 — L\'Art de la fugue',
    url: OUTLOOK_URLS.carmignac,
    asOf: 'December 2025',
    localFile: LOCAL_SOURCE_FILES.carmignac,
  },
  flossbach: {
    label: 'Flossbach von Storch — Multiple Opportunities II (Factsheet)',
    url: OUTLOOK_URLS.flossbach,
    asOf: 'February 2026',
    localFile: LOCAL_SOURCE_FILES.flossbach,
  },
  robeco: {
    label: '2026 Investment Outlook — The synchronized shift',
    url: OUTLOOK_URLS.robeco,
    asOf: 'November 2025',
    localFile: LOCAL_SOURCE_FILES.robeco,
  },
  generali: {
    label: 'Outlook 2026 — Mania, No Panic',
    url: OUTLOOK_URLS.generali,
    asOf: 'December 2026',
    localFile: LOCAL_SOURCE_FILES.generali,
  },
};

/* ── Attach modal data & outlookUrl ───────────────────────── */
export const COMPETITORS = _competitors.map(firm => {
  const sourcedMeta = SOURCED_MODAL_META[firm.id];
  const modalBase = MODAL_OVERRIDES[firm.id] || (sourcedMeta ? buildSourcedModal(firm, sourcedMeta) : buildContextualModal(firm));
  const preferredOutlookUrl = getPreferredOutlookUrl(firm.id);
  const normalizedSources = (modalBase.sources || (modalBase.source ? [modalBase.source] : [])).map((src) => ({
    ...src,
    url: preferredOutlookUrl || src.url || null,
  }));
  return {
    ...firm,
    outlookUrl: preferredOutlookUrl,
    modal: {
      ...modalBase,
      sources: normalizedSources,
      source: {
        ...(modalBase.source || normalizedSources[0] || {}),
        url: preferredOutlookUrl || modalBase.source?.url || normalizedSources[0]?.url || null,
      },
    },
  };
});

/* ── Grouped helpers ──────────────────────────────────────── */
export const TIER1_FIRMS = COMPETITORS.filter(f => f.tier === 1);
export const TIER2_FIRMS = COMPETITORS.filter(f => f.tier === 2);
export const TIER3_FIRMS = COMPETITORS.filter(f => f.tier === 3);
export const ALL_FIRMS   = [EDRAM, ...COMPETITORS];

/* IDs used across tabs to flag closest peers */
export const TRUE_PEER_IDS = TIER3_FIRMS.map(f => f.id);

/* ── Consensus vs EdRAM (hardcoded) ──────────────────────── */
export const CONSENSUS_ASSET = [
  { label:'Equities US',      edram:'N',  street:'OW', aligned:false },
  { label:'Equities Europe',  edram:'OW', street:'OW', aligned:true  },
  { label:'Equities EM',      edram:'OW', street:'N',  aligned:false },
  { label:'Equities Japan',   edram:'OW', street:'OW', aligned:true  },
  { label:'Fixed Income IG',  edram:'OW', street:'OW', aligned:true  },
  { label:'Fixed Income HY',  edram:'N',  street:'N',  aligned:true  },
  { label:'FI EM Bonds',      edram:'OW', street:'OW', aligned:true  },
  { label:'Duration',         edram:'UW', street:'OW', aligned:false },
  { label:'Gold',             edram:'OW', street:'N',  aligned:false },
  { label:'Oil',              edram:'N',  street:'N',  aligned:true  },
  { label:'Alternatives',     edram:'N',  street:'OW', aligned:false },
];

export const CONSENSUS_MACRO = [
  { label:'US GDP Growth 2026',       edram:'Neutral',  street:'Bearish',  aligned:false },
  { label:'Eurozone GDP Growth 2026', edram:'Bullish',  street:'Bearish',  aligned:false },
  { label:'China GDP Growth 2026',    edram:'Neutral',  street:'Bullish',  aligned:false },
  { label:'Global Inflation',         edram:'Bearish',  street:'Neutral',  aligned:false },
  { label:'Fed Terminal Rate',        edram:'Neutral',  street:'Neutral',  aligned:true  },
  { label:'ECB Terminal Rate',        edram:'Bullish',  street:'Neutral',  aligned:false },
  { label:'EUR/USD Direction',        edram:'Bullish',  street:'Bullish',  aligned:true  },
  { label:'EM Outlook',               edram:'Bullish',  street:'Neutral',  aligned:false },
];

/* ── Risk Radar (Tab 5) ───────────────────────────────────── */
export const RISK_RADAR = [
  { risk:'AI Bubble / Valuation Risk', edramLevel:'High',   consensusLevel:'Low-Medium', note:'EdRAM issues explicit dot-com parallel warning',  aligned:false },
  { risk:'Geopolitical Risk',          edramLevel:'Medium', consensusLevel:'High',       note:'Consensus more concerned than EdRAM',               aligned:false },
  { risk:'Fiscal Deficit Risk',        edramLevel:'High',   consensusLevel:'Medium',     note:'EdRAM flags US deficit at -7% of GDP',              aligned:false },
  { risk:'Liquidity Risk',             edramLevel:'Medium', consensusLevel:'Low',        note:'EdRAM concerned re: private credit opacity',        aligned:false },
  { risk:'Financial Stability Risk',   edramLevel:'Medium', consensusLevel:'Low',        note:'Divergent concern on leverage build-up',            aligned:false },
  { risk:'USD Regime Change Risk',     edramLevel:'High',   consensusLevel:'Low',        note:'EdRAM operates 3-scenario USD framework',          aligned:false },
];
