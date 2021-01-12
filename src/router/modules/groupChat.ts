// import groupChat from "@/page/groupChat/index.vue";

export default{
    path:"/groupChat",
    name:"groupChat",
    component: () => import('@/page/groupChat/index.vue')
}