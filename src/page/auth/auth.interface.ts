/**
 * 发送短信接口
 */
export interface SendPhoneSMSInterface {
  mobile: "18779868511";
  devices: "phone" | "web";
}

/**
 * 注册返回的错误木马
 */
export interface SignsuccessInterface {
  data: {
    idtoken: string;
    code?: string;
    status?: "success" | "";
  };
}

/**
 * 注册，重置密码前端发送过来的数据接口
 * msg_id为调用发送验证码API的返回值
 */
export interface LoginInWithSMSVerifyCodeInput {
  phone: string;
  msg_id: string;
  code: string;
  provider: "phone" | "web";
  encodepossword: string;
  device: string;
  platform: string;
}
