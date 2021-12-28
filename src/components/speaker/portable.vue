<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>攜帶式系列</h2>
      </div>
      <div class="col-4" v-for="(item, index) in portablearr"
        :key="index">
        <router-link :to="`${item.gotoweb}`">
          <img
            :src="require(`@/assets/${item.productimg}`)"
            alt=""
            class="product_img"
          />
          <p class="product_info">
            {{item.title}}
            <br />
            {{item.price}}
          </p>
        </router-link>
      </div>
      <div class="offset-2 col-4">
        <router-link :to="'/product/tufton'">
          <img
            :src="require(`@/assets/Speakers/TUFTON/64990405-6827-4c1b-baab-5b25c867ebf9-marshall_tufton_1.png`)"
            alt=""
            class="product_img"
          />
          <p class="product_info">
            TUFTON (經典黑)
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
  name: "Portable",
  data(){
    return{
      portablearr:[{
        productimg:"Speakers/EMBERTON FOREST/be1e409b-5fd5-47c7-8f1d-e4d814046aca-marshall-emberton-forest-pos-02.png",
        title:"EMBEPTON(FOREST森林綠)",
        price:"NTD$5,790",
        gotoweb:"/product/embertonforest",
      },{
        productimg:"Speakers/EMBERTON CREAM/63f1430e-4334-47b0-a4be-c04b7427d9c7-marshall-emberton-cream-pos-02.png",
        title:"EMBEPTON(CREAM奶油白)",
        price:"NTD$5,790",
        gotoweb:"/product/embertoncream",
      },{
        productimg:"Speakers/EMBERTON 古銅黑/7cd58108-687b-416f-9d62-99cb5e322743-Emberton BB_1.png",
        title:"EMBEPTON(古銅黑)",
        price:"NTD$5,790",
        gotoweb:"/product/embertonblack",
      },{
        productimg:"Speakers/Emberton/d2f9a6f3-6161-44da-b705-27e01e5b8f67-Emberton 1.png",
        title:"EMBEPTON(經典黑)",
        price:"NTD$5,790",
        gotoweb:"/product/emberton",
      },{
        productimg:"Speakers/STOCKWELL II 古銅黑/66e0d0f8-6763-46fd-ac5b-c805799a85b2-Stockwell II BB_1.png",
        title:"STOCKWELL II(古銅黑)",
        price:"NTD$7,900",
        gotoweb:"./Speakers/STOCKWELL II 古銅黑/index.html",
      },{
        productimg:"Speakers/STOCKWELL II/120c2222-8490-4f37-b661-bd486fd8b559-Stockwell_II_1.png",
        title:"STOCKWELL II(經典黑)",
        price:"NTD$7,900",
        gotoweb:"./Speakers/STOCKWELL II/index.html",
      },{
        productimg:"Speakers/KILBURN II 古銅黑/bfab10ec-daba-4f20-9514-d39cf61b6009-marshall-kilburn-ii-black-brass-01.png",
        title:"KILBURN II(古銅黑)",
        price:"NTD$10,900",
        gotoweb:"./Speakers/KILBURN II 古銅黑/index.html",
      },{
        productimg:"Speakers/KILBURN II/5536b7b6-c882-442b-b4a5-a05e097dd897-marshall_kilburn_II_black_1 new.png",
        title:"KILBURN II(經典黑)",
        price:"NTD$10,900",
        gotoweb:"./Speakers/KILBURN II/index.html",
      },{
        productimg:"Speakers/TUFTON 古銅黑/7bf0f63e-6c2e-4cba-b8f2-81137e407a8e-marshall-tufton-black-brass-01.png",
        title:"TUFTON (古銅黑)",
        price:"NTD$18,900",
        gotoweb:"/product/tuftonbronzeblack",
      },],
    }
  }
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
