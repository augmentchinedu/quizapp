import { createMemoryHistory, createRouter } from "vue-router";

import MainLayout from "../layouts/Main.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    redirect: "/home",
    children: [
      { path: "/home", component: () => import("../pages/Home.vue") },
      { path: "/student", component: () => import("../pages/Student.vue") },
      { path: "/teacher", component: () => import("../pages/Teacher.vue") },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/Error.vue')
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
