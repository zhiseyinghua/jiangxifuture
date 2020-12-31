<template>
  <v-row class="mt-14">
    <v-col cols="6" offset="3">
      <v-card>
        <v-card-actions>
          <v-card-title>基本信息</v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="editbtn">
            <v-icon>mdi-account-edit-outline</v-icon>
          </v-btn>
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
            <v-card-text> 111 </v-card-text>
          </v-col>
        </v-row>
        <v-row class="mx-16">
          <v-col class="d-flex mt-2 pt-0" cols="8">
            <v-card-text> 昵称 </v-card-text>
            <v-card-text> {{ usernickname }} </v-card-text>
          </v-col>
        </v-row>
        <v-row class="mx-16">
          <v-col class="d-flex mt-2 pt-0" cols="8">
            <v-card-text class="pt-0"> 登陆密码 </v-card-text>
            <v-card-text class="pt-0"> *** </v-card-text>
          </v-col>
        </v-row>
        <v-row class="mx-16">
          <v-col class="d-flex mt-2 pt-0" cols="8">
            <v-card-text class="pt-0"> 手机 </v-card-text>
            <v-card-text class="pt-0"> {{ telephone }} </v-card-text>
          </v-col>
        </v-row>
        <v-row class="mx-16">
          <v-col class="d-flex mt-2 pt-0" cols="8">
            <v-card-text class="pt-0"> 邮箱 </v-card-text>
            <v-card-text class="pt-0"> {{ usermail }} </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template> 

<script lang="ts">
import Vue from "vue";
import authServies from "@/page/auth/auth.servies";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";
import accountserves from "./account.serve";
import { BaceUserdata, EditUserData } from "../user.interface";
export default Vue.extend({
  data() {
    return {
      uuid: null,
      usernickname: "",
      telephone: "",
      usermail: "",
    };
  },
  methods: {
    editbtn() {
      let userdata: EditUserData = {
        usernickname: "bbbbb",
        usermail: "1789@qq.com",
        userico: "222",
        telephone: "15244449999",
      };
      // accountserves.upUserDate(userdata).subscribe((data) => {
      //   console.log(data);
      // });
    },
  },

  created() {

    // authServies
    //   .asyncjiexiJwtDecjeck(this.$store.state.login.idtoken)
    //   .subscribe((data) => {
    //     console.log("user.vue asyncjiexiJwtDecjeck data", data);
    //     // let passkey = {
    //     //   hash: string,
    //     // };
    //   });
    console.log();
    console.log('',this.$route.query);
    var authkeyToken = this.$store.state.login.idtoken;
    authServies
      .asyncjiexiJwtDecjeck(authkeyToken)
      .pipe(
        switchMap((data) => {
          console.log(data);
          this.uuid = data.range;

          // TODO:
          // return of('11')
          return accountserves.byuseridgetUserDate({
            hash: data.hash,
            range: data.range,
            index: data.index,
          });
        })
      )
      .subscribe((data) => {
        this.usernickname = data.usernickname;
        this.telephone = data.telephone;
        this.usermail = data.usermail;
        let _data = data as BaceUserdata;
        // this.name = _data.usernickname;
        console.log(data);
      });
  },
});
</script>
