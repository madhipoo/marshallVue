<template>
  <div>
    <section id="news_content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link :to="'/homepages'">首頁</router-link></li>
                <li class="breadcrumb-item"><router-link :to="'/knowus/allnews'">最新消息</router-link></li>
                <li class="breadcrumb-item">Kilburn II 古銅黑，全新限定色</li>
              </ol>
            </nav>
          </div>
          <div class="col-md-12">
            <div class="news_block_inner">
              <img
                class="news_img_inner"
                src="~@/assets/knowus/cb81b8d5-8767-496a-ac48-22bdf3a412a5-K II BB_website1920x1080_v1.jpg"
              >
              <h5 class="news_title_inner">Kilburn II 古銅黑，全新限定色</h5>
              <span class="date">2021-06-03</span>

              <div class="news_content_inner">
                <p><strong>古銅黑系列再度迎來新成員。</strong></p>
                <p><strong>Kilburn II 為攜帶式系列熱銷款式，擺脫電源線，享受超過20小時的無線搖滾體驗，各個空間都恣意移動；身型輕巧卻能從同等級喇叭脫穎而出，擁有清澈的中音段、沉穩低音和延展的高音，多向性音效讓你不管在室內或室外都能沉浸在音樂裡。</strong></p>
                <p><img
                    src="~@/assets/knowus/7734850b-891b-4439-88f6-a93fd7675327-1200x800.jpg"
                    alt=""
                    width=""
                    height=""
                  ></p>
                <p>&nbsp;</p>
                <p><strong>｜限定通路販售資訊｜</strong><br><strong>- 發售時間：即日起開放預購</strong><br><strong>- 發售通路：</strong></p>
                <p><strong>▸ friDay購物：<span style="color: #0000ff;"><a
                        style="color: #0000ff;text-decoration: none;"
                        href="https://pse.is/Kilburn2BB"
                        target="_blank"
                        rel="noopener"
                      >搶先預購</a></span></strong><br><strong>▸ 德誼數位：SOGO台北忠孝門市、SOGO台北復興門市、環球新北中和門市、板橋大遠百門市、台北新光華門市、新竹巨城門市、台中綠園道門市、台中大遠百門市、台南南紡門市、漢神巨蛋門市</strong></p>
                <p><strong>※ 提醒：防疫期間，敬請多加利用網路平台；各通路數量有限，建議先致電與門市人員確認庫存狀況，再依疫情狀況評估前往，謝謝。</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row"
          id="threebtn"
          style="justify-content: center;"
        >
        <router-link :to="'/knowus/new1'" class="newsbtn">上一則</router-link>
        <router-link :to="'/knowus/allnews'" class="newsbtn">最新消息</router-link>
        <router-link :to="'/knowus/new3'" class="newsbtn">下一則</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "New2",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/helpers/_newcontent";
</style>