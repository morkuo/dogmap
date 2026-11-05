#!/bin/sh
# 檢查資料、產生 data.js，再把網站輸出到 docs/（GitHub Pages 發布的資料夾）
# index.html 是照 Artifact 格式寫的（沒有 <!doctype>/<head>），這裡幫它包上完整的 HTML 外框。
set -e
cd "$(dirname "$0")"
node tools/build-data.mjs
rm -rf docs
mkdir -p docs/images
cp world.js data.js docs/
cp images/*.jpg docs/images/
{
  printf '<!doctype html>\n<html lang="zh-Hant">\n<head>\n'
  # 把開頭的 meta/title/link/style 放進 <head>，其餘放進 <body>
  awk '/^<div class="app"/{exit} {print}' index.html
  printf '</head>\n<body>\n'
  awk 'f{print} /^<div class="app"/{f=1; print}' index.html
  printf '</body>\n</html>\n'
} > docs/index.html
touch docs/.nojekyll
echo "docs/ 已更新"
