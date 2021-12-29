<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>耳道式耳機</h2>
      </div>
      <div class="offset-1 col-4">
        <router-link :to="`/product/modeeq`">
          <img
            :src="require(`@/assets/Headphones/MODE EQ/f3972b14-1290-4035-84bc-4f7a7b394a96-pos-marshall-mode-eq-01.png`)"
            alt=""
            class="product_img"
          />
          <p class="product_info">
            MODE EQ
            <br />
            NTD$3,190
          </p>
        </router-link>
      </div>
      <div class="col-4">
        <router-link :to="`/product/mode`">
          <img
            :src="require(`@/assets/Headphones/MODE/1ccb5a6e-20c4-489f-ace4-7863660b4983-marshall-mode-01.png`)"
            alt=""
            class="product_img"
          />
          <p class="product_info">
            MODE
            <br />
            NTD$2,290
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Earcanal",
  data() {
    return {
    };
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
