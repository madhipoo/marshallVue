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
                <li class="breadcrumb-item">Marshall 進駐 #VOGUE風格野餐日</li>
              </ol>
            </nav>
          </div>
          <div class="col-md-12">
            <div class="news_block_inner">
              <img
                class="news_img_inner"
                src="~@/assets/knowus/9468bd83-b26a-40c3-93b4-78ae4c87cb59-Emberton_NEWS_VOGUE_1920x1080.jpg"
              >
              <h5 class="news_title_inner">Marshall 進駐 #VOGUE風格野餐日</h5>
              <span class="date">2020-07-08</span>

              <div class="news_content_inner">
                <p style="text-align: center;"><span class="JsGRdQ">#來野餐吧</span></p>
                <p style="text-align: center;"><span class="JsGRdQ">現場除了新品搶先體驗，更提供限額免費租借，並加碼獨家優惠。</span></p>
                <p style="text-align: center;"><span class="JsGRdQ">攤位也準備了小遊戲，成功挑戰者就有機會贏得最大獎全新藍牙喇叭，快到 Marshall 攤位與我們共享一個美好的午後野餐時光。</span></p>
                <hr>
                <p style="text-align: center;"><strong><span class="JsGRdQ">@VOGUE 風格野餐日</span></strong></p>
                <p
                  class="_04xlpA direction-ltr align-center para-style-body"
                  style="text-align: center;"
                ><strong><span class="JsGRdQ">時間：7.11(六)｜14:00 - 20:00</span></strong></p>
                <p
                  class="_04xlpA direction-ltr align-center para-style-body"
                  style="text-align: center;"
                ><strong><span class="JsGRdQ">地點：大直美堤河濱公園(入口處為基十六號水門)｜台北市</span></strong></p>
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
            :to="'/knowus/new6'"
            class="newsbtn"
          >上一則</router-link>
          <router-link
            :to="'/knowus/allnews'"
            class="newsbtn"
          >最新消息</router-link>
          <router-link
            :to="'/knowus/new8'"
            class="newsbtn"
          >下一則</router-link>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
export default {
  name: "New7",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/helpers/_newcontent";
</style>