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
        data.data.orderendTime = moment(data.data.orderendTime).format("LLL");
        data.data.orderstartTime = moment(data.data.orderstartTime).format(
          "LLL"
        );
        data.data.timeAfterDistribution = moment(
          data.data.timeAfterDistribution
        ).format("LLL");
        data.data.technicianCompletionTime = moment(
          data.data.technicianCompletionTime
        ).format("LLL");
        data.data.completionTime = moment(data.data.completionTime).format(
          "LLL"
        );
        data.data.insidePagesFinish = moment(
          data.data.insidePagesFinish
        ).format("LLL");
        data.data.contractCompleted = moment(
          data.data.contractCompleted
        ).format("LLL");
        //
        data.data.timeReceiptAmount = moment(
          data.data.timeReceiptAmount
        ).format("LLL");
        data.data.estimatedTime = moment(data.data.estimatedTime).format("LLL");
        // @ts-ignore
        data.data.type = OrderConfig.orderType[data.data.type];
        return data["data"];
      })
      // estimatedTime
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
   * 修改时间信息
   * @param data
   */
  // public static updateOrderManyTime(data: UpdateTime) {
  //   return AxiosElasticService.AxiosService(
  //     "post",
  //     OrderConfig.zone + "/" + "update_time",
  //     data
  //   ).pipe(
  //     map((data) => {
  //       return data["data"];
  //     }),
  //     delay(1000)
  //   );
  // }

  public static byOrderEndTimeOrder(from:string,size:string) :Observable<any>{
    return AxiosElasticService.AxiosService(
      "POST",
      OrderConfig.zone + "/" + "order_end_time_order",
      {
        from:from,
        size:size
      }
    ).pipe(
      map((data)=>{
        return data['data']
      })
    )
  }
}
