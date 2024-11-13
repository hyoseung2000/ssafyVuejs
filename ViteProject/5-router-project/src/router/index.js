import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//router-link와 컴포넌트와의 맵핑관계 표시한 파일

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/other/:code", //params로 넘길 때
      name: "other",
      component: () => import("../views/OtherView.vue"),
    },
    {
      path: "/some", //query로 넘길 때
      name: "some",
      component: () => import("../views/SomeView.vue"),
    },
  ],
});

export default router;
