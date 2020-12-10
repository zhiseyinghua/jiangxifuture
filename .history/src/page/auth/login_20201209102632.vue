<template>
<v-row no-gutters class="my-15">
  <v-col md="3" offset-md="2" class="col-images">
     <v-img  height="272px"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    ></v-img>

  </v-col>
  <v-col md="5" offset-md="0">
    <v-card class="mx-auto">
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
    </v-card>
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
// </script>
// <style lang="sass" scoped>
// .col-images {
//   background-image : url(../assets/login-a.png);
//   background-repeat:repeat-y;
// }
// </style>