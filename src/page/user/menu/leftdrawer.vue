<template>
  <!-- 左导航栏 -->
<v-navigation-drawer
      v-model="drawer"
      absolute
    >
      <!--absolute 绝对定位 -->
      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<script lang="ts">
export default({
  name: "leftdrawer",
  data() {
    return {
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', '账号信息'],
        ['mdi-send', '管理中心'],
        ['mdi-delete', '我的订单'],
        ['mdi-alert-octagon', '账号设置'],
      ],
    };
  },
});
</script>