import store from "@/store";
import { from, Observable, throwError } from "rxjs";
import { delay, map } from "rxjs/operators";
import { httpHost } from "@/common/api";
import { AxiosElasticService } from "@/common/fromaxios";
import { AuthConfig } from "./auth.common";
import Axios from "axios";
import {
  LoginInWithSMSVerifyCodeInput,
  SignsuccessInterface,
} from "./auth.interface";
let jwt = require("jsonwebtoken");

export default class AuthServies {
  static log = "AuthServies";
  /**
   * 改变前端state状态的方法
   */
  public static logintest(token: string) {
    store.dispatch("login/loginAction", token);
  }

  public static SendPhoneSMSInterface(
    mobile: string,
    devices: string
  ): Observable<any> {
    // TODO:电话号码修改
    let a = {
      mobile: "18779868511",
      devices: "phone",
    };
    return AxiosElasticService.AxiosService(
      "POST",
      AuthConfig.zone + "/" + AuthConfig.seedjpushsms,
      a
    );
  }

  public static bytokengettoken(): Observable<any> {
    return AxiosElasticService.AxiosService(
      "POST",
      AuthConfig.zone + "/" + AuthConfig.bytokengettoken
    );
  }

  /**
   * 用户注册
   * @param signData
   */
  static signupAuth(signData: LoginInWithSMSVerifyCodeInput): Observable<any> {
    return AxiosElasticService.AxiosService(
      "POST",
      AuthConfig.zone + "/" + AuthConfig.verifysmscoderegister,
      signData
    ).pipe(
      map((data: SignsuccessInterface) => {
        //后端返回错误结果
        if (!data.data.status || data.data.status != "success") {
          console.log('1111111111111112',data.data)
          return throwError(new Error(data.data.status))
        } else {
          console.log("signupAuth signupAuth data", data);
          return AuthServies.logintest(data.data.idtoken);
        }
      }),
      delay(2000)
    );
  }

  /**
   * token解码
   * @param {*}
   */
  public static jwtDecodecheck(token: string) {
    let decoded = jwt.decode(token);
    console.log(this.log + "  " + "decoded", decoded);
    return decoded["exp"];

    // return true
  }

  /**
   * 返回还有多久过期的时间 单位是小时
   * @param {*} token
   */
  public static chicktokenTime(token: string) {
    console.log("chicktokenTime start");
    let time = AuthServies.jwtDecodecheck(token);
    console.log(time);
    let timestamp = Date.now();
    console.log(time);
    let date = parseInt(time) * 1000;

    console.log(date);
    console.log(timestamp);
    let gap = (date - timestamp) / (3600 * 1000);
    console.log("还有多久过期gap", gap);
    return gap;
  }
}
