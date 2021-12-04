import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import Homeproduct from "@/components/Homeproduct";
import News from "@/components/News";


import Speaker from "@/components/Speaker";
import SpeakerAll from "@/components/speaker/All";
import Bluetooth from "@/components/speaker/Bluetooth";
import Portable from "@/components/speaker/Portable";
import Smart from "@/components/speaker/Smart";

import Headphone from "@/components/Headphone";
import HeadphoneAll from "@/components/headphone/All";
import Earcanal from "@/components/headphone/Earcanal";
import Overear from "@/components/headphone/Overear";
import Noise from "@/components/headphone/Noise";
import Earmuff from "@/components/headphone/Earmuff";
import Earbud from "@/components/headphone/Earbud";
import Wireless from "@/components/headphone/Wireless";

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
      component: Headphone,
      children: [
        {
          path: "/",
          name: "HeadphoneAll",
          component: HeadphoneAll,
        },
        {
          path: "/earcanal",
          name: "Earcanal",
          component: Earcanal,
        },
        {
          path: "/overear",
          name: "Overear",
          component: Overear,
        },
        {
          path: "/noise",
          name: "Noise",
          component: Noise,
        },
        {
          path: "/earmuff",
          name: "Earmuff",
          component: Earmuff,
        },
        {
          path: "/earbud",
          name: "Earbud",
          component: Earbud,
        },
        {
          path: "/wireless",
          name: "Wireless",
          component: Wireless,
        },
      ],
    },
    ,
    {
      path: "/speaker",
      name: "Speaker",
      component: Speaker,
      children: [
        {
          path: "/",
          name: "SpeakerAll",
          component: SpeakerAll,
        },
        {
          path: "/bluetooth",
          name: "bluetooth",
          component: Bluetooth,
        },
        {
          path: "/smart",
          name: "smart",
          component: Smart,
        },
        {
          path: "/portable",
          name: "portable",
          component: Portable,
        },
      ],
    },
  ],
});
