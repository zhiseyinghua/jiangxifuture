import { CommonInterfaceElact } from "@/common/common.interface";


export interface OrderInterface extends CommonInterfaceElact {
  // 地点
  localPlace: OrderlocalPlaceInterface;
  // 任务结束时间
  orderendTime: String;
  // 任务开始时间
  orderstartTime: String;
  // figuetime:string;
  // 不动产测试   一次性测试
  type: 'realEstateTest' | 'oneTimeTest';
  // 预估时间
  estimatedTime: String;
  // 面积
  area: any;
  // 创建者
  creator: CommonInterfaceElact;
  // 技术员
  technician: CommonInterfaceElact;
  // 实际派发时间
  timeAfterDistribution: String;
  // 技术员实际完成时间
  technicianCompletionTime: String;
  // 外业完成时间
  completionTime: String;
  // 内业完成时间
  insidePagesFinish: String;
  // 合同完成时间
  contractCompleted: String;
  // 金额到账时间
  timeReceiptAmount: String;
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
  timestamp: Number;
  // 在哪个所属团队发的任务
  creatorkey?: CommonInterfaceElact;
}
export interface OrderlocalPlaceInterface {
  lng: Number;
  lat: Number;
  local: string;
}

/**
 * 第一次put一个订单到数据库
 */
export interface PutOrderOne extends CommonInterfaceElact {
  ordername: string;
  localPlace: OrderlocalPlaceInterface;
  type: OrderType;
  estimatedTime: String;
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
  timestamp: number;
}

export type OrderType = 'realEstateTest' | 'oneTimeTest';

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

/**
 * 更新其他信息的接口
 */
export interface UpdateOtherFormation extends CommonInterfaceElact {
  area: string;
  realMoney: string;
  // 实际费用
}

/**
 * 更新那个值
 */
export interface UpdateOneMessage extends CommonInterfaceElact {
  which: string;
  value: string;
}

export interface UpdateTime extends CommonInterfaceElact {
  // 实际派发时间
  timeAfterDistribution: String;
  // 技术员实际完成时间
  technicianCompletionTime: String;
  // 外业完成时间
  completionTime: String;
  // 内业完成时间
  insidePagesFinish: String;
  // 合同完成时间
  contractCompleted: String;
  // 金额到账时间
  timeReceiptAmount: String;
}


