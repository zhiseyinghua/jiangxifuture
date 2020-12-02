// import Vue from "vue";
import Router from "vue-router";
//导入模块
import home from "./modules/home";
import news from "./modules/news";
import user from "./modules/user";

// 导入页面组件

// 这是一个路由管理的模块，是各个路由的出口
export default new Router({
  routes: [
    home,
    news,
    user,
    // 重定向到home
    {
      path:"",
      redirect:'/home'
    },
    {
      path:"*",
      redirect:'/home'
    }
  ]
});
