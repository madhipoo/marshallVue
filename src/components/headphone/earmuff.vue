<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>藍牙耳罩式耳機</h2>
      </div>
      <div class="offset-1 col-4">
        <router-link :to="`/product/majoriv`">
          <img
            :src="require(`@/assets/Headphones/MAJOR IV/c5434d78-4b33-4b7e-9532-28352ecd66ca-Major IV_product_1.png`)"
            alt=""
            class="product_img"
          />
          <p class="product_info">
            MAJOR IV
            <br />
            NTD$4,990
          </p>
        </router-link>
      </div>
      <div class="col-4">
        <router-link :to="`/product/majorbluetooth`">
          <img
            :src="require(`@/assets/Headphones/MAJOR III BLUETOOTH/82261fa3-614b-4d6f-965e-335c359bd5df-pos-marshall-major-iii-bt-black-01.png`)"
            alt=""
            class="product_img"
          />
          <p class="product_info">
            MAJOR III BLUETOOTH
            <br />
            NTD$5,990
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Earmuff",
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
