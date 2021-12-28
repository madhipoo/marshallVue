<template>
  <div>
    <div class="scrollanchor">
        <div class="container">
            <div class="row">
                <div class="col1">
                    <div class="title">
                        <h1 class="maintitle">
                            <p>TUFTON BLACK AND BRASS</p><br>
                            <p>限定色，全數售完。</p>
                        </h1>
                    </div>
                    <p class="button">
                        NTD $18,900
                    </p>
                </div>
            </div>

        </div>
    </div>







    <section class="productlist">
        <div class="product_menu">
            <div class="container">
                <div class="product_title">
                    <h5>TUFTON(古銅黑)</h5>
                    <h5>NTD $18,900</h5>
                </div>
            </div>
        </div>
        <div class="product_detail">
            <div class="container">
                <div class="row py-5">
                    <div class="col-md-4 order-md-2 column2">
                        <!-- .column1, .column2, .column3, .column4 為細節數量，定義底下.des_block的margin-top，總數最多為8，左右可分開設定。-->
                        <div class="des_block">

                        </div>
                    </div>
                    <div class="col-md-4 order-md-1">
                        <img class="product_main " :src="require(`@/assets/Speakers/TUFTON 古銅黑/7bf0f63e-6c2e-4cba-b8f2-81137e407a8e-marshall-tufton-black-brass-01.png`)" alt="">
                        <div class="color_change">
                            <span class="color-dot-wrapper active-color" >
                                <span class="color-dot" style="background-color: #000000"></span>
                            </span>

                            <a href="#" class="moreimg" @click.prevent="$_openModal()">更多圖片</a>
                        </div>
                        <div class="des_block">
                            <p>TUFTON 為 MARSHALL 攜帶式系列喇叭中最大身型，讓你把演唱會現場帶著上路，提供超過20小時播放續航力，再遙遠的路程都不成問題，搭載藍牙5.0支援多數藍牙裝置，最遠連接距離達近10公尺，TUFTON 正面三音路設計，重低音、全域與高音單體各司其職，確保各頻率都能有乾淨且清晰的表現，背面額外增設的全域單體，創造立體感十足的360°聆聽體驗。<br>承襲傳奇 ROCK‘N’ROLL 精神，TUFTON 金屬編織網罩向舞台上的麥克風致敬，便於攜帶的提帶靈感則取自吉他，具備IPX2防水等級與埋入式金屬角帽，打造其堅固耐用特性，TUFTON
                                可以說是喇叭界的猛獸，為戶外野遊探險而生。
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4 order-md-3 column2">
                        <div class="des_block">

                        </div>
                    </div>
                    <div id="myModal" class="modal" :class="{active:this.open}">
                        <span class="close " @click="$_openModal()">&times;</span>
                        <div class="modal-content">

                            <div class="mySlides" v-for="(item,index) in slides"
                  :key="index"
                  :class="{showslide:counter===index}">
                                <img :src="require(`@/assets/${item.imgurl}`)">
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
                        <p><img :src="require(`@/assets/Speakers/TUFTON 古銅黑/8b83c231-ebfd-4578-aa80-821c0c9d4c38-marshall_tufton_black-and-brass_ content1.png`)" alt=""></p>
                        <h2>超過20小時攜帶式體驗</h2>
                        <p>TUFTON 單次充電提供超過20小時聆聽體驗，以吉他為設計靈感的提帶便於攜帶上路。</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1 content_p">
                        <p><img :src="require(`@/assets/Speakers/TUFTON 古銅黑/a8dd5812-83f0-429c-b835-0c11d76b538a-marshall_tufton_black-and-brass_ content2.png`)" alt=""></p>
                        <h2>全向性音效</h2>
                        <p>TUFTON 三音路設計與背面額外增設的全域單體，確保各頻率都能有乾淨且清晰的表現，不管在室內或戶外環境都能享受被音樂包圍的立體音效。 </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1 content_p">
                        <p><img :src="require(`@/assets/Speakers/TUFTON 古銅黑/776a8465-9869-41bb-9330-12b73fe66f70-marshall_tufton_black-and-brass_ content3.png`)" alt=""></p>
                        <h2>藍牙5.0</h2>
                        <p>TUFTON 搭載藍牙5.0，透過任何藍牙裝置播放音樂，最遠連接距離達近10公尺。</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <p><img :src="require(`@/assets/Speakers/TUFTON 古銅黑/ccdecfbe-1157-4135-a640-89419692e907-marshall_tufton_black-and-brass_ content4.jpg`)" alt=""></p>
                        <h2>戶外使用特性</h2>
                        <p>具備IPX2防水等級，TUFTON 以及側邊埋入式金屬角帽設計，打造其堅固耐用特性，可以說是喇叭界的猛獸，為戶外野遊探險而生。</p>
                    </div>
                    <div class="col-sm-4">
                        <p><img :src="require(`@/assets/Speakers/TUFTON 古銅黑/7aa880fc-2a98-4b33-8ff1-cc4f648e1349-marshall_tufton_black-and-brass_ content5.jpg`)" alt=""></p>
                        <h2>IPX2 防水等級</h2>
                        <p>路程總是充滿驚喜，這也是 TUFTON 防水設計的存在必要性(IPX2 意指可抵檔微量雨滴)。</p>
                    </div>
                    <div class="col-sm-4">
                        <p><img :src="require(`@/assets/Speakers/TUFTON 古銅黑/4eee0fc2-9cbb-4690-9226-e69f1f756099-marshall_tufton_black-and-brass_ content6.jpg`)" alt=""></p>
                        <h2>連接多個藍牙裝置</h2>
                        <p>TUFTON 可同時連接兩個藍牙裝置，現在你可以跟朋友輪流分享喜愛的播放清單。</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <p><img :src="require(`@/assets/Speakers/TUFTON 古銅黑/57b41fc6-ff33-4368-b0f0-c2cafe68d0cf-marshall_tufton_black-and-brass_ content7.png`)" alt=""></p>
                        <h2>客製化音效</h2>
                        <p>透過 TUFTON 面板上旋轉鈕輕鬆調整低音、高音與音量，讓音樂以你喜愛的方式呈現。</p>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1 ">
                        <p><img :src="require(`@/assets/Speakers/TUFTON 古銅黑/c0582dbf-17a5-454b-8d22-8debf1fb4e7c-marshall-tufton-black-brass-02.png`)" alt=""></p>
                        <h2>快充功能</h2>
                        <p>具備快充功能，讓臨時起意的旅程再也不是問題，充電20分鐘即可提供4小時播放續航力，單次充飽電也只要2.5小時。</p>
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
            <div class="row " id="twobtn">
                <a class="gonow" href="https://shopping.friday.tw/ec2/product?pid=7517148&cid=414447&sid=1&mid=1">馬上選購</a>
                <router-link :to="'/speaker'" class="gonow">回產品列表</router-link>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Tuftonblack",
  data() {
    return {
      open: false,
      counter: 1,
      slides: [
        {
          imgurl:
            "Speakers/TUFTON 古銅黑/7bf0f63e-6c2e-4cba-b8f2-81137e407a8e-marshall-tufton-black-brass-01.png",
        },
        {
          imgurl:
            "Speakers/TUFTON 古銅黑/db5f7c7e-537b-4e17-a7f6-dd0c6a7b4a64-marshall_tufton_black-and-brass_ content8.png",
        },
        {
          imgurl:
            "Speakers/TUFTON 古銅黑/92014c0d-67d6-48cd-b8e6-01cd3845f6fc-marshall-tufton-black-brass-03.png",
        },
      ],
    };
  },
  created() {
    this.$_slidefun(this.counter);
    // this.$_windowcheck();
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
    // $_windowcheck: function () {
    //   if ($(window).width() < 768) {
    //     $(".product_detail .des_block").click(function () {
    //       $(".product_detail .des_content").css("display", "none");
    //       $(this).children(".des_content").css("display", "block");
    //       $(".product_detail .des_block")
    //         .find(".fa-minus")
    //         .removeClass("fa-minus")
    //         .addClass("fa-plus");
    //       $(this).find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    //     });
    //   }
    //   $(".color-dot-wrapper").click(function () {
    //     $(".color-dot-wrapper").removeClass("active-color");
    //     $(this).addClass("active-color");
    //     var active_item = $(this).data("item");
    //     $(".product_main").attr("src", $(this).data("src"));
    //   });
    // },
  },
};

// import $ from jquery;
</script>


<style lang="scss">
@import "~@/assets/helpers/_productinfo";
.scrollanchor {
  background-image: url("~@/assets/Speakers/TUFTON 古銅黑/MARSHALL+(2).jpg");
}
.active,
.modal .modal-content .showslide {
  display: block;
}
</style>