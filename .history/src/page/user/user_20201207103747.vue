<template>
<v-container>
    <tabbar />

    <leftdrawer />

    <rightdrawer />

    <v-main>
      <!--  -->
    </v-main>

    <footerbar />
    </v-container>

</template>


<script lang="ts">

import tabbar from "@/components/tabbar/index.vue"
import leftdrawer from './menu/leftdrawer.vue';
import rightdrawer from './menu/rightdrawer.vue';
import footerbar from './menu/footerbar.vue';

export default({
  name: 'App',

  components: {
    tabbar,
    leftdrawer,
    rightdrawer,
    footerbar
  },
  // @Component({
  // components: {
  //   HelloWorld,
  // },
})

});
</script>
