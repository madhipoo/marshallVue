<template>
  <div>
    <Header/>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="kvtitle">
            <h2 class="maintitle_content">維修保固</h2>
          </div>
        </div>
      </div>
    </div>

    <section id="repair">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div
              class="nav flex-column nav_pills repairtabs"
              id="v-pills-tab"
            >
            <router-link class="nav_link" :to="'/repair/speaker'" @click.native="$_changeNum(0)" :class="{active: counter === 0 }">線上喇叭維修申請</router-link>
            <router-link class="nav_link" :to="'/repair/headphone'" @click.native="$_changeNum(1)" :class="{active: counter === 1 }">線上耳機維修申請</router-link>
            <router-link class="nav_link" :to="'/repair/maintenance'" @click.native="$_changeNum(2)" :class="{active: counter === 2 }">線上延長保固申請</router-link>
            </div>
          </div>
          <div class="col-md-9">
            <div
              class="tab_content"
            >
              
              <router-view></router-view>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <Info/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/header";
import Info from "@/components/info";
import Footer from "@/components/footer";
export default {
  name: "Repair",
  components:{
    Header,
    Info,
    Footer,
  },
  data(){
    return{
      counter: 0,
    };
  },
  methods: {
    $_changeNum : function(n){
      this.counter = n;
    }
  },
};
</script>

<style  lang="scss" scoped>
/*scrollanchor-start*/

.scrollanchor {
  background-image: url("~@/assets/Repair/marshall-bluetooth-speaker_615e8b9c-fdac-4770-9627-0f3d1684fcd9.jpg");
  background-size: cover;
  background-position: 0 50%;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 35vh;
}

.scrollanchor .container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
}

.scrollanchor .container .row {
  display: flex;
  flex-wrap: wrap;
}

.kvtitle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.kvtitle::after {
  content: "";
  width: 350%;
  height: 150%;
  position: absolute;
  z-index: -1;
  background-color: #000;
  transform: translate(-35%, -73%) rotate(7deg);
}

.maintitle_content {
  color: #fff;
  position: relative;
  font-size: 36px;
}
/*scrollanchor-end*/
/*repair-start*/

#repair .container {
  width: 100%;
  max-width: 1140px;
  margin: 50px auto;
}

#repair .container .row {
  display: flex;
  flex-wrap: wrap;
}

.col-md-3 {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 15px;
  box-sizing: border-box;
}

.col-md-9 {
  flex: 0 0 75%;
  max-width: 75%;
  padding: 0 15px;
  box-sizing: border-box;
}

.repairtabs {
  margin-bottom: 30px;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.nav_link {
  padding: 10px 20px;
  text-decoration: none;
  color: #000;
}

.nav_pills .nav_link.active {
  color: #fff;
  background-color: #777;
}

/*repair-end*/
@media screen and (max-width: 1199px) {
  #repair .container {
    max-width: 960px;
  }
}

@media screen and (max-width: 991px) {
  #repair .container {
    max-width: 720px;
  }
}

@media screen and (max-width: 767px) {
  .scrollanchor .container,
  #repair .container {
    max-width: 540px;
  }

  .kvtitle::after {
    width: 200%;
    height: 160%;
    transform: rotate(7deg) translate(-27%, -60%);
  }
  .col-md-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .nav-link {
    text-align: center;
  }
  .col-md-9 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 575px) {
  .scrollanchor .container,
  #repair .container {
    max-width: 400px;
  }
}
</style>
