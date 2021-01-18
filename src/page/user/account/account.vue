<template>
  <v-container>
    <!-- 页面排版 -->
    <v-row no-gutters>
      <v-col md="6" sm="8" cols="11" offset-md="3" offset-sm="2">
        <!-- 信息框 -->
          <v-card-actions>
            <v-card-title headline grey lighten-5>基本信息</v-card-title>
            <v-spacer></v-spacer>
            <!-- 修改框弹窗 -->
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-account-edit-outline</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-5">
                  修改基本信息</v-card-title
                >
                <v-card class="ma-10" flat>
                  <div v-for="(user, i) in useritems" :key="i">
                    <v-text-field
                      :label="user.name"
                      outlined
                      clearable
                      dense
                      v-model="user.data"
                    >
                    </v-text-field>
                  </div>
                </v-card>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="primary" text @click="dialog = false">
                    暂不修改
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="upuserdata()">
                    确认修改
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
          <v-divider class="mx-6 "></v-divider>
          <v-card-actions class="justify-start mt-12 mx-16">
            <v-btn icon x-large>
              <v-avatar  size="100">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar> 
            </v-btn>
          </v-card-actions>
          <v-row class="mx-5 mt-1">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text> 昵称 </v-card-text>
              <v-card-text> {{ usernickname }} </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mx-5">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text class="pt-0"> 邮箱 </v-card-text>
              <v-card-text class="pt-0"> {{ usermail }} </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mx-5">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text class="pt-0"> 位置 </v-card-text>
              <v-card-text class="pt-0"> {{ position }} </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mx-5">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text class="pt-0"> 公司 </v-card-text>
              <v-card-text class="pt-0"> {{ companyname }} </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mx-5">
            <v-col class="d-flex mt-2 pt-0" cols="8">
              <v-card-text class="pt-0"> 注册时间 </v-card-text>
              <v-card-text class="pt-0"> {{ startdate }} </v-card-text>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import authServies from "@/page/auth/auth.servies";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";
import accountserves from "./account.serves";
import { BaceUserdata, EditUserData } from "../user.interface";
import store from "@/store";
import router from "@/router";
import Bus from "@/common/bus";

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
      useritems: [{}],
    };
  },
  methods: {
    upuserdata() {
      // console.log('修改基本信息');
      let userdata = {
        usernickname: this.useritems[0].data,
        telephone: this.useritems[1].data,
        usermail: this.useritems[2].data,
        userico: this.userico,
        position: this.useritems[3].data,
        startdate: this.startdate,
        companyname: this.useritems[4].data,
      };
      Bus.$emit("overlayvalue", {
        overlayvalue: true,
      });
      accountserves.upUserDate(userdata).subscribe((data) => {
        Bus.$emit("overlayvalue", {
          overlayvalue: false,
        });
        if (data.range) {
          this.dialog = false;
          Bus.$emit("snackbar", {
            text: "修改成功",
            color: "green",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
          location.reload();
        } else if ((data.code = "000116")) {
          Bus.$emit("snackbar", {
            text: "没有修改任何信息，请认真填写",
            color: "pink",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
        }else {
          Bus.$emit("snackbar", {
            text: "服务器错误",
            color: "pink",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
        }
        console.log(data);
      });
    },
    // 给定于的循环数组定值
    suzufunction() {
      this.useritems = [
        { name: "姓名", data: null },
        { name: "手机", data: null },
        { name: "邮箱", data: null },
        { name: "位置", data: null },
        { name: "公司", data: null },
      ];
    },
  },

  created() {
    if (this.$route.path === "/user") {
      this.changeShow();
    }
    console.log(this.$route.query);
    let authdata = authServies.jiexiJwtDecjeck(store.state.login.idtoken);
    console.log("11111111111111", this, router.app.$route.query);
    let storeRange = authdata.range;
    let routeRange = router.app.$route.query;
    console.log("1111111111111", storeRange, routeRange);
    if (storeRange == routeRange) {
      console.log("account.vue 进入了自己的user页面");
    } else if (storeRange !== routeRange) {
      console.log("account.vue 进入别的user主页");
    } else {
    }
    // 重定义数组
    this.suzufunction();
    var authkeyToken = store.state.login.idtoken;
    authServies
      .asyncjiexiJwtDecjeck(authkeyToken)
      .pipe(
        switchMap((data) => {
          return accountserves.byuseridgetUserDate({
            hash: data.hash,
            range: data.range,
            index: data.index,
          });
        })
      )
      .subscribe((data) => {
        this.useritems = [
          { name: "姓名", data: data.usernickname },
          { name: "手机", data: data.telephone },
          { name: "邮箱", data: data.usermail },
          { name: "位置", data: data.position },
          { name: "公司", data: data.companyname },
        ];

        this.usernickname = data.usernickname;
        this.telephone = data.telephone;
        this.usermail = data.usermail;
        this.userico = data.userico;
        this.position = data.position;
        this.startdate = data.startdate;
        this.companyname = data.companyname;
      });
    (err) => {};
  },
};
</script>
