import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import home from "../views/home/index";
import alarmList from "@/views/home/pages/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "主页",
    path: "/",
    component: alarmList
  },
  ...home
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
