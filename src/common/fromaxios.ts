import { Observable, from, of, throwError } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";
import { httpHost } from "./api";

// const axios = require('axios');

/**
 * 这是一个请求负责处理
 */
export class AxiosElasticService {
  logg = "DbElasticService";

  /**
   * 这是一个后台服务 注意body传入的是一个
   * @param method 请求的Method，它是Metod类型
   * @param body   z'AA
   * @param url    请求的url
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
      url: httpHost.localHost + urlstr,
      data: body,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      params,
    };
    console.log('DbElasticService ' + 'executeInEs axiosData' + JSON.stringify(axiosData));
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
}
