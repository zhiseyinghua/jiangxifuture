import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import VueI18n from "vue-i18n";
import { ValidationProvider } from 'vee-validate';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.component('ValidationProvider', ValidationProvider);

const i18n = new VueI18n({
  locale: "zh-CN", // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
  messages: {
    "zh-CN": require("../common/lang/zh.js"), // 中文语言包
    "en-US": require("../common/lang/en.js") // 英文语言包
  }
});

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
