export const httpHost = {
  localHost: "api/",
  // 判断拦截器的参数里是否要加token
  check_url_with_token: {
    // 发送极光验证码短信
    seedjpushsms: "seedjpushsms",
    // token换token
    bytokengettoken: "bytokengettoken",
    // 注册
    verifysmscoderegister: "verifysmscoderegister",
    // 手机号和密码登录
    byusermimalogin: "byusermimalogin",
    // 手机验证码登录
    verificationcodelogin: "verificationcodelogin",
  },
};
