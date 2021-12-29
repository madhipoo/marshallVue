<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>ACTON II BLUETOOTH</p>
                <br />
                <p>
                  雖然 ACTON II
                  個頭精巧，但千萬別被外表騙了，搭載三個D類擴大機支撐雙高音喇叭與低音喇叭，聲音效果讓人驚豔。
                </p>
              </h1>
            </div>
            <p class="button">
              NTD $11,900<a
                href="https://www.urbanunits.com.tw/v2/Search?q=acton&shopId=20983"
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
            <h5>ACTON II BLUETOOTH</h5>
            <h5>NTD $11,900</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2">
              <!-- .column1, .column2, .column3, .column4 為細節數量，定義底下.des_block的margin-top，總數最多為8，左右可分開設定。-->
              <div class="des_block">
                <p class="des_title">有線連接</p>
                <p class="des_content">
                  除了藍牙5.0，也可以透過3.5mm音源輸入進行播放(線材需自行購買)
                </p>
              </div>
              <div class="des_block">
                <p class="des_title">Marshall Bluetooth APP</p>
                <p class="des_content">
                  除了面板上旋轉鈕，現在你也可以透過 Marshall Bluetooth APP
                  將音樂客製成你最愛的樣子。從APP輕鬆切換等化器、面板LED燈的明暗，甚至可以將喇叭開啟或設為休眠狀態
                </p>
              </div>
            </div>
            <div class="col-md-4 order-md-1">
              <img
                class="product_main"
                :src="
                  require(`@/assets/Speakers/ACTON II BLUETOOTH/ddfda794-393e-4a91-ab7a-8c1622f83393-ACTON-II.png`)
                "
                alt=""
                v-if="see ===1"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Speakers/ACTON II BLUETOOTH/7a4be10f-cbd4-464c-a218-cb278c91a5d9-acton-II_white_1.png`)
                "
                alt=""
                v-else-if="see ===2"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Speakers/ACTON II BLUETOOTH/9e9d8083-0d51-45b5-a8b7-bd79c8d12c68-acton-II_brown_1.png`)
                "
                alt=""
                v-else-if="see ===3"
              />
              <div class="color_change">
                <span
                  class="color-dot-wrapper" :calss="{active_color: see===1}"
                  @click="$_seepic(1)"
                >
                  <span class="color-dot" style="background-color: #000"></span>
                </span>
                <span
                  class="color-dot-wrapper" :calss="{active_color: see===2}"

                  @click="$_seepic(2)"

                >
                  <span class="color-dot" style="background-color: #fff"></span>
                </span>
                <span
                  class="color-dot-wrapper" :calss="{active_color: see===3}"

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
              <div class="des_block"></div>
            </div>

            <div class="col-md-4 order-md-3 column2">
              <div class="des_block">
                <p class="des_title">客製音效</p>
                <p class="des_content">
                  音樂的音量、高音或低音，都能透過旋轉鈕或Marshall Bluetooth
                  APP進行調整，就算喇叭不在旁邊，遠端控制也不是問題
                </p>
              </div>
              <div class="des_block">
                <p class="des_title">多頻道功能</p>
                <p class="des_content">
                  具備多頻道功能設計，讓你輕鬆連接與切換兩個藍牙裝置，現在你可以跟你的朋友輪流播放各自的音樂
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
                    require(`@/assets/Speakers/ACTON II BLUETOOTH/0f013da4-9c2f-42d6-8c43-9223bebeecc8-acton II_white_0651_arm1_Lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>比現實聲音更強大</h2>
              <p>
                ACTON II
                搭載三個D類擴大機，支撐雙高音喇叭與低音喇叭，木質音箱構造提供飽和自然的音效，低音反射系統的開口部更是提高低頻的傳輸效率
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/ACTON II BLUETOOTH/93b2762f-4e52-42a9-853a-cd69be2e3244-acton II_brown_0446_phone_transparent_lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>藍牙5.0無線連接</h2>
              <p>
                藍牙5.0讓你享受在家中恣意移動，同時自由聆聽音樂，近10公尺內都能穩定無線播放
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/ACTON II BLUETOOTH/bce026be-b945-41a3-b391-b3e5805cf7bc-acton II_black_4 (1).png`)
                  "
                  alt=""
                />
              </p>
              <h2>經典 MARSHALL 設計</h2>
              <p>
                承襲 Marshall
                經典設計，木箱搭載荔枝皮革紋外箱、鐵灰編織網與手寫logo，前方銅色鑲板刻上榮耀的創始年1962，致敬
                Marshall 超過50年的搖滾傳奇
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
                    <td>經典黑、經典白、復古棕</td>
                  </tr>
                  <tr>
                    <th>低音單體</th>
                    <td>30瓦 D類擴大器x1</td>
                  </tr>
                  <tr>
                    <th>高音單體</th>
                    <td>15瓦 D類擴大器x2</td>
                  </tr>
                  <tr>
                    <th>響應頻率</th>
                    <td>50–20,000 Hz</td>
                  </tr>
                  <tr>
                    <th>最大聲壓級</th>
                    <td>98 dB @ 1 m</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>2.85 kg</td>
                  </tr>
                  <tr>
                    <th>尺寸</th>
                    <td>260 x 160 x 150 mm</td>
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
                    <td>5.0 無線藍牙傳輸、3.5mm音源輸入</td>
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
                    <th>ACTON II BLUETOOTH 藍牙喇叭</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>原廠充電線</th>
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
            href="https://www.urbanunits.com.tw/v2/Search?q=acton&shopId=20983"
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
  name: "Acton",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Speakers/ACTON II BLUETOOTH/ddfda794-393e-4a91-ab7a-8c1622f83393-ACTON-II.png",
        },
        {
          imgurl:
            "Speakers/ACTON II BLUETOOTH/33130c9f-1af2-43f8-9a0f-9143c2ba38b8-acton-II_black_2.png",
        },
        {
          imgurl:
            "Speakers/ACTON II BLUETOOTH/689c34dc-22e8-43cd-94c3-d8cad7e9c4d8-acton II_black_3.png",
        },
        {
          imgurl:
            "Speakers/ACTON II BLUETOOTH/7a4be10f-cbd4-464c-a218-cb278c91a5d9-acton-II_white_1.png",
        },
        {
          imgurl:
            "Speakers/ACTON II BLUETOOTH/c555115d-4e80-4cf2-b8dc-72f648e8e90b-acton-II_white_2.png",
        },
        {
          imgurl:
            "Speakers/ACTON II BLUETOOTH/afc744c1-f907-4582-9720-d3644c0edff6-acton II_white_3.png",
        },
        {
          imgurl:
            "Speakers/ACTON II BLUETOOTH/11383895-55a3-4fee-971b-f19b18d53764-acton II_white_4.png",
        },
        {
          imgurl:
            "Speakers/ACTON II BLUETOOTH/9e9d8083-0d51-45b5-a8b7-bd79c8d12c68-acton-II_brown_1.png",
        },
        {
          imgurl:
            "Speakers/ACTON II BLUETOOTH/2af63d3e-6606-47ec-a105-a3ddd5875ce7-acton II_brown_2.png",
        },
        {
          imgurl:
            "Speakers/ACTON II BLUETOOTH/dc7cfce0-f690-4f81-81a4-2e23dde8c43e-acton II_brown_3.png",
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
    $_seepic:function(n){
      this.see=n;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/helpers/_productinfo";
.scrollanchor {
  background-image: url("~@/assets/Speakers/ACTON II BLUETOOTH/marshall_stanmore_ii_voice_1.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
