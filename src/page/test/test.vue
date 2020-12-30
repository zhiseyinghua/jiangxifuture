<template> </template>

<script>
import authServies from "@/page/auth/auth.servies";
// import UserServe from "../user.serve";
import accountserves from "@/page/user/account/account.serve";
import { switchMap } from "rxjs/operators";
export default {
  data() {
    return {};
  },
  created: function() {
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
    from(authServies.jwtDecodecheck(userkeyToken))
      .pipe(
        switchMap((userdata) => {
          return accountserves.byuseridgetUserDate({
            hash: userdata.hash,
            range: userdata.range,
            index: userdata.index,
          });
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
    Accountserves.byuseridgetUserDate();
  },
};
</script>
