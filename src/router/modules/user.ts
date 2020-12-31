// import user from "@/page/user/user.vue";

export default {
    path: "/user",
    name: 'user',
    component: ()=> import('@//page/user/user.vue')
    
}