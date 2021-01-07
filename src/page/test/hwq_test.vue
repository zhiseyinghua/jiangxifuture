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
    <v-btn @click="testqweqwe">向阿里云队列发送信息</v-btn>
    <!-- <v-btn @click="sub_w">订阅信息</v-btn>  -->
  </div>
</template>
<script>
import authServies from "@/page/auth/auth.servies";
import oSSServies from "@/common/oss.servies";
import producerServes from "@/common/producer.serves";
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
    'addCart': function(data) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    },
  },
  methods: {
    // sub_w() {
    //   this.socket.on("events", (data) => {
    //     console.log("链接成功");
    //     l(data.msg);
    //   });
    // },
    testqweqwe() {
      producerServes.putfileToAliyunS3().subscribe(
        (data=>{
          console.log(data)
        })
      )
    },
    putmessage() {
      this.$socket.emit("events", {"ajanuw":"ajanuw"});
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
