<template>
  <div>
    <div style="height:100px">test</div>
    <div>test</div>
    <v-btn @click="getauthass">颁发刷凭证</v-btn>
  </div>
</template>
<script>
import authServies from "@/page/auth/auth.servies";

export default {
  name: "test",
  data() {
    return {
      
    };
  },
  methods:{
    getauthass() {
      authServies.getServeS3authority().subscribe(
        data=>{
          console.log(data)
        },
        err=>{

        }
      )
    }
  }
};
</script>
