import user from "@/page/user/user.vue";
import account from "@/page/user/account/account.vue";
import safety from "@/page/user/account/safety.vue";

export default {
  path: "/user",
  name: "/user",
  component: user,
  children: [
    { path: "account", name: "account", component: account },
    { path: "safety", name: "safety", component: safety },
  ],
};
