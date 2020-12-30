<template>
  <div>
    <div style="height:100px">test</div>
    <div>test</div>
    <v-btn @click="getauthass">颁发刷凭证</v-btn>
    <v-btn @click="getlocals3pingzheng">从本地拿凭证</v-btn>
    <v-btn @click="putfileAliyunS3">上传一个文件到s3</v-btn>
  </div>
</template>
<script>
import authServies from "@/page/auth/auth.servies";
import oSSServies from "@/common/oss.servies"

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
    },
    putfileAliyunS3() {
      oSSServies.putfileToAliyunS3().subscribe(
        data=>{
          console.log('test.vue putfileAliyunS3 data',data)
        }
      )
    },
    getlocals3pingzheng() {
      authServies.getS3authority().subscribe(
        data=>{
          console.log(data)
        }
      )
    }
    
  }
};
</script>
