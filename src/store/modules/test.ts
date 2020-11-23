/**
 * 定义类型
 */
interface stateType {
  count: number;
  isLogin: string;
}

/**
 * 这里是一个状态管理的文件，用于测试
 */
const state: stateType = {
  count: 12,
  isLogin: "null"
};

const getters = {
  showNum: (state: any) => {
    return "当前最新的数量是【" + state.count + "】";
  }
};
const mutations = {
  add(state: any, count: any) {
    // 变更状态
    state.count += count;
  },
  add1(state: any) {
    // 变更状态beforeEach
    state.count++;
  },
  SET_COLLAPSE(seate: any) {
    console.log("store login");
    seate.isLogin = true;
    sessionStorage.setItem("isLogin", "login");
  }
};

const actions = {
  addAsync(context: any) {
    setTimeout(() => {
      context.commit("add1");
    }, 2000);
  },
  // 带参数
  addAsync2(context: any, step: any) {
    setTimeout(() => {
      context.commit("add", step);
    }, 2000);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
