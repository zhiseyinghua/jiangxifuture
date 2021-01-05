<template>
  <v-container>
    <toolbar />
    <v-row no-gutters>
      <v-col cols="auto">
        <!-- <slidebar /> -->
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="10">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import toolbar from "./toolbar.vue";
import { mapMutations } from "vuex";
export default {
  components: { toolbar },
  data: () => ({}),
  name:'user',
  methods: {
    ...mapMutations(["changeShow"]),
  },
  created: function () {
    if (this.$route.path === "/user") {
      this.changeShow();
    }
  },
  beforeDestroy: function () {
    this.changeShow();
  },
};
</script>