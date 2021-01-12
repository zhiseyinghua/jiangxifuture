<template>
  <div>
    <v-btn @click="goutouser">进入别人页面</v-btn>
     <v-btn @click="goutouserziji">进入自己页面</v-btn>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {};
  },
  created: function() {
    const authorization = localStorage.getItem("token");
    axios({
      method: "post",
      url: "api/team/insertteaminfo",
      headers: { authorization },
      data: {
        teamname: "future time",
        projectname: "web3",
        projectprogress: "0",
      },
    }).then((res) => {
      console.log(res);
    });
  },
  methods: {
    goutouser() {
      console.log("进入user");
      this.$router.push({
        path: "user",
        query: { hash: "1", range: "1", index: "1" },
      });
    },
    goutouserziji() {
      console.log("进入user");
      this.$router.push({
        path: "user",
        query: { hash: "auth-2020-12-23", range: "a7689e6e-f1d6-45b1-a85c-b3ead4c091b5", index: "a7689e6e-f1d6-45b1-a85c-b3ead4c091b5" },
      });
    },
  },
};
</script>
