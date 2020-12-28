<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th >基本信息</th>
            <th>登陆账号</th>
            <th>登陆密码</th>
            <th>手机</th>
            <th>邮箱</th>
            <th>注册时间</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td>111</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template> 
<script>
import authServies from "@/page/auth/auth.servies";
// import UserServe from "../user.serve";
import accountserves from "@/page/user/account/account.serve";
import { switchMap } from 'rxjs/operators';
export default {
  data() {
    return {};
  },
  created: function () {
    var authkeyToken = this.$store.state.login.idtoken;
    console.log("account.vue token", userkeyToken);
    authServies
      .asyncJwtDecjeck(authkeyToken)
      .pipe(
        switchMap((userkeyToken) => {
          console.log('1111111111111111111',authkeyToken)
          return accountserves.byuseridgetUserDate({
            hash: userkeyToken.hash,
            range: userkeyToken.range,
            index: userkeyToken.index,
          });
        }),
        switchMap((data)=>{
          console.log(data)
        }),
         switchMap((data)=>{
          console.log(data)
        }),
        
      )
      .subscribe((data) => {
        console.log(data);
      });
    // from(authServies.jwtDecodecheck(userkeyToken)).pipe(
    //   switchMap((userdata)=>{
    //     return accountserves.byuseridgetUserDate({
    //       hash:userdata.hash,
    //       range:userdata.range,
    //       index:userdata.index
    //     })
    //   })
    // ).subscribe(
    //   data=>{
    //     console.log(data)
    //   }
    // )
    // Accountserves.byuseridgetUserDate()
  },
};
</script>