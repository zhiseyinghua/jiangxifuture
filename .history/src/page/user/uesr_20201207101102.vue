<template>
<v-container>
    <systembar />

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

import tabbar from './menu/tabbar.vue';
import systembar from './menu/systembar.vue';
import leftdrawer from './menu/leftdrawer.vue';
import rightdrawer from './menu/rightdrawer.vue';
import footerbar from './menu/footerbar.vue';

export default({
  name: 'App',

  components: {
    tabbar,
    systembar,
    leftdrawer,
    rightdrawer,
    footerbar
  },

});
</script>
