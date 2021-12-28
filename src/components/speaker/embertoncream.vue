<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>Emberton CREAM</p><br>
                <p>沒有其他顏色能夠將反叛精神以如此迷人的模樣呈現，不朽的復古色調，將 Rock 'N' Roll 黃金年代完美傳遞到你的手上。</p>
              </h1>
            </div>
            <p class="button">
              NTD $5,790<a
                href="https://www.urbanunits.com.tw/SalePage/Index/7135563"
                class="buynow"
              >馬上選購</a>
            </p>
          </div>
        </div>

      </div>
    </div>

    <section class="productlist">
      <div class="product_menu">
        <div class="container">
          <div class="product_title">
            <h5>EMBERTON(奶油白)</h5>
            <h5>NTD $5,790</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row ">

            <div class="col">
              <img
                :src="require(`@/assets/Speakers/EMBERTON CREAM/021de4da-98f0-497b-98e8-162ee45849c2-marshall-emberton-cream-pos-01.png`)"
                class="hover-shadow product_main"
              >
              <a
                href="#"
                class="moreimg"
                @click.prevent="$_openModal()"
              >更多圖片</a>
              <div class="des_block">
                <p>EMBERTON 外型精巧，具備 Marshall 強大且生動的獨特聲效，搭載立體聲架構，提供全向式音效體驗，確保在室內與戶外都能沉浸在音樂裡，超越20小時播放續航力，整日音樂不中斷。</p>
                <p>重量僅0.7公斤，EMBERTON 結實且富有彈性，極致耐用與直覺式使用設計適用任何場合，具備 IPX7 防水係數，意旨 EMBERTON 能夠承受水下1公尺內長達30分鐘(僅為防水用途，不建議置於水中播放)，正面金屬編織網格與手寫 Marshall logo，致敬你所熟知且喜愛的搖滾傳奇。</p>
              </div>

            </div>
          </div>
        </div>
        <div
          id="myModal"
          class="modal"
          :class="{active:this.open}"
        >
          <span
            class="close"
            @click.prevent="$_openModal()"
          >&times;</span>
          <div class="modal-content">

            <div
              class="mySlides"
              v-for="(item,index) in slides"
              :key="index"
              :class="{showslide:counter===index}"
            >
              <img :src="require(`@/assets/${item.imgurl}`)">
            </div>
            <a
              class="prev"
              @click.prevent="$_plusSlides(-1)"
            >&#10094;</a>
            <a
              class="next"
              @click.prevent="$_plusSlides(1)"
            >&#10095;</a>

          </div>
        </div>
      </div>

      <div class="product_detail2">
        <div class="container py-5">

          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/EMBERTON CREAM/9865038c-76aa-44f4-93c7-d6b01baa1f37-EmbertonCream_content1.jpg`)"
                  alt=""
                ></p>
              <h2>IPX7 防水係數，耐用設計</h2>
              <p>EMBERTON 結實且有彈性，達到極致耐用，IPX7 防水係數更加適應戶外環境 (僅為防水用途，不建議置於水中播放)</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/EMBERTON CREAM/98f45b2e-2929-447f-bafd-15a4ad9ad57b-marshall-emberton-cream-pos-04.png`)"
                  alt=""
                ></p>
              <h2>多向性控制鈕</h2>
              <p>EMBERTON 便於使用且操作簡易，透過多向性按鈕播放/暫停音樂、選曲與調整音量，以及開/關機</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/EMBERTON CREAM/b80cfc8c-17fb-45d8-b9b9-fb47539fbeb8-EmbertonCream_content3.png`)"
                  alt=""
                ></p>
              <h2>可攜式設計</h2>
              <p>EMBERTON 重量僅0.7公斤且貼合手掌大小，精巧身型，音樂隨行</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/EMBERTON CREAM/856bc316-dd68-444f-9a58-29f747101108-EmbertonCream_content4.png`)"
                  alt=""
                ></p>
              <h2>藍牙連接</h2>
              <p>EMBERTON 搭載藍牙5.0，提供高效音質與無線播放</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/EMBERTON CREAM/3a0b0bd4-b4f0-4702-94f5-b636f74ce0c2-EmbertonCream_content5.png`)"
                  alt=""
                ></p>
              <h2>經典 Marshall 外型</h2>
              <p>EMBERTON 結合當代科技與經典外型，創造強大聲效，同時延續代表性設計，不管到哪，都能展現你的音樂風格</p>
            </div>
          </div>

        </div>
      </div>

    </section>

    <section id="tech_detail">
      <div class="container ">
        <div class="row">
          <div class="col-md-6">
            <div class="tech_block">
              <p class="tech_title">產品規格</p>
              <table>
                <tbody>
                  <tr>
                    <th>顏色</th>
                    <td>CREAM奶油白</td>
                  </tr>
                  <tr>
                    <th>驅動單體</th>
                    <td>10瓦 全域單體X2</td>
                  </tr>
                  <tr>
                    <th>被動輻射器</th>
                    <td>被動輻射器 x 2</td>
                  </tr>
                  <tr>
                    <th>功率擴大器</th>
                    <td>10瓦 D類擴大器X2</td>
                  </tr>
                  <tr>
                    <th>響應頻率</th>
                    <td>60 Hz – 20 kHz</td>
                  </tr>
                  <tr>
                    <th>最大聲壓級</th>
                    <td>87 dB SPL @ 1 m</td>
                  </tr>
                  <tr>
                    <th>續航力</th>
                    <td>20+小時</td>
                  </tr>
                  <tr>
                    <th>充電時間</th>
                    <td>單次充滿約3小時，20分鐘快充提供5小時電力</td>
                  </tr>
                  <tr>
                    <th>防水係數</th>
                    <td>IPX7 (僅為防水用途，不建議置於水中播放)</td>
                  </tr>
                  <tr>
                    <th>重量</th>
                    <td>0.7 公斤</td>
                  </tr>
                  <tr>
                    <th>尺寸</th>
                    <td>68 x 160 x 76 mm</td>
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
                    <td>藍牙5.0</td>
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
                    <th>EMBERTON 攜帶式藍牙喇叭</th>
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
        <div
          class="row "
          id="twobtn"
        >
          <a
            class="gonow"
            href="https://www.urbanunits.com.tw/SalePage/Index/7135563"
          >馬上選購</a>
          <router-link
            :to="'/speaker'"
            class="gonow"
          >回產品列表</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Embertoncream",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Speakers/EMBERTON CREAM/63f1430e-4334-47b0-a4be-c04b7427d9c7-marshall-emberton-cream-pos-02.png",
        },
        {
          imgurl:
            "Speakers/EMBERTON CREAM/021de4da-98f0-497b-98e8-162ee45849c2-marshall-emberton-cream-pos-01.png",
        },
        {
          imgurl:
            "Speakers/EMBERTON CREAM/babed449-9bf8-41e3-8bbb-1329839ece25-marshall-emberton-cream-pos-03.png",
        },
        {
          imgurl:
            "Speakers/EMBERTON CREAM/98f45b2e-2929-447f-bafd-15a4ad9ad57b-marshall-emberton-cream-pos-04.png",
        },
        {
          imgurl:
            "Speakers/EMBERTON CREAM/5ac028ea-a505-4e8e-a565-91e61b1f95c4-marshall-emberton-cream-pos-05.png",
        },
      ],
    };
  },
  created() {
    this.$_slidefun(this.counter);
    this.$_windowcheck();
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
    $_windowcheck: function () {
      if ($(window).width() < 768) {
        $(".product_detail .des_block").click(function () {
          $(".product_detail .des_content").css("display", "none");
          $(this).children(".des_content").css("display", "block");
          $(".product_detail .des_block")
            .find(".fa-minus")
            .removeClass("fa-minus")
            .addClass("fa-plus");
          $(this).find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
        });
      }
      $(".color-dot-wrapper").click(function () {
        $(".color-dot-wrapper").removeClass("active-color");
        $(this).addClass("active-color");
        var active_item = $(this).data("item");
        $(".product_main").attr("src", $(this).data("src"));
      });
    },
  },
};
</script>


<style lang="scss">
@import "~@/assets/helpers/_productinfo";
.scrollanchor {
  background-image: url("~@/assets/Speakers/EMBERTON CREAM/9865038c-76aa-44f4-93c7-d6b01baa1f37-EmbertonCream_content1.jpg");
}
.active,
.modal .modal-content .showslide {
  display: block;
}
</style>