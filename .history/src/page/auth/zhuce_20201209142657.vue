<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-container fluid class="my-16">
      <!-- fluid删除最大宽度的断点 -->
      <v-row dense>
        <v-col offset-md="3">
          <v-card outlined max-width="400">
    <v-form >
           <v-text-field
            placeholder="请输入手机号或邮箱"
            outlined
            clearable
            dense
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
          <v-text-field
            placeholder="密码为4-20位英文+数字"
            outlined
            clearable
            dense
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
          <v-row>
            <v-col> 
              <v-text-field
            placeholder="请输入验证码"
            outlined
            clearable
            dense
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field></v-col>
            <v-col> 
              <v-btn>获取验证码</v-btn>
          </v-col>          
          </v-row>
          <v-checkbox
      label="我同意"
      required
      dense
    ></v-checkbox>
         
    </v-form>
    </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({

    }),
  }
</script>