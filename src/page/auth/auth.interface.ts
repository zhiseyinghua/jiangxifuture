/**
 * 发送短信接口
 */
export interface SendPhoneSMSInterface {
  mobile: "18779868511";
  devices: "phone" | "web";
}

export interface SignsuccessInterface{
  data:{
    "status":"success"| '',
  "idtoken": string
  }
}

/**
 * 注册，重置密码前端发送过来的数据接口
 * msg_id为调用发送验证码API的返回值
 */
export interface LoginInWithSMSVerifyCodeInput {
  phone:string
  msg_id: string;
  code: string;
  provider: 'phone' | 'web';
  encodepossword: string
  device: string;
  platform: string
}