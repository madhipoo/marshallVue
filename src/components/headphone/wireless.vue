<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>無線藍牙耳機</h2>
      </div>
      <div class="offset-2 col-4">
        <router-link :to="`/product/modeii`">
          <img
            :src="require(`@/assets/Headphones/MODE II/f854e398-30e3-4f4d-ae28-d480730290e6-mode-ii-black-01.png`)"
            alt=""
            class="product_img"
          />
          <p class="product_info">
            MODE II
            <br />
            NTD$5,790
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wireless",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.offset-2 {
  margin-left: 33.333333%;
}

@media screen and (max-width: 767px) {
  .offset-2 {
    margin-left: 0;
  }
}
</style>
