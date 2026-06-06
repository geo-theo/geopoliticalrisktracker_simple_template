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
  { country: "Argentina", grade: "CCC", note: "Reserve adequacy and reform execution", signals: ["FX VOLATILITY", "INFLATION", "IMF PROGRAM"] },
  { country: "Pakistan", grade: "CCC+", note: "External financing and import cover", signals: ["ROLLOVER RISK", "IMF PROGRAM", "POLITICAL"] },
  { country: "Egypt", grade: "B-", note: "FX flexibility and debt-service burden", signals: ["DEVALUATION", "EXTERNAL DEBT", "GULF SUPPORT"] },
  { country: "Ghana", grade: "CCC+", note: "Restructuring implementation", signals: ["DEBT WORKOUT", "FISCAL", "FX"] },
  { country: "Tunisia", grade: "CCC-", note: "Financing gap and policy constraints", signals: ["FUNDING GAP", "REFORM", "SOCIAL RISK"] },
  { country: "Ecuador", grade: "B-", note: "Security shock and fiscal consolidation", signals: ["SECURITY", "FISCAL", "OIL"] },
  { country: "Nigeria", grade: "B-", note: "Reform pass-through and naira pressure", signals: ["FX", "INFLATION", "OIL OUTPUT"] }
];

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
  document.querySelector("#creditWatchlist").innerHTML = sovereigns.map(item => `
    <article class="credit-item">
      <div><h3>${item.country}</h3><p>${item.note}</p></div>
      <span class="credit-grade">${item.grade}</span>
      <div class="credit-signals">${item.signals.map(signal => `<span>${signal}</span>`).join("")}</div>
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

function fxChange(code) {
  const seeded = { EUR: .18, GBP: -.12, JPY: -.46, CHF: .08, CNY: -.07, TRY: -.71, BRL: .34, ZAR: -.23, INR: -.11, MXN: .42 };
  return seeded[code] || 0;
}

function fxRow(code, rate) {
  const names = { EUR: "EURO", GBP: "STERLING", JPY: "YEN", CHF: "FRANC", CNY: "RENMINBI", TRY: "LIRA", BRL: "REAL", ZAR: "RAND", INR: "RUPEE", MXN: "PESO" };
  const change = fxChange(code);
  return `
    <div class="fx-row">
      <div class="fx-code"><strong>USD/${code}</strong><span>${names[code]}</span></div>
      <span class="fx-rate">${Number(rate).toFixed(code === "JPY" || code === "INR" ? 2 : 4)}</span>
      <span class="fx-change ${change >= 0 ? "positive" : "negative"}">${change >= 0 ? "+" : ""}${change.toFixed(2)}%</span>
    </div>
  `;
}

function renderFx(data) {
  const priority = ["EUR", "JPY", "GBP", "CNY", "TRY"];
  const full = ["EUR", "GBP", "JPY", "CHF", "CNY", "TRY", "BRL", "ZAR", "INR", "MXN"];
  document.querySelector("#fxTable").innerHTML = priority.map(code => fxRow(code, data.rates[code])).join("");
  document.querySelector("#fullFxTable").innerHTML = full.map(code => fxRow(code, data.rates[code])).join("");
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
  renderSovereigns();
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
