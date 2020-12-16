<template>
  <v-navigation-drawer permanent absolute class="mt-12"  >
    <v-list>
      <v-list-item v-for="link in links"
          :key="link.text"
          router
          :to="link.route">
          <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
  <v-list-item-title>{{ link.text }}</v-list-item-title>
  </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
       links: [
      { text: "提交工单", route: "/" },
      { text: "我的工单", route: "/" },
    ],
      // items: [
      //   { text: "账号信息", icon: "mdi-view-dashboard" },
      //   { text: "在线支持", icon: "mdi-help-box" },
      //   { text: "工单", icon: "mdi-image" },
      //   { text: "订单", icon: "mdi-help-box" },
      //   { text: "收支明细", icon: "mdi-help-box" },
      //   { text: "账单", icon: "mdi-help-box" },
      //   { text: "发票", icon: "mdi-help-box" },
      // ],
      right: null,
    };
  },
};
</script>