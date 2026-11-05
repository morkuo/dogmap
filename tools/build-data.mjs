// 檢查 data/ 裡的資料，沒問題才產生網頁用的 data.js。
// 用法：node tools/build-data.mjs        （有錯誤會列出來並停止，不會寫出 data.js）
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const D = p => path.join(root, "data", p);
const readJSON = p => {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); }
  catch (e) { throw new Error(`${path.relative(root, p)}：JSON 格式錯誤（${e.message}）`); }
};
const errors = [];
const err = (where, msg) => errors.push(`${where}：${msg}`);

const regions = readJSON(D("regions.json"));
const works = readJSON(D("works.json"));
const photos = readJSON(D("photos.json"));
const regionIds = new Set(regions.map(r => r.id));
const workIds = new Set(works.map(w => w.id));

// Country codes come from the map data, so a typo would silently fail to highlight.
const worldSrc = fs.readFileSync(path.join(root, "world.js"), "utf8");
const world = JSON.parse(worldSrc.slice(worldSrc.indexOf("=") + 1).trim().replace(/;$/, ""));
const countryIds = new Set(world.objects.countries.geometries.map(g => g.id).filter(Boolean));

const loadDir = dir => fs.readdirSync(D(dir)).filter(f => f.endsWith(".json")).sort()
  .map(f => ({ file: `data/${dir}/${f}`, base: f.replace(/\.json$/, ""), data: readJSON(D(`${dir}/${f}`)) }));

const isStr = v => typeof v === "string" && v.trim().length > 0;
const isNum = v => typeof v === "number" && Number.isFinite(v);
const thisYear = new Date().getFullYear();

function checkSources(where, sources) {
  if (!Array.isArray(sources) || !sources.length) return err(where, "至少需要一個資料來源（sources）");
  sources.forEach((s, i) => {
    if (!Array.isArray(s) || s.length !== 2 || !isStr(s[0]) || !/^https:\/\//.test(s[1] || ""))
      err(where, `sources[${i}] 要寫成 ["標題", "https://網址"]`);
  });
}
function checkLatLon(where, o) {
  if (!isNum(o.lat) || o.lat < -90 || o.lat > 90) err(where, "lat（緯度）要介於 -90 到 90");
  if (!isNum(o.lon) || o.lon < -180 || o.lon > 180) err(where, "lon（經度）要介於 -180 到 180");
}

// ── Breeds ──
const breedFiles = loadDir("breeds");
const breedIds = new Set(breedFiles.map(b => b.data.id));
const orders = new Map();
const allowedBreedKeys = new Set(["id", "zh", "ja", "en", "region", "country", "place", "lat", "lon", "tags", "work",
  "myth", "etym", "job", "story", "note", "milestone", "ancient", "trip", "sources", "order"]);
for (const { file, base, data: b } of breedFiles) {
  for (const k of Object.keys(b)) if (!allowedBreedKeys.has(k)) err(file, `不認得的欄位「${k}」（打錯字了嗎？）`);
  if (b.id !== base) err(file, `id「${b.id}」要和檔名「${base}」一樣`);
  for (const k of ["zh", "ja", "en", "place", "job", "story"]) if (!isStr(b[k])) err(file, `缺少「${k}」`);
  for (const k of ["myth", "etym", "note", "ancient"]) if (b[k] !== undefined && !isStr(b[k])) err(file, `「${k}」要是文字`);
  if (!regionIds.has(b.region)) err(file, `region「${b.region}」不存在，可用：${[...regionIds].join("、")}`);
  if (!Array.isArray(b.country)) err(file, "country 要是陣列，例如 [\"392\"]");
  else b.country.forEach(c => { if (!countryIds.has(c)) err(file, `country「${c}」不是地圖上的國家代碼`); });
  checkLatLon(file, b);
  if (!Array.isArray(b.tags) || !b.tags.length || b.tags.some(t => t !== "common" && t !== "local"))
    err(file, "tags 要是 [\"common\"]、[\"local\"] 或兩者都有");
  if (!Array.isArray(b.work) || !b.work.length) err(file, "work 至少要有一項");
  else b.work.forEach(w => { if (!workIds.has(w)) err(file, `work「${w}」不存在，可用：${[...workIds].join("、")}`); });
  if (b.milestone !== undefined) {
    const m = b.milestone;
    if (!Number.isInteger(m.year) || m.year < 1000 || m.year > thisYear) err(file, `milestone.year 要是 1000 到 ${thisYear} 之間的整數`);
    if (!isStr(m.text)) err(file, "milestone 缺少 text");
    if (m.label !== undefined && !isStr(m.label)) err(file, "milestone.label 要是文字");
  }
  if (b.milestone && b.ancient) err(file, "milestone 和 ancient 只能擇一");
  if (b.trip !== undefined) {
    if (!Array.isArray(b.trip) || b.trip.length < 2) err(file, "trip 至少要有兩站");
    else b.trip.forEach((t, i) => {
      checkLatLon(`${file} trip[${i}]`, t);
      if (!isStr(t.place)) err(file, `trip[${i}] 缺少 place（地圖上顯示的地名）`);
      if (!isStr(t.text)) err(file, `trip[${i}] 缺少 text`);
    });
  }
  if (!isNum(b.order)) err(file, "缺少 order（在列表裡的順序）");
  else if (orders.has(b.order)) err(file, `order ${b.order} 和 ${orders.get(b.order)} 重複`);
  else orders.set(b.order, file);
  checkSources(file, b.sources);
  const ph = photos[b.id];
  if (!ph) err(file, "data/photos.json 裡沒有這隻狗的照片資料（可執行 tools/fetch-photos.py）");
  else if (!fs.existsSync(path.join(root, ph.file))) err(file, `找不到照片檔 ${ph.file}`);
}

// ── Relations: each pair once, with the reason they are related ──
const relations = readJSON(D("relations.json"));
const relOf = new Map();
const seenPairs = new Set();
relations.forEach((r, i) => {
  const where = `data/relations.json 第 ${i + 1} 筆`;
  if (!breedIds.has(r.a)) err(where, `a「${r.a}」找不到這個犬種`);
  if (!breedIds.has(r.b)) err(where, `b「${r.b}」找不到這個犬種`);
  if (r.a === r.b) err(where, "a 和 b 不能是同一個犬種");
  if (!isStr(r.why)) err(where, "缺少 why（為什麼相關）");
  const key = [r.a, r.b].sort().join("|");
  if (seenPairs.has(key)) err(where, `${r.a} 和 ${r.b} 重複了`);
  seenPairs.add(key);
  for (const [x, y] of [[r.a, r.b], [r.b, r.a]]) {
    if (!relOf.has(x)) relOf.set(x, []);
    relOf.get(x).push({ id: y, why: r.why });
  }
});

// ── Famous dogs ──
const famousFiles = loadDir("famous");
for (const { file, base, data: f } of famousFiles) {
  if (f.id !== base) err(file, `id「${f.id}」要和檔名「${base}」一樣`);
  for (const k of ["name", "ja", "en", "year", "place", "text"]) if (!isStr(f[k])) err(file, `缺少「${k}」`);
  if (f.breed && !breedIds.has(f.breed)) err(file, `breed「${f.breed}」找不到這個犬種`);
  checkLatLon(file, f);
  checkSources(file, f.sources);
}

if (errors.length) {
  console.error(`資料有 ${errors.length} 個問題，沒有產生 data.js：\n` + errors.map(e => "  ・" + e).join("\n"));
  process.exit(1);
}

// ── Write data.js (the page reads these globals) ──
const breeds = breedFiles.map(b => b.data).sort((a, b) => a.order - b.order);
const famous = famousFiles.map(f => f.data).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
const strip = (o, keys) => Object.fromEntries(Object.entries(o).filter(([k]) => !keys.includes(k)));
const DOGS = breeds.map(b => {
  const o = strip(b, ["milestone", "ancient", "trip", "order"]);
  if (relOf.has(b.id)) o.related = relOf.get(b.id);
  return o;
});
const FAMOUS = famous.map(f => strip(f, ["order"]));
const MILESTONES = Object.fromEntries(breeds.filter(b => b.milestone).map(b => [b.id, b.milestone]));
const ANCIENT = Object.fromEntries(breeds.filter(b => b.ancient).map(b => [b.id, b.ancient]));
const TRIPS = Object.fromEntries(breeds.filter(b => b.trip).map(b => [b.id, b.trip.map(t => [t.lat, t.lon, t.text, t.place])]));
const js = `// 這個檔案是 tools/build-data.mjs 從 data/ 自動產生的，請不要直接修改。\n` +
  Object.entries({ REGIONS: regions, WORKS: works, DOGS, FAMOUS, MILESTONES, ANCIENT, TRIPS, PHOTOS: photos })
    .map(([k, v]) => `window.${k} = ${JSON.stringify(v)};`).join("\n") + "\n";
fs.writeFileSync(path.join(root, "data.js"), js);
console.log(`data.js 已更新：${DOGS.length} 種狗、${FAMOUS.length} 隻名犬、${relations.length} 組相關犬種、${Object.keys(MILESTONES).length} 個年表事件、${Object.keys(TRIPS).length} 條旅程`);
