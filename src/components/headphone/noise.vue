<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>主動式降噪耳機</h2>
      </div>
      <div class="offset-1 col-4">
        <a href="./Headphones/MONITOR II A.N.C/index.html">
          <img
            :src="require(`@/assets/Headphones/MONITOR II A.N.C/e1e4ce73-069e-46c8-8baa-b13c5f8c507a-hero_marshall_monitor II ANC_product 1.png`)"
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
            :src="require(`@/assets/Headphones/MID A.N.C/c1354018-1669-4890-be3e-d614ed70f4de-pos-marshall-mid-anc-black-01.png`)"
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
  </div>
</template>

<script>
export default {
  name: "Noise",
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
