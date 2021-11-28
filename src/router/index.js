import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import Homeproduct from "@/components/Homeproduct";
import News from "@/components/News";
import Headphone from "@/components/Headphone";
import Speaker from "@/components/Speaker";
Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [ 
    {
      path: "/",
      redirect:"homepages",
      name: "Homepage",
      component: Homepage,
      children: [
        {
          path: "homepages",
          name: "Homeproduct",
          component: Homeproduct,
        }
      ],
    }, {
      path: "/news",
      name: "konwus",
      component: Homepage,
      children: [
        {
          path: "",
          name: "News",
          component: News,
        },
      ],
    },
    {
      path: "/headphone",
      name: "Headphone",
      component: Homepage,
      children: [
        {
          path: "/",
          name: "All",
          component: Headphone,
        },
      ],
    },
    ,
    {
      path: "/speaker",
      name: "Speaker",
      component: Homepage,
      children: [
        {
          path: "/",
          name: "All",
          component: Speaker,
        },
      ],
    },
  ],
});
