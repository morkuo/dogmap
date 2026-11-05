// 歷史上的名犬（地圖上的星形標記）＋ 犬種的旅程路線
// 每則故事都對照過來源；有爭議的地方寫在 note。breed 連到 dogs.js 的犬種 id（沒有就留空）。
window.FAMOUS = [
  {
    id: "hachiko", name: "忠犬小八", ja: "ハチ公", en: "Hachikō", breed: "akita",
    year: "1925–1935", place: "日本・東京澀谷車站", lat: 35.659, lon: 139.700,
    text: "小八的主人上野英三郎教授在 1925 年過世後，小八還是每天到澀谷車站等他回家，一等就將近十年，直到 1935 年過世。現在澀谷車站前的小八銅像，是東京最有名的會合地點之一。",
    sources: [["Wikipedia", "https://en.wikipedia.org/wiki/Hachik%C5%8D"]]
  },
  {
    id: "barry", name: "Barry", ja: "バリー", en: "Barry", breed: "stbernard",
    year: "1800–1814", place: "瑞士・大聖伯納山口修道院", lat: 45.95, lon: 7.35,
    text: "大聖伯納山口修道院最有名的救難犬，據說一生救了 40 多個人。牠的標本現在還在瑞士伯恩自然史博物館展出，修道院也一直保持有一隻狗叫 Barry。",
    note: "「把小男孩背回修道院」之類的故事，博物館認為多半是後人加油添醋。",
    sources: [["伯恩自然史博物館", "https://www.nmbe.ch/sites/default/files/2021-12/Barry_Broschuere_14_E.pdf"]]
  },
  {
    id: "togo", name: "Togo 與 Balto", ja: "トーゴーとバルト", en: "Togo & Balto", breed: "husky",
    year: "1925", place: "美國・阿拉斯加諾姆", lat: 64.50, lon: -165.41,
    text: "1925 年諾姆爆發白喉，二十位雪橇手和一百多隻狗接力約 1,000 公里送來血清。最後一棒的 Balto 成了明星，紐約中央公園還有牠的雕像；不過跑最長、最危險路段的是 Togo。",
    sources: [["AKC：Togo", "https://www.akc.org/expert-advice/lifestyle/togo-siberian-husky-sled-dog-hero-of-1925/"]]
  },
  {
    id: "laika", name: "Laika、Belka 與 Strelka", ja: "ライカ、ベルカとストレルカ", en: "Laika, Belka & Strelka", breed: "",
    year: "1957・1960", place: "哈薩克・拜科努爾太空發射場", lat: 45.92, lon: 63.34,
    text: "蘇聯的太空狗原本都是莫斯科街頭的流浪狗。1957 年 11 月 3 日，Laika 搭乘史普尼克 2 號升空，成為第一個繞地球軌道飛行的地球生物，但這趟任務從一開始就沒有讓牠回來的計畫。1960 年 8 月，Belka 和 Strelka 在太空待了一天多、繞地球 17 圈後平安返回，是第一批從軌道活著回來的狗。",
    note: "Laika 的真正死因，蘇聯當時沒有公開，直到 2002 年才對外說明。",
    sources: [
      ["Wikipedia：Belka 與 Strelka", "https://en.wikipedia.org/wiki/Belka_and_Strelka"],
      ["Wikipedia：Laika", "https://en.wikipedia.org/wiki/Laika"]
    ]
  },
  {
    id: "stubby", name: "Stubby 中士", ja: "スタビー軍曹", en: "Sergeant Stubby", breed: "",
    year: "1917–1918", place: "第一次世界大戰・法國西線戰場", lat: 48.87, lon: 5.78,
    text: "Stubby 原本是美國耶魯大學附近的流浪狗，跟著美軍第 102 步兵團到了法國戰場。牠中過毒氣之後對毒氣特別敏感，曾在清晨毒氣來襲時跑過壕溝吠叫、叫醒熟睡的士兵，後來被升為「中士」，是第一隻在美軍中獲得軍階的狗。",
    note: "也有資料說牠升為中士，是因為幫忙抓到一名德軍間諜。",
    sources: [
      ["大英百科全書", "https://www.britannica.com/biography/Sergeant-Stubby"],
      ["Connecticut History", "https://connecticuthistory.org/a-true-dog-of-war-sergeant-stubby"]
    ]
  },
  {
    id: "bobby", name: "忠犬巴比", ja: "グレーフライアーズ・ボビー", en: "Greyfriars Bobby", breed: "",
    year: "1858–1872", place: "英國・蘇格蘭愛丁堡", lat: 55.947, lon: -3.191,
    text: "傳說小狗 Bobby 的主人 John Gray 在 1858 年過世、葬在愛丁堡的灰衣修士教堂墓園後，Bobby 守在主人墓旁長達 14 年，直到 1872 年過世。現在墓園入口附近有牠的雕像和墓碑。",
    note: "這個故事有不少爭議：主人是哪一位 John Gray、Bobby 是什麼品種，甚至是不是只有一隻 Bobby，都有人質疑。",
    sources: [["Wikipedia", "https://en.wikipedia.org/wiki/Greyfriars_Bobby"]]
  },
  {
    id: "smoky", name: "Smoky", ja: "スモーキー", en: "Smoky", breed: "",
    year: "1944–1945", place: "第二次世界大戰・新幾內亞", lat: -6.3, lon: 147.0,
    text: "1944 年，美軍士兵在新幾內亞的散兵坑裡發現一隻不到 2 公斤的約克夏㹴。牠後來立下一件大功：把電線拖著穿過一條長約 21 公尺、只有 20 公分寬的管子，省下士兵冒著敵火挖地好幾天的工夫。牠也常陪護士探視傷兵，常被稱為最早有紀錄的治療犬之一。",
    note: "穿管子這件事發生在新幾內亞還是菲律賓呂宋島，各資料說法不同。",
    sources: [["Wikipedia", "https://en.wikipedia.org/wiki/Smoky_(war_dog)"]]
  },
  {
    id: "baekgu", name: "白狗（백구）", ja: "ペック", en: "Baekgu", breed: "jindo",
    year: "1993", place: "韓國・全羅南道珍島", lat: 34.40, lon: 126.40,
    text: "這隻珍島犬被賣到約 300 公里外的大田後，自己逃出來，花了大約七個月走回珍島的老主人家。故事被拍成紀錄片和卡通，珍島郡還為牠立了雕像。",
    sources: [["珍島郡官網", "https://www.jindo.go.kr/eng/sub.cs?m=32"]]
  },
  {
    id: "bluey", name: "Bluey", ja: "ブルーイ", en: "Bluey", breed: "cattledog",
    year: "1910–1939", place: "澳洲・維多利亞州羅徹斯特", lat: -36.36, lon: 144.70,
    text: "這隻澳洲牧牛犬活了 29 歲 5 個月，是金氏世界紀錄裡有可靠證據、最長壽的狗。牠工作了大約 20 年，在牧場上幫忙趕牛和羊。",
    sources: [["Wikipedia", "https://en.wikipedia.org/wiki/Bluey_(long-lived_dog)"]]
  },
  {
    id: "kabosu", name: "卡波醬（かぼす）", ja: "かぼすちゃん", en: "Kabosu", breed: "shiba",
    year: "2010–2024", place: "日本・千葉縣佐倉市", lat: 35.72, lon: 140.22,
    text: "網路迷因 Doge 裡那隻斜眼看鏡頭的柴犬，就是卡波醬。牠的照片在 2010 年被主人放上部落格，之後傳遍全世界，還成了一種加密貨幣的圖示。卡波醬在 2024 年過世。",
    sources: [["Wikipedia", "https://en.wikipedia.org/wiki/Kabosu_(dog)"]]
  },
  {
    id: "snuppy", name: "Snuppy", ja: "スナッピー", en: "Snuppy", breed: "afghan",
    year: "2005", place: "韓國・首爾大學", lat: 37.46, lon: 126.95,
    text: "2005 年，首爾大學的研究團隊宣布做出世界上第一隻複製狗 Snuppy，牠是一隻阿富汗獵犬。名字取自 SNU（首爾大學）和 puppy（小狗）。",
    sources: [["Wikipedia", "https://en.wikipedia.org/wiki/Snuppy"]]
  },
  {
    id: "bo", name: "Bo 與 Sunny", ja: "ボーとサニー", en: "Bo & Sunny", breed: "pwd",
    year: "2009–2017", place: "美國・華盛頓特區白宮", lat: 38.897, lon: -77.036,
    text: "美國前總統歐巴馬一家的兩隻葡萄牙水犬。Bo 在 2009 年住進白宮，2013 年 Sunny 也加入，成為「第一家庭」的狗。",
    sources: [["National Geographic", "https://www.nationalgeographic.com/animals/article/130820-portuguese-water-dog-animals-white-house-president-pets-nation"]]
  }
];

// 犬種的旅程：依時間順序的地點（第一站通常是原產地）
window.TRIPS = {
  labrador: [
    [47.56, -52.71, "紐芬蘭島：跟著漁夫工作的聖約翰斯水犬"],
    [50.72, -1.98, "19 世紀：隨貿易船來到英國普爾港，被培育成獵犬"]
  ],
  pug: [
    [34.3, 113.0, "中國：宮廷裡的小狗"],
    [52.1, 5.1, "荷蘭：由荷蘭商人帶到歐洲，和奧蘭治王室結緣"],
    [51.5, -0.13, "1688 年：跟著威廉三世到英國"]
  ],
  frenchie: [
    [52.95, -1.15, "英國諾丁漢：蕾絲工匠養的小型鬥牛犬"],
    [49.18, -0.37, "19 世紀：工匠移居法國諾曼第，也帶上了狗"],
    [48.86, 2.35, "巴黎：成為咖啡館與舞廳裡的寵兒"]
  ],
  pekingese: [
    [40.3, 116.0, "北京：皇宮裡的狗，一般人不能隨便養"],
    [51.5, -0.13, "1860 年：被英軍帶到英國，其中一隻獻給維多利亞女王"]
  ],
  akita: [
    [40.27, 140.56, "秋田縣大館一帶"],
    [35.66, 139.70, "1925–1935 年：忠犬小八在東京澀谷車站等主人"],
    [41.25, -73.31, "1937 年：海倫・凱勒把「神風號」帶回美國康乃狄克州的家"]
  ],
  kangal: [
    [39.23, 37.39, "土耳其坎高：保護羊群不被狼攻擊"],
    [-20.46, 16.65, "納米比亞：守護牧場，讓牧民不必射殺獵豹"]
  ],
  havanese: [
    [23.13, -82.38, "哈瓦那：古巴上流社會的寵物"],
    [25.77, -80.19, "1959 年革命後：極少數跟著流亡家庭到了美國"],
    [38.74, -108.07, "1970 年代：一對美國夫婦從少數幾隻重新復育"]
  ],
  husky: [
    [66.0, 172.0, "西伯利亞東北：楚科奇人的雪橇犬"],
    [64.5, -165.41, "1908 年前後：被帶到阿拉斯加諾姆參加雪橇比賽，1925 年跑了血清接力"]
  ],
  shihtzu: [
    [29.65, 91.1, "一般認為祖先來自西藏"],
    [39.9, 116.4, "北京清宮：在宮廷裡發展成形"]
  ],
  pwd: [
    [37.1, -8.0, "葡萄牙阿爾加維：漁船上的工作犬"],
    [38.9, -77.04, "2009 年：Bo 搬進美國白宮"]
  ],
  poodle: [
    [50.5, 8.0, "德國（一說）：下水撿鴨子的獵犬"],
    [48.86, 2.35, "法國：貴族的寵兒，後來成為法國國犬"]
  ]
};
