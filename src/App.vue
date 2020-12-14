<template>
  <v-app>
    <tabbar></tabbar>
    <slidebar></slidebar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import tabbar from "@/components/tabbar";
import slidebar from "@/components/slidebar";
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  components: { tabbar, slidebar },
};
</script>

<style lang="scss">

</style>
