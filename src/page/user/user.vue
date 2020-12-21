<template>
  <toolbar />
</template>
<script>
import toolbar from "./toolbar.vue";
import { mapMutations } from "vuex";
export default {
  components: { toolbar },
  data: () => ({}),
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