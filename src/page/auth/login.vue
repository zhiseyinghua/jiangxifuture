<template>
  <div>
    <div style="height:150px"></div>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <p>江西敖岸数据</p>
          <v-card>
            <v-toolbar dark color="primary">
             
              <v-tabs v-model="tab" align-with-title>
                <v-tabs-slider color="yellow"></v-tabs-slider>

                <v-tab :key="items[0]">登录/注册</v-tab>
                <v-tab :key="items[1]">免密登录</v-tab>
              </v-tabs>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-tabs-items v-model="tab">
                <v-tab-item :key="items[0]">
                  <v-form>
                    <v-text-field
                      prepend-icon="person"
                      name="login"
                      label="手机号"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      prepend-icon="lock"
                      name="password"
                      label="密码"
                      type="password"
                    ></v-text-field>
                    <v-btn style="float: right" text color="#D32F2F"
                      >忘记密码</v-btn
                    >
                  </v-form>
                </v-tab-item>
                <v-tab-item :key="items[1]">
                  手机号注册
                </v-tab-item>
              </v-tabs-items>

              <br />
              <br />
              <v-btn block color="primary">登录/注册</v-btn>
            </v-card-text>

            <v-spacer></v-spacer>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      items: ["login", "seedSMS"],
      tab: null,
      number: 111,
      name: "",
    };
  },
};
</script>
