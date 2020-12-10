<template>
  <v-card class="mx-auto my-16" max-width="600">
    <v-container fluid>
      <v-row>
        <v-col>
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
        </v-col>
      </v-row>

    </v-container>

  </v-card>
</template>