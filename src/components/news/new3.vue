<template>
  <div>
    <section id="news_content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link :to="'/homepages'">首頁</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link :to="'/knowus/allnews'">最新消息</router-link>
                </li>
                <li class="breadcrumb-item">Tufton 全新限定色</li>
              </ol>
            </nav>
          </div>
          <div class="col-md-12">
            <div class="news_block_inner">
              <img
                class="news_img_inner img-fluid"
                src="~@/assets/knowus/f62fafee-ef84-4545-aa7a-4c3cb9add130-TuftonBrass _website news.jpg"
              >
              <h5 class="news_title_inner">Tufton 全新限定色</h5>
              <span class="date">2021-05-07</span>

              <div class="news_content_inner">
                <p><strong>Marshall 古銅黑系列迎來新成員，Tufton 古銅黑。</strong></p>
                <p><strong>Tufton 為&nbsp;Marshall 攜帶式藍牙喇叭系列中最大身型，讓你把演唱會現場帶著上路。<br>提供超過20小時播放續航力，再遙遠的路程都不成問題，搭載藍牙5.0支援多數藍牙裝置，最遠連接距離達近10公尺，TUFTON 正面三音路設計，重低音、全域與高音單體各司其職，確保各頻率都能有乾淨且清晰的表現，背面額外增設的全域單體，創造立體感十足的360°聆聽體驗。<br></strong></p>
                <p><img src="~@/assets/knowus/9f1c4ba8-7705-4ad7-b4e6-2851c22991df-TuftonBrass _website news 1.jpg"></p>
                <p><img src="~@/assets/knowus/98a78d38-e8d8-4c86-85e3-c02bb8257e8f-TuftonBrass _website news 2.jpg"></p>
                <p><strong>｜購買資訊｜</strong><br><strong>- 發售時間：5/20 (四)</strong><br><strong>- 發售通路：</strong></p>
                <p><strong>▸ MySound 信義店</strong><br><strong>▸ 三井3C：板橋店、桃園經國家樂福店、中壢NOVA店、台中NOVA店、台中東海店</strong></p>
                <p><span style="color: #800000;"><strong>※ 提醒：各門市數量有限，建議前往門市前先致電與門市人員確認現貨狀況，謝謝。</strong></span></p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row py-4 "
          id="threebtn"
          style="justify-content: center;"
        >
          <router-link
            :to="'/knowus/new2'"
            class="newsbtn"
          >上一則</router-link>
          <router-link
            :to="'/knowus/allnews'"
            class="newsbtn"
          >最新消息</router-link>
          <router-link
            :to="'/knowus/new4'"
            class="newsbtn"
          >下一則</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "New3",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/helpers/_newcontent";
</style>