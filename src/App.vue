<template>
  <v-app>
    <overlay></overlay>
    <tabbar></tabbar>
    <slidebar></slidebar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- <foot></foot> -->
  </v-app>
</template>

<script>
import tabbar from "@/components/tabbar";
import slidebar from "@/components/slidebar";
import foot from "@/components/foot";
import overlay from "@/components/overlay";
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  created: function() {
    // 在程序初始化获取本地的token，如果本地不存在token则跳转至登录页面
    console.log(
      "app.vue this.$store.state.login.token == null",
      this.$store.state.login.token == null
    );
    if (this.$store.state.login.token == null) {
      
    }
  },
  components: { tabbar, slidebar, foot, overlay },
};
</script>

<style lang="scss"></style>
