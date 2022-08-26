import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/DesignWorks",
    name: "DesignWorks",
    component: () => import("../views/DesignWorks.vue"),
  },
  {
    path: "/WebWorks",
    name: "WebWorks",
    component: () => import("../views/WebWorks.vue"),
  },
  {
    path: "/ContactMe",
    name: "ContactMe",
    component: () => import("../views/ContactMe.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
