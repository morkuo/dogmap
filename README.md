# 狗狗從哪裡來

互動式世界犬種地圖：點地圖上的圓點，認識各種狗的原產地、原本的工作、名字由來和小故事；名稱同時列出中文、日文、英文。另外有歷史名犬、犬種的旅程路線、犬種年表，以及兩種「猜猜看」遊戲。

網站：<https://morkuo.github.io/dogmap/>

## 資料放在哪裡

所有內容都在 `data/` 資料夾，網頁本身（`index.html`）不需要動。

| 檔案 | 內容 |
| --- | --- |
| `data/breeds/<id>.json` | 一個犬種一個檔案 |
| `data/famous/<id>.json` | 一隻歷史名犬一個檔案 |
| `data/relations.json` | 相關犬種：每一組寫一次，附上「為什麼相關」 |
| `data/regions.json` | 地區清單 |
| `data/works.json` | 「原本的工作」分類 |
| `data/photos.json` | 照片的作者、授權與原始頁面（由 `tools/fetch-photos.py` 產生） |

`data.js` 是自動產生的檔案，**不要直接修改**。

## 新增一個犬種

1. 複製一個現有的檔案，例如 `data/breeds/shiba.json`，改名成新的 id（小寫英文，例如 `kishu.json`）。
2. 修改內容。欄位說明：

   | 欄位 | 必填 | 說明 |
   | --- | --- | --- |
   | `id` | ✔ | 和檔名相同 |
   | `zh` / `ja` / `en` | ✔ | 中文、日文、英文名稱 |
   | `aliases` | | 常見的別名，例如 `["拉不拉多", "Lab"]`，搜尋時也找得到 |
   | `region` | ✔ | 地區 id，見 `data/regions.json` |
   | `country` | ✔ | 要標亮的國家代碼（ISO 3166 數字碼，字串），例如 `["392"]` 是日本 |
   | `place` | ✔ | 原產地的文字說明 |
   | `lat` / `lon` | ✔ | 原產地的大致緯度、經度 |
   | `tags` | ✔ | `"common"`（世界常見）、`"local"`（在地特色），可兩者都有 |
   | `work` | ✔ | 原本的工作，見 `data/works.json` |
   | `job` | ✔ | 原本工作的一句話說明 |
   | `story` | ✔ | 主要介紹 |
   | `sources` | ✔ | 資料來源，格式 `[["標題", "https://網址"]]`，至少一個 |
   | `order` | ✔ | 在列表與「上一隻／下一隻」中的順序（數字，不可重複） |
   | `myth` | | 「名字的誤會」：名字和真正產地不一樣時才寫 |
   | `etym` | | 「名字的由來」，有爭議的寫「一說」 |
   | `note` | | 「說法不一」：來源之間有分歧的地方 |
   | `milestone` | | 年表事件：`{"year": 1868, "text": "…", "label": "1860 年代"}`（`label` 可省略） |
   | `ancient` | | 古老犬種的說明（和 `milestone` 擇一） |
   | `trip` | | 旅程路線：`[{"lat": …, "lon": …, "place": "荷蘭", "text": "…"}, …]`，依時間排序、至少兩站；`place` 是地圖上顯示的地名 |

   要把兩個犬種連起來，在 `data/relations.json` 加一筆 `{"a": "…", "b": "…", "why": "為什麼相關"}`，兩邊的卡片都會顯示。

3. 抓照片（會從該犬種英文 Wikipedia 條目的首圖下載，並記下作者與授權）：

   ```bash
   python3 tools/fetch-photos.py
   ```

   照片不合適的話，可以指定 Wikimedia Commons 上的檔名：

   ```bash
   python3 tools/fetch-photos.py kishu=Kishu_inu.jpg
   ```

4. 檢查資料並產生網站：

   ```bash
   ./build-pages.sh
   ```

   資料有問題（漏欄位、相關犬種打錯、座標超出範圍、來源不是 https……）會列出來並停止。

5. 推上 GitHub，網站會在大約一分鐘內自動更新：

   ```bash
   git add -A && git commit -m "新增紀州犬" && git push
   ```

## 資料正確性的原則

- 每一則內容都要有來源，盡量用兩個以上的來源交叉確認。
- 來源之間有分歧，就寫在 `note`，不要挑一個說法當成定論。
- 年份不精確就寫成「1920 年代」「1840 年左右」，不要自己補成精確年份。
- 照片只用 Wikimedia Commons 上可自由使用的照片，並保留作者與授權標示。
