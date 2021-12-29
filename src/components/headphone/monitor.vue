<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>MONITOR II A.N.C.</p>
                <br />
                <p>SUPERIOR SIGNATURE SOUND.</p>
              </h1>
            </div>
            <p class="button">
              NTD $10,990<a
                href="https://www.urbanunits.com.tw/SalePage/Index/6216872"
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
            <h5>MONITOR II A.N.C.</h5>
            <h5>NTD $10,990</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2">
            </div>
            <div class="col-md-4 order-md-1">
              <img
                class="product_main"
                :src="
                    require(`@/assets/Headphones/MONITOR II A.N.C/e1e4ce73-069e-46c8-8baa-b13c5f8c507a-hero_marshall_monitor II ANC_product 1.png`)"
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
              <div class="des_block">
                <p>
                  延續 MARSHALL 傳奇，MONITOR II A.N.C.
                  主動式抗噪藍牙耳機經典卻不失現代感，提供前所未有的高品質音效，採用主動式抗噪技術強化阻隔外界喧擾，讓你能持續專注在最重要的事情
                  – 音樂。
                </p>
              </div>
            </div>

            <div class="col-md-4 order-md-3 column2"></div>
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
                    require(`@/assets/Headphones/MONITOR II A.N.C/9828cbaa-b578-4f8d-a461-39a827840030-Monitor-II-ANC-USP-1.png`)"
                  alt=""
                />
              </p>
              <h2>主動式抗噪</h2>
              <p>
                Monitor II A.N.C.
                採用主動抗噪技術，即時校正音訊並有效阻隔你不想聽到的環境噪音，讓你能持續專注在最重要的事情
                – 音樂。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MONITOR II A.N.C/94b89dbe-7f79-40eb-9f56-727c800bf5a6-hero_marshall_monitor II ANC_ICONIC SOUND.png`)"
                  alt=""
                />
              </p>
              <h2>經典聲效</h2>
              <p>
                你從未體驗過的卓越音效，Monitor II A.N.C. 搭載 40 mm
                驅動單體，創造 Marshall 獨有的經典聲效。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MONITOR II A.N.C/657bef3b-783c-4773-9178-c7324c502e92-3-col-Icon-Monitor-II-ANC-Desktop-1.png`)"
                  alt=""
                />
              </p>
              <h2>30小時無線播放</h2>
              <p>
                Monitor II A.N.C. 在抗噪模式下仍提供長達30小時無線播放續航力。
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MONITOR II A.N.C/0c1c1a03-39e4-4c12-869f-e510a1775245-3-col-Icon-Monitor-II-ANC-Desktop-2.png`)"
                  alt=""
                />
              </p>
              <h2>人體工學，經典設計</h2>
              <p>
                Monitor II A.N.C. 延續 Marshall
                經典外型，具備人體工學設計，提供整日舒適配戴。
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MONITOR II A.N.C/86516b9f-a6d8-42dd-aa67-d6fe3db028df-3-col-Icon-Monitor-II-ANC-Desktop-3.png`)"
                  alt=""
                />
              </p>
              <h2>語音助理</h2>
              <p>
                讓 Google
                助理幫你一把，享受娛樂、與親友保持聯繫、獲得資訊，以及管理日程，完全都不需要使用到手機，透過APP設定，長按耳機上的「M
                按鈕」，就能開口說出指令。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MONITOR II A.N.C/37b3ccdf-0d93-4596-a7e6-45febb5429d7-marshall_monitor II ANC_COLLAPSIBLE DESIGN.png`)"
                  alt=""
                />
              </p>
              <h2>折疊設計</h2>
              <p>
                採用折疊設計，Monitor II A.N.C.
                致力成為極致旅行夥伴，精巧身型與折疊收納，再長的旅程都經得起考驗。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MONITOR II A.N.C/64b1c36b-306f-4560-b79c-b3eebea20b5b-3-col-Icon-Monitor-II-ANC-Controll-knob-Desktop.png`)"
                  alt=""
                />
              </p>
              <h2>五向控制鈕</h2>
              <p>播放、暫停與操控音樂，調整音量與通話功能。</p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MONITOR II A.N.C/dd52de75-aa6b-4bd9-89fe-7b41be22be97-3-col-Icon-Monitor-II-ANC-ANC-button-Desktop.png`)"
                  alt=""
                />
              </p>
              <h2>ANC 按鈕</h2>
              <p>切換三種抗噪模式，開啟、環境音(通透)與關閉。</p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MONITOR II A.N.C/70924a7a-3a72-4101-8b9e-f75954c3e3a0-3-col-Icon-Monitor-II-ANC-M-button-Desktop.png`)"
                  alt=""
                />
              </p>
              <h2>M 按鈕</h2>
              <p>切換三種預設等化器模式或啟動 Google 語音助理。</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MONITOR II A.N.C/1de5d726-99af-4f8f-a603-8ec787c02e5c-marshall_monitor II ANC_TRAVEL KIT.png`)"
                  alt=""
                />
              </p>
              <h2>旅行收納袋</h2>
              <p>
                為短暫或長遠旅行打造，內附 USB-C 充電線、3.5 mm
                音源線與帆布袋，輕鬆收納與攜帶。
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
                    <th>驅動單體</th>
                    <td>40mm</td>
                  </tr>
                  <tr>
                    <th>響應頻率</th>
                    <td>20 Hz-20kHz</td>
                  </tr>
                  <tr>
                    <th>靈敏度</th>
                    <td>96 dB SPL</td>
                  </tr>
                  <tr>
                    <th>阻抗</th>
                    <td>32 Ω</td>
                  </tr>
                  <tr>
                    <th>續航力</th>
                    <td>30小時(抗噪模式)，45小時(藍牙模式)</td>
                  </tr>
                  <tr>
                    <th>充電時間</th>
                    <td>2小時，15分鐘快充提供近5小時電力</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>320g</td>
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
                    <td>藍牙 5.0、3.5mm 音源線</td>
                  </tr>
                  <tr>
                    <th>內建麥克風&操控鈕</th>
                    <td>是</td>
                  </tr>
                  <tr>
                    <th>語音助理</th>
                    <td>Google Assistant</td>
                  </tr>
                  <tr>
                    <th>APP 應用程式</th>
                    <td>Marshall Bluetooth app、Google Assistant app</td>
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
                    <th>Monitor II A.N.C. 主動式抗噪耳機</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>雙頭3.5mm音源線</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>USB-C 充電線</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>帆布收納袋</th>
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
            href="https://www.urbanunits.com.tw/SalePage/Index/6216872"
            >馬上選購</a
          >
          <router-link :to="'/headphone/all'" class="gonow">回產品列表</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Monitor",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Headphones/MONITOR II A.N.C/e1e4ce73-069e-46c8-8baa-b13c5f8c507a-hero_marshall_monitor II ANC_product 1.png",
        },
        {
          imgurl:
            "Headphones/MONITOR II A.N.C/5dd117ad-6190-4e8f-9e8c-7b4613ab0280-hero_marshall_monitor II ANC_product 2.png",
        },
        {
          imgurl:
            "Headphones/MONITOR II A.N.C/612db84b-e70f-4a04-9cbd-7bee74755270-hero_marshall_monitor II ANC_product 3.png",
        },
        {
          imgurl:
            "Headphones/MONITOR II A.N.C/ae0c2a7b-526f-4982-9201-20c760cb8ac6-hero_marshall_monitor II ANC_product 4.png",
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
  background-image: url("~@/assets/Headphones/MONITOR II A.N.C/review-marshalls-monitor-ii-headphones-sound-great-and-look_91dn.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
