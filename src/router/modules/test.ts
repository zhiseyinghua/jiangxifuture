import test from "@/page/test/etest.vue";
import gaode from "@/page/test/hwqtest/gaode.vue"
export default {
  path: "/test",
  name: "test",
  //   component: () => import("@/page/test/test.vue"),
  component: test,
  children: [
    { path: "gaode", name: "gaode", component: gaode },
  ],
};
