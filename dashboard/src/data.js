/* ════════════════════════════════════════════════════════════
   EdRAM Competitive Intelligence Dashboard — Data Layer v2
   3-tier peer structure · 19 competitors · modal data
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

/* ── Outlook source URLs (public research pages) ─────────── */
export const OUTLOOK_URLS = {
  edram: 'https://www.edmond-de-rothschild.com/en/asset-management/insights',
  blackrock: 'https://www.blackrock.com/institutions/en-us/insights',
  jpmorgan: 'https://am.jpmorgan.com/us/en/asset-management/adv/insights/ltcma/',
  goldman: 'https://www.gsam.com/content/gsam/us/en/advisors/market-insights.html',
  amundi: 'https://research-center.amundi.com/',
  bnpp: 'https://www.bnpparibas-am.com/en/insights/',
  axa: 'https://www.axa-im.com/our-thinking',
  allianz: 'https://www.allianzgi.com/en/insights/outlook-and-commentary',
  dws: 'https://www.dws.com/en-gb/insights/cio-view/',
  natixis: 'https://www.im.natixis.com/en-intl/insights',
  pictet: 'https://www.am.pictet/en/global/insights',
  lombard: 'https://am.lombardodier.com/home/insights.html',
  candriam: 'https://www.candriam.com/en/professional/market-insights/',
  dnca: 'https://www.dnca-investments.com/en/insights',
  carmignac: 'https://www.carmignac.com/en-gb/insights',
  flossbach: 'https://www.flossbachvonstorch.com/en/insights/',
  robeco: 'https://www.robeco.com/en-int/insights',
  lazard: 'https://www.lazardassetmanagement.com/us/en_us/research-insights',
  eurizon: 'https://www.eurizoncapital.com/en/insights/',
  generali: 'https://www.generali-investments.com/global/en/institutional/our-views',
};

/* ── EdRAM Benchmark ─────────────────────────────────────── */
export const EDRAM = {
  id:'edram', name:'EdRAM', fullName:'Edmond de Rothschild Asset Management',
  isBenchmark:true, aum:'~€84bn', markets:['FR','DE','CH','IT','ES'],
  stance:'Cautious-Offensive', outlookTitle:'Cautious Optimism — Diversification & Resilience',
  outlookUrl: OUTLOOK_URLS.edram,
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
      url: OUTLOOK_URLS[firm.id] || null,
      asOf: '2026 Outlook cycle',
    },
    isEstimated:true,
  };
}

/* ── Amundi real modal data ───────────────────────────────── */
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
  },
  isEstimated:false,
};

/* ── 19 Competitors ────────────────────────────────────────── */
const _competitors = [
  /* ── TIER 1 — GLOBAL MACRO LEADERS ── */
  {
    id:'blackrock', name:'BlackRock', fullName:'BlackRock Investment Management',
    tier:1, stance:'Cautious-Offensive', aum:'~€10tn',
    markets:['FR','DE','CH','IT','ES'], outlookTitle:'Global Investment Outlook',
    positioning:{ equityUS:'N',  equityEurope:'OW', equityEM:'N',  equityJapan:'OW',
      fixedIG:'OW', fixedHY:'N',  fixedEMBonds:'N',  duration:'N',  gold:'OW', oil:'UW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'2.0%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.50%', label:'Cautious approach',     sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Gradual easing',        sentiment:'neutral' },
    },
    themes:['AI infrastructure secular growth','Geopolitical hedging via alternatives','Private markets expansion'],
    contrarian:'Most constructive on US equities despite concentration risk',
  },
  {
    id:'jpmorgan', name:'J.P. Morgan AM', fullName:'J.P. Morgan Asset Management',
    tier:1, stance:'Risk-On', aum:'~€2.5tn',
    markets:['FR','DE','CH','IT','ES'], outlookTitle:'Long-Term Capital Market Assumptions',
    positioning:{ equityUS:'OW', equityEurope:'OW', equityEM:'N',  equityJapan:'OW',
      fixedIG:'N',  fixedHY:'OW', fixedEMBonds:'N',  duration:'OW', gold:'N',  oil:'N',  alternatives:'OW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'1.1%',   label:'Improving outlook',     sentiment:'bullish' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.25%', label:'Two cuts expected',      sentiment:'bullish' },
      ecb:            { value:'~1.75%', label:'Continued easing',      sentiment:'bullish' },
    },
    themes:['Diversification beyond US mega-cap','Alternatives allocation expansion','EM local currency bonds'],
    contrarian:'More optimistic on Japan reflation than European peers',
  },
  {
    id:'goldman', name:'Goldman Sachs AM', fullName:'Goldman Sachs Asset Management',
    tier:1, stance:'Risk-On', aum:'~€2.3tn',
    markets:['FR','DE','CH','IT','ES'], outlookTitle:'Global Macro Outlook',
    positioning:{ equityUS:'OW', equityEurope:'OW', equityEM:'OW', equityJapan:'N',
      fixedIG:'N',  fixedHY:'OW', fixedEMBonds:'N',  duration:'UW', gold:'OW', oil:'N',  alternatives:'N' },
    macro:{
      usGDP:          { value:'2.3%',   label:'Above trend',           sentiment:'bullish' },
      ezGDP:          { value:'1.2%',   label:'Improving trajectory',  sentiment:'bullish' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.25%', label:'Rate cuts ahead',        sentiment:'bullish' },
      ecb:            { value:'~1.75%', label:'Continuing easing',     sentiment:'bullish' },
    },
    themes:['US equity resilience and AI tailwind','Commodity demand super-cycle','Global trade normalisation'],
    contrarian:'Expects US exceptionalism to persist well into 2027',
  },

  /* ── TIER 2 — LARGE EUROPEAN COMPETITORS ── */
  {
    id:'amundi', name:'Amundi', fullName:'Amundi Asset Management',
    tier:2, stance:'Risk-On', aum:'~€2tn',
    markets:['FR','DE','IT','ES'], outlookTitle:'Investment Outlook',
    positioning:{ equityUS:'UW', equityEurope:'OW', equityEM:'N',  equityJapan:'UW',
      fixedIG:'OW', fixedHY:'UW', fixedEMBonds:'N',  duration:'OW', gold:'N',  oil:'UW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'1.9%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'1.3%',   label:'Fiscal impulse',        sentiment:'bullish' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.50%', label:'Gradual normalisation',  sentiment:'neutral' },
      ecb:            { value:'~1.75%', label:'Continued easing',      sentiment:'bullish' },
    },
    themes:['AI rotation — hype to fundamentals','Japan reflation & reform','China consumer recovery'],
    contrarian:'Favours long duration vs consensus',
  },
  {
    id:'bnpp', name:'BNP Paribas AM', fullName:'BNP Paribas Asset Management',
    tier:2, stance:'Defensive', aum:'~€560bn',
    markets:['FR','DE','IT','ES'], outlookTitle:'Investment Outlook',
    positioning:{ equityUS:'OW', equityEurope:'OW', equityEM:'UW', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'N',  fixedEMBonds:'N',  duration:'OW', gold:'OW', oil:'OW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'0.5%',   label:'Stagnation risk',       sentiment:'bearish' },
      chinaGDP:       { value:'4.2%',   label:'Structural slowdown',   sentiment:'bearish' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.50%', label:'One cut remaining',      sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Cautious easing path',  sentiment:'neutral' },
    },
    themes:['Japan reflation & reform','Healthcare innovation','Commodity super-cycle','EM local currency bonds'],
    contrarian:'UW US despite consensus OW',
  },
  {
    id:'axa', name:'AXA IM', fullName:'AXA Investment Managers',
    tier:2, stance:'Balanced', aum:'~€850bn',
    markets:['FR','DE','CH','IT'], outlookTitle:'Future Investment Outlook',
    positioning:{ equityUS:'N',  equityEurope:'OW', equityEM:'N',  equityJapan:'N',
      fixedIG:'OW', fixedHY:'N',  fixedEMBonds:'N',  duration:'OW', gold:'OW', oil:'N',  alternatives:'N' },
    macro:{
      usGDP:          { value:'1.8%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.50%', label:'On hold',                sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Measured pace',          sentiment:'neutral' },
    },
    themes:['Insurance-linked green transition','Euro IG credit over HY','Duration in core Eurozone'],
    contrarian:'More cautious on spread duration than consensus',
  },
  {
    id:'allianz', name:'Allianz GI', fullName:'Allianz Global Investors',
    tier:2, stance:'Selective Risk-On', aum:'~€560bn',
    markets:['DE','FR','IT','ES'], outlookTitle:'Global Investment Outlook',
    positioning:{ equityUS:'OW', equityEurope:'N',  equityEM:'N',  equityJapan:'N',
      fixedIG:'OW', fixedHY:'UW', fixedEMBonds:'UW', duration:'UW', gold:'UW', oil:'N',  alternatives:'UW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.25%', label:'Two cuts ahead',         sentiment:'bullish' },
      ecb:            { value:'~1.75%', label:'Easing on track',        sentiment:'bullish' },
    },
    themes:['Commodity super-cycle','AI rotation — hype to fundamentals','Defence & security spending'],
    contrarian:'OW European banks vs tech consensus',
  },
  {
    id:'dws', name:'DWS', fullName:'DWS Group',
    tier:2, stance:'Cautious-Offensive', aum:'~€900bn',
    markets:['DE','FR','IT','ES'], outlookTitle:'CIO Outlook',
    positioning:{ equityUS:'N',  equityEurope:'OW', equityEM:'OW', equityJapan:'N',
      fixedIG:'N',  fixedHY:'UW', fixedEMBonds:'OW', duration:'UW', gold:'N',  oil:'UW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'1.8%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.50%', label:'On hold',                sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Cautious easing',        sentiment:'neutral' },
    },
    themes:['China consumer recovery','Green capex & energy transition','Small-cap value revival'],
    contrarian:'Calls for EUR parity risk',
  },
  {
    id:'natixis', name:'Natixis IM', fullName:'Natixis Investment Managers',
    tier:2, stance:'Cautious-Offensive', aum:'~€1tn',
    markets:['FR','DE','IT','ES'], outlookTitle:'Global Market Outlook',
    positioning:{ equityUS:'UW', equityEurope:'OW', equityEM:'N',  equityJapan:'UW',
      fixedIG:'UW', fixedHY:'N',  fixedEMBonds:'OW', duration:'OW', gold:'UW', oil:'N',  alternatives:'UW' },
    macro:{
      usGDP:          { value:'1.8%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.00%', label:'Faster cuts expected',   sentiment:'bullish' },
      ecb:            { value:'~1.50%', label:'Aggressive easing',      sentiment:'bullish' },
    },
    themes:['European fiscal expansion trade','Green capex & energy transition','EM rotation'],
    contrarian:'Expects faster Fed cuts than market pricing',
  },

  /* ── TIER 3 — TRUE PEERS ── */
  {
    id:'pictet', name:'Pictet AM', fullName:'Pictet Asset Management',
    tier:3, stance:'Opportunistic', aum:'~€260bn',
    markets:['CH','FR','DE','IT'], outlookTitle:'Secular Outlook',
    positioning:{ equityUS:'UW', equityEurope:'OW', equityEM:'N',  equityJapan:'UW',
      fixedIG:'UW', fixedHY:'N',  fixedEMBonds:'OW', duration:'N',  gold:'N',  oil:'OW', alternatives:'UW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'0.5%',   label:'Stagnation risk',       sentiment:'bearish' },
      chinaGDP:       { value:'4.2%',   label:'Structural slowdown',   sentiment:'bearish' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.25%', label:'Two cuts ahead',         sentiment:'bullish' },
      ecb:            { value:'~2.00%', label:'Measured pace',          sentiment:'neutral' },
    },
    themes:['Credit spread compression','Commodity super-cycle','Defence & security spending'],
    contrarian:'OW European banks vs tech consensus',
  },
  {
    id:'lombard', name:'Lombard Odier', fullName:'Lombard Odier Investment Managers',
    tier:3, stance:'Defensive', aum:'~€300bn',
    markets:['CH','FR','IT'], outlookTitle:'CIO Outlook',
    positioning:{ equityUS:'OW', equityEurope:'OW', equityEM:'OW', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'N',  fixedEMBonds:'OW', duration:'N',  gold:'N',  oil:'N',  alternatives:'UW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.75%', label:'Higher for longer',      sentiment:'bearish' },
      ecb:            { value:'~2.25%', label:'Inflation risk lingers', sentiment:'bearish' },
    },
    themes:['European fiscal expansion trade','Deglobalisation & reshoring','Private credit over HY'],
    contrarian:'Strong USD persistence view',
  },
  {
    id:'candriam', name:'Candriam', fullName:'Candriam',
    tier:3, stance:'Defensive', aum:'~€150bn',
    markets:['FR','DE','IT','ES'], outlookTitle:'Investment Strategy Outlook',
    positioning:{ equityUS:'OW', equityEurope:'UW', equityEM:'OW', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'UW', fixedEMBonds:'OW', duration:'N',  gold:'N',  oil:'N',  alternatives:'N' },
    macro:{
      usGDP:          { value:'1.8%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'0.5%',   label:'Stagnation risk',       sentiment:'bearish' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.50%', label:'Measured approach',      sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Base case easing',       sentiment:'neutral' },
    },
    themes:['US exceptionalism persistence','Quality factor tilt','Deglobalisation & reshoring'],
    contrarian:'Bullish on US equities vs consensus caution',
  },
  {
    id:'dnca', name:'DNCA Finance', fullName:'DNCA Finance',
    tier:3, stance:'Balanced', aum:'~€26bn',
    markets:['FR','IT','ES'], outlookTitle:'Market Outlook',
    positioning:{ equityUS:'N',  equityEurope:'OW', equityEM:'N',  equityJapan:'N',
      fixedIG:'OW', fixedHY:'N',  fixedEMBonds:'N',  duration:'N',  gold:'N',  oil:'N',  alternatives:'N' },
    macro:{
      usGDP:          { value:'1.9%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'0.8%',   label:'Below expectations',    sentiment:'bearish' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.50%', label:'One cut expected',       sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Gradual easing',         sentiment:'neutral' },
    },
    themes:['European small cap revival','Dividend value recovery','Euro corporate bonds'],
    contrarian:'OW European small caps vs large cap consensus',
  },
  {
    id:'carmignac', name:'Carmignac', fullName:'Carmignac Gestion',
    tier:3, stance:'Balanced', aum:'~€40bn',
    markets:['FR','DE','IT','ES'], outlookTitle:'Investment Strategy Outlook',
    positioning:{ equityUS:'OW', equityEurope:'UW', equityEM:'UW', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'OW', fixedEMBonds:'UW', duration:'N',  gold:'N',  oil:'N',  alternatives:'OW' },
    macro:{
      usGDP:          { value:'1.9%',   label:'Trend growth',          sentiment:'neutral' },
      ezGDP:          { value:'0.5%',   label:'Stagnation risk',       sentiment:'bearish' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.50%', label:'Wait and see',           sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Cautious easing',        sentiment:'neutral' },
    },
    themes:['Selective EM exposure','Quality over growth','Duration extension on rate cuts'],
    contrarian:'More cautious on credit spreads than consensus',
  },
  {
    id:'flossbach', name:'Flossbach vS', fullName:'Flossbach von Storch',
    tier:3, stance:'Risk-On', aum:'~€70bn',
    markets:['DE','CH','FR'], outlookTitle:'Capital Market Outlook',
    positioning:{ equityUS:'UW', equityEurope:'N',  equityEM:'OW', equityJapan:'OW',
      fixedIG:'OW', fixedHY:'N',  fixedEMBonds:'OW', duration:'OW', gold:'N',  oil:'OW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'1.3%',   label:'Fiscal impulse',        sentiment:'bullish' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.25%', label:'Two cuts expected',      sentiment:'bullish' },
      ecb:            { value:'~1.75%', label:'Supportive easing',      sentiment:'bullish' },
    },
    themes:['Quality factor tilt','Gold as core holding','European fiscal expansion trade'],
    contrarian:'Most bullish on gold among all peers',
  },
  {
    id:'robeco', name:'Robeco', fullName:'Robeco',
    tier:3, stance:'Opportunistic', aum:'~€180bn',
    markets:['FR','DE','CH','IT','ES'], outlookTitle:'Global Outlook',
    positioning:{ equityUS:'UW', equityEurope:'OW', equityEM:'N',  equityJapan:'OW',
      fixedIG:'OW', fixedHY:'UW', fixedEMBonds:'N',  duration:'UW', gold:'N',  oil:'UW', alternatives:'UW' },
    macro:{
      usGDP:          { value:'1.4%',   label:'Below trend',           sentiment:'bearish' },
      ezGDP:          { value:'1.3%',   label:'Fiscal impulse',        sentiment:'bullish' },
      chinaGDP:       { value:'4.5%',   label:'Managed deceleration',  sentiment:'neutral' },
      globalInflation:{ value:null,     label:'Sticky above target',   sentiment:'bullish' },
      fed:            { value:'~3.50%', label:'Cautious cut path',      sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Gradual easing',         sentiment:'neutral' },
    },
    themes:['Quality factor tilt','Deglobalisation & reshoring','EM local currency bonds'],
    contrarian:'Long-term value over momentum',
  },
  {
    id:'lazard', name:'Lazard AM', fullName:'Lazard Asset Management',
    tier:3, stance:'Cautious-Offensive', aum:'~€200bn',
    markets:['FR','DE','IT'], outlookTitle:'Global Outlook',
    positioning:{ equityUS:'UW', equityEurope:'OW', equityEM:'N',  equityJapan:'N',
      fixedIG:'OW', fixedHY:'N',  fixedEMBonds:'N',  duration:'N',  gold:'OW', oil:'N',  alternatives:'N' },
    macro:{
      usGDP:          { value:'1.7%',   label:'Below trend',           sentiment:'bearish' },
      ezGDP:          { value:'0.9%',   label:'Modest recovery',       sentiment:'neutral' },
      chinaGDP:       { value:'4.2%',   label:'Structural slowdown',   sentiment:'bearish' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.50%', label:'Limited cuts',           sentiment:'neutral' },
      ecb:            { value:'~2.00%', label:'Cautious easing',        sentiment:'neutral' },
    },
    themes:['Value rotation in EM equities','Currency-hedged European exposure','Real assets vs nominal bonds'],
    contrarian:'Most UW US equities among European peers',
  },
  {
    id:'eurizon', name:'Eurizon', fullName:'Eurizon Capital',
    tier:3, stance:'Selective Risk-On', aum:'~€400bn',
    markets:['IT','FR','DE'], outlookTitle:'Investment Outlook',
    positioning:{ equityUS:'OW', equityEurope:'N',  equityEM:'N',  equityJapan:'OW',
      fixedIG:'OW', fixedHY:'N',  fixedEMBonds:'OW', duration:'OW', gold:'N',  oil:'UW', alternatives:'OW' },
    macro:{
      usGDP:          { value:'2.1%',   label:'Soft landing',          sentiment:'bullish' },
      ezGDP:          { value:'1.3%',   label:'Fiscal impulse',        sentiment:'bullish' },
      chinaGDP:       { value:'4.8%',   label:'Policy stimulus',       sentiment:'bullish' },
      globalInflation:{ value:null,     label:'Gradual normalisation', sentiment:'neutral' },
      fed:            { value:'~3.25%', label:'Two cuts expected',      sentiment:'bullish' },
      ecb:            { value:'~1.75%', label:'Supportive easing',      sentiment:'bullish' },
    },
    themes:['European fiscal expansion trade','EM local currency bonds','Duration extension on rate cuts'],
    contrarian:'More bullish China than consensus',
  },
  {
    id:'generali', name:'Generali Inv.', fullName:'Generali Investments',
    tier:3, stance:'Opportunistic', aum:'~€600bn',
    markets:['IT','FR','DE','ES'], outlookTitle:'Global Outlook',
    positioning:{ equityUS:'UW', equityEurope:'N',  equityEM:'N',  equityJapan:'OW',
      fixedIG:'UW', fixedHY:'N',  fixedEMBonds:'UW', duration:'OW', gold:'N',  oil:'N',  alternatives:'OW' },
    macro:{
      usGDP:          { value:'1.4%',   label:'Below trend',           sentiment:'bearish' },
      ezGDP:          { value:'1.3%',   label:'Fiscal impulse',        sentiment:'bullish' },
      chinaGDP:       { value:'4.2%',   label:'Structural slowdown',   sentiment:'bearish' },
      globalInflation:{ value:null,     label:'Disinflation on track', sentiment:'bearish' },
      fed:            { value:'~3.25%', label:'Two cuts expected',      sentiment:'bullish' },
      ecb:            { value:'~1.75%', label:'Front-loaded easing',    sentiment:'bullish' },
    },
    themes:['Commodity super-cycle','Duration extension on rate cuts','Japan reflation & reform'],
    contrarian:'OW alternatives vs consensus',
  },
];

/* ── Attach modal data ─────────────────────────────────────── */
export const COMPETITORS = _competitors.map(firm => ({
  ...firm,
  outlookUrl: OUTLOOK_URLS[firm.id] || null,
  modal: firm.id === 'amundi' ? amundiModal : buildContextualModal(firm),
}));

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
