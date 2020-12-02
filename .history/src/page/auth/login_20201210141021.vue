<template>
  <v-card class="mx-auto my-16" max-width="700" min-width="500" shaped>
    <v-container fluid>
      <v-row no-gutters>
        <v-form class="mx-auto my-16">
          <v-row no-gutters relative>
            <v-col >
              <v-text-field
                placeholder="请输入验证码"
                outlined
                clearable
                dense
                required
                prepend-inner-icon="mdi-map-marker"
                class="rounded-pill ma-0"
              ></v-text-field
            ></v-col>
            <v-col absolute>
              <v-btn class="rounded-pill" color="info" dense outlined  right 
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
