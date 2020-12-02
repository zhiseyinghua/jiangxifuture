<template>
  <v-card>
    <v-toolbar  dark flat prominent>
      <template v-slot:extension>
        <v-tabs v-model="tabs" centered>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text> 1 </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text> 2 </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      tabs: null,
      items: ["密码登录", "手机登陆"],
    };
  },
};
</script>