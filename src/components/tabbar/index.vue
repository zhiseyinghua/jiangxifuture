<template>
  <div>
    <!-- 这是一个导航栏 -->
    <v-app-bar style=" position: fixed; z-index:4">
      <div></div>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-btn router-link to="home" text>
          {{ $t("lang.home.homeOverview") }}
          <!-- 首页概括 -->
        </v-btn>
      </v-toolbar-title>

      <v-toolbar-title>
        <v-btn router-link to="news" text>
          {{ $t("lang.home.newCenter") }}
          <!-- 新闻中心 -->
        </v-btn>
      </v-toolbar-title>

      <v-toolbar-title>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              {{ $t("lang.home.newCenter") }}
              <!-- 新闻中心 -->
            </v-btn>
          </template>
          <v-card>
            <a
              ><v-list-item>
                <v-list-item-title link>
                  <v-btn>123</v-btn>
                </v-list-item-title>
              </v-list-item>
            </a>
            <a
              ><v-list-item>
                <v-list-item-title link>
                  <v-btn>123</v-btn>
                </v-list-item-title>
              </v-list-item>
            </a>
          </v-card>
        </v-menu>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar color="primary" size="45"></v-avatar>
      <v-btn v-on:click="changeLangEvent" text>
        {{ $t("lang.home.cutLanguage") }}
        <!-- 切换语言 -->
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import router from "@/router";
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    /**
     * 去首页的方法
     */
    handleGoHome() {
      router.push("/home");
    },
    handleGoNews() {
      router.push("/news");
    },

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
