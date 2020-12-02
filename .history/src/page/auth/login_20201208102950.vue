<template>
  <v-form v-model="valid">
    <v-container class="login_container">
      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        :counter="10"
        label="First name"
        required
      ></v-text-field>
       <v-text-field
        v-model="firstname"
        :rules="nameRules"
        :counter="10"
        label="First name"
        required
      ></v-text-field>
    </v-container>
  </v-form>
</template>
<style lang="scss" scoped>
.login_container {
  height:50%;
}
</style>