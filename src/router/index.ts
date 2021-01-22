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
import taskSystems from "./modules/task_systems";
import aboutUs from "./modules/aboutUs";
import order from "./modules/order";
Vue.use(Router);
// 这是一个路由管理的模块，是各个路由的出口
const router = new Router({
  // mode: 'history',
  routes: [
    // aboutUs,
    // home,
    // news,
    auth,
    login,
    // solution,
    test,
    user,
    groupChat,
    // newsDetail,
    taskSystems,
    order,
    // aboutUs,
    // {
    //   path:"/",
    //   redirect:'/user'
    // },
    // {
    //   path:"*",
    //   redirect:'/home'
    // },
    {
      path: "*",
      redirect: "/taskSystems/projectDetail",
    },
  ],
});

// 路由拦截
// const token = localStorage.getItem('token');  //获取token值
// router.beforeEach((to, from, next) => {
//   console.log('进入了路由拦截器');
//   console.log(to.fullPath)
//   if (to.matched.some((r) => r.meta.requireAuth)) { //判断是否需要登陆授权
//     if (token) {   //判断是否已经登录
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}   //登录成功后重定向到当前页面
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router;
