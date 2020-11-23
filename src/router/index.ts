import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../page/home.vue";
import Router from "vue-router";
import { component } from "vue/types/umd";
import login from "../router/modules/test";

import Test from "../page/test.vue";
// 这是一个路由管理的模块，是各个路由的出口
export default new Router({
  routes: [
    login,
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
