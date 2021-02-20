<template>
  <v-row class="mt-14">
    <v-col cols="6" offset="3">
      <v-card>
        <v-card-actions>
          <v-card-title>基本信息</v-card-title>
        </v-card-actions>
        <v-divider class="mx-6"></v-divider>
        <v-card-actions class="justify-center mt-10">
          <v-btn icon x-large>
            <v-avatar size="100">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-btn>
        </v-card-actions>

        <v-row class="mx-16" v-for="link in menuList" :key="link.id">
          <v-col class="d-flex mt-2 pt-0" cols="8">
            <v-card-text class="pt-0"> {{ link.id }} </v-card-text>
            <v-card-text class="pt-0"> {{ link.message }} </v-card-text>
          </v-col>
        </v-row>

        <!-- <v-row class="mx-16" v-for="link in menuList" :key="link.text">
          <v-col class="d-flex mt-2 pt-0" cols="8">
            <v-card-text class="pt-0"> {{  }} </v-card-text>
            <v-card-text class="pt-0"> {{ link.message }} </v-card-text>
          </v-col>
        </v-row> -->
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  data () {
    return {
       menuList: [],
       items: [{name:"姓名",data:""}, 
       {name:"手机",data:""},
       {name:"邮箱",data:""},
       {name:"位置",data:""},
       {name:"公司",data:""},]
    };
  },
  created () {
    // const authorization = localStorage.getItem("token");
    // axios({
    //   headers: {authorization},
    //   method: "post",
    //   url: "/api/user/searchbyauthkey",
    // }).then((res) => {
    //   this.menuList = res.data
    //   console.warn(res.data);
    // });
  },
};
</script>
