<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>TUFTON</p><br>
                <p>KING OF THE ROAD. 喇叭界的猛獸，為戶外野遊探險而生</p>
              </h1>
            </div>
            <p class="button">
              NTD $18,900<a
                href="https://www.urbanunits.com.tw/SalePage/Index/5689139?cid=185512"
                class="buynow"
              >馬上選購</a>
            </p>
          </div>
        </div>

      </div>
    </div>

    <section class="productlist">
      <div class="product_menu">
        <div class="container">
          <div class="product_title">
            <h5>TUFTON</h5>
            <h5>NTD $18,900</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2">
              <!-- .column1, .column2, .column3, .column4 為細節數量，定義底下.des_block的margin-top，總數最多為8，左右可分開設定。-->
              <div class="des_block">

              </div>
            </div>
            <div class="col-md-4 order-md-1">
              <img
                class="product_main "
                src="~@/assets/Speakers/TUFTON/64990405-6827-4c1b-baab-5b25c867ebf9-marshall_tufton_1.png"
                alt=""
              >
              <div class="color_change">
                <span
                  class="color-dot-wrapper active-color"
                  data-item="1"
                  data-src="~@/assets/Speakers/TUFTON/64990405-6827-4c1b-baab-5b25c867ebf9-marshall_tufton_1.png"
                >
                  <span
                    class="color-dot"
                    style="background-color: #000000"
                  ></span>
                </span>

                <a
                  href="#"
                  class="moreimg"
                  @click.prevent="$_openModal()"
                >更多圖片</a>
              </div>
              <div class="des_block">
                <p>TUFTON 為 MARSHALL 攜帶式系列喇叭中最大身型，讓你把演唱會現場帶著上路，提供超過20小時播放續航力，再遙遠的路程都不成問題，搭載藍牙5.0支援多數藍牙裝置，最遠連接距離達近10公尺，TUFTON 正面三音路設計，重低音、全域與高音單體各司其職，確保各頻率都能有乾淨且清晰的表現，背面額外增設的全域單體，創造立體感十足的360°聆聽體驗。<br>承襲傳奇 ROCK‘N’ROLL 精神，TUFTON 金屬編織網罩向舞台上的麥克風致敬，便於攜帶的提帶靈感則取自吉他，具備IPX2防水等級與埋入式金屬角帽，打造其堅固耐用特性，TUFTON
                  可以說是喇叭界的猛獸，為戶外野遊探險而生。
                </p>
              </div>
            </div>

            <div class="col-md-4 order-md-3 column2">
              <div class="des_block">

              </div>
            </div>
            <div
              id="myModal"
              class="modal"
              :class="{active:this.open}"
            >
              <span
                class="close"
                @click.prevent="$_openModal()"
              >&times;</span>
              <div class="modal-content">

                <div
                  class="mySlides"
                  v-for="(item,index) in slides"
                  :key="index"
                  :class="{showslide:counter===index}"
                >
                  <img :src="require(`@/assets/${item.imgurl}`)">
                </div>
                <a
                  class="prev"
                  @click.prevent="$_plusSlides(-1)"
                >&#10094;</a>
                <a
                  class="next"
                  @click.prevent="$_plusSlides(1)"
                >&#10095;</a>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="product_detail2">
        <div class="container py-5">

          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/TUFTON/6624442e-89b4-4641-af01-06d3548de135-marshall_tufton_0918_transparent_lowres.png`)"
                  alt=""
                ></p>
              <h2>超過20小時攜帶式體驗</h2>
              <p>TUFTON 單次充電提供超過20小時聆聽體驗，以吉他為設計靈感的提帶便於攜帶上路。</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/TUFTON/2543d838-fe92-40cc-a356-1f585e86609a-Tufton_內容2.png`)"
                  alt=""
                ></p>
              <h2>全向性音效</h2>
              <p>TUFTON 三音路設計與背面額外增設的全域單體，確保各頻率都能有乾淨且清晰的表現，不管在室內或戶外環境都能享受被音樂包圍的立體音效。</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/TUFTON/4bb80c9e-92dd-45eb-8589-df171f537151-Tufton_內容3.png`)"
                  alt=""
                ></p>
              <h2>藍牙5.0</h2>
              <p>TUFTON 搭載藍牙5.0，透過任何藍牙裝置播放音樂，最遠連接距離達近10公尺。</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p><img
                  :src="require(`@/assets/Speakers/TUFTON/a8b2c9b9-853a-4e38-b1b1-7914c8fab129-Tufton_內容4.jpg`)"
                  alt=""
                ></p>
              <h2>戶外使用特性</h2>
              <p>TUFTON 具備IPX2防水等級，以及側邊埋入式金屬角帽設計，打造其堅固耐用特性，可以說是喇叭界的猛獸，為戶外野遊探險而生。</p>
            </div>
            <div class="col-sm-4">
              <p><img
                  :src="require(`@/assets/Speakers/TUFTON/b24bf83e-b1a7-4d56-bc5d-b67a75e0db5c-Tufton_內容5.jpg`)"
                  alt=""
                ></p>
              <h2>IPX2 防水等級</h2>
              <p>路程總是充滿驚喜，這也是 TUFTON 防水設計的存在必要性(IPX2 意指可抵檔微量雨滴)。</p>
            </div>
            <div class="col-sm-4">
              <p><img
                  :src="require(`@/assets/Speakers/TUFTON/34c55d2a-a3bc-4736-b384-1b3346d7bea0-Tufton_內容6.jpg`)"
                  alt=""
                ></p>
              <h2>連接多個藍牙裝置</h2>
              <p>TUFTON 可同時連接兩個藍牙裝置，現在你可以跟朋友輪流分享喜愛的播放清單。</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p><img
                  :src="require(`@/assets/Speakers/TUFTON/5ddde4c9-2d3f-4e95-b609-649031e35a13-marshall_tufton_4.png`)"
                  alt=""
                ></p>
              <h2>客製化音效</h2>
              <p>透過 TUFTON 面板上旋轉鈕輕鬆調整低音、高音與音量，讓音樂以你喜愛的方式呈現。</p>
            </div>

          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 ">
              <p><img
                  :src="require(`@/assets/Speakers/TUFTON/52c6b521-1dae-4aa0-9d7a-2c73c3e064de-marshall_tufton_2.png`)"
                  alt=""
                ></p>
              <h2>快充功能</h2>
              <p>具備快充功能，讓臨時起意的旅程再也不是問題，充電20分鐘即可提供4小時播放續航力，單次充飽電也只要2.5小時。</p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section id="tech_detail">
      <div class="container ">
        <div class="row">
          <div class="col-md-6">
            <div class="tech_block">
              <p class="tech_title">產品規格</p>
              <table>
                <tbody>
                  <tr>
                    <th>顏色</th>
                    <td>經典黑</td>
                  </tr>
                  <tr>
                    <th>低音單體</th>
                    <td>40瓦 D類擴大器X1</td>
                  </tr>
                  <tr>
                    <th>全域單體</th>
                    <td>15瓦 D類擴大器X2</td>
                  </tr>
                  <tr>
                    <th>高音單體</th>
                    <td>10瓦 D類擴大器X1</td>
                  </tr>
                  <tr>
                    <th>響應頻率</th>
                    <td>40-20k Hz</td>
                  </tr>
                  <tr>
                    <th>最大聲壓級</th>
                    <td>102dB SPL @ 1 m</td>
                  </tr>
                  <tr>
                    <th>續航力</th>
                    <td>20+小時</td>
                  </tr>
                  <tr>
                    <th>充電時間</th>
                    <td>充電20分鐘，提供4小時(快充)/充電2.5小時，提供20+小時(單次充飽)</td>
                  </tr>
                  <tr>
                    <th>防水等級</th>
                    <td>IPX2</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>4.9 公斤</td>
                  </tr>
                  <tr>
                    <th>尺寸</th>
                    <td>229 x 163 x 350 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tech_block">
              <p class="tech_title">操控與連接</p>
              <table>
                <tbody>
                  <tr>
                    <th>連接方式</th>
                    <td>5.0 atpX®無線藍牙傳輸、3.5mm 音源線</td>
                  </tr>
                  <tr>
                    <th>控制面板</th>
                    <td>是</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
          <div class="col-md-6">
            <div class="tech_block">
              <p class="tech_title">包裝內容物</p>
              <table>
                <tbody>
                  <tr>
                    <th>TUFTON 攜帶式藍牙喇叭</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>原廠充電線</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>使用說明書與安全手冊</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
        <div
          class="row "
          id="twobtn"
        >
          <a
            class="gonow"
            href="https://www.urbanunits.com.tw/SalePage/Index/5689139?cid=185512"
          >馬上選購</a>
          <router-link
            :to="'/speaker'"
            class="gonow"
          >回產品列表</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Tufton",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Speakers/TUFTON/64990405-6827-4c1b-baab-5b25c867ebf9-marshall_tufton_1.png",
        },
        {
          imgurl:
            "Speakers/TUFTON/52c6b521-1dae-4aa0-9d7a-2c73c3e064de-marshall_tufton_2.png",
        },
        {
          imgurl:
            "Speakers/TUFTON/94667899-c4dc-47e7-8f42-9d1abac3565b-marshall_tufton_3.png",
        },
        {
          imgurl:
            "Speakers/TUFTON/5ddde4c9-2d3f-4e95-b609-649031e35a13-marshall_tufton_4.png",
        },
        {
          imgurl:
            "Speakers/TUFTON/2a1afa69-10c4-4b86-b304-6fbcd42a1156-marshall_tufton_5.png",
        },
      ],
    };
  },
  created() {
    this.$_slidefun(this.counter);
    // this.$_windowcheck();
  },
  methods: {
    $_openModal: function () {
      this.open = !this.open;
      this.counter = 0;
    },
    $_slidefun: function (n) {
      if (n >= this.slides.length) {
        this.counter = 0;
      }
      if (n < 0) {
        this.counter = this.slides.length-1;
      }
    },
    $_plusSlides: function (n) {
      this.counter += n;

      this.$_slidefun(this.counter);
    },
    // $_windowcheck: function () {
    //   if ($(window).width() < 768) {
    //     $(".product_detail .des_block").click(function () {
    //       $(".product_detail .des_content").css("display", "none");
    //       $(this).children(".des_content").css("display", "block");
    //       $(".product_detail .des_block")
    //         .find(".fa-minus")
    //         .removeClass("fa-minus")
    //         .addClass("fa-plus");
    //       $(this).find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    //     });
    //   }
    //   $(".color-dot-wrapper").click(function () {
    //     $(".color-dot-wrapper").removeClass("active-color");
    //     $(this).addClass("active-color");
    //     var active_item = $(this).data("item");
    //     $(".product_main").attr("src", $(this).data("src"));
    //   });
    // },
  },
};


</script>


<style lang="scss" scoped>
@import "~@/assets/helpers/_productinfo";
.scrollanchor {
  background-image: url("~@/assets/Speakers/TUFTON/maxresdefault.jpg");
}
.active,
.modal .modal-content .showslide {
  display: block;
}
</style>