<template>
  <div>
    <v-btn @click="goutouser">进入别人页面</v-btn>
    <v-btn @click="goutouserziji">进入自己页面</v-btn>
    <div class="mt-6 ml-6">
      <div class="mb-2">实际派发时间 ：</div>
      <div style="witch:100px">
        <v-text-field
          style="witch:100px"
          value="John Doe"
          disabled
        ></v-text-field>
      </div>
      <div class="mb-2">技术员实际完成时间 ：</div>

    </div>
    <router-view />
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
    // axios({
    //   method: "post",
    //   url: "api/team/insertteaminfo",
    //   headers: { authorization },
    //   data: {
    //     teamname: "future time",
    //     projectname: "web3",
    //     projectprogress: "0",
    //   },
    // }).then((res) => {
    //   console.log(res);
    // });
  },
  methods: {
    upload(e) {
      console.log(e);
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.picValue = files[0];
      this.imgPreview(this.picValue);
    },

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
  },
};
</script>
