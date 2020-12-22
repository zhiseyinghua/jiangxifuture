<template>
  <v-app-bar flat dense app>
    <v-icon large>mdi-map</v-icon>
    <!-- <v-responsive :aspect-ratio="1"> -->
    <!-- <span >
    <v-img :src="require('@/assets/logo.png')" width="70" height="70"  aspect-ratio=1></v-img>
</span> -->
    <v-btn to="/" text class="text-h6"> 敖岸测绘 </v-btn>
    <v-spacer></v-spacer>
    <!-- <v-icon large class="d-flex d-md-none">mdi-account-circle</v-icon>
    <v-app-bar-nav-icon class="d-flex d-md-none"></v-app-bar-nav-icon> -->
    <v-toolbar-items>
      <v-menu offset-y open-on-hover>
        <!-- open-on-hover 悬停时打开 a -->
        <!-- 菜单按钮 -->
        <v-list nav flat dense>
          <v-list-group v-for="item in items" :key="item.text">
            <template v-slot:activator>
              <v-icon left>{{ item.icon }}</v-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <!-- 下拉列表 -->
            <v-list-item
              v-for="child in item.items"
              :key="child.title"
              router
              :to="child.route"
            >
              <v-icon left>{{ child.icon }}</v-icon>
              <v-list-item-content>
                <v-list-item-title>{{ child.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-menu>
      <v-menu offset-y open-on-hover>
        <!-- 菜单按钮 -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" text v-bind="attrs">
            <span>费用</span>
            <v-icon>expand_more</v-icon>
          </v-btn>
        </template>
        <!-- 下拉列表 -->
        <v-list flat>
          <v-list-item
            v-for="link in links2"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title class="text-caption">{{
              link.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y open-on-hover>
        <!-- 菜单按钮 -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" text v-bind="attrs">
            <!-- <v-icon left>mdi-account-circle</v-icon> -->
            <span>用户</span>
            <v-icon>expand_more</v-icon>
          </v-btn>
        </template>
        <!-- 下拉列表 -->
        <v-list flat>
          <v-list-item
            v-for="link in links3"
            :key="link.text"
            router
            :to="link.route"
            ><v-icon left small>{{ link.icon }}</v-icon>
            <v-list-item-title class="text-caption">{{
              link.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    model: 1,
    drawer: false,
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
          { title: "在线帮助", icon: "mdi-chat-outline", route: "/" },
          {
            title: "我的工单",
            icon: "mdi-file-document-outline",
            route: "/news",
          },
          {
            title: "新建工单",
            icon: "mdi-file-document-edit-outline",
            route: "/login",
          },
        ],
      },
      {
        icon: "mdi-clipboard-file",
        title: "费用中心",
        route: "/user/account",
        items: [
          {
            title: "订单",
            icon: "mdi-file-check-outline",
            route: "/user/account",
          },
          { title: "账单", icon: "mdi-wallet-outline", route: "/user/account" },
          {
            title: "收支明细",
            icon: "mdi-file-document-multiple-outline",
            route: "/user/account",
          },
          {
            title: "发票",
            icon: "mdi-newspaper-variant-multiple",
            route: "/user/account",
          },
        ],
      },
    ],
    links1: [
      { text: "提交工单", route: "/" },
      { text: "我的工单", route: "/" },
    ],
    links2: [
      { text: "订单合同", route: "/" },
      { text: "收支明细", route: "/" },
      { text: "账单", route: "/" },
      { text: "发票", route: "/" },
    ],
    links3: [
      { text: "账号信息", icon: "mdi-account", route: "/user/account" },
      { text: "退出账号", icon: "mdi-location-exit", route: "/" },
    ],
  }),
};
</script>