import oss from 'ali-oss'
import authServies from '@/page/auth/auth.servies'
import { switchMap } from 'rxjs/operators'
export default class OSSServies{
    public static putfileToAliyunS3(){
        authServies.getS3authority().pipe(
            // switchMap(data=>{

            // })
        )
    }
}