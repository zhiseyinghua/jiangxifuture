// import test from "@/page/test/test.vue";

export default {
    path: "/test",
    name: 'test',
    component: ()=> import('@/page/test/test.vue'),
}