<template>
<v-container>
  <!-- 导航栏 -->
  <tabbar />
  <!-- 左侧导航栏 -->
    <leftdrawer />
    <v-main>
    </v-main>
    </v-container>

</template>


<script lang="ts">

import tabbar from '@/components/tabbar/index.vue'
import leftdrawer from './menu/leftdrawer.vue';
// import rightdrawer from './menu/rightdrawer.vue';

export default({
  name: 'userpage',

  components: {
    tabbar,
    leftdrawer,
  },
});
</script>
