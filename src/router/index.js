import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import Homeproduct from "@/components/Homeproduct";
import News from "@/components/News";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
      children: [
        {
          path: "",
          name: "Homeproduct",
          component: Homeproduct,
        },
        {
          path: "/news",
          name: "News",
          component: News,
        },
      ],
    },
  ],
});
