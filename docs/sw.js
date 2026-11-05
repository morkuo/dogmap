// 離線快取：讓網站可以安裝到手機主畫面，沒有網路時也能打開。
// VERSION 會在 build-pages.sh 時換成這次建置的版本，舊快取會自動清掉。
const VERSION = "cddcc1b-20261105235724";
const CORE = `dogmap-core-${VERSION}`;
const RUNTIME = `dogmap-runtime-${VERSION}`;
const CORE_FILES = ["./", "index.html", "data.js", "world.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];

// The map needs these libraries, so save them at install time rather than waiting to see them requested.
const LIBS = [
  "https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js",
  "https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CORE)
      .then(c => c.addAll(CORE_FILES).then(() => c.addAll(LIBS.map(u => new Request(u, { mode: "cors" })))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("dogmap-") && k !== CORE && k !== RUNTIME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isPage = req.mode === "navigate" || (sameOrigin && /\/(index\.html)?$/.test(url.pathname));
  const isData = sameOrigin && /\/(data|world)\.js$/.test(url.pathname);

  if (isPage || isData) {
    // Network first so new content shows up right away; fall back to the saved copy offline.
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CORE).then(c => c.put(isPage ? "index.html" : req, copy));
        return res;
      }).catch(() => caches.match(isPage ? "index.html" : req).then(r => r || caches.match("./")))
    );
    return;
  }
  // Photos, map libraries and fonts: use the saved copy, fetch and save it the first time.
  const cacheable = sameOrigin || /cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.(googleapis|gstatic)\.com/.test(url.host);
  if (!cacheable) return;
  event.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === "opaque") {
        const copy = res.clone();
        caches.open(RUNTIME).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
