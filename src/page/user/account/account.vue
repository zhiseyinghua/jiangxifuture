<template>
  <v-container>
    <!-- 页面排版 -->
    <v-row no-gutters>
      <v-col cols="auto"></v-col>
      <v-col md="6" sm="8"
      cols="11" offset-md="3" offset-sm="2">
        <!-- 信息框 -->
        <v-card>
          <v-card-actions>
            <v-card-title headline grey lighten-5>基本信息</v-card-title>
            <v-spacer></v-spacer>
            <!-- 修改框弹窗 -->
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" @click="editbtn">
                  <v-icon>mdi-account-edit-outline</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-5">
                  修改基本信息</v-card-title
                >
                 <v-card class="ma-10" flat>  
                  <v-text-field
                    v-for="item in items"
                  :key="item"
                    :label="item"
                    outlined
                    clearable
                    dense
                  >
                  </v-text-field>
                 </v-card>
                 <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="primary" text @click="dialog = false">
                    暂不修改
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    确认修改
                  </v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
          </v-card-actions>
          <v-divider class="mx-6"></v-divider>
          <v-card-actions class="justify-center mt-10">
            <v-btn icon x-large>
              <v-avatar size="100">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </v-btn>
          </v-card-actions>
          <v-row class="mx-16 mt-1">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text> 姓名 </v-card-text>
              <v-card-text> {{ usernickname }} </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mx-16">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text class="pt-0"> 登陆密码 </v-card-text>
              <v-card-text class="pt-0"> *** </v-card-text>
            </v-col>
          </v-row>
          <!-- <v-row class="mx-16" v-for="link in links"
            :key="link.text">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text class="pt-0"> {{link.text}} </v-card-text>
              <v-card-text class="pt-0"> {{ link.message }} </v-card-text>
            </v-col>
          </v-row> -->
          <v-row class="mx-16">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text class="pt-0"> 邮箱 </v-card-text>
              <v-card-text class="pt-0"> {{ usermail }} </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mx-16">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text class="pt-0"> 位置 </v-card-text>
              <v-card-text class="pt-0"> {{ position }} </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mx-16">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text class="pt-0"> 公司 </v-card-text>
              <v-card-text class="pt-0"> {{ companyname }} </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mx-16">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text class="pt-0"> 注册时间 </v-card-text>
              <v-card-text class="pt-0"> {{ startdate }} </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> 

<script lang="ts">
import authServies from "@/page/auth/auth.servies";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";
import accountserves from "./account.serve";
import { BaceUserdata, EditUserData } from "../user.interface";
export default {
  data() {
    return {
      uuid: null,
      usernickname: "",
      telephone: "",
      usermail: "",
      userico: "",
      position: "",
      startdate: "",
      companyname: "",
      dialog: false,
     items: ["昵称", "手机", "邮箱", "位置", "公司"],
      links: [
        { text: "手机", message: " telephone" },
        { text: "邮箱", message: "usermail" },
         { text: "位置", message: " position" },
        { text: "公司名称", message: "companyname" },
         { text: "注册时间", message: " startdate" },
      ]
    };
  },
  methods: {
    editbtn() {
      let userdata: EditUserData = {
        usernickname: "这是修改123",
        usermail: "1789@qq.com",
        userico: "444",
        telephone: "15244449999",
        position: "111",
        startdate: "222",
        companyname: "333",
      };
    },
  },
  created() {
    var authkeyToken = this.$store.state.login.idtoken;
    authServies
      .asyncjiexiJwtDecjeck(authkeyToken)
      .pipe(
        switchMap((data) => {
          // console.log(data);

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
        this.userico = data.userico;
        this.position = data.position;
        this.startdate = data.startdate;
        this.companyname = data.companyname;
        let _data = data as BaceUserdata;
        // this.name = _data.usernickname;
        console.log(data);
        console.warn("消息内容！");
      });
    // console.warn(authkeyToken);
  },
};
</script>
