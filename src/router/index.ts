import Vue from "vue";
import Router from "vue-router";
import home from "./modules/home";
import news from "./modules/news";
import auth from "./modules/auth";
import login from "./modules/login";
import groupChat from "./modules/groupChat";
// import Auth from "@/page/auth/signin.vue";
import solution from "./modules/solution";
import test from "./modules/test";
import user from "./modules/user";
import newsDetail from "./modules/newsDetail";
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
    user,
    groupChat,
    newsDetail,
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
