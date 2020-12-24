<template>
  <v-app>
    <overlay></overlay>
    <!-- <tabbar></tabbar>
    <slidebar></slidebar> -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- <foot></foot> -->
  </v-app>
</template>

<script>
// import tabbar from "@/components/tabbar";
// import slidebar from "@/components/slidebar";
// import foot from "@/components/foot";
import overlay from "@/components/overlay";
import authServies from "@/page/auth/auth.servies";
import Bus from "@/common/bus";

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
      this.$store.state.login.idtoken == null,
      this.$store.state.login.idtoken
    );
    if (this.$store.state.login.token == null) {
      authServies.getLocalstore().subscribe(
        (data) => {
          authServies.dispatchlogintoken(data);
        },
        (err) => {
          Bus.$emit("snackbar", {
            text: "请认真填写表单",
            color: "pink",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
        }
      );
    }
  },
  components: { tabbar, slidebar, foot, overlay },
};
</script>

<style lang="scss"></style>
