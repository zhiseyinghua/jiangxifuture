import { AxiosElasticService } from "@/common/fromaxios";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { OrderConfig } from "./order.common";
import { PutOrderOne } from "./order.interface";

export default class OrderServe {
  /**
   *
   */
  static putNewOrder(putorderdata: PutOrderOne): Observable<any> {
    return AxiosElasticService.AxiosService(
      "post",
      OrderConfig.zone + "/" + OrderConfig.putorder,
      putorderdata
    ).pipe(
      map((data) => {
        console.log("OrderServe putNewOrder", data);
        return data["data"];
      }),
      delay(2000)
    );
  }

  /**
   *
   */
  public static getfigure(from: string, size: string) {
    return AxiosElasticService.AxiosService(
      "post",
      OrderConfig.zone + "/" + "getfigure"
    ).pipe(
      map((data) => {
        return data['data'];
      })
    );
  }
}
