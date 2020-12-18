<template>
  <v-app>
    <overlay></overlay>
    <tabbar></tabbar>
    <slidebar></slidebar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- <foot></foot> -->
  </v-app>

</template>

<script>
import tabbar from "@/components/tabbar";
import slidebar from "@/components/slidebar";
import foot from "@/components/foot";
import overlay from "@/components/overlay";
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  components: { tabbar, slidebar,foot,overlay },
};
</script>

<style lang="scss">

</style>
