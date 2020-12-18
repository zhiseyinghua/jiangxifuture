<template>
  <v-navigation-drawer
    permanent
    absolute
    width="110"
    :mini-variant.sync="mini"
    v-model="drawer"
  >
    <!-- expand-on-hover 目前无发做到按钮和悬停可以同时控制侧边栏-->
    <v-btn text block @click.stop="mini = !mini"> |||</v-btn>
    <v-list flat nav dense>
        <v-list-item
          v-for="link1 in links"
          :key="link1.text"
          router
          :to="link1.route"
        >
          <v-icon small left>{{ link1.icon }}</v-icon>
          <v-list-item-title>{{ link1.text }} </v-list-item-title>
        </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template> 
<script>
export default {
  data() {
    return {
      mini: false,
      drawer: true,
      links: [
        {
          text: "账号信息",
          icon: "mdi-account-cog-outline",
          route: "/account",
        },
        { text: "在线支持", icon: "mdi-chat-outline", route: "/" },
        {
          text: "工单",
          icon: "mdi-file-document-multiple-outline",
          route: "/",
        },
        {
          text: "订单",
          icon: "mdi-file-check-outline",
          route: "/",
        },
        { text: "账单", icon: "mdi-wallet-outline", route: "/" },
        {
          text: "收支明细",
          icon: "mdi-file-document-multiple-outline",
          route: "/",
        },
        { text: "发票", icon: "mdi-newspaper-variant-multiple", route: "/" },
      ],
    };
  },
};
</script>