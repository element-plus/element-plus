import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Button from "./components/button/doc/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/button",
    component: Button
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;