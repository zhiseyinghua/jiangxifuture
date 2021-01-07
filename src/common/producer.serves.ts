import { Observable, of } from "rxjs";
const { MQClient, MessageProperties } = require("@aliyunmq/mq-http-sdk");
/**
 * 这是一个关于阿里云s3文件存储桶的服务
 */
export default class ProducerServes {
  static log = "ProducerServes";
  public static putfileToAliyunS3(
    file: any,
    bukcket: string,
    isPubilc?: string
  ): Observable<any> {
    const endpoint = "${HTTP_ENDPOINT}";
    const accessKeyId = "${ACCESS_KEY}";
    // SecretKey 阿里云身份验证，在阿里云服务器管理控制台创建
    const accessKeySecret = "${SECRET_KEY}";
    var client = new MQClient(endpoint, accessKeyId, accessKeySecret);
    // 所属的 Topic
    const topic = "${TOPIC}";
    // Topic所属实例ID，默认实例为空
    const instanceId = "${INSTANCE_ID}";
    const producer = client.getProducer(instanceId, topic);
    let msgProps = new MessageProperties();
    return of(producer.publishMessage("hello mq.", "", msgProps))
  }
}
