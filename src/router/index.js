import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: () => import("@/views/index/Index.vue"),
    redirect: "/homepage",
    children: [
      {
        path: "homepage",
        component: () => import("@/views/homepage/Index.vue"),
        name: "homepage",
        meta: { title: "Dashboard", icon: "dashboard", affix: true }
      }
    ]
  }
];

export default new Router({
  routes
});
