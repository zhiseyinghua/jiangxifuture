/**
 * 这是一个路由管理的模块，是各个路由的出口
 */
import Router from "vue-router";
//导入模块
import home from "./modules/home";
import news from "./modules/news";
import solution from "./modules/solution";
import product from "./modules/product";
import aboutUS from "./modules/aboutUS";


const router =  new Router({
  mode:'history',
  routes: [
    home,
    news,
    solution,
    product,
    aboutUS,
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
export default router;
