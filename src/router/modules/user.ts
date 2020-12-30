import user from "@/page/user/user.vue";
import account from "@/page/user/account/account.vue";

export default {
  path: "/user",
  name: "/user/:id",
  component: user,
  children: [{ path: "account", name: "account", component: account }],
};
