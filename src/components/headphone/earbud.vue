<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>藍牙耳塞式耳機</h2>
      </div>
      <div class="offset-2 col-4">
        <a href="./Headphones/MINOR II/index.html">
          <img
            :src="require(`@/assets/Headphones/MINOR II/326ad49b-542f-4961-a036-60a4382eeba4-minor-II_black_1.png`)"
            alt=""
            class="product_img"
          />
          <p class="product_info">
            MINOR II
            <br />
            NTD$5,190
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Earbud",
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
