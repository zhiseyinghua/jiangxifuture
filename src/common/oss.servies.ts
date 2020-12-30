import oss from "ali-oss";
import authServies from "@/page/auth/auth.servies";
import { switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";
export default class OSSServies {
  static log = "OSSServies";
  public static putfileToAliyunS3(): Observable<any> {
    return authServies.getS3authority().pipe(
      switchMap((data) => {
        console.log(this.log + 'putfileToAliyunS3 data',data);
        return of(data);
      })
    );
  }
}
