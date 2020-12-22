import { AxiosElasticService } from "@/common/fromaxios";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthConfig } from "../auth/auth.common";

export default class loginServe {
  /**
   * 用于登录的方法
   * @param password 密码
   * @param account
   */
  static userLogin(password: string, account: string): Observable<any> {
    return AxiosElasticService.AxiosService(
      "post",
      AuthConfig.zone + '/'+ AuthConfig.byusermimalogin,
      {
        phone: account,
        encodepossword: password,
        device: AuthConfig.device,
        platform: AuthConfig.platform,
      }
    ).pipe(
        tap(data=>{
            
        })
    )
  }
}
