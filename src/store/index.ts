import Vue from "vue";
import Vuex from "vuex";
import login from './modules/login';


Vue.use(Vuex);

export default new Vuex.Store({

  modules:{
    login:login ,
  },

  state:{
    drawer:false,   //控制navigation-drawer显示和隐藏
    isShow: true,   //控制导航栏在user页面隐藏
  },
  mutations:{
    changeDrawer(state){
      state.drawer = !state.drawer;
    },
    changeShow(state) {
      state.isShow = !state.isShow;
    }
  }
});
