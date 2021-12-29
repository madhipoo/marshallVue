<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>MODE</p>
              </h1>
            </div>
            <p class="button">
              NTD $2,290<a
                href="https://www.urbanunits.com.tw/SalePage/Index/3306140?cid=167740"
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
            <h5>MODE</h5>
            <h5>NTD $2,290</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2"></div>
            <div class="col-md-4 order-md-1">
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MODE/1ccb5a6e-20c4-489f-ace4-7863660b4983-marshall-mode-01.png`)
                "
                alt=""
                v-if="see === 1"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MODE/7ef8ba9d-ae07-478e-8d8c-70db91a6e7cc-marshall-mode-02.png`)
                "
                alt=""
                v-else-if="see === 2"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MODE/1bf3e672-a722-46f4-a2f2-6bbed9c5c0e3-marshall-mode-03.png`)
                "
                alt=""
                v-else-if="see === 3"
              />
              <div class="color_change">
                <span class="color-dot-wrapper" @click="$_seepic(1)">
                  <span
                    class="color-dot"
                    :calss="{ active_color: see === 1 }"
                  ></span>
                </span>
                <span class="color-dot-wrapper" @click="$_seepic(2)">
                  <span
                    class="color-dot"
                    :calss="{ active_color: see === 2 }"
                  ></span>
                </span>
                <span class="color-dot-wrapper" @click="$_seepic(3)">
                  <span
                    class="color-dot"
                    :calss="{ active_color: see === 2 }"
                  ></span>
                </span>

                <a href="#" class="moreimg" @click.prevent="$_openModal()"
                  >更多圖片</a
                >
              </div>
              <div class="des_block">
                <p>
                  體積雖小，依然能震撼你的耳朵！MODE
                  客製化的驅動單體，同時提供高輸出低失真的優質美聲，獨特的入耳式設計，讓
                  MODE 能牢靠又舒適地配戴。
                </p>
              </div>
            </div>

            <div class="col-md-4 order-md-3 column2"></div>
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
                    require(`@/assets/Headphones/MODE/fa9b3ae1-a7bf-4a27-8438-960c5c42ab1e-mode-內容1.png`)
                  "
                  alt=""
                />
              </p>
              <h2>輕巧 重擊</h2>
              <p>體積雖小，依然震撼</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MODE/ee4bac12-79b1-461a-a9b7-b908acfbafbd-mode-內容2.png`)
                  "
                  alt=""
                />
              </p>
              <h2>經典 MARSHALL 設計</h2>
              <p>
                線控刻上經典 Marshall 手寫logo，耳機上則有具有代表性的大寫 M
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MODE/b562af5f-2d59-49ff-b809-db19e02bd897-mode-內容3.png`)
                  "
                  alt=""
                />
              </p>
              <h2>內建麥克風&線控</h2>
              <p>接聽通話、調整音量大小、選曲等都能透過線控上的金屬按鈕搞定</p>
            </div>
            <div class="col-sm-6">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MODE/95ab1a23-8967-4583-a6d0-e0da830b3f4f-mode-內容4.png`)
                  "
                  alt=""
                />
              </p>
              <h2>內附不同尺寸耳塞</h2>
              <p>MODE EQ 內附四種不同大小耳塞，確保每個人的耳朵都能舒適配戴</p>
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
                    <td>9mm</td>
                  </tr>
                  <tr>
                    <th>阻抗</th>
                    <td>34 Ω</td>
                  </tr>
                  <tr>
                    <th>響應效率</th>
                    <td>20Hz-20kHz</td>
                  </tr>
                  <tr>
                    <th>靈敏度</th>
                    <td>97 dB SPL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tech_block">
              <p class="tech_title">操控與連接</p>
              <table>
                <tbody>
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
                    <th>MODE 耳道式耳機</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>替換耳塞</th>
                    <td>S/M/L/XL</td>
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
            href="https://www.urbanunits.com.tw/SalePage/Index/3306140?cid=167740"
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
  name: "Mode",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Headphones/MODE/1ccb5a6e-20c4-489f-ace4-7863660b4983-marshall-mode-01.png",
        },
        {
          imgurl:
            "Headphones/MODE/7ef8ba9d-ae07-478e-8d8c-70db91a6e7cc-marshall-mode-02.png",
        },
        {
          imgurl:
            "Headphones/MODE/1bf3e672-a722-46f4-a2f2-6bbed9c5c0e3-marshall-mode-03.png",
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
  background-image: url("~@/assets/Headphones/MODE/herosplit_1616139495_PEFJhP_1280x720.jpeg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
