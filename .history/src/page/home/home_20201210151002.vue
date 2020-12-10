/**
  *官网首页
 */
<template>
  <div>
<<<<<<< HEAD
    <!-- 这是一个轮播图 -->
    <v-carousel hide-delimiters cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

    <!-- 一段文字介绍 -->
    <div class="bannerSlogan">
      <div>
        <div class="enSlogan">
          了解我们的产品
        </div>
        <div class="cnSlogan">
          专业专注，提供涵盖测绘地理信息全产业链的产品和服务
        </div>
      </div>
    </div>

    <!-- 我们的产品 -->
    <vm-deviceCard :devicemsg="devicemsg"></vm-deviceCard>
=======
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
>>>>>>> 08c7e80 (merge)
  </div>
</template>
<script>
import deviceCard from "@/page/home/library/deviceCard.vue";
export default {
<<<<<<< HEAD
  components: {
    "vm-deviceCard": deviceCard,
  },
  name: "homepage",
  data() {
    return {
      scrollTop: 111,
      devicemsg: {
        url: "http",
      },
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
=======
  name: "home",
  data() {
    return {
      expand: false,
      expand2: false,
>>>>>>> 08c7e80 (merge)
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.enSlogan {
  margin: auto;
  display: block;
  font-size: 50px;
}
.bannerSlogan {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  text-align: center;
  color: gray;
  pointer-events: none;
}
.cnSlogan {
  font-size: 25px;
}
</style>