import { AxiosElasticService } from "@/common/fromaxios";
import { Observable } from "rxjs";
import { UserConfig } from "./user.config";

export default class UserServe {
  /**
   *
   * @param key 用户的key
   */
  static byuseridgetUserDate(key: string): Observable<any> {
    return AxiosElasticService.AxiosService(
      "post",
      UserConfig.zone + "/" + UserConfig.searchbyuserid,
      {
        hash: "auth-2020-12-22",
        range: "089df3a1-4eb7-4f09-88ff-cd4be78fbf27",
        index: "auth",
      }
    )
  }
}
// <v-btn v-on:click="getuserdata"> get user data</v-btn>
// methods:{
//   getuserdata() {
//    UserServe.byuseridgetUserDate('key').subscribe(
//      success=>{
//        console.log('11111111111111111111',success)
//      },
//      err =>{
//        console.log('2222222222222222222222',err)
//      }
//    )
//  }
// }