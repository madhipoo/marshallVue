<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>MAJOR III BLUETOOTH</p>
                <br />
                <p>經典，重定義</p>
              </h1>
            </div>
            <p class="button">
              NTD $5,990<a
                href="https://www.urbanunits.com.tw/SalePage/Index/4469279?cid=167705"
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
            <h5>MAJOR III BLUETOOTH</h5>
            <h5>NTD $5,990</h5>
          </div>
        </div>
      </div>
      <div class="product_detail">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-4 order-md-2 column2">
              <div class="des_block">
                <p class="des_title">
                  引以為傲的聲音
                </p>
                <p class="des_content">
                  內建客製化40mm動態驅動單體，MAJOR III
                  藍牙耳機擁有增強的低頻、圓滑的中音和清晰的高頻，皆是承襲自超越半世紀的聲音遺產
                </p>
              </div>
            </div>
            <div class="col-md-4 order-md-1">
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MAJOR III BLUETOOTH/de0b6892-412b-42b6-95e4-4badf1f1699c-pos-marshall-major-iii-bt-black-03.png`)
                "
                alt=""
                v-if="see ===1"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MAJOR III BLUETOOTH/3105646d-5781-4925-923e-e95675569ece-pos-marshall-major-iii-bt-white-01.png`)
                "
                alt=""
                v-else-if="see ===2"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MAJOR III BLUETOOTH/9b9f0e91-c08f-4d25-9469-9bdc2d519256-pos-marshall-major-iii-bt-brown-02.png`)
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

                <a href="#" class="moreimg" @click.prevent="$_openModal()">更多圖片</a>
              </div>
              <div class="des_block">
                <p>
                  MAJOR III 藍牙耳罩式耳機將開啟 Marshall
                  革命史的下一個樂章。最新的移動經典，已被再度精煉，擁有更簡潔完善的設計，外型卻依然保有原始韻味。
                </p>
                <p>
                  MAJOR III
                  藍牙將帶給你絕佳的自由和便利，無線藍牙aptX技術支援高音質傳輸，一次的充電就能給你30小時的無線搖滾。回歸基礎，MAJOR
                  III
                  藍牙耳機由經時間考驗的耐用人工皮革包覆，印上讓人引以為傲的手寫logo，全都是為了向Marshall的搖滾傳奇致敬。
                </p>
              </div>
            </div>

            <div class="col-md-4 order-md-3 column2">
              <div class="des_block">
                <p class="des_title">
                  支援藍牙aptX
                </p>
                <p class="des_content">
                  透過藍牙aptX技術連接，不只能以更高的音質播放音樂，還能降低影音延遲的問題，讓你再也不需面對可怕的對嘴影音
                </p>
              </div>
              <div class="des_block">
                <p class="des_title">
                  人體工學設計
                </p>
                <p class="des_content">
                  MAJOR III
                  的3D立體樞紐，可以依照頭型自由的旋轉調整至最符合舒適的位置
                </p>
              </div>
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
                    require(`@/assets/Headphones/MAJOR III BLUETOOTH/86e6d3a4-040c-4572-8fc2-53d772fd363e-marshall_major III_BT_white_2180_transparent_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>超越30小時無線搖滾</h2>
              <p>
                MAJOR III
                藍牙耳機一次充電就能帶來超越30小時的無線搖滾時間，超越其他同等級藍牙耳機
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR III BLUETOOTH/4cb2d0e4-fd1f-4ecd-bd8b-ceb8eda67ad6-marshall_major-III-BT-black_1605_transparent_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>經典 重定義</h2>
              <p>
                MAJOR III
                舒適頭帶、精簡立體樞紐與新一代耳罩，以及由厚實橡膠包覆的環形線材，每一個細節都是堅實耐用的證明
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR III BLUETOOTH/3808ac9b-53b8-4a14-9c72-ab3b3d2bccc5-marshall_major-III-BT-black_1795_transparent_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>五向控制鈕</h2>
              <p>
                透過五向控制鈕，你可以播放、暫停、快轉或是調整音量，同時也是耳機的電源鍵。通話功能也一併整合在內，接聽、拒絕或是掛斷電話，都在彈指之間
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR III BLUETOOTH/9a0aab04-6378-4f56-bbfc-3041be98c596-marshall_major-III-BT-black_1748_transparent_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>通話功能</h2>
              <p>
                簡單的通話操控，讓 MAJOR III
                藍牙耳機成為每日陪伴的最佳選擇。無線接聽、拒絕或掛斷電話，一鍵搞定
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR III BLUETOOTH/ad79a34f-b676-4dc3-ac69-e49c98e5dfda-marshall_major-III-BT-black_1802_transparent_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>與好友共享音樂</h2>
              <p>
                透過額外的3.5mm音源孔，再接上一隻耳機，就能與朋友一起享受音樂
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MAJOR III BLUETOOTH/d16dec0a-4bd3-449b-81f1-74ed2ad827f2-marshall_major-III-BT-black_0814_transparent_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>折疊收納設計</h2>
              <p>讓 MAJOR III 藍牙耳機成為旅行的最佳夥伴，為長程旅行排憂解難</p>
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
                    <td>經典黑、奶油白、復古棕</td>
                  </tr>
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
                    <td>97 dB SPL</td>
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
                    <th>連接方式</th>
                    <td>藍牙 4.0 + 3.5mm 音源線</td>
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
                    <th>MAJOR III 藍牙耳機</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Micro USB充電線</th>
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
            href="https://www.urbanunits.com.tw/SalePage/Index/4469279?cid=167705"
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
  name: "Majorbluetooth",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Headphones/MAJOR III BLUETOOTH/de0b6892-412b-42b6-95e4-4badf1f1699c-pos-marshall-major-iii-bt-black-03.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III BLUETOOTH/7d8fe9ad-7e10-44d3-bd7f-956d66d0458c-pos-marshall-major-iii-bt-black-02.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III BLUETOOTH/82261fa3-614b-4d6f-965e-335c359bd5df-pos-marshall-major-iii-bt-black-01.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III BLUETOOTH/134e8a86-2698-4a22-8f0a-4ae862cfc53f-pos-marshall-major-iii-bt-white-03.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III BLUETOOTH/69a3dd72-9f9c-4c5e-9e5a-e5508519b56a-pos-marshall-major-iii-bt-white-02.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III BLUETOOTH/3105646d-5781-4925-923e-e95675569ece-pos-marshall-major-iii-bt-white-01.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III BLUETOOTH/e2f301ee-43e1-4266-bddc-f6e7ac9bade3-pos-marshall-major-iii-bt-brown-03.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III BLUETOOTH/9b9f0e91-c08f-4d25-9469-9bdc2d519256-pos-marshall-major-iii-bt-brown-02.png",
        },
        {
          imgurl:
            "Headphones/MAJOR III BLUETOOTH/04dfdcd7-0983-41e7-88ed-b9f9cc0f262a-pos-marshall-major-iii-bt-brown-01.png",
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
  background-image: url("~@/assets/Headphones/MAJOR III BLUETOOTH/01-marshall_majorIII_bluetooth_aniconinthemaking_lifestyle_rgb_highres_3.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
</style>
