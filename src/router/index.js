import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/article-viewer/:slug/",
    name: "DetailsView",
    component: () => import("@/views/DetailsView.vue"),
  },
  {
    path: "*",
    name: "ErrorView",
    meta: { noRedirect: true },
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
