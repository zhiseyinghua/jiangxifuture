/**
  *官网首页
 */
<template>
  <div>
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
  </div>
</template>
<script>
import deviceCard from "@/page/home/library/deviceCard.vue";
export default {
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