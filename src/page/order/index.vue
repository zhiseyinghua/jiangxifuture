<template>
  <v-container class="d-flex justify-center">
    <v-stepper alt-labels v-model="el" style="width: 800px">
      <v-stepper-header>
        <v-stepper-step :complete="el > 1" step="1"> 甲方信息 </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="el > 2" step="2"> 项目信息 </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card flat class="my-4 mx-auto" max-width="400">
            <v-card-subtitle class="d-md-none">甲方信息</v-card-subtitle>
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  ref="name"
                  outlined
                  dense
                  label="姓名"
                  :rules="nameRules"
                  clearable
                  prepend-icon="mdi-rename-box"
                  v-model="name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  ref="phone"
                  outlined
                  dense
                  label="电话"
                  required
                  :rules="phoneRules"
                  clearable
                  prepend-icon="mdi-cellphone"
                  v-model="phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  ref="email"
                  outlined
                  dense
                  label="*邮箱（选填）"
                  required
                  :rules="emailRules"
                  clearable
                  prepend-icon="mdi-email"
                  v-model="email"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
          <v-responsive
            class="mx-auto d-flex justify-space-between"
            max-width="400"
          >
            <v-btn color="primary" @click="handleNextStep"> 下一步 </v-btn>
          </v-responsive>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card flat class="my-4 mx-auto" max-width="400">
            <v-card-subtitle class="d-md-none">项目信息</v-card-subtitle>
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  ref="localPlace"
                  outlined
                  dense
                  label="地点"
                  @click="lbsamapfun()"
                  :rules="localPlaceRules"
                  clearable
                  prepend-icon="mdi-map-marker"
                  v-model="localPlace"
                ></v-text-field>
                <v-dialog v-model="mapdialog" max-width="800">
                  <template>
                    <p class="mt-5 ml-15" >
                      请在下面地图上选择地址并确定
                    </p>
                    <v-row class="justify-center  ">
                      <v-col md="6">
                        <div>
                          <!-- <input  type="text" v-model="address" /> -->
                          <v-text-field
                            label="地址"
                            v-model="localPlace"
                          ></v-text-field>
                        </div>
                      </v-col>
                      <v-col md="4">
                        <div class="mt-4">
                          <v-btn @click="confirmAddress">确定地址</v-btn>
                        </div>
                      </v-col>
                    </v-row>

                    <div style="height:800px;" class="amap-page-container">
                      <el-amap
                        vid="amapDemo"
                        :zoom="zoom"
                        class="amap-demo"
                        :events="events"
                      >
                      </el-amap>
                    </div>
                  </template>
                </v-dialog>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="type" row dense class="mt-0">
                  <v-icon class="mr-2">mdi-ruler</v-icon>
                  <v-radio label="不动产测绘" value="realEstateTest"></v-radio>
                  <v-radio label="一次性测绘" value="oneTimeTest"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="estimatedTime"
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      ref="estimatedTime"
                      v-model="estimatedTime"
                      label="预估日期"
                      prepend-icon="mdi-calendar"
                      readonly
                      dense
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      :rules="estimatedTimeRules"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="estimatedTime"
                    scrollable
                    year-icon="mdi-calendar-blank"
                    locale="zh-cn"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
                      取消
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(estimatedTime)"
                    >
                      确定
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  ref="area"
                  outlined
                  dense
                  label="*面积（可选）"
                  :rules="areaRules"
                  clearable
                  prepend-icon="mdi-map"
                  v-model="area"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  ref="technician"
                  outlined
                  dense
                  label="*预估费用（可选）"
                  :rules="technicianRules"
                  clearable
                  prepend-icon="mdi-account"
                  v-model="technician"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
          <v-responsive class="mx-auto" max-width="400">
            <v-btn color="primary" @click="handleSubmit"> 提交 </v-btn>
            <v-btn text @click="el = 1" class="grey lighten-2"> 返回 </v-btn>
            <v-btn
              class="red accent-4 white--text float-right"
              @click="handleReset"
            >
              重置
            </v-btn>
          </v-responsive>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      zoom: 12,
      address: "",
      events: {
        click(e) {
          let { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;
          console.log("start start", window.AMap);
          // 这里通过高德 SDK 完成。
          var geocoder = new window.AMap.Geocoder({
            radius: 1000,
            extensions: "all",
          });
          console.log(
            "start start",
            new window.AMap.Geocoder({
              radius: 1000,
              extensions: "all",
            })
          );
          geocoder.getAddress([lng, lat], function(status, result) {
            if (status === "complete" && result.info === "OK") {
              console.log(self.$nextTick());
              if (result && result.regeocode) {
                self.localPlace = result.regeocode.formattedAddress;
                self.$nextTick();
              }
            }
          });
        },
      },
      lng: 0,
      lat: 0,

      // 地图的弹窗
      mapdialog: false,

      // valid: true,
      el: 2, //步骤序号
      //甲方信息
      name: "", //姓名
      phone: "", //电话
      email: "", //邮箱
      //项目信息
      technician: "", //技术员
      localPlace: "", //地点
      type: "realEstateTest", //项目类型
      estimatedTime: "", //预估时间
      area: "", //面积
      formHasErrors: false, //表单是否有错误

      //姓名
      nameRules: [
        (v) => !!v || "必填",
        (v) => (v && v.length <= 10) || "不能超过10个字符",
      ],
      //号码
      phoneRules: [
        (v) => !!v || "必填",
        (v) => /^1[0-9]{10}$/.test(v) || "格式错误",
      ],
      //邮箱
      emailRules: [
        (v) => !!v || "",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "格式错误",
      ],
      //技术员
      technicianRules: [(v) => !!v || "必填"],
      //地点
      localPlaceRules: [(v) => !!v || "必填"],
      //类型
      typeRules: [(v) => !!v || "必填"],
      //预估时间
      estimatedTimeRules: [(v) => !!v || "必填"],
      //面积
      areaRules: [(v) => !!v || "必填", (v) => /^\d*$/.test(v) || "格式错误"],
      modal: false,
    };
  },
  computed: {
    clientInfo() {
      return {
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
    },
    projectInfo() {
      return {
        technician: this.technician,
        localPlace: this.localPlace,
        estimatedTime: this.estimatedTime,
        area: this.area,
      };
    },
  },
  methods: {
    /**
     * 关闭地图弹窗
     */
    confirmAddress(){
      this.mapdialog = false
    },
    lbsamapfun() {
      console.log(123);
      this.mapdialog = true;
    },
    handleNextStep() {
      this.formHasErrors = false;
      // Object.keys(this.clientInfo).forEach((f) => {
      //   if (!this.$refs[f].validate()) this.formHasErrors = true;
      //   this.$refs[f].validate(true);
      // });
      // if(!this.this.$refs[1].validate())
      // if (!this.formHasErrors) {
      //   this.el = 2;
      // }
      if(this.$refs[Object.keys(this.clientInfo)[0]].validate() && this.$refs[Object.keys(this.clientInfo)[1]].validate()){
         this.el = 2;
      } else {
        //  TODO:
        console.log("条件没通过")
      }
    },
    //提交表单
    handleSubmit() {
      console.log(this.formHasErrors)
      // this.formHasErrors = false;
      Object.keys(this.projectInfo).forEach((f) => {
        if (!this.$refs[f].validate()) this.formHasErrors = true;
        if (!this.type) this.formHasErrors = true;
        this.$refs[f].validate(true);
        if (!this.formHasErrors) {
          console.log("submit");
        }
      });
    },
    //表单重置
    handleReset() {
      this.errorMessages = [];
      this.formHasErrors = false;
      Object.keys(this.clientInfo).forEach((f) => {
        this.$refs[f].reset();
      });
      Object.keys(this.projectInfo).forEach((f) => {
        this.$refs[f].reset();
      });
      this.el = 1;
    },
  },
};
</script>

<style>
.v-dialog {
  background-color: white;
}
</style>
