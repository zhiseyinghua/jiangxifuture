<template>
  <v-app id="inspire">
    <tabbar></tabbar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer app> 呜呜呜 </v-navigation-drawer> -->
    <foot></foot>
  </v-app>
</template>

<script>
import tabbar from "@/components/tabbar";
import foot from "@/components/foot";
// import test from "@/components/test"
export default {
  data() {
    return {};
  },
  components: { tabbar, foot },
  mounted(){
    console.log(this.$vuetify.application.top)
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0px;
}
</style>
