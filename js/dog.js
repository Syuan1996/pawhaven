const dogData = [
  {
    name: "旺仔",
    id: "dog-1",
    image: "images/dog/1.jpg",
    description: "旺仔很活潑可愛，精力旺盛，喜歡玩球，一起來玩吧。"
  },
  {
    name: "虎斑",
    id: "dog-2",
    image: "images/dog/2.jpg",
    description: "虎斑，非常聰明，聽得懂基本用詞，是個很好的陪伴者。"
  },
  {
    name: "布朗",
    id: "dog-3",
    image: "images/dog/3.jpg",
    description: "布朗，個性溫和友善，不會亂叫，適合有小孩的家庭。"
  },
  {
    name: "阿福",
    id: "dog-4",
    image: "images/dog/4.jpg",
    description: "阿福，個性活潑好動，也很乖，喜歡和主人玩耍。"
  },
  {
    name: "小町",
    id: "dog-5",
    image: "images/dog/5.jpg",
    description: "小町，獨立有個性，對信任的人非常忠誠。"
  },
  {
    name: "巴弟",
    id: "dog-6",
    image: "images/dog/6.jpg",
    description: "巴弟，性格活潑，是個忠實的好夥伴。"
  },
  {
    name: "吉利",
    id: "dog-7",
    image: "images/dog/7.jpg",
    description: "吉利，喜歡接觸人，不怕生，適合所有環境。"
  },
  {
    name: "胖胖",
    id: "dog-8",
    image: "images/dog/8.jpg",
    description: "胖胖，個性溫順，相當忠心，喜歡運動散步。"
  },
  {
    name: "小寶",
    id: "dog-9",
    image: "images/dog/9.jpg",
    description: "小寶，脾氣好，會靜靜貼人說話，是個好陪伴者。"
  },
  {
    name: "波波",
    id: "dog-10",
    image: "images/dog/10.jpg",
    description: "波波，聰明又勇敢，會守護朋友，是隻可靠的守衛犬。"
  },
  {
    name: "小雪",
    id: "dog-11",
    image: "images/dog/11.jpg",
    description: "小雪，喜歡安靜地待一旁，溫馴乖巧，不會亂叫。"
  },
  {
    name: "小呆",
    id: "dog-12",
    image: "images/dog/12.jpg",
    description: "小呆，個性有點傻氣，能為生活帶來許多歡樂。"
  },
];
  // 選取要放置卡片的容器
  const dogListContainer = document.getElementById("dog-list");

  // 確保容器存在
  if (dogListContainer) {
    let dogCardsHTML = ""; // 用來儲存所有卡片的 HTML 字串

    // 迴圈遍歷陣列並生成 HTML
    dogData.forEach((dog) => {
      // 使用模板字串 ` ` 來建立卡片結構
      dogCardsHTML += `
        <div class="col-12 col-sm-6 col-md-3 mb-4">
          <div class="card">
            <img src="${dog.image}" class="card-img-top" alt="${dog.name}">
            <div class="card-body">
              <h5 class="card-title for-title">${dog.name} (${dog.id})</h5>
              <p class="card-text for-text">${dog.description}</p>
              <a href="contact.html?pet=${encodeURIComponent(dog.name + dog.id)}" class="btn card-dog-btn">預約查看</a>
            </div>
          </div>
        </div>
      `;
    });

    // 將生成的 HTML 插入到容器中
    dogListContainer.innerHTML = dogCardsHTML;
  }
