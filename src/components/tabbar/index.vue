<template>
  <!-- 这是一个导航栏 -->
  <v-app-bar app style="position: fixed; z-index: 4" hide-on-scroll>
    <!-- <v-toolbar> -->
    <v-toolbar-title>
      <img
        src="http://www.southsurvey.com//www/south/e3459703-8341-4919-9956-0d8a856af19e.png"
        alt=""
      />
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-toolbar>
      <v-toolbar-title>
        <router-link to="/home" tag="li">{{
          $t("lang.home.homeOverview")
        }}</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title>
        <router-link to="/news" tag="li">{{
          $t("lang.home.newCenter")
        }}</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title>
        <router-link to="/solution" tag="li">解决方案</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title>
        <router-link to="/product" tag="li">产品中心</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title>
        <router-link to="/aboutUS" tag="li">关于我们</router-link>
      </v-toolbar-title>
    </v-toolbar>
    

    <v-spacer></v-spacer>
    <v-text-field label="Main input" hide-details="auto"></v-text-field>
    <v-btn v-on:click="changeLangEvent" text>
      {{ $t("lang.home.cutLanguage") }}
      <!-- 切换语言 -->
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <!-- 头像 -->
    <v-avatar>
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>
  </v-app-bar>
</template>
<script>
export default {
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
  },
};
</script>

<style lang="scss" scoped>
</style>