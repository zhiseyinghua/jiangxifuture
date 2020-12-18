<template>
  <v-container fluid>
    <toolbar />
    <slidebar />
    <v-container>
    <router-view></router-view>
    </v-container>
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