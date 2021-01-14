<template>
  <v-navigation-drawer
    app
    temporary
    disable-route-watcher
    hide-overlay
    class="d-flex d-md-none"
    v-model="$store.state.drawer"
  >
    <v-list nav dense>
      <v-list-item-group
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item v-for="(item, i) in tabList" :key="i" :to="item.link" @click="handleChangeDrawer">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "sliderbar",
  components: {},
  data: () => ({
    group: null,
    tabList: [
      { title: "首页概述", link: "home" },
      { title: "新闻中心", link: "news" },
      { title: "解决方案", link: "solution" },
      { title: "关于我们", link: "software" },
    ],
  }),
  methods: {
    handleChangeDrawer() {
      this.$store.commit("changeDrawer");
    },
  }
};
</script>
