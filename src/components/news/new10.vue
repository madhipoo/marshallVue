<template>
  <div>
    <section id="news_content">
      <div class="container ">
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
                <li class="breadcrumb-item">抵制仿冒品，請支持MARSHALL台灣公司貨</li>
              </ol>
            </nav>
          </div>
          <div class="col-md-12">
            <div class="news_block_inner">
              <img
                class="news_img_inner img-fluid"
                src="~@/assets/knowus/17d4f876-e0fe-4eaa-a883-762f39dcc37f-0226bn.jpg"
              >
              <h5 class="news_title_inner">抵制仿冒品，請支持MARSHALL台灣公司貨</h5>
              <span class="date">2018-02-26</span>

              <div class="news_content_inner">
                <p>近來許多不肖業者假藉Marshall公司貨之名義在市面上販售仿冒品以獲取不當利益。本公司接獲通報一但查證屬實，將保留其法律追訴權，以維護Marshall商品品質。為保障您的權益，請支持正版Marshall公司貨商品。</p>
                <p>!!特別提醒!!&nbsp;在此僅提供以真假貨外表比對，初步判斷是否為Major II Bluetooth藍牙耳罩式耳機之正品，然而假貨的來源可能不只一種，無法完全保證所有的假貨都是相同的，建議您選購Marshall台灣代理商之公司貨，抵制低價便宜且銷售來路不明產品之商家，以維護自身權益！！</p>
                <p>&nbsp;</p>
                <p><strong>【商品外盒包裝】</strong></p>
                <p>Major II Bluetooth正品外盒為厚實紙盒包裝；仿冒品印刷色調較淡、且包裝紙盒材質粗糙。</p>
                <p><img
                    src="~@/assets/knowus/9b2df8cf-2792-4ab0-95e2-2d3b1831e7fc-0226-1.jpg"
                  ></p>
                <p><strong>【商品包裝盒內部】</strong></p>
                <p>Major II Bluetooth正品包裝盒內側接合完整，仿冒品包裝盒內部則有許多殘膠。</p>
                <p><img
                    src="~@/assets/knowus/3a27ad65-7fab-48cc-8b72-3c7fd1b0cec6-0226-2.jpg"
                  ></p>
                <p><strong>【耳機本體 - 展開】</strong></p>
                <p>Major II Bluetooth頭帶是非常有彈性的，因此在耳機展開的狀態下耳罩處會是貼合的狀態；仿冒品的頭帶較鬆彈性差，耳罩處無法貼合。</p>
                <p><img
                    src="~@/assets/knowus/d0f3b6e5-774a-4a77-955e-060f0b0c338c-0226-5.jpg"
                  ></p>
                <p><strong>【耳機本體 – 收合】</strong></p>
                <p>Major II Bluetooth在摺疊收納的情況下會呈現圓形、緊密收合的狀態；仿冒品因頭帶彈性差，摺疊收納時無法完整收合。</p>
                <p><img
                    src="~@/assets/knowus/ddc47919-7e2c-4660-a4bd-8766a5899ab0-0226-6.jpg"
                  ></p>
                <p><strong>【頭帶內側金色Logo】</strong></p>
                <p>Major II Bluetooth頭帶內側金色Logo下方的EST.1962字體較粗(上圖)；仿冒品的EST.1962字體則較細長(下圖)。</p>
                <p><img
                    src="~@/assets/knowus/5b19f3f8-c3fb-40ea-a3ae-3caa7b0f7235-0226-7.jpg"
                  ></p>
                <p><img
                    src="~@/assets/knowus/7554d8fc-22db-4f0a-9d18-1915eb7e1b3a-0226-8.jpg"
                  ></p>
                <p><strong>【耳機關節點】</strong></p>
                <p>Major II Bluetooth關節點之金屬牌表面平滑、顏色為金色；仿冒品的金屬牌則有生鏽、黑色髒污紋路。</p>
                <p><img
                    src="~@/assets/knowus/5d0f46b6-f6e6-434d-8189-7da2fa869ae0-0226-9.jpg"
                  ></p>
                <p><strong>【台灣代理商公司貨之標籤識別】</strong></p>
                <p>所有Marshall耳機產品凡為台灣代理商之公司貨皆會有如下圖「台灣代理商產品保證書」、「防偽雷射標籤貼」、「中文電子產品標籤貼」，且台灣代理商之公司貨皆會提供台灣地區維修保固服務，建議購買時可向商家確認是否有此三項標籤，以保障自身權益。</p>
                <p><img
                    src="~@/assets/knowus/68bb9be5-730b-4936-9549-e117fd51d63e-0226-10.jpg"
                  ></p>
                <p>&nbsp;</p>
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
            :to="'/knowus/new9'"
            class="newsbtn"
          >上一則</router-link>
          <router-link
            :to="'/knowus/allnews'"
            class="newsbtn"
          >最新消息</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "New10",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/helpers/_newcontent";
</style>