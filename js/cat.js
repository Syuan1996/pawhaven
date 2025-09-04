const catData = [
  {
    name: "樂多",
    id: "cat-1",
    image: "images/cat/1.jpg",
    description: "樂多是一隻活潑又愛撒嬌的寵物，喜歡曬太陽和玩逗貓棒。"
  },
  {
    name: "米路",
    id: "cat-2",
    image: "images/cat/2.jpg",
    description: "米路個性溫和，是個安靜的美男子，喜歡在溫暖的毯子裡睡覺。",
  },
  {
    name: "麥芽",
    id: "cat-3",
    image: "images/cat/3.jpg",
    description: "麥芽是隻充滿好奇心的寵物，對任何新事物都充滿熱情。",
  },
  {
    name: "斑比",
    id: "cat-4",
    image: "images/cat/4.jpg",
    description: "斑比是隻有個性的寵物，需要多點耐心和愛心來建立信任。",
  },
  {
    name: "小町",
    id: "cat-5",
    image: "images/cat/5.jpg",
    description: "小町個性膽小，適合有耐心與溫柔的飼主。"
  },
  {
    name: "奧丁",
    id: "cat-6",
    image: "images/cat/6.jpg",
    description: "奧丁是一隻非常聰明的寵物，能聽懂許多話。"
  },
  {
    name: "奇蹟",
    id: "cat-7",
    image: "images/cat/7.jpg",
    description: "奇蹟善於表達，喜歡和人說話以及玩遊戲。"
  },
  {
    name: "圓仔",
    id: "cat-8",
    image: "images/cat/8.jpg",
    description: "圓仔性格沉穩，喜歡慵懶地躺著享受生活。"
  },
  {
    name: "小諾",
    id: "cat-9",
    image: "images/cat/9.jpg",
    description: "小諾親人愛玩，喜歡追著雷射筆跑來跑去。"
  },
  {
    name: "貝果",
    id: "cat-10",
    image: "images/cat/10.jpg",
    description: "貝果個性活潑，總是能為家中帶來歡聲笑語。"
  },
  {
    name: "栗子",
    id: "cat-11",
    image: "images/cat/11.jpg",
    description: "栗子溫馴乖巧，最愛依偎在主人身邊撒嬌。"
  },
  {
    name: "冬瓜",
    id: "cat-12",
    image: "images/cat/12.jpg",
    description: "冬瓜腿短短卻身手矯健，總能帶給人驚喜。"
  },
]
 //  選取要放置卡片的容器
  const catListContainer = document.getElementById("cat-list");

  // 確保容器存在
  if (catListContainer) {
    let catCardsHTML = ""; // 3. 用來儲存所有卡片的 HTML 字串

    // 迴圈遍歷陣列並生成 HTML
    catData.forEach((cat) => {
      // 使用模板字串 ` ` 來建立卡片結構
      catCardsHTML += `
        <div class="col-12 col-sm-6 col-md-3 mb-4">
          <div class="card">
            <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
            <div class="card-body">
              <h2 class="card-title for-title">${cat.name} (${cat.id})</h2>
              <p class="card-text for-text">${cat.description}</p>
              <a href="contact.html?pet=${encodeURIComponent(cat.name + cat.id)}" class="btn card-cat-btn">預約查看</a>
            </div>
          </div>
        </div>
      `;
    });

    //將生成的 HTML 插入到容器中
    catListContainer.innerHTML = catCardsHTML;
  }