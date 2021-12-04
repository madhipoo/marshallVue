<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>耳罩式耳機</h2>
      </div>

      <div class="offset-2 col-4">
        <a href="./Headphones/MAJOR III/index.html">
          <img
            :src="require(`@/assets/Headphones/MAJOR III/ca29db5a-7c29-49bf-8ba6-e4998c7cc17d-major-III-black_1.png`)"
            alt=""
            class="product_img"
          />
          <p class="product_info">
            MAJOR III
            <br />
            NTD$3,290
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overear",
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
