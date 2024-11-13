import { createRouter, createWebHistory } from "vue-router";
import CustomerListView from "@/views/CustomerListView.vue";
import { ref } from "vue";

const isLogin = ref(false);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CustomerListView,
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../views/CustomerListView.vue"),
    },
    {
      path: "/insert",
      name: "insert",
      component: () => import("../views/CustomerInsertView.vue"),

      beforeEnter: (to, from) => {
        if (isLogin.value == false) {
          alert("로그인 해 주세요");
          return { name: "home" };
        } else {
          alert("등록 페이지로 이동합니다!");
        }
      },
    },
    {
      path: "/detail/:num",
      name: "detail",
      component: () => import("../views/CustomerDetailView.vue"),
    },
    {
      path: "/other",
      name: "other",
      component: () => import("../views/OtherView.vue"),

      beforeEnter: (to, from) => {
        if (isLogin.value == false) {
          isLogin.value = true;
          alert("로그인 되었습니다");
        } else {
          isLogin.value = false;
          alert("로그아웃 되었습니다");
        }
        return { name: "home" };
      },
    },
  ],
});

export default router;
