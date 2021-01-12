<template>
  <v-container fluid>
    <toolbar />
    <slidebar />
    <v-row no-gutters>
      <v-col> </v-col>
      <v-col cols="10">
        <router-view />
      </v-col>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>
<script>
import toolbar from "./toolbar.vue";
import slidebar from "./slidebar.vue";
import { mapMutations } from "vuex";
import router from "@/router";
import authServies from "../auth/auth.servies";
export default {
  components: { toolbar, slidebar },
  data: () => ({}),
  name: "user",
  methods: {
    ...mapMutations(["changeShow"]),
  },
  created: function() {
    if (this.$route.path === "/user") {
      this.changeShow();
    }
    console.log(this.$route.query);
    let authdata = authServies.jiexiJwtDecjeck(this.$store.state.login.idtoken);
    
    let storeRange = authdata.range;
    let routeRange = this.$route.query.range;
    console.log('1111111111111',storeRange, routeRange)
    if (storeRange == routeRange) {
      console.log('user.vue 进入了自己的user页面');
    } else if (storeRange !== routeRange) {
      console.log('user.vue 进入别的user主页');
    } else {
    }
  },
  beforeDestroy: function() {
    this.changeShow();
  },
};
</script>
