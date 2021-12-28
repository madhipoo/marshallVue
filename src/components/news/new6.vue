<template>
  <div>
    <section id="news_content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link :to="'/homepages'">首頁</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link :to="'/knowus/allnews'">最新消息</router-link>
                </li>
                <li class="breadcrumb-item">SUMMER SALE</li>
              </ol>
            </nav>
          </div>
          <div class="col-md-12">
            <div class="news_block_inner">
              <img
                class="news_img_inner img-fluid"
                src="~@/assets/knowus/5a6aa0b1-830b-4b49-b055-8a682c42b2c2-summer sale_website news 1920x1080.jpg"
              >
              <h5 class="news_title_inner">SUMMER SALE</h5>
              <span class="date">2020-07-15</span>

              <div class="news_content_inner">
                <p style="text-align: center;"><strong>即日起 - 8/31，以下指定款經典耳機限時優惠。</strong></p>
                <p style="text-align: center;"><strong>Mode EQ 入耳式耳機 $3,000 (原$3,190)</strong></p>
                <p style="text-align: center;"><span style="background-color: #333333; color: #ffffff;"><a
                      style="background-color: #333333; color: #ffffff;text-decoration: none;"
                      href="https://shopee.tw/Marshall%E9%A6%96%E6%AC%BE%E5%85%A5%E8%80%B3%E5%BC%8F%E8%80%B3%E6%A9%9F-MODE-EQ%EF%BC%88%E5%8F%B0%E7%81%A3%E5%85%AC%E5%8F%B8%E8%B2%A8%EF%BC%89-i.163609469.2465081020"
                      target="_blank"
                      rel="noopener"
                    >前往選購</a></span></p>
                <p style="text-align: center;"><img
                    src="~@/assets/knowus/6cb6b25b-0220-4b07-a494-a2e65998ac33-Mode EQ_1080x1080.jpg"
                  ></p>
                <p style="text-align: center;"><strong>Major III 耳罩式耳機 $3,000 (原$3,290)</strong></p>
                <p style="text-align: center;"><span style="background-color: #333333; color: #ffffff;"><a
                      style="background-color: #333333; color: #ffffff;text-decoration: none;"
                      href="https://shopee.tw/Marshall-Major-III-%E8%80%B3%E7%BD%A9%E5%BC%8F%E8%80%B3%E6%A9%9F-%E7%B6%93%E5%85%B8%E9%BB%91%EF%BC%88%E5%8F%B0%E7%81%A3%E5%85%AC%E5%8F%B8%E8%B2%A8%EF%BC%89-i.163609469.2471125636"
                      target="_blank"
                      rel="noopener"
                    >前往選購</a></span></p>
                <p style="text-align: center;"><strong><img
                      src="~@/assets/knowus/cec65849-cf90-46a7-b44e-4bf1d8f941b4-Major III_1080x1080.jpg"
                    ></strong></p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row"
          id="threebtn"
          style="justify-content: center;"
        >
          <router-link
            :to="'/knowus/new5'"
            class="newsbtn"
          >上一則</router-link>
          <router-link
            :to="'/knowus/allnews'"
            class="newsbtn"
          >最新消息</router-link>
          <router-link
            :to="'/knowus/new7'"
            class="newsbtn"
          >下一則</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "New6",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/helpers/_newcontent";
</style>