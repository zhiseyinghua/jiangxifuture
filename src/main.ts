import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import VueI18n from "vue-i18n";
import authServies from "./page/auth/auth.servies";
import VueAxios from "vue-axios";
import axios from "./https";
import { AxiosElasticService } from "./common/fromaxios";
import VueAMap from "vue-amap"
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 高德的key
  key: "YOUR_KEY",
  // 插件集合
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor",
  ],
  // 高德 sdk 版本，默认为 1.4.4
  v: "1.4.4",
});
// import VueSocketIO from "vue-socket.io";
// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     // 服务器端地址
//     connection: "http://localhost:3000",
//     vuex: {},
//   })
// );

Vue.config.productionTip = false;
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh-CN", // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
  messages: {
    "zh-CN": require("../common/lang/zh.js"), // 中文语言包
    "en-US": require("../common/lang/en.js"), // 英文语言包
  },
});
Vue.prototype.axios = axios;
Vue.prototype.$vueaxios = VueAxios;

// 路由守卫
// router.beforeEach((to, from, next) => {
//   console.log("main.ts to,from,next", to, from, next);
//   if (AxiosElasticService.checkrouterlogin(to.path) && to.path != "/login") {
//     next({
//       path: "/login",
//       // query: {
//       //   redirect: to.fullPath,
//       // },
//     });
//   } else {
//     console.log("main.ts 已经登录");
//     next();
//   }
// });

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
