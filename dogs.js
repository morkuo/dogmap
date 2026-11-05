// 狗狗資料：每一筆是一個犬種
// tags: "common" = 世界各地常見的狗；"local" = 當地特色犬（兩者可以並存）
// country: world-atlas 的國家代碼（用來在地圖上標亮國家）
// note: 說法有分歧或還沒定論的地方
window.REGIONS = [
  { id: "na", name: "北美洲" },
  { id: "la", name: "中南美洲" },
  { id: "eu", name: "歐洲" },
  { id: "af", name: "非洲" },
  { id: "wa", name: "西亞・中亞" },
  { id: "ea", name: "東亞" },
  { id: "oc", name: "大洋洲" }
];

window.DOGS = [
  // ───────── 北美洲 ─────────
  {
    id: "labrador",
    zh: "拉布拉多犬", ja: "ラブラドール・レトリーバー", en: "Labrador Retriever",
    region: "na", country: ["124"], place: "加拿大・紐芬蘭島（聖約翰斯一帶）",
    lat: 47.56, lon: -52.71, tags: ["common"],
    job: "幫漁夫叼回漁獲與繩網，後來成為撿水鳥的獵犬",
    story: "你知道拉布拉多其實不是從拉布拉多來的嗎？牠的祖先是紐芬蘭島上的「聖約翰斯水犬」（St. John's water dog），跟著漁夫工作，在冰冷的海水裡把脫鉤的魚、漁網和繩子叼回船上，所以非常會游泳。19 世紀，往來紐芬蘭和英國普爾港的貿易船把這些狗帶到英國，馬姆斯伯里伯爵等貴族看上牠們下水叼物的本事，把牠們培育成撿回水鳥的獵犬。牠跟黃金獵犬的英文名字都有 Retriever（尋回犬），意思就是「把東西撿回來的狗」。",
    note: "「拉布拉多」這個名字怎麼來的沒有定論。常見說法是借用當時同屬紐芬蘭殖民地的拉布拉多地區之名；也有人認為和葡萄牙語 lavrador（勞動者）有關。",
    related: ["golden", "newfoundland"],
    sources: [
      ["加拿大百科全書", "https://www.thecanadianencyclopedia.ca/en/article/labrador-retriever"],
      ["AKC：拉布拉多的歷史", "https://www.akc.org/expert-advice/dog-breeds/labrador-retriever-history/"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/Labrador_Retriever"]
    ]
  },
  {
    id: "newfoundland",
    zh: "紐芬蘭犬", ja: "ニューファンドランド", en: "Newfoundland",
    region: "na", country: ["124"], place: "加拿大・紐芬蘭島",
    lat: 48.9, lon: -55.6, tags: ["local"],
    job: "漁船上的工作犬、水上救生",
    story: "紐芬蘭犬是拉布拉多的「大表哥」。早期拉布拉多甚至被叫做「小紐芬蘭犬」，兩者都來自同一座島。牠體型巨大，腳趾間有蹼，身上是防水的雙層厚毛，以前在漁船上幫忙拖網、把落水的人拖回岸邊，到現在還有紐芬蘭犬接受水上救生訓練。英國詩人拜倫的愛犬 Boatswain 就是紐芬蘭犬，拜倫還為牠寫了墓誌銘。",
    related: ["labrador"],
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Newfoundland_dog"],
      ["加拿大百科全書（拉布拉多條目）", "https://www.thecanadianencyclopedia.ca/en/article/labrador-retriever"]
    ]
  },
  {
    id: "husky",
    zh: "西伯利亞哈士奇", ja: "シベリアン・ハスキー", en: "Siberian Husky",
    region: "ea", country: ["643"], place: "俄羅斯・西伯利亞東北（楚科奇半島）",
    lat: 66.0, lon: 172.0, tags: ["common"],
    job: "楚科奇人的雪橇犬，長途拉輕貨",
    story: "哈士奇原本是西伯利亞東北角楚科奇人養的雪橇犬，特色是耐寒、吃得少、能跑很遠。1925 年冬天，阿拉斯加的諾姆鎮爆發白喉，血清只能靠狗拉雪橇接力送過去，二十位雪橇手和一百多隻狗跑了約 1,000 公里。最後一棒的領頭犬 Balto 成了明星，紐約中央公園還立了牠的雕像；不過跑最長、最危險路段的，其實是另一隻哈士奇 Togo。",
    related: ["malamute", "samoyed"],
    sources: [
      ["AKC：Togo", "https://www.akc.org/expert-advice/lifestyle/togo-siberian-husky-sled-dog-hero-of-1925/"],
      ["Wikipedia：1925 諾姆血清接力", "https://en.wikipedia.org/wiki/1925_serum_run_to_Nome"]
    ]
  },
  {
    id: "malamute",
    zh: "阿拉斯加雪橇犬", ja: "アラスカン・マラミュート", en: "Alaskan Malamute",
    region: "na", country: ["840"], place: "美國・阿拉斯加西北（科策布灣）",
    lat: 66.9, lon: -162.6, tags: ["local"],
    job: "拉重物的雪橇犬",
    story: "常被誤認成哈士奇，但牠比較大隻、骨架更粗。名字來自阿拉斯加西北部的因紐皮雅特族群 Mahlemiut（馬勒穆特人），他們用這種狗在極地拉重物、幫忙獵海豹。哈士奇是長跑選手，馬拉穆是舉重選手：跑得不快，但力氣很大。牠也是阿拉斯加州的州犬。",
    related: ["husky"],
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Alaskan_Malamute"],
      ["AKC 犬種介紹", "https://www.akc.org/dog-breeds/alaskan-malamute/"]
    ]
  },
  {
    id: "aussie",
    zh: "澳洲牧羊犬", ja: "オーストラリアン・シェパード", en: "Australian Shepherd",
    region: "na", country: ["840"], place: "美國西部",
    lat: 40.7, lon: -111.9, tags: ["common"],
    job: "美國西部牧場的牧羊犬",
    story: "名字裡有澳洲，但牠其實是在美國西部的牧場培育出來的。最常見的說法是：牧羊人帶著狗、跟著從澳洲運來的羊群一起到美國，美國人就把這種狗叫做「澳洲來的牧羊犬」。1950、60 年代牠常在牛仔競技表演中出場，才紅了起來。",
    note: "早期常說牠和西班牙、法國邊境的巴斯克牧羊人有關，但有學者認為巴斯克人的角色不大；2017 年的基因研究則顯示牠跟英國系的牧羊犬比較接近。",
    related: ["bordercollie", "cattledog"],
    sources: [
      ["AKC：澳洲牧羊犬的歷史", "https://www.akc.org/expert-advice/dog-breeds/australian-shepherd-history-behind-breed/"],
      ["AKC：澳洲牧羊犬冷知識", "https://www.akc.org/expert-advice/lifestyle/australian-shepherd-facts/"]
    ]
  },
  {
    id: "boston",
    zh: "波士頓㹴", ja: "ボストン・テリア", en: "Boston Terrier",
    region: "na", country: ["840"], place: "美國・麻州波士頓",
    lat: 42.36, lon: -71.06, tags: ["local"],
    job: "伴侶犬（最早是鬥牛犬和㹴犬的混種）",
    story: "波士頓㹴是最早在美國本土培育出來的犬種之一。19 世紀後半，一隻叫 Judge 的鬥牛犬和㹴犬混種狗來到波士頓，成了這個品種的祖先。牠黑白分明的毛色像穿了一套燕尾服，所以有「美國紳士」的外號，也是麻州的州犬。",
    related: ["frenchie"],
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Boston_Terrier"],
      ["AKC 犬種介紹", "https://www.akc.org/dog-breeds/boston-terrier/"]
    ]
  },

  // ───────── 中南美洲 ─────────
  {
    id: "chihuahua",
    zh: "吉娃娃", ja: "チワワ", en: "Chihuahua",
    region: "la", country: ["484"], place: "墨西哥・奇瓦瓦州",
    lat: 28.63, lon: -106.07, tags: ["common"],
    job: "伴侶犬",
    story: "吉娃娃的名字就是墨西哥北部的奇瓦瓦州（Chihuahua）。19 世紀中，美國人在這一帶發現這種小狗，帶回美國後開始流行，1904 年美國犬業俱樂部正式承認這個品種。一般認為牠的祖先是古代托爾特克文化養的小型犬 Techichi。",
    note: "Techichi 是吉娃娃祖先的說法流傳很廣，但實際的血緣關係學界還在討論。",
    related: ["xolo"],
    sources: [
      ["Wikipedia：Techichi", "https://en.wikipedia.org/wiki/Techichi"],
      ["Wikipedia：吉娃娃", "https://en.wikipedia.org/wiki/Chihuahua_(dog)"]
    ]
  },
  {
    id: "xolo",
    zh: "墨西哥無毛犬", ja: "ショロイツクインツレ", en: "Xoloitzcuintli",
    region: "la", country: ["484"], place: "墨西哥中部",
    lat: 19.4, lon: -99.1, tags: ["local"],
    job: "看家犬，傳說中引導亡魂的狗",
    story: "牠的名字唸作「修洛伊茲昆特利」，是阿茲特克人的納瓦特爾語：Xolotl 是掌管閃電與死亡的神，itzcuintli 是狗。阿茲特克人相信，人死後要穿越冥界 Mictlán，這種狗會帶著亡魂渡河。這個品種的歷史至少有 3,500 年。皮克斯動畫《可可夜總會》裡那隻傻呼呼的狗 Dante，就是墨西哥無毛犬。",
    related: ["chihuahua", "peruvian"],
    sources: [
      ["National Geographic", "https://www.nationalgeographic.com/history/article/hairless-dog-mexico-xolo-xoloitzcuintli-Aztec"],
      ["Wikipedia：中美洲神話中的狗", "https://en.wikipedia.org/wiki/Dogs_in_Mesoamerican_folklore_and_myth"]
    ]
  },
  {
    id: "peruvian",
    zh: "祕魯無毛犬", ja: "ペルービアン・ヘアレス・ドッグ", en: "Peruvian Hairless Dog",
    region: "la", country: ["604"], place: "祕魯・沿海地區",
    lat: -12.05, lon: -77.04, tags: ["local"],
    job: "伴侶犬、看守犬",
    story: "祕魯無毛犬出現在許多比印加帝國更早的古代陶器上。2001 年，祕魯國會立法把牠列為國家文化遺產，祕魯的一些古蹟遺址也會養牠們。2026 年，研究團隊在北部海岸的瓦里帝國遺址找到這種狗的遺骸，是第一次在考古現場找到牠們的實體證據。",
    related: ["xolo"],
    sources: [
      ["Dartmouth 研究新聞（2026）", "https://fas.dartmouth.edu/news/2026/05/peruvian-hairless-dogs-discovered-ancient-site"],
      ["National Geographic", "https://www.nationalgeographic.com/history/article/wari-hairless-peruvian-dog-mummy"]
    ]
  },
  {
    id: "dogo",
    zh: "阿根廷杜高犬", ja: "ドゴ・アルヘンティーノ", en: "Dogo Argentino",
    region: "la", country: ["032"], place: "阿根廷・哥多華省",
    lat: -31.4, lon: -64.2, tags: ["local"],
    job: "獵野豬、美洲獅等大型獵物",
    story: "1920 年代，阿根廷醫師 Antonio Nores Martínez 想要一隻能在潘帕斯草原和山區獵野豬的狗，用一種已經滅絕的哥多華鬥犬為基礎，混入多個犬種，培育出這種全身雪白、肌肉發達的獵犬。牠是阿根廷唯一被國際認可的本土犬種。",
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Dogo_Argentino"],
      ["AKC 犬種介紹", "https://www.akc.org/dog-breeds/dogo-argentino/"]
    ]
  },

  // ───────── 歐洲 ─────────
  {
    id: "golden",
    zh: "黃金獵犬", ja: "ゴールデン・レトリーバー", en: "Golden Retriever",
    region: "eu", country: ["826"], place: "英國・蘇格蘭高地（Guisachan 莊園）",
    lat: 57.27, lon: -4.86, tags: ["common"],
    job: "撿回獵人打下的鳥",
    story: "黃金獵犬的生日可以精準到 1868 年。蘇格蘭高地的莊園主人 Dudley Marjoribanks（後來的特威德茅斯男爵）把一隻黃色的波浪毛尋回犬 Nous，和一隻現在已經滅絕的特威德水獵犬 Belle 配種，生下的小狗就是黃金獵犬的源頭。高地多雨、湖泊沼澤多，他想要一隻能在陸上、也能下水把打下的鳥撿回來的狗。拉布拉多是幫漁夫撿東西起家的，黃金獵犬則是為了打獵撿鳥。",
    note: "早期紀錄對 Nous 是波浪毛還是平毛尋回犬、以及配種年份的細節有些出入。",
    related: ["labrador"],
    sources: [
      ["美國黃金獵犬協會（GRCA）", "https://grca.org/?p=1831"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/Golden_Retriever"]
    ]
  },
  {
    id: "bordercollie",
    zh: "邊境牧羊犬", ja: "ボーダー・コリー", en: "Border Collie",
    region: "eu", country: ["826"], place: "英格蘭與蘇格蘭交界",
    lat: 55.4, lon: -2.4, tags: ["common"],
    job: "趕羊",
    story: "「邊境」指的是英格蘭和蘇格蘭的交界地帶，這裡丘陵多、羊也多。邊境牧羊犬趕羊時會壓低身子、用眼睛盯著羊，牧羊人稱為「eye」，光用眼神就能讓羊群移動。牠以聰明出名，美國一隻叫 Chaser 的邊境牧羊犬學會了超過 1,000 個玩具的名字，還被寫進科學論文。",
    related: ["aussie", "corgi"],
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Border_Collie"],
      ["Wikipedia：Chaser", "https://en.wikipedia.org/wiki/Chaser_(dog)"]
    ]
  },
  {
    id: "corgi",
    zh: "柯基犬（彭布羅克）", ja: "ウェルシュ・コーギー・ペンブローク", en: "Pembroke Welsh Corgi",
    region: "eu", country: ["826"], place: "英國・威爾斯彭布羅克郡",
    lat: 51.8, lon: -4.97, tags: ["common"],
    job: "趕牛（咬牛的腳跟）",
    story: "柯基的腿那麼短是有原因的：牠以前在威爾斯負責趕牛，方法是去輕咬牛的腳跟，腿短、身子低，牛往後踢時比較踢不到。舊名之一 Ci Sawdlo 就是「咬腳跟的狗」。威爾斯民間傳說，柯基是精靈的坐騎，所以牠肩膀上那塊顏色較淺的毛被叫做「精靈的馬鞍」。英國女王伊莉莎白二世一生養過三十多隻柯基。",
    note: "「corgi」常被解釋為威爾斯語的「矮小的狗」（cor + ci），但這個詞源並沒有完全定論。",
    related: ["bordercollie"],
    sources: [
      ["AKC：柯基冷知識", "https://www.akc.org/expert-advice/lifestyle/fun-facts-pembroke-welsh-corgi/"],
      ["Mental Floss：柯基與精靈", "https://www.mentalfloss.com/animals/dogs/ancient-connection-between-corgis-and-fairies"]
    ]
  },
  {
    id: "beagle",
    zh: "米格魯", ja: "ビーグル", en: "Beagle",
    region: "eu", country: ["826"], place: "英國・英格蘭",
    lat: 52.4, lon: -1.2, tags: ["common"],
    job: "成群用鼻子追蹤野兔",
    story: "米格魯是英國的嗅覺獵犬，獵人會帶一群米格魯，讓牠們聞著氣味追野兔，獵人走路就跟得上。牠的鼻子靈到美國農業部在機場組了一支「米格魯巡邏隊」，專門嗅出旅客行李裡的水果和肉品。史努比也是米格魯。台灣習慣叫牠「米格魯」，是從英文 Beagle 音譯來的。",
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Beagle"],
      ["Wikipedia：Beagle Brigade", "https://en.wikipedia.org/wiki/Beagle_Brigade"]
    ]
  },
  {
    id: "frenchie",
    zh: "法國鬥牛犬", ja: "フレンチ・ブルドッグ", en: "French Bulldog",
    region: "eu", country: ["250"], place: "法國・巴黎",
    lat: 48.86, lon: 2.35, tags: ["common"],
    job: "伴侶犬、抓老鼠",
    story: "法鬥的祖先其實是英國的小型鬥牛犬。19 世紀工業革命時，英國諾丁漢的蕾絲工匠被機器搶了工作，很多人搬到法國諾曼第，也帶上了自己的小鬥牛犬。這些狗在法國和當地的狗混種，在巴黎大受歡迎，常出現在咖啡館和舞廳。那對招牌的蝙蝠耳，也是這時候被固定下來的特色。",
    note: "諾丁漢蕾絲工匠的故事流傳很廣，但留下的文獻不多，細節不能完全確定。",
    related: ["boston", "pug"],
    sources: [
      ["AKC：法鬥的歷史", "https://www.akc.org/expert-advice/dog-breeds/breed-history-french-bulldog/"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/French_Bulldog"]
    ]
  },
  {
    id: "poodle",
    zh: "貴賓狗", ja: "プードル", en: "Poodle",
    region: "eu", country: ["276", "250"], place: "德國（一說法國）",
    lat: 50.5, lon: 8.0, tags: ["common"],
    job: "下水撿野鴨的獵犬",
    story: "貴賓狗看起來很貴氣，以前其實是下水撿鴨子的獵犬。英文 Poodle 來自德文 Pudel，和「在水裡潑水」有關；法文叫 Caniche，來自 cane（母鴨）。那個奇特的造型剪法原本也是為了工作：剪短的部分讓牠游泳輕快，保留的毛則保護關節和胸口不受冷水刺激。後來法國貴族非常喜愛牠，貴賓狗也成了法國的國犬。",
    note: "起源地有爭議：大多數學者認為是中世紀的德國，但國際畜犬聯盟（FCI）把原產地登記為法國。",
    sources: [
      ["AKC：貴賓狗的歷史", "https://www.akc.org/expert-advice/dog-breeds/poodle-history/"],
      ["大英百科全書", "https://www.britannica.com/animal/poodle"]
    ]
  },
  {
    id: "dachshund",
    zh: "臘腸狗", ja: "ダックスフンド", en: "Dachshund",
    region: "eu", country: ["276"], place: "德國",
    lat: 48.5, lon: 10.5, tags: ["common"],
    job: "鑽進地洞獵獾",
    story: "德文 Dachshund 直翻就是「獾狗」：Dachs 是獾，Hund 是狗。牠又長又矮的身體是為了鑽進獾的地洞，大型的獵獾和野豬，小型的獵狐狸和兔子。18 世紀起，德國的林務員和獵人專門培育牠來打獵。1972 年慕尼黑奧運的吉祥物 Waldi，就是一隻彩色條紋的臘腸狗。",
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Dachshund"],
      ["Mental Floss：臘腸狗冷知識", "https://www.mentalfloss.com/animals/dogs/9-spunky-facts-about-dachshunds"]
    ]
  },
  {
    id: "gsd",
    zh: "德國牧羊犬", ja: "ジャーマン・シェパード・ドッグ", en: "German Shepherd Dog",
    region: "eu", country: ["276"], place: "德國",
    lat: 49.0, lon: 8.4, tags: ["common"],
    job: "牧羊，後來成為警犬、軍犬",
    story: "德國牧羊犬的起點很明確：1899 年，德國騎兵軍官 Max von Stephanitz 在一場犬展上看中一隻叫 Horand 的牧羊犬，把牠買下、改名為 Horand von Grafrath，登記為這個品種的第一號，並成立了德國牧羊犬協會。他的目標是培育一隻聰明、能工作的狗。隨著德國牧羊業衰退，他轉而把牠推向警察和軍隊的工作。",
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/German_Shepherd"],
      ["Wikipedia：Max von Stephanitz", "https://en.wikipedia.org/wiki/Max_von_Stephanitz"]
    ]
  },
  {
    id: "pomeranian",
    zh: "博美犬", ja: "ポメラニアン", en: "Pomeranian",
    region: "eu", country: ["616", "276"], place: "波美拉尼亞（今德國東北與波蘭北部）",
    lat: 54.0, lon: 15.5, tags: ["common"],
    job: "伴侶犬（祖先是雪橇犬）",
    story: "博美的祖先是北方的大型尖嘴犬，跟薩摩耶、挪威獵麋犬是遠親，原本大約有 14 公斤，現在只剩 1.5～3 公斤。名字來自波羅的海沿岸的波美拉尼亞地區。英國維多利亞女王非常喜歡博美，帶動了小型博美的流行，一般認為在她在世的期間，博美的體型就縮小了一半。",
    note: "維多利亞女王是不是刻意把博美「縮小」有不同說法，美國博美協會認為她養的博美其實不算很小。",
    related: ["samoyed"],
    sources: [
      ["大英百科全書", "https://www.britannica.com/animal/Pomeranian-breed-of-dog"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/Pomeranian_dog"]
    ]
  },
  {
    id: "dalmatian",
    zh: "大麥町", ja: "ダルメシアン", en: "Dalmatian",
    region: "eu", country: ["191"], place: "克羅埃西亞・達爾馬提亞地區",
    lat: 43.5, lon: 16.4, tags: ["common"],
    job: "跟著馬車跑的護衛犬、消防犬",
    story: "大麥町的名字來自克羅埃西亞亞得里亞海沿岸的達爾馬提亞地區。牠最有名的工作是「馬車犬」：跟在馬車旁邊跑，保護馬和車上的貨物。牠和馬處得很好，所以以前消防隊用馬拉消防車時，大麥町會跑在前面開路、在消防站看守，直到今天還是美國消防隊的吉祥物。小大麥町剛出生時全身白色，斑點是長大才慢慢出現的。",
    note: "達爾馬提亞是公認的原產地，但大麥町真正從哪裡起源其實不清楚，牠也有很大一部分是在英國發展成形的。",
    sources: [
      ["大英百科全書", "https://www.britannica.com/animal/Dalmatian"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/Dalmatian_dog"]
    ]
  },
  {
    id: "stbernard",
    zh: "聖伯納犬", ja: "セント・バーナード", en: "St. Bernard",
    region: "eu", country: ["756"], place: "瑞士・大聖伯納山口",
    lat: 45.87, lon: 7.17, tags: ["local"],
    job: "雪地搜救",
    story: "聖伯納犬的名字來自瑞士和義大利邊界的大聖伯納山口，山口上有座修道院收留過路的旅人，從 17 世紀末開始養狗，後來這些狗負責在雪地裡找迷路的人。最有名的一隻叫 Barry（1800–1814），據說救了 40 多個人，牠的標本現在還在瑞士伯恩自然史博物館。為了紀念牠，修道院一直保持有一隻狗叫 Barry。",
    note: "「Barry 把小男孩背回修道院」這類故事，博物館認為多半是後人加油添醋。",
    sources: [
      ["伯恩自然史博物館：Barry", "https://www.nmbe.ch/sites/default/files/2021-12/Barry_Broschuere_14_E.pdf"],
      ["Smithsonian", "https://www.smithsonianmag.com/travel/a-brief-history-of-the-st-bernard-rescue-dog-13787665/"]
    ]
  },
  {
    id: "maltese",
    zh: "馬爾濟斯", ja: "マルチーズ", en: "Maltese",
    region: "eu", country: [], place: "地中海中部（馬爾他一帶）",
    lat: 35.9, lon: 14.5, tags: ["common"],
    job: "伴侶犬",
    story: "馬爾濟斯是非常古老的小型伴侶犬，兩千多年前地中海一帶的希臘、羅馬人就養這種白色小狗。英文 Maltese 就是「馬爾他的」。牠沒有底毛，所以不太會換毛，那身長長的白毛是牠的招牌。",
    note: "名字裡的「馬爾他」也可能是指克羅埃西亞的姆列特島（古名也叫 Melita），起源地沒有定論。",
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Maltese_dog"],
      ["AKC 犬種介紹", "https://www.akc.org/dog-breeds/maltese/"]
    ]
  },
  {
    id: "samoyed",
    zh: "薩摩耶犬", ja: "サモエド", en: "Samoyed",
    region: "eu", country: ["643"], place: "俄羅斯・西伯利亞西北（亞馬爾半島一帶）",
    lat: 67.5, lon: 70.0, tags: ["common"],
    job: "放牧馴鹿、拉雪橇",
    story: "薩摩耶的名字來自西伯利亞的涅涅茨人，他們以前被稱作「薩摩耶德人」（Samoyed）。涅涅茨人靠放牧馴鹿生活，這種白色的狗幫忙趕馴鹿、拉雪橇，晚上還會和主人擠在帳篷裡取暖。19 世紀末、20 世紀初，不少極地探險隊帶著這種狗出發，現在英美的薩摩耶很多都是那些探險犬的後代。",
    related: ["husky", "pomeranian"],
    sources: [
      ["大英百科全書", "https://www.britannica.com/animal/Samoyed-breed-of-dog"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/Samoyed_dog"]
    ]
  },

  // ───────── 非洲 ─────────
  {
    id: "basenji",
    zh: "巴仙吉犬", ja: "バセンジー", en: "Basenji",
    region: "af", country: ["180"], place: "剛果盆地",
    lat: -1.0, lon: 23.0, tags: ["local"],
    job: "在森林裡幫獵人把獵物趕進網子",
    story: "巴仙吉被叫做「不會叫的狗」，但牠不是啞巴：因為喉頭構造特別，牠發不出一般的汪汪聲，興奮時會發出像唱山歌一樣的「約德爾」叫聲。牠來自中非剛果的森林，當地獵人很重視牠的速度和安靜。歐洲人最早在 1895 年記錄到這種狗。牠還有一個像貓的習慣：很愛用舌頭把自己舔乾淨。",
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Basenji"],
      ["AKC 犬種介紹", "https://www.akc.org/dog-breeds/basenji/"]
    ]
  },
  {
    id: "ridgeback",
    zh: "羅德西亞背脊犬", ja: "ローデシアン・リッジバック", en: "Rhodesian Ridgeback",
    region: "af", country: ["716"], place: "辛巴威（舊稱南羅德西亞）",
    lat: -20.15, lon: 28.58, tags: ["local"],
    job: "合力纏住獅子，等獵人趕到",
    story: "牠的背上有一條毛往反方向長的「背脊」，這個特徵一般認為來自南非原住民科伊科伊人養的狗。後來歐洲殖民者把這些狗和歐洲犬種混種，培育出能在非洲草原上獵獅的狗。牠們不負責殺獅子，而是一群輪流纏住獅子，讓牠動彈不得，直到獵人趕來。1922 年，品種標準在辛巴威的布拉瓦約訂定。",
    note: "背脊特徵來自科伊科伊犬是育種者普遍的看法，但沒辦法完全證實。",
    sources: [
      ["AKC：羅德西亞背脊犬曾經獵獅", "https://www.akc.org/expert-advice/dog-breeds/the-rhodesian-ridgeback-once-hunted-lions/"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/Rhodesian_Ridgeback"]
    ]
  },

  // ───────── 西亞・中亞 ─────────
  {
    id: "saluki",
    zh: "薩路基獵犬", ja: "サルーキ", en: "Saluki",
    region: "wa", country: ["368", "760"], place: "中東・肥沃月彎",
    lat: 33.5, lon: 41.0, tags: ["local"],
    job: "用眼睛追獵瞪羚",
    story: "薩路基是最古老的犬種類型之一，屬於「視覺獵犬」：靠眼睛發現獵物，再用速度追上去。牠是中東貝都因人的獵犬，可以在沙漠中追捕瞪羚。在一些伊斯蘭文化裡狗被視為不潔，但薩路基常是例外，可以進到帳篷裡。",
    related: ["afghan"],
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Saluki"],
      ["AKC 犬種介紹", "https://www.akc.org/dog-breeds/saluki/"]
    ]
  },
  {
    id: "afghan",
    zh: "阿富汗獵犬", ja: "アフガン・ハウンド", en: "Afghan Hound",
    region: "wa", country: ["004"], place: "阿富汗山區",
    lat: 34.5, lon: 69.2, tags: ["local"],
    job: "在山區追獵",
    story: "那身飄逸的長毛不只是好看，是為了抵抗阿富汗山區的寒冷。牠和薩路基一樣是視覺獵犬，跑起來非常快，腰胯靈活，在崎嶇山地也能急轉彎。2005 年，韓國團隊做出世界上第一隻複製狗 Snuppy，就是一隻阿富汗獵犬。",
    related: ["saluki"],
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Afghan_Hound"],
      ["Wikipedia：Snuppy", "https://en.wikipedia.org/wiki/Snuppy"]
    ]
  },

  // ───────── 東亞 ─────────
  {
    id: "taiwandog",
    zh: "台灣犬", ja: "台湾犬（タイワンケン）", en: "Taiwan Dog（Formosan Mountain Dog）",
    region: "ea", country: ["158"], place: "台灣・中央山脈",
    lat: 23.7, lon: 121.0, tags: ["local"],
    job: "原住民的狩獵夥伴",
    story: "台灣犬又叫「台灣土狗」，是台灣原住民上山打獵的夥伴，在茂密的山林裡非常敏捷。日治時期以後，大量外來犬種進入台灣，純種台灣犬越來越少。1970 年代末，台灣大學和日本學者合作，在原住民部落裡找回了幾十隻純種台灣犬，成為後來保育和育種的基礎。牠的特徵是三角形的頭、杏仁眼、鐮刀尾，舌頭上常有黑斑。國際畜犬聯盟（FCI）在 2015 年收錄了牠的品種標準。",
    note: "台灣犬和南亞、東南亞古代獵犬的血緣關係還有爭議。",
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Taiwan_Dog"],
      ["AmCham Taiwan：古老的狗", "https://topics.amcham.com.tw/2018/07/an-ancient-dog-finds-its-place-in-the-modern-world/"]
    ]
  },
  {
    id: "shiba",
    zh: "柴犬", ja: "柴犬（しばいぬ）", en: "Shiba Inu",
    region: "ea", country: ["392"], place: "日本・本州中部山區",
    lat: 36.2, lon: 137.9, tags: ["common", "local"],
    job: "在山林灌木叢中打獵",
    story: "「柴」常被解釋為灌木叢，因為柴犬以前在山裡的灌木叢間幫忙打獵；也有人說是牠的紅棕毛色像枯掉的柴；還有一說，「柴」在古語裡是「小」的意思。1936 年柴犬被指定為日本的天然紀念物。網路迷因 Doge 的主角卡波醬（かぼす）也是柴犬，牠在 2024 年離世。",
    note: "「柴」的字源沒有定論，上面三種說法都有人支持。",
    related: ["akita"],
    sources: [
      ["AKC：柴犬的歷史", "https://www.akc.org/expert-advice/dog-breeds/shiba-inu-breed-history/"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/Shiba_Inu"]
    ]
  },
  {
    id: "akita",
    zh: "秋田犬", ja: "秋田犬（あきたいぬ）", en: "Akita",
    region: "ea", country: ["392"], place: "日本・秋田縣大館市一帶",
    lat: 40.27, lon: 140.56, tags: ["common", "local"],
    job: "獵大型動物、看守",
    story: "忠犬小八（ハチ公）就是秋田犬。牠的主人上野英三郎教授 1925 年過世後，小八還是每天到澀谷車站等他，等了將近十年。美國作家海倫・凱勒 1937 年訪問日本時聽了這個故事，很想養一隻秋田犬，於是得到一隻叫「神風號」的小狗，牠也成了第一隻到美國生活的秋田犬。",
    related: ["shiba"],
    sources: [
      ["AKC：海倫・凱勒與秋田犬", "https://www.akc.org/expert-advice/dog-breeds/helen-keller-was-a-true-dog-lover/"],
      ["Wikipedia：忠犬小八", "https://en.wikipedia.org/wiki/Hachik%C5%8D"]
    ]
  },
  {
    id: "jindo",
    zh: "珍島犬", ja: "珍島犬（チンドッケ）", en: "Korean Jindo",
    region: "ea", country: ["410"], place: "韓國・全羅南道珍島",
    lat: 34.48, lon: 126.26, tags: ["local"],
    job: "打獵、看家",
    story: "珍島犬來自韓國西南外海的珍島，是韓國的天然紀念物，以忠心和認家出名。1993 年，一隻叫「白狗」（백구）的珍島犬被賣到約 300 公里外的大田，結果牠自己逃出來，花了大約七個月走回珍島的老主人家。這件事在韓國轟動一時，被拍成紀錄片和卡通，珍島郡後來還幫牠立了雕像。",
    note: "白狗回家的年份和年紀，不同來源記載略有出入。",
    sources: [
      ["珍島郡官網：白狗的故事", "https://www.jindo.go.kr/eng/sub.cs?m=32"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/Korean_Jindo"]
    ]
  },
  {
    id: "shihtzu",
    zh: "西施犬", ja: "シー・ズー", en: "Shih Tzu",
    region: "ea", country: ["156"], place: "西藏起源，在北京清宮發展",
    lat: 39.9, lon: 116.4, tags: ["common"],
    job: "宮廷伴侶犬",
    story: "「西施犬」這個中文名其實和美女西施沒有關係。英文 Shih Tzu 是「獅子」的舊式拼音，因為牠長得像中國傳統畫裡的獅子，所以也叫「獅子狗」。牠的祖先一般認為來自西藏，後來在清朝宮廷裡發展成形，慈禧太后就養了不少，還讓太監負責繁殖。1908 年慈禧過世後，宮廷養狗也跟著沒落了。",
    note: "西施犬應該算「西藏犬」還是「中國犬」一直有爭議。",
    related: ["pug", "pekingese"],
    sources: [
      ["AKC：西施犬的歷史", "https://www.akc.org/expert-advice/dog-breeds/shih-tzu-history/"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/Shih_Tzu"]
    ]
  },
  {
    id: "pekingese",
    zh: "北京犬", ja: "ペキニーズ", en: "Pekingese",
    region: "ea", country: ["156"], place: "中國・北京",
    lat: 40.3, lon: 116.0, tags: ["local"],
    job: "宮廷伴侶犬",
    story: "北京犬以前是中國皇室的狗，一般人不能隨便養。1860 年英法聯軍攻進北京、火燒圓明園時，英軍從宮裡帶走了五隻北京犬，其中一隻被送給維多利亞女王，取名叫 Looty（意思是「戰利品」），北京犬就這樣傳進了西方。",
    related: ["shihtzu", "pug"],
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Pekingese"],
      ["Wikipedia：Looty", "https://en.wikipedia.org/wiki/Looty"]
    ]
  },
  {
    id: "pug",
    zh: "巴哥犬", ja: "パグ", en: "Pug",
    region: "ea", country: ["156"], place: "中國",
    lat: 34.3, lon: 113.0, tags: ["common"],
    job: "宮廷伴侶犬",
    story: "巴哥犬源自中國，後來由荷蘭商人帶到歐洲，和荷蘭的奧蘭治王室結下緣分。傳說 1572 年，一隻叫 Pompey 的巴哥在刺客來襲時把熟睡的奧蘭治親王威廉吵醒，救了他一命。1688 年威廉三世到英國繼承王位，也把巴哥一起帶了過去，巴哥就在英國流行起來。",
    note: "巴哥在中國出現的年代說法很多，從漢朝到宋朝都有；Pompey 的故事也偏向傳說，連牠到底是不是巴哥都有爭議。",
    related: ["shihtzu", "frenchie"],
    sources: [
      ["AKC：巴哥冷知識", "https://www.akc.org/expert-advice/lifestyle/things-you-didnt-know-about-the-pug/"],
      ["Wikipedia", "https://en.wikipedia.org/wiki/Pug"]
    ]
  },
  {
    id: "chow",
    zh: "鬆獅犬", ja: "チャウ・チャウ", en: "Chow Chow",
    region: "ea", country: ["156"], place: "中國北方",
    lat: 41.0, lon: 111.0, tags: ["local"],
    job: "看守、打獵、拉車",
    story: "鬆獅犬最大的特徵是藍黑色的舌頭，幼犬剛出生時舌頭是粉紅色的，長大才慢慢變深。牠是很古老的犬種，基因研究顯示牠跟狼的血緣比大多數狗都近。牠走路時後腿比較直，步伐看起來有點像踩高蹺。",
    related: ["shihtzu"],
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Chow_Chow"],
      ["AKC 犬種介紹", "https://www.akc.org/dog-breeds/chow-chow/"]
    ]
  },
  {
    id: "tibetanmastiff",
    zh: "藏獒", ja: "チベタン・マスティフ", en: "Tibetan Mastiff",
    region: "ea", country: ["156"], place: "青藏高原",
    lat: 31.0, lon: 91.0, tags: ["local"],
    job: "替遊牧民看守羊群與帳篷",
    story: "藏獒是青藏高原遊牧民的守護犬，白天跟著畜群，晚上守在帳篷外防狼和其他野獸。牠能在高海拔、低氧的地方生活，研究發現，藏獒幫助適應高原的基因（EPAS1），很可能是古時候和青藏高原的狼混血得來的。",
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Tibetan_Mastiff"]
    ]
  },

  // ───────── 大洋洲 ─────────
  {
    id: "cattledog",
    zh: "澳洲牧牛犬", ja: "オーストラリアン・キャトル・ドッグ", en: "Australian Cattle Dog",
    region: "oc", country: ["036"], place: "澳洲・新南威爾斯",
    lat: -32.3, lon: 150.9, tags: ["local"],
    job: "在廣大的牧場上趕牛",
    story: "這才是真的在澳洲培育的牧犬。19 世紀澳洲的牧場大、天氣熱，從英國帶來的牧羊犬撐不住，於是牧場主人把牧牛犬和澳洲野犬丁格混種，培育出耐熱、耐操又會咬牛腳跟趕牛的狗。目前金氏世界紀錄最長壽的狗就是一隻澳洲牧牛犬 Bluey，活了 29 歲 5 個月。",
    related: ["dingo", "aussie"],
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Australian_Cattle_Dog"],
      ["Wikipedia：Bluey", "https://en.wikipedia.org/wiki/Bluey_(long-lived_dog)"]
    ]
  },
  {
    id: "dingo",
    zh: "澳洲野犬（丁格犬）", ja: "ディンゴ", en: "Dingo",
    region: "oc", country: ["036"], place: "澳洲內陸",
    lat: -24.5, lon: 133.0, tags: ["local"],
    job: "野生，不是人類培育的犬種",
    story: "丁格不是人類刻意培育出來的犬種，而是幾千年前跟著人類來到澳洲、之後就在野外生活的犬科動物，是澳洲大陸上最大的陸地掠食者。為了不讓丁格進入南邊的牧羊區，澳洲蓋了一道長約 5,600 公里的「野犬圍籬」，是世界上最長的圍籬之一。",
    note: "丁格是什麼時候、從哪裡抵達澳洲還有爭議，常見的估計是 3,500 年前以上。",
    related: ["cattledog"],
    sources: [
      ["Wikipedia", "https://en.wikipedia.org/wiki/Dingo"],
      ["Wikipedia：野犬圍籬", "https://en.wikipedia.org/wiki/Dingo_Fence"]
    ]
  }
];
