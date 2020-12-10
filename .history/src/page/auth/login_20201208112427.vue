<template>
  <v-card>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="150"
      max-width="250"
      src="https://picsum.photos/id/11/500/300"
    ></v-img>
    <v-toolbar
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      dark
      flat
      prominent
      height="50px"
    >
      <template v-slot:extension>
        <v-tabs v-model="tabs" centered>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
     <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    </v-form>

      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="headline"> An awesome title </v-card-title>
          <v-card-text>
            <p class="mb-0">
              Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque
              suscipit. Fusce pharetra convallis urna.
            </p>
          </v-card-text>
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