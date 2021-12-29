<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>STANMORE II BLUETOOTH</p>
                <br />
                <p>
                  STANMORE II 是 Marshall
                  系列喇叭中，多方位適用任何空間大小的代表。強大的聲音表現，完整展現
                  Marshall 搖滾傳奇之名
                </p>
              </h1>
            </div>
            <p class="button">
              NTD $17,900<a
                href="https://www.urbanunits.com.tw/v2/Search?q=Stanmore&shopId=20983"
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
            <h5>STANMORE II BLUETOOTH</h5>
            <h5>NTD $17,900</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2">
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
                  require(`@/assets/Speakers/STANMORE II BLUETOOTH/5d2a77a7-b4a8-4eb9-b3eb-12948d29cf98-stanmore-II_black_1.png`)
                "
                alt=""
                v-if="see === 1"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Speakers/STANMORE II BLUETOOTH/99408939-bef6-4209-8f90-f69a9d385f4f-stanmore-II_white_1.png`)
                "
                alt=""
                v-else-if="see === 2"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Speakers/STANMORE II BLUETOOTH/5c760dc5-147a-454e-9a48-da0ff5c8c044-stanmore-II_brown_1.png`)
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
              <div class="des_block">
                <p>
                  STANMORE II 由精選原件組成，兩個15瓦
                  D類擴大器驅動高音單體，加上一個50瓦
                  D類擴大器驅動重低音單體，讓 STANMORE II
                  即使在最高音量，也能保有乾淨又精準的聲效。透過藍牙5.0 aptX™
                  ，無線狀態下也能體驗立體聲效。<br />STANMORE II 承襲 Marshall
                  經典設計，包含荔枝皮革紋外箱、鐵灰編織網與手寫logo，前方銅色鑲板刻上榮耀的創始年1962，致敬
                  Marshall 超過50年的搖滾傳奇。
                </p>
              </div>
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
                <a class="next" @click.prevent="$_plusSlides(-1)">&#10095;</a>
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
                    require(`@/assets/Speakers/STANMORE II BLUETOOTH/9f7af3fa-5459-4206-b14e-afb0d1952a60-stanmore II_white_0063_phone_Lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>比現實聲音更強大</h2>
              <p>
                STANMORE II 是 Marshall 系列喇叭中，多方位適用任何空間大小的代表
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STANMORE II BLUETOOTH/d7402697-81db-4b79-bb83-5a60d2b6c6ee-stanmore II_brown_1484_arm_transparent_lowres.png`)
                  "
                  alt=""
                />
              </p>
              <h2>藍牙5.0 aptX™ 連接</h2>
              <p>
                藍牙5.0 aptX™
                讓你享受在家中恣意移動，同時自由聆聽音樂，近10公尺內都能穩定無線播放
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/STANMORE II BLUETOOTH/9cb31f9e-e073-4591-93c9-0130d0c42f69-STANMORE-II.png`)
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
                    <td>50瓦 D類擴大器x1</td>
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
                    <td>101 dB @ 1 m</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>4.65 kg</td>
                  </tr>
                  <tr>
                    <th>尺寸</th>
                    <td>350 x 195 x 185 mm</td>
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
                    <th>STANMORE II BLUETOOTH 藍牙喇叭</th>
                    <td></td>
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
  name: "Stanmorebluetooth",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/5d2a77a7-b4a8-4eb9-b3eb-12948d29cf98-stanmore-II_black_1.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/1103a7cf-5a41-4b77-8d55-5a24352bcc05-stanmore-II_black_2.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/eb0ef2a8-1c05-42f6-8fb3-86cfdff7bed5-stanmore II_black_3.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/009d67f2-f4e3-4a88-8eaf-b571291cc479-stanmore II_black_4.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/99408939-bef6-4209-8f90-f69a9d385f4f-stanmore-II_white_1.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/5d82a68a-32cc-4c86-9f99-36bc0dcff4b0-stanmore-II_white_2.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/7125a816-bc9b-4512-b96f-2da309bd728c-stanmore II_white_3.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/6606f9d6-4954-4785-9757-4cf25cfea3fc-stanmore II_white_4.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/5c760dc5-147a-454e-9a48-da0ff5c8c044-stanmore-II_brown_1.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/6a6cbc98-c708-4042-9c89-ef6dc3b4a7b9-stanmore-II_brown_2.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/05887ddf-b408-45d4-be85-2e6ee20b566f-stanmore II_brown_3.png",
        },
        {
          imgurl:
            "Speakers/STANMORE II BLUETOOTH/0fbfb557-106e-4513-96d6-650a08ec2de5-stanmore II_brown_4.png",
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
  background-image: url("~@/assets/Speakers/STANMORE II BLUETOOTH/Marshall_Stanmore_II_lifestyle_2__48083.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
