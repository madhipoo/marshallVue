<template>
  <div>
    <section id="news_content">
      <div class="container py-5">
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
                <li class="breadcrumb-item">Emberton 正仿品比對，請認明 Marshall 台灣官方授權通路</li>
              </ol>
            </nav>
          </div>
          <div class="col-md-12">
            <div class="news_block_inner">
              <img
                class="news_img_inner img-fluid"
                src="~@/assets/knowus/ba80f56c-071d-4f78-ac28-41ba4b87aa8a-MS假貨聲明.jpg"
              >
              <h5 class="news_title_inner">Emberton 正仿品比對，請認明 Marshall 台灣官方授權通路</h5>
              <span class="date">2021-03-24</span>

              <div class="news_content_inner">
                <p><strong>抵制仿冒品三大原則</strong></p>
                <p>❶ <strong>低價陷阱，與台灣定價差太多，切勿偏信</strong></p>
                <p>❷ <strong>台灣官方代理貨源皆經過 NCC 認證，認明喇叭本體認證貼紙</strong></p>
                <p>❸ <strong>認明台灣官方授權通路、台灣代理商保固書、繁體中文產品標籤</strong></p>
                <p>&nbsp;</p>
                <p><strong>特別提醒，此內文僅供外觀比對，可幫助初步判斷是否為仿冒品，然而仿冒品來源可能不只一種，無法保證所有不肖商家都是相同手法，建議您至 Marshall 台灣代理商官方授權通路選購，抵制低價且貨源不明之仿冒商家，以維護自身權益。</strong></p>
                <p><strong>再次聲明：近期許多不肖業者假藉 Marshall 公司貨之名義販售仿冒品以獲取不當利益。本公司接獲通報，一旦查證屬實，將保留其法律追訴權，以維護 Marshall 商品品質與服務。</strong></p>
                <hr>
                <h4><strong>【商品外盒包裝】</strong></h4>
                <p><strong>Emberton 正品外盒包裝封口處有防偽貼紙；仿冒品無。</strong></p>
                <p><strong><img
                      src="~@/assets/knowus/819a91e7-c62a-43ed-9c48-469a54386bc2-包裝防偽貼紙.jpg"
                      alt=""
                      width=""
                      height=""
                    ></strong></p>
                <p>&nbsp;</p>
                <h4><strong>【Emberton本體 – 多向性控制鈕】</strong></h4>
                <p><strong>正品切面平整；仿冒品控制鈕則明顯突出表面，影響整體使用。</strong></p>
                <p><strong><img
                      src="~@/assets/knowus/d2b4359f-2234-45a5-b8dc-d04cd247a79a-多向控制鈕.jpg"
                      alt=""
                      width=""
                      height=""
                    ></strong></p>
                <p>&nbsp;</p>
                <h4><strong>【Emberton本體 – LOGO 底部切工】</strong></h4>
                <p><strong>正品Logo底部切面平整；仿冒品切工粗糙，裁切不完整。</strong></p>
                <p><strong><img
                      src="~@/assets/knowus/a7f4f0e8-a959-4323-baaf-06969968a6f7-Logo 切面.jpg"
                      alt=""
                      width=""
                      height=""
                    ></strong></p>
                <p>&nbsp;</p>
                <h4><strong>【Emberton本體 – 四角縫接處】</strong></h4>
                <p><strong>正品縫接俐落；仿冒品四角明顯縫接不完整，且多有缺角。</strong></p>
                <p><strong><img
                      src="~@/assets/knowus/1df403ab-6503-4df4-8eec-3962f2181d78-縫接處.jpg"
                      alt=""
                      width=""
                      height=""
                    ></strong></p>
                <p>&nbsp;</p>
                <h4><strong>【配件】</strong></h4>
                <p><strong>正品電源線刻有Marshall字樣；仿冒品無。</strong></p>
                <p><strong><img
                      src="~@/assets/knowus/99d8c7b6-596e-472a-9896-b665d0d82f62-電源線.jpg"
                      alt=""
                      width=""
                      height=""
                    ></strong></p>
                <p>&nbsp;</p>
                <p><strong>※授權標章暨圖文資料、商標、文字等智慧財產權等一切相關權利歸屬於百滋國際股份有限公司所有，且為本公司正式授權之用。非經本公司授權許可之販售業者，請勿使用本公司之任何商品資訊(包括但不限於商品規格描述、產品廣告文宣、商品影音圖檔等)，如有任何仿冒、重製、盜用、改作及未經授權使用本授權標章暨圖檔等侵害本公司權益之行為，一經查獲將依法究辦。</strong></p>
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
            :to="'/knowus/new4'"
            class="newsbtn"
          >上一則</router-link>
          <router-link
            :to="'/knowus/allnews'"
            class="newsbtn"
          >最新消息</router-link>
          <router-link
            :to="'/knowus/new6'"
            class="newsbtn"
          >下一則</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "New5",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/helpers/_newcontent";
</style>