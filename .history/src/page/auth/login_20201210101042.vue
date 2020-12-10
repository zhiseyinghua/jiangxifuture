<template>
  <v-card class="mx-auto my-16" max-width="700" min-width="500" shaped>
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
          <v-row no-gutters>
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
              <v-btn class="rounded-pill" color="info" dense outlined
                >获取验证码</v-btn
              >
            </v-col>
          </v-row>
          <v-checkbox v-model="checkbox">
            <template v-slot:label>
              <div>
                我同意
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <a
                      target="_blank"
                      href="http://vuetifyjs.com"
                      @click.stop
                      v-on="on"
                    >
                      《注册协议》
                    </a>
                  </template>
                </v-tooltip>
              </div>
            </template>
          </v-checkbox>
          <v-btn block class="rounded-pill" color="info" bottom> 注册 </v-btn>
        </v-form>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      checkbox: false,
    };
  },
};
</script>
