import { CommonInterfaceElact } from "@/common/common.interface";
import { AxiosElasticService } from "@/common/fromaxios";
import { Observable } from "rxjs";
import { UserConfig } from "../user.config";

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
    )
  }
}