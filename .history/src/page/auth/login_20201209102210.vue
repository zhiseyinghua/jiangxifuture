<template>
<v-row no-gutters class="my-15">
  <v-col md="3" offset-md="2" class="col-images">
     <v-img  height="300px"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    ></v-img>

  </v-col>
  <v-col md="5" offset-md="0">
        <!-- <v-card
    class="mx-auto"
  > -->
    <v-img 
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    ></v-img>
    <!-- </v-card> -->
  </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      // tabs: null,
      // items: ["密码登录", "手机登陆"],
    };
  },
};
// </script>
// <style lang="sass" scoped>
// .col-images {
//   background-image : url(../assets/login-a.png);
//   background-repeat:repeat-y;
// }
// </style>