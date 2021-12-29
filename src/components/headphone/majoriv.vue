<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>AN ICON REBORN</p>
                <br />
                <p>MAJOR IV 提供超過80小時續航力，經典重生。</p>
              </h1>
            </div>
            <p class="button">
              NTD $4,990<a
                href="https://www.urbanunits.com.tw/SalePage/Index/6663819"
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
            <h5>MAJOR IV</h5>
            <h5>NTD $4,990</h5>
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
                    require(`@/assets/Headphones/MAJOR IV/c5434d78-4b33-4b7e-9532-28352ecd66ca-Major IV_product_1.png`)"
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
                    require(`@/assets/Headphones/MAJOR IV/82499416-3fc5-4ed8-8605-c7cb7c950ad5-Major IV_content_1.png`)"
                  alt=""
                />
              </p>
              <h2>經典聲效</h2>
              <p>
                Major IV 具備不失所望的 Marshall
                經典聲效，超過55年搖滾傳奇毫無保留，淬鍊出 Major IV
                爆炸性聲效表現，客製動態驅動單體提供重磅低音、流暢中音與明亮高音，打造豐富且無與倫比的音效體驗，讓你捨不得放下。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR IV/6e8bcb0e-6b17-4380-964f-af48cfff8a80-Major IV_content_2.png`)"
                  alt=""
                />
              </p>
              <h2>80+ 小時無線播放</h2>
              <p>
                Major IV 提供超過 80
                小時無線播放，15分鐘快充提供15小時電力，無須擔心需要使用時耳機卻電量耗盡。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR IV/6bd9436f-4ef7-4e98-ac11-87733ee2cf5f-Major IV_product_5.png`)"
                  alt=""
                />
              </p>
              <h2>支援無線充電</h2>
              <p>
                Major IV
                支援無線充電，將耳機直立於充電板，耳罩外側矽膠邊條有助耳機平放，並達到止滑效果，省去在凌亂的線堆中尋找充電線，享受更多音樂時間。(包裝內附USB-C充電線，無線充電盤需自行購買)
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR IV/be4b99fe-f5a5-472d-8c88-f14db4414e88-Major IV_content_4.jpg`)"
                  alt=""
                />
              </p>
              <h2>全新升級人體工學設計</h2>
              <p>
                Major IV
                強化人體工學設計，並降低夾緊力，連續沉浸在音樂裡10小時也像剛配戴一樣舒適，耳罩質地更柔軟細膩。
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR IV/9138c5c4-eedf-4f4d-9fa5-881a5dfe9f4a-Major IV_content_5.jpg`)"
                  alt=""
                />
              </p>
              <h2>五向控制鈕</h2>
              <p>
                透過五向控制鈕輕鬆調整歌曲，播放/暫停、選曲、調整音量，以及耳機開關機，甚至通話功能也能一指搞定。
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR IV/cb9b3760-a9f6-43fa-a5a5-853415280435-Major IV_content_6.jpg`)"
                  alt=""
                />
              </p>
              <h2>折疊設計</h2>
              <p>
                雙邊印有羅馬數字 IV
                的折疊扣，確保耳機折疊穩固性，且能節省收納空間。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR IV/02fdc1a4-cbcf-40a5-9b16-fe27261ca4eb-Major IV_content_8.png`)"
                  alt=""
                />
              </p>
              <h2>標誌 Marshall 設計</h2>
              <p>Major IV 結合實用性與 Marshall 元素，完整呈現經典與創新。</p>
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
                    <th>單體尺寸</th>
                    <td>40mm</td>
                  </tr>
                  <tr>
                    <th>響應頻率</th>
                    <td>20 Hz-20kHz</td>
                  </tr>
                  <tr>
                    <th>靈敏度</th>
                    <td>99 dB SPL (100mV @ 1kHz)</td>
                  </tr>
                  <tr>
                    <th>阻抗</th>
                    <td>32 Ω</td>
                  </tr>
                  <tr>
                    <th>充電時間</th>
                    <td>3 小時，15 分鐘快充提供 15 小時電力</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>208g</td>
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
                    <th>Major IV 耳罩式藍牙耳機</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>3.5 mm 音源線</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>USB-C 充電線</th>
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
        <div class="row" id="twobtn">
          <a
            class="gonow"
            href="https://www.urbanunits.com.tw/SalePage/Index/6663819"
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
  name: "Majoriv",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Headphones/MAJOR IV/c5434d78-4b33-4b7e-9532-28352ecd66ca-Major IV_product_1.png",
        },
        {
          imgurl:
            "Headphones/MAJOR IV/1c5bb805-dd1e-4199-95f5-bd3b421473ff-Major IV_product_2.png",
        },
        {
          imgurl:
            "Headphones/MAJOR IV/51f024e2-20b3-4798-b893-4165cba02806-Major IV_product_3.png",
        },
        {
          imgurl:
            "Headphones/MAJOR IV/b7d2635f-e559-4abe-be1c-8644ebce2717-Major IV_product_4.png",
        },
        {
          imgurl:
            "Headphones/MAJOR IV/9953669d-a922-426e-a2ff-c6ce44668331-Major IV_content_3.png",
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
  background-image: url("~@/assets/Headphones/MAJOR IV/base_138.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
