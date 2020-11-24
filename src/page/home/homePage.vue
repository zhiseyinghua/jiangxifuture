

<template>
  <div>
    <v-carousel hide-delimiters cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <router-view></router-view>
  </div>
</template>
<script>

/**
 * 这个是网站的首页
 */
export default {
  name: "homepage",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "",
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
