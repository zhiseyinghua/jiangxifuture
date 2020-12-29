<template>
  <v-container>
    <toolbar />
    <v-row no-gutters>
      <v-col cols="auto">
        <slidebar />
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="10">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Slidebar from "./slidebar.vue";
import toolbar from "./toolbar.vue";
export default {
  components: { toolbar, Slidebar },
  data: () => ({}),
};
</script>