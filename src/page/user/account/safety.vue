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

        <v-row class="mx-16 mt-2">
          <v-col class="d-flex" cols="8">
            <v-card-text> uid </v-card-text>
          </v-col>
        </v-row>
        <v-row class="mx-16">
          <v-col class="d-flex mt-2 pt-0" cols="8">
            <v-card-text> 昵称 </v-card-text>
          </v-col>
        </v-row>
        <v-row class="mx-16">
          <v-col class="d-flex mt-2 pt-0" cols="8">
            <v-card-text class="pt-0"> 登陆密码 </v-card-text>
          </v-col>
        </v-row>
        <v-row class="mx-16">
          <v-col class="d-flex mt-2 pt-0" cols="8">
            <v-card-text class="pt-0"> 手机 </v-card-text>
          </v-col>
        </v-row>
        <v-row class="mx-16">
          <v-col class="d-flex mt-2 pt-0" cols="8">
            <v-card-text class="pt-0"> 邮箱 </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template> 
<script>
import axios from "axios";
export default {
  data: function(){
    return {

    }
  },
  created: function () {
    const authorization = localStorage.getItem("token");
    axios({
      method: "post",
      url: "api/team/insertteaminfo",
      headers: { authorization },
      data: {
        teamname: "future time",
        projectname: "web3",
        projectprogress: "0",
      },
    }).then( res => {
      console.log(res);
    });
  },
};
</script>
