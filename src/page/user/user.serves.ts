import { CommonInterfaceElact } from "@/common/common.interface";
import { AxiosElasticService } from "@/common/fromaxios";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { UserConfig } from "./user.config";

export default class UserServe {
  static getUserInformation(key: CommonInterfaceElact): Observable<any> {
    // console.log(key);
    return AxiosElasticService.AxiosService(
      "post",
      "user/searchbyuserid",
      key
    ).pipe(
      map((data) => {
        console.log(data);
      })
    );
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
