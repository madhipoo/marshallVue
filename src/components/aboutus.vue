<template>
  <div>
    <div class="scrollanchor">
      <div class="container">
        <div class="row">
          <div class="kvtitle">
            <h2 class="maintitle_content">品牌故事</h2>
          </div>
        </div>
      </div>
    </div>

    <div id="about">
      <div class="container">
        <div class="row">
          <div class="content_p">
            <p class="about_content">
              若說 rock ‘n’ roll 重新創造了這個世界，那麼 Marshall 便是塑造了
              rock ‘n’ roll，沒有任何品牌像 Marshall 一樣能帶給 rock ‘n’ roll
              如此重大的影響。就像所有生命中至高無上的藝術形式一樣，rock ‘n’
              roll 和 Marshall
              都是人類巔峰創造力的產物，它們並非是積累和進化的產物，而是與生俱來就充滿能量和神秘的魅力，讓你的耳朵無法忽視的美好。
            </p>
            <p class="about_content">
              Marshall 搖滾傳奇至今已橫跨半個世紀，在全球各大搖滾現場都能看到
              Marshall 的身影；Marshall
              將無數的演出經驗，及對搖滾的熱情，完美淬鍊於 Marshall
              喇叭與耳機的每個細節，沒有絲毫保留地注入個人的聆聽體驗。
            </p>
            <p class="about_content">現在，一起讓 Marshall 走進你的生活吧！</p>
          </div>
        </div>
        <div class="row">
          <router-link :to="'/speaker'" class="buynow">瀏覽音響全系列</router-link>
          
        </div>
        <div class="row">
          <router-link :to="'/headphone'" class="buynow">瀏覽耳機全系列</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Aboutus",
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
/*scrollanchor-start*/

.scrollanchor {
  background-image: url("~@/assets/knowus/npfXyG.jpg");
  background-size: cover;
  background-position: 0 40%;
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
/*about-start*/

#about .container {
  width: 100%;
  max-width: 1140px;
  margin: 48px auto;
}

#about .container .row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 48px 0;
}

.about_content {
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 24px;
}

.buynow {
  background-color: #333;
  border: 2px solid #333;
  box-sizing: border-box;
  color: #fff;
  padding: 10px 40px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  transition: 0.3s;
}

.buynow:hover {
  color: #000;
  border-color: #000;
  background-color: transparent;
}
/*about-end*/
@media screen and (max-width: 1199px) {
  #about .container {
    max-width: 960px;
  }
}

@media screen and (max-width: 991px) {
  #about .container {
    max-width: 720px;
  }
}

@media screen and (max-width: 767px) {
  #about .container,
  .scrollanchor .container {
    max-width: 540px;
  }
  .kvtitle::after {
    width: 200%;
    height: 160%;
    transform: rotate(7deg) translate(-27%, -60%);
  }
}

@media screen and (max-width: 575px) {
  #about .container {
    max-width: 400px;
  }
}
</style>
