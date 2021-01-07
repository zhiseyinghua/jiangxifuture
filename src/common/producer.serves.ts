// import { from, Observable, of } from "rxjs";
// const { MQClient, MessageProperties } = require("@aliyunmq/mq-http-sdk");
// /**
//  * 这是一个关于阿里云s3文件存储桶的服务
//  */
// export default class ProducerServes {
//   static log = "ProducerServes";
//   public static putfileToAliyunS3(
    
//   ): Observable<any> {
//     const endpoint = "oss-cn-beijing";
//     const accessKeyId = "LTAI4FiKg9LpBndf3JsGQsnN";
//     // SecretKey 阿里云身份验证，在阿里云服务器管理控制台创建
//     const accessKeySecret = "WCHRFEMH1v5RlWq8Ctii2cD94Sc1jC";
//     var client = new MQClient(endpoint, accessKeyId, accessKeySecret);
//     // 所属的 Topic
//     const topic = "order_message";
//     // Topic所属实例ID，默认实例为空
//     const instanceId = "GID_order_user";
//     const producer = client.getProducer(instanceId, topic);
//     let msgProps = new MessageProperties();
//     console.log('1111111111111111111111111111111111')
//     return from(producer.publishMessage("hello mq.", "", msgProps))
//   }
// }
