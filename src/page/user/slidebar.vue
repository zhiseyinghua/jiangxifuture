<template>
  <v-container>
    <v-navigation-drawer
      permanent
      absolute
      v-model="drawer"
      width="170"
      dark
      color="#303445"
    >
      <!-- expand-on-hover 目前无发做到按钮和悬停可以同时控制侧边栏-->

      <v-list nav flat dense>
        <v-list-group v-for="item in items" :key="item.title">
          <template v-slot:activator>
            <v-icon left>{{ item.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            router
            :to="child.route"
          >
            <v-list-item-content>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-icon left>mdi-clipboard-file</v-icon>
            <v-list-item-content>
              <v-list-item-title>费用中心</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>主页</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>订单管理</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>费用账单</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>收支明细</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>发票与合同</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="link in links" :key="link.title">
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template> 
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: "mdi-account-cog-outline",
          title: "账号中心",
          route: "/user/account",
          items: [
            {
              title: "账号信息",
              route: "/user/account",
            },
            {
              title: "成员管理",
              route: "/",
            },
            {
              title: "账号安全",
              route: "/",
            },
          ],
        },
        {
          icon: "mdi-file-document-multiple",
          title: "工单系统",
          route: "/user/account",
          items: [
            { title: "在线帮助", route: "/" },
            {
              title: "我的工单",
              route: "/news",
            },
            {
              title: "新建工单",
              route: "/login",
            },
          ],
        },
      ],
      links: [
        {
          title: "发票管理",
          icon: "mdi-newspaper-variant-multiple",
          route: "/user/account",
        },
        {
          title: "合同管理",
          icon: "mdi-newspaper-variant-multiple",
          route: "/user/account",
        },
        {
          title: "邮寄地址管理",
          icon: "mdi-newspaper-variant-multiple",
          route: "/user/account",
        },
      ],
    };
  },
};
</script>