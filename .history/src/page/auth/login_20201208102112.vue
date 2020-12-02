<template>
  <v-form v-model="valid">
    <v-container>
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