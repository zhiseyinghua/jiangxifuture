import { AxiosElasticService } from "@/common/fromaxios";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export default class ProjectDetailClass {
  public static updateOrderstartTime(): Observable<any> {
    // return AxiosElasticService.AxiosService().pipe(
    //     map(data=>{
    //         return data
    //     })
    // )
    return of(Date.parse(new Date() + "")).pipe(
        map(data=>{
            console.log(data)
            return data;
        })
    )
  }
}
