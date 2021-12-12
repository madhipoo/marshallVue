<template>
  <div>
    <Header />
    <div class="banner"></div>

    <div class="productlist">
      <div class="product_menu">
        <div class="container">
          <u1 class="nav">
            <li>
              <router-link
                :to="'/headphone'"
                :class="{ active: counter === 0 }"
                @click.native="$_changeNum(0)"
                >全部</router-link
              >
            </li>
            <li>
              <router-link
                :to="'/headphone/earcanal'"
                :class="{ active: counter === 1 }"
                @click.native="$_changeNum(1)"
                >耳道式</router-link
              >
            </li>
            <li>
              <router-link
                :to="'/headphone/overear'"
                :class="{ active: counter === 2 }"
                @click.native="$_changeNum(2)"
                >耳罩式</router-link
              >
            </li>
            <li>
              <router-link
                :to="'/headphone/noise'"
                :class="{ active: counter === 3 }"
                @click.native="$_changeNum(3)"
                >主動式降噪</router-link
              >
            </li>
            <li>
              <router-link
                :to="'/headphone/earmuff'"
                :class="{ active: counter === 4 }"
                @click.native="$_changeNum(4)"
                >藍牙耳罩式</router-link
              >
            </li>
            <li>
              <router-link
                :to="'/headphone/earbud'"
                :class="{ active: counter === 5 }"
                @click.native="$_changeNum(5)"
                >藍牙耳塞式</router-link
              >
            </li>
            <li>
              <router-link
                :to="'/headphone/wireless'"
                :class="{ active: counter === 6 }"
                @click.native="$_changeNum(6)"
                >無線藍牙</router-link
              >
            </li>
          </u1>
        </div>
      </div>
      <div class="product_data">
        <div class="container">
          <div class="tab-content">
            <div class="tab-pane">
                <router-view></router-view>
              <!-- <div class="row">
                <div class="col-12">
                  <h2>耳道式耳機</h2>
                </div>
                <div class="offset-1 col-4">
                  <a href="./Headphones/MODE EQ/index.html">
                    <img
                      src="@/assets/Headphones/MODE EQ/f3972b14-1290-4035-84bc-4f7a7b394a96-pos-marshall-mode-eq-01.png"
                      alt=""
                      class="product_img"
                    />
                    <p class="product_info">
                      MODE EQ
                      <br />
                      NTD$3,190
                    </p>
                  </a>
                </div>
                <div class="col-4">
                  <a href="./Headphones/MODE/index.html">
                    <img
                      src="@/assets/Headphones/MODE/1ccb5a6e-20c4-489f-ace4-7863660b4983-marshall-mode-01.png"
                      alt=""
                      class="product_img"
                    />
                    <p class="product_info">
                      MODE
                      <br />
                      NTD$2,290
                    </p>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h2>耳罩式耳機</h2>
                </div>

                <div class="offset-2 col-4">
                  <a href="./Headphones/MAJOR III/index.html">
                    <img
                      src="@/assets/Headphones/MAJOR III/ca29db5a-7c29-49bf-8ba6-e4998c7cc17d-major-III-black_1.png"
                      alt=""
                      class="product_img"
                    />
                    <p class="product_info">
                      MAJOR III
                      <br />
                      NTD$3,290
                    </p>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h2>主動式降噪耳機</h2>
                </div>
                <div class="offset-1 col-4">
                  <a href="./Headphones/MONITOR II A.N.C/index.html">
                    <img
                      src="@/assets/Headphones/MONITOR II A.N.C/e1e4ce73-069e-46c8-8baa-b13c5f8c507a-hero_marshall_monitor II ANC_product 1.png"
                      alt=""
                      class="product_img"
                    />
                    <p class="product_info">
                      MONITOR II A.N.C
                      <br />
                      NTD$10,990
                    </p>
                  </a>
                </div>
                <div class="col-4">
                  <a href="./Headphones/MID A.N.C/index.html">
                    <img
                      src="@/assets/Headphones/MID A.N.C/c1354018-1669-4890-be3e-d614ed70f4de-pos-marshall-mid-anc-black-01.png"
                      alt=""
                      class="product_img"
                    />
                    <p class="product_info">
                      MID A.N.C
                      <br />
                      NTD$10,990
                    </p>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h2>藍牙耳罩式耳機</h2>
                </div>
                <div class="offset-1 col-4">
                  <a href="./Headphones/MAJOR IV/index.html">
                    <img
                      src="@/assets/Headphones/MAJOR IV/c5434d78-4b33-4b7e-9532-28352ecd66ca-Major IV_product_1.png"
                      alt=""
                      class="product_img"
                    />
                    <p class="product_info">
                      MAJOR IV
                      <br />
                      NTD$4,990
                    </p>
                  </a>
                </div>
                <div class="col-4">
                  <a href="./Headphones/MAJOR III BLUETOOTH/index.html">
                    <img
                      src="@/assets/Headphones/MAJOR III BLUETOOTH/82261fa3-614b-4d6f-965e-335c359bd5df-pos-marshall-major-iii-bt-black-01.png"
                      alt=""
                      class="product_img"
                    />
                    <p class="product_info">
                      MAJOR III BLUETOOTH
                      <br />
                      NTD$5,990
                    </p>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h2>藍牙耳塞式耳機</h2>
                </div>
                <div class="offset-2 col-4">
                  <a href="./Headphones/MINOR II/index.html">
                    <img
                      src="@/assets/Headphones/MINOR II/326ad49b-542f-4961-a036-60a4382eeba4-minor-II_black_1.png"
                      alt=""
                      class="product_img"
                    />
                    <p class="product_info">
                      MINOR II
                      <br />
                      NTD$5,190
                    </p>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h2>無線藍牙耳機</h2>
                </div>
                <div class="offset-2 col-4">
                  <a href="./Headphones/MODE II/index.html">
                    <img
                      src="@/assets/Headphones/MODE II/f854e398-30e3-4f4d-ae28-d480730290e6-mode-ii-black-01.png"
                      alt=""
                      class="product_img"
                    />
                    <p class="product_info">
                      MODE II
                      <br />
                      NTD$5,790
                    </p>
                  </a>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <Info />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header";
import Info from "@/components/info";
import Footer from "@/components/footer";
export default {
  name: "Headphone",
  data(){
      return{
          counter:0,
      };
  },
  components: {
    Header,
    Info,
    Footer,
  },
  methods: {
      $_changeNum: function(n){
          this.counter = n;
      },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/helpers/_productmenu";
.banner {
  background-image: url("~@/assets/banner2.jpg");
}
</style>
