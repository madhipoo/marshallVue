<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>STOCKWELL II 古銅黑</p>
                <br />
                <p>2020全新限定色。</p>
              </h1>
            </div>
            <p class="button">
              NTD $7,900<a
                href="https://www.urbanunits.com.tw/SalePage/Index/6555147"
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
            <h5>STOCKWELL II(古銅黑)</h5>
            <h5>NTD $7,900</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                :src="
                    require(`@/assets/Speakers/STOCKWELL II 古銅黑/66e0d0f8-6763-46fd-ac5b-c805799a85b2-Stockwell II BB_1.png`)"
                class="hover-shadow product_main"
              />
              <a href="#" class="moreimg" @click.prevent="$_openModal()">更多圖片</a>
              <div class="des_block">
                <p>
                  專為戶外旅程而生，STOCKWELL II
                  提供超過20小時播放續航力，扎實音效卻不容忽視，採BLUMLEIN立體聲架構，全向性音效不管在室內或戶外環境都能讓你沉浸在音樂裡，三個D類擴大器支撐重低音單體與前後高音單體，創造強大與乾淨的出色音效。
                </p>
                <p>
                  承襲傳奇ROCK ‘N’ ROLL精神，STOCKWELL II
                  金屬編織網罩向舞台上的麥克風致敬，便於攜帶的提帶靈感則取自吉他，矽膠材質且具備IPX4防水等級，打造其堅固耐用性，不管目的地在哪，STOCKWELL
                  II 都會是最佳旅伴。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="myModal" class="modal" :class="{ active: this.open }">
          <span class="close" @click.prevent="$_openModal()">&times;</span>
          <div class="modal-content">
            <div class="mySlides" v-for="(item, index) in slides"
                  :key="index"
                  :class="{ showslide: counter === index }">
              <img :src="require(`@/assets/${item.imgurl}`)" />
            </div>

            <a class="prev" @click.prevent="$_plusSlides(-1)">&#10094;</a>
            <a class="next" @click.prevent="$_plusSlides(1)">&#10095;</a>
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
                    require(`@/assets/Speakers/STOCKWELL II 古銅黑/66e0d0f8-6763-46fd-ac5b-c805799a85b2-Stockwell II BB_1.png`)"
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
                    require(`@/assets/Speakers/STOCKWELL II 古銅黑/ad35c14b-808c-4034-92d1-01cfe713551b-Stockwell II BB_4.png`)"
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
                    require(`@/assets/Speakers/STOCKWELL II 古銅黑/afeb6f34-d0e1-4dc6-9316-845ccf62baeb-Stockwell II BB_5.png`)"
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
                    require(`@/assets/Speakers/STOCKWELL II 古銅黑/17051150-b027-4573-a209-d49705e95c55-Stockwell II BB_3.png`)"
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
            <div class="col-sm-6 col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STOCKWELL II 古銅黑/09ac79db-031c-4644-bdd4-7bb783d734a7-Stockwell II BB_6.jpg`)"
                  alt=""
                />
              </p>
              <h2>IPX4 防水等級</h2>
              <p>
                戶外狀況難以預測，STOCKWELL II 具備 IPX4
                防水等級，抵擋突然其來的天氣變化。
              </p>
            </div>
            <div class="col-sm-6 col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STOCKWELL II 古銅黑/3cd91dfb-e316-46fb-9048-8dc565f5db5b-Stockwell II BB_7.jpg`)"
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
                    <td>古銅黑</td>
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
  name: "Stockwellblack",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Speakers/STOCKWELL II 古銅黑/66e0d0f8-6763-46fd-ac5b-c805799a85b2-Stockwell II BB_1.png",
        },
        {
          imgurl:
            "Speakers/STOCKWELL II 古銅黑/dc2a4e23-ad9a-446e-8c5b-5f8ad6b23558-Stockwell II BB_2.png",
        },
        {
          imgurl:
            "Speakers/STOCKWELL II 古銅黑/17051150-b027-4573-a209-d49705e95c55-Stockwell II BB_3.png",
        },
        {
          imgurl:
            "Speakers/STOCKWELL II 古銅黑/ad35c14b-808c-4034-92d1-01cfe713551b-Stockwell II BB_4.png",
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
  background-image: url("~@/assets/Speakers/STOCKWELL II 古銅黑/Marshall_portable_stockwell II_black-and-brass_0419_arm-S.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
