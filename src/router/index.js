import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import Homeproduct from "@/components/Homeproduct";
import News from "@/components/News";
import Aboutus from "@/components/Aboutus";


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


import Ques from "@/components/repair/Ques";
import Tabpane1 from "@/components/repair/Tabpane1";
import Tabpane2 from "@/components/repair/Tabpane2";
import Tabpane3 from "@/components/repair/Tabpane3";
import Tabpane4 from "@/components/repair/Tabpane4";

import Repair from "@/components/repair/Repair";
import Form1 from "@/components/repair/Form1";
import Form2 from "@/components/repair/Form2";
import Form3 from "@/components/repair/Form3";
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
        {
          path: "aboutus",
          name: "Aboutus",
          component: Aboutus,
        },
      ],
    },
    {
      path: "/headphone",
      name: "Headphone",
      component: Headphone,
      children: [
        {
          path: "",
          name: "HeadphoneAll",
          component: HeadphoneAll,
        },
        {
          path: "earcanal",
          name: "Earcanal",
          component: Earcanal,
        },
        {
          path: "overear",
          name: "Overear",
          component: Overear,
        },
        {
          path: "noise",
          name: "Noise",
          component: Noise,
        },
        {
          path: "earmuff",
          name: "Earmuff",
          component: Earmuff,
        },
        {
          path: "earbud",
          name: "Earbud",
          component: Earbud,
        },
        {
          path: "wireless",
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
          path: "",
          name: "SpeakerAll",
          component: SpeakerAll,
        },
        {
          path: "bluetooth",
          name: "Bluetooth",
          component: Bluetooth,
        },
        {
          path: "smart",
          name: "Smart",
          component: Smart,
        },
        {
          path: "portable",
          name: "Portable",
          component: Portable,
        },
      ],
    }, {
      path: "/ques",
      name: "Ques",
      component: Ques,
      children: [
        {
          path: "speaker",
          name: "Tabpane1",
          component: Tabpane1,
        },
        {
          path: "headphone",
          name: "Tabpane2",
          component: Tabpane2,
        },
        {
          path: "maintenance",
          name: "Tabpane3",
          component: Tabpane3,
        },
        {
          path: "instructions",
          name: "Tabpane4",
          component: Tabpane4,
        },
      ],
    }, {
      path: "/repair",
      name: "Repair",
      component: Repair,
      children: [
        {
          path: "speaker",
          name: "Form1",
          component: Form1,
        },
        {
          path: "headphone",
          name: "Form2",
          component: Form2,
        },
        {
          path: "maintenance",
          name: "Form3",
          component: Form3,
        },
      ],
    }
  ],
});
