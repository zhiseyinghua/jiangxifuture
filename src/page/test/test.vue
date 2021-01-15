<template>
  <div>
    <v-btn @click="goutouser">进入别人页面</v-btn>
    <v-btn @click="goutouserziji">进入自己页面</v-btn>
  </div>
</template>
<script>
import axios from "axios";
import authServies from "@/page/auth/auth.servies";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";
import store from "@/store";
import router from "@/router";
export default {
  data: function() {
    return {
      companyname: "",
    };
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
        path: "user/account",
        query: { hash: "1", range: "1", index: "1" },
      });
    },
    goutouserziji() {
      console.log("进入user");
      this.$router.push({
        path: "user/account",
        query: {
          hash: "auth-2020-12-24",
          range: "682c4b8f-2749-4d65-aaa1-488e7f53d403",
          index: "682c4b8f-2749-4d65-aaa1-488e7f53d403",
        },
      });
    },
    upuserdata() {
      var authkeyToken = store.state.login.idtoken;
      authServies
        .asyncjiexiJwtDecjeck(authkeyToken)
        // .pipe(
        //   switchMap((data) => {
        //     return accountserves.byuseridgetUserDate({
        //       hash: data.hash,
        //       range: data.range,
        //       index: data.index,
        //     });
        //   })
        // )
        .subscribe((data) => {
          // this.useritems = [
          //   { name: "姓名", data: data.usernickname },
          //   { name: "手机", data: data.telephone },
          //   { name: "邮箱", data: data.usermail },
          //   { name: "位置", data: data.position },
          //   { name: "公司", data: data.companyname },
          // ];
          console.log(this.companyname);
        });
    },
  },
};
</script>
