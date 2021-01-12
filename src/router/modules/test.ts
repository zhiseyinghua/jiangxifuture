import test from "@/page/test/hwq_test.vue";

export default {
    path: "/test",
    name: 'test',
    component: ()=> import('@/page/test/hwq_test.vue'),
}