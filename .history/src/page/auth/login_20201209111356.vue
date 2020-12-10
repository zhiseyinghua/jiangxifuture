<template>

<v-row align-center justify-center>
  <v-col cols="8" md="8" xs="10" offset-md="4">
    <v-card outlined>
    <v-form>
           <v-text-field
            placeholder="请输入手机号或邮箱"
            outlined
            clearable
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
          <v-text-field
            placeholder="密码为4-20位英文+数字"
            outlined
            clearable
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
          <v-text-field
            placeholder="请输入验证码"
            outlined
            clearable
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
          
    </v-form>
    </v-card>
  </v-col>
</v-row>
</template>