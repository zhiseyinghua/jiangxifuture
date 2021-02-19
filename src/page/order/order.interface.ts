import { CommonInterfaceElact } from "@/common/common.interface";

/**
 * 第一次put一个订单到数据库
 */
export interface PutOrderOne extends CommonInterfaceElact {
    ordername:string;
    localPlace: OrderlocalPlaceInterface;
    type: OrderType;
    estimatedTime: Number;
    area: string;
    creatorkey: CommonInterfaceElact;
    // 预估费用
    estimatedMoney: string;
    // 甲方信息
    ONEinformation: {
      // 电话
      phone: string;
      // 邮箱
      email: string;
      name: string;
    };
    timestamp:number
  }
  export type OrderType = 'realEstateTest' | 'oneTimeTest';
  export interface OrderlocalPlaceInterface {
    lng: number;
    lat: number;
    local: string;
  }

export interface CommonqueryInterface {
  list:any[],
  maxsize: number
}
