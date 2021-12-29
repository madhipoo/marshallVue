<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>KILBURN II BLACK AND BRASS</p>
                <br />
                <p>2021 全新限定色，獨家通路限量發售。</p>
              </h1>
            </div>
            <p class="button">
              NTD $10,900<a
                href="https://shopping.friday.tw/ec2/product?pid=7517148&cid=414447&sid=1&mid=1"
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
            <h5>KILBURN II (古銅黑)</h5>
            <h5>NTD $10,900</h5>
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
                    require(`@/assets/Speakers/KILBURN II 古銅黑/56c6d388-6653-437b-b0ca-09bfd8fb24e5-marshall-kilburn-ii-black-brass-02.png`)"
                alt=""
              />
              <div class="color_change">
                <span
                  class="color-dot-wrapper active-color"
                  data-item="1"
                  data-src="./120c2222-8490-4f37-b661-bd486fd8b559-Stockwell_II_1.png"
                >
                  <span
                    class="color-dot"
                    style="background-color: #000000"
                  ></span>
                </span>

                <a href="#" class="moreimg" @click.prevent="$_openModal()">更多圖片</a>
              </div>
              <div class="des_block">
                <p>
                  來場與 KILBURN II
                  的搖滾之旅，擺脫所有線材，享受超過20小時的無線搖滾體驗；身型輕巧卻能從同等級喇叭脫穎而出成為最震撼的喇叭，擁有清澈的中音段、沉穩低音和延展的高音，多向性音效讓你不管在室內或室外都能讓你沉浸在音樂裡。
                </p>
                <p>
                  承襲搖滾精神，KILBURN II
                  正面的金屬編織格紋向麥克風上的鋼鐵網格致敬，靈感擷取來自吉他背帶的可拆式提帶，輕鬆就能把
                  KILBURN II 帶著走。兩側埋入式金屬角帽與防潑水設計，讓 KILBURN
                  II 擁有強大的耐用度，就算是長途旅程對 KILBURN II
                  來說也不是問題。
                </p>
              </div>
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
                    require(`@/assets/Speakers/KILBURN II 古銅黑/9ee81097-a9b1-4cbe-9045-04099775e653-kilburn-II_black-and-br_content1.png`)"
                  alt=""
                />
              </p>
              <h2>20小時攜帶式體驗</h2>
              <p>
                KILBURN II
                重量僅2.5公斤，單次充電就能享受超過20小時的搖滾體驗，精巧的身型與靈感擷取自吉他背帶的可拆式提帶，讓
                KILBURN II
                成為你的最佳旅伴，並能透過面板上的指示燈隨時查看電量。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/KILBURN II 古銅黑/e7350f22-a07d-43bb-9247-b63c02fee87c-kilburn-II_black-and-br_content2.png`)"
                  alt=""
                />
              </p>
              <h2>全向性音效</h2>
              <p>
                這無所畏懼的硬漢具備強大的全向性音效，讓你不管在室內或室外都能沉浸在音樂裡；身為同級中最震撼的喇叭，KILBURN
                II 擁有清澈的中音段、沉穩低音和延展的高音。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/KILBURN II 古銅黑/4f993c3f-6bed-439c-bdcb-7395d9601e19-kilburn-II_black-and-br_content3.png`)"
                  alt=""
                />
              </p>
              <h2>5.0 aptX 藍牙連接</h2>
              <p>
                KILBURN II 配置5.0
                aptX藍牙技術，在長達近10公尺的距離都能穩定無線播放音樂。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/KILBURN II 古銅黑/466ad6bd-d3b5-453b-9970-18563f97d738-content4.jpg`)"
                  alt=""
                />
              </p>
              <h2>IPX2 防潑水設計</h2>
              <p>
                生活總是充滿驚喜，KILBURN II 具備防潑水設計，IPX2
                防潑水等級意即可以抵擋潑濺
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/KILBURN II 古銅黑/7034cafe-5f9b-4ce9-803c-4558cb250df4-content5.jpg`)"
                  alt=""
                />
              </p>
              <h2>耐用與旅行設計</h2>
              <p>
                KILBURN II 具備埋入式金屬角帽與防潑水設計，讓KILBURN II
                堅不可摧，成為各種冒險旅程的最佳旅伴。
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/KILBURN II 古銅黑/a0ffc746-2d49-4e3e-b4f8-025aaf7bee06-content6.jpg`)"
                  alt=""
                />
              </p>
              <h2>連接多個藍牙裝置</h2>
              <p>
                KILBURN II
                可同時連接兩個藍牙裝置，現在你可以跟朋友輪流分享喜愛的播放清單。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/KILBURN II 古銅黑/350781db-af63-4f7f-915d-c724dd7fdd7d-kilburn-II_black-and-br_content7.png`)"
                  alt=""
                />
              </p>
              <h2>客製化音效</h2>
              <p>
                透過面板上旋轉鈕輕鬆調整低音、高音與音量，讓音樂以你喜愛的方式呈現。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p>
                <img
                  :src="
                    require(`@/assets/Speakers/KILBURN II 古銅黑/6805daed-8280-4ae1-adc4-15061aba6dc6-kilburn-II_black-and-br_content8.png`)"
                  alt=""
                />
              </p>
              <h2>快充設計</h2>
              <p>快充20分鐘，提供3小時續航力，單次充電也只要2.5小時。</p>
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
                    <td>古銅黑</td>
                  </tr>
                  <tr>
                    <th>低音單體</th>
                    <td>20瓦 D類擴大器X1</td>
                  </tr>
                  <tr>
                    <th>高音單體</th>
                    <td>8瓦 D類擴大器X2</td>
                  </tr>
                  <tr>
                    <th>響應頻率</th>
                    <td>52-20,000 Hz</td>
                  </tr>
                  <tr>
                    <th>最大聲壓級</th>
                    <td>100.4 dB SPL 1 m</td>
                  </tr>
                  <tr>
                    <th>續航力</th>
                    <td>20+小時</td>
                  </tr>
                  <tr>
                    <th>防水等級</th>
                    <td>IPX2</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>2.5 公斤</td>
                  </tr>
                  <tr>
                    <th>尺寸</th>
                    <td>243 x 162 x 140 mm</td>
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
                    <td>5.0 atpX®無線藍牙傳輸、3.5mm 音源線</td>
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
                    <th>KILBURN II 攜帶式藍牙喇叭</th>
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
            href="https://shopping.friday.tw/ec2/product?pid=7517148&cid=414447&sid=1&mid=1"
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
  name: "Kilburnblack",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Speakers/KILBURN II 古銅黑/bfab10ec-daba-4f20-9514-d39cf61b6009-marshall-kilburn-ii-black-brass-01.png",
        },
        {
          imgurl:
            "Speakers/KILBURN II 古銅黑/56c6d388-6653-437b-b0ca-09bfd8fb24e5-marshall-kilburn-ii-black-brass-02.png",
        },
        {
          imgurl:
            "Speakers/KILBURN II 古銅黑/87fbb966-03d3-4077-8af6-170bd32ceeee-marshall-kilburn-ii-black-brass-03.png",
        },
        {
          imgurl:
            "Speakers/KILBURN II 古銅黑/6805daed-8280-4ae1-adc4-15061aba6dc6-kilburn-II_black-and-br_content8.png",
        },
      ],
      see: 0,
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
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/helpers/_productinfo";
.scrollanchor {
  background-image: url("~@/assets/Speakers/KILBURN II 古銅黑/螢幕快照-2020-07-20-下午2.18.55.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
