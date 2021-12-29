<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>BUILT FOR LOUD</p>
                <br />
                <p>Marshall 首款真無線藍牙耳機重磅登場。</p>
              </h1>
            </div>
            <p class="button">
              NTD $6,200<a
                href="https://shopee.tw/%E3%80%90%E7%BE%8E%E5%9C%8B%E4%BB%A3%E8%B3%BC%E3%80%91Marshall-Mode-II-%E7%9C%9F%E7%84%A1%E7%B7%9A%E8%80%B3%E6%A9%9F-IPX4%E9%98%B2%E6%B0%B4-%E8%97%8D%E7%89%995.1-%E5%8E%9F%E5%BB%A0%E4%BF%9D%E5%9B%BA-%E5%88%86%E6%9C%9F%E5%88%B7%E5%8D%A1-i.16034390.6282757615?__hybrid_pc__=1&stm_referrer=https%3A%2F%2Fwww.google.com.tw%2F"
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
            <h5>MODE II</h5>
            <h5>NTD $6,200</h5>
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
                    require(`@/assets/Headphones/MODE II/f854e398-30e3-4f4d-ae28-d480730290e6-mode-ii-black-01.png`)"
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
                  MODE II
                  具備雷鳴般音效體驗，搭配充電盒最高提供25小時總續航，創造非凡的無線聆聽體驗。
                </p>
                <p>
                  特製驅動單體帶來高傳真與精準聲效，提供沉穩低音、自然中音與清脆高音，震撼力就像置身搖滾區。MODE
                  II
                  搭載人體工學設計，服貼穩定打造整日舒適聆聽，提供多種尺寸矽膠耳塞套，滿足不同使用者的耳型，減低耳朵長時間聆聽的負擔，壓力感測觸控輕鬆控制音樂與通話，MODE
                  II 採仿皮革紋橡膠包覆，具備 IPX5
                  防水係數(充電盒防水係數為IPX4)，任何旅程都能貼身隨行。
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
                    require(`@/assets/Headphones/MODE II/77164cc2-8d3c-4ee3-a167-8b63cc4a657d-Mode-II_content 1.png`)
                  "
                  alt=""
                />
              </p>
              <h2>標誌聲效</h2>
              <p>
                真無線藍牙耳機 MODE II
                擁有雷鳴般聲效體驗，精巧收納於充電盒，仍能帶來豐富飽滿的音質，具備厚實低音、自然中音與清脆高音。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MODE II/ac466705-3e86-443d-8fd8-dfbe65d3a908-Mode-II_content 2.png`)
                  "
                  alt=""
                />
              </p>
              <h2>最高25小時續航力</h2>
              <p>
                單次5小時電力，充電盒滿電時最多可回充4次，提供最高25小時總續航。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MODE II/f0b3454a-e415-4d11-8415-b165cce05c2f-Mode-II_content 3.png`)"
                  alt=""
                />
              </p>
              <h2>符合人體工學的耐用結構</h2>
              <p>
                MODE II 延續 Marshall
                經典設計，人體工學設計提供整日舒適配戴；隨附四種尺寸耳塞套，確保不同耳型都能穩固貼合；同時具備
                IPX5 防水係數抵擋日常雨水與汗水 (充電盒為 IPX4 防水係數)。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MODE II/5d4032fc-8b25-433b-95cf-23a292210244-Mode-II_content 4.png`)"
                  alt=""
                />
              </p>
              <h2>壓力感應觸控</h2>
              <p>
                MODE II
                採用藍牙5.1技術，搭載壓力感應觸控，直覺且簡易上手，觸控左耳操控通透模式、EQ
                模式與喚醒語音助理，觸控右耳操控音樂、選曲，觸控雙耳任一邊接聽與結束通話。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MODE II/93f49d9b-8540-4f68-8af4-44fde51869a0-Mode-II_content 5.png`)"
                  alt=""
                />
              </p>
              <h2>便攜充電盒</h2>
              <p>
                符合口袋大小的充電盒，輕鬆攜帶；支援有線及無線充電，LED
                燈號指示充電盒與耳機電力狀態。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <img
                :src="
                    require(`@/assets/Headphones/MODE II/e6666e84-7ac6-4f9f-b3f0-644b33e79734-Mode-II_content_bn 1.jpg`)"
                alt=""
              />
              <img
                :src="
                    require(`@/assets/Headphones/MODE II/1bf9b462-ea25-4153-843a-fb5c0ebcb708-Mode-II_content_bn 2.jpg`)"
                alt=""
              />
              <img
                :src="
                    require(`@/assets/Headphones/MODE II/3fe0b6bb-458e-47db-a124-1cf4e714d978-Mode-II_content_bn 3.jpg`)"
                alt=""
              />
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
                    <td>6 mm</td>
                  </tr>
                  <tr>
                    <th>響應頻率</th>
                    <td>20 Hz – 20 kHz</td>
                  </tr>
                  <tr>
                    <th>靈敏度</th>
                    <td>100.5 dB SPL</td>
                  </tr>
                  <tr>
                    <th>阻抗</th>
                    <td>16 Ω</td>
                  </tr>
                  <tr>
                    <th>防水係數</th>
                    <td>耳機 IPX5、充電盒 IPX4</td>
                  </tr>
                  <tr>
                    <th>續航力</th>
                    <td>總續航最高25小時，單次約5小時</td>
                  </tr>
                  <tr>
                    <th>充電時間</th>
                    <td>充滿約需2小時 (充電盒回充次數：4次)</td>
                  </tr>
                  <tr>
                    <th>通透模式</th>
                    <td>是</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>耳機 4.75 公克、充電盒 35 公克</td>
                  </tr>
                  <tr>
                    <th>顏色</th>
                    <td>經典黑</td>
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
                    <td>藍牙 5.1</td>
                  </tr>
                  <tr>
                    <th>麥克風</th>
                    <td>是</td>
                  </tr>
                  <tr>
                    <th>操控鈕</th>
                    <td>壓力感應觸控</td>
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
                    <th>MODE II 真無線藍牙耳機</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>MODE II 充電盒</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>USB-C 充電線</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>四組耳塞 (S、M、L、XL)</th>
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
            href="https://shopee.tw/%E3%80%90%E7%BE%8E%E5%9C%8B%E4%BB%A3%E8%B3%BC%E3%80%91Marshall-Mode-II-%E7%9C%9F%E7%84%A1%E7%B7%9A%E8%80%B3%E6%A9%9F-IPX4%E9%98%B2%E6%B0%B4-%E8%97%8D%E7%89%995.1-%E5%8E%9F%E5%BB%A0%E4%BF%9D%E5%9B%BA-%E5%88%86%E6%9C%9F%E5%88%B7%E5%8D%A1-i.16034390.6282757615?__hybrid_pc__=1&stm_referrer=https%3A%2F%2Fwww.google.com.tw%2F"
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
  name: "Modeii",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Headphones/MODE II/f854e398-30e3-4f4d-ae28-d480730290e6-mode-ii-black-01.png",
        },
        {
          imgurl:
            "Headphones/MODE II/184c2c3d-8a4f-4f78-ae93-991c232f973e-mode-ii-black-02.png",
        },
        {
          imgurl:
            "Headphones/MODE II/93a0d44e-149c-45a7-b319-b9c9fe6c0f2b-mode-ii-black-03.png",
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
  background-image: url("~@/assets/Headphones/MODE II/marshall_nsl_mode-II_30_kevin-castanheira-scaled-1.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
