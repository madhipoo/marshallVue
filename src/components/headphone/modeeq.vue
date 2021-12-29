<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>MODE EQ</p>
              </h1>
            </div>
            <p class="button">
              NTD $3,190<a
                href="https://www.urbanunits.com.tw/SalePage/Index/3306159?cid=167740"
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
            <h5>MODE EQ</h5>
            <h5>NTD $3,190</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2">
              <!-- .column1, .column2, .column3, .column4 為細節數量，定義底下.des_block的margin-top，總數最多為8，左右可分開設定。-->
            </div>
            <div class="col-md-4 order-md-1">
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MODE EQ/f3972b14-1290-4035-84bc-4f7a7b394a96-pos-marshall-mode-eq-01.png`)
                "
                alt=""
                v-if="see === 1"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MODE EQ/c23e6f61-803d-43e6-a2c9-92e4ff520238-pos-marshall-mode-eq-02.png`)
                "
                alt=""
                v-else-if="see === 2"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MODE EQ/6d166097-ae9b-4dc7-92ae-733a0ec028ee-pos-marshall-mode-eq-03.png`)
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

                <a href="#" class="moreimg" @click.prevent="$_openModal()">更多圖片</a>
              </div>
              <div class="des_block">
                <p>
                  Marshall 首款入耳式耳機，MODE EQ
                  極小的體積，依然能傳出巨大清脆的聲響，客製化驅動單體，同時提供高輸出低失真的優質美聲，獨特的入耳式設計，讓
                  MODE EQ 能牢靠又舒適地配戴。
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
                    require(`@/assets/Headphones/MODE EQ/284495fb-f234-44cf-99c2-479d4f065839-marshall-mode-eq-usp1-Desktop_2@1,41x.png`)"
                  alt=""
                />
              </p>
              <h2>等化器(EQ)調節</h2>
              <p>
                MODE
                EQ在線控上多了等化器(EQ)調節開關，開啟後能增強中低音頻，讓使用者可以在兩種模式中選擇自己想要的聲音
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MODE EQ/038ac0c5-74be-4599-ad70-b42d881d2cc8-mode-eq-內容2.png`)"
                  alt=""
                />
              </p>
              <h2>輕巧 重擊</h2>
              <p>極小的體積，依然能傳遞出巨大清脆的聲響</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MODE EQ/90efd259-aa74-4759-8e79-5cc41b644fbc-mode-eq-內容3.png`)"
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
                    require(`@/assets/Headphones/MODE EQ/1e23de3c-576b-44f5-ae0a-5e57d0041486-mode-eq-內容4.png`)"
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
                    require(`@/assets/Headphones/MODE EQ/9eec0ef3-9dca-461c-b32c-537bf7789dcb-mode-eq-內容5.png`)"
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
                    <td>18 Ω</td>
                  </tr>
                  <tr>
                    <th>響應效率</th>
                    <td>20Hz-20kHz</td>
                  </tr>
                  <tr>
                    <th>靈敏度</th>
                    <td>100 dB SPL</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>20g</td>
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
                  <tr>
                    <th>EQ鈕(低音增強)</th>
                    <td>有(On/Off)</td>
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
                    <th>MODE EQ 耳道式耳機</th>
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
            href="https://www.urbanunits.com.tw/SalePage/Index/3306159?cid=167740"
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
  name: "Modeeq",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Headphones/MODE EQ/f3972b14-1290-4035-84bc-4f7a7b394a96-pos-marshall-mode-eq-01.png",
        },
        {
          imgurl:
            "Headphones/MODE EQ/c23e6f61-803d-43e6-a2c9-92e4ff520238-pos-marshall-mode-eq-02.png",
        },
        {
          imgurl:
            "Headphones/MODE EQ/6d166097-ae9b-4dc7-92ae-733a0ec028ee-pos-marshall-mode-eq-03.png",
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
  background-image: url("~@/assets/Headphones/MODE EQ/maxresdefault.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
