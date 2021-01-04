<template>
  <div>
    <div style="height:100px">test</div>
    <div>test</div>
    <v-btn @click="getauthass">颁发刷凭证</v-btn>
    <v-btn @click="getlocals3pingzheng">从本地拿凭证</v-btn>
    <v-btn @click="putfileAliyunS3">上传一个文件到s3</v-btn>
    <v-btn @click="ups3">上传一个文件到s3</v-btn>

      <v-container fluid>
        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
          <img :src="imageUrl" height="150" v-if="imageUrl"/>
          <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
          <input
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
          >
        </v-flex>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Hello World!</v-card-title>
            <v-card-text>
              Image Upload Script in VUE JS
              <hr>
              Yubaraj Shrestha
              <br>http://yubarajshrestha.com.np/
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>

  </div>
</template>
<script>
import authServies from "@/page/auth/auth.servies";
import oSSServies from "@/common/oss.servies";

export default {
  name: "test",
  data() {
    return {
      title: "Image Upload",
      dialog: false,
      imageName: "",
      imageUrl: "",
      imageFile: "",
    };
  },
  methods: {
    // 选择按钮
    pickFile() {
      this.$refs.image.click();
       console.log('11111111111111')
    },
    // 选择文件
    onFilePicked(e) {
      console.log('onFilePicked start e',e)
      const files = e.target.files;
      console.log('onFilePicked start files',files)
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        console.log('222222222222222222222222222')
        if (this.imageName.lastIndexOf["."] <= 0) {
          return;
        }
        console.log('222222222222222222222222222')
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
    ups3(){
      console.log('ups3 this.imageFile',this.imageFile);
      oSSServies
    },
    getauthass() {
      authServies.getServeS3authority().subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {}
      );
    },
    putfileAliyunS3() {
      oSSServies.putfileToAliyunS3().subscribe((data) => {
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
