<template>
  <v-footer color="245, 246, 246" padless app absolute>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="73, 73, 73"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="245, 246, 246 py-4 text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>FutureTime</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      "首页概览",
      "新闻中心",
      "解决方案",
      "产品中心",
      "下载中心",
      "关于我们",
    ],
  }),
};
</script>
 