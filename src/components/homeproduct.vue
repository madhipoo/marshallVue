<template>
  <div>
    <div class="slider">
      <div
        class="myslider fade"
        v-for="(item, index) in myslide"
        :key="index"
        :class="{ active: counter === index }"
      >
        <div class="txt">
          <h1>{{ item.title }}</h1>
          <p>{{ item.context }}</p>
        </div>
        <p class="button">
          <router-link :to="`${item.gotoweb}`" class="knewnow"
            >了解更多</router-link
          >
        </p>
        <img
          :src="require(`@/assets/${item.sliderimg}`)"
          alt=""
          style="width: 100%; height: 100%"
        />
      </div>

      <a class="prev" @click.prevent="$_plusSlides(-1)">&#10094;</a>
      <a class="next" @click.prevent="$_plusSlides(1)">&#10095;</a>
      <div class="dotsbox" style="text-align: center">
        <span
          class="dot"
          @click.prevent="$_currentSlide(0)"
          :class="{ active: counter === 0 }"
        ></span>
        <span
          class="dot"
          @click.prevent="$_currentSlide(1)"
          :class="{ active: counter === 1 }"
        ></span>
        <span
          class="dot"
          @click.prevent="$_currentSlide(2)"
          :class="{ active: counter === 2 }"
        ></span>
      </div>
    </div>

    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="col1">
            <div class="title">
              <h1 class="maintitle">
                <p>Stanmore 復古棕</p>
                <p>精彩復出，把握機會</p>
              </h1>
            </div>
            <p class="button">
              <router-link :to="'/product/stanmorebluetooth'" class="buynow"
                >了解更多</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="product">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4" v-for="(item, index) in product" :key="index">
            <div class="description">
              <h5 class="producttitle">{{ item.producttitle }}</h5>
              <p class="button">
                <router-link :to="`${item.gotoweb}`" class="buynow"
                  >馬上選購</router-link
                >
              </p>
            </div>

            <img
              :src="require(`@/assets/${item.productimg}`)"
              alt=""
              class="product-pic"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <router-link :to="'/repair/speaker'" class="other">
              <h1 class="othertitle">保固</h1>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link :to="'/repair/speaker'" class="other">
              <h1 class="othertitle">維修</h1>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link :to="'/ques/speaker'" class="other">
              <h1 class="othertitle">常見問題</h1>
            </router-link>
          </div>
          <div class="othertitle-list">
            <div class="other">
              <div class="othertitle_m">
                <router-link :to="'/repair/speaker'">保固</router-link>
              </div>
              <div class="othertitle_m">
                <router-link :to="'/repair/speaker'">維護</router-link>
              </div>
              <div class="othertitle_m">
                <router-link :to="'/ques/speaker'">常見問題</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homeproduct",
  data() {
    return {
      counter: 0,
      myslide: [
        {
          title: "Acton II",
          context: "藍牙音箱，限時搶購",
          gotoweb: "/product/actoniibluetooth",
          sliderimg: "幻燈片1.jpg",
        },
        {
          title: "EMBERTON",
          context: "搖滾，一手掌握",
          gotoweb: "/product/emberton",
          sliderimg: "幻燈片2.jfif",
        },
        {
          title: "BUILT FOR LOUD",
          context: "MoDE II 重磅登場，限定通路搶購中",
          gotoweb: "/product/modeii",
          sliderimg: "幻燈片3.jpeg",
        },
      ],
      product: [
        {
          producttitle: "Bluetooth英搖經典",
          gotoweb: "/product/woburniibluetooth",
          productimg: "英國搖滾.jfif",
        },
        {
          producttitle: "Major IV",
          gotoweb: "/product/majoriv",
          productimg: "marshall_majorIV_1005 .jpg",
        },
        {
          producttitle: "Stockwell II藍芽喇叭",
          gotoweb: "/product/stockwell",
          productimg: "手提式音箱.jfif",
        },
      ],
      timer: null,
    };
  },
  created() {
    this.$_slidefun(this.counter);
    this.timer = setInterval(() => this.$_autoSlide(), 8000);
  },
  methods: {
    $_slidefun: function (n) {
      if (n >= this.myslide.length) {
        this.counter = 0;
      }
      if (n < 0) {
        this.counter = this.myslide.length - 1;
      }
    },
    $_plusSlides: function (n) {
      this.counter += n;
      this.$_slidefun(this.counter);
      this.$_resetTimer();
    },
    $_currentSlide: function (n) {
      this.counter = n;
      this.$_slidefun(this.counter);
      this.$_resetTimer();
    },
    $_autoSlide: function () {
      this.counter += 1;
      this.$_slidefun(this.counter);
    },
    $_resetTimer: function () {
      clearInterval(this.timer);
      this.timer = setInterval(() => this.$_autoSlide(), 8000);
    },
  },
};
</script>
<style scoped lang="scss">
/*slider-start*/
.slider {
  position: relative;
  width: 100%;
  background: #2c3e50;
  .myslider {
    height: 100vh;
    display: none;
    overflow: hidden;
    .txt {
      position: absolute;
      color: #fff;
      letter-spacing: 2px;
      line-height: 35px;
      top: 40%;
      left: 15%;
      animation-name: posi;
      animation-duration: 2s;
      z-index: 1;
      h1 {
        display: inline-block;
        background-color: #000;
        color: #fff;
        font-weight: 900;
        margin: 10px;
      }
      p {
        font-weight: 700;
        font-size: 20px;
      }
    }
    img {
      object-fit: cover;
    }
    .knewnow {
      position: absolute;
      color: #000;
      bottom: 20%;
      left: 15%;
      background-color: #fff;
      border: 2px solid #fff;
      box-sizing: border-box;
      text-decoration: none;
      font-size: 20px;
      padding: 10px 15px;
      margin: 0 30px;
      animation-name: posi;
      animation-duration: 2s;
      transition: 0.3s;
    }
    .knewnow:hover {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  .active {
    display: block;
  }
  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 50px;
    padding: 15px;
    cursor: pointer;
    transition: 0.1s;
    color: #fff;
    text-decoration: none;
  }
  .prev:hover,
  .next:hover {
    color: #3498db;
  }
  .next {
    right: 0;
  }
  .dotsbox {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 20px;
    cursor: pointer;
    .dot {
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 3px solid #fff;
      border-radius: 50%;
      margin: 0 10px;
      cursor: pointer;
    }
    .active,
    .dot:hover {
      border-color: #3498db;
    }
  }
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }
}

@keyframes fade {
  from {
    opacity: 0.7;
  }
  to {
    opacity: 1;
  }
}

@keyframes posi {
  from {
    left: 25%;
  }
  to {
    left: 15%;
  }
}
/*slider-end*/
/*scrollanchor-start*/

.scrollanchor {
  background: url("~@/assets/7ef904ecc870de1bf4ac1d485860b3e1.jfif");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 25px;
    .row .col1 {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      .title {
        position: relative;
        top: -30px;
        .maintitle {
          p {
            color: #fff;
          }
          p:last-child {
            display: inline;
            color: #333;
            background-color: rgba(156, 156, 156, 0.562);
          }
        }
      }
      .button {
        position: relative;
        bottom: -60px;
        .buynow {
          color: #000;
          background-color: #fff;
          border: 2px solid #fff;
          box-sizing: border-box;
          text-decoration: none;
          font-size: 20px;
          padding: 10px 15px;
          margin: 0 30px;
          transition: 0.3s;
        }
        .buynow:hover {
          color: #fff;
          background-color: rgba(0, 0, 0, 0);
        }
      }
    }
  }
}
/*scrollanchor-end*/
/*product-start*/

.product {
  position: relative;
  .container-fluid {
    width: 100%;
    margin: 0 auto;
    /* padding: 0 15px; */
    .row {
      display: flex;
      flex-wrap: wrap;
      .col-md-4 {
        position: relative;
        width: 100%;
        max-width: 33.33333%;
        overflow: hidden;
        .description {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 2;
          .button {
            position: absolute;
            bottom: 50px;
            cursor: pointer;
            .buynow {
              color: #000;
              background-color: #fff;
              border: 2px solid #fff;
              box-sizing: border-box;
              text-decoration: none;
              font-size: 20px;
              padding: 10px 15px;
              margin: 0 30px;
              transition: 0.3s;
            }

            .buynow:hover {
              color: #fff;
              background-color: rgba(0, 0, 0, 0);
            }
          }
          .producttitle {
            color: #fff;
            background-color: #000;
            display: inline-block;
            padding: 5px;
            font-size: 24px;
            margin: 20px;
          }
        }
        .other {
          display: block;
          background-image: radial-gradient(
              circle at 50% 0,
              rgba(99, 99, 99, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            linear-gradient(to bottom, #454545, #454545);
          width: 100%;
          height: 327px;
          .othertitle {
            position: absolute;
            color: #fff;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: color 0.3s;
          }
        }
      }
    }
  }
}

.product .container-fluid .row .col-md-4 .product-pic {
  max-width: 100%;
  z-index: -1;
  display: block;
  transform: scale(1);
  transition: 0.6s;
}

.product .container-fluid .row .col-md-4:hover .product-pic {
  transform: scale(1.3);
}

img {
  vertical-align: middle;
  object-fit: cover;
  border-style: none;
}

.product .container-fluid .row .col-md-4 .other:hover .othertitle {
  color: #000;
}
.product .container-fluid .row .othertitle-list {
  display: none;
}
/*product-end*/
@media screen and (max-width: 1199px) {
  .container {
    max-width: 1140px;
  }
}

@media screen and (max-width: 991px) {
  .container {
    max-width: 960px;
  }
  .producttitle {
    font-size: 20px;
  }
  .buynow {
    font-size: 18px;
  }
}

@media screen and (max-width: 767px) {
  .container {
    max-width: 720px;
  }
  .slider .myslider .txt {
    line-height: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: posi2;
    animation-duration: 2s;
  }
  .slider .myslider .knewnow {
    animation-name: none;
    left: 40%;
    transform: translateX(-20%);
  }
  @keyframes posi2 {
    from {
      top: 35%;
    }
    to {
      top: 50%;
    }
  }
  .slider .myslider .txt h1 {
    text-align: center;
    font-size: 24px;
  }
  .slider .myslider .txt p {
    text-align: center;
    font-size: 13px;
  }
  .scrollanchor .container .row .col1 .title .maintitle {
    font-size: 20px;
  }
  .scrollanchor .container .button .buynow {
    font-size: 16px;
  }
  .product .container-fluid .row .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .product .container-fluid .row .col-md-4 .other {
    display: none;
  }
  .product .container-fluid .row .othertitle-list {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: block;
    background-image: radial-gradient(
        circle at 50% 0,
        rgba(99, 99, 99, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      linear-gradient(to bottom, #454545, #454545);
  }
  .product .container-fluid .row .othertitle-list .other {
    height: 80vw;
    width: 100%;
    display: block;
  }
  .product .container-fluid .row .othertitle-list .other .othertitle_m {
    position: absolute;
    display: inline-block;
    width: 150px;
    text-align: center;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #fff;
    padding: 5px;
    font-size: 18px;
    font-weight: 700;
  }
  .product .container-fluid .row .othertitle-list .other .othertitle_m a {
    display: block;
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 100%;
    transition: color 0.3s;
  }
  .product .container-fluid .row .othertitle-list .other .othertitle_m:hover a {
    color: #000;
  }
  .product
    .container-fluid
    .row
    .othertitle-list
    .other
    .othertitle_m:nth-child(1) {
    margin-top: 22%;
  }
  .product
    .container-fluid
    .row
    .othertitle-list
    .other
    .othertitle_m:nth-child(2) {
    margin-top: 42%;
  }
  .product
    .container-fluid
    .row
    .othertitle-list
    .other
    .othertitle_m:nth-child(3) {
    margin-top: 62%;
  }
}

@media screen and (max-width: 575px) {
  .container {
    max-width: 540px;
  }
  .slider .myslider .txt h1 {
    text-align: center;
    font-size: 20px;
  }
  .slider .myslider .knewnow {
    left: 40%;
    transform: translateX(-30%);
  }
}
</style>
