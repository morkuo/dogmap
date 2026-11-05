#!/usr/bin/env python3
"""幫還沒有照片的犬種，從 Wikimedia Commons 抓照片並記下作者與授權。

用法：
  python3 tools/fetch-photos.py                    # 幫 data/photos.json 裡還沒有的犬種抓照片
  python3 tools/fetch-photos.py akita=Akita_inu.jpeg  # 指定某隻狗改用 Commons 上的某個檔案

照片來源預設是該犬種英文 Wikipedia 條目的首圖（取自 sources 裡第一個 en.wikipedia.org 連結）。
抓完請看一下照片是否合適，再執行 node tools/build-data.mjs。
"""
import html, json, os, re, subprocess, sys, time, urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
IMAGES = os.path.join(ROOT, "images")
UA = "dogmap-photo-fetch/1.0 (educational map project)"


def get(url):
    for attempt in range(4):
        r = subprocess.run(["curl", "-sfL", "--max-time", "30", "-A", UA, url], capture_output=True)
        if r.returncode == 0:
            return r.stdout
        time.sleep(5 * (attempt + 1))
    raise RuntimeError("下載失敗：" + url)


def clean_artist(a):
    a = re.sub(r"<[^>]+>", "", a or "")
    a = html.unescape(a).strip()
    a = re.sub(r"^No machine-readable author provided\.\s*", "", a)
    a = re.sub(r"\s*assumed.*$", "", a, flags=re.S)
    a = re.sub(r"\((talk|eingestellt)[^)]*\)", "", a)
    a = re.sub(r",?\s*https?://\S+", "", a)
    a = a.split("\n")[0]
    a = re.sub(r"^[^:]+\.(jpg|JPG|jpeg|png):\s*", "", a)
    a = a.replace('"', "").strip(" ;,.")
    return a or "Wikimedia Commons"


def main():
    overrides = dict(arg.split("=", 1) for arg in sys.argv[1:])
    photos_path = os.path.join(DATA, "photos.json")
    photos = json.load(open(photos_path, encoding="utf-8"))
    breeds = {}
    for f in sorted(os.listdir(os.path.join(DATA, "breeds"))):
        if f.endswith(".json"):
            b = json.load(open(os.path.join(DATA, "breeds", f), encoding="utf-8"))
            breeds[b["id"]] = b
    todo = list(overrides) if overrides else [i for i in breeds if i not in photos]
    if not todo:
        print("每個犬種都已經有照片了。")
        return
    for did in todo:
        b = breeds.get(did)
        if not b:
            print("找不到犬種", did)
            continue
        fname = overrides.get(did)
        if not fname:
            wiki = next((u for _, u in b["sources"] if "en.wikipedia.org/wiki/" in u), None)
            if not wiki:
                print(did, "：sources 裡沒有英文 Wikipedia 連結，請用 id=檔名 指定照片")
                continue
            title = urllib.parse.unquote(wiki.split("/wiki/", 1)[1])
            q = "https://en.wikipedia.org/w/api.php?" + urllib.parse.urlencode(
                {"action": "query", "titles": title, "prop": "pageimages", "piprop": "name", "redirects": 1, "format": "json"})
            page = next(iter(json.loads(get(q))["query"]["pages"].values()))
            fname = page.get("pageimage")
            if not fname:
                print(did, "：Wikipedia 條目沒有首圖，請用 id=檔名 指定照片")
                continue
        q = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(
            {"action": "query", "titles": "File:" + fname, "prop": "imageinfo", "iiprop": "url|extmetadata", "iiurlwidth": 640, "format": "json"})
        page = next(iter(json.loads(get(q))["query"]["pages"].values()))
        if "imageinfo" not in page:
            print(did, "：Commons 上找不到", fname)
            continue
        ii = page["imageinfo"][0]
        em = ii.get("extmetadata", {})
        rel = "images/" + did + ".jpg"
        open(os.path.join(ROOT, rel), "wb").write(get(ii["thumburl"]))
        photos[did] = {
            "file": rel,
            "artist": clean_artist(em.get("Artist", {}).get("value", "")),
            "license": html.unescape(re.sub(r"<[^>]+>", "", em.get("LicenseShortName", {}).get("value", ""))).strip(),
            "page": ii["descriptionurl"],
        }
        print("已下載", did, fname, photos[did]["license"], "|", photos[did]["artist"])
        time.sleep(2)
    json.dump(dict(sorted(photos.items())), open(photos_path, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    open(photos_path, "a").write("\n")


if __name__ == "__main__":
    main()
