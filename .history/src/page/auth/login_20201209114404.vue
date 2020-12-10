<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-container fluid class="my-16">
      <!-- fluid删除最大宽度的断点 -->
      <v-row dense>
        <v-col offset-md="3">
          <v-card outlined max-width="300">
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
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({

    }),
  }
</script>