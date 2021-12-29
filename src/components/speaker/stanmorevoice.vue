<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>STANMORE II VOICE</p>
                <br />
                <p>
                  Stanmore II Voice 搭載 Google 助理，是 Marshall
                  智慧喇叭系列中，多方位適用任何空間。強大聲音表現，延續經典搖滾精神。
                </p>
              </h1>
            </div>
            <p class="button">
              NTD $18,900<a
                href="https://www.urbanunits.com.tw/SalePage/Index/6506295"
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
            <h5>STANMORE II VOICE</h5>
            <h5>NTD $18,900</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2">

              <div class="des_block"></div>
            </div>
            <div class="col-md-4 order-md-1">
              <img
                class="product_main"
                :src="
                    require(`@/assets/Speakers/STANMORE II VOICE/7dc4da2c-2c9b-4647-9b45-bc106c8358f0-marshall_stanmore II_google_1.png`)"
                alt=""
              />
              <div class="color_change">
                <span
                  class="color-dot-wrapper active-color"
                >
                  <span class="color-dot" style="background-color: #000"></span>
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
                    require(`@/assets/Speakers/STANMORE II VOICE/9a7050d0-ee4b-4a12-a9bc-39a8408ffa9e-marhsall-stanmore-ii-voice-google_內容1.png`)"
                  alt=""
                />
              </p>
              <h2>Google 語音助理，成就革命新聲</h2>
              <p>
                Marshall 智慧喇叭結合 Marshall 經典聲效與 Google 助理(Google
                Assistant)，打造平衡且強大聲效體驗，一聲令下，輕鬆操控。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STANMORE II VOICE/c7afd0e6-0877-4ad0-8d2a-b746b3bcb542-marhsall-stanmore-ii-voice-google_內容2.png`)"
                  alt=""
                />
              </p>
              <h2>智慧助理，解放雙手</h2>
              <p>
                搭載 Google
                語音助理，不需要動手也能操控音樂，開口就能播放音樂或聆聽
                podcast，讓你能繼續專注在其他事務。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STANMORE II VOICE/e62e1f66-8503-48c1-b0aa-75159f9bf0f5-marshall_stanmore II_google_4.png`)"
                  alt=""
                />
              </p>
              <h2>想聽什麼，一聲令下應有盡有</h2>
              <p>
                想像它就是通往任何一首歌的後台通行證，只要讓 Google
                助理為你從串流音樂服務播放音樂，就能盡情聆聽；可以透過內建
                Chromecast、Wi-Fi、藍牙、3.5mm 音源或 RCA 連接。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STANMORE II VOICE/f6466826-08dd-41cf-8dc7-cedda23fa171-marhsall-stanmore-ii-voice-google_內容4.png`)"
                  alt=""
                />
              </p>
              <h2>用一首歌，串連整個家</h2>
              <p>
                透過 Google 助理的多房同步串流功能(Google Multi-Room)或
                Chromecast，就能讓音樂響徹整個家，你可以讓每個房間播放不同音樂，也可以讓整個家都播放同一首歌。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STANMORE II VOICE/ddc47f54-cdd4-4bf1-ac05-c08e05e63814-marhsall-stanmore-ii-voice-google_內容5.png`)"
                  alt=""
                />
              </p>
              <h2>得力助手，進駐你家</h2>
              <p>
                Marshall 語音智慧喇叭讓你的生活更加輕鬆愜意，Google
                助理隨時聽候指令，你可以在家隨意操控、安排行事曆，甚至取得日常問題的回答，開口說一聲就行。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STANMORE II VOICE/75d8f018-3333-4003-a02c-f2fe965aa726-marhsall-stanmore-ii-voice-google_內容6.png`)"
                  alt=""
                />
              </p>
              <h2>客製音樂</h2>
              <p>
                根據喇叭所在的空間大小，你可以透過面板上方旋轉鈕，將音樂細調至你最愛的樣子。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STANMORE II VOICE/cb82c6ba-db66-4ec8-bd23-2f10ff90a85d-marhsall-stanmore-ii-voice-google_內容7.jpg`)"
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
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STANMORE II VOICE/5e1caa07-8c39-41f3-b821-97692a01f82a-marhsall-stanmore-ii-voice-google_內容8.jpg`)"
                  alt=""
                />
              </p>
              <h2>操控你的智慧家庭</h2>
              <p>
                早已是智慧家庭(SMART HOME)的一員? 現在可以透過 Stanmore II Voice
                內建的 Google
                助理操控智慧家庭裝置，例如：電視、燈具、門鎖、恆溫器等。
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STANMORE II VOICE/5c4adaa3-8a83-4543-9224-d104de0369f1-marhsall-stanmore-ii-voice-google_內容9.jpg`)"
                  alt=""
                />
              </p>
              <h2>Marshall 經典設計</h2>
              <p>
                結合現代科技與 Marshall
                標誌設計，延續經典外型的同時提供強大聲效，放在任何空間都不容忽視。
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
            href="https://www.urbanunits.com.tw/SalePage/Index/6506295"
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
  name: "Stanmorevoice",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Speakers/STANMORE II VOICE/7dc4da2c-2c9b-4647-9b45-bc106c8358f0-marshall_stanmore II_google_1.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II VOICE/5bfb987b-edb6-4e7f-990d-40d40d6aa044-marshall_stanmore II_google_2.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II VOICE/8ef5a19a-1b57-4fc0-ac86-63edff56c2a6-marshall_stanmore II_google_3.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II VOICE/e62e1f66-8503-48c1-b0aa-75159f9bf0f5-marshall_stanmore II_google_4.png",
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
  background-image: url("~@/assets/Speakers/STANMORE II VOICE/帶有Google Assistant的Stanmore II語音揚聲器 馬歇爾 2.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
