import store from "@/store";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { httpHost } from "@/common/api";
import { AxiosElasticService } from "@/common/fromaxios";
import { AuthConfig } from "./auth.common";
import Axios from "axios";

export default class AuthServies {
  /**
   * 改变前端state状态的方法
   */
  public static logintest() {
    store.dispatch("login/loginAction", "123456789")

  }

  public static SendPhoneSMSInterface(mobile:string,devices: string) : any{
    // return Axios.post(httpHost.localHost+ '/' +httpHost.auth.zone+ '/'+ httpHost.auth.seedjpushsms).pipe(
    //   map((data) => {
    //     return data
    //   })
    // )
    return AxiosElasticService.AxiosService(
      "POST",
      AuthConfig.zone + "/" + AuthConfig.seedjpushsms,
      {
        mobile: "18779868511",
        devices: "phone",
      }
    );
    // return Axios.post('/api/auth/seedjpushsms', {
    //   "mobile": "18779868511",
    // "devices": "phone"
    // } )
    // .then(function (response) {
    //   return 1
    // })
    // .catch(function (error) {
    //   return 1
    // });
  }
}
