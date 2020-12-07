<template>
  <v-navigation-drawer
    class="d-flex d-md-none"
    v-model="$store.state.drawer"
    absolute
    left
    hide-overlay
  >
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "sliderbar",
  components: {},
  data: () => ({
    group: null,
  }),
  watch: {
    group() {
      this.$store.state.drawer = !this.$store.state.drawer;
    },
  }
};
</script>
