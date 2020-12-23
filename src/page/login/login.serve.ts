import { AxiosElasticService } from "@/common/fromaxios";
import { Observable } from "rxjs";
import { delay, map, tap } from "rxjs/operators";
import { AuthConfig } from "../auth/auth.common";
import { LoginInWithSMSVerifyCodeInput } from "../auth/auth.interface";

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
        encodepossword: password,
        device: AuthConfig.device,
        platform: AuthConfig.platform,
      }
    ).pipe(
      map((data) => {
        return data["data"];
      }),
      delay(1000)
    );
  }

  static SMSLogin(SMSLogin: LoginInWithSMSVerifyCodeInput): Observable<any> {
    let SMSLoginData: LoginInWithSMSVerifyCodeInput = {
      phone: SMSLogin.phone,
      msg_id: SMSLogin.msg_id,
      code: SMSLogin.code,
      provider: 'web',
      encodepossword: SMSLogin.encodepossword,
      device: AuthConfig.device,
      platform: AuthConfig.platform,
    };
    return AxiosElasticService.AxiosService(
      "POST",
      AuthConfig.zone + "/" + AuthConfig.byphoneresetpossword,
      SMSLoginData
    );
  }
}
