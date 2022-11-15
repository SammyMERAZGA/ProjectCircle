import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Landing from "@/views/Landing/Landing.vue";
import Home from "@/views/Home/Home.vue";
import Context from "@/views/Context/Context.vue";
import Moe from "@/views/Moe/Moe.vue";
import Moa from "@/views/Moa/Moa.vue";
import Scrum from "@/views/Scrum/Scrum.vue";
import Unsuccessful from "@/views/Unsuccessful/Unsuccessful.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/context",
    name: "Context",
    component: Context,
  },
  {
    path: "/play/moe",
    name: "Moe",
    component: Moe,
  },
  {
    path: "/play/moa",
    name: "Moa",
    component: Moa,
  },
  {
    path: "/play/scrum",
    name: "Scrum",
    component: Scrum,
  },
  {
    path: "/unsuccessful",
    name: "unsuccessful",
    component: Unsuccessful,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
