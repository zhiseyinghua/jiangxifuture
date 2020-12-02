<template>
  <v-card class="mx-auto my-16" max-width="700" shaped>
    <v-container fluid>
      <v-row no-gutters>
        <v-form class="mx-auto my-16" lazy-validation>
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
            placeholder="密码为4-20位英文+数字"
            outlined
            clearable
            dense
            required
            :counter="20"
            prepend-inner-icon="mdi-map-marker"
            class="rounded-pill"
          ></v-text-field>
          <v-row no-gutters >
            <v-col>
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
            <v-col>
              <v-btn class="rounded-pill" color="indigo" dense outlined>获取验证码</v-btn>
            </v-col>
          </v-row>
          <v-checkbox label="我同意" dense></v-checkbox>
          <v-btn block class="rounded-pill" color="primary" bottom>
            注册
          </v-btn>
        </v-form>
      </v-row>
    </v-container>
  </v-card>
</template>
