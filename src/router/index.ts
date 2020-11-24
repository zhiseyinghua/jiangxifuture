// import Vue from "vue";
import Router from "vue-router";
import test from "@/router/modules/test";
import home from "@/router/modules/home";


// 这是一个路由管理的模块，是各个路由的出口
export default new Router({
  routes: [
    /**
     *  主页的路由
     */
    home,
    /**
     *  测试
     */
    test
  ]
});
