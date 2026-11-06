#!/bin/sh
# 檢查資料、產生 data.js，再把網站輸出到 docs/（GitHub Pages 發布的資料夾）
# index.html 是照 Artifact 格式寫的（沒有 <!doctype>/<head>），這裡幫它包上完整的 HTML 外框，
# 並加上可安裝成 App（PWA）所需的設定：manifest、圖示、離線快取。
set -e
cd "$(dirname "$0")"
node tools/build-data.mjs
rm -rf docs
mkdir -p docs/images docs/icons
cp world.js data.js docs/
cp images/*.jpg docs/images/
cp icons/icon-*.png docs/icons/
cp pwa/manifest.webmanifest docs/

# 每次建置用不同的版本號，讓已安裝的 App 會換成新內容
VERSION="$(git rev-parse --short HEAD 2>/dev/null || echo dev)-$(date +%Y%m%d%H%M%S)"
IMAGES="[$(cd docs && ls images/*.jpg | sed 's/.*/"&"/' | paste -sd, -)]"
sed -e "s/__VERSION__/$VERSION/" -e "s#__IMAGES__#$IMAGES#" pwa/sw.js > docs/sw.js

{
  printf '<!doctype html>\n<html lang="zh-Hant">\n<head>\n'
  # 把開頭的 meta/title/link/style 放進 <head>，其餘放進 <body>
  awk '/^<div class="app"/{exit} {print}' index.html
  cat <<'HEAD'
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#152126">
<link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/icon-180.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="狗狗地圖">
<meta name="description" content="互動式世界犬種地圖：認識各種狗的原產地、名字由來、歷史名犬與犬種年表，還有猜猜看遊戲。">
HEAD
  printf '</head>\n<body>\n'
  awk 'f{print} /^<div class="app"/{f=1; print}' index.html
  cat <<'FOOT'
<script>
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
}
</script>
FOOT
  printf '</body>\n</html>\n'
} > docs/index.html
touch docs/.nojekyll
echo "docs/ 已更新（版本 $VERSION）"
