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
export default {
  components: { toolbar, slidebar },
  data: () => ({}),
  name: "user",
  methods: {
    ...mapMutations(["changeShow"]),
  },
  created: function () {
    // console.log('user create this.$route.params.id',this.$route.params.id)
    if (this.$route.path === "/user") {
      this.changeShow();
    }
  },
  beforeDestroy: function () {
    this.changeShow();
  },
};
</script>