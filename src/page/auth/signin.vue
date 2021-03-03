<template style="clear:both">
  <v-row class="my-16">
    <v-col cols="10" md="6" offset="1" sm="8" offset-sm="2" offset-md="3">
      <v-card shaped>
        <!-- <v-btn v-on:click="rbytokengettoken">换token</v-btn>
        <v-btn v-on:click="signup">注册</v-btn>
        <v-btn v-on:click="sendMsg">loading</v-btn>
        <v-btn v-on:click="sendMsgtishyi">提示</v-btn> -->
        <!-- <v-btn v-on:click="storeButton">storetest</v-btn> -->

        <v-row no-gutters>
          <v-col cols="8" offset="2">
            <v-form ref="form" class="my-16">
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
                :rules="[rules.required, rules.counter, rules.password]"
                :append-icon="isshow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="isshow ? 'text' : 'password'"
                @click:append="isshow = !isshow"
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
                    :rules="[rules.required, rules.verificationcode]"
                    prepend-inner-icon="mdi-marker-check"
                    class="rounded-pill"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="4" class="text-xs-caption offset-sm-1">
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
              <!-- <v-checkbox
                class="ma-0 pa-0"
                color="info"
                :rules="[rules.required]"
                v-model="checkbox"
              > -->
                <!-- <template v-slot:label>
                  <div class="caption">
                    我同意
                    <a target="_blank" href="http://vuetifyjs.com" @click.stop>
                      《注册协议》
                    </a>
                  </div>
                </template> -->
              <!-- </v-checkbox> -->
              <v-btn
                block
                class="rounded-pill"
                color="info"
                bottom
                @click="signUp"
                :disabled="signInButton"
              >
                注册
              </v-btn>
              <div class="text-center caption">
                已有账号？
                <a target="_blank" @click="toauth()" @click.stop>
                  直接登录
                </a>
              </div>
            </v-form>
          </v-col>
        </v-row>
        <!-- <v-btn @click="tianxiebiaodantest"> 填写表单test </v-btn> -->
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import authServies from "./auth.servies";
import Bus from "../../common/bus.js";
import { AuthConfig } from "./auth.common";
export default {
  data() {
    return {
      signInButton: false,
      // 用于发送验证码的msgd,默认为空
      msg_id: "",
      // 倒计时
      time: 3,
      buttonName: "发送短信",
      // 按钮
      isDisabled: false,
      isshow: false,
      moblie: "",
      password: "",
      check: "",
      checkbox: "",
      rules: {
        required: (value) => !!value || "必填项",
        counter: (value) =>
          (value && value.length >= 6 && value.length <= 18) ||
          "密码必须包含字母和数字",
        moblie: (value) => {
          const pattern = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
          return pattern.test(value) || "请输入正确的手机号";
        },
        password: (value) => {
          const pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
          return pattern.test(value) || "请填写正确格式的密码";
        },
        verificationcode: (value) => {
          const pattern = /^\d{6}$/;
          return pattern.test(value) || "请填写正确格式的密码";
        },
      },
    };
  },
  methods: {
    toauth() {
      this.$router.push({path:"/login"})
    },
    // storeButton() {
    //   authServies
    //     .logintest('d1s2d123a1ds23a1d231321564165sdad41sad41as5d41as65d4as5d4as54ds5a4d5sa').subscribe((
    //       success=>{
    //         console.log('成功')
    //       }
    //     ))
    // },
    sendMsg() {
      // console.log("signin运行");
      Bus.$emit("overlayvalue", {
        overlayvalue: true,
      });
    },
    sendMsgtishyi() {
      // console.log("snackbar运行");
      Bus.$emit("snackbar", {
        text: "提示",
        color: "green",
        timeout: 2000,
        errorsnackbar: true,
        top: true,
      });
    },
    tianxiebiaodantest() {
      this.moblie = "18779868511";
      this.password = "q123456";
      this.check = "123456";
    },
    /**
     * 发送验证码
     */
    sendYanzhengma() {
      this.signInButton = false;
      this.sendSMSTime();
      authServies
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
              top: true,
            });
          }
          (error) => {
            Bus.$emit("snackbar", {
              text: "验证码发送错误，请重新发送",
              color: "pink",
              timeout: 2000,
              errorsnackbar: true,
              top: true,
            });
          };
        });
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
    signUp() {
      if (!this.$refs.form.validate()) {
        // 提示框：请认真填写表单
        Bus.$emit("snackbar", {
          text: "请认真填写表单",
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
          encodepossword: this.password,
          phone: this.moblie,
          device: AuthConfig.device,
          platform: AuthConfig.platform,
        };
        authServies.signupAuth(signData).subscribe(
          (data) => {
            this.$router.push({ path: "taskSystems/project" });
            Bus.$emit("overlayvalue", {
              overlayvalue: false,
            });
            // console.log(data.code, data);
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
          (error) => {
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
      // console.log(this.$refs.form.validate());
      // console.log(this.moblie, this.password, this.check);
    },
    signup: function() {
      let signData = {
        code: "883461",
        provider: "phone",
        // eslint-disable-next-line @typescript-eslint/camelcase
        msg_id: "299926273665024",
        encodepossword: this.password,
        phone: this.moblie,
        device: AuthConfig.device,
        platform: AuthConfig.platform,
      };
    },
    /**
     * 通过token换token
     */
    rbytokengettoken: function() {
      authServies.bytokengettoken().subscribe((data) => {
        //  if(data['data'] ==)
        // console.log(data);
      });
    },
  },
};
</script>
