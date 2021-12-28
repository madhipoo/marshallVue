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
