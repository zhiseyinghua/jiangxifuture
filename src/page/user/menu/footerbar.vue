<template>
  <!-- 底部导航栏 -->
<v-footer
      app
      color="transparent"
      height="72"
      inset
    >
      <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field>
    </v-footer>
</template>

<script lang="ts">
export default({
  name: "footerbar",
});
</script>