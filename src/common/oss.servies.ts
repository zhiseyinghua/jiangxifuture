import authServies from "@/page/auth/auth.servies";
import { switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { AccessS3Token } from "./common.interface";
import { AliyunConfig } from "@/page/auth/aliyun.common";
var OSS = require("ali-oss");



/**
 * 这是一个关于阿里云s3文件存储桶的服务
 */
export default class OSSServies {
  static log = "OSSServies";
  /**
   * 向阿里云0ssput一个文件,只能上传一个文件
   * @param file 上传的文件
   * @param bukcket 上传到oss的那个桶中
   * @param isPubilc  是否公开(生成的文件url是否完全公开)，传入 string 'public' 则表明这个文件完全公开
   */
  public static putfileToAliyunS3(file: any,bukcket:string,isPubilc?:string): Observable<any> {
    let bucket = AliyunConfig.s3bucket
    if(isPubilc && isPubilc == 'public'){
      bucket = AliyunConfig.s3bucketPubilc
    }
    return authServies.getS3authority().pipe(
      switchMap((data) => {
        let _s3Token = data as AccessS3Token;
        console.log(this.log + "putfileToAliyunS3 data", _s3Token.AccessKeyId,_s3Token.AccessKeySecret);
        let client = new OSS({
          bucket: bucket,
          // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
          region: "oss-cn-beijing",
          // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
          accessKeyId: _s3Token.AccessKeyId,
          accessKeySecret: _s3Token.AccessKeySecret,
          stsToken: _s3Token.SecurityToken,
        });
        let name = OSSServies.fuwenbenfileName(file)  
        return client.put(bukcket + '/'+name, file);
      }),
    );
  }





  public static fuwenbenfileName(file: any) {
    let suijiname = OSSServies.randomWord(false, 32);
    // let arr = file.type.split("/")[1];
    let arr = file.name.split(".");
    console.log('111111111111111111111111111111',arr,file.name)
    let name = arr[arr.length -1 ]
    console.log(name) // jpeg
    console.log('fuwenbenfileName arr',arr) // jpeg
    var uuid =  suijiname + "." + name;
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
