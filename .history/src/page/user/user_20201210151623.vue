<template>
<v-container>
    <tabbar>

    <leftdrawer />

    <rightdrawer />
    </tabbar>

    <v-main>
      <!--  -->
    </v-main>

    <footerbar />
    </v-container>

</template>


<script lang="ts">

<<<<<<< HEAD
import tabbar from '@/components/tabbar/index.vue'
import leftdrawer from './menu/leftdrawer.vue';
// import rightdrawer from './menu/rightdrawer.vue';

export default({
  name: 'userpage',
=======
import tabbar from './menu/tabbar.vue'
import leftdrawer from './menu/leftdrawer.vue';
import rightdrawer from './menu/rightdrawer.vue';
import footerbar from './menu/footerbar.vue';

export default({
  name: 'App',
>>>>>>> e

  components: {
    tabbar,
    leftdrawer,
<<<<<<< HEAD
  },
=======
    rightdrawer,
    footerbar
  },
  // @Component({
  // components: {
  //   HelloWorld,
  // },
>>>>>>> e
});
</script>
