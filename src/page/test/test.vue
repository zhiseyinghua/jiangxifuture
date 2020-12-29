<<<<<<< HEAD
<script>
import authServies from "@/page/auth/auth.servies";
// import UserServe from "../user.serve";
import accountserves from "@/page/user/account/account.serve";
import { switchMap } from "rxjs/operators";
export default {
=======
<template>
  <div>
    <div style="height:100px">test</div>
    <div>test</div>
    <v-btn @click="getauthass">颁发刷凭证</v-btn>
    <v-btn @click="getlocals3pingzheng">从本地拿凭证</v-btn>
  </div>
</template>
<script>
import authServies from "@/page/auth/auth.servies";

export default {
  name: "test",
>>>>>>> 1537195e593eb5f41b89bdd0f91c881abca6a200
  data() {
    return {
      
    };
  },
<<<<<<< HEAD
  created: function () {
    var authkeyToken = this.$store.state.login.idtoken;
    console.log("account.vue token", userkeyToken);
    authServies
      .asyncJwtDecjeck(authkeyToken)
      .pipe(
        switchMap((userkeyToken) => {
          console.log("1111111111111111111", authkeyToken);
          return accountserves.byuseridgetUserDate({
            hash: userkeyToken.hash,
            range: userkeyToken.range,
            index: userkeyToken.index,
          });
        }),
        switchMap((data) => {
          console.log(data);
        }),
        switchMap((data) => {
          console.log(data);
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
    from(authServies.jwtDecodecheck(userkeyToken)).pipe(
      switchMap((userdata)=>{
        return accountserves.byuseridgetUserDate({
          hash:userdata.hash,
          range:userdata.range,
          index:userdata.index
        })
      })
    ).subscribe(
      data=>{
        console.log(data)
      }
    )
    Accountserves.byuseridgetUserDate()
  },
};
</script>
=======
  methods:{
    getauthass() {
      authServies.getServeS3authority().subscribe(
        data=>{
          console.log(data)
        },
        err=>{

        }
      )
    },
    getlocals3pingzheng() {
      authServies.getS3authority().subscribe(
        data=>{
          console.log(data)
        }
      )
    }
    
  }
};
</script>
>>>>>>> 1537195e593eb5f41b89bdd0f91c881abca6a200
