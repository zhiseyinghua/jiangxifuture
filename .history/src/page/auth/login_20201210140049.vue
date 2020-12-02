<template>
  <v-card class="mx-auto my-16" max-width="700" min-width="500" shaped>
    <v-container fluid>
      <v-row no-gutters>
        <v-form class="mx-auto my-16">
          <v-text-field
            placeholder="请输入手机号"
            outlined
            clearable
            dense
            required
            prepend-inner-icon="mdi-map-marker"
            class="rounded-pill"
          ></v-text-field>
          <v-text-field
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
            <v-col >
              <v-text-field
                placeholder="请输入验证码"
                outlined
                clearable
                dense
                required
                prepend-inner-icon="mdi-map-marker"
                class="rounded-pill"
              ></v-text-field
            ></v-col>
            <v-col >
              <v-btn class="rounded-pill" color="info" dense outlined  right absolute
                >获取验证码</v-btn
              >
            </v-col>
          </v-row>
          <v-checkbox v-model="checkbox" class="ma-0 pa-0">
            <template v-slot:label>
              <div class=" caption">
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
};
</script>
