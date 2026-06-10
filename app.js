const incidents = [
  { id: 1, title: "Eastern Europe front", location: "Ukraine", lat: 48.7, lng: 36.1, severity: "critical", type: "conflict", time: "ONGOING", summary: "Persistent high-intensity operations, infrastructure strikes and contested logistics corridors." },
  { id: 2, title: "Red Sea shipping risk", location: "Bab el-Mandeb", lat: 12.6, lng: 43.3, severity: "critical", type: "supply", time: "ACTIVE WATCH", summary: "Maritime security threats continue to alter routing, insurance costs and transit times." },
  { id: 3, title: "Levant regional spillover", location: "Eastern Mediterranean", lat: 33.7, lng: 35.3, severity: "critical", type: "conflict", time: "ONGOING", summary: "Cross-border escalation risk remains elevated across multiple state and non-state actors." },
  { id: 4, title: "Sahel security arc", location: "Central Sahel", lat: 15.4, lng: 1.8, severity: "elevated", type: "conflict", time: "DETERIORATING", summary: "Insurgent activity, political fragmentation and access constraints threaten regional stability." },
  { id: 5, title: "Taiwan Strait pressure", location: "Taiwan Strait", lat: 24.2, lng: 120.6, severity: "elevated", type: "political", time: "ELEVATED", summary: "Military signaling and cross-strait political friction raise tail risks for semiconductor supply." },
  { id: 6, title: "South China Sea friction", location: "West Philippine Sea", lat: 13.4, lng: 114.2, severity: "elevated", type: "political", time: "ACTIVE WATCH", summary: "Recurring maritime encounters create escalation and shipping disruption risk." },
  { id: 7, title: "Korean Peninsula posture", location: "Korean Peninsula", lat: 38.2, lng: 127.2, severity: "watch", type: "political", time: "MONITORING", summary: "Weapons testing and force-posture changes warrant continued monitoring." },
  { id: 8, title: "Sudan humanitarian crisis", location: "Sudan", lat: 15.5, lng: 32.5, severity: "critical", type: "conflict", time: "ONGOING", summary: "Severe conflict, displacement and humanitarian access constraints continue." },
  { id: 9, title: "Strait of Hormuz exposure", location: "Persian Gulf", lat: 26.5, lng: 56.2, severity: "elevated", type: "supply", time: "WATCH", summary: "Energy market exposure remains sensitive to regional military and diplomatic developments." },
  { id: 10, title: "Panama Canal constraints", location: "Panama", lat: 9.1, lng: -79.7, severity: "watch", type: "supply", time: "MONITORING", summary: "Climate and capacity constraints can produce knock-on effects for bulk and container shipping." },
  { id: 11, title: "Andean political volatility", location: "Northern Andes", lat: 4.6, lng: -74.1, severity: "watch", type: "political", time: "MONITORING", summary: "Fiscal pressure, reform disputes and social mobilization remain key watch factors." },
  { id: 12, title: "West African coastal spillover", location: "Gulf of Guinea", lat: 6.4, lng: 2.6, severity: "watch", type: "political", time: "MONITORING", summary: "Coastal states face rising security expenditure and cross-border militant risk." }
];

const signals = [
  { severity: "critical", title: "Maritime rerouting persists", summary: "Red Sea exposure remains a material cost and schedule risk.", region: "MENA / TRADE", age: "2H AGO" },
  { severity: "critical", title: "Infrastructure strike risk", summary: "Energy and transport assets remain exposed in active theaters.", region: "EUROPE", age: "4H AGO" },
  { severity: "elevated", title: "Debt rollover pressure", summary: "Frontier issuers face a difficult external financing window.", region: "GLOBAL / CREDIT", age: "6H AGO" },
  { severity: "elevated", title: "Semiconductor concentration", summary: "Cross-strait pressure keeps advanced chip supply vulnerable.", region: "EAST ASIA", age: "8H AGO" },
  { severity: "watch", title: "Food-price pass-through", summary: "Import-dependent states remain sensitive to grain volatility.", region: "EMERGING MARKETS", age: "12H AGO" },
  { severity: "watch", title: "Election policy repricing", summary: "Fiscal and trade platforms could shift investor expectations.", region: "MULTI-REGION", age: "1D AGO" }
];

const chokepoints = [
  { name: "Bab el-Mandeb", pressure: 88, trend: "HIGH", flow: "~12% GLOBAL TRADE" },
  { name: "Strait of Hormuz", pressure: 71, trend: "ELEVATED", flow: "~20% OIL SUPPLY" },
  { name: "Suez Canal", pressure: 67, trend: "ELEVATED", flow: "ROUTE DIVERSIONS" },
  { name: "Panama Canal", pressure: 42, trend: "WATCH", flow: "CAPACITY SENSITIVE" }
];

const theaters = [
  { name: "Ukraine", region: "EASTERN EUROPE", score: 92, trend: "ESCALATING", displacement: "High" },
  { name: "Sudan", region: "NORTHEAST AFRICA", score: 90, trend: "ESCALATING", displacement: "Severe" },
  { name: "Israel / Palestinian Territories", region: "LEVANT", score: 89, trend: "VOLATILE", displacement: "Severe" },
  { name: "Myanmar", region: "SOUTHEAST ASIA", score: 81, trend: "ESCALATING", displacement: "High" },
  { name: "Sahel insurgencies", region: "WEST AFRICA", score: 78, trend: "DETERIORATING", displacement: "High" },
  { name: "Eastern DRC", region: "CENTRAL AFRICA", score: 77, trend: "DETERIORATING", displacement: "High" },
  { name: "Somalia", region: "HORN OF AFRICA", score: 68, trend: "VOLATILE", displacement: "Elevated" },
  { name: "Syria", region: "LEVANT", score: 65, trend: "PERSISTENT", displacement: "Severe" }
];

const sovereigns = [
  {
    country: "Argentina", iso: "AR", region: "LATIN AMERICA", grade: "CCC", outlook: "Improving", score: 88,
    note: "Reserve rebuilding and reform execution remain central to market access.",
    debtGdp: "92%", fxDebt: "68%", reserves: "2.1 mo", spread: "1,180 bp", refinancing: "Severe",
    catalyst: "Program review and reserve targets", window: "Q3", signals: ["FX VOLATILITY", "INFLATION", "IMF PROGRAM"]
  },
  {
    country: "Tunisia", iso: "TN", region: "NORTH AFRICA", grade: "CCC-", outlook: "Negative", score: 84,
    note: "A narrow financing base and policy constraints keep the funding gap elevated.",
    debtGdp: "81%", fxDebt: "57%", reserves: "3.4 mo", spread: "1,040 bp", refinancing: "Severe",
    catalyst: "External financing package", window: "H2", signals: ["FUNDING GAP", "REFORM", "SOCIAL RISK"]
  },
  {
    country: "Pakistan", iso: "PK", region: "SOUTH ASIA", grade: "CCC+", outlook: "Stable", score: 79,
    note: "External refinancing needs remain large relative to reserve buffers.",
    debtGdp: "76%", fxDebt: "38%", reserves: "2.5 mo", spread: "860 bp", refinancing: "High",
    catalyst: "Multilateral review and rollovers", window: "Q3", signals: ["ROLLOVER RISK", "IMF PROGRAM", "POLITICAL"]
  },
  {
    country: "Ghana", iso: "GH", region: "WEST AFRICA", grade: "CCC+", outlook: "Improving", score: 76,
    note: "Debt-workout implementation and fiscal delivery drive the recovery path.",
    debtGdp: "84%", fxDebt: "61%", reserves: "2.8 mo", spread: "740 bp", refinancing: "High",
    catalyst: "Restructuring milestone", window: "Q4", signals: ["DEBT WORKOUT", "FISCAL", "FX"]
  },
  {
    country: "Egypt", iso: "EG", region: "NORTH AFRICA", grade: "B-", outlook: "Negative", score: 72,
    note: "Debt-service costs and exchange-rate flexibility test the adjustment program.",
    debtGdp: "91%", fxDebt: "31%", reserves: "4.0 mo", spread: "610 bp", refinancing: "High",
    catalyst: "Privatization and program review", window: "Q3", signals: ["DEVALUATION", "EXTERNAL DEBT", "GULF SUPPORT"]
  },
  {
    country: "Nigeria", iso: "NG", region: "WEST AFRICA", grade: "B-", outlook: "Stable", score: 69,
    note: "Reform pass-through, oil receipts and naira liquidity shape credit capacity.",
    debtGdp: "49%", fxDebt: "42%", reserves: "5.1 mo", spread: "520 bp", refinancing: "Elevated",
    catalyst: "Budget and oil-output delivery", window: "Q4", signals: ["FX", "INFLATION", "OIL OUTPUT"]
  },
  {
    country: "Ecuador", iso: "EC", region: "LATIN AMERICA", grade: "B-", outlook: "Stable", score: 61,
    note: "Security expenditure and fiscal consolidation compete for limited capacity.",
    debtGdp: "58%", fxDebt: "91%", reserves: "4.6 mo", spread: "470 bp", refinancing: "Elevated",
    catalyst: "Fiscal package and oil receipts", window: "H2", signals: ["SECURITY", "FISCAL", "OIL"]
  }
];

const fxProfiles = {
  EUR: { name: "EURO", region: "EURO AREA", group: "major", regime: "FREE FLOAT", day: 0.18, month: 1.3, vol: 6.8, stress: 28, driver: "RATE DIFFERENTIAL" },
  GBP: { name: "STERLING", region: "UNITED KINGDOM", group: "major", regime: "FREE FLOAT", day: -0.12, month: -0.7, vol: 7.4, stress: 31, driver: "GROWTH / RATES" },
  JPY: { name: "YEN", region: "JAPAN", group: "major", regime: "MANAGED FLOAT", day: 0.46, month: 3.8, vol: 10.9, stress: 63, driver: "YIELD GAP" },
  CHF: { name: "FRANC", region: "SWITZERLAND", group: "major", regime: "FREE FLOAT", day: -0.08, month: -1.1, vol: 6.2, stress: 22, driver: "SAFE HAVEN" },
  CNY: { name: "RENMINBI", region: "CHINA", group: "emerging", regime: "MANAGED", day: 0.07, month: 0.9, vol: 3.1, stress: 48, driver: "POLICY FIX" },
  TRY: { name: "LIRA", region: "TURKIYE", group: "emerging", regime: "MANAGED FLOAT", day: 0.71, month: 5.9, vol: 18.7, stress: 86, driver: "INFLATION" },
  BRL: { name: "REAL", region: "BRAZIL", group: "emerging", regime: "FREE FLOAT", day: -0.34, month: 2.1, vol: 14.2, stress: 57, driver: "FISCAL / CARRY" },
  ZAR: { name: "RAND", region: "SOUTH AFRICA", group: "emerging", regime: "FREE FLOAT", day: 0.23, month: 3.4, vol: 15.6, stress: 68, driver: "POWER / FISCAL" },
  INR: { name: "RUPEE", region: "INDIA", group: "emerging", regime: "MANAGED FLOAT", day: 0.11, month: 1.2, vol: 4.4, stress: 39, driver: "OIL IMPORTS" },
  MXN: { name: "PESO", region: "MEXICO", group: "emerging", regime: "FREE FLOAT", day: -0.42, month: -2.6, vol: 13.8, stress: 52, driver: "CARRY / TRADE" }
};

const supplyRisks = [
  { name: "Bab el-Mandeb", region: "RED SEA", score: 88, status: "SEVERE", summary: "Security incidents drive Cape of Good Hope diversions, adding time, fuel and insurance cost." },
  { name: "Strait of Hormuz", region: "PERSIAN GULF", score: 71, status: "ELEVATED", summary: "Concentrated hydrocarbon flows create acute exposure to regional escalation." },
  { name: "Suez Canal", region: "EGYPT", score: 67, status: "ELEVATED", summary: "Lower transits weaken Egyptian receipts while carriers absorb longer voyages." },
  { name: "Taiwan Strait", region: "EAST ASIA", score: 64, status: "WATCH", summary: "Military pressure intersects with global dependence on advanced semiconductor production." },
  { name: "Panama Canal", region: "CENTRAL AMERICA", score: 42, status: "WATCH", summary: "Water availability and booking capacity remain key variables for route economics." },
  { name: "Black Sea", region: "EASTERN EUROPE", score: 73, status: "ELEVATED", summary: "War risk, port access and grain-export arrangements remain vulnerable to disruption." }
];

const fallbackFx = {
  date: "fallback",
  rates: { EUR: 0.88, GBP: 0.74, JPY: 144.7, CHF: 0.82, CNY: 7.19, TRY: 39.2, BRL: 5.62, ZAR: 17.8, INR: 85.4, MXN: 19.3 }
};

const fallbackNews = [
  { title: "Global risk monitor is operating in fallback mode", domain: "ATLAS/WATCH", date: new Date().toISOString(), type: "political", url: "#", sourcecountry: "GLOBAL" },
  { title: "Maritime security remains central to freight and energy risk", domain: "ANALYST NOTE", date: new Date(Date.now() - 36e5).toISOString(), type: "economic", url: "#", sourcecountry: "GLOBAL" },
  { title: "Sovereign refinancing conditions diverge across frontier markets", domain: "ANALYST NOTE", date: new Date(Date.now() - 72e5).toISOString(), type: "economic", url: "#", sourcecountry: "GLOBAL" },
  { title: "Multiple active conflicts continue to drive displacement pressure", domain: "ANALYST NOTE", date: new Date(Date.now() - 108e5).toISOString(), type: "conflict", url: "#", sourcecountry: "GLOBAL" },
  { title: "Strategic technology supply chains remain geographically concentrated", domain: "ANALYST NOTE", date: new Date(Date.now() - 144e5).toISOString(), type: "political", url: "#", sourcecountry: "GLOBAL" },
  { title: "Food and energy import dependence amplifies political pass-through", domain: "ANALYST NOTE", date: new Date(Date.now() - 180e5).toISOString(), type: "economic", url: "#", sourcecountry: "GLOBAL" }
];

let map;
let markerLayer;
let allNews = fallbackNews;
let currentNewsFilter = "all";
let currentFxFilter = "all";
let currentCreditFilter = "all";
let latestFxData = fallbackFx;

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function formatDateTime(value) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "RECENT";
  const hours = Math.max(0, Math.round((Date.now() - parsed.getTime()) / 36e5));
  return hours < 1 ? "NOW" : hours < 24 ? `${hours}H AGO` : `${Math.round(hours / 24)}D AGO`;
}

function classifyNews(title = "") {
  const text = title.toLowerCase();
  if (/(war|attack|missile|military|conflict|strike|troops|armed|ceasefire|bomb)/.test(text)) return "conflict";
  if (/(currency|debt|inflation|trade|tariff|economy|oil|market|bank|sanction)/.test(text)) return "economic";
  return "political";
}

function renderSignals() {
  document.querySelector("#signalList").innerHTML = signals.map((item, index) => `
    <article class="signal-item ${item.severity}" data-signal-index="${index}" tabindex="0">
      <span class="signal-index">${String(index + 1).padStart(2, "0")}</span>
      <div class="signal-copy">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="signal-meta"><span>${item.region}</span><span>${item.age}</span></div>
      </div>
    </article>
  `).join("");
}

function renderChokepoints() {
  document.querySelector("#chokepointList").innerHTML = chokepoints.map(item => `
    <div class="choke-row">
      <div class="choke-title"><strong>${item.name}</strong><span>${item.trend}</span></div>
      <div class="pressure-track"><div class="pressure-fill" style="width:${item.pressure}%"></div></div>
      <div class="choke-meta"><span>PRESSURE ${item.pressure}/100</span><span>${item.flow}</span></div>
    </div>
  `).join("");
}

function renderTheaters() {
  document.querySelector("#theaterList").innerHTML = theaters.map(item => `
    <article class="theater-row">
      <div class="theater-top">
        <div><h3>${item.name}</h3><p>${item.region}</p></div>
        <strong class="intensity-score">${item.score}</strong>
      </div>
      <div class="intensity-bar"><span style="width:${item.score}%"></span></div>
      <div class="theater-bottom"><span>${item.trend}</span><span>DISPLACEMENT: ${item.displacement.toUpperCase()}</span></div>
    </article>
  `).join("");
}

function renderSovereigns() {
  const visible = sovereigns.filter(item => {
    const tier = creditTier(item.score);
    return currentCreditFilter === "all" || tier === currentCreditFilter;
  });
  document.querySelector("#creditCount").textContent = String(visible.length).padStart(2, "0");
  document.querySelector("#creditWatchlist").innerHTML = visible.length ? visible.map(item => {
    const tier = creditTier(item.score);
    return `
      <article class="credit-item ${tier}">
        <button class="credit-summary" type="button" aria-expanded="false">
          <span class="credit-country"><i>${item.iso}</i><span><strong>${item.country}</strong><small>${item.region}</small></span></span>
          <span class="credit-model"><strong>${item.score}</strong><small>${item.grade} MODEL</small></span>
          <span class="credit-outlook ${item.outlook.toLowerCase()}">${item.outlook}</span>
          <span class="credit-spread"><strong>${item.spread}</strong><small>INDICATIVE</small></span>
          <span class="credit-reserves"><strong>${item.reserves}</strong><small>IMPORT COVER</small></span>
          <span class="credit-expand" aria-hidden="true">+</span>
        </button>
        <div class="credit-detail">
          <div class="credit-narrative">
            <p>${item.note}</p>
            <div class="credit-signals">${item.signals.map(signal => `<span>${signal}</span>`).join("")}</div>
          </div>
          <div class="credit-metric"><span>DEBT / GDP</span><strong>${item.debtGdp}</strong></div>
          <div class="credit-metric"><span>FX DEBT SHARE</span><strong>${item.fxDebt}</strong></div>
          <div class="credit-metric"><span>REFINANCING</span><strong>${item.refinancing}</strong></div>
          <div class="credit-catalyst"><span>NEXT CATALYST · ${item.window}</span><strong>${item.catalyst}</strong></div>
        </div>
      </article>
    `;
  }).join("") : `<p class="empty-market-state">NO SOVEREIGNS IN THIS RISK BAND</p>`;
  bindCreditRows();
}

function creditTier(score) {
  if (score >= 80) return "critical";
  if (score >= 70) return "high";
  return "monitor";
}

function bindCreditRows() {
  document.querySelectorAll(".credit-summary").forEach(button => button.addEventListener("click", () => {
    const item = button.closest(".credit-item");
    const expanded = item.classList.toggle("expanded");
    button.setAttribute("aria-expanded", String(expanded));
    item.querySelector(".credit-expand").textContent = expanded ? "−" : "+";
  }));
}

function renderCreditCatalysts() {
  document.querySelector("#creditCatalysts").innerHTML = sovereigns.slice(0, 5).map(item => `
    <article class="catalyst-row">
      <span class="catalyst-date">${item.window}</span>
      <div><strong>${item.country}</strong><p>${item.catalyst}</p></div>
      <span class="catalyst-score ${creditTier(item.score)}">${item.score}</span>
    </article>
  `).join("");
}

function renderSupply() {
  document.querySelector("#supplyGrid").innerHTML = supplyRisks.map((item, index) => `
    <article class="panel supply-card">
      <span class="supply-index">${String(index + 1).padStart(2, "0")} / ${item.region}</span>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
      <div class="pressure-number"><strong>${item.score}</strong><span>${item.status}</span></div>
      <div class="supply-meter"><span style="width:${item.score}%"></span></div>
    </article>
  `).join("");
}

function formatFxRate(code, rate) {
  return Number(rate).toFixed(code === "JPY" || code === "INR" ? 2 : 4);
}

function fxMove(value, period = "") {
  const direction = value > 0 ? "negative" : value < 0 ? "positive" : "flat";
  return `<span class="fx-change ${direction} ${period}">${value > 0 ? "+" : ""}${value.toFixed(2)}%</span>`;
}

function compactFxRow(code, rate) {
  const profile = fxProfiles[code];
  return `
    <div class="fx-row">
      <div class="fx-code"><strong>USD/${code}</strong><span>${profile.name}</span></div>
      <span class="fx-rate">${formatFxRate(code, rate)}</span>
      ${fxMove(profile.day)}
    </div>
  `;
}

function fxSparkline(code) {
  const profile = fxProfiles[code];
  const base = 14 + profile.stress / 12;
  const values = [base, base - profile.day * 1.6, base + profile.month * .18, base - profile.day, base + profile.month * .28, base + profile.day * 1.2, base + profile.month * .35];
  const points = values.map((value, index) => `${index * 12},${Math.max(3, Math.min(25, 28 - value))}`).join(" ");
  return `<svg class="fx-spark" viewBox="0 0 72 28" aria-hidden="true"><polyline points="${points}"></polyline></svg>`;
}

function fullFxRow(code, rate) {
  const profile = fxProfiles[code];
  const tier = profile.stress >= 70 ? "critical" : profile.stress >= 55 ? "high" : "monitor";
  return `
    <article class="fx-detail-row ${tier}">
      <div class="fx-pair">
        <span><strong>USD/${code}</strong><small>${profile.name} · ${profile.region}</small></span>
        <em>${profile.regime}</em>
      </div>
      <strong class="fx-spot">${formatFxRate(code, rate)}</strong>
      ${fxMove(profile.day, "fx-day")}
      ${fxMove(profile.month, "fx-month")}
      <span class="fx-vol">${profile.vol.toFixed(1)}%</span>
      <div class="fx-stress-cell">
        ${fxSparkline(code)}
        <span class="fx-stress-score ${tier}">${profile.stress}</span>
      </div>
    </article>
  `;
}

function renderMarketSummary() {
  const highStress = Object.values(fxProfiles).filter(item => item.stress >= 65).length;
  const medianCredit = [...sovereigns].sort((a, b) => a.score - b.score)[Math.floor(sovereigns.length / 2)].score;
  const negativeOutlooks = sovereigns.filter(item => item.outlook === "Negative").length;
  const averageStress = Math.round(Object.values(fxProfiles).reduce((sum, item) => sum + item.stress, 0) / Object.keys(fxProfiles).length);
  const cards = [
    { label: "FX STRESS INDEX", value: averageStress, suffix: "/100", note: "CROSS-CURRENCY COMPOSITE", tone: averageStress >= 60 ? "amber" : "blue" },
    { label: "PRESSURE SIGNALS", value: highStress, suffix: "/10", note: "CURRENCIES AT 65+ STRESS", tone: "red" },
    { label: "MEDIAN CREDIT RISK", value: medianCredit, suffix: "/100", note: "ILLUSTRATIVE SOVEREIGN MODEL", tone: "amber" },
    { label: "NEGATIVE OUTLOOKS", value: negativeOutlooks, suffix: "/7", note: "DIRECTIONAL WATCHLIST", tone: "red" }
  ];
  document.querySelector("#marketSummary").innerHTML = cards.map(card => `
    <article class="market-summary-card ${card.tone}">
      <span>${card.label}</span>
      <strong>${card.value}<small>${card.suffix}</small></strong>
      <p>${card.note}</p>
    </article>
  `).join("");
}

function renderFxVulnerability() {
  const ranked = Object.entries(fxProfiles).sort(([, a], [, b]) => b.stress - a.stress).slice(0, 6);
  document.querySelector("#fxVulnerabilityList").innerHTML = ranked.map(([code, profile], index) => `
    <article class="fx-pressure-row">
      <span class="pressure-rank">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <div class="pressure-title"><strong>${code}</strong><span>${profile.driver}</span><em>${profile.stress}</em></div>
        <div class="pressure-track"><span style="width:${profile.stress}%"></span></div>
      </div>
    </article>
  `).join("");
}

function renderFx(data) {
  const priority = ["EUR", "JPY", "GBP", "CNY", "TRY"];
  latestFxData = data;
  const full = ["EUR", "GBP", "JPY", "CHF", "CNY", "TRY", "BRL", "ZAR", "INR", "MXN"].filter(code => {
    const profile = fxProfiles[code];
    if (currentFxFilter === "stressed") return profile.stress >= 65;
    return currentFxFilter === "all" || profile.group === currentFxFilter;
  });
  document.querySelector("#fxTable").innerHTML = priority.map(code => compactFxRow(code, data.rates[code])).join("");
  document.querySelector("#fullFxTable").innerHTML = full.length ? full.map(code => fullFxRow(code, data.rates[code])).join("") : `<p class="empty-market-state">NO CURRENCIES IN THIS FILTER</p>`;
  const isFallback = data.date === "fallback";
  document.querySelector("#fxStatus").textContent = isFallback ? "DEMO RATES" : `LIVE · ${data.date}`;
  document.querySelector("#fxUpdated").textContent = isFallback ? "FALLBACK DATA" : `UPDATED ${data.date}`;
}

async function loadFx() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", { signal: AbortSignal.timeout(7000) });
    if (!response.ok) throw new Error("FX request failed");
    const payload = await response.json();
    if (payload.result !== "success") throw new Error("FX response invalid");
    renderFx({
      rates: payload.rates,
      date: new Date(payload.time_last_update_utc).toISOString().slice(0, 10)
    });
  } catch {
    renderFx(fallbackFx);
  }
}

function newsMarkup(items) {
  return items.map(item => {
    const type = item.type || classifyNews(item.title);
    const href = item.url && item.url !== "#" ? item.url : "#";
    const target = href === "#" ? "" : 'target="_blank" rel="noopener noreferrer"';
    return `
      <a class="news-item" href="${escapeHtml(href)}" ${target} data-news-type="${type}">
        <span class="news-type ${type}">${type.toUpperCase()}</span>
        <div class="news-body">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml((item.domain || "SOURCE").toUpperCase())} · ${escapeHtml((item.sourcecountry || "GLOBAL").toUpperCase())} · ${formatDateTime(item.date || item.seendate)}</p>
        </div>
      </a>
    `;
  }).join("");
}

function renderNews() {
  const filtered = currentNewsFilter === "all" ? allNews : allNews.filter(item => (item.type || classifyNews(item.title)) === currentNewsFilter);
  document.querySelector("#overviewNewsList").innerHTML = newsMarkup(allNews.slice(0, 5));
  document.querySelector("#fullNewsList").innerHTML = filtered.length ? newsMarkup(filtered) : `<p class="search-hint">NO MATCHING SIGNALS IN THE CURRENT FEED</p>`;
}

async function loadNews() {
  const query = encodeURIComponent("(conflict OR sanctions OR election OR protest OR military OR tariff OR sovereign debt)");
  const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=${query}&mode=artlist&maxrecords=24&format=json&sort=HybridRel`;
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(9000) });
    if (!response.ok) throw new Error("News request failed");
    const data = await response.json();
    if (!data.articles?.length) throw new Error("Empty news response");
    allNews = data.articles.map(item => ({ ...item, type: classifyNews(item.title), date: item.seendate }));
    document.querySelector("#feedStatus").textContent = "LIVE · GDELT";
    document.querySelector("#feedTimestamp").textContent = `UPDATED ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  } catch {
    allNews = fallbackNews;
    document.querySelector("#feedStatus").textContent = "FALLBACK BRIEF";
    document.querySelector("#feedTimestamp").textContent = "LIVE FEED UNAVAILABLE";
  }
  renderNews();
}

function showIncident(item) {
  const preview = document.querySelector("#incidentPreview");
  document.querySelector("#previewType").textContent = `${item.severity.toUpperCase()} / ${item.type.toUpperCase()}`;
  document.querySelector("#previewTitle").textContent = item.title;
  document.querySelector("#previewSummary").textContent = item.summary;
  document.querySelector("#previewLocation").textContent = item.location.toUpperCase();
  document.querySelector("#previewTime").textContent = item.time;
  preview.style.borderTopColor = item.severity === "critical" ? "var(--red)" : item.severity === "elevated" ? "var(--amber)" : "var(--blue)";
  preview.classList.add("visible");
}

function initMap() {
  if (typeof L === "undefined") {
    document.querySelector("#mapFallback").classList.add("active");
    return;
  }
  map = L.map("riskMap", { zoomControl: true, minZoom: 2, maxZoom: 6, worldCopyJump: true, attributionControl: true }).setView([24, 12], 2);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap &copy; CARTO",
    subdomains: "abcd",
    maxZoom: 20
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
  renderMapMarkers("all");
  map.on("tileerror", () => document.querySelector("#mapFallback").classList.add("active"));
}

function renderMapMarkers(filter) {
  if (!markerLayer) return;
  markerLayer.clearLayers();
  const visible = filter === "all" ? incidents : incidents.filter(item => item.type === filter);
  visible.forEach(item => {
    const icon = L.divIcon({
      className: "risk-marker",
      html: `<div class="marker-core marker-${item.severity}"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
    L.marker([item.lat, item.lng], { icon, title: item.title }).on("click", () => showIncident(item)).addTo(markerLayer);
  });
  document.querySelector("#visibleEventCount").textContent = `${visible.length} incidents displayed`;
}

function navigateTo(view) {
  document.querySelectorAll(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  document.querySelectorAll("[data-view-panel]").forEach(panel => panel.classList.toggle("active", panel.dataset.viewPanel === view));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (view === "overview" && map) setTimeout(() => map.invalidateSize(), 120);
}

function openSearch() {
  const overlay = document.querySelector("#searchOverlay");
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  setTimeout(() => document.querySelector("#globalSearch").focus(), 100);
}

function closeSearch() {
  const overlay = document.querySelector("#searchOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
}

function searchData(term) {
  const query = term.trim().toLowerCase();
  if (!query) {
    document.querySelector("#searchResults").innerHTML = `<p class="search-hint">TRY: UKRAINE, RED SEA, ARGENTINA, JPY</p>`;
    return;
  }
  const pool = [
    ...incidents.map(item => ({ title: item.title, meta: `${item.location} · ${item.type}`, view: "overview", incident: item })),
    ...theaters.map(item => ({ title: item.name, meta: `${item.region} · conflict theater`, view: "conflict" })),
    ...sovereigns.map(item => ({ title: item.country, meta: `${item.grade} · sovereign watch`, view: "markets" })),
    ...supplyRisks.map(item => ({ title: item.name, meta: `${item.region} · supply chain`, view: "supply" })),
    ...["EUR", "GBP", "JPY", "CHF", "CNY", "TRY", "BRL", "ZAR", "INR", "MXN"].map(code => ({ title: `USD/${code}`, meta: "Currency pair · live FX", view: "markets" }))
  ];
  const matches = pool.filter(item => `${item.title} ${item.meta}`.toLowerCase().includes(query)).slice(0, 8);
  document.querySelector("#searchResults").innerHTML = matches.length ? matches.map((item, index) => `
    <button class="search-result" data-search-index="${index}" type="button">
      <span><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.meta.toUpperCase())}</span></span>
      <span>OPEN →</span>
    </button>
  `).join("") : `<p class="search-hint">NO RESULTS FOR “${escapeHtml(term)}”</p>`;
  document.querySelectorAll("[data-search-index]").forEach((button, index) => {
    button.addEventListener("click", () => {
      closeSearch();
      navigateTo(matches[index].view);
      if (matches[index].incident) {
        setTimeout(() => {
          showIncident(matches[index].incident);
          map?.setView([matches[index].incident.lat, matches[index].incident.lng], 4);
        }, 180);
      }
    });
  });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function generateBrief() {
  const critical = incidents.filter(item => item.severity === "critical").length;
  const topSignal = signals[0].title;
  const topChoke = [...chokepoints].sort((a, b) => b.pressure - a.pressure)[0];
  const text = `ATLAS/WATCH SITUATION BRIEF\n${new Date().toUTCString()}\n\nRisk posture: HIGH (68/100)\nCritical incidents tracked: ${critical}\nPriority signal: ${topSignal}\nHighest supply-chain pressure: ${topChoke.name} (${topChoke.pressure}/100)\n\nOpen the dashboard for source reporting and regional detail.`;
  navigator.clipboard?.writeText(text).then(
    () => showToast("Situation brief copied to clipboard."),
    () => showToast("Brief generated. Clipboard access was blocked.")
  );
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => navigateTo(button.dataset.view)));
  document.querySelectorAll("[data-navigate]").forEach(button => button.addEventListener("click", () => navigateTo(button.dataset.navigate)));
  document.querySelectorAll(".map-layer").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".map-layer").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderMapMarkers(button.dataset.layer);
  }));
  document.querySelectorAll(".feed-filter").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".feed-filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    currentNewsFilter = button.dataset.newsFilter;
    renderNews();
  }));
  document.querySelectorAll("[data-fx-filter]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-fx-filter]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    currentFxFilter = button.dataset.fxFilter;
    renderFx(latestFxData);
  }));
  document.querySelectorAll("[data-credit-filter]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-credit-filter]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    currentCreditFilter = button.dataset.creditFilter;
    renderSovereigns();
  }));
  document.querySelector("#previewClose").addEventListener("click", () => document.querySelector("#incidentPreview").classList.remove("visible"));
  document.querySelector("#resetMap").addEventListener("click", () => map?.setView([24, 12], 2));
  document.querySelector("#searchToggle").addEventListener("click", openSearch);
  document.querySelector("#searchClose").addEventListener("click", closeSearch);
  document.querySelector("#searchOverlay").addEventListener("click", event => { if (event.target.id === "searchOverlay") closeSearch(); });
  document.querySelector("#globalSearch").addEventListener("input", event => searchData(event.target.value));
  document.querySelector("#briefButton").addEventListener("click", generateBrief);
  document.querySelector("#notificationButton").addEventListener("click", () => showToast("6 priority signals. Two are marked critical."));
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openSearch(); }
    if (event.key === "Escape") closeSearch();
  });
  document.querySelector("#overviewNewsList").addEventListener("click", event => {
    const link = event.target.closest('a[href="#"]');
    if (link) { event.preventDefault(); showToast("This is a fallback analyst note. Live source link unavailable."); }
  });
  document.querySelector("#fullNewsList").addEventListener("click", event => {
    const link = event.target.closest('a[href="#"]');
    if (link) { event.preventDefault(); showToast("This is a fallback analyst note. Live source link unavailable."); }
  });
}

function startClock() {
  const update = () => {
    document.querySelector("#utcClock").textContent = `${new Date().toISOString().slice(11, 19)} UTC`;
  };
  update();
  setInterval(update, 1000);
  document.querySelector("#reportDate").textContent = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase();
}

function init() {
  renderSignals();
  renderChokepoints();
  renderTheaters();
  renderMarketSummary();
  renderSovereigns();
  renderCreditCatalysts();
  renderFxVulnerability();
  renderSupply();
  renderFx(fallbackFx);
  renderNews();
  bindEvents();
  startClock();
  initMap();
  loadFx();
  loadNews();
}

document.addEventListener("DOMContentLoaded", init);
