<template>
  <div>
    <Header/>
    <div class="banner"></div>
     <div class="productlist">
        <div class="product_menu">
            <div class="container">
                <u1 class="nav">
                    <li>
                        <router-link :to="'speaker'" :class="{ active: counter === 0 }" @click.native="$_changeNum(0)">全部</router-link>
                    </li>
                    <li>
                        <router-link :to="'smart'" :class="{ active: counter === 1 }" @click.native="$_changeNum(1)">智慧語音系列</router-link>
                        
                    </li>
                    <li>
                        <router-link :to="'bluetooth'" :class="{ active: counter === 2 }" @click.native="$_changeNum(2)">藍牙系列</router-link>
                        
                    </li>
                    <li>
                        <router-link :to="'portable'" :class="{ active: counter === 3 }" @click.native="$_changeNum(3)">攜帶式系列</router-link>
                        
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
    <Info/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Info from '@/components/info'
import Footer from '@/components/footer'
export default {
  name:'Speaker',
  data(){
      return{
          counter : 0,
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
}
</script>

<style lang="scss">
@import "~@/assets/helpers/_productmenu";
.banner {background-image: url("~@/assets/banner1.jpg");}
</style>
