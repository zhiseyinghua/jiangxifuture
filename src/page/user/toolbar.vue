<template>
  <v-app-bar  flat dense absolute>
    <v-icon large>mdi-map</v-icon>   
      <v-btn to="/" text class="text-h6"> 敖岸测绘 </v-btn>
    <v-spacer></v-spacer>
    <v-icon large class="d-flex d-md-none">mdi-account-circle</v-icon>
    <v-app-bar-nav-icon class="d-flex d-md-none"></v-app-bar-nav-icon>
    <v-toolbar-items>
    <v-menu offset-y open-on-hover>
      <!-- 菜单按钮 -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-on="on" text v-bind="attrs" large>
          <span>工单</span>
          <v-icon>expand_more</v-icon>
        </v-btn>
      </template>
      <!-- 下拉列表 -->
      <v-list flat>
        <v-list-item
          v-for="link in links1"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y open-on-hover>
      <!-- 菜单按钮 -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-on="on" text v-bind="attrs" large>
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
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y open-on-hover>
      <!-- 菜单按钮 -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-on="on" text v-bind="attrs" large>
          <v-icon left large>mdi-account-circle</v-icon>
          <span>用户</span>
          <v-icon>expand_more</v-icon>
        </v-btn>
      </template>
      <!-- 下拉列表 -->
      <v-list flat >
        <v-list-item>
          <v-icon left>mdi-account</v-icon>
          <v-list-item-title>账号信息</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-icon left>mdi-location-exit</v-icon>
          <v-list-item-title>退出账号</v-list-item-title>
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
  }),
};
</script>