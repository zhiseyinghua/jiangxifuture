import { AxiosElasticService } from "@/common/fromaxios";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { OrderConfig } from "./order.common";
import moment from "moment";
import {
  PutOrderOne,
  UpdateFirstinformation,
  UpdateOtherFormation,
} from "./order.interface";
import { CommonInterfaceElact } from "@/common/common.interface";

export default class OrderServe {
  public static updateOrderstartTime(
    choose: string,
    time: number,
    key: CommonInterfaceElact
  ): Observable<any> {
    console.log("1111111111111111111", time);
    return AxiosElasticService.AxiosService("post", "/figure/one_message", {
      ...key,
      which: choose,
      value: time.valueOf(),
    }).pipe(
      map((data) => {
        console.log("11111111111111111111", data);
        data.data.value = moment(data.data.value).format("LLL");
        return data["data"];
      })
    );
    // console.log("dfddddddddddddddddddddd",choose, time)
    // return of(time).pipe(
    //   map((data) => {
    //     console.log("data", choose);
    //     return data;
    //   }),
    //   delay(500)
    // );
  }

  public static qingchuendtime(
    choose: string,
    time: number,
    key: CommonInterfaceElact
  ): Observable<any> {
    return AxiosElasticService.AxiosService("post", "/figure/one_message", {
      ...key,
      which: choose,
      value: time,
    }).pipe(
      map((data) => {
        return data["data"];
      })
    );
    // console.log("dfddddddddddddddddddddd",choose, time)
    // return of(time).pipe(
    //   map((data) => {
    //     console.log("data", choose);
    //     return data;
    //   }),
    //   delay(500)
    // );
  }

  /**
   *
   */
  static putNewOrder(putorderdata: any): Observable<any> {
    // @ts-ignore
    putorderdata["estimatedTime"] = Date.parse(
      // @ts-ignore
      new Date(putorderdata.estimatedTime)
    );
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
          element.orderstartTime = moment(element.orderstartTime).format("LLL");
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

  /**
   * 修改订单的其他信息
   * @param data
   */
  public static updateOtherInformationF(data: UpdateOtherFormation) {
    return AxiosElasticService.AxiosService(
      "post",
      OrderConfig.zone + "/" + "other_information",
      data
    ).pipe(
      map((data) => {
        return data["data"];
      }),
      delay(1000)
    );
  }
  public static bykeygetorder(key: CommonInterfaceElact): Observable<any> {
    return AxiosElasticService.AxiosService(
      "post",
      "/figure/by_key_getfigure",
      key
    ).pipe(
      map((data) => {
        data.data.orderendTime = OrderServe.checkouttime(
          data.data.orderendTime
        );
        data.data.orderstartTime = OrderServe.checkouttime(
          data.data.orderstartTime
        );
        data.data.timeAfterDistribution = OrderServe.checkouttime(
          data.data.timeAfterDistribution
        );
        data.data.technicianCompletionTime = OrderServe.checkouttime(
          data.data.technicianCompletionTime
        );
        data.data.completionTime = OrderServe.checkouttime(
          data.data.completionTime
        );
        data.data.insidePagesFinish = OrderServe.checkouttime(
          data.data.insidePagesFinish
        );
        data.data.contractCompleted = OrderServe.checkouttime(
          data.data.contractCompleted
        );
        //
        data.data.timeReceiptAmount = OrderServe.checkouttime(
          data.data.timeReceiptAmount
        );
        data.data.estimatedTime = OrderServe.checkouttime(
          data.data.estimatedTime
        );
        // @ts-ignore
        data.data.type = OrderConfig.orderType[data.data.type];
        return data["data"];
      })
      // estimatedTime
    );
  }
  /**
   * 修改时间信息
   * @param data
   */

  /**
   * 根据OrderEndTime获取order
   * @param from
   * @param size
   */
  public static byOrderTimeOrder(
    timeWhich: string,
    maxtime: Number,
    mintime: Number
  ): Observable<any> {
    return AxiosElasticService.AxiosService(
      "POST",
      OrderConfig.zone + "/" + "order_time_order",
      {
        timeWhich: "orderstartTime",
        maxtime: 1712281609000,
        mintime: 0,
      }
    ).pipe(
      map((data) => {
        return data["data"];
      }),
      delay(1000)
    );
  }

  /**
   *
   * @param params
   */
  public static checkouttime(params: any) {
    if (params && params != null && params != "null") {
      return moment(params.completionTime).format("LLL");
    } else {
      return null;
    }
  }
}
