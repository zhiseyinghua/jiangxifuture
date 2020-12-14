import Vue from "vue";
import Router from "vue-router";
import home from "./modules/home";
import news from "./modules/news";
import auth from "./modules/auth";
import login from "./modules/login";
import Auth from "@/page/auth/signin.vue";
import solution from "./modules/solution";
import test from "./modules/test";
Vue.use(Router);
// 这是一个路由管理的模块，是各个路由的出口
export default new Router({
  routes: [
    home,
    news,
    auth,
    login,
    solution,
    test,
    {
      path:"/",
      redirect:home
    },
    {
      path:"*",
      redirect:home
    },
  ]
});
