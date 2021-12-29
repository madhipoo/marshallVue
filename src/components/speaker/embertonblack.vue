<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>Emberton 古銅黑</p><br>
                <p>PACKS A PUNCH，搖滾一手掌握</p>
              </h1>
            </div>
            <p class="button">
              NTD $5,790<a
                href="https://www.urbanunits.com.tw/SalePage/Index/6648907"
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
            <h5>EMBERTON(古銅黑)</h5>
            <h5>NTD $5,790</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row ">
            <div class="col">
              <img
                :src="require(`@/assets/Speakers/EMBERTON 古銅黑/7cd58108-687b-416f-9d62-99cb5e322743-Emberton BB_1.png`)"
                class="product_main "
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
            class="close "
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
                  :src="require(`@/assets/Speakers/EMBERTON 古銅黑/f0392e98-76a1-40b6-a193-d539437792e6-Emberton BB_內容1_1920x1080.jpg`)"
                  alt=""
                ></p>
              <h2>IPX7 防水係數，耐用設計</h2>
              <p>EMBERTON 結實且有彈性，達到極致耐用，IPX7 防水係數更加適應戶外環境 (僅為防水用途，不建議置於水中播放)</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/EMBERTON 古銅黑/f23fef74-690b-4547-b9fe-82b628dbada7-Emberton BB_內容2_1920x1080.png`)"
                  alt=""
                ></p>
              <h2>多向性控制鈕</h2>
              <p>EMBERTON 便於使用且操作簡易，透過多向性按鈕播放/暫停音樂、選曲與調整音量，以及開/關機</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/EMBERTON 古銅黑/e7056da5-396f-4f17-a395-304e05d4c2b6-Emberton BB_內容3_1920x1080.png`)"
                  alt=""
                ></p>
              <h2>可攜式設計</h2>
              <p>EMBERTON 重量僅0.7公斤且貼合手掌大小，精巧身型，音樂隨行</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/EMBERTON 古銅黑/b28e112e-b754-4342-acdc-9654d464c80a-Emberton BB_內容4_1920x1080.png`)"
                  alt=""
                ></p>
              <h2>藍牙連接</h2>
              <p>EMBERTON 搭載藍牙5.0，提供高效音質與無線播放</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p><img
                  :src="require(`@/assets/Speakers/EMBERTON 古銅黑/5da26c9a-0b87-4727-a9d5-24dabade663b-Emberton BB_內容5_1920x1080.png`)"
                  alt=""
                ></p>
              <h2>經典 Marshall 外型</h2>
              <p>EMBERTON 結合當代科技與經典外型，創造強大聲效，同時延續代表性設計，不管到哪，都能展現你的音樂風格</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <img
                :src="require(`@/assets/Speakers/EMBERTON 古銅黑/ff1ec566-f0a3-4a97-8d38-34a75a2932d0-Emberton BB_內容6_1920x1080.jpg`)"
                alt=""
              >

            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <img
                :src="require(`@/assets/Speakers/EMBERTON 古銅黑/8317815d-78dc-4f82-8b53-c61a32ec0b7d-Emberton BB_內容7_1920x1080.jpg`)"
                alt=""
              >

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
                    <td>經典黑</td>
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
            href="https://www.urbanunits.com.tw/SalePage/Index/6472334"
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
  name: "Embertonblack",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Speakers/EMBERTON 古銅黑/7cd58108-687b-416f-9d62-99cb5e322743-Emberton BB_1.png",
        },
        {
          imgurl:
            "Speakers/EMBERTON 古銅黑/8ef4ee82-f114-4904-a79b-3863bf7c5794-Emberton BB_2.png",
        },
        {
          imgurl:
            "Speakers/EMBERTON 古銅黑/d26e7584-c94f-4ab1-a900-2a643ff9cf97-Emberton BB_3.png",
        },
        {
          imgurl:
            "Speakers/EMBERTON 古銅黑/c2c97023-589f-48ad-bee2-4da1831912ae-Emberton BB_4.png",
        },
        {
          imgurl:
            "Speakers/EMBERTON 古銅黑/90d86471-c430-47e6-8024-7cdb258f8a7b-Emberton BB_5.png",
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
        this.counter = this.slides.length-1;
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


<style lang="scss" scoped>
@import "~@/assets/helpers/_productinfo";
.scrollanchor {
  background-image: url("~@/assets/Speakers/EMBERTON 古銅黑/8317815d-78dc-4f82-8b53-c61a32ec0b7d-Emberton BB_內容7_1920x1080.jpg");
}
.active,
.modal .modal-content .showslide {
  display: block;
}
</style>