import { AxiosElasticService } from "@/common/fromaxios";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export default class ProjectDetailClass {
  /**
   * 更改时间
   */
  public static updateOrderstartTime(choose: string): Observable<any> {
    // return AxiosElasticService.AxiosService().pipe(
    //     map(data=>{
    //         return data
    //     })
    // )
    return of(Date.parse(new Date() + "")).pipe(
      map((data) => {
        console.log("data", choose);
        return data;
      })
    );
  }
}
