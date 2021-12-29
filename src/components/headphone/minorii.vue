<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>MINOR II</p>
                <br />
                <p>LIGHT ON YOUR EARS, HEAVY ON SOUND.</p>
              </h1>
            </div>
            <p class="button">
              NTD $5,190<a
                href="https://www.books.com.tw/products/N011704235"
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
            <h5>MINOR II</h5>
            <h5>NTD $5,190</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2">
              <!-- .column1, .column2, .column3, .column4 為細節數量，定義底下.des_block的margin-top，總數最多為8，左右可分開設定。-->
              <div class="des_block">
                <p class="des_title">輕巧&耐用設計</p>
                <p class="des_content">
                  Minor
                  II堅毅如你，細節設計輔以橡膠線材，兼具質感與耐用性，精巧身形就像隨身攜帶著搖滾舞台，黃銅手寫logo承襲
                  Marshall 經典造型
                </p>
              </div>
            </div>
            <div class="col-md-4 order-md-1">
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MINOR II/326ad49b-542f-4961-a036-60a4382eeba4-minor-II_black_1.png`)
                "
                alt=""
                v-if="see === 1"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MINOR II/2cc53533-2b75-4e35-aa82-032de2e88a75-minor-II_white_1.png`)
                "
                alt=""
                v-else-if="see === 2"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MINOR II/9b4c3b4a-050f-4686-9546-e43950a31703-minor-II_brown_1.png`)
                "
                alt=""
                v-else-if="see === 3"
              />
              <div class="color_change">
                <span class="color-dot-wrapper" @click="$_seepic(1)">
                  <span
                    class="color-dot"
                    style="background-color: #000"
                    :calss="{ active_color: see === 1 }"
                  ></span>
                </span>
                <span class="color-dot-wrapper" @click="$_seepic(2)">
                  <span
                    class="color-dot"
                    style="background-color: #fff"
                    :calss="{ active_color: see === 2 }"
                  ></span>
                </span>
                <span class="color-dot-wrapper" @click="$_seepic(3)">
                  <span
                    class="color-dot"
                    style="background-color: #cd853f"
                    :calss="{ active_color: see === 2 }"
                  ></span>
                </span>
                <a href="#" class="moreimg" @click.prevent="$_openModal()"
                  >更多圖片</a
                >
              </div>
              <div class="des_block">
                <p>
                  Minor II 為耳塞式藍牙耳機，支援 QUALCOMM aptX™
                  藍牙技術，單次充電就能享受12小時無線播放，創新的耳塞服貼系統配有可調整環線，讓配戴上更貼近完美與人體工學。<br />Minor
                  II 的設計緊貼耳道，全天配戴也能舒適聆聽，客製14.2
                  mm動態驅動單體提供飽滿的高音、清脆中音與清晰平衡的低音，讓你有置身搖滾區的感受。
                </p>
              </div>
            </div>

            <div class="col-md-4 order-md-3 column2">
              <div class="des_block">
                <p class="des_title">通話功能</p>
                <p class="des_content">
                  簡易上手的通話功能讓Minor
                  II成為完美的多功能幫手，透過控制鈕無線接聽、拒接與結束通話，內建麥克風讓你可以進行通話與錄音
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
                    require(`@/assets/Headphones/MINOR II/3f29a033-f0df-45cd-b054-db0e2447251f-minor II_black_0071_transparent_lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>5.0 aptX 藍牙連接</h2>
              <p>
                Minor II
                採aptX藍牙技術，不僅傳輸率愈高，也能降低傳輸的延遲性，往後戴著
                Minor II 觀賞影片音效也不會跟不上畫面，在近10公尺的距離都能享受
                Minor II 帶來的無線自由
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MINOR II/a3fb876e-21aa-4986-9b8a-2e5f0ae7a2a1-minor II_white_0460_phone_transparent_lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>12小時無線播放</h2>
              <p>
                Minor II 單次充電就能帶來12小時無線播放。出門趕時間發現電力不足?
                Minor II 快充設計只要20分鐘就能提供2小時播放，充滿電只要2小時
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MINOR II/c9472bfc-6a3a-4d66-83de-74c179c76bca-minor-II_brown_3.png`)
                  "
                  alt=""
                />
              </p>
              <h2>客製驅動單體</h2>
              <p>
                Minor II 搭載客製14.2
                mm動態驅動單體，提供飽滿高音、清脆中音與清晰平衡的低音，讓你有置身搖滾區的感受
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MINOR II/e5a2b1c2-0f7e-4d3e-ae84-e2b166d6a59e-minor II_black_0336_transparent_lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>耳塞服貼設計</h2>
              <p>
                Minor II
                採符合人體工學的設計，緊貼耳道，全天配戴也能舒適聆聽，這項創新的設計為耳塞服貼系統(Ear-fit
                system)，除外型獨特，配有可調整環線達到最佳配戴狀態
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MINOR II/3e216666-3a1f-44a2-a931-cfb4fb09c9b9-minor II_black_0512_transparent_lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>五向控制鈕</h2>
              <p>
                五向控制鈕包含播放、暫停與隨機播放音樂功能，以及耳機開關鍵與調整音量，同時支援通話功能，輕鬆一按就能接聽、拒接與結束通話
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MINOR II/ff2978e0-0192-4875-a9d4-a9f3cf9605fa-minor II_black_0294_transparent_lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>磁吸式暫停功能</h2>
              <p>
                磁吸式設計提供立即暫停播放功能，將兩側耳塞脫離耳道並相互吸扣，兩側吸附後，Minor
                II 會進入低耗電的休眠狀態，在完全沒有使用6小時後自動關機
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
                    <td>黑、白、棕</td>
                  </tr>
                  <tr>
                    <th>驅動單體</th>
                    <td>141.2mm</td>
                  </tr>
                  <tr>
                    <th>響應頻率</th>
                    <td>20 Hz-20kHz</td>
                  </tr>
                  <tr>
                    <th>靈敏度</th>
                    <td>117 dB SPL</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>22.5g</td>
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
                    <td>藍牙 5.0 aptX</td>
                  </tr>
                  <tr>
                    <th>內建麥克風&操控鈕</th>
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
                    <th>MINOR II 藍牙耳機</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Micro USB充電線</th>
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
          <a class="gonow" href="https://www.books.com.tw/products/N011704235"
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
  name: "Minorii",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Headphones/MINOR II/326ad49b-542f-4961-a036-60a4382eeba4-minor-II_black_1.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/92814d30-f019-49f9-abe1-43225b5a7022-minor-II_black_2.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/15b365c0-21ab-4bd1-8841-c5f18997367b-minor-II_black_3.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/fd269d1c-b78d-4555-9d87-53a96fb65d51-minor-II_black_4.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/3ecf099d-38f1-481c-ab5e-62c0bedcd430-minor-II_black_5.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/2cc53533-2b75-4e35-aa82-032de2e88a75-minor-II_white_1.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/aa4f668b-f966-4844-8aa6-02a7ce25b1a1-minor-II_white_2.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/37bece93-6298-4158-a339-1a1efb1cdeb1-minor-II_white_3.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/e024449a-3a42-45ed-9c4d-722a4d63de79-minor-II_white_4.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/8b1fb324-ce0c-4a57-a561-612f11e2fc8c-minor-II_white_5.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/9b4c3b4a-050f-4686-9546-e43950a31703-minor-II_brown_1.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/995c294c-c0bb-472c-8ae3-233e6421f496-minor-II_brown_2.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/c9472bfc-6a3a-4d66-83de-74c179c76bca-minor-II_brown_3.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/cc708e17-5b6d-486a-8b5a-ead3bfe3cad0-minor-II_brown_4.png",
        },
        {
          imgurl:
            "Headphones/MINOR II/a6ba9c9f-bc31-4dad-8b91-487a15d14d9c-minor-II_brown_5.png",
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
  background-image: url("~@/assets/Headphones/MINOR II/Marshall_21.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
