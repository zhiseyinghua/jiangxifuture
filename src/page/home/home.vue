/**
  *官网首页
 */
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-carousel hide-delimiters cycle height="100%">
          <v-carousel-item
            :aspect-ratio="16 / 7"
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <!-- 新闻中心组件 -->
    <news />
    <!-- 解决方案组件 -->
    <solutions />
  </v-container>
</template>
<script>
import news from "./news-com";
import solutions from "./solutions-com";
export default {
  name: "homepage",
  components: { news, solutions },
  data() {
    return {
      // 轮播图
      items: [
        {
          src: require("@/assets/home/banner/1.png"),
        },
        {
          src: require("@/assets/home/banner/2.png"),
        },
        {
          src: require("@/assets/home/banner/3.png"),
        },
        {
          src: require("@/assets/home/banner/4.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>