<template>
  <!-- 这是一个导航栏 -->
  <v-app-bar app>
    <v-container class="py-0 fill-height" app>
      <div><!-- 放公司logo图标 --></div>
      <v-app-bar-nav-icon class="d-flex d-md-none"  @click.stop="handleChangeDrawer"></v-app-bar-nav-icon>
      <v-toolbar
        dense
        flat
        max-width="500"
        class="d-none d-md-flex transparent"
      >
        <v-toolbar-title>
          <v-btn to="home" text>
            {{ $t("lang.home.homeOverview") }}
            <!-- 首页概括 -->
          </v-btn>
        </v-toolbar-title>
        <v-toolbar-title>
          <v-btn to="news" text>
            {{ $t("lang.home.newCenter") }}
            <!-- 新闻中心 -->
          </v-btn>
        </v-toolbar-title>
        <v-toolbar-title>
          <v-btn to="solution" text>
            解决方案
            <!-- 解决方案 -->
          </v-btn>
        </v-toolbar-title>
      </v-toolbar>
      <v-spacer></v-spacer>
      <!-- 搜索框 -->
      <v-responsive class="d-none d-sm-flex" max-width="800" min-widht="200">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>

      <v-spacer></v-spacer>
      
      <v-avatar color="primary d-none d-sm-flex" size="45"></v-avatar>
      <v-btn v-on:click="changeLangEvent" text class="d-none d-sm-flex">
        {{ $t("lang.home.cutLanguage") }}
        <!-- 切换语言 -->
      </v-btn>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    changeLangEvent() {
      if (this.$i18n.locale === "zh-CN") {
        this.$i18n.locale = "en-US"; //关键语句
        console.log("en-US");
      } else {
        this.$i18n.locale = "zh-CN"; //关键语句
        console.log("zh-CN");
      }
    },
    //改变navigation-drawer显示和隐藏的函数
    handleChangeDrawer(){
      this.$store.commit("changeDrawer");
    }
  },
};
</script>
