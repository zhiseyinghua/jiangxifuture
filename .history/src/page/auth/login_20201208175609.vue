<template>
<v-row>
  <v-col cols="12" md="5" xs="5">
    <div pink>
    </div>
  </v-col>
  <v-col cols="12" md="7" xs="7">
  <div class="login-container">   
    <v-card class="login-card">
      <v-toolbar dark flat>
        <template v-slot:extension>
          <v-tabs v-model="tabs" centered>
            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="用户名"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="密码"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="手机号"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="验证码"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
  </v-col>
  </v-row>
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
.login-card {
  width: 300px;


}
.login-container {
  background-color: brown;
  width: 350px;
  height: 350px;
  margin-top: 100px;
    padding: 25px;
}
</style>