const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

const CONFIG = {
  incidentPaths: ["data/incidents.json"],
  fallbackSeedPath: "data/seed-cases.json",
  translationPaths: {
    en: "data/incident-translations-en.json",
    ku: "data/incident-translations-ku.json",
  },
  uiTranslationPaths: { ku: "data/ui-translations-ku.json" },
  defaultCenter: [39.05, 35.05],
  defaultZoom: 6,
  timeZone: "Europe/Istanbul",
  localSubmissionKey: "cocuk_istismari_watch_pending_submissions",
  localLanguageKey: "cocuk_istismari_watch_language",
};

const SUPPORTED_LANGUAGES = [
  { key: "tr", label: "TR", htmlLang: "tr" },
  { key: "en", label: "EN", htmlLang: "en" },
  { key: "ku", label: "KU", htmlLang: "ku" },
];

const PROVINCES = [
  { key: "ADANA", name: "Adana", lat: 37.0, lng: 35.32 },
  { key: "ADIYAMAN", name: "Adıyaman", lat: 37.76, lng: 38.28 },
  { key: "AFYONKARAHISAR", name: "Afyonkarahisar", lat: 38.76, lng: 30.54 },
  { key: "AGRI", name: "Ağrı", lat: 39.72, lng: 43.05 },
  { key: "AKSARAY", name: "Aksaray", lat: 38.37, lng: 34.04 },
  { key: "AMASYA", name: "Amasya", lat: 40.65, lng: 35.83 },
  { key: "ANKARA", name: "Ankara", lat: 39.92, lng: 32.85 },
  { key: "ANTALYA", name: "Antalya", lat: 37.07, lng: 30.69 },
  { key: "ARDAHAN", name: "Ardahan", lat: 41.11, lng: 42.7 },
  { key: "ARTVIN", name: "Artvin", lat: 41.18, lng: 41.82 },
  { key: "AYDIN", name: "Aydın", lat: 37.84, lng: 28.0 },
  { key: "BALIKESIR", name: "Balıkesir", lat: 39.64, lng: 27.88 },
  { key: "BARTIN", name: "Bartın", lat: 41.64, lng: 32.34 },
  { key: "BATMAN", name: "Batman", lat: 37.88, lng: 41.13 },
  { key: "BAYBURT", name: "Bayburt", lat: 40.25, lng: 40.23 },
  { key: "BILECIK", name: "Bilecik", lat: 40.15, lng: 29.98 },
  { key: "BINGOL", name: "Bingöl", lat: 38.88, lng: 40.5 },
  { key: "BITLIS", name: "Bitlis", lat: 38.4, lng: 42.11 },
  { key: "BOLU", name: "Bolu", lat: 40.74, lng: 31.61 },
  { key: "BURDUR", name: "Burdur", lat: 37.72, lng: 30.29 },
  { key: "BURSA", name: "Bursa", lat: 40.18, lng: 29.06 },
  { key: "CANAKKALE", name: "Çanakkale", lat: 40.15, lng: 26.41 },
  { key: "CANKIRI", name: "Çankırı", lat: 40.6, lng: 33.62 },
  { key: "CORUM", name: "Çorum", lat: 40.55, lng: 34.96 },
  { key: "DENIZLI", name: "Denizli", lat: 37.78, lng: 29.09 },
  { key: "DIYARBAKIR", name: "Diyarbakır", lat: 37.91, lng: 40.22 },
  { key: "DUZCE", name: "Düzce", lat: 40.84, lng: 31.16 },
  { key: "EDIRNE", name: "Edirne", lat: 41.68, lng: 26.56 },
  { key: "ELAZIG", name: "Elazığ", lat: 38.68, lng: 39.22 },
  { key: "ERZINCAN", name: "Erzincan", lat: 39.75, lng: 39.5 },
  { key: "ERZURUM", name: "Erzurum", lat: 39.9, lng: 41.27 },
  { key: "ESKISEHIR", name: "Eskişehir", lat: 39.78, lng: 30.52 },
  { key: "GAZIANTEP", name: "Gaziantep", lat: 37.06, lng: 37.38 },
  { key: "GIRESUN", name: "Giresun", lat: 40.91, lng: 38.39 },
  { key: "GUMUSHANE", name: "Gümüşhane", lat: 40.46, lng: 39.48 },
  { key: "HAKKARI", name: "Hakkari", lat: 37.58, lng: 43.74 },
  { key: "HATAY", name: "Hatay", lat: 36.4, lng: 36.35 },
  { key: "IGDIR", name: "Iğdır", lat: 39.89, lng: 44.05 },
  { key: "ISPARTA", name: "Isparta", lat: 37.76, lng: 30.55 },
  { key: "ISTANBUL", name: "İstanbul", lat: 41.01, lng: 28.98 },
  { key: "IZMIR", name: "İzmir", lat: 38.42, lng: 27.14 },
  { key: "KAHRAMANMARAS", name: "Kahramanmaraş", lat: 37.58, lng: 36.93 },
  { key: "KARABUK", name: "Karabük", lat: 41.2, lng: 32.63 },
  { key: "KARAMAN", name: "Karaman", lat: 37.18, lng: 33.22 },
  { key: "KARS", name: "Kars", lat: 40.6, lng: 43.1 },
  { key: "KASTAMONU", name: "Kastamonu", lat: 41.38, lng: 33.78 },
  { key: "KAYSERI", name: "Kayseri", lat: 38.72, lng: 35.48 },
  { key: "KILIS", name: "Kilis", lat: 36.72, lng: 37.12 },
  { key: "KIRIKKALE", name: "Kırıkkale", lat: 39.85, lng: 33.52 },
  { key: "KIRKLARELI", name: "Kırklareli", lat: 41.73, lng: 27.22 },
  { key: "KIRSEHIR", name: "Kırşehir", lat: 39.15, lng: 34.16 },
  { key: "KOCAELI", name: "Kocaeli", lat: 40.77, lng: 29.94 },
  { key: "KONYA", name: "Konya", lat: 37.87, lng: 32.48 },
  { key: "KUTAHYA", name: "Kütahya", lat: 39.42, lng: 29.98 },
  { key: "MALATYA", name: "Malatya", lat: 38.35, lng: 38.31 },
  { key: "MANISA", name: "Manisa", lat: 38.61, lng: 27.43 },
  { key: "MARDIN", name: "Mardin", lat: 37.31, lng: 40.74 },
  { key: "MERSIN", name: "Mersin", lat: 36.8, lng: 34.63 },
  { key: "MUGLA", name: "Muğla", lat: 37.22, lng: 28.36 },
  { key: "MUS", name: "Muş", lat: 38.73, lng: 41.49 },
  { key: "NEVSEHIR", name: "Nevşehir", lat: 38.62, lng: 34.71 },
  { key: "NIGDE", name: "Niğde", lat: 37.97, lng: 34.68 },
  { key: "ORDU", name: "Ordu", lat: 40.98, lng: 37.88 },
  { key: "OSMANIYE", name: "Osmaniye", lat: 37.07, lng: 36.25 },
  { key: "RIZE", name: "Rize", lat: 41.03, lng: 40.52 },
  { key: "SAKARYA", name: "Sakarya", lat: 40.78, lng: 30.4 },
  { key: "SAMSUN", name: "Samsun", lat: 41.29, lng: 36.33 },
  { key: "SANLIURFA", name: "Şanlıurfa", lat: 37.16, lng: 38.79 },
  { key: "SIIRT", name: "Siirt", lat: 37.93, lng: 41.94 },
  { key: "SINOP", name: "Sinop", lat: 42.03, lng: 35.15 },
  { key: "SIRNAK", name: "Şırnak", lat: 37.52, lng: 42.46 },
  { key: "SIVAS", name: "Sivas", lat: 39.75, lng: 37.02 },
  { key: "TEKIRDAG", name: "Tekirdağ", lat: 40.98, lng: 27.51 },
  { key: "TOKAT", name: "Tokat", lat: 40.31, lng: 36.55 },
  { key: "TRABZON", name: "Trabzon", lat: 41.0, lng: 39.72 },
  { key: "TUNCELI", name: "Tunceli", lat: 39.11, lng: 39.55 },
  { key: "USAK", name: "Uşak", lat: 38.68, lng: 29.41 },
  { key: "VAN", name: "Van", lat: 38.5, lng: 43.37 },
  { key: "YALOVA", name: "Yalova", lat: 40.65, lng: 29.27 },
  { key: "YOZGAT", name: "Yozgat", lat: 39.82, lng: 34.81 },
  { key: "ZONGULDAK", name: "Zonguldak", lat: 41.45, lng: 31.79 },
];

const PROVINCE_BY_KEY = Object.fromEntries(PROVINCES.map((item) => [item.key, item]));
const PROVINCE_BY_NAME = Object.fromEntries(PROVINCES.map((item) => [item.name, item]));

const ABUSE_TYPES = ["sexual_abuse", "physical_abuse", "neglect", "institutional_abuse", "multiple_or_unclear"];
const STATUS_TYPES = ["reported", "investigation", "indictment", "trial", "conviction", "acquittal", "dismissed_or_closed", "unknown"];
const SOURCE_TYPES = ["official", "court", "rights_org", "news", "report", "social_media", "other"];
const LAYER_ORDER = [
  "recent_verified",
  "active_legal_process",
  "institutional_case",
  "conviction",
  "acquittal_or_closed",
  "unknown_status",
];
const DEFAULT_LAYERS = ["recent_verified", "active_legal_process", "institutional_case"];
const QUICK_LAYERS = ["recent_verified", "active_legal_process", "institutional_case", "conviction"];
const DATE_RANGES = ["all", "last_30_days", "last_3_months", "last_6_months", "last_12_months"];

const LAYER_COLORS = {
  recent_verified: "#2563eb",
  active_legal_process: "#b91c1c",
  institutional_case: "#7c3aed",
  conviction: "#15803d",
  acquittal_or_closed: "#64748b",
  unknown_status: "#d97706",
};

const COPY = {
  tr: {
    meta: {
      title: "Çocuk İstismarı Takip",
      description: "Türkiye'de kamuya yansımış ve kaynaklı çocuk istismarı vakalarını izleyen açık harita.",
    },
    brand: { first: "Çocuk", rest: "İstismarı Takip" },
    language: { label: "Dil seçimi", options: { tr: "Türkçe", en: "İngilizce", ku: "Kurmancî" } },
    nav: { filters: "Filtre", listAll: "Listele", methodology: "Yöntem", sources: "Kaynaklar", submit: "+ Bildir" },
    common: { cancel: "Vazgeç", close: "Kapat", notSpecified: "Belirtilmedi", source: "Kaynak" },
    stats: { label: "Genel görünüm", total: "Toplam kayıt", active: "Aktif süreç", institutional: "Kurumsal vaka", convictions: "Mahkûmiyet" },
    filters: {
      panel: "Filtreler",
      panelTitle: "Kayıtları daralt",
      search: "Ara",
      searchPlaceholder: "Vaka, kurum, il, kaynak...",
      dateRange: "Tarih aralığı",
      province: "İl",
      layers: "Katmanlar",
      abuseType: "İstismar türü",
      status: "Hukuki durum",
      sourceType: "Kaynak türü",
      dateRanges: {
        all: "Tüm tarihler",
        last_30_days: "Son 30 gün",
        last_3_months: "Son 3 ay",
        last_6_months: "Son 6 ay",
        last_12_months: "Son 12 ay",
      },
      allProvinces: "Tüm iller",
    },
    map: { results: "sonuç" },
    empty: {
      title: "Haritadan bir kayıt seçin",
      text: "Varsayılan harita, kaynaklı son kayıtları, aktif yargı süreçlerini ve kurumsal bağlamlı vakaları gösterir. Toplu resmi istatistikler bağlam olarak verilir, nokta olarak haritalanmaz.",
      context: "Bağlam kaynakları",
      aggregateTitle: "Resmi istatistik bağlamı",
      aggregateNote: "TÜİK ve Adalet Bakanlığı verileri ülke ölçeğinde bağlam sağlar. Haritada yalnızca kaynak URL'si olan tekil kamu kayıtları yer alır.",
    },
    list: { label: "Kayıt listesi", title: "Filtredeki kayıtlar", countLabel: "kayıt", empty: "Bu filtrelerde kayıt yok." },
    recordType: { abuse_case: "İstismar kaydı" },
    abuseType: {
      sexual_abuse: "Cinsel istismar",
      physical_abuse: "Fiziksel istismar",
      neglect: "İhmal",
      institutional_abuse: "Kurumsal istismar",
      multiple_or_unclear: "Birden çok / belirsiz",
    },
    status: {
      reported: "Kamuya yansıdı",
      investigation: "Soruşturma",
      indictment: "İddianame",
      trial: "Yargılama",
      conviction: "Mahkûmiyet",
      acquittal: "Beraat",
      dismissed_or_closed: "Kapandı / düştü",
      unknown: "Bilinmiyor",
      needs_review: "İnceleme bekliyor",
    },
    layer: {
      recent_verified: "Son kaynaklı kayıt",
      active_legal_process: "Aktif hukuki süreç",
      institutional_case: "Kurumsal bağlam",
      conviction: "Mahkûmiyet",
      acquittal_or_closed: "Beraat / kapandı",
      unknown_status: "Durum bilinmiyor",
    },
    quickLayer: {
      recent_verified: "Son",
      active_legal_process: "Aktif",
      institutional_case: "Kurum",
      conviction: "Karar",
    },
    sourceType: {
      official: "Resmi",
      court: "Mahkeme / hukuk",
      rights_org: "Hak örgütü",
      news: "Haber",
      report: "Rapor",
      social_media: "Sosyal medya",
      other: "Diğer",
    },
    detail: {
      summary: "Özet",
      abuseType: "Tür",
      legalStatus: "Hukuki durum",
      affectedChildren: "Etkilenen çocuk",
      institution: "Kurum / bağlam",
      reportedDate: "Kamuya yansıma",
      eventDate: "Olay tarihi",
      indictmentDate: "İddianame",
      trialDate: "Duruşma",
      decisionDate: "Karar tarihi",
      lastVerified: "Son teyit",
      locations: "Konumlar",
      timeline: "Zaman çizelgesi",
      sources: "Kaynaklar",
      sourceType: "Kaynak türü",
      geocode: "Konum kesinliği",
    },
    geocodePrecision: {
      exact: "tam koordinat",
      venue_approx: "kamuya açık yer yaklaşık",
      district_centroid: "ilçe merkezi",
      province_centroid: "il merkezi",
      unknown: "bilinmiyor",
    },
    submit: {
      label: "İnceleme kuyruğu",
      title: "Vaka veya kaynak bildir",
      abuseType: "İstismar türü",
      province: "İl",
      caseTitle: "Başlık",
      caseTitlePlaceholder: "Örn. Bir ilde çocuk istismarı davasında iddianame kabul edildi",
      summary: "Kısa özet",
      summaryPlaceholder: "Kaynakta ne aktarılıyor? Soruşturma, iddianame, duruşma veya karar durumu nedir?",
      location: "Konum adı",
      locationPlaceholder: "İlçe, mahkeme, kamu kurumu veya genel konum...",
      date: "Kamuya yansıma tarihi",
      sourceUrl: "Kaynak URL",
      sourceTitle: "Kaynak başlığı",
      sourceType: "Kaynak türü",
      contact: "İletişim",
      contactPlaceholder: "İsteğe bağlı e-posta",
      note: "Bildirimler editör incelemesinden sonra yayımlanır. Çocuğun kimliği, özel adresi, okul bilgisi veya aile ayrıntısı kamuya açık ve gerekli değilse eklenmemelidir.",
      send: "İncelemeye gönder",
      successTitle: "Bildirim alındı",
      successLocal: "Supabase yapılandırılmadığı için bildirim bu tarayıcıda demo kuyruğuna kaydedildi.",
      successRemote: "Bildirim Supabase inceleme kuyruğuna kaydedildi.",
      missing: "Tür, başlık, özet, il ve kaynak URL zorunludur.",
      badUrl: "Kaynak URL http veya https ile başlamalıdır.",
      badCoords: "Koordinatlar zorunludur; lat/lng birlikte girilmeli ve sayı olmalıdır.",
    },
    methodology: {
      label: "Yöntem",
      title: "Kayıt ve güvenlik ilkeleri",
      p1: "Çocuk İstismarı Takip, Türkiye'de kamuya yansımış ve kaynak URL'si bulunan çocuk istismarı vakalarını haritalar. Kayıtlar haber, resmi açıklama, mahkeme süreci veya hak örgütü raporu gibi kaynaklara dayalıdır.",
      p2: "Kayıt dili iddia, soruşturma, iddianame, yargılama ve karar aşamalarını ayırır. Devam eden dosyalarda kaynak atfı korunur; mahkeme kararı yoksa olay bağımsız kesin hüküm gibi yazılmaz.",
      p3: "Çocuk güvenliği esastır: harita özel adres, okul, aile ilişkisi veya kimlik ayrıntılarını kaynağın ötesinde zenginleştirmez. Resmi/aggregate istatistikler bağlam panelinde tutulur, toplu nokta olarak gösterilmez.",
    },
    sources: { label: "Kaynaklar", title: "Başlangıç kaynak havuzu" },
    sourceLinks: {
      tuik: "TÜİK Türkiye'deki Çocuklar 2024",
      justiceStats: "Adalet Bakanlığı Adalet İstatistikleri 2025",
      victimServices: "Adli Destek ve Mağdur Hizmetleri",
      bianetCase: "Bianet çocuk istismarı dava izlemesi",
      ucim: "UCİM",
    },
  },
  en: {
    meta: {
      title: "Child Abuse Watch",
      description: "An open map tracking public, source-backed child-abuse cases in Türkiye.",
    },
    brand: { first: "Child Abuse", rest: "Watch" },
    language: { label: "Language", options: { tr: "Turkish", en: "English", ku: "Kurmanji" } },
    nav: { filters: "Filter", listAll: "List", methodology: "Method", sources: "Sources", submit: "+ Report" },
    common: { cancel: "Cancel", close: "Close", notSpecified: "Not specified", source: "Source" },
    stats: { label: "Overview", total: "Total records", active: "Active process", institutional: "Institutional", convictions: "Convictions" },
    filters: {
      panel: "Filters",
      panelTitle: "Narrow records",
      search: "Search",
      searchPlaceholder: "Case, institution, province, source...",
      dateRange: "Date range",
      province: "Province",
      layers: "Layers",
      abuseType: "Abuse type",
      status: "Legal status",
      sourceType: "Source type",
      dateRanges: {
        all: "All dates",
        last_30_days: "Last 30 days",
        last_3_months: "Last 3 months",
        last_6_months: "Last 6 months",
        last_12_months: "Last 12 months",
      },
      allProvinces: "All provinces",
    },
    map: { results: "results" },
    empty: {
      title: "Select a record on the map",
      text: "By default the map shows recent sourced records, active legal processes, and institution-related cases. Aggregate official statistics are shown as context, not map dots.",
      context: "Context sources",
      aggregateTitle: "Official statistics context",
      aggregateNote: "TÜİK and Ministry of Justice data provide national context. The map contains only individual public records with source URLs.",
    },
    list: { label: "Record list", title: "Filtered records", countLabel: "records", empty: "No records match these filters." },
    recordType: { abuse_case: "Abuse record" },
    abuseType: {
      sexual_abuse: "Sexual abuse",
      physical_abuse: "Physical abuse",
      neglect: "Neglect",
      institutional_abuse: "Institutional abuse",
      multiple_or_unclear: "Multiple / unclear",
    },
    status: {
      reported: "Publicly reported",
      investigation: "Investigation",
      indictment: "Indictment",
      trial: "Trial",
      conviction: "Conviction",
      acquittal: "Acquittal",
      dismissed_or_closed: "Dismissed / closed",
      unknown: "Unknown",
      needs_review: "Needs review",
    },
    layer: {
      recent_verified: "Recent sourced record",
      active_legal_process: "Active legal process",
      institutional_case: "Institutional context",
      conviction: "Conviction",
      acquittal_or_closed: "Acquittal / closed",
      unknown_status: "Unknown status",
    },
    quickLayer: {
      recent_verified: "Recent",
      active_legal_process: "Active",
      institutional_case: "Institution",
      conviction: "Decision",
    },
    sourceType: {
      official: "Official",
      court: "Court / legal",
      rights_org: "Rights org",
      news: "News",
      report: "Report",
      social_media: "Social media",
      other: "Other",
    },
    detail: {
      summary: "Summary",
      abuseType: "Type",
      legalStatus: "Legal status",
      affectedChildren: "Affected children",
      institution: "Institution / context",
      reportedDate: "Public report date",
      eventDate: "Event date",
      indictmentDate: "Indictment",
      trialDate: "Hearing",
      decisionDate: "Decision date",
      lastVerified: "Last verified",
      locations: "Locations",
      timeline: "Timeline",
      sources: "Sources",
      sourceType: "Source type",
      geocode: "Geocode precision",
    },
    geocodePrecision: {
      exact: "exact",
      venue_approx: "approx. public venue",
      district_centroid: "district centroid",
      province_centroid: "province centroid",
      unknown: "unknown",
    },
    submit: {
      label: "Review queue",
      title: "Report a case or source",
      abuseType: "Abuse type",
      province: "Province",
      caseTitle: "Title",
      caseTitlePlaceholder: "E.g. indictment accepted in a child-abuse case",
      summary: "Short summary",
      summaryPlaceholder: "What does the source report? What is the investigation, indictment, trial, or decision status?",
      location: "Location name",
      locationPlaceholder: "District, court, public institution, or general location...",
      date: "Public report date",
      sourceUrl: "Source URL",
      sourceTitle: "Source title",
      sourceType: "Source type",
      contact: "Contact",
      contactPlaceholder: "Optional email",
      note: "Reports are published after editorial review. Do not add a child's identity, private address, school, or family detail unless it is public and necessary.",
      send: "Send for review",
      successTitle: "Report received",
      successLocal: "Supabase is not configured, so the report was saved to this browser's demo queue.",
      successRemote: "The report was saved to the Supabase review queue.",
      missing: "Type, title, summary, province, and source URL are required.",
      badUrl: "The source URL must start with http or https.",
      badCoords: "Latitude and longitude are required and must be entered together as numbers.",
    },
    methodology: {
      label: "Method",
      title: "Recording and safety rules",
      p1: "Child Abuse Watch maps public child-abuse cases in Türkiye when they have a stable source URL. Records are based on news, official statements, court-process reporting, or rights-organization reports.",
      p2: "Record language separates allegations, investigations, indictments, trials, and decisions. Active cases keep source attribution; unresolved cases are not written as final findings.",
      p3: "Child safety is the baseline: the map does not enrich private address, school, family, or identity details beyond what the source publicly and necessarily provides. Aggregate statistics stay in the context panel.",
    },
    sources: { label: "Sources", title: "Initial source pool" },
    sourceLinks: {
      tuik: "TÜİK Children in Türkiye 2024",
      justiceStats: "Ministry of Justice Justice Statistics 2025",
      victimServices: "Judicial Support and Victim Services",
      bianetCase: "Bianet child-abuse case monitoring",
      ucim: "UCİM",
    },
  },
};

const state = {
  map: null,
  sb: null,
  records: [],
  recordTranslations: {},
  filtered: [],
  markers: new Map(),
  layerFilters: new Set(DEFAULT_LAYERS),
  abuseFilters: new Set(ABUSE_TYPES),
  statusFilters: new Set(STATUS_TYPES),
  sourceFilters: new Set(SOURCE_TYPES),
  dateRange: "last_12_months",
  province: "",
  search: "",
  selectedRecordId: null,
  lang: "tr",
  listOpen: false,
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  state.lang = initialLanguage();
  document.documentElement.lang = currentLanguage().htmlLang;
  initMap();
  initSupabase();
  await loadUiTranslations();
  bindStaticEvents();
  await loadRecords();
  populateControls();
  applyTranslations();
  applyFilters();
}

function initMap() {
  state.map = L.map("map", { zoomControl: false }).setView(CONFIG.defaultCenter, CONFIG.defaultZoom);
  L.control.zoom({ position: "topright" }).addTo(state.map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(state.map);
  state.map.on("zoomend", renderMarkers);
  state.map.on("click", clearSelection);
}

function initSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !window.supabase) return;
  state.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function loadRecords() {
  if (state.sb) {
    const { data, error } = await state.sb
      .from("cases")
      .select("*, case_locations(*), case_sources(*), case_timeline(*)")
      .eq("verification_status", "verified");
    if (!error && Array.isArray(data)) {
      state.records = data.map(normalizeSupabaseRecord).filter(hasPublicSource);
      await loadRecordTranslations();
      applyRecordTranslations();
      return;
    }
    showLoadNotice(`Supabase okunamadı, statik veri kullanılıyor: ${error?.message || "bilinmeyen hata"}`);
  }

  try {
    const incidentPayloads = await Promise.all(CONFIG.incidentPaths.map(fetchJson));
    state.records = incidentPayloads.flatMap(extractRecords).map(normalizeRecord).filter(hasPublicSource);
  } catch (error) {
    showLoadNotice(`Yeni veri dosyaları okunamadı, seed yedeği deneniyor: ${error.message}`);
    const fallback = await fetchJson(CONFIG.fallbackSeedPath);
    state.records = extractRecords(fallback).map(normalizeRecord).filter(hasPublicSource);
  }

  await loadRecordTranslations();
  applyRecordTranslations();
}

async function loadUiTranslations() {
  const entries = Object.entries(CONFIG.uiTranslationPaths || {});
  await Promise.all(entries.map(async ([lang, path]) => {
    try {
      const payload = await fetchJson(path);
      COPY[lang] = deepMerge(COPY[lang] || {}, payload.copy || payload);
    } catch (error) {
      showLoadNotice(`${path} okunamadı; arayüz çevirisi atlandı.`);
    }
  }));
}

async function loadRecordTranslations() {
  const entries = Object.entries(CONFIG.translationPaths || {});
  const payloads = await Promise.all(entries.map(async ([lang, path]) => {
    try {
      return [lang, await fetchJson(path)];
    } catch (error) {
      showLoadNotice(`${path} okunamadı; kayıt çevirileri atlandı.`);
      return [lang, null];
    }
  }));

  state.recordTranslations = {};
  for (const [lang, payload] of payloads) {
    const records = payload?.records || {};
    for (const [id, translation] of Object.entries(records)) {
      state.recordTranslations[id] = {
        ...(state.recordTranslations[id] || {}),
        [lang]: translation,
      };
    }
  }
}

function applyRecordTranslations() {
  state.records.forEach((record) => {
    record.i18n = state.recordTranslations[record.id] || {};
    record.search_blob = buildSearchBlob(record);
  });
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`${path} ${response.status}`);
  return response.json();
}

function extractRecords(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.records)) return payload.records;
  if (Array.isArray(payload.cases)) return payload.cases;
  return [];
}

function normalizeSupabaseRecord(row) {
  return normalizeRecord({
    ...row,
    locations: row.case_locations || row.locations || [],
    sources: row.case_sources || row.sources || [],
    timeline: row.case_timeline || row.timeline || [],
  });
}

function normalizeRecord(raw) {
  const provinceFromKey = raw.province_key ? PROVINCE_BY_KEY[raw.province_key]?.name : null;
  const fallbackProvince = provinceFromKey || raw.province || "";
  const topLocation = raw.lat || raw.lng || fallbackProvince ? [{
    id: `${raw.id || raw.public_id || raw.title}-loc`,
    label: raw.location_label || raw.institution || raw.title,
    province_key: raw.province_key,
    province: fallbackProvince,
    district: raw.district || "",
    lat: raw.lat,
    lng: raw.lng,
    geocode_precision: raw.geocode_precision,
    location_basis: raw.location_basis,
  }] : [];

  const locations = (raw.locations?.length ? raw.locations : topLocation).map((location, index) => {
    const provinceKey = location.province_key || raw.province_key || keyForProvince(location.province || fallbackProvince);
    const province = PROVINCE_BY_KEY[provinceKey]?.name || location.province || fallbackProvince;
    const center = PROVINCE_BY_KEY[provinceKey] || PROVINCE_BY_NAME[province] || {};
    return {
      id: location.id || `${raw.id || raw.public_id || "record"}-${index}`,
      label: location.label || raw.location_label || raw.institution || raw.title || province,
      province_key: provinceKey || "",
      province,
      district: cleanTitle(location.district || raw.district || ""),
      lat: finiteNumber(location.lat) ?? finiteNumber(raw.lat) ?? center.lat ?? null,
      lng: finiteNumber(location.lng) ?? finiteNumber(raw.lng) ?? center.lng ?? null,
      geocode_precision: location.geocode_precision || raw.geocode_precision || (location.lat && location.lng ? "exact" : "province_centroid"),
      location_basis: location.location_basis || location.location_note || raw.location_basis || "",
    };
  }).filter((location) => Number.isFinite(location.lat) && Number.isFinite(location.lng));

  const record = {
    id: String(raw.id || raw.public_id || slugify(raw.title || cryptoRandomId())),
    public_id: raw.public_id || raw.id || "",
    record_type: raw.record_type || "abuse_case",
    abuse_type: ABUSE_TYPES.includes(raw.abuse_type) ? raw.abuse_type : "multiple_or_unclear",
    status: STATUS_TYPES.includes(raw.status) ? raw.status : "unknown",
    title: raw.title || "İsimsiz kayıt",
    summary: raw.summary || "",
    institution: raw.institution || raw.employer || "",
    legal_status: raw.legal_status || "",
    affected_child_count: finiteNumber(raw.affected_child_count) ?? null,
    event_date: raw.event_date || null,
    reported_date: raw.reported_date || raw.published_at || null,
    indictment_date: raw.indictment_date || null,
    trial_date: raw.trial_date || null,
    decision_date: raw.decision_date || null,
    last_verified_at: raw.last_verified_at || raw.updated_at || null,
    locations,
    sources: (raw.sources || []).map((source) => ({
      title: source.title || source.source_title || source.url || "",
      url: source.url || source.source_url || "",
      publisher: source.publisher || source.source_publisher || "",
      type: SOURCE_TYPES.includes(source.type) ? source.type : "other",
      published_at: source.published_at || source.source_published_at || null,
    })),
    timeline: (raw.timeline || []).map((item) => ({
      date: item.date || null,
      status: STATUS_TYPES.includes(item.status) ? item.status : raw.status || "unknown",
      note: item.note || "",
    })),
  };

  record.layer = getLayer(record);
  record.search_blob = buildSearchBlob(record);
  return record;
}

function hasPublicSource(record) {
  return record.sources.some((source) => /^https?:\/\//i.test(source.url));
}

function getLayer(record) {
  if (record.abuse_type === "institutional_abuse") return "institutional_case";
  if (["investigation", "indictment", "trial"].includes(record.status)) return "active_legal_process";
  if (record.status === "conviction") return "conviction";
  if (["acquittal", "dismissed_or_closed"].includes(record.status)) return "acquittal_or_closed";
  if (record.status === "unknown") return "unknown_status";
  return "recent_verified";
}

function bindStaticEvents() {
  document.getElementById("mobile-filter-btn").addEventListener("click", openFilters);
  document.getElementById("close-filter-btn").addEventListener("click", closeFilters);
  document.getElementById("drawer-scrim").addEventListener("click", closeFilters);
  document.getElementById("methodology-btn").addEventListener("click", () => openModal("methodology-modal"));
  document.getElementById("sources-btn").addEventListener("click", () => openModal("sources-modal"));
  document.getElementById("open-submit-btn").addEventListener("click", () => openModal("submit-modal"));
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langOption));
  });
  document.getElementById("list-records-btn").addEventListener("click", () => {
    state.listOpen ? closeRecordList() : renderRecordList();
  });
  document.getElementById("submission-form").addEventListener("submit", submitReport);

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeOpenModal);
  });
  document.querySelectorAll(".modal-backdrop").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeOpenModal();
    });
  });

  document.getElementById("search-input").addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLocaleLowerCase(localeForLang());
    applyFilters();
  });
  document.getElementById("date-range-filter").addEventListener("change", (event) => {
    state.dateRange = event.target.value;
    applyFilters();
  });
  document.getElementById("province-filter").addEventListener("change", (event) => {
    state.province = event.target.value;
    applyFilters();
  });

  document.getElementById("layer-filters").addEventListener("change", (event) => updateSetFilter(event, state.layerFilters));
  document.getElementById("abuse-type-filters").addEventListener("change", (event) => updateSetFilter(event, state.abuseFilters));
  document.getElementById("status-filters").addEventListener("change", (event) => updateSetFilter(event, state.statusFilters));
  document.getElementById("source-type-filters").addEventListener("change", (event) => updateSetFilter(event, state.sourceFilters));
  document.getElementById("mobile-chipbar").addEventListener("click", (event) => {
    const button = event.target.closest("[data-quick-layer]");
    if (!button) return;
    const layer = button.dataset.quickLayer;
    state.layerFilters.has(layer) ? state.layerFilters.delete(layer) : state.layerFilters.add(layer);
    populateControls();
    applyFilters();
  });
}

function updateSetFilter(event, set) {
  const input = event.target;
  if (!input.matches("input[type='checkbox']")) return;
  input.checked ? set.add(input.value) : set.delete(input.value);
  applyFilters();
}

function populateControls() {
  document.getElementById("date-range-filter").innerHTML = DATE_RANGES
    .map((range) => optionHtml(range, t(`filters.dateRanges.${range}`), state.dateRange === range))
    .join("");

  document.getElementById("province-filter").innerHTML = [
    optionHtml("", t("filters.allProvinces"), state.province === ""),
    ...PROVINCES.map((province) => optionHtml(province.name, province.name, state.province === province.name)),
  ].join("");
  document.getElementById("submission-province").innerHTML = `<option value=""></option>${PROVINCES.map((province) => optionHtml(province.name, province.name, false)).join("")}`;
  document.getElementById("submission-abuse-type").innerHTML = ABUSE_TYPES
    .map((type) => optionHtml(type, t(`abuseType.${type}`), false))
    .join("");
  document.getElementById("submission-source-type").innerHTML = SOURCE_TYPES
    .map((type) => optionHtml(type, t(`sourceType.${type}`), type === "news"))
    .join("");

  renderCheckboxGroup("layer-filters", LAYER_ORDER, state.layerFilters, "layer", LAYER_COLORS);
  renderCheckboxGroup("abuse-type-filters", ABUSE_TYPES, state.abuseFilters, "abuseType");
  renderCheckboxGroup("status-filters", STATUS_TYPES, state.statusFilters, "status");
  renderCheckboxGroup("source-type-filters", SOURCE_TYPES, state.sourceFilters, "sourceType");
}

function optionHtml(value, label, selected) {
  return `<option value="${escapeAttribute(value)}" ${selected ? "selected" : ""}>${escapeHtml(label)}</option>`;
}

function renderCheckboxGroup(containerId, values, selectedSet, labelKey, colors = null) {
  document.getElementById(containerId).innerHTML = values.map((value) => `
    <label class="check-row">
      <input type="checkbox" value="${escapeAttribute(value)}" ${selectedSet.has(value) ? "checked" : ""}>
      <span>${escapeHtml(t(`${labelKey}.${value}`))}</span>
      ${colors ? `<i class="check-dot" style="background:${colors[value]}"></i>` : ""}
    </label>
  `).join("");
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.some((item) => item.key === lang) || state.lang === lang) return;
  state.lang = lang;
  document.documentElement.lang = currentLanguage().htmlLang;
  localStorage.setItem(CONFIG.localLanguageKey, state.lang);
  state.records.forEach((record) => {
    record.search_blob = buildSearchBlob(record);
  });
  populateControls();
  applyTranslations();
  applyFilters();
}

function applyTranslations() {
  document.title = t("meta.title");
  document.querySelector("meta[name='description']")?.setAttribute("content", t("meta.description"));
  document.querySelector(".brand")?.setAttribute("aria-label", t("meta.title"));
  const languageSwitch = document.getElementById("language-switch");
  languageSwitch?.setAttribute("aria-label", t("language.label"));
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === state.lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-label", t(`language.options.${button.dataset.langOption}`));
  });
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
}

function applyFilters() {
  state.filtered = state.records.filter(recordMatchesFilters);
  renderStats();
  renderLegend();
  renderQuickLayers();
  renderMarkers();
  renderResultCount();
  if (state.listOpen) renderRecordList();
  if (state.selectedRecordId) {
    const selected = state.filtered.find((record) => record.id === state.selectedRecordId);
    selected ? renderDetail(selected) : clearSelection();
  }
}

function recordMatchesFilters(record) {
  if (!state.layerFilters.has(record.layer)) return false;
  if (!state.abuseFilters.has(record.abuse_type)) return false;
  if (!state.statusFilters.has(record.status)) return false;
  if (state.province && !record.locations.some((location) => location.province === state.province)) return false;
  if (!recordMatchesDateRange(record)) return false;
  if (!record.sources.some((source) => state.sourceFilters.has(source.type || "other"))) return false;
  if (state.search && !record.search_blob.includes(state.search)) return false;
  return true;
}

function recordMatchesDateRange(record) {
  if (state.dateRange === "all") return true;
  const date = parseDate(recordDateValue(record));
  if (!date) return false;
  const today = turkeyToday();
  const since = new Date(today);
  if (state.dateRange === "last_30_days") since.setDate(since.getDate() - 30);
  if (state.dateRange === "last_3_months") since.setMonth(since.getMonth() - 3);
  if (state.dateRange === "last_6_months") since.setMonth(since.getMonth() - 6);
  if (state.dateRange === "last_12_months") since.setMonth(since.getMonth() - 12);
  return date >= since;
}

function renderStats() {
  document.getElementById("stat-total").textContent = formatCount(state.filtered.length);
  document.getElementById("stat-active").textContent = formatCount(state.filtered.filter((record) => ["investigation", "indictment", "trial"].includes(record.status)).length);
  document.getElementById("stat-institutional").textContent = formatCount(state.filtered.filter((record) => record.abuse_type === "institutional_abuse").length);
  document.getElementById("stat-convictions").textContent = formatCount(state.filtered.filter((record) => record.status === "conviction").length);
}

function renderLegend() {
  document.getElementById("legend-card").innerHTML = LAYER_ORDER.map((layer) => (
    `<div class="legend-row"><span class="legend-dot" style="background:${LAYER_COLORS[layer]}"></span>${escapeHtml(t(`layer.${layer}`))}</div>`
  )).join("");
}

function renderQuickLayers() {
  const counts = Object.fromEntries(QUICK_LAYERS.map((layer) => [
    layer,
    state.records.filter((record) => record.layer === layer && recordMatchesDateRange(record) && displayLocations(record).length).length,
  ]));
  document.getElementById("mobile-chipbar").innerHTML = QUICK_LAYERS.map((layer) => {
    const active = state.layerFilters.has(layer) ? "active" : "";
    return `<button class="quick-chip ${active}" type="button" data-quick-layer="${layer}">
      <span class="quick-dot" style="background:${LAYER_COLORS[layer]}"></span>${escapeHtml(t(`quickLayer.${layer}`))} ${formatCount(counts[layer])}
    </button>`;
  }).join("");
}

function renderResultCount() {
  document.getElementById("result-count").textContent = formatCount(state.filtered.length);
}

function renderMarkers() {
  for (const marker of state.markers.values()) marker.remove();
  state.markers.clear();

  const coordinateCounts = new Map();
  state.filtered.forEach((record) => {
    displayLocations(record).forEach((location) => {
      const key = `${location.lat.toFixed(3)},${location.lng.toFixed(3)}`;
      coordinateCounts.set(key, (coordinateCounts.get(key) || 0) + 1);
    });
  });
  const coordinateIndexes = new Map();

  state.filtered.forEach((record) => {
    displayLocations(record).forEach((location) => {
      const key = `${location.lat.toFixed(3)},${location.lng.toFixed(3)}`;
      const index = coordinateIndexes.get(key) || 0;
      coordinateIndexes.set(key, index + 1);
      const offset = coordinateCounts.get(key) > 1 ? markerOffset(index, coordinateCounts.get(key)) : { x: 0, y: 0 };
      const selected = record.id === state.selectedRecordId ? "selected" : "";
      const icon = L.divIcon({
        className: "case-marker-shell",
        html: `<span class="case-marker ${record.layer} ${selected}" aria-hidden="true"></span>`,
        iconSize: [18, 18],
        iconAnchor: [9 - offset.x, 9 - offset.y],
      });
      const marker = L.marker([location.lat, location.lng], {
        icon,
        keyboard: true,
        title: recordText(record, "title"),
      }).addTo(state.map);
      marker.on("click", (event) => {
        L.DomEvent.stopPropagation(event);
        selectRecord(record.id, location);
      });
      marker.setZIndexOffset(record.id === state.selectedRecordId ? 1000 : 0);
      state.markers.set(`${record.id}:${location.id}`, marker);
    });
  });
}

function markerOffset(index, total) {
  if (total <= 1) return { x: 0, y: 0 };
  let ringStart = 0;
  let ring = 0;
  let slots = 1;
  while (index >= ringStart + slots) {
    ringStart += slots;
    ring += 1;
    slots = Math.min(total - ringStart, 8 * (ring + 1));
  }
  const slot = index - ringStart;
  const angle = ((Math.PI * 2) / slots) * slot - Math.PI / 2;
  const zoom = state.map?.getZoom?.() || CONFIG.defaultZoom;
  const zoomSpread = Math.min(Math.max(0, zoom - CONFIG.defaultZoom) * 4.5, 33);
  const radius = 12 + zoomSpread + (ring * (8 + (zoomSpread * 0.55)));
  return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
}

function displayLocations(record) {
  return record.locations.filter((location) => Number.isFinite(location.lat) && Number.isFinite(location.lng));
}

function renderRecordList() {
  const panel = document.getElementById("record-list-panel");
  const records = sortedFilteredRecords();
  state.listOpen = true;

  document.getElementById("case-detail").hidden = true;
  document.getElementById("empty-detail").hidden = true;
  panel.hidden = false;
  document.body.classList.add("detail-open");

  panel.innerHTML = `
    <header class="record-list-header">
      <div>
        <div class="section-label">${escapeHtml(t("list.label"))}</div>
        <h2>${escapeHtml(t("list.title"))}</h2>
        <p>${escapeHtml(formatCount(records.length))} ${escapeHtml(t("list.countLabel"))}</p>
      </div>
      <button class="icon-btn" type="button" data-close-list aria-label="${escapeHtml(t("common.close"))}">×</button>
    </header>
    ${records.length ? `<div class="record-list">${records.map(renderRecordListItem).join("")}</div>` : `<p class="record-list-empty">${escapeHtml(t("list.empty"))}</p>`}
  `;

  panel.querySelector("[data-close-list]").addEventListener("click", closeRecordList);
  panel.querySelectorAll("[data-record-list-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = state.records.find((item) => item.id === button.dataset.recordListId);
      if (record) selectRecord(record.id, displayLocations(record)[0] || null);
    });
  });
  updateListButton();
}

function renderRecordListItem(record) {
  const selected = record.id === state.selectedRecordId ? "selected" : "";
  return `
    <button class="record-list-item ${selected}" type="button" data-record-list-id="${escapeAttribute(record.id)}">
      <span class="record-list-dot" style="background:${LAYER_COLORS[record.layer]}"></span>
      <span class="record-list-copy">
        <strong>${escapeHtml(recordText(record, "title"))}</strong>
        <span>${escapeHtml(recordListMeta(record))}</span>
      </span>
    </button>
  `;
}

function sortedFilteredRecords() {
  return [...state.filtered].sort((a, b) => (
    String(recordDateValue(b)).localeCompare(String(recordDateValue(a)))
    || LAYER_ORDER.indexOf(a.layer) - LAYER_ORDER.indexOf(b.layer)
    || recordText(a, "title").localeCompare(recordText(b, "title"), localeForLang())
  ));
}

function recordListMeta(record) {
  const location = record.locations[0] || {};
  const place = [location.district, location.province].filter(Boolean).join(", ");
  return [
    t(`abuseType.${record.abuse_type}`),
    t(`status.${record.status}`),
    formatDate(recordDateValue(record)),
    place,
  ].filter(Boolean).join(" · ");
}

function selectRecord(recordId, location) {
  state.selectedRecordId = recordId;
  state.listOpen = false;
  document.body.classList.add("detail-open");
  closeFilters();
  renderDetail(getSelectedRecord());
  renderMarkers();
  updateListButton();
  if (location) state.map.flyTo([location.lat, location.lng], Math.max(state.map.getZoom(), 8), { duration: 0.45 });
  setTimeout(() => state.map.invalidateSize(), 220);
}

function clearSelection() {
  state.selectedRecordId = null;
  state.listOpen = false;
  document.body.classList.remove("detail-open");
  document.getElementById("case-detail").hidden = true;
  document.getElementById("record-list-panel").hidden = true;
  document.getElementById("empty-detail").hidden = false;
  updateListButton();
  renderMarkers();
}

function closeRecordList() {
  state.listOpen = false;
  document.getElementById("record-list-panel").hidden = true;
  document.getElementById("case-detail").hidden = !state.selectedRecordId;
  document.getElementById("empty-detail").hidden = Boolean(state.selectedRecordId);
  if (!state.selectedRecordId) document.body.classList.remove("detail-open");
  updateListButton();
}

function updateListButton() {
  const button = document.getElementById("list-records-btn");
  button.classList.toggle("active", state.listOpen);
  button.setAttribute("aria-pressed", String(state.listOpen));
}

function getSelectedRecord() {
  return state.records.find((record) => record.id === state.selectedRecordId) || null;
}

function renderDetail(record) {
  const detail = document.getElementById("case-detail");
  const empty = document.getElementById("empty-detail");
  if (!record) {
    clearSelection();
    return;
  }
  empty.hidden = true;
  document.getElementById("record-list-panel").hidden = true;
  detail.hidden = false;

  detail.innerHTML = `
    <header class="detail-header">
      <div class="detail-topline">
        <div class="chip-row">
          ${chip(t(`abuseType.${record.abuse_type}`), null)}
          ${chip(t(`status.${record.status}`), LAYER_COLORS[record.layer])}
        </div>
        <div class="detail-actions">
          <button class="icon-btn" type="button" data-close-detail aria-label="${escapeHtml(t("common.close"))}">×</button>
        </div>
      </div>
      <h2>${escapeHtml(recordText(record, "title"))}</h2>
      <p class="case-summary">${escapeHtml(recordText(record, "summary") || t("common.notSpecified"))}</p>
    </header>
    <div class="detail-stats">${renderCaseStats(record)}</div>
    ${detailSection(t("detail.locations"), renderLocations(record))}
    ${detailSection(t("detail.timeline"), renderTimeline(record))}
    ${detailSection(t("detail.sources"), renderSources(record))}
  `;
  detail.querySelector("[data-close-detail]").addEventListener("click", clearSelection);
}

function renderCaseStats(record) {
  return [
    detailStat(t("detail.abuseType"), t(`abuseType.${record.abuse_type}`)),
    detailStat(t("detail.legalStatus"), recordText(record, "legal_status") || t(`status.${record.status}`)),
    detailStat(t("detail.affectedChildren"), formatCount(record.affected_child_count)),
    detailStat(t("detail.institution"), recordText(record, "institution")),
    detailStat(t("detail.reportedDate"), formatDate(record.reported_date)),
    detailStat(t("detail.eventDate"), formatDate(record.event_date)),
    detailStat(t("detail.indictmentDate"), formatDate(record.indictment_date)),
    detailStat(t("detail.decisionDate"), formatDate(record.decision_date)),
    detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
  ].join("");
}

function detailStat(label, value) {
  const display = value || value === 0 ? String(value) : t("common.notSpecified");
  return `<div class="detail-stat"><span>${escapeHtml(label)}</span><strong>${escapeHtml(display)}</strong></div>`;
}

function detailSection(title, content) {
  return `<section class="detail-section"><h3>${escapeHtml(title)}</h3>${content}</section>`;
}

function renderLocations(record) {
  return `<div class="location-list">${record.locations.map((location, index) => `
    <div class="location-row">
      <strong>${escapeHtml(locationText(record, location, index, "label"))}</strong>
      <span>${escapeHtml([location.district, location.province].filter(Boolean).join(", "))}</span><br>
      <span>${escapeHtml(t("detail.geocode"))}: ${escapeHtml(t(`geocodePrecision.${location.geocode_precision || "unknown"}`))}</span>
      ${locationText(record, location, index, "location_basis") ? `<br><span>${escapeHtml(locationText(record, location, index, "location_basis"))}</span>` : ""}
    </div>`).join("")}</div>`;
}

function renderTimeline(record) {
  if (!record.timeline.length) return `<p class="case-summary">${escapeHtml(t("common.notSpecified"))}</p>`;
  return `<div class="timeline-list">${record.timeline.map((item, index) => `
    <div class="timeline-row">
      <div class="timeline-date">${escapeHtml(formatDate(item.date) || "")}</div>
      <div class="timeline-body"><strong>${escapeHtml(t(`status.${item.status}`))}</strong>${escapeHtml(timelineText(record, item, index, "note"))}</div>
    </div>`).join("")}</div>`;
}

function renderSources(record) {
  return `<div class="source-list">${record.sources.map((source, index) => `
    <a class="source-row" href="${escapeAttribute(source.url)}" target="_blank" rel="noreferrer">
      <strong>${escapeHtml(sourceText(record, source, index, "title") || t("common.source"))}</strong>
      <span>${escapeHtml([source.publisher, source.type ? t(`sourceType.${source.type}`) : "", formatDate(source.published_at)].filter(Boolean).join(" · "))}</span>
    </a>`).join("")}</div>`;
}

function chip(label, color) {
  const dot = color ? `<span class="chip-dot" style="background:${color}"></span>` : "";
  return `<span class="chip">${dot}${escapeHtml(label)}</span>`;
}

async function submitReport(event) {
  event.preventDefault();
  const errorBox = document.getElementById("submission-error");
  errorBox.textContent = "";
  const payload = buildSubmissionPayload();
  const validationError = validateSubmission(payload);
  if (validationError) {
    errorBox.textContent = validationError;
    return;
  }

  try {
    if (state.sb) {
      const { error } = await state.sb.from("case_submissions").insert(payload);
      if (error) throw error;
      showSubmissionSuccess(t("submit.successRemote"));
    } else {
      const pending = JSON.parse(localStorage.getItem(CONFIG.localSubmissionKey) || "[]");
      pending.push({ ...payload, local_id: cryptoRandomId(), created_at: new Date().toISOString() });
      localStorage.setItem(CONFIG.localSubmissionKey, JSON.stringify(pending));
      showSubmissionSuccess(t("submit.successLocal"));
    }
  } catch (error) {
    errorBox.textContent = error.message || String(error);
  }
}

function buildSubmissionPayload() {
  const province = document.getElementById("submission-province").value;
  const center = PROVINCE_BY_NAME[province] || {};
  const latRaw = document.getElementById("submission-lat").value;
  const lngRaw = document.getElementById("submission-lng").value;
  return {
    record_type: "abuse_case",
    abuse_type: document.getElementById("submission-abuse-type").value,
    title: document.getElementById("submission-title").value.trim(),
    summary: document.getElementById("submission-summary").value.trim(),
    province,
    province_key: keyForProvince(province),
    location_label: document.getElementById("submission-location").value.trim(),
    reported_date: document.getElementById("submission-date").value || null,
    lat: latRaw ? Number(latRaw) : center.lat || null,
    lng: lngRaw ? Number(lngRaw) : center.lng || null,
    geocode_precision: latRaw && lngRaw ? "exact" : "province_centroid",
    source_url: document.getElementById("submission-source-url").value.trim(),
    source_title: document.getElementById("submission-source-title").value.trim(),
    source_type: document.getElementById("submission-source-type").value,
    submitter_contact: document.getElementById("submission-contact").value.trim(),
    status: "needs_review",
  };
}

function validateSubmission(payload) {
  if (!payload.abuse_type || !payload.title || !payload.summary || !payload.province || !payload.source_url) return t("submit.missing");
  if (!/^https?:\/\//i.test(payload.source_url)) return t("submit.badUrl");
  const latEntered = Boolean(document.getElementById("submission-lat").value);
  const lngEntered = Boolean(document.getElementById("submission-lng").value);
  if (!latEntered || !lngEntered || !Number.isFinite(payload.lat) || !Number.isFinite(payload.lng)) return t("submit.badCoords");
  return "";
}

function showSubmissionSuccess(message) {
  document.getElementById("submission-form").hidden = true;
  document.getElementById("submission-success").hidden = false;
  document.getElementById("submission-success-copy").textContent = message;
}

function openFilters() {
  document.body.classList.add("filters-open");
  document.getElementById("drawer-scrim").hidden = false;
}

function closeFilters() {
  document.body.classList.remove("filters-open");
  document.getElementById("drawer-scrim").hidden = true;
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.setAttribute("aria-hidden", "false");
  if (id === "submit-modal") {
    document.getElementById("submission-form").hidden = false;
    document.getElementById("submission-success").hidden = true;
    document.getElementById("submission-error").textContent = "";
  }
}

function closeOpenModal() {
  document.querySelectorAll(".modal-backdrop").forEach((modal) => modal.setAttribute("aria-hidden", "true"));
}

function showLoadNotice(message) {
  const notice = document.createElement("div");
  notice.className = "load-notice";
  notice.textContent = message;
  document.querySelector(".map-region").appendChild(notice);
  setTimeout(() => notice.remove(), 8000);
}

function recordDateValue(record) {
  return record.decision_date
    || record.trial_date
    || record.indictment_date
    || record.reported_date
    || record.event_date
    || record.last_verified_at
    || "";
}

function buildSearchBlob(record) {
  const en = record.i18n?.en || {};
  const values = [
    record.title,
    record.summary,
    record.institution,
    record.legal_status,
    en.title,
    en.summary,
    en.institution,
    en.legal_status,
    t(`abuseType.${record.abuse_type}`),
    t(`status.${record.status}`),
    ...record.locations.flatMap((location) => [location.label, location.province, location.district, location.location_basis]),
    ...record.sources.flatMap((source) => [source.title, source.publisher, source.type]),
    ...record.timeline.flatMap((item) => [item.status, item.note]),
    ...Object.values(en.locations || {}).flatMap((location) => [location.label, location.location_basis]),
    ...(en.sources || []).map((source) => source.title),
    ...(en.timeline || []).map((item) => item.note),
  ];
  return values.filter(Boolean).join(" ").toLocaleLowerCase(localeForLang());
}

function finiteNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function keyForProvince(name) {
  if (!name) return "";
  const existing = PROVINCE_BY_NAME[name];
  if (existing) return existing.key;
  const normalized = normalizeAscii(name);
  return PROVINCES.find((province) => normalizeAscii(province.name) === normalized || province.key === normalized)?.key || "";
}

function cleanTitle(value) {
  if (!value) return "";
  return String(value)
    .toLocaleLowerCase("tr")
    .split(/\s+/)
    .map((word) => word ? word[0].toLocaleUpperCase("tr") + word.slice(1) : "")
    .join(" ");
}

function normalizeAscii(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/İ/g, "I")
    .replace(/ı/g, "i")
    .toUpperCase();
}

function parseDate(value) {
  if (!value) return null;
  const normalized = String(value);
  const expanded = normalized.length === 4
    ? `${normalized}-01-01`
    : normalized.length === 7
      ? `${normalized}-01`
      : normalized;
  const date = new Date(`${expanded}T00:00:00`);
  return Number.isNaN(date.valueOf()) ? null : date;
}

function turkeyToday() {
  return parseDate(turkeyTodayKey());
}

function turkeyTodayKey() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: CONFIG.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const lookup = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
  return `${lookup.year}-${lookup.month}-${lookup.day}`;
}

function formatDate(value) {
  const date = parseDate(value);
  if (!date) return "";
  const options = String(value).length === 4
    ? { year: "numeric" }
    : String(value).length === 7
    ? { year: "numeric", month: "short" }
    : { year: "numeric", month: "short", day: "numeric" };
  return new Intl.DateTimeFormat(localeForLang(), options).format(date);
}

function formatCount(value) {
  if (value === null || value === undefined || value === "") return "";
  const number = Number(value);
  if (!Number.isFinite(number)) return "";
  return new Intl.NumberFormat(localeForLang()).format(number);
}

function localeForLang() {
  if (state.lang === "tr") return "tr-TR";
  if (state.lang === "ku") return "ku-TR";
  return "en";
}

function slugify(value) {
  return normalizeAscii(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || cryptoRandomId();
}

function cryptoRandomId() {
  if (crypto?.randomUUID) return crypto.randomUUID();
  return Math.random().toString(36).slice(2);
}

function t(path) {
  const parts = path.split(".");
  return copyValue(COPY[state.lang], parts) ?? copyValue(COPY.tr, parts) ?? path;
}

function copyValue(source, parts) {
  let value = source;
  for (const part of parts) value = value?.[part];
  return value;
}

function currentLanguage() {
  return SUPPORTED_LANGUAGES.find((item) => item.key === state.lang) || SUPPORTED_LANGUAGES[0];
}

function initialLanguage() {
  const stored = localStorage.getItem(CONFIG.localLanguageKey);
  return SUPPORTED_LANGUAGES.some((item) => item.key === stored) ? stored : "tr";
}

function deepMerge(target, source) {
  if (!isPlainObject(source)) return target;
  for (const [key, value] of Object.entries(source)) {
    if (isPlainObject(value)) {
      target[key] = deepMerge(isPlainObject(target[key]) ? target[key] : {}, value);
    } else {
      target[key] = value;
    }
  }
  return target;
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function recordText(record, field) {
  return record?.i18n?.[state.lang]?.[field] || record?.[field] || "";
}

function locationText(record, location, index, field) {
  const translations = record?.i18n?.[state.lang]?.locations || {};
  return translations[location.id]?.[field]
    || translations[index]?.[field]
    || location?.[field]
    || "";
}

function timelineText(record, item, index, field) {
  return record?.i18n?.[state.lang]?.timeline?.[index]?.[field] || item?.[field] || "";
}

function sourceText(record, source, index, field) {
  return record?.i18n?.[state.lang]?.sources?.[index]?.[field] || source?.[field] || "";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
