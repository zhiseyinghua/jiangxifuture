<template>
  <div>
    <!-- 这是一个导航栏 -->
    <v-row justify="center" style="min-height: 160px;">
      <v-col class="shrink">
        <v-btn class="ma-2" color="primary" @click="expand = !expand">
          Expand Transition
        </v-btn>

        <v-expand-transition>
          <v-app-bar
            style="position:fixed"
            v-show="expand"
            class="mx-auto"
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>
              <v-btn v-on:click="gopagehome" text>
                {{ $t("lang.home.homeOverview") }}
                <!-- 首页概括 -->
              </v-btn>
            </v-toolbar-title>

            <v-toolbar-title>
              <v-btn v-on:click="gopagehomepage" text>
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
            <v-btn v-on:click="changeLangEvent" text>
              {{ $t("lang.home.cutLanguage") }}
              <!-- 切换语言 -->
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>
          <v-card
            
          ></v-card>
        </v-expand-transition>
      </v-col>

      <div class="mx-4 hidden-sm-and-down"></div>

      <v-col class="shrink">
        <v-btn class="ma-2" color="secondary" @click="expand2 = !expand2">
          Expand X Transition
        </v-btn>

        <v-expand-x-transition>
          <v-card
            v-show="expand2"
            height="100"
            width="100"
            class="mx-auto secondary"
          ></v-card>
        </v-expand-x-transition>
      </v-col>
    </v-row>
    <router-view></router-view>
  </div>
</template>
<script>
import router from "@/router";
export default {
  name: "home",
  data() {
    return {
      expand: false,
      expand2: false,
    };
  },
  methods: {
    /**
     * 去首页的方法
     */
    gopagehomepage() {
      router.push("newHomePage");
    },
    gopagehome() {
      router.push("homepage");
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
