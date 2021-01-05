<<<<<<< HEAD
import test from "@/page/test/hwq_test.vue";
=======
// import test from "@/page/test/test.vue";
>>>>>>> fa24231b1440d086a436e6b819d0db33f5ab8887

export default {
    path: "/test",
    name: 'test',
    component: ()=> import('@/page/test/test.vue'),
}