<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>MID A.N.C.</p>
                <br />
                <p>主動式抗噪耳機，一個人的搖滾世界</p>
              </h1>
            </div>
            <p class="button">
              NTD $10,990<a
                href="https://www.urbanunits.com.tw/SalePage/Index/4265826?cid=167705"
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
            <h5>MID A.N.C.</h5>
            <h5>NTD $10,990</h5>
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
                  require(`@/assets/Headphones/MID A.N.C/c1354018-1669-4890-be3e-d614ed70f4de-pos-marshall-mid-anc-black-01.png`)
                "
                alt=""
                v-if="see === 1"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MID A.N.C/7fccc12f-f6fe-4c24-9ae0-fb782b1e6483-pos-marshall-mid-anc-black-02.png`)
                "
                alt=""
                v-else-if="see === 2"
              />
              <img
                class="product_main"
                :src="
                  require(`@/assets/Headphones/MID A.N.C/f09a38d3-6920-4a55-acc7-6a185e51338a-pos-marshall-mid-anc-black-03.png`)
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
                  <span class="color-dot" style="background-color: #000"></span>
                </span>
                <span
                  class="color-dot-wrapper"
                  :calss="{ active_color: see === 3 }"
                  @click="$_seepic(3)"
                >
                  <span
                    class="color-dot"
                    style="background-color: #000"
                  ></span>
                </span>
                <a href="#" class="moreimg" @click.prevent="$_openModal()">更多圖片</a>
              </div>
              <div class="des_block">
                <p>
                  MID A.N.C
                  為主動式抗噪藍牙耳機，支援藍牙aptX高音質傳輸，帶來優質的無線音響效果，還能衰減環境噪音，讓你專注享受最重要的事—音樂。同時開啟抗噪和藍牙功能，MID
                  A.N.C
                  擁有20小時的續航力，若單獨使用藍牙功能則能延長至30小時以上的播放時間。客製化的40mm驅動單體帶出結實有力的音響，充足而清晰的低音，滿足那些追求優良音質的渴望。
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
                    require(`@/assets/Headphones/MID A.N.C/71cdfbef-28e5-4713-82b2-571b7633bbb4-marshall-mid-anc-black-usp1-Desktop_4@1,41x.png`)"
                  alt=""
                />
              </p>
              <h2>主動式抗噪</h2>
              <p>
                MID A.N.C
                具有主動式的抗噪功能，透過內建的四個麥克風來偵測並辨別環境噪音，屏蔽你不想聽到的聲音
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MID A.N.C/2780f880-8f8a-4137-84c1-1d65f4c18227-Marshall_midANC_0172_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>支援藍牙 aptX</h2>
              <p>
                透過藍牙aptX技術來無線連接MID
                A.N.C.主動式抗噪耳機。使用藍牙aptX技術，不僅能用高位元素播放，同時還能降低影音不同步的問題，讓觀影體驗更順暢，同時還提供約10公尺自由移動的無線連線距離
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MID A.N.C/929b600f-c1e4-4969-a529-c74431dfefc0-Marshall_midANC_0121_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>超越20小時續航力</h2>
              <p>
                同時啟用藍牙和抗噪功能，MID A.N.C
                主動式抗噪耳機能持續播放音樂達20小時，若將抗噪功能關閉，電池續航力可延長至30小時以上。主動式抗噪功能關閉並不會影響到藍牙aptX連接
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-10 offset-md-1 content_p">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MID A.N.C/114f057d-7b8f-4502-b9ec-00b97f4c2c7c-Marshall_midANC_0650_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>客製單體</h2>
              <p>
                客製40mm動態驅動單體帶出結實有力的音響，搭配上充足而清晰低音的完美平衡，滿足那些追求優良音質的渴望
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MID A.N.C/505bf055-9b32-45e3-b176-db2ce93cd385-Marshall_midANC_0936_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>五向控制鈕</h2>
              <p>
                耳機開關、播放暫停、快轉或是調整音量，都可以透過五向控制鈕，通話功能也一併在內，接聽、拒絕或是掛斷電話，都在彈指之間
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MID A.N.C/88ff31aa-e62a-479c-afd0-b07e28784044-Marshall_midANC_0554_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>內建通話功能</h2>
              <p>
                內建兩組被動式降噪麥克風，讓你能透過 MID A.N.C
                與他人對話或是錄製語音備忘錄
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MID A.N.C/36221dde-1093-4dea-97df-5ce723652951-Marshall_midANC_0145_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>與好友共享音樂</h2>
              <p>
                當使用藍牙無線播放音樂時，透過額外的3.5mm音源孔，就能與其他人分享音樂
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MID A.N.C/e060e7a8-063b-4588-83e9-6064a3f08590-Marshall_midANC_0254_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>旅行收納盒</h2>
              <p>
                靈感取自吉他琴盒，MID A.N.C
                擁有專屬的旅行收納盒，外層為耐磨的人工皮革，內裏採用柔軟的紅色天鵝絨，給
                MID A.N.C
                最好的收納空間，當不使用時，收納盒也可以折疊收納，輕巧不占空間
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MID A.N.C/255c5a47-186c-4bf5-ab32-15c0fd913eea-Marshall_midANC_1010_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>折疊設計</h2>
              <p>
                當不使用耳機時，只要將耳機折疊收納至附贈的專屬收納盒中，只佔隨身行李的極小空間，是每日通勤或是長程旅行的完美伴侶
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <img
                  :src="
                    require(`@/assets/Headphones/MID A.N.C/1a730e41-80c2-4191-8cbb-69086c72abac-Marshall_midANC_0950_lowres.png`)"
                  alt=""
                />
              </p>
              <h2>人體工學設計</h2>
              <p>
                MID A.N.C
                經由陽極化處理後的3D立體金屬樞紐，可以依照頭型自由的旋轉調整至最符合人體工學
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
                    <td>98 dB SPL (藍牙模式) / 99,3 dB SPL (藍牙ANC模式)</td>
                  </tr>
                  <tr>
                    <th>阻抗</th>
                    <td>32 Ω</td>
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
                    <td>藍牙 4.0 aptX + 3.5mm 音源線</td>
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
                    <th>MID A.N.C. 主動式抗噪藍牙耳機</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>皮革絨布收納盒</th>
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
            href="https://www.urbanunits.com.tw/SalePage/Index/4265826?cid=167705"
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
  name: "Midanc",
  data() {
    return {
      open: false,
      counter: 0,
      slides: [
        {
          imgurl:
            "Headphones/MID A.N.C/c1354018-1669-4890-be3e-d614ed70f4de-pos-marshall-mid-anc-black-01.png",
        },
        {
          imgurl:
            "Headphones/MID A.N.C/7fccc12f-f6fe-4c24-9ae0-fb782b1e6483-pos-marshall-mid-anc-black-02.png",
        },
        {
          imgurl:
            "Headphones/MID A.N.C/f09a38d3-6920-4a55-acc7-6a185e51338a-pos-marshall-mid-anc-black-03.png",
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
  background-image: url("~@/assets/Headphones/MID A.N.C/Marshall-presenta-las-nuevas-versiones-de-sus-bocinas-portátiles-como-regalos-perfectos-para-esta-Navidad.jpg");
}
.active,
.modal .modal-content .showslide,
.product_detail .show {
  display: block;
}
.active_color{
  border: 3px solid #aaa;
}
</style>
