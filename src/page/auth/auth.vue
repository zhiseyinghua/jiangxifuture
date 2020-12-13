<template style="clear:both">
  <v-card class="mx-auto my-16" max-width="600" min-width="300" shaped>
    <v-container fluid>
      <v-row no-gutters>
        <v-form class="mx-auto my-16" ref="form">
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
            <v-col cols="8">
              <v-text-field
                color="info"
                placeholder="请输入验证码"
                outlined
                clearable
                dense
                v-model="check"
                :rules="[rules.required]"
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
          <v-checkbox class="ma-0 pa-0" color="info" :rules="[rules.required]" v-model="checkbox">
            <template v-slot:label>
              <div class="caption">
                我同意
                <a target="_blank" href="http://vuetifyjs.com" @click.stop>
                  《注册协议》
                </a>
              </div>
            </template>
          </v-checkbox>
          <v-btn block class="rounded-pill" color="info" bottom @click="validate"> 注册 </v-btn>
          <div class="text-center caption">
            已有账号？
            <a target="_blank" href="http://vuetifyjs.com" @click.stop>
              直接登录
            </a>
          </div>
        </v-form>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      isshow: true,
      moblie: "",
      password: "",
      check: "",
      checkbox: "",
      rules: {
        required: (value) => !!value || "必填项",
        counter: (value) =>
          (value&& value.length >= 6 && value.length <= 18) ||
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
    }
  },
 methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>