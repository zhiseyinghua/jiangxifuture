<template>
  <v-navigation-drawer
    permanent
    absolute
    :mini-variant.sync="mini"
    v-model="drawer"
    width="170"
    dark
    color="#303445"
  >
    <!-- expand-on-hover 目前无发做到按钮和悬停可以同时控制侧边栏-->
    <v-btn text block @click.stop="mini = !mini"> |||</v-btn>
    <v-list nav flat dense>
      <v-list-group
        v-for="item in items"
        :key="item.text"  
      >
        <template v-slot:activator>
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          router
          :to="child.route"
        >
          <v-icon left>{{ child.icon }}</v-icon>
          <v-list-item-content>
            <v-list-item-title>{{child.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template> 
<script>
export default {
  data() {
    return {
      mini: true,
      drawer: true,
      items: [
        {
          icon: "mdi-account",
          title: "账号中心",
          route: "/user/account",
          items: [
            {
              title: "账号信息",
              icon: "mdi-account-cog-outline",
              route: "/user/account",
            },
            
          ],
        },
        {
          icon: "mdi-file-document-multiple",
          title: "工单系统",
          route: "/user/account",
          items: [
            { title: "在线帮助",icon: "mdi-chat-outline", route: "/" },
            { title: "我的工单",icon: "mdi-file-document-outline", route: "/news" },
            { title: "新建工单",icon: "mdi-file-document-edit-outline", route: "/login" },
          ],
        },
        {
          icon: "mdi-clipboard-file",
          title: "费用中心",
          route: "/user/account",
          items: [
            { title: "订单",icon: "mdi-file-check-outline", route: "/user/account" },
            { title: "账单", icon: "mdi-wallet-outline",route: "/user/account" },
            { title: "收支明细",icon: "mdi-file-document-multiple-outline", route: "/user/account" },
            { title: "发票", icon: "mdi-newspaper-variant-multiple",route: "/user/account" },
          ],
        },
      ],
    };
  },
};
</script>