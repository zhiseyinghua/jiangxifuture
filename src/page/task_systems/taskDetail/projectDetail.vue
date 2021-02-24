<template>
  <v-container>
    <div class="font-weight-medium" style="font-size: 1.5em;">
      任务详情
    </div>
    <v-divider class="mt-5 mb-12"></v-divider>
    <v-row>
      <v-col>
        <div>
          <v-row>
            <v-col cols="3">
              <v-avatar size="55">
                <img
                  alt="user"
                  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3723801689,3918778516&fm=26&gp=0.jpg"
                />
              </v-avatar>
            </v-col>
            <v-col class="mt-5">
              <p class="">
                {{ userName }}
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col>
        <div>
          <v-btn @click="starttime()" text style="height:80px">
            <v-row>
              <v-col>
                <v-icon v-show="true" size="55" color="green darken-2">
                  mdi-alarm-off
                </v-icon>
              </v-col>
              <v-col class="">
                <div style="font-size: 1.5em;" class="grey--text mb-1">
                  开始时间
                </div>
                <p>{{ orderstartTime }}</p>
              </v-col>
            </v-row>
          </v-btn>
        </div>
      </v-col>

      <v-col>
        <div>
          <v-btn @click="changeTaskCompleted()" text style="height:80px">
            <v-row>
              <v-col>
                <v-icon v-show="true" size="55" color="green darken-2">
                  mdi-alarm-off
                </v-icon>
              </v-col>
              <v-col class="">
                <div style="font-size: 1.5em;" class="grey--text mb-1">
                  任务完成时间
                </div>
                <p>{{ orderendTime }}</p>
              </v-col>
            </v-row>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider class="mt-5 mb-3"></v-divider>
    <div>
      <div style="display: inline-block;">
        <v-icon
          large
          color="black darken-2"
          style="font-size: 2.3em; display: inline-block;"
        >
          list
        </v-icon>
      </div>
      <div style="display: inline-block;" class="font-weight-medium mt-2 ml-1 ">
        任务信息
      </div>
    </div>

    <div class="ml-12 mt-7">
      <div>
        <v-row>
          <v-col>
            <div class="grey--text">项目名称 ：</div>
            <div class="mt-2">
              <div style=" display: inline-block;">
                <v-icon
                  large
                  color=""
                  style="font-size: 2.3em; display: inline-block;"
                >
                  assignment
                </v-icon>
              </div>
              <div
                style="display: inline-block;"
                class="font-weight-medium mt-2 ml-1 "
              >
                我的项目
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="grey--text">任务类型 ：</div>
            <div class="mt-2">
              <div style=" display: inline-block;">
                <v-icon
                  large
                  color=""
                  style="font-size: 2.3em; display: inline-block;"
                >
                  note
                </v-icon>
              </div>
              <div
                style="display: inline-block;"
                class="font-weight-medium mt-2 ml-1 "
              >
                不动产测试
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="ml-12 mt-7">
      <div>
        <v-row>
          <v-col>
            <div class=" mt-12">
              <div>
                <div class="mb-2 grey--text">甲方信息 ：</div>
                <div class="mt-6 ml-6">
                  <div class="mb-2">名称 ：{{ ONEinformation.name }}</div>
                  <div class="mb-2">电话 ：{{ ONEinformation.phone }}</div>
                  <div class="mb-2">邮箱 ：{{ ONEinformation.email }}</div>
                  <v-btn class="mt-3" @click="changefristPart()"
                    >修改甲方信息</v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class=" mt-12">
              <div>
                <div class="mb-2 grey--text">其他信息 ：</div>
                <div class="mt-6 ml-6">
                  <div class="mb-2">任务面积 ：{{ area }}</div>
                  <div class="mb-2">实际费用 ：{{ realMoney }}</div>
                  <v-btn @click="changeOtherinformation" class="mt-11"
                    >修改其他信息</v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="ml-12 mt-7">
      <div>
        <v-row>
          <v-col>
            <div class="mt-12">
              <div>
                <v-card
                  elevation="0"
                  style="width: 350px;"
                  class="overflow-hidden"
                >
                  <v-toolbar flat>
                    <!-- <v-icon>mdi-account</v-icon> -->
                    <v-toolbar-title class="mb-2  grey--text">
                      项目时间详情
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="mr-6"
                      :disabled="!isEditing"
                      color="success"
                      @click="save"
                    >
                      保存
                    </v-btn>
                    <v-btn
                      color=" darken-3"
                      fab
                      small
                      @click="isEditing = !isEditing"
                    >
                      <v-icon v-if="isEditing">
                        mdi-close
                      </v-icon>
                      <v-icon v-else>
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-text>
                    <span>实际派发时间 ：</span>
                    <!-- timeAfterDistribution -->
                    <v-text-field
                      filled
                      :disabled="!isEditing"
                      append-icon="date_range"
                      v-model="timeAfterDistribution"
                      @click:append="changeTimeAfterDistributiondata()"
                    ></v-text-field>

                    <div class="">技术员实际完成时间 ：</div>
                    <!-- technicianCompletionTime -->
                    <v-text-field
                      filled
                      :disabled="!isEditing"
                      append-icon="date_range"
                      v-model="technicianCompletionTime"
                      @click:append="changeTechnicianCompletionTime()"
                    ></v-text-field>

                    <div class="">外业完成时间 ：</div>
                    <!-- completionTime -->
                    <v-text-field
                      filled
                      :disabled="!isEditing"
                      append-icon="date_range"
                      v-model="completionTime"
                      @click:append="changeCompletionTime()"
                    ></v-text-field>

                    <div class="">内业完成时间 ：</div>
                    <!-- insidePagesFinish -->
                    <v-text-field
                      filled
                      :disabled="!isEditing"
                      append-icon="date_range"
                      v-model="insidePagesFinish"
                      @click:append="changInsidePagesFinish()"
                    ></v-text-field>

                    <div class="">合同完成时间 ：</div>
                    <v-text-field
                      filled
                      :disabled="!isEditing"
                      append-icon="date_range"
                      v-model="contractCompleted"
                      @click:append="changeContractCompleted()"
                    ></v-text-field>

                    <div class="">金额到账时间 ：</div>
                    <!-- timeReceiptAmount -->
                    <v-text-field
                      filled
                      :disabled="!isEditing"
                      append-icon="date_range"
                      v-model="timeReceiptAmount"
                      @click:append="changeTimeReceiptAmount()"
                    ></v-text-field>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>

                <div class="mt-6 ml-6"></div>
              </div>
            </div>
          </v-col>
          <v-col>
            <v-toolbar-title class="mb-2  grey--text">
              地址：  {{address}}
            </v-toolbar-title>
            <div class="mt-12" style="width:600px">
              <!-- 地图位置 -->
              <div id="amap-cointainer"></div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- 修改时间参数 通用 -->
    <v-dialog v-model="dialog" width="500">
      <v-date-picker
        v-model="pickertime"
        :first-day-of-week="0"
        locale="zh-cn"
      ></v-date-picker>
      <v-btn
        x-large
        color="primary"
        :loading="lodingbutton"
        @click="updatapaifa()"
        >确定</v-btn
      >
    </v-dialog>
    <!-- 用于修改项目时间弹窗 -->
    <v-dialog v-model="timedialog" width="500">
      <v-date-picker
        v-model="picker"
        :first-day-of-week="0"
        locale="zh-cn"
      ></v-date-picker>
      <v-btn
        x-large
        color="primary"
        :loading="lodingbutton"
        @click="replacePaifa()"
        >确定</v-btn
      >
    </v-dialog>

    <div style="height:100px"></div>

    <!-- 修改甲方信息 -->
    <v-dialog v-model="firstdialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-5">
          修改甲方参数</v-card-title
        >
        <v-card class="ma-10" flat>
          <v-text-field
            v-model="ONEinformation.name"
            label="名称"
            outlined
            clearable
            dense
          >
          </v-text-field>
          <v-text-field
            v-model="ONEinformation.phone"
            label="电话"
            outlined
            clearable
            dense
          >
          </v-text-field>
          <v-text-field
            v-model="ONEinformation.email"
            label="邮箱"
            outlined
            clearable
            dense
          >
          </v-text-field>
        </v-card>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="primary" text @click="firstdialog = false">
            暂不修改
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="updataOneInformation()">
            确认修改
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 修改其他信息 -->
    <v-dialog v-model="otherdialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-5">
          修改其他信息</v-card-title
        >
        <v-card class="ma-10" flat>
          <v-text-field
            v-model="area"
            label="任务面积"
            outlined
            clearable
            dense
          >
          </v-text-field>
          <v-text-field
            v-model="realMoney"
            label="实际费用"
            outlined
            clearable
            dense
          >
          </v-text-field>
        </v-card>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="primary" text @click="otherdialog = false">
            暂不修改
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="updateOtherInformation()" text>
            确认修改
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div style="height:40px"></div>
    <v-btn @click="testwenqianghuang()"></v-btn>
  </v-container>
</template>

<script>
import ProjectDetailClass from "@/page/task_systems/taskDetail/projectDetail.service";
import orderServe from "@/page/order/order.serves";
import userServes from "@/page/user/user.serves";
import moment from "moment";
import Bus from "@/common/bus";
import { lazyAMapApiLoaderInstance } from "vue-amap";
import { map } from "rxjs/operators";

export default {
  data: () => ({
    timedialog: false,
    //这个订单的key
    orderkey: null,
    // 弹窗的button
    lodingbutton: false,
    // 用户名字
    userName: "",
    // 时间参数
    // 实际派发时间
    timeAfterDistribution: null,
    // 技术员实际完成时间
    technicianCompletionTime: null,
    // 外业完成时间
    completionTime: null,
    // 内业完成时间
    insidePagesFinish: null,
    // 合同完成时间
    contractCompleted: null,
    // 金额到账时间
    timeReceiptAmount: null,
    // 任务开始时间
    orderstartTime: null,
    // 任务结束时间
    orderendTime: null,
    hasSaved: false,
    isEditing: null,
    model: null,
    states: [
      { name: "Florida", abbr: "FL", id: 1 },
      { name: "Georgia", abbr: "GA", id: 2 },
      { name: "Nebraska", abbr: "NE", id: 3 },
      { name: "California", abbr: "CA", id: 4 },
      { name: "New York", abbr: "NY", id: 5 },
    ],

    disabled: true,
    // 用户选择的时间，用于判断选择的是那个时间（例如：派发时间、操作员时间）
    timeselect: "",
    // 修改时间参数 通用
    dialog: false,
    // 修改甲方信息弹窗
    firstdialog: false,
    // 修改其他信息弹窗
    otherdialog: false,
    password: "Password",
    // 时间选择器选择的时间
    pickertime: null,
    picker: null,
    ONEinformation: {
      phone: "18779868511",
      // 邮箱
      email: "1870132537@qq.com",
      name: "黄文强",
    },
    area: null,
    realMoney: null,

    zoom: 12,
    // center: [10, 10],
    address: "",
  }),
  watch: {
    pickertime(val) {
      console.log(val);
    },
  },
  mounted() {
    let routedata = JSON.parse(unescape(this.$route.query.id));
    console.log(
      "1111111111",
      routedata.localPlace.lng,
      routedata.localPlace.lat
    );
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("amap-cointainer", {
        zoom: 13, //级别
        center: new AMap.LngLat(
          routedata.localPlace.lat,
          routedata.localPlace.lng
        ),
      });
      var m1 = new AMap.Marker({
        position: [routedata.localPlace.lat, routedata.localPlace.lng],
      });
      routedata.localPlace.local = this.address
      this.map.add(m1);
    });
  },
  created() {
    //     localPlace: OrderlocalPlaceInterface;
    // 初始化页面所有数据
    let routedata = JSON.parse(unescape(this.$route.query.id));
    console.log(routedata);
    this.orderkey = {
      hash: routedata.hash,
      range: routedata.range,
      index: routedata.range,
    };

    // var marker = new window.AMap.Marker({
    //   position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    // });
    // this.map.add(marker); //添加到地图
    // });
    userServes
      .getUserInformation({
        hash: routedata.creatorkey.hash,
        range: routedata.creatorkey.range,
        index: routedata.creatorkey.index,
      })
      .subscribe((data) => {
        console.log(data);
        this.userName = data.usernickname;
      });

    this.orderstartTime = routedata.orderstartTime;
    this.orderendTime = routedata.orderendTime;
    this.figuetime = routedata.figuetime;
    this.type = routedata.type;
    this.area = routedata.area;
    this.timeAfterDistribution = routedata.timeAfterDistribution;
    this.technicianCompletionTime = routedata.technicianCompletionTime;
    this.completionTime = routedata.completionTime;
    this.insidePagesFinish = routedata.insidePagesFinish;
    this.contractCompleted = routedata.contractCompleted;
    this.timeReceiptAmount = routedata.timeReceiptAmount;
    this.estimatedMoney = routedata.estimatedMoney;
    this.realMoney = routedata.realMoney;
    this.ONEinformation = routedata.ONEinformation;
    // 将路由拿到的order信息赋值
  },
  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();
      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    // 更新项目时间参数
    save() {
      Bus.$emit("overlayvalue", {
        overlayvalue: true,
      });
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
      let manytime = {
        hash: this.orderkey.hash,
        range: this.orderkey.range,
        index: this.orderkey.index,
        timeAfterDistribution: this.timeAfterDistribution,
        technicianCompletionTime: this.technicianCompletionTime,
        completionTime: this.completionTime,
        insidePagesFinish: this.insidePagesFinish,
        contractCompleted: this.contractCompleted,
        timeReceiptAmount: this.timeReceiptAmount,
      };
      orderServe.updateOrderManyTime(manytime).subscribe(
        (data) => {
          Bus.$emit("overlayvalue", {
            overlayvalue: false,
          });
          if (data.range) {
            this.timeAfterDistribution = data.timeAfterDistribution;
            this.technicianCompletionTime = data.technicianCompletionTime;
            this.completionTime = data.completionTime;
            this.insidePagesFinish = data.insidePagesFinish;
            this.contractCompleted = data.contractCompleted;
            this.timeReceiptAmount = data.timeReceiptAmount;
            Bus.$emit("snackbar", {
              text: "修改成功",
              color: "green",
              timeout: 2000,
              errorsnackbar: true,
              top: true,
            });
          } else if (data.code) {
            Bus.$emit("snackbar", {
              text: "未修改",
              color: "green",
              timeout: 2000,
              errorsnackbar: true,
              top: true,
            });
          } else {
            Bus.$emit("snackbar", {
              text: "服务器错误",
              color: "pink",
              timeout: 2000,
              errorsnackbar: true,
              top: true,
            });
          }
        },
        (err) => {
          Bus.$emit("overlayvalue", {
            overlayvalue: false,
          });
          Bus.$emit("snackbar", {
            text: "服务器错误",
            color: "pink",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
        }
      );
    },

    show() {},

    starttime() {
      this.timeselect = "orderstartTime";
      console.log(this.timeselect);
      this.dialog = true;
    },

    changefristPart() {
      console.log("changefristPart");
      this.firstdialog = true;
    },

    // 任务完成时间
    changeTaskCompleted() {
      this.timeselect = "orderendTime";
      console.log("orderendTime");
      this.dialog = true;
      console.log("orderendTime");
    },
    // 更新所有的时间参数
    updatapaifa() {
      console.log("更新所有的时间");
      console.log(this.timeselect);
      this.lodingbutton = true;
      ProjectDetailClass.updateOrderstartTime(
        this.timeselect,
        this.pickertime
      ).subscribe(
        (data) => {
          this.lodingbutton = false;
          this.dialog = false;
          console.log("data", data, this.timeselect);
          // this[this.timeselect] = data;
          this[this.timeselect] = moment(data).format("ll");
        },
        (err) => {
          this.lodingbutton = false;
          this.dialog = false;
          console.log(err);
          Bus.$emit("snackbar", {
            text: "服务器错误",
            color: "pink",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
        }
      );
    },
    // 修改其他信息
    changeOtherinformation() {
      console.log("changeOtherinformation");
      this.otherdialog = true;
    },

    // 更改派发时间参数
    changeTimeAfterDistributiondata() {
      this.timedialog = true;
      this.timeselect = "timeAfterDistribution";
    },
    // 更改派发时间参数
    changeTechnicianCompletionTime() {
      console.log("changeTechnicianCompletionTime");
      this.timedialog = true;
      this.timeselect = "technicianCompletionTime";
    },
    // 更改外业完成时间
    changeCompletionTime() {
      console.log("changeCompletionTime");
      this.timedialog = true;
      this.timeselect = "completionTime";
    },
    // 内业完成时间
    changInsidePagesFinish() {
      console.log("changInsidePagesFinish");
      this.timedialog = true;
      this.timeselect = "insidePagesFinish";
    },
    // 合同完成时间
    changeContractCompleted() {
      console.log("contractCompleted");
      this.timedialog = true;
      this.timeselect = "contractCompleted";
    },
    // 金额到账时间
    changeTimeReceiptAmount() {
      console.log("changeTimeReceiptAmount");
      this.timedialog = true;
      this.timeselect = "timeReceiptAmount";
    },
    // 更新甲方信息
    updataOneInformation() {
      Bus.$emit("overlayvalue", {
        overlayvalue: true,
      });
      let data = {
        hash: this.orderkey.hash,
        range: this.orderkey.range,
        index: this.orderkey.index,
        ONEinformation: this.ONEinformation,
      };
      orderServe.updateOneInformation(data).subscribe((data) => {
        this.firstdialog = false;
        Bus.$emit("overlayvalue", {
          overlayvalue: false,
        });
        if (data.range) {
          Bus.$emit("snackbar", {
            text: "修改成功",
            color: "green",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
          this.ONEinformation = data.ONEinformation;
        } else if (data.code == "000203") {
          Bus.$emit("snackbar", {
            text: "未修改",
            color: "green",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
        } else {
          Bus.$emit("snackbar", {
            text: "服务器错误",
            color: "pink",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
        }
        console.log(data);
      });
      console.log("修改甲方信息");
    },
    updateOtherInformation() {
      Bus.$emit("overlayvalue", {
        overlayvalue: true,
      });
      let data = {
        hash: this.orderkey.hash,
        range: this.orderkey.range,
        index: this.orderkey.index,
        area: this.area,
        realMoney: this.realMoney,
      };
      Bus.$emit("overlayvalue", {
        overlayvalue: true,
      });
      orderServe.updateOtherInformationF(data).subscribe((data) => {
        console.log(data);
        this.otherdialog = false;
        Bus.$emit("overlayvalue", {
          overlayvalue: false,
        });
        if (data.range) {
          Bus.$emit("snackbar", {
            text: "修改成功",
            color: "green",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
          this.area = data.area;
          this.realMoney = data.realMoney;
        } else if (data.code == "000202") {
          Bus.$emit("snackbar", {
            text: "未修改",
            color: "green",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
        } else {
          Bus.$emit("snackbar", {
            text: "服务器错误",
            color: "pink",
            timeout: 2000,
            errorsnackbar: true,
            top: true,
          });
        }
      });
    },
    // 确认时间
    replacePaifa() {
      console.log("确认时间");
      this.timedialog = false;
      this[this.timeselect] = moment(this.picker).format("ll");
    },
  },
};
</script>

<style>
#amap-cointainer {
  height: 500px;
}
</style>
