import { Observable, from, of, throwError } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";
import { HttpHost } from "./api";
import { AuthConfig } from "@/page/auth/auth.common";
import store from "@/store";
import router from "@/router";

// const axios = require('axios');

/**
 * 这是一个请求负责处理
 */
export class AxiosElasticService {
  logg = "DbElasticService";

  /**
   * 这是一个http请求服务 注意body传入的是一个
   * @param method 请求的Method，它是Metod类型
   * @param url    请求的url
   * @param body   body
   */
  public static AxiosService(
    method: Method,
    urlstr: string,
    body?: any,
    headers?: any,
    params?: any
  ): Observable<any> {
    console.log(method, body, urlstr);
    let axiosData: AxiosRequestConfig = {
      method: method,
      url: HttpHost.localHost + urlstr,
      data: body,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      params,
    };
    console.log(
      "DbElasticService " + "executeInEs axiosData" + JSON.stringify(axiosData)
    );
    return from(axios(axiosData)).pipe(
      catchError((error) => {
        // console.log('DbElasticService ' + 'executeInEs' + error);
        // return throwError(error);
        return throwError(error);
      }),
      switchMap((result) => {
        // console.log(result);
        return of(result);
      })
    );
  }

  /**
   * 这是一个负责处理前端请求是否要在header里加入url的方法
   */
  public static checkfuctionUrlIdtoken(url: any): Boolean {
    let api = "api/";
    console.log(
      "fromaxios checkfuctionUrlIdtoken url",
      url,
      api +
        "/" +
        AuthConfig.zone +
        "/" +
        HttpHost.check_url_with_token.bytokengettoken
    );
    //
    if (
      (url &&
        url ==
          api +
            AuthConfig.zone +
            "/" +
            HttpHost.check_url_with_token.bytokengettoken) ||
      url ==
        api +
          AuthConfig.zone +
          "/" +
          HttpHost.check_url_with_token.byusermimalogin
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 判断当前路径是否转跳到login页面（路由守卫）,是的话返回true
   * @param routerPath 
   */
  public static checkrouterlogin(routerPath:string) :boolean{
    console.log(store.state.login.idtoken)
    let _stoken = localStorage.getItem("token");
    let checkoutPath =[
      '/news',
      '/home'
    ]
    if(checkoutPath.indexOf(routerPath) &&(_stoken==null || _stoken=='')){
      return true
    } else {
      return false
    }
  }

 
}
