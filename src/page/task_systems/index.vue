<template>
  <div>
    <toolbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import toolbar from "./toolbar";
export default {
  components: { toolbar },
  methods: {
    ...mapMutations(["changeShow"]),
  },
  created: function() {
    if (this.$route.path.indexOf("/taskSystems") === 0) {
      this.changeShow();
    }
  },
  beforeDestroy: function() {
    this.changeShow();
  },
};
</script>
