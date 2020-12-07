// import Vue from "vue";
import Router from "vue-router";
import home from "./modules/home";
import news from "./modules/news";
// 这是一个路由管理的模块，是各个路由的出口
export default new Router({
  routes: [
    home,
    news,
    {
      path:"/"
    }
  ]
});
