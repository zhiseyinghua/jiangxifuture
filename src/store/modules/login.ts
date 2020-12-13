export default {
    namespaced: true,
    state:{
        login: false,
        idtoken: null
    },
    getters: {
        getLogin: (state:any) =>{
            return state
        }
    },
    mutations:{
        loginMutations(state: any,token:string){
            state.login = true
            state.idtoken = token
        }
    },
    actions:{
        loginAction(context:any,token:string) {
            context.commit('loginMutations',token)
        }
    }
}