<template>
  <v-container>
    <toolbar />
    <v-row no-gutters>
      <v-col cols="auto">
        <slidebar />
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="10">
        <router-view />
      </v-col>
      <p>11111111111</p>
    </v-row>
  </v-container>
</template>
<script>
import Slidebar from "./slidebar.vue";
import toolbar from "./toolbar.vue";
import authServies from "@/page/auth/auth.servies"
export default {
  components: { toolbar, Slidebar },
  data: () => ({}),
  created(){
    authServies.asyncjiexiJwtDecjeck(this.$store.state.login.idtoken).subscribe(
      data=>{
        console.log('user.vue asyncjiexiJwtDecjeck data',data)
         let passkey = {
           hash:
         }
      }
    )
    console.log()
    console.log(this.$route.query)
  }
};
</script>