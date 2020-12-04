<template>
  <v-footer color="grey darken-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="grey lighten-1 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>未来时刻</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: ["首页", "新闻中心", "解决方案", "产品中心", "关于我们"],
  }),
};
</script>