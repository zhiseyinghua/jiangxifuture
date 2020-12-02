<template>
  <v-app id="inspire">
    <v-main>
      <tabbar></tabbar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import tabbar from "@/components/tabbar";
export default {
  components: { tabbar },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
ul,ol{
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
