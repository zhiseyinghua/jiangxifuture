// import Vue from "vue";
import Router from "vue-router";
import test from "@/router/modules/test";
import home from "@/router/modules/home";
import news from "@/router/modules/news";
import Home from "@/page/home/home.vue";
import Homepage from "@/page/home/homePage.vue";
import NewHomePage from "@/page/news/newHomePage.vue";


// 这是一个路由管理的模块，是各个路由的出口
export default new Router({
  routes: [
    {
      path: "",
      name: 'home',
      component: Home,
      children: [
        home,
        news,
        {
          path: '',
          component: Homepage
        },
      ]
    }
  ]
});
