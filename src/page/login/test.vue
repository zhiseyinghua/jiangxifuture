<template>
  <v-card>
    <v-toolbar>
      <template>
        <v-tabs v-model="tabs" centered>
          <v-tab v-for="n in 2" :key="n"> Item {{ n }} </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card
          class="mx-auto my-16"
          max-width="600"
          min-width="300"
          shaped
          flat
        >
          <v-container fluid>
            <v-row no-gutters>
              <v-form class="mx-auto my-16">
                <v-text-field
                  placeholder="请输入手机号"
                  color="info"
                  outlined
                  clearable
                  dense
                  prepend-inner-icon="mdi-account"
                  class="rounded-pill"
                ></v-text-field>
                <v-text-field
                  color="info"
                  prepend-inner-icon="mdi-lock"
                  placeholder="密码为6-18位英文+数字"
                  outlined
                  clearable
                  dense
                  counter
                  minlength="6"
                  maxlength="18"
                  class="rounded-pill"
                ></v-text-field>
                <v-row no-gutters relative>
                  <v-col cols="8">
                    <v-text-field
                      color="info"
                      placeholder="请输入验证码"
                      outlined
                      clearable
                      dense
                      prepend-inner-icon="mdi-marker-check"
                      class="rounded-pill ma-0"
                    ></v-text-field
                  ></v-col>
                  <v-col>
                    <v-btn
                      class="rounded-pill float-right"
                      color="info"
                      dense
                      outlined
                      >获取验证码</v-btn
                    >
                  </v-col>
                </v-row>
                <v-checkbox class="ma-0 pa-0" color="info">
                  <template v-slot:label>
                    <div class="caption">
                      我同意
                      <a
                        target="_blank"
                        href="http://vuetifyjs.com"
                        @click.stop
                      >
                        《注册协议》
                      </a>
                    </div>
                  </template>
                </v-checkbox>
                <v-btn block class="rounded-pill" color="info" bottom>
                  注册
                </v-btn>
                <div class="text-center caption">
                  已有账号？
                  <a target="_blank" href="http://vuetifyjs.com"> 直接登录 </a>
                </div>
              </v-form>
            </v-row>
          </v-container>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card
          class="mx-auto my-16"
          max-width="600"
          min-width="300"
          shaped
          flat
        >
          <v-container fluid>
            <v-row no-gutters>
              <v-form class="mx-auto my-16">
                <v-text-field
                  placeholder="请输入手机号"
                  color="info"
                  outlined
                  clearable
                  dense
                  prepend-inner-icon="mdi-account"
                  class="rounded-pill"
                ></v-text-field>
                <v-text-field
                  color="info"
                  prepend-inner-icon="mdi-lock"
                  placeholder="密码为6-18位英文+数字"
                  outlined
                  clearable
                  dense
                  counter
                  minlength="6"
                  maxlength="18"
                  class="rounded-pill"
                ></v-text-field>
                <v-row no-gutters relative>
                  <v-col cols="8">
                    <v-text-field
                      color="info"
                      placeholder="请输入验证码"
                      outlined
                      clearable
                      dense
                      prepend-inner-icon="mdi-marker-check"
                      class="rounded-pill ma-0"
                    ></v-text-field
                  ></v-col>
                   <v-col cols="8">
                    <v-text-field
                      color="info"
                      placeholder="请输入验证码"
                      outlined
                      clearable
                      dense
                      prepend-inner-icon="mdi-marker-check"
                      class="rounded-pill ma-0"
                    ></v-text-field
                  ></v-col>
                  <v-col>
                    <v-btn
                      class="rounded-pill float-right"
                      color="info"
                      dense
                      outlined
                      >获取验证码</v-btn
                    >
                  </v-col>
                </v-row>
                <v-checkbox class="ma-0 pa-0" color="info">
                  <template v-slot:label>
                    <div class="caption">
                      我同意
                      <a
                        target="_blank"
                        href="http://vuetifyjs.com"
                        @click.stop
                      >
                        《注册协议》
                      </a>
                    </div>
                  </template>
                </v-checkbox>
                <v-btn block class="rounded-pill" color="info" bottom>
                  注册
                </v-btn>
                <div class="text-center caption">
                  已有账号？
                  <a target="_blank" href="http://vuetifyjs.com"> 直接登录 </a>
                </div>
              </v-form>
            </v-row>
          </v-container>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      tabs: null,
    };
  },
};
</script>