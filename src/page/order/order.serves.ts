import { AxiosElasticService } from "@/common/fromaxios";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { OrderConfig } from "./order.common";
import moment from "moment";
import {
  OrderInterface,
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
          element.orderendTime = OrderServe.checkouttime(element.orderendTime);
          element.orderstartTime = OrderServe.checkouttime(
            element.orderstartTime
          );
          element.timeAfterDistribution = OrderServe.checkouttime(
            element.timeAfterDistribution
          );
          element.technicianCompletionTime = OrderServe.checkouttime(
            element.technicianCompletionTime
          );
          element.completionTime = OrderServe.checkouttime(
            element.completionTime
          );
          element.insidePagesFinish = OrderServe.checkouttime(
            element.insidePagesFinish
          );
          element.contractCompleted = OrderServe.checkouttime(
            element.contractCompleted
          );
          //
          element.timeReceiptAmount = OrderServe.checkouttime(
            element.timeReceiptAmount
          );
          element.estimatedTime = OrderServe.checkouttime(
            element.estimatedTime
          );
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
      })
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
  public static byOrderEndTimeOrder(
    from: string,
    size: string
  ): Observable<any> {
    return AxiosElasticService.AxiosService(
      "POST",
      OrderConfig.zone + "/" + "order_end_time_order",
      {
        from: from,
        size: size,
      }
    ).pipe(
      map((data) => {
        let newData = data["data"];
        newData.list.forEach((element: any) => {
          // @ts-ignore
          element.orderendTime = OrderServe.checkouttime(element.orderendTime);
          element.orderstartTime = OrderServe.checkouttime(
            element.orderstartTime
          );
          element.timeAfterDistribution = OrderServe.checkouttime(
            element.timeAfterDistribution
          );
          element.technicianCompletionTime = OrderServe.checkouttime(
            element.technicianCompletionTime
          );
          element.completionTime = OrderServe.checkouttime(
            element.completionTime
          );
          element.insidePagesFinish = OrderServe.checkouttime(
            element.insidePagesFinish
          );
          element.contractCompleted = OrderServe.checkouttime(
            element.contractCompleted
          );
          //
          element.timeReceiptAmount = OrderServe.checkouttime(
            element.timeReceiptAmount
          );
          element.estimatedTime = OrderServe.checkouttime(
            element.estimatedTime
          );
          // @ts-ignore
          element.type = OrderConfig.orderType[element.type];
        });
        return newData;
      })
    );
  }

  public static checkouttime(params: any) {
    if (params && params != null && params != "null") {
      return moment(params.completionTime).format("LLL");
    } else {
      return null;
    }
  }

  /**
   * 根据OrderEndTime获取order
   * @param from
   * @param size
   */
  public static byOrderTimeOrder(
    timeWhich: string,
    mintime: Number,
    maxtime: Number
  ): Observable<any> {
    return AxiosElasticService.AxiosService(
      "POST",
      OrderConfig.zone + "/" + "order_time_order",
      {
        timeWhich: timeWhich,
        mintime: mintime,
        maxtime: maxtime,
      }
    ).pipe(
      map((data) => {
        let newData = data["data"];
        newData.forEach((element: any) => {
          // @ts-ignore
          element.orderendTime = OrderServe.checkouttime(element.orderendTime);
          element.orderstartTime = OrderServe.checkouttime(
            element.orderstartTime
          );
          element.timeAfterDistribution = OrderServe.checkouttime(
            element.timeAfterDistribution
          );
          element.technicianCompletionTime = OrderServe.checkouttime(
            element.technicianCompletionTime
          );
          element.completionTime = OrderServe.checkouttime(
            element.completionTime
          );
          element.insidePagesFinish = OrderServe.checkouttime(
            element.insidePagesFinish
          );
          element.contractCompleted = OrderServe.checkouttime(
            element.contractCompleted
          );
          //
          element.timeReceiptAmount = OrderServe.checkouttime(
            element.timeReceiptAmount
          );
          element.estimatedTime = OrderServe.checkouttime(
            element.estimatedTime
          );
          // @ts-ignore
          element.type = OrderConfig.orderType[element.type];
        });
        return newData;
      })
    );
  }

  public static createExcel(data: any[]) {
    let jsonData: any[] = [];
    data.forEach((ele, index) => {
      if (!ele.realMoney || ele.realMoney != null) {
        ele.realMoney = "";
      } else {
      }
      let data = {
        序列: index,
        任务名称: ele.ordername,
        任务地点: ele.localPlace.local,
        任务结束时间: ele.orderendTime,
        任务开始时间: ele.orderstartTime,
        任务类型: ele.type,
        预估时间: ele.estimatedTime,
        "面积(单位平方米)": ele.area,
        实际派发时间: ele.timeAfterDistribution,
        技术员实际完成时间: ele.technicianCompletionTime,
        外业完成时间: ele.completionTime,
        内业完成时间: ele.insidePagesFinish,
        合同完成时间: ele.contractCompleted,
        金额到账时间: ele.timeReceiptAmount,
        "预估费用(单位元)": ele.estimatedMoney ,
        "实际费用(单位元)": ele.realMoney ,
        甲方电话: ele.ONEinformation.phone,
        甲方邮箱: ele.ONEinformation.email,
        甲方名字: ele.ONEinformation.name,
      };
      jsonData.push(data);
    });
    return jsonData;
  }
}
