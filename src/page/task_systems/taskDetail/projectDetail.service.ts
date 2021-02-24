import { AxiosElasticService } from "@/common/fromaxios";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";

export default class ProjectDetailClass {
  /**
   * 更改时间
   */
  public static updateOrderstartTime(choose: string,time:number): Observable<any> {
    // return AxiosElasticService.AxiosService().pipe(
    //     map(data=>{
    //         return data
    //     })
    // )
    console.log("dfddddddddddddddddddddd",choose, time)
    return of(time).pipe(
      map((data) => {
        console.log("data", choose);
        return data;
      }),
      delay(500)
    );
  }

  

  
}
