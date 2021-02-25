import { CommonInterfaceElact } from "@/common/common.interface";



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
  timestamp: Number;
}

export type OrderType = 'realEstateTest' | 'oneTimeTest';
const data: PutOrderOne = {
  hash: '',
  range: '',
  index: '',
  localPlace: {
    lng: 123,
    lat: 123,
    local: '',
  },
  type: 'oneTimeTest',
  estimatedTime: 123654789,
  area: '123',
  creatorkey: {
    hash: '',
    range: '',
    index: '',
  },
  ordername: '123',
  estimatedMoney: '123',
  // 甲方信息
  ONEinformation: {
    // 电话
    phone: 'string',
    // 邮箱
    email: '123',
    name: '123',
  },
  timestamp: 123,
};

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



