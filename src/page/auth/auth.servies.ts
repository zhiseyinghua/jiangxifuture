import store from "@/store";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { HttpHost } from "@/common/api";
import { AxiosElasticService } from "@/common/fromaxios";
import { AuthConfig } from "./auth.common";
import {
  LoginInWithSMSVerifyCodeInput,
  SignsuccessInterface,
} from "./auth.interface";
import { AliyunConfig } from "./aliyun.common";
let jwt = require("jsonwebtoken");
var md5 = require("js-md5");

export default class AuthServies {
  static log = "AuthServies";
  /**
   * 改变前端state状态的方法
   */
  public static dispatchlogintoken(token: string) {
    store.dispatch("login/loginAction", token);
  }

  /**
   * 将用户token存到本地 方法
   * @param {*} Token
   * @param {*} email
   */
  public static setlocalStorageToken(token: string) {
    console.log("getlocalStorageToken");
    localStorage.setItem("token", token);
  }

  /**
   * 发短信
   * @param mobile
   * @param devices
   */
  public static SendPhoneSMSInterface(
    mobile: string,
    devices: string
  ): Observable<any> {
    let data = {
      mobile: mobile,
      devices: devices,
    };
    return AxiosElasticService.AxiosService(
      "POST",
      AuthConfig.zone + "/" + AuthConfig.seedjpushsms,
      data
    );
  }

  /**
   * 刷新token
   */
  public static bytokengettoken(): Observable<any> {
    return AxiosElasticService.AxiosService(
      "POST",
      AuthConfig.zone + "/" + AuthConfig.bytokengettoken
    ).pipe(
      map((data: SignsuccessInterface) => {
        //后端返回错误结果
        return data.data;
      }),

      tap((data) => {
        if (data.idtoken) {
          AuthServies.dispatchlogintoken(data.idtoken);
        } else {
          console.log("error登录失败111111179");
        }
      }),
      tap((data) => {
        if (data.idtoken) {
          AuthServies.setlocalStorageToken(data.idtoken);
        } else {
          console.log("error登录失败111111179");
        }
      })
    );
  }

  /**
   * 用户注册
   * @param signData
   */
  static signupAuth(signData: LoginInWithSMSVerifyCodeInput): Observable<any> {
    signData.encodepossword = md5(signData.encodepossword);
    return AxiosElasticService.AxiosService(
      "POST",
      AuthConfig.zone + "/" + AuthConfig.verifysmscoderegister,
      signData
    ).pipe(
      map((data: SignsuccessInterface) => {
        //后端返回错误结果
        return data.data;
      }),
      tap((data) => {
        if (data.idtoken) {
          AuthServies.dispatchlogintoken(data.idtoken);
        } else {
          console.log("error登录失败111111179");
        }
      }),
      tap((data) => {
        if (data.idtoken) {
          AuthServies.setlocalStorageToken(data.idtoken);
        } else {
          console.log("error登录失败111111179");
        }
      })
    );
  }

  /**
   * token解码
   * @param {*}
   */
  public static jwtDecodecheck(token: string) {
    let decoded = jwt.decode(token);
    console.log(this.log + "  " + "decoded", decoded);
    return decoded["exp"];
  }

  /**
   * 返回还有多久过期的时间 单位是小时
   * @param {*} token
   */
  public static chicktokenTime(token: string) {
    console.log("chicktokenTime start");
    let time = AuthServies.jwtDecodecheck(token);
    console.log(time);
    let timestamp = Date.now();
    console.log(time);
    let date = parseInt(time) * 1000;

    console.log(date);
    console.log(timestamp);
    let gap = (date - timestamp) / (3600 * 1000);
    console.log("还有多久过期gap", gap);
    return gap;
  }

  /**
   * 从本地获取token 它是一个异步的方法
   */
  public static getLocalstore(): Observable<any> {
    return of(localStorage.getItem("token"));
  }

  public static getServeS3authority(): Observable<any> {
    return AxiosElasticService.AxiosService(
      "post",
      AliyunConfig.zone + "/" + AliyunConfig.assumerole
    ).pipe(
      tap((data) => {
        console.log("authServies getServeS3authority", data);
        console.log(
          "authServies getServeS3authority type",
          typeof data["data"]["credentials"]["Expiration"]
        );
        localStorage.setItem("s3authority", data);
      })
    );
  }

  /**
   * 获取s3的凭证
   */
  public static getS3authority(): Observable<any> {
    return of(localStorage.getItem("s3authority")).pipe(
      map(s3authority=>{
        AuthServies.checkoutS3thorityTime(s3authority)
        return s3authority
      })
    );
  }

  public static checkoutS3thorityTime(S3authority:any){
    let _S3timestamp = Date.parse(S3authority['Expiration'])
    let nowTimestamp = Date.now()
    console.log('authServies checkoutS3thorityTime _S3timestamp nowTimestamp',_S3timestamp,nowTimestamp)
  }
}
