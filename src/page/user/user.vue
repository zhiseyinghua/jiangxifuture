<template>
  <toolbar />
</template>
<script>
import toolbar from './toolbar.vue';
export default {
  components: { toolbar },
  data: () => ({
    
  }),
  created: function(){
    if(this.$route.path === '/user') {
      this.$store.commit("changeShow");
    }
  },
  beforeDestroy: function(){
    this.$store.commit("changeShow");
  }
};
</script>