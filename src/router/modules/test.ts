import test from "@/page/test/etest.vue";
import gaode from "@/page/test/hwqtest/gaode.vue"
import execel from "@/page/test/hwqtest/execel-test.vue"
import input from "@/page/test/hwqtest/input.vue"
export default {
  path: "/test",
  name: "test",
  //   component: () => import("@/page/test/test.vue"),
  component: test,
  children: [
    { path: "gaode", name: "gaode", component: gaode },
    { path: "execel", name: "execel", component: execel },
    { path: "input", name: "input", component: input },
    
  ],
};
