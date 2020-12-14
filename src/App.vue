<template>
  <v-app>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },
};
</script>

<style lang="scss">

</style>
