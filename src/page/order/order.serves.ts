import { AxiosElasticService } from "@/common/fromaxios";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { OrderConfig } from "./order.common";
import { PutOrderOne, UpdateFirstinformation } from "./order.interface";

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
      OrderConfig.zone + "/" + "getfigure",
      {
        from: from,
        size: size,
      }
    ).pipe(
      map((data) => {
        let newData = data["data"];
        newData.list.forEach((element: any) => {
          // @ts-ignore
          element.type = OrderConfig.orderType[element.type];
        });
        return newData;
      })
    );
  }
  /**
   * 修改甲方信息
   * @param data
   */
  public static updateOneInformation(data: UpdateFirstinformation) {
    return AxiosElasticService.AxiosService(
      "post",
      OrderConfig.zone + "/" + "firstinformation",
      data
    ).pipe(
      map((data) => {
        return data["data"];
      }),
      delay(1000)
    );
  }

  public static updateOtherInformationF(data: UpdateFirstinformation) {
    return AxiosElasticService.AxiosService(
      "post",
      OrderConfig.zone + "/" + "firstinformation",
      data
    );
  }
}
