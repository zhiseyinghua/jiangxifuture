<template>
  <v-row class="my-16">
    <v-col cols="10" md="4" offset="1" sm="8" offset-sm="2" offset-md="4">
      <v-card shaped>
        <v-btn @click="testjoin">test填写</v-btn>
        <v-btn @click="passwordlogin">登录</v-btn>
        <v-btn @click="sendSMSTime">发送短信</v-btn>
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
                          @click="passwordLogin"
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
                              v-on:click="sendYanzhengma"
                              :disabled="isDisabled"
                              class="rounded-pill"
                              color="info"
                              block
                              dense
                              outlined
                            >
                              {{ buttonName }}
                            </v-btn>
                          </v-col>
                        </v-row>
                        <v-btn
                          block
                          class="rounded-pill"
                          color="info"
                          bottom
                          @click="sMSLogin"
                          :disabled="signInButton"
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
import Bus from "../../common/bus.js";
import authservieve from "../auth/auth.servies";
import { AuthConfig } from "../auth/auth.common";
export default {
  data() {
    return {
      signInButton: false,
      // 用于发送短信的按钮
      isDisabled: false,
      // 用于发送短信的msgid
      msg_id: "",
      // 倒计时
      time: 3,
      // 发短信的按钮
      buttonName: "发送短信",
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
    passwordLogin() {
      if (!this.$refs.form.validate()) {
        Bus.$emit("snackbar", {
          text: "请认真填写帐号密码",
          color: "pink",
          timeout: 2000,
          errorsnackbar: true,
          top: true,
        });
      } else {
        this.passwordlogin();
      }
    },
    testjoin() {
      this.moblie = "18779868511";
      this.password = "q123456";
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
    /**
     * 登录
     */
    passwordlogin() {
      Bus.$emit("overlayvalue", {
        overlayvalue: true,
      });
      loginServe.userLogin(this.password, this.moblie).subscribe(
        (data) => {
          if (data.status && data.status == "success") {
            Bus.$emit("snackbar", {
              text: "登录成功",
              color: "green",
              timeout: 2000,
              errorsnackbar: true,
              top: true,
            });
          } else if (data && data.code == "000006") {
            Bus.$emit("snackbar", {
              text: "用户名不存在",
              color: "pink",
              timeout: 2000,
              errorsnackbar: true,
              top: true,
            });
          } else if (data && data.code == "000004") {
            Bus.$emit("snackbar", {
              text: "密码或用户名错误，请重试",
              color: "pink",
              timeout: 2000,
              errorsnackbar: true,
            });
          } else {
            Bus.$emit("snackbar", {
              text: "服务器错误",
              color: "pink",
              timeout: 2000,
              errorsnackbar: true,
              top: true,
            });
          }
          Bus.$emit("overlayvalue", {
            overlayvalue: false,
          });
        },
        (err) => {
          Bus.$emit("overlayvalue", {
            overlayvalue: false,
          });
          Bus.$emit("snackbar", {
            text: "服务器错误",
            color: "pink",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
          console.log("errrrrrrrrrrrr", err);
        }
      );
    },

    /**
     * 用于发送验证码的倒计时的函数
     */
    sendSMSTime() {
      this.isDisabled = true;
      // console.log("sendSMSTime");
      let interval = window.setInterval(() => {
        this.buttonName = "（" + this.time + "秒）";
        --this.time;
        if (this.time < 0) {
          this.buttonName = "重新发送";
          this.time = 3;
          this.isDisabled = false;
          window.clearInterval(interval);
        }
      }, 1000);
    },

    sendYanzhengma() {
      this.signInButton = false;
      this.sendSMSTime();
      authservieve
        .SendPhoneSMSInterface(this.moblie, AuthConfig.jiguangDevice)
        .subscribe((data) => {
          if (data["data"]) {
            this.msg_id = data["data"]["msg_id"];
            Bus.$emit("snackbar", {
              text: "发送验证码成功",
              color: "green",
              timeout: 2000,
              errorsnackbar: true,
              top: true,
            });
          } else {
            Bus.$emit("snackbar", {
              text: "验证码发送错误，请重新发送",
              color: "green",
              timeout: 2000,
              errorsnackbar: true,
            });
          }
          (error) => {
            Bus.$emit("snackbar", {
              text: "验证码发送错误，请重新发送",
              color: "green",
              timeout: 2000,
              errorsnackbar: true,
            });
          };
        });
    },

    sMSLogin() {
      if (!this.$refs.form.validate()) {
        Bus.$emit("snackbar", {
          text: "请填写帐号和验证码",
          color: "pink",
          timeout: 2000,
          errorsnackbar: true,
          top: true,
        });
      } else {
        Bus.$emit("overlayvalue", {
          overlayvalue: true,
        });
        let signData = {
          code: this.check,
          provider: AuthConfig.jiguangDevice,
          // eslint-disable-next-line @typescript-eslint/camelcase
          msg_id: this.msg_id,
          phone: this.moblie,
          device: AuthConfig.device,
          platform: AuthConfig.platform,
        };
        loginServe.sMSLoginf(signData).subscribe(
          (data) => {
            Bus.$emit("overlayvalue", {
              overlayvalue: false,
            });
            // console.log("login.vue sMSLogin data", data);
            if (data.status && data.status == "success") {
              Bus.$emit("snackbar", {
                text: "登录成功",
                color: "green",
                timeout: 2000,
                errorsnackbar: true,
                top: true,
              });
              // authServies.logintest(data.data.idtoken);
            } else if (data.code && data.code == "000001") {
              Bus.$emit("snackbar", {
                text: "该用户已存在",
                color: "pink",
                timeout: 2000,
                errorsnackbar: true,
                top: true,
              });
            } else if (data.code && data.code == "000002") {
              Bus.$emit("snackbar", {
                text: "验证码错误,请输入正确的验证码",
                color: "pink",
                timeout: 2000,
                errorsnackbar: true,
                top: true,
              });
            } else if (data.code && data.code == "000007") {
              Bus.$emit("snackbar", {
                text: "请重新发送验证码",
                color: "pink",
                timeout: 2000,
                errorsnackbar: true,
                top: true,
              });
            } else {
              Bus.$emit("snackbar", {
                text: "服务器错误，请重试",
                color: "pink",
                timeout: 2000,
                errorsnackbar: true,
                top: true,
              });
            }
          },
          (err) => {
            Bus.$emit("overlayvalue", {
              overlayvalue: false,
            });
            Bus.$emit("snackbar", {
              text: "服务器错误，请重试",
              color: "pink",
              timeout: 2000,
              errorsnackbar: true,
              top: true,
            });
          }
        );
      }
    },
  },
};
</script>
