<template>
  <v-row class="my-16">
    <v-col cols="10" md="4" offset="1" sm="8" offset-sm="2" offset-md="4">
      <v-card shaped>
        <v-btn @click="testjoin">test填写</v-btn>
        <v-btn @click="logintest">登录</v-btn>
        <v-row no-gutters>
          <v-col cols="8" offset="2">
            <v-toolbar flat> </v-toolbar>
            <v-card class="mx-auto" width="400" flat>
              <v-tabs v-model="tabs" centered fixed-tabs>
                <v-tabs-slider color="info"></v-tabs-slider>
                <v-tab
                  v-for="item in items"
                  :key="item"
                  class="text-center justify-center"
                >
                  {{ item }}
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tabs">
                <v-tab-item>
                  <v-card flat>
                    <v-row no-gutters>
                      <v-form class="my-7" ref="form">
                        <v-text-field
                          placeholder="请输入手机号"
                          color="info"
                          outlined
                          clearable
                          dense
                          v-model="moblie"
                          :rules="[rules.required, rules.moblie]"
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
                          v-model="password"
                          counter
                          minlength="6"
                          maxlength="18"
                          :rules="[
                            rules.required,
                            rules.counter,
                            rules.password,
                          ]"
                          :append-icon="isshow ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="isshow ? 'text' : 'password'"
                          @click:append="isshow = !isshow"
                          class="rounded-pill"
                        ></v-text-field>
                        <v-btn
                          block
                          class="rounded-pill"
                          color="info"
                          bottom
                          @click="validate"
                        >
                          登录
                        </v-btn>
                        <v-row class="caption">
                          <a
                            target="_blank"
                            href="http://vuetifyjs.com"
                            @click.stop
                          >
                            忘记密码？
                          </a>
                          <v-spacer></v-spacer>
                          <a
                            target="_blank"
                            href="http://vuetifyjs.com"
                            @click.stop
                          >
                            立即注册
                          </a>
                        </v-row>
                      </v-form>
                    </v-row>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-row no-gutters>
                      <v-form class="mx-auto my-7" ref="form">
                        <v-text-field
                          placeholder="请输入手机号"
                          color="info"
                          outlined
                          clearable
                          dense
                          v-model="moblie"
                          :rules="[rules.required, rules.moblie]"
                          prepend-inner-icon="mdi-account"
                          class="rounded-pill"
                        ></v-text-field>
                        <v-row no-gutters relative>
                          <v-col cols="12" sm="7">
                            <v-text-field
                              color="info"
                              placeholder="请输入短信码"
                              outlined
                              clearable
                              dense
                              v-model="check"
                              :rules="[rules.required]"
                              prepend-inner-icon="mdi-marker-check"
                              class="rounded-pill ma-0"
                            ></v-text-field
                          ></v-col>
                          <v-col
                            cols="12"
                            sm="4"
                            class="text-xs-caption offset-sm-1"
                          >
                            <v-btn
                              class="rounded-pill float-right"
                              color="info"
                              dense
                              outlined
                              >获取短信码</v-btn
                            >
                          </v-col>
                        </v-row>
                        <v-btn
                          block
                          class="rounded-pill"
                          color="info"
                          bottom
                          @click="validate"
                        >
                          登录
                        </v-btn>
                        <v-row class="caption">
                          <v-spacer></v-spacer>
                          <a
                            target="_blank"
                            href="http://vuetifyjs.com"
                            @click.stop
                          >
                            立即注册
                          </a>
                        </v-row>
                      </v-form>
                    </v-row>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import loginServe from "./login.serve";
export default {
  data() {
    return {
      tabs: null,
      items: ["密码登录", "短信码登陆"],
      isshow: true,
      moblie: "",
      password: "",
      check: "",
      checkbox: "",
      rules: {
        required: (value) => !!value || "必填项",
        counter: (value) =>
          (value && value.length >= 6 && value.length <= 18) ||
          "密码必须为6-18位英文+数字",
        moblie: (value) => {
          const pattern = /^[1]([3-9])[0-9]{9}$/;
          return pattern.test(value) || "请输入正确的手机号";
        },
        password: (value) => {
          const pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
          return pattern.test(value) || "请填写正确格式的密码";
        },
      },
    };
  },
  methods: {
    testjoin() {
      (this.moblie = "18779868511"), (this.password = "1234561q");
      // console.log('testjoin start')
      // loginServe.userLogin(this.moblie,this.moblie).subscribe(
      //   success=>{
      //     console.log('success',success)
      //   },
      //   err=>{
      //     console.log('errrrrrrrrrrrr',err)
      //   }
      // )
    },
    logintest() {
      console.log("testjoin start");
      loginServe.userLogin(this.moblie, this.moblie).subscribe(
        (success) => {
          console.log("success", success);
        },
        (err) => {
          console.log("errrrrrrrrrrrr", err);
        }
      );
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
