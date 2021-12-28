<template>
  <div>
    <section id="news">
      <div class="container py-5">
        <div class="row" >
          <div class="col-md-4" v-for="(item, index) in newContext" :key="index">
            <div class="news_block">
              <router-link :to="item.gotoweb">
                <div>
                  <img
                    class="news_img img-fluid d-block mx-auto"
                    :src="require(`@/assets/knowus/${item.imgUrl}`)"
                  />
                </div>
                <span class="date">{{ item.date }}</span>
                <h5 class="news_title">{{ item.title }}</h5>
                <p class="news_content">
                  {{ item.content }}
                </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Allnews",
  data() {
    return {
      newContext: [
        {
          gotoweb: "/knowus/new1",
          imgUrl:
            "d0bffaa7-a631-431c-b4ed-6ad064c5eec5-Mode-II_homepage_bn.jpg",
          date: "2021-06-25",
          title: "首款真無線藍牙耳機，重磅登場。",
          content: "MODE II 強勢登場，7/1 起限定通路開放預購。",
        },
        {
          gotoweb: "/knowus/new2",
          imgUrl:
            "cb81b8d5-8767-496a-ac48-22bdf3a412a5-K II BB_website1920x1080_v1.jpg",
          date: "2021-06-06",
          title: "Kilburn II 古銅黑，全新限定色",
          content: "沉穩奢華配色，獨家通路限量發售。",
        },
        {
          gotoweb: "/knowus/new3",
          imgUrl:
            "f62fafee-ef84-4545-aa7a-4c3cb9add130-TuftonBrass _website news.jpg",
          date: "2021-05-07",
          title: "Tufton 全新限定色",
          content: "MODE II 強勢登場，7/1 起限定通路開放預購。",
        },
        {
          gotoweb: "/knowus/new4",
          imgUrl:
            "4e0db8f3-761c-46f1-8a72-66765644e1c1-Emberton_family_1920x1080.jpg",
          date: "2021-04-09",
          title: "Emberton 2021 全新限定色",
          content: "Marshall 再度帶來 Emberton 全新限定色，數量有限，不容錯過。",
        },
        {
          gotoweb: "/knowus/new5",
          imgUrl:
            "ba80f56c-071d-4f78-ac28-41ba4b87aa8a-MS假貨聲明.jpg",
          date: "2021-03-24",
          title: "Emberton 正仿品比對，請認明 Marshall 台灣官方授權通路",
          content: "仿冒品的來源可能不只一種，無法保證所有不肖業者都是相同手法，還請大家認明台灣官方授權通路，以免權益受損。",
        },
        {
          gotoweb: "/knowus/new6",
          imgUrl:
            "5a6aa0b1-830b-4b49-b055-8a682c42b2c2-summer sale_website news 1920x1080.jpg",
          date: "2020-07-15",
          title: "SUMMER SALE",
          content: "Rock you summer，指定款耳機限時優惠。",
        },
        {
          gotoweb: "/knowus/new7",
          imgUrl:
            "9468bd83-b26a-40c3-93b4-78ae4c87cb59-Emberton_NEWS_VOGUE_1920x1080.jpg",
          date: "2020-07-08",
          title: "Marshall 進駐 #VOGUE風格野餐日",
          content: "現場除了新品搶先體驗，更提供獨家優惠。吃吃喝喝聽音樂，讓我們共享一個美好的午後時光。",
        },
        {
          gotoweb: "/knowus/new8",
          imgUrl:
            "40892d66-09d5-4356-9b60-9ae5f1240413-官方聲明_1920x1080.png",
          date: "2020-03-24",
          title: "Marshall 官方授權聲明",
          content: "",
        },
        {
          gotoweb: "/knowus/new9",
          imgUrl:
            "583a370c-8be2-4141-8dcd-a7676b4f0484-暖身 橫.jpg",
          date: "2019-07-24",
          title: "【GUIDED BY MUSIC】Marshall X 巷弄音樂酒吧",
          content: "這次，Marshall 要帶大家一窺台灣酒吧現場，發掘隱藏在巷弄中的音樂酒吧。",
        },
        {
          gotoweb: "/knowus/new9",
          imgUrl:
            "17d4f876-e0fe-4eaa-a883-762f39dcc37f-0226bn.jpg",
          date: "2018-02-26",
          title: "抵制仿冒品，請支持MARSHALL台灣公司貨",
          content: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
/*news-start*/

#news .container {
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
  padding: 48px 0;
  .row {
    display: flex;
    flex-wrap: wrap;
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
      padding: 0 15px;
      box-sizing: border-box;
      position: relative;
      .news_block {
        border: 1px solid #979797;
        padding: 15px;
        margin-bottom: 30px;
        a {
          text-decoration: none;
          .news_img {
            max-height: 250px;
            max-width: 100%;
            margin: 0 auto;
            height: auto;
            vertical-align: middle;
          }
          .date {
            margin: 8px 0;
            display: block;
            color: #999;
          }
          .news_title {
            overflow: hidden;
            color: #000;
            font-size: 20px;
            font-weight: 500;
            line-height: 2rem;
            height: 4rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .news_content {
            overflow: hidden;
            color: #999;
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5rem;
            height: 4.5rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
        }
      }
    }
  }
}

/*news-end*/
@media screen and (max-width: 1199px) {
  #news .container {
    max-width: 960px;
  }
}

@media screen and (max-width: 991px) {
  #news .container {
    max-width: 720px;
  }
}

@media screen and (max-width: 767px) {
  #news .container {
    max-width: 540px;
  }

  #news .container .row .col-md-4 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
    margin: 0 auto;
  }
}
</style>
