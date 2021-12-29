<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>MAJOR III</p>
                <br />
                <p>
                  Marshall
                  革命史的下一個篇章，最新的經典已被再度精煉，擁有更簡潔完善的設計，外型卻依然保有原始韻味
                </p>
              </h1>
            </div>
            <p class="button">
              NTD $3,290<a
                href="https://www.urbanunits.com.tw/SalePage/Index/4470408?cid=167704"
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
            <h5>MAJOR III</h5>
            <h5>NTD $3,290</h5>
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
                  require(`@/assets/Headphones/MAJOR III/ca29db5a-7c29-49bf-8ba6-e4998c7cc17d-major-III-black_1.png`)
                "
                alt=""
                v-if="see === 1"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MAJOR III/f76d3b7d-4de5-4a28-9ebc-dd5de495544d-pos-marshall-major-iii-white-02.png`)
                "
                alt=""
                v-else-if="see === 2"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MAJOR III/5bf96288-305d-4f68-8c87-447aaa46a2b8-pos-marshall-major-iii-brown-02.png`)
                "
                alt=""
                v-else-if="see === 3"
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
                <span
                  class="color-dot-wrapper"
                  :calss="{ active_color: see === 3 }"
                  @click="$_seepic(3)"
                >
                  <span
                    class="color-dot"
                    style="background-color: #cd853f"
                  ></span>
                </span>

                <a href="#" class="moreimg" @click.prevent="$_openModal()"
                  >更多圖片</a
                >
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
                    require(`@/assets/Headphones/MAJOR III/66b9e992-a096-4138-a7ef-8b2438c7006b-major iii-內容1.png`)
                  "
                  alt=""
                />
              </p>
              <h2>經典重定義</h2>
              <p>
                MAJOR III
                舒適頭帶、精簡後的立體樞紐、新一代耳罩，以及由厚實橡膠包覆的加粗環形線材，每一個細節都是堅實耐用的證明
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR III/655789ff-88a7-4118-9899-c1c91b230673-major-III內容2.png`)
                  "
                  alt=""
                />
              </p>
              <h2>折疊設計</h2>
              <p>讓 MAJOR III 成為旅行的最佳夥伴，為長程旅行排憂解難</p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR III/6abc053b-2602-4f62-9c8f-ff29e71ed2cf-major-III內容3.png`)
                  "
                  alt=""
                />
              </p>
              <h2>人體工學設計</h2>
              <p>
                MAJOR III
                的3D立體樞紐，可以依照頭型自由的旋轉調整至最符合舒適的位置
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR III/d6c139a2-358d-4f90-877b-42a197aadaa3-major-III內容4.png`)
                  "
                  alt=""
                />
              </p>
              <h2>內建麥克風&控制鈕</h2>
              <p>
                透過耳機線上的控制鈕，你可以控制你的耳機和通話功能，並透過可拆式3.5mm音源線上的麥克風接聽電話。透過簡單按鈕，就能接聽/掛斷電話、播放/暫停音樂，或是控制音樂
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
                    <td>99 dB SPL</td>
                  </tr>
                  <tr>
                    <th>阻抗</th>
                    <td>32 Ω</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>178g</td>
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
                    <th>MAJOR III 耳罩式耳機</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>3.5mm音源線</th>
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
            href="https://www.urbanunits.com.tw/SalePage/Index/4470408?cid=167704"
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
  name: "Major",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Headphones/MAJOR III/ca29db5a-7c29-49bf-8ba6-e4998c7cc17d-major-III-black_1.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III/2fee2e5c-5705-4cf1-aaf1-f0fafbb47789-major-III-black_2.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III/f76d3b7d-4de5-4a28-9ebc-dd5de495544d-pos-marshall-major-iii-white-02.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III/74a7c423-4d2e-4494-98a2-6f69d9baeb72-major-III-white_2.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III/0e3f8dbe-3e41-4f13-9120-c4a4ccb7d371-major-III-white_3.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III/5bf96288-305d-4f68-8c87-447aaa46a2b8-pos-marshall-major-iii-brown-02.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III/0a84b076-51db-43d4-8d53-8bfa85cead39-major-III-brown_3.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III/f1fa672f-8d11-431f-b7dd-2f0aeee763bd-major-III-brown_2.png",
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
  background-image: url("~@/assets/Headphones/MAJOR III/05R5IqKUu9t9C6AnT53fynJ-3..1576114454.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
