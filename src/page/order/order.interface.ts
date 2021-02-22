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

/**
 * search 订单
 */
export interface Getfigure {
  size: string;
  from: string;
}

export interface OrderInterface extends CommonInterfaceElact {
    // 地点
    localPlace: OrderlocalPlaceInterface;
    // 任务结束时间
    orderendTime: Number;
    // 任务开始时间
    orderstartTime: Number;
    // figuetime:string;
    // 不动产测试   一次性测试
    type: 'realEstateTest' | 'oneTimeTest';
    // 预估时间
    estimatedTime: Number;
    // 面积
    area: any;
    // 创建者
    creator: CommonInterfaceElact;
    // 技术员
    technician: CommonInterfaceElact;
    // 实际派发时间
    timeAfterDistribution: Number;
    // 技术员实际完成时间
    technicianCompletionTime: Number;
    // 外业完成时间
    completionTime: Number;
    // 内业完成时间
    insidePagesFinish: Number;
    // 合同完成时间
    contractCompleted: Number;
    // 金额到账时间
    timeReceiptAmount: Number;
    // 预估费用
    estimatedMoney: string;
    // 实际费用
    realMoney: string;
    // 甲方信息
    ONEinformation: {
      // 电话
      phone: string;
      // 邮箱
      email: string;
      name: string;
    };
    timestamp: number;
    // 在哪个所属团队发的任务
    creatorkey?: CommonInterfaceElact;
  }

  
/**
 * 更改甲方信息接口
 */
export interface UpdateFirstinformation extends CommonInterfaceElact {
  ONEinformation: {
    // 电话
    phone: string;
    // 邮箱
    email: string;
    name: string;
  };
}