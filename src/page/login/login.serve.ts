import { AxiosElasticService } from "@/common/fromaxios";
import { Observable } from "rxjs";
import { delay, map, switchMap, tap } from "rxjs/operators";
import { AuthConfig } from "../auth/auth.common";
import { LoginInWithSMSVerifyCodeInput } from "../auth/auth.interface";
import authServies from "../auth/auth.servies";
var md5 = require('js-md5');

export default class loginServe {
  /**
   * 用于登录的方法
   * @param password 密码
   * @param account
   */
  static userLogin(password: string, account: string): Observable<any> {
    return AxiosElasticService.AxiosService(
      "post",
      AuthConfig.zone + "/" + AuthConfig.byusermimalogin,
      {
        phone: account,
        encodepossword: md5(password),
        device: AuthConfig.device,
        platform: AuthConfig.platform,
      }
    ).pipe(
      map((data) => {
        return data["data"];
      }),
      tap((data) => {
        if (data.idtoken) {
          authServies.dispatchlogintoken(data.idtoken);
        } else {
          console.log("error登录失败1");
        }
      }),
      tap((data) => {
        if (data.idtoken) {
          authServies.setlocalStorageToken(data.idtoken);
        } else {
          console.log("error登录失败2");
        }
      })
    );
  }

  // code: this.check,
  // provider: AuthConfig.jiguangDevice,
  // // eslint-disable-next-line @typescript-eslint/camelcase
  // msg_id: this.msg_id,
  // phone: this.moblie,
  // device: AuthConfig.device,
  // platform: AuthConfig.platform,
  static sMSLoginf(SMSLogindata: LoginInWithSMSVerifyCodeInput): Observable<any> {
    let SMSLoginData: LoginInWithSMSVerifyCodeInput = {
      phone: SMSLogindata.phone,
      msg_id: SMSLogindata.msg_id,
      code: SMSLogindata.code,
      provider: 'web',
      device: AuthConfig.device,
      platform: AuthConfig.platform,
    };
    
    return AxiosElasticService.AxiosService(
      "POST",
      AuthConfig.zone + "/" + AuthConfig.verificationcodelogin,
      SMSLoginData
    ).pipe(
      map(data=>{
        return data['data']
      }),
      tap((data) => {
        if (data.idtoken) {
          authServies.dispatchlogintoken(data.idtoken);
        } else {
          console.log("error登录失败3");
        }
      }),
      tap((data) => {
        if (data.idtoken) {
          authServies.setlocalStorageToken(data.idtoken);
        } else {
          console.log("error登录失败4");
        }
      }),
    )
  }
}
