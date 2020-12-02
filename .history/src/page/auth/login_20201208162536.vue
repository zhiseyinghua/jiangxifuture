<template>
  <v-card class="login-container">
    <v-row no-gutters>
      <v-col class="login-img">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-col>
      <v-col class="login-tab">
       
          <template v-slot:extension>
            <v-tabs v-model="tabs" centered>
              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </template>


        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-title class="headline"> An awesome title </v-card-title>
              <v-card-text>
                <p class="mb-0">
                  Ut leo. Suspendisse potenti. Duis vel nibh at velit
                  scelerisque suscipit. Fusce pharetra convallis urna.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
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
}
.login-tab {
  width: 600px;
}
</style>