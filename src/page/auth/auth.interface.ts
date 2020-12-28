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
 * 注册，重置密码 验证码登录前端发送过来的数据接口
 * msg_id为调用发送验证码API的返回值
 */
export interface LoginInWithSMSVerifyCodeInput {
  phone: string;
  msg_id: string;
  code: string;
  provider: "phone" | "web";
  device: string;
  platform: string;
  // 密码和更换密码必须要，验证码登录可无
  encodepossword?: string;
}
