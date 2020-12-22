<template>
  <v-container>
    <toolbar />
    <slidebar />
    <router-view />
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