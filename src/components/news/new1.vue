<template>
  <div>
    <section id="news_content">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-12">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link :to="'/homepages'">首頁</router-link></li>
                <li class="breadcrumb-item"><router-link :to="'/knowus/allnews'">最新消息</router-link></li>
                <li
                  class="breadcrumb-item"
                  aria-current="page"
                >首款真無線藍牙耳機，重磅登場。</li>
              </ol>
            </nav>
          </div>
          <div class="col-md-12">
            <div class="news_block_inner">
              <img
                class="news_img_inner img-fluid"
                src="~@/assets/knowus/d0bffaa7-a631-431c-b4ed-6ad064c5eec5-Mode-II_homepage_bn.jpg"
              >
              <h5 class="news_title_inner">首款真無線藍牙耳機，重磅登場。</h5>
              <span class="date">2021-06-25</span>

              <div class="news_content_inner">
                <p><strong>延續標誌聲效，細節設計完美體現搖滾精神，MODE II 搭載藍牙 5.1 與壓力感應觸控，兼具 IPX5 防潑水設計，讓你以全新的方式體驗搖滾傳奇。</strong></p>
                <p><strong><img
                      src="~@/assets/knowus/e6666e84-7ac6-4f9f-b3f0-644b33e79734-Mode-II_content_bn 1.jpg"
                      alt=""
                      width=""
                      height=""
                    ></strong></p>
                <p>&nbsp;</p>
                <p><strong>| 預購資訊 |</strong></p>
                <p><strong>即日起，法雅客與 GQ SHOP 限量預購。</strong></p>
                <ul>
                  <li><strong>法雅客指定門市：台北信義A9店、台北南西店、台北天母店、台中中港店、台南小西門店、台南西門店、高雄左營店</strong></li>
                  <li><strong>法雅客網路商城：<span style="color: #0000ff;"><a
                          style="color: #0000ff;text-decoration: none;"
                          href="https://eshop.fayaque.com.tw/shop-2/music/headp/wireless-earset/marshall-mode-ii-真無線藍牙耳機/"
                          target="_blank"
                          rel="noopener"
                        >前往預購</a></span></strong></li>
                  <li><strong>GQ SHOP：已完售</strong></li>
                </ul>
                <p>&nbsp;</p>
                <p><strong>| 試聽體驗 |</strong></p>
                <p><strong>7/20 起可於上述法雅客指定門市搶先體驗。</strong></p>
                <p>&nbsp;</p>
                <p><span style="color: #808080;"><strong>*提醒：各通路數量有限，詳細庫存狀況建議先與門市服務人員確認。</strong></span></p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row"
          id="threebtn"
          style="justify-content: center;margin-top: 2rem;"
        >
        <router-link :to="'/knowus/allnews'" class="newsbtn">回到列表</router-link>
        <router-link :to="'/knowus/new2'" class="newsbtn">下一則</router-link>
          

        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "New1",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/helpers/_newcontent";
</style>