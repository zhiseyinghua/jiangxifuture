import Vue from "vue";
import Vuex from "vuex";
import login from './modules/login';


Vue.use(Vuex);

export default new Vuex.Store({

  modules:{
    login,
  },
  


  state:{
    drawer:false,   //控制navigation-drawer显示和隐藏
  },
  mutations:{
    changeDrawer(state){
      state.drawer = !state.drawer;
    }
  }
});
