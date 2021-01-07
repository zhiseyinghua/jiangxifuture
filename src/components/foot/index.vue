<template>
  <v-footer padless app absolute>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="item in links"
        :key="item.link"
        color="73, 73, 73"
        :to="item.link"
        text
        rounded
        class="my-4"
      >
        {{ item.title }}
      </v-btn>
      <v-col class="py-4 text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>FutureTime</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {title:"首页概览",link:"/home"},
      {title:"新闻中心",link:"/news"},
      {title:"解决方案",link:"/solution"},
      {title:"关于我们",link:"/aboutUs"}
    ],
  }),
};
</script>