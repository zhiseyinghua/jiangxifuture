<template>
  <v-card class="mx-auto my-16" max-width="700">
    <v-container fluid>
      <v-row no-gutters>
        <v-form 
        class="mx-auto my-16"  
        ref="loginFormRef"
         v-model="loginForm"
         :rules="loginFormRules" 
         lazy-validation>
          <v-text-field
            placeholder="请输入手机号"
            v-model="photo"
            outlined
            clearable
            dense
            required
            prepend-inner-icon="mdi-map-marker"
            class="rounded-pill"
          ></v-text-field>
          <v-text-field
            placeholder="密码为4-20位英文+数字"
            v-model="pwd"
            outlined
            clearable
            dense
            required
            :counter="20"
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
    data () {
      return {
        // 这是验证表单的数据绑定对象
        loginForm: {
          photo: '',
          pwd: ''
        },
        // 这是表单的验证规则
        loginFormRules: {
          photo: {
            required:true,message:"请输入手机号",trigger:'blur'
          }
        }
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>
