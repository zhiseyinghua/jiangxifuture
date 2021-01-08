<template>
  <div>
    <div style="height:100px">test</div>
    <div>test</div>
    <v-btn @click="getauthass">颁发刷凭证</v-btn>
    <v-btn @click="getlocals3pingzheng">从本地拿凭证</v-btn>
    <v-btn @click="putfileAliyunS3">上传一个文件到s3</v-btn>

    <v-container fluid>
      <v-flex
        xs12
        class="text-xs-center text-sm-center text-md-center text-lg-center"
      >
        <img :src="imageUrl" height="150" v-if="imageUrl" />
        <v-text-field
          label="Select Image"
          @click="pickFile"
          v-model="imageName"
          prepend-icon="attach_file"
        ></v-text-field>
        <input
          type="file"
          style="display: none"
          ref="image"
          @change="onFilePicked"
        />
      </v-flex>
    </v-container>
    <v-btn @click="putfileAliyunS3">上传图片到s3</v-btn>
    <v-btn @click="putmessage">putmessage</v-btn>
    <!-- <v-btn @click="sub_w">订阅信息</v-btn>  -->
  </div>
</template>
<script>
import authServies from "@/page/auth/auth.servies";
import oSSServies from "@/common/oss.servies";
import sdk from "@/assets/js/jmessage-sdk-web.2.6.0.min.js";
import md5 from "js-md5";

// const io = require('socket.io');

// import io from 'socket.io-client';

// const server = require('http').createServer();
// const io = require('socket.io')(server);

export default {
  name: "test",
  data() {
    return {
      title: "Image Upload",
      dialog: false,
      imageName: "",
      imageUrl: "",
      imageFile: "",
      socket: null,
    };
  },
  created() {},
  sockets: {
    addCart: function(data) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    },
  },
  created() {
    // 你的appkey
    let appkey = "984b7e6efb3381de3b5bea5a";
    // 随机20位字符
    let random_str = "123456789";
    // 当前时间戳
    let timestamp = Date.parse(new Date());
    // md5加密生成密匙
    let signature = md5(
      `appkey=${appkey}&timestamp=${timestamp}&random_str=${random_str}&key=9c8c4c41c17329a8b549def8`
    );
    var JIM = new sdk();
    // 初始化sdk
    JIM.init({
      appkey: appkey,
      random_str: random_str,
      signature: signature,
      timestamp: timestamp,
      flag: 0,
    })
      .onSuccess(function(data) {
        console.log("111111111111111111success");
        // 初始化成功
        // 用户账号
        let username = "123456";
        // 用户密码
        let password = "qwert";
        login();
        function login() {
          JIM.login({
            username: username,
            password: password,
          })
            .onSuccess(function(data) {
              console.log("登陆成功,加入聊天室");
              enterChatroom();
            })
            .onFail(function(data) {
              console.log("登陆失败，进入注册");
              register();
            });
        }
        // 注册账号
        function register() {
          console.log("开始注册");
          JIM.register({
            username: username,
            password: password,
            is_md5: false,
            extras: { 自定义json: "123456" },
            address: "用户地址",
          }).onSuccess(function(data) {
            console.log("加入聊天室之后");
            login();
          });
        }
        // 加入聊天室
        function enterChatroom() {
          console.log('123456')
          JIM.enterChatroom({
            // 聊天室ID
            id: "123456789",
          })
            .onSuccess(function(data) {
              console.log("加入聊天室成功，持续抓取信息中...");
              onRoomMsg();
            })
            .onFail(function(data) {
              console.log(data);
            });
        }
        // 监控聊天室消息
        function onRoomMsg() {
          JIM.onRoomMsg(function(data) {
            console.log("发送人：" + data.from_username);
            console.log("发送消息：" + data.content.msg_body.text);
          });
        }
      })
      .onFail(function(data) {
        console.log(data);
      });
  },

  methods: {
    sub_w() {
      this.socket.on("events", (data) => {
        console.log("链接成功");
        l(data.msg);
      });
    },
    testqweqwe() {
      producerServes.putfileToAliyunS3().subscribe((data) => {
        console.log(data);
      });
    },
    putmessage() {
      this.$socket.emit("events", { ajanuw: "ajanuw" });
      //   console.log("created start");
      //   this.socket = io("http://localhost:3000");
      //   this.socket.emit("events", "addCart");
    },

    // 选择按钮
    pickFile() {
      this.$refs.image.click();
      console.log("11111111111111");
    },
    // 选择文件
    onFilePicked(e) {
      console.log("onFilePicked start e", e);
      const files = e.target.files;
      console.log("onFilePicked start files", files);
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf["."] <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },

    // 上传文件到s3
    // ups3() {
    //   oSSServies;
    // },
    getauthass() {
      authServies.getServeS3authority().subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {}
      );
    },
    putfileAliyunS3() {
      console.log("ups3 this.imageFile");
      oSSServies
        .putfileToAliyunS3(this.imageFile, "public", "public")
        .subscribe((data) => {
          console.log("test.vue putfileAliyunS3 data", data);
        });
    },
    getlocals3pingzheng() {
      authServies.getS3authority().subscribe((data) => {
        console.log(data);
      });
    },
  },
};
</script>
