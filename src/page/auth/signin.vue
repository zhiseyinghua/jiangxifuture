<template style="clear:both">
  <v-row class="my-16">
    <v-col cols="10" md="6" offset="1" sm="8" offset-sm="2" offset-md="3">
      <v-card shaped>
        <v-btn v-on:click="vertest">发验证码</v-btn>
        <v-btn v-on:click="rbytokengettoken">换token</v-btn>
        <v-btn v-on:click="signup">注册</v-btn>
        <v-btn v-on:click="sendMsg">运行</v-btn>
        <!-- <v-btn v-on:click="sendMsgguandiao">运行</v-btn> -->
        <!-- 遮罩层 -->
        <div class="text-center">
          <v-overlay :value="overlayvalue">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
        </div>

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
              <v-checkbox
                class="ma-0 pa-0"
                color="info"
                :rules="[rules.required]"
                v-model="checkbox"
              >
                <template v-slot:label>
                  <div class="caption">
                    我同意
                    <a target="_blank" href="http://vuetifyjs.com" @click.stop>
                      《注册协议》
                    </a>
                  </div>
                </template>
              </v-checkbox>
              <v-btn
                block
                class="rounded-pill"
                color="info"
                bottom
                @click="signUp"
              >
                注册
              </v-btn>
              <div class="text-center caption">
                已有账号？
                <a target="_blank" href="http://vuetifyjs.com" @click.stop>
                  直接登录
                </a>
              </div>
            </v-form>
          </v-col>
        </v-row>
        <v-btn @click="tianxiebiaodantest">
          填写表单test
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import authServies from "./auth.servies";
import Bus from "../../common/bus.js";
import colors from "vuetify/es5/util/colors";
export default {
  data() {
    return {
      // 遮罩层的状态
      overlayvalue: false,
      // 倒计时
      time: 3,
      buttonName: "发送短信",
      // 按钮
      isDisabled: false,
      //消息提示
      errorsnackbar: false,
      text: "",
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
    sendMsg() {
      console.log("signin运行");
      Bus.$emit("aMsg", {
        overlayvalue: true,
        errorsnackbar: true,
        text: "密码错",
        color: "green",
      });
    },

    /**
     * 关掉
     */
    sendMsgguandiao() {
      // console.log("signin运行");
      // Bus.$emit("aMsg", {
      //   overlayvalue: false,
      //   errorsnackbar: false,
      //   text: "密码错",
      //   color: "green",
      // });
    },

    tianxiebiaodantest() {
      this.moblie = "18779868511";
      this.password = "q123456";
    },

    /**
     * 发送验证码
     */
    sendYanzhengma() {
      this.sendSMSTime();
    },

    sendSMSTime() {
      console.log("sendSMSTime");
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
        this.text = "请认真填写表单";
        console.log(this.text);
        this.errorsnackbar = true;
      } else {
        console.log("111111111111111111111111111111111", this.overlayvalue);
        this.overlayvalue = true;
        console.log("111111111111111111111111111111111", this.overlayvalue);
        let signData = {
          code: "883461",
          provider: "phone",
          // eslint-disable-next-line @typescript-eslint/camelcase
          msg_id: "299926273665024",
          encodepossword: "123456",
          phone: "18779868511",
          device: "string",
          platform: "string",
        };
        authServies.signupAuth(signData).subscribe(
          (data) => {
            his.overlayvalue = false;
            if (data.status || data.status == "success") {
              console.log("登录成功");
            } else if (data.code && code == "00004") {
              console.log("signupAuth signupAuth data", data);
              return AuthServies.logintest(data.data.idtoken);
            } else if (data.code && code == "00004") {
            } else {
              console.log("服务器错误");
            }
          },
          (error) => {
            console.log("服务器错误");
            console.log("signin.vue signup err", error);
            this.overlayvalue = false;
            this.errorsnackbar = true;
          }
        );
      }
      console.log(this.$refs.form.validate());
      console.log(this.moblie, this.password, this.check);
    },
    signup: function() {
      let signData = {
        code: "883461",
        provider: "phone",
        // eslint-disable-next-line @typescript-eslint/camelcase
        msg_id: "299926273665024",
        encodepossword: "123456",
        phone: "18779868511",
        device: "string",
        platform: "string",
      };
    },
    vertest: function() {
      authServies
        .SendPhoneSMSInterface("18779868511", "phone")
        .subscribe((data) => {
          //  if(data['data'] ==)
          console.log(data);
        });
      // this.$store.dispatch("login/loginAction", "123456789")
    },
    /**
     * 通过token换token
     */
    rbytokengettoken: function() {
      authServies.bytokengettoken().subscribe((data) => {
        //  if(data['data'] ==)
        console.log(data);
      });
    },
  },
};
</script>
