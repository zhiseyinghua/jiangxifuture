import authServies from "@/page/auth/auth.servies";
import { switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { AccessS3Token } from "./common.interface";
var OSS = require("ali-oss");

let client;
export default class OSSServies {
  static log = "OSSServies";
  public static putfileToAliyunS3(file: any): Observable<any> {
    return authServies.getS3authority().pipe(
      switchMap((data) => {
        let _s3Token = data as AccessS3Token;
        console.log(this.log + "putfileToAliyunS3 data", data);
        client = new OSS({
          bucket: "hwquser",
          // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
          region: "oss-cn-beijing",
          // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
          accessKeyId: _s3Token.AccessKeyId,
          accessKeySecret: _s3Token.AccessKeySecret,
        });
        client.put("123456", file);
        return of(data);
      })
    );
  }

  public static fuwenbenfileName(file: any) {
    console.log(file);
    let suijiname = OSSServies.randomWord(false, 32);
    let arr = file.type.split("/")[1];
    var uuid = "fuwenbenfile" + "/" + suijiname + "." + arr;
    return uuid;
  }

  public static randomWord(randomFlag: any, min: any, max?: any) {
    let str = "";
    let range = min;
    let arr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
      let pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
      // console.log(str)
    }
    return str;
  }
}
