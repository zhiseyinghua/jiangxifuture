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
      items: ["姓名", "手机", "邮箱", "位置", "公司"],
      links: [
        { text: "手机", message: " telephone" },
        { text: "邮箱", message: "usermail" },
        { text: "位置", message: " position" },
        { text: "公司名称", message: "companyname" },
        { text: "注册时间", message: " startdate" },
      ],   
    };
  },
  created () {
    const authorization = localStorage.getItem("token");
    axios({
      headers: {authorization},
      method: "post",
      url: "/api/user/searchbyauthkey",
    }).then((res) => {
      this.menuList = res.data
      console.warn(res.data);
    });
  },
  // data() {
  //   menuList: []
  // },
  // created() {
  //   this.getMenuList ()
  // },
  // methods() {
  //   async getMenuList() {
  //     // 发送请求获取左侧菜单数据
  //     const { data: res } = await this.$http.post('user/searchbyauthkey')
  //     // if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
  //     this.menuList = res.data
  //     console.log(res)
  // }
  // }
};
</script>
