import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // === 主佈局 === 巢狀路由
    {
      // path 使用者在瀏覽器要輸入的路徑
      path: "/main",
      // component 要呈現的哪個頁面（元件）
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "shop",
          component: () => import("@/views/ShopView.vue"),
        },
        {
          path: "profile",
          component: () => import("@/views/ProfileView.vue"),
        },
        {
          path: "cart",
          component: () => import("@/views/CartView.vue"),
        },
      ]
    },


  ],
})

export default router
