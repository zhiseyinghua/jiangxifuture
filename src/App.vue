<template>
  <v-app id="inspire">
    <tabbar></tabbar>
    <slidebar></slidebar>
    <v-main>
      <v-container>
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
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
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
