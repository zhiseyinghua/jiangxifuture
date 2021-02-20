<template>
  <v-container>
    <v-card max-width="1000" class="mx-auto">
      <v-card-title class="d-flex justify-space-between">
        <v-sheet class="d-flex">
          <v-checkbox color="success"></v-checkbox>
          <v-text-field autofocus value="吴城测绘" style="border:none"> </v-text-field>
        </v-sheet>
        <v-btn icon><v-icon>mdi-pencil-circle</v-icon></v-btn>
      </v-card-title>
      <v-card-subtitle>

      </v-card-subtitle>
      <v-divider></v-divider>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [{ title: "咚咚呱" }],
  }),
};
</script>

<style lang="scss" scoped>
    
</style>