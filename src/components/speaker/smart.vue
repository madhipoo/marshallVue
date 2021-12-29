<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>智慧語音系列</h2>
      </div>
      <div class="offset-1 col-4">
        <router-link :to="'/product/uxbridge'">
          <img
            :src="
              require(`@/assets/Speakers/POS-1-Uxbridge-Black-Alexa-Hires.png`)
            "
            alt=""
            class="product_img"
          />
          <p class="product_info">
            UXBRIDGE VOICE(GOOGLE ASSISTANT)
            <br />
            NTD$8,900
          </p>
        </router-link>
      </div>
      <div class="col-4">
        <router-link :to="'/product/stanmorevoice'"
          ><img
            :src="
              require(`@/assets/Speakers/marshall-stanmore-ii-bt-black-01.png`)
            "
            alt=""
            class="product_img"
          />
          <p class="product_info">
            STANMORE II VOICE(GOOGLE ASSISTANT)
            <br />
            NTD$18,900
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Smart",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.offset-1 {
  margin-left: 16.666667%;
}

@media screen and (max-width: 767px) {
  .offset-1 {
    margin-left: 0;
  }
}
</style>
