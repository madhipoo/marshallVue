<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>藍牙系列</h2>
      </div>
      <div class="col-4" v-for="(item, index) in bluetooth" :key="index">
        <router-link :to="`${item.gotoweb}`">
          <img
            :src="require(`@/assets/${item.productimg}`)"
            alt=""
            class="product_img"
          />
          <p class="product_info">
            {{ item.title }}
            <br />
            {{ item.price }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bluetooth",
  data() {
    return {
      bluetooth: [
        {
          productimg:
            "Speakers/ACTON II BLUETOOTH/ddfda794-393e-4a91-ab7a-8c1622f83393-ACTON-II.png",
          title: "ACTION II BLUETOOTH",
          price: "NTD$11,900",
          gotoweb: "/product/actoniibluetooth",
        },
        {
          productimg:
            "Speakers/STANMORE II BLUETOOTH/9cb31f9e-e073-4591-93c9-0130d0c42f69-STANMORE-II.png",
          title: "STANMORE II BLUETOOTH",
          price: "NTD$17,900",
          gotoweb: "/product/stanmorebluetooth",
        },
        {
          productimg:
            "Speakers/WOBURN II BLUETOOTH/72f10a9f-0f27-4639-b2e6-013a5b31c02a-WOBURN-II.png",
          title: "WOBURN II BLUETOOTH",
          price: "NTD$23,900",
          gotoweb: "/product/woburniibluetooth",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
