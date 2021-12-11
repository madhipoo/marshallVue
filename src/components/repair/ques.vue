<template>
  <div>
    <Header/>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="kvtitle">
            <h2 class="maintitle_content">常見問題</h2>
          </div>
        </div>
      </div>
    </div>

    <section id="faq">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="nav flex-column nav-pills faqtabs">
              <router-link class="nav_link" :to="'/ques/speaker'" @click.native="$_changeNav(0)" :class="{active : counter === 0}">喇叭</router-link>
              <router-link class="nav_link" :to="'/ques/headphone'" @click.native="$_changeNav(1)" :class="{active : counter === 1}">耳機</router-link>
              <router-link class="nav_link" :to="'/ques/maintenance'" @click.native="$_changeNav(2)" :class="{active : counter === 2}">維修保固</router-link>
              <router-link class="nav_link" :to="'/ques/instructions'" @click.native="$_changeNav(3)" :class="{active : counter === 3}">操作說明</router-link>
            </div>
          </div>
          <div class="col-md-9">
            <div class="tab-content">
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
import Header from '@/components/header'
import Info from '@/components/info'
import Footer from '@/components/footer'
export default {
  name: "Ques",
  data() {
    return {
      counter : 0,
      mynav: [
        {
          text: "喇叭",
          gotoweb: "/ques/speaker"
        },
        {
          text: "耳機",
          gotoweb: "/ques/headphone"
        },
        {
          text: "維修保固",
          gotoweb: "/ques/maintenance"
        },
        {
          text: "操作說明",
          gotoweb: "/ques/instructions"
        },
      ],
    };
  },
  methods: {
    $_changeNav: function(n){
      this.counter = n;
    }
  },
  components:{
    Header,
    Info,
    Footer,
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/helpers/_tabpane";
/*scrollanchor-start*/

.scrollanchor {
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
/*faq-start*/

#faq .container {
  width: 100%;
  max-width: 1140px;
  margin: 50px auto;
}

#faq .container .row {
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

.faqtabs {
  margin-bottom: 30px;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.nav_link {
  cursor: pointer;
  padding: 10px 20px;
  text-decoration: none;
  color: #000;
}

.nav-pills .nav_link.active {
  color: #fff;
  background-color: #777;
}

/*faq-end*/
@media screen and (max-width: 1199px) {
  #faq .container {
    max-width: 960px;
  }
}

@media screen and (max-width: 991px) {
  #faq .container {
    max-width: 720px;
  }
}
@media screen and (max-width: 767px) {
  .scrollanchor .container {
    max-width: 720px;
  }

  .kvtitle::after {
    width: 200%;
    height: 160%;
    transform: rotate(7deg) translate(-27%, -60%);
  }
  #faq .container {
    max-width: 540px;
  }
  .col-md-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .nav_link {
    text-align: center;
  }
  .col-md-9 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .d-none {
    display: none;
  }
}
@media screen and (max-width: 575px) {
  #faq .container {
    max-width: 400px;
  }
}
</style>
