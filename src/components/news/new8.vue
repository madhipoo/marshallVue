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
                <li class="breadcrumb-item">Marshall 官方授權聲明</li>
              </ol>
            </nav>
          </div>
          <div class="col-md-12">
            <div class="news_block_inner">
              <img
                class="news_img_inner img-fluid"
                src="~@/assets/knowus/40892d66-09d5-4356-9b60-9ae5f1240413-官方聲明_1920x1080.png"
              >
              <h5 class="news_title_inner">Marshall 官方授權聲明</h5>
              <span class="date">2020-03-24</span>

              <div class="news_content_inner">
                <p style="text-align: center;">由於近日有消費者持續反應水貨/偽造品資訊，為確保消費者使用安全與完整保固服務權益，Marshall 再次聲明：</p>
                <p style="text-align: center;">百滋國際股份有限公司(以下稱本公司)為 Marshall 原廠授權台灣地區家用音響、攜帶式音響及耳機系列產品之官方代理商，本公司代理進口之產品皆通過國家安全檢驗與認證(NCC、BSMI)，以維護消費者使用安全；水貨/偽造品均未經正式檢驗與認證，且在貨源不透明的情況下，本公司無法保證其安全性。</p>
                <p style="text-align: center;">百滋國際官方授權經銷貨請認明三大標籤：</p>
                <p style="text-align: center;">(一)「百滋代理產品保證書」</p>
                <p style="text-align: center;"><img
                    src="~@/assets/knowus/37832280-2376-4ae9-b704-6c73a7e39070-正貨標籤_3.png"
                  ></p>
                <p style="text-align: center;">(二)「電子產品標籤」</p>
                <p style="text-align: center;"><img
                    src="~@/assets/knowus/7d50cd14-db73-4f2b-af40-c02600bf677b-正貨標籤_2.png"
                  ></p>
                <p style="text-align: center;">(三)「原廠產品序號」</p>
                <p style="text-align: center;"><img
                    src="~@/assets/knowus/a02b7aef-f049-4d23-8728-0f1ad88f0191-正貨標籤_1.png"
                  >&nbsp;</p>
                <p>提醒：1.百滋國際擁有任何載於官方網站的圖片、報導及文字訊息的版權，任何媒體、網站、公司或個人在未經授權的情況下使用、轉載、連結、下載或以其他方式使用 Marshall 官方網站內容均為侵權行為，本公司接獲通報，一但查證屬實，將保留其法律追訴權，以維護 Marshall 官方認證商品品質。2.購買時請認明原廠授權代理商所銷售之正貨，以維護自身權益；若因使用未經認證之水貨產品造成之一切人身、財物之損害，本公司一概不負責。</p>
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
            :to="'/knowus/new7'"
            class="newsbtn"
          >上一則</router-link>
          <router-link
            :to="'/knowus/allnews'"
            class="newsbtn"
          >最新消息</router-link>
          <router-link
            :to="'/knowus/new9'"
            class="newsbtn"
          >下一則</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "New8",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/helpers/_newcontent";
</style>