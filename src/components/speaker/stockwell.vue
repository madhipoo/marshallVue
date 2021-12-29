<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>STOCKWELL II</p>
                <br />
                <p>Traverls Light,Sounds Heavy</p>
              </h1>
            </div>
            <p class="button">
              NTD $7,900<a
                href="https://www.urbanunits.com.tw/SalePage/Index/5314041"
                class="buynow"
                >馬上選購</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="productlist">
      <div class="product_menu">
        <div class="container">
          <div class="product_title">
            <h5>STOCKWELL II</h5>
            <h5>NTD $7,900</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2">
              <!-- .column1, .column2, .column3, .column4 為細節數量，定義底下.des_block的margin-top，總數最多為8，左右可分開設定。-->
              <div class="des_block">
                <p class="des_title">
                  快充功能
                </p>
                <p class="des_content">
                  來一趟說走就走的旅程，STOCKWELL II
                  支援快充功能，短短20分鐘能夠提供6小時播放，充飽電只要5小時
                </p>
              </div>
            </div>
            <div class="col-md-4 order-md-1">
              <img
                class="product_main img-fluid"
                :src="
                  require(`@/assets/Speakers/STOCKWELL II/120c2222-8490-4f37-b661-bd486fd8b559-Stockwell_II_1.png`)
                "
                alt=""
              />
              <div class="color_change">
                <span
                  class="color-dot-wrapper active-color"
                  data-item="1"
                  data-src="./120c2222-8490-4f37-b661-bd486fd8b559-Stockwell_II_1.png"
                >
                  <span
                    class="color-dot"
                    style="background-color: #000000"
                  ></span>
                </span>

                <a href="#" class="moreimg" @click.prevent="$_openModal()"
                  >更多圖片</a
                >
              </div>
              <div class="des_block">
                <p>
                  專為戶外旅程而生，STOCKWELL II
                  提供超過20小時播放續航力，扎實音效卻不容忽視，採BLUMLEIN立體聲架構，全向性音效不管在室內或戶外環境都能讓你沉浸在音樂裡，三個D類擴大器支撐重低音單體與前後高音單體，創造強大與乾淨的出色音效。<br />承襲傳奇ROCK
                  ‘N’ ROLL精神，STOCKWELL II
                  金屬編織網罩向舞台上的麥克風致敬，便於攜帶的提帶靈感則取自吉他，矽膠材質且具備IPX4防水等級，打造其堅固耐用性，不管目的地在哪，STOCKWELL
                  II 都會是最佳旅伴。
                </p>
              </div>
            </div>

            <div class="col-md-4 order-md-3 column2">
              <div class="des_block">
                <p class="des_title">客製音效</p>
                <p class="des_content">
                  透過 STOCKWELL II
                  面板上旋轉鈕可輕鬆調整低音、高音與音量，讓音樂依你個人喜好呈現
                </p>
              </div>
            </div>
            <div id="myModal" class="modal" :class="{ active: this.open }">
              <span class="close" @click.prevent="$_openModal()">&times;</span>
              <div class="modal-content">
                <div
                  class="mySlides"
                  v-for="(item, index) in slides"
                  :key="index"
                  :class="{ showslide: counter === index }"
                >
                  <img :src="require(`@/assets/${item.imgurl}`)" />
                </div>

                <a class="prev" @click.prevent="$_plusSlides(-1)">&#10094;</a>
                <a class="next" @click.prevent="$_plusSlides(1)">&#10095;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product_detail2">
        <div class="container py-5">
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STOCKWELL II/f2819add-87c8-4e8b-8aff-31ae35274565-Marshall_Stockwell_II_transparent_03_lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>20小時攜帶式體驗</h2>
              <p>
                STOCKWELL II
                單次充電提供超過20小時攜帶式聆聽體驗，輕巧身型與提帶易於攜帶到戶外使用。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STOCKWELL II/c1fd6582-49d7-4df8-8599-621e09efe918-Marshall_Stockwell_II_transparent_10_lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>全向性音效</h2>
              <p>
                STOCKWELL II
                採BLUMLEIN立體聲架構，全向性音效不管在室內或戶外環境都能讓你沉浸在音樂裡。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STOCKWELL II/8383c111-c01e-4fd5-85ee-72c9a4bdb2b5-Marshall_Stockwell_II_transparent_05_lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>藍牙 5.0 aptX</h2>
              <p>
                STOCKWELL II 搭載藍牙5.0
                aptX，支援多數藍牙裝置，最遠連接距離達近10公尺。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STOCKWELL II/edc48e64-2768-4068-b1e0-4080aaa41db4-Marshall_Stockwell_II_3.png`)
                  "
                  alt=""
                />
              </p>
              <h2>戶外使用特性</h2>
              <p>
                STOCKWELL II
                以矽膠材質包覆與硬質金屬編織網罩，成就極堅固耐用的特性。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STOCKWELL II/b592e6b9-8ec8-4e15-885c-639ec2bd723c-marshall-stockwell-ii-ipx4.jpg`)
                  "
                  alt=""
                />
              </p>
              <h2>IPX4 防水等級</h2>
              <p>
                戶外狀況難以預測，STOCKWELL II 具備 IPX4
                防水等級，抵擋突然其來的天氣變化。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STOCKWELL II/79ddc51f-3838-453b-90d2-3fc6d964bc61-marshall-stockwell-ii-multi host.jpg`)
                  "
                  alt=""
                />
              </p>
              <h2>同時連接多台裝置</h2>
              <p>
                STOCKWELL II
                可同時連接多達兩個藍牙裝置，現在你可以跟朋友輪流分享喜愛的播放清單。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tech_detail">
      <div class="container">
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
                    <td>10瓦 D類擴大器X1</td>
                  </tr>
                  <tr>
                    <th>高音單體</th>
                    <td>5瓦 D類擴大器X2</td>
                  </tr>
                  <tr>
                    <th>響應頻率</th>
                    <td>60-20,000 Hz</td>
                  </tr>
                  <tr>
                    <th>最大聲壓級</th>
                    <td>80 dB SPL @ 1 m</td>
                  </tr>
                  <tr>
                    <th>續航力</th>
                    <td>20+小時</td>
                  </tr>
                  <tr>
                    <th>防水等級</th>
                    <td>IPX4</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>1.38 公斤</td>
                  </tr>
                  <tr>
                    <th>尺寸</th>
                    <td>180 x 161 x 70 mm</td>
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
                    <th>STOCKWELL II 攜帶式藍牙喇叭</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>USB-C 充電線</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>說明手冊</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row" id="twobtn">
          <a
            class="gonow"
            href="https://www.urbanunits.com.tw/SalePage/Index/6555147"
            >馬上選購</a
          >
          <router-link :to="'/speaker'" class="gonow">回產品列表</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Stockwell",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Speakers/STOCKWELL II/120c2222-8490-4f37-b661-bd486fd8b559-Stockwell_II_1.png",
        },
        {
          imgurl:
            "Speakers/STOCKWELL II/aa8911be-0e35-4f44-a8dd-ddc911040778-Marshall_Stockwell_II_2.png",
        },
        {
          imgurl:
            "Speakers/STOCKWELL II/edc48e64-2768-4068-b1e0-4080aaa41db4-Marshall_Stockwell_II_3.png",
        },
        {
          imgurl:
            "Speakers/STOCKWELL II/c1fd6582-49d7-4df8-8599-621e09efe918-Marshall_Stockwell_II_transparent_10_lowres.png",
        },
      ],
      see: 0,
    };
  },
  created() {
    this.$_slidefun(this.counter);
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
        this.counter = this.slides.length - 1;
      }
    },
    $_plusSlides: function (n) {
      this.counter += n;

      this.$_slidefun(this.counter);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/helpers/_productinfo";
.scrollanchor {
  background-image: url("~@/assets/Speakers/STOCKWELL II/marshall_Stockwell_II_campaign_images_hero_selects_03_highres 23.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
