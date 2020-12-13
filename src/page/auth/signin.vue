<template style="clear:both">
  <v-card class="mx-auto my-16" max-width="600" min-width="300" shaped>
    <v-btn v-on:click="vertest" >1234596</v-btn>
    <v-container fluid>
      <v-row no-gutters>
        <v-form class="mx-auto my-16">
          <v-text-field
            placeholder="请输入手机号"
            color="info"
            outlined
            clearable
            dense
            required
            prepend-inner-icon="mdi-map-marker"
            class="rounded-pill"
          ></v-text-field>
          <v-text-field
            color="info"
            prepend-inner-icon="mdi-map-marker"
            placeholder="密码为8-20位英文+数字"
            outlined
            clearable
            dense
            required
            :counter="20"
            v-model="password"
            :append-icon="isshow ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.max]"
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
                required
                prepend-inner-icon="mdi-map-marker"
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
          <v-checkbox v-model="checkbox" class="ma-0 pa-0" color="info">
            <template v-slot:label>
              <div class="caption">
                我同意
                <a target="_blank" href="http://vuetifyjs.com" @click.stop>
                  《注册协议》
                </a>
              </div>
            </template>
          </v-checkbox>
          <v-btn block class="rounded-pill" color="info" bottom> 注册 </v-btn>
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
import authServies from './auth.servies'
export default {
  data() {
    return {
      isshow: false,
      checkbox: false,
      password: "",
      rules: {
        required: (value) => !!value || "必填项",
        min: (v) => v.length >= 8 || "至少八位",
        max: (v) => v.length <= 20 || "最多二十位",
      },
    };
  },
  methods: {
    vertest: function(){
       authServies.SendPhoneSMSInterface("18779868511","phone",)
      // this.$store.dispatch("login/loginAction", "123456789")
    }
  },
};
//
</script>
//
<style lang="sass" scoped>
// .btn {
//   float:right;
// }
//
</style>
