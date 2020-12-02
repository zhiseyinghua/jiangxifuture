<template>
  <v-card class="mx-auto my-16" max-width="700">
    <v-container fluid>
      <v-row no-gutters>
        <v-form class="mx-auto my-16"  ref="form"
    v-model="valid" lazy-validation>
          <v-text-field
            placeholder="请输入手机号或邮箱"
            outlined
            clearable
            dense
            required
            :rules="phoneRules"
            prepend-inner-icon="mdi-map-marker"
            class="rounded-pill"
          ></v-text-field>
          <v-text-field
            placeholder="密码为4-20位英文+数字"
            outlined
            clearable
            dense
            required
            :counter="20"
            :rules="pwdRules"
            prepend-inner-icon="mdi-map-marker"
            class="rounded-pill"
          ></v-text-field>
          <v-row no-gutters>
            <v-col cols="7">
              <v-text-field
                placeholder="请输入验证码"
                outlined
                clearable
                dense
                required
                :rules="testRules"
                prepend-inner-icon="mdi-map-marker"
                class="rounded-pill"
              ></v-text-field
            ></v-col>
            <v-col offset-md="1" cols="3">
              <v-btn class="rounded-pill">获取验证码</v-btn>
            </v-col>
          </v-row>
          <v-checkbox label="我同意" dense></v-checkbox>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            注册
          </v-btn>
        </v-form>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      phone: '',
      phoneRules: [
        v => !!v || '必填项',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || '必填项',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>
