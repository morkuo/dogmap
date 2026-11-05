// 犬種年表：每個犬種一個「關鍵年份」與當時發生的事。
// 只收有來源的年份（來源見各犬種卡片）；年份不精確的用 label 寫成「1920 年代」等。
// 沒列在這裡的犬種，在年表模式中顯示為灰點（年份未定）。
window.MILESTONES = {
  lundehund:    { year: 1591, text: "挪威韋略島的海鸚狗第一次出現在文字紀錄裡" },
  pug:          { year: 1688, text: "巴哥犬跟著威廉三世從荷蘭來到英國" },
  dachshund:    { year: 1700, label: "1700 年代初", text: "德國書籍第一次可查證地記載「獾狗」" },
  stbernard:    { year: 1707, text: "大聖伯納山口修道院的狗第一次出現在紀錄裡" },
  dalmatian:    { year: 1790, text: "英國書籍描述大麥町是優雅的馬車隨從" },
  labrador:     { year: 1830, label: "1830 年代", text: "拉布拉多的祖先從紐芬蘭被帶到英國，培育成獵犬" },
  cattledog:    { year: 1840, label: "1840 年左右", text: "Thomas Hall 用丁格和牧羊犬培育出澳洲牧牛犬" },
  pekingese:    { year: 1860, text: "英軍從北京帶走北京犬，牠們從此傳入西方" },
  golden:       { year: 1868, text: "第一窩黃金獵犬在蘇格蘭高地出生" },
  pomeranian:   { year: 1888, text: "維多利亞女王的紅色博美，帶動小型博美流行" },
  shihtzu:      { year: 1890, label: "19 世紀末", text: "西施犬在慈禧太后的宮廷裡發展成形" },
  boston:       { year: 1893, text: "波士頓㹴成為第一個獲 AKC 承認的美國本土犬種" },
  bordercollie: { year: 1893, text: "邊境牧羊犬的「祖父」Old Hemp 在英格蘭北部出生" },
  basenji:      { year: 1895, text: "歐洲人第一次記錄到剛果的巴仙吉犬" },
  gsd:          { year: 1899, text: "Horand 被登記為德國牧羊犬第一號" },
  chihuahua:    { year: 1904, text: "美國犬業俱樂部（AKC）正式承認吉娃娃" },
  frenchie:     { year: 1905, text: "英國育犬協會承認法國鬥牛犬是獨立的犬種" },
  husky:        { year: 1908, label: "1908 年前後", text: "哈士奇被帶到阿拉斯加諾姆參加雪橇比賽" },
  dogo:         { year: 1920, label: "1920 年代", text: "阿根廷醫師開始培育杜高犬" },
  ridgeback:    { year: 1922, text: "羅德西亞背脊犬的品種標準在辛巴威訂定" },
  akita:        { year: 1931, text: "秋田犬成為日本第一個被指定為天然紀念物的犬種" },
  canaan:       { year: 1934, label: "1930 年代", text: "Menzel 開始從以色列當地的狗培育出迦南犬" },
  shiba:        { year: 1936, text: "柴犬被指定為日本的天然紀念物" },
  aussie:       { year: 1950, label: "1950–60 年代", text: "澳洲牧羊犬在美國的牛仔競技表演中走紅" },
  jindo:        { year: 1962, text: "珍島犬被南韓指定為天然紀念物第 53 號" },
  azawakh:      { year: 1970, label: "1970 年代", text: "阿札瓦克犬第一次被帶到歐洲" },
  havanese:     { year: 1974, text: "美國夫婦用古巴流亡家庭的狗，開始復育哈瓦那犬" },
  taiwandog:    { year: 1976, text: "台大與日本學者開始走訪部落、搶救台灣犬" },
  peruvian:     { year: 2001, text: "祕魯立法把祕魯無毛犬列為國家文化遺產" },
  alabai:       { year: 2020, text: "土庫曼首都立起鍍金的 Alabai 雕像" }
};
// 有數千年歷史、在年表一開始就出現的古老犬種
window.ANCIENT = {
  xolo:   "至少 3,500 年歷史",
  saluki: "最古老的犬種類型之一",
  maltese:"兩千多年前地中海就有這種小白狗",
  dingo:  "約 3,500 年以上前抵達澳洲",
  chow:   "約 8,300 年前就從中國本土的狗分化出來"
};
