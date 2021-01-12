<template>
  <h1>11111</h1>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {};
  },
  created: function () {
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
};
</script>