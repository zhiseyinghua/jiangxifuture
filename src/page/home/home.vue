<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-btn v-on:click="gopagehome" text>
          首页
        </v-btn>
      </v-toolbar-title>

      <v-toolbar-title>
        <v-btn v-on:click="gopagehomepage" text>
          新闻中心
        </v-btn>
      </v-toolbar-title>
      <v-toolbar-title>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              解决方案
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
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view></router-view>
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
    gopagehomepage() {
      router.push("news");
    },
    gopagehome() {
      router.push("homepage");
    },

    changeLangEvent() {
      this.$confirm("你确定切换语言吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        if (this.$i18n.locale === "zh-CN") {
          this.$i18n.locale = "en-US"; //关键语句
          console.log("en-US");
        } else {
          this.$i18n.locale = "zh-CN"; //关键语句
          console.log("zh-CN");
        }
      });
    },
  },
};
</script>
