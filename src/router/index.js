import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import Homeproduct from "@/components/Homeproduct";

import News from "@/components/News";
import Allnews from "@/components/news/Allnews";
import New1 from "@/components/news/New1";
import New2 from "@/components/news/New2";
import New3 from "@/components/news/New3";
import New4 from "@/components/news/New4";
import New5 from "@/components/news/New5";
import New6 from "@/components/news/New6";
import New7 from "@/components/news/New7";
import New8 from "@/components/news/New8";
import New9 from "@/components/news/New9";
import New10 from "@/components/news/New10";

import Aboutus from "@/components/Aboutus";

import Speaker from "@/components/Speaker";
import SpeakerAll from "@/components/speaker/All";
import Bluetooth from "@/components/speaker/Bluetooth";
import Portable from "@/components/speaker/Portable";
import Smart from "@/components/speaker/Smart";
import Tufton from "@/components/speaker/Tufton";
import Tuftonblack from "@/components/speaker/Tuftonblack";
import Embertonblack from "@/components/speaker/Embertonblack";
import Embertonforest from "@/components/speaker/Embertonforest";
import Embertoncream from "@/components/speaker/Embertoncream";
import Emberton from "@/components/speaker/Emberton";
import Kilburn from "@/components/speaker/Kilburn";
import Kilburnblack from "@/components/speaker/Kilburnblack";
import Stockwell from "@/components/speaker/Stockwell";
import Stockwellblack from "@/components/speaker/Stockwellblack";
import Acton from "@/components/speaker/Acton";
import Woburn from "@/components/speaker/Woburn";
import Uxbridge from "@/components/speaker/Uxbridge";
import Stanmorevoice from "@/components/speaker/Stanmorevoice";
import Stanmorebluetooth from "@/components/speaker/Stanmorebluetooth";

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
      redirect: "homepages",
      name: "Homepage",
      component: Homepage,
      children: [
        {
          path: "homepages",
          name: "Homeproduct",
          component: Homeproduct,
        },
      ],
    },
    {
      path: "/knowus",
      name: "knowus",
      component: Homepage,
      children: [
        {
          path: "",
          name: "News",
          component: News,
          children: [
            {
              path: "allnews",
              name: "allnews",
              component: Allnews,
            },
            {
              path: "new1",
              name: "new1",
              component: New1,
            },
            {
              path: "new2",
              name: "new2",
              component: New2,
            },
            {
              path: "new3",
              name: "new3",
              component: New3,
            },
            {
              path: "new4",
              name: "new4",
              component: New4,
            },
            {
              path: "new5",
              name: "new5",
              component: New5,
            },
            {
              path: "new6",
              name: "new6",
              component: New6,
            },
            {
              path: "new7",
              name: "new7",
              component: New7,
            },
            {
              path: "new8",
              name: "new8",
              component: New8,
            },
            {
              path: "new9",
              name: "new9",
              component: New9,
            },
            {
              path: "new10",
              name: "new10",
              component: New10,
            },
          ],
        },
        {
          path: "aboutus",
          name: "aboutus",
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
    },
    {
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
    },
    {
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
    },
    {
      path: "/product",
      name: "Product",
      component: Homepage,
      children: [
        {
          path: "tufton",
          name: "Tufton",
          component: Tufton,
        },
        {
          path: "tuftonbronzeblack",
          name: "Tuftonblack",
          component: Tuftonblack,
        },
        {
          path: "embertonblack",
          name: "Embertonblack",
          component: Embertonblack,
        },
        {
          path: "embertonforest",
          name: "Embertonforest",
          component: Embertonforest,
        },
        {
          path: "embertoncream",
          name: "Embertoncream",
          component: Embertoncream,
        },
        {
          path: "emberton",
          name: "Emberton",
          component: Emberton,
        },
        {
          path: "kilburn",
          name: "Kilburn",
          component: Kilburn,
        },
        {
          path: "kilburnblack",
          name: "Kilburnblack",
          component: Kilburnblack,
        },
        {
          path: "stockwell",
          name: "Stockwell",
          component: Stockwell,
        },
        {
          path: "stockwellblack",
          name: "Stockwellblack",
          component: Stockwellblack,
        },
        {
          path: "actoniibluetooth",
          name: "Acton",
          component: Acton,
        },
        {
          path: "woburniibluetooth",
          name: "Woburn",
          component: Woburn,
        },
        {
          path: "uxbridge",
          name: "Uxbridge",
          component: Uxbridge,
        },
        {
          path: "stanmorevoice",
          name: "Stanmorevoice",
          component: Stanmorevoice,
        },
        {
          path: "stanmorebluetooth",
          name: "Stanmorebluetooth",
          component: Stanmorebluetooth,
        },
      ],
    },
  ],
});
