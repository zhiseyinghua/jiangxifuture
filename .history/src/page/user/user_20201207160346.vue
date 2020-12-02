<template>
<v-container>
  <tabbar />
    <leftdrawer />

    <v-main>
      <!--  -->
    </v-main>

    <footerbar />
    </v-container>

</template>


<script lang="ts">

import tabbar from '@/components/tabbar/index.vue'
import leftdrawer from './menu/leftdrawer.vue';
// import rightdrawer from './menu/rightdrawer.vue';

export default({
  name: 'App',

  components: {
    tabbar,
    leftdrawer,
    // rightdrawer,
  },
  // @Component({
  // components: {
  //   HelloWorld,
  // },
});
</script>
