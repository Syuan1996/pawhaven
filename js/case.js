const caseData = [
  {
    id: "case-1",
    image: "images/case/1.jpeg",
    title: "小乖的幸福歸宿",
    petName: "小乖",
    story: "小乖剛來到家裡時有些膽怯，總躲在沙發底下。但我每天都花時間陪伴牠，輕聲細語地跟牠說話。沒想到，短短幾週牠就開始主動撒嬌，每天都會在門口等我回家，還會用頭輕輕蹭我的腳，溫馨又可愛。牠的到來讓我的生活充滿了溫暖，也讓我體會到領養所帶來的感動與快樂。",
    adopter: "領養人: 陳小姐",
  },
  {
    id: "case-2",
    image: "images/case/2.jpeg",
    title: "可可的溫暖新家",
    petName: "可可",
    story: "可可剛來時有些害羞，但在新環境很快適應，現在已經是家裡的小霸王了！牠總愛爬到我的電腦桌上，踩在鍵盤上吸引我的注意，偶爾還會霸佔我的椅子。雖然有點調皮，但每次看到牠撒嬌討摸的模樣，我的心都融化了。",
    adopter: "領養人: 林小姐",
  },
  {
    id: "case-3",
    image: "images/case/3.jpeg",
    title: "小橘與小明的奇妙緣分",
    petName: "小橘",
    story: "小橘是個好奇寶寶，家裡因牠的到來變得充滿歡樂。牠每天都會探索家裡每個角落，最喜歡玩逗貓棒，總是玩到氣喘吁吁。牠的活潑與熱情感染了我們全家，也讓我們更珍惜彼此相處的每一刻。",
    adopter: "領養人: 張先生",
  },
  {
    id: "case-4",
    image: "images/case/4.jpeg",
    title: "點點的成長日記",
    petName: "點點",
    story: "點點的個性越來越活潑，已經完全融入我們的家庭，每天都帶來歡笑。非常感謝毛孩歸宿讓我們遇見了這個可愛的小生命。",
    adopter: "領養人: 王先生",
  },
  {
    id: "case-5",
    image: "images/case/5.jpeg",
    title: "麻糬的暖心旅程",
    petName: "麻糬",
    story: "麻糬從一隻膽小害怕的毛孩，變成現在愛撒嬌的小可愛，每天都帶給我滿滿的愛與陪伴。",
    adopter: "領養人: 楊先生",
  },
  {
    id: "case-6",
    image: "images/case/6.jpeg",
    title: "小黑的超凡魅力",
    petName: "小黑",
    story: "小黑非常聰明，領養後很快就學會了握手和坐下，是個令人驚豔的小天使。",
    adopter: "領養人: 許小姐",
  },
  {
    id: "case-7",
    image: "images/case/7.jpeg",
    title: "奇奇的新冒險",
    petName: "奇奇",
    story: "奇奇的到來讓我們家每天充滿了歡聲笑語，牠豐富了我們的生活，也成為我們家不可或缺的一份子。",
    adopter: "領養人: 趙小姐",
  },
  {
    id: "case-8",
    image: "images/case/8.jpeg",
    title: "多多的慵懶日常",
    petName: "多多",
    story: "多多每天就是吃飽睡、睡飽吃，雖然懶惰但非常討人喜歡。牠總是找最舒適的角落睡覺，但她最喜歡下午出門散步。",
    adopter: "領養人: 吳先生",
  },
  {
    id: "case-9",
    image: "images/case/9.jpeg",
    title: "娜娜的幸福轉變",
    petName: "娜娜",
    story: "娜娜非常親人，喜歡跟著我走來走去，是個甜蜜的小跟班。只要我在家，牠總會在我腳邊磨蹭撒嬌，讓我感到被滿滿的愛包圍。",
    adopter: "領養人: 周小姐",
  },
  {
    id: "case-10",
    image: "images/case/10.jpeg",
    title: "咪咪的歡樂時刻",
    petName: "咚咚",
    story: "咚咚活潑好動，總能為家裡帶來歡樂，是我們家的開心果。牠最喜歡玩球，每次丟球牠都衝得飛快，充滿了活力。",
    adopter: "領養人: 黃先生",
  },
  {
    id: "case-11",
    image: "images/case/11.jpeg",
    title: "球球的專屬暖男",
    petName: "球球",
    story: "球球很溫順，每次我難過時都會依偎在我身邊，給予我力量。牠彷彿能讀懂我的情緒，用牠的溫柔陪伴我度過每一個難關。",
    adopter: "領養人: 謝小姐",
  },
  {
    id: "case-12",
    image: "images/case/12.jpeg",
    title: "小胖的可愛日常",
    petName: "小胖",
    story: "小胖雖然腿短，但跑起來非常快，牠的可愛模樣總是讓我笑開懷。牠圓滾滾的身材加上短腿，每一步都充滿了喜感，是我們家最療癒的存在。",
    adopter: "領養人: 葉小姐",
  },
  {
    id: "case-13",
    image: "images/case/13.jpeg",
    title: "饅頭的新生活",
    petName: "饅頭",
    story: "饅頭的個性溫和沉穩，領養後很快就適應新家。每天最期待的就是和家人一起窩在沙發上看電視，享受寧靜而溫馨的時光。",
    adopter: "領養人: 郭先生",
  },
  {
    id: "case-14",
    image: "images/case/14.jpeg",
    title: "樂樂的愛笑日記",
    petName: "樂樂",
    story: "樂樂是個愛笑的小天使，總能用牠的笑容融化我們的心。牠最喜歡在陽光下打盹，每次看到牠舒服的表情，都覺得生活充滿了美好。",
    adopter: "領養人: 吳小姐",
  },
  {
    id: "case-15",
    image: "images/case/15.jpeg",
    title: "黑糖的甜蜜負擔",
    petName: "黑糖",
    story: "黑糖非常黏人，走到哪牠就跟到哪。雖然是個甜蜜的負擔，但牠無時無刻的陪伴，讓我感受到無比的愛與安全感。",
    adopter: "領養人: 蔡小姐",
  },
  {
    id: "case-16",
    image: "images/case/16.jpeg",
    title: "小皮的新家奇遇記",
    petName: "小皮",
    story: "小皮是個充滿好奇心的小冒險家。牠每天都在探索家裡未知的領域，為我們的生活增添了許多驚喜與歡樂。",
    adopter: "領養人: 游先生",
  },
  {
    id: "case-17",
    image: "images/case/17.jpeg",
    title: "豆豆的溫柔陪伴",
    petName: "豆豆",
    story: "豆豆非常溫柔，尤其喜歡陪我讀書或工作。牠會靜靜地窩在我身邊，成為我最好的讀書夥伴，讓我在忙碌的生活中也能感受到一份平靜。",
    adopter: "領養人: 洪先生",
  }
];
  // 選取要放置案例卡片的容器
  const caseListContainer = document.getElementById("case-list");

  // 確保容器存在
  if (caseListContainer) {
    let caseCardsHTML = ""; // 用來儲存所有卡片的 HTML 字串

    // 迴圈遍歷陣列並生成 HTML
    caseData.forEach((caseItem) => {
      // 使用模板字串 ` ` 來建立卡片結構
  caseCardsHTML += `
  <div class="case-item "><div class="card">
      <div class="pet-name-tag">${caseItem.petName}</div> 
    <img src="${caseItem.image}" class="card-img-top" alt="${caseItem.title}">
    <div class="card-body">
      <h5 class="card-title">${caseItem.title}</h5>
      <p class="card-text">${caseItem.story}</p>
      <p class="card-text"><small class="text-muted">${caseItem.adopter}</small></p>
    </div>
  </div></div>
`;

    });

    // 將生成的 HTML 插入到容器中
    caseListContainer.innerHTML = caseCardsHTML;
  }
