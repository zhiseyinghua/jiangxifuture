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
        login(state: any,token:string){
            state.login = true
            state.idtoken = token
        }
    },
    action:{
        login(context:any,token:string) {
            context.commit('login',token)
        }
    }
}