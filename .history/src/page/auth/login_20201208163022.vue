<template>
  <v-card class="login-container">
    <v-row no-gutters>
      <v-col class="login-img">
      </v-col>
      <v-col class="login-tab">
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      tabs: null,
      items: ["密码登录", "手机登陆"],
    };
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 600px;
  height: 400px;
  margin: 0 auto;

}
.login-img {
  width: 200px;
    background-color: aqua;
}
.login-tab {
  width: 600px;
    background-color: blueviolet;
}
</style>