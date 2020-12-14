import Vue from "vue";
import Router from "vue-router";
import home from "./modules/home";
import news from "./modules/news";
import auth from "./modules/auth";
<<<<<<< HEAD
import login from "./modules/login";
=======
import Auth from "@/page/auth/signin.vue";
import user from './modules/user';
>>>>>>> 0aa5bb864d24a03c01259c5796c31cd7ffabe75c
import solution from "./modules/solution";
import test from "./modules/test";
Vue.use(Router);
// 这是一个路由管理的模块，是各个路由的出口
export default new Router({
  routes: [
<<<<<<< HEAD
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
    }
=======
    {
      path:"/",
      component:Auth
    },
    auth,
    home,
    news,
    user,
    solution,
    
    // {
    //   path:"/",
    //   redirect:home
    // },
    // {
    //   path:"*",
    //   redirect:home
    // }
>>>>>>> 0aa5bb864d24a03c01259c5796c31cd7ffabe75c
  ]
});
