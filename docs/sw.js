// 離線快取：讓網站可以安裝到手機主畫面，沒有網路時也能打開。
// VERSION 會在 build-pages.sh 時換成這次建置的版本，舊快取會自動清掉。
const VERSION = "c72d019-20261106192125";
const CORE = `dogmap-core-${VERSION}`;
const RUNTIME = `dogmap-runtime-${VERSION}`;
const CORE_FILES = ["./", "index.html", "data.js", "world.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];

// The map needs these libraries, so save them at install time rather than waiting to see them requested.
// All photos (filled in by build-pages.sh). Saved in the background after install so the app works fully offline.
const IMAGES = ["images/afghan.jpg","images/akita.jpg","images/alabai.jpg","images/aussie.jpg","images/azawakh.jpg","images/basenji.jpg","images/beagle.jpg","images/bichon.jpg","images/boerboel.jpg","images/bordercollie.jpg","images/boston.jpg","images/canaan.jpg","images/cattledog.jpg","images/chihuahua.jpg","images/chow.jpg","images/cimarron.jpg","images/corgi.jpg","images/coton.jpg","images/dachshund.jpg","images/dalmatian.jpg","images/dingo.jpg","images/dogo.jpg","images/f-barry.jpg","images/f-bluey.jpg","images/f-bo.jpg","images/f-bobby.jpg","images/f-hachiko.jpg","images/f-kabosu.jpg","images/f-laika.jpg","images/f-pickles.jpg","images/f-rintintin.jpg","images/f-stubby.jpg","images/f-wonderdog.jpg","images/fila.jpg","images/frenchie.jpg","images/golden.jpg","images/greatdane.jpg","images/gsd.jpg","images/havanese.jpg","images/huntaway.jpg","images/husky.jpg","images/indog.jpg","images/jindo.jpg","images/kaiken.jpg","images/kangal.jpg","images/kelpie.jpg","images/komondor.jpg","images/labrador.jpg","images/lundehund.jpg","images/malamute.jpg","images/maltese.jpg","images/mudhol.jpg","images/newfoundland.jpg","images/pekingese.jpg","images/peruvian.jpg","images/phuquoc.jpg","images/pomeranian.jpg","images/poodle.jpg","images/pug.jpg","images/pwd.jpg","images/ridgeback.jpg","images/saluki.jpg","images/samoyed.jpg","images/schnauzer.jpg","images/sharpei.jpg","images/shiba.jpg","images/shihtzu.jpg","images/sloughi.jpg","images/stbernard.jpg","images/taiwandog.jpg","images/thairidge.jpg","images/tibetanmastiff.jpg","images/wolfhound.jpg","images/xolo.jpg","images/yorkie.jpg"];
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
  // Photos one by one, without blocking: a failed photo is simply fetched later when someone opens that dog.
  event.waitUntil((async () => {
    const c = await caches.open(RUNTIME);
    for (const url of IMAGES) {
      try { if (!(await c.match(url))) { const res = await fetch(url); if (res.ok) await c.put(url, res); } } catch (_) {}
    }
  })());
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
