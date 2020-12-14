import Vue from "vue";
import Router from "vue-router";
import home from "./modules/home";
import news from "./modules/news";
import auth from "./modules/auth";
import user from "./modules/user";
Vue.use(Router);
// 这是一个路由管理的模块，是各个路由的出口
export default new Router({
  // mode:"history",
  routes: [
    auth,
    home,
    news,
    user,
    // {
    //   path:"/",
    //   redirect:home
    // },
    // {
    //   path:"*",
    //   redirect:home
    // }
  ]
});
