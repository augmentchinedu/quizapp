import { createWebHistory, createRouter } from "vue-router";
import { useAppStore } from "../store";

import MainLayout from "../layouts/Main.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Web Quiz App",
        component: () => import("../pages/Home.vue"),
      },
      {
        path: "/student",
        name: "Student's Quiz Catalog",
        component: () => import("../pages/Student.vue"),
      },
      {
        path: "/teacher",
        name: "Teacher's Subjects",

        component: () => import("../pages/Teacher.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const store = useAppStore();
  let isInitialized = store.app.isInitialized;

  if (!isInitialized) await store.init();

  next();
});

export default router;
