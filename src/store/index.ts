import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    drawer:false,   //控制navigation-drawer显示和隐藏
  },
  mutations:{
    changeDrawer(state){
      state.drawer = !state.drawer;
    }
  }
});
