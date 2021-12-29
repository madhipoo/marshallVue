<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>UXBRIDGE VOICE</p>
                <br />
                <p>
                  結合 Marshall 傳奇聲效與 Google
                  助理，讓居家喇叭不只經典，更是智慧。
                </p>
              </h1>
            </div>
            <p class="button">
              NTD $8,900<a
                href="https://www.urbanunits.com.tw/SalePage/Index/6506432"
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
            <h5>UXBRIDGE VOICE</h5>
            <h5>NTD $8,900</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2">
              <!-- .column1, .column2, .column3, .column4 為細節數量，定義底下.des_block的margin-top，總數最多為8，左右可分開設定。-->
              <div class="des_block"></div>
            </div>
            <div class="col-md-4 order-md-1">
              <img
                class="product_main"
                :src="
                  require(`@/assets/Speakers/UXBRIDGE VOICE/5156efff-a6ab-4d7f-9c44-399004951c59-marshall_uxbridge_black_google_1.png`)
                "
                alt=""
                v-if="see === 1"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Speakers/UXBRIDGE VOICE/8778a4fe-0154-474c-aad4-8a00d0a5a084-marshall_uxbridge_white_google_1.png`)
                "
                alt=""
                v-else-if="see === 2"
              />
              <div class="color_change">
                <span
                  class="color-dot-wrapper"
                  :calss="{ active_color: see === 1 }"
                  @click="$_seepic(1)"
                >
                  <span class="color-dot" style="background-color: #000"></span>
                </span>
                <span
                  class="color-dot-wrapper"
                  :calss="{ active_color: see === 2 }"
                  @click="$_seepic(2)"
                >
                  <span class="color-dot" style="background-color: #fff"></span>
                </span>

                <a href="#" class="moreimg" @click.prevent="$_openModal()">更多圖片</a>
              </div>
              <div class="des_block"></div>
            </div>

            <div class="col-md-4 order-md-3 column2">
              <div class="des_block"></div>
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
        </div>
      </div>

      <div class="product_detail2">
        <div class="container py-5">
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/UXBRIDGE VOICE/cf3c64b2-bbd0-4960-9cd4-d4d632586061-Uxbridge-Google_內容1.png`)
                  "
                  alt=""
                />
              </p>
              <h2>獨特聲效</h2>
              <p>
                Uxbridge
                身型雖然精巧，卻能創造雷鳴般的聲效，先進設置搭載高端元件，創造只有
                Marshall 特有的聲效。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/UXBRIDGE VOICE/6156a99b-0098-431b-abd0-b2d23eaf7063-Uxbridge-Google_內容2.png`)
                  "
                  alt=""
                />
              </p>
              <h2>盡情聆聽</h2>
              <p>
                Uxbridge
                就像任何一首歌的後台通行證，取得全世界的音樂從未如此輕鬆，向
                Google
                助理開口就能從串流音樂服務為你播放與操控音樂、podcast、以及電台。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/UXBRIDGE VOICE/b2332e66-9598-43fa-9e6d-ac6a8d33ba01-Uxbridge-Google_內容3.png`)
                  "
                  alt=""
                />
              </p>
              <h2>創造多空間串流</h2>
              <p>
                透過多空間串流系統，串流播放內建 Chromecast 或支援 Airplay 2
                的喇叭，你可以讓每個房間播放不同音樂，或是讓整個家播放同一首歌。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/UXBRIDGE VOICE/9187e115-e42e-4b09-b043-871b0203a21f-marshall_uxbridge_black_google_3.png`)
                  "
                  alt=""
                />
              </p>
              <h2>語音助理</h2>
              <p>
                透過語音助理，你可以播放與操控音樂，取得音樂資訊、規劃行事曆、使用
                Google 搜尋資訊、掌控日常指令，以及操控家中的智慧裝置。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/UXBRIDGE VOICE/c22f7bae-a502-4ad2-b33a-9bb4aed38a80-Uxbridge-Google_內容5.jpg`)
                  "
                  alt=""
                />
              </p>
              <h2>MARSHALL 經典設計</h2>
              <p>
                結合現代科技與 Marshall
                標誌設計，延續經典外型的同時提供強大聲效，放在任何空間都不容忽視。
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/UXBRIDGE VOICE/eda7f40c-acab-46f2-ae0b-fa9933e92648-Uxbridge-Google_內容6.jpg`)
                  "
                  alt=""
                />
              </p>
              <h2>客製音樂</h2>
              <p>
                根據喜好，客製你的音樂。 只要透過喇叭上層面板的 rocker
                按鈕，就能依喜好客製你的音樂。
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/UXBRIDGE VOICE/9e71301b-a647-4f5f-a603-4009d883f98b-Uxbridge-Google_內容7.jpg`)
                  "
                  alt=""
                />
              </p>
              <h2>遠場語音辨識</h2>
              <p>
                Marshall
                智慧喇叭系列採遠場麥克風陣列，達到智慧辨識，並消除語音互動時的噪音。即使遠在房間的另一頭，一聲令下就能讓
                Google 助理幫你一把。
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
                    <td>經典黑、經典白</td>
                  </tr>
                  <tr>
                    <th>功率擴大器</th>
                    <td>30瓦 D類擴大器X1</td>
                  </tr>

                  <tr>
                    <th>響應頻率</th>
                    <td>54-20k Hz</td>
                  </tr>
                  <tr>
                    <th>最大聲壓級</th>
                    <td>96dB SPL @ 1 m</td>
                  </tr>
                  <tr>
                    <th>電源輸入電壓</th>
                    <td>100-240V</td>
                  </tr>
                  <tr>
                    <th>電源頻率</th>
                    <td>50/60Hz</td>
                  </tr>
                  <tr>
                    <th>立體聲/單聲道</th>
                    <td>單聲道</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>1.39 公斤</td>
                  </tr>
                  <tr>
                    <th>尺寸</th>
                    <td>128 x 168 x 123 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tech_block">
              <p class="tech_title">操控與連接</p>
              <table>
                <tbody>
                  <tr>
                    <th>無線連接方式</th>
                    <td>內建 Chromecast、Airplay 2、藍牙 4.2</td>
                  </tr>
                  <tr>
                    <th>Wi-Fi 支援</th>
                    <td>
                      任何多樣性的 WPA、802.11b/g /n/ac 2.4 GHz/5 GHz
                      均可連接到您的家庭 Wi-Fi 網路
                    </td>
                  </tr>
                  <tr>
                    <th>語音系統</th>
                    <td>內建 Google 助理</td>
                  </tr>
                  <tr>
                    <th>麥克風系統</th>
                    <td>雙麥克風陣列，可消除遠距語音互動時的噪音</td>
                  </tr>
                  <tr>
                    <th>應用程式配置</th>
                    <td>Google Home App、Google Assistant App</td>
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
                    <th>Uxbridge Voice</th>
                    <td>內建Google助理</td>
                  </tr>
                  <tr>
                    <th>原廠電源線</th>
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
            href="https://www.urbanunits.com.tw/SalePage/Index/5689139?cid=185512"
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
  name: "Uxbridge",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Speakers/UXBRIDGE VOICE/5156efff-a6ab-4d7f-9c44-399004951c59-marshall_uxbridge_black_google_1.png",
        },
        {
          imgurl:
            "Speakers/UXBRIDGE VOICE/9fe20e79-2555-4767-af81-ee0149b65f66-marshall_uxbridge_black_google_2.png",
        },
        {
          imgurl:
            "Speakers/UXBRIDGE VOICE/2fb57ab0-f470-4b18-9492-ccb1860a97c0-Uxbridge-Google_內容4.png",
        },
        {
          imgurl:
            "Speakers/UXBRIDGE VOICE/1478a04a-a6ed-4d16-bb0c-0efab75eb580-marshall_uxbridge_black_google_4.png",
        },
        {
          imgurl:
            "Speakers/UXBRIDGE VOICE/3a183336-2180-478c-a8b8-ad9033cd4f88-marshall_uxbridge_black_google_5.png",
        },
        {
          imgurl:
            "Speakers/UXBRIDGE VOICE/8778a4fe-0154-474c-aad4-8a00d0a5a084-marshall_uxbridge_white_google_1.png",
        },
        {
          imgurl:
            "Speakers/UXBRIDGE VOICE/447c3a23-34ba-4d50-997f-2d211eec126c-marshall_uxbridge_white_google_2.png",
        },
        {
          imgurl:
            "Speakers/UXBRIDGE VOICE/85381e0d-5182-4cbd-8f72-faee2c22640a-marshall_uxbridge_white_google_3.png",
        },
        {
          imgurl:
            "Speakers/UXBRIDGE VOICE/0ce5545b-79a1-41c6-8f47-66479884c0bf-marshall_uxbridge_white_google_4.png",
        },
        {
          imgurl:
            "Speakers/UXBRIDGE VOICE/89aee055-60a8-45d9-a8d5-32654b2f9a56-marshall_uxbridge_white_google_5.png",
        },
      ],
      see: 1,
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
    $_seepic: function (n) {
      this.see = n;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/helpers/_productinfo";
.scrollanchor {
  background-image: url("~@/assets/Speakers/UXBRIDGE VOICE/hAFXVtJPFn4CyetJzu3fiM.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
