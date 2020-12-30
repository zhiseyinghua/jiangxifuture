import { CommonInterfaceElact } from "@/common/common.interface";
import { AxiosElasticService } from "@/common/fromaxios";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserConfig } from "../user.config";
import { EditUserData } from "../user.interface";

export default class Accountserves{
    /**
   *  通过user的id得到用户信息
   * @param key 用户的key
   */
  static byuseridgetUserDate(key: CommonInterfaceElact): Observable<any> {
    return AxiosElasticService.AxiosService(
      "post",
      UserConfig.zone + "/" + UserConfig.searchbyauthkey,
      key
    ).pipe(
      map((data)=>{
        return data['data']
      })
    )
  }
  static upUserDate(user:EditUserData): Observable<any> {
    return AxiosElasticService.AxiosService(
      "post",
      UserConfig.zone + "/" + UserConfig.updateuserinfo,
      user
    ).pipe(
      map((data)=>{
        return data['data']
      })
    )
  }
}