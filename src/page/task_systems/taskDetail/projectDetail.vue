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
                <p
                  v-if="
                    orderendTime != null &&
                      orderendTime != '' &&
                      orderendTime != 'Invalid date'
                  "
                >
                  {{ orderendTime }}
                </p>
                <p v-else>未完成</p>
              </v-col>
            </v-row>
          </v-btn>
          <div style="display: inline-block;">
            <v-btn
              :loading="deletetimeB"
              depressed
              color="error"
              @click="cleanoutTime()"
              >未完成（清除时间）</v-btn
            >
          </div>
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
                {{ ordername }}
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
                {{ type }}
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
                  <span class="mb-2">预估费用 ：{{ estimatedMoney }}</span>
                  <span v-show="estimatedMoney">元</span>
                  <div></div>
                  <span class="mb-2">任务面积 ：{{ area }}</span>
                  <span v-show="area">平方米</span>
                   <div></div>
                  <span class="mb-2">实际费用 ：{{ realMoney }}</span>
                  <span v-show="realMoney">元</span>
                   <div></div>
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
                  </v-toolbar>
                  <v-card-text>
                    <span>实际派发时间 ：</span>
                    <!-- timeAfterDistribution -->
                    <div>
                      <v-text-field
                        filled
                        rounded
                        dense
                        readonly
                        v-model="timeAfterDistribution"
                      >
                        <template v-slot:append-outer>
                          <v-slide-x-reverse-transition mode="out-in">
                            <v-icon @click="changeTimeAfterDistributiondata"
                              >date_range</v-icon
                            >
                          </v-slide-x-reverse-transition>
                        </template>
                      </v-text-field>
                    </div>

                    <div class="">技术员实际完成时间 ：</div>
                    <!-- technicianCompletionTime -->

                    <div>
                      <v-text-field
                        filled
                        rounded
                        dense
                        readonly
                        v-model="technicianCompletionTime"
                      >
                        <template v-slot:append-outer>
                          <v-slide-x-reverse-transition mode="out-in">
                            <v-icon @click="changeTechnicianCompletionTime"
                              >date_range</v-icon
                            >
                          </v-slide-x-reverse-transition>
                        </template>
                      </v-text-field>
                    </div>

                    <div class="">外业完成时间 ：</div>
                    <!-- completionTime -->
                    <div>
                      <v-text-field
                        filled
                        rounded
                        dense
                        readonly
                        v-model="completionTime"
                      >
                        <template v-slot:append-outer>
                          <v-slide-x-reverse-transition mode="out-in">
                            <v-icon @click="changeCompletionTime"
                              >date_range</v-icon
                            >
                          </v-slide-x-reverse-transition>
                        </template>
                      </v-text-field>
                    </div>

                    <div class="">内业完成时间 ：</div>
                    <!-- insidePagesFinish -->
                    <div>
                      <v-text-field
                        filled
                        rounded
                        dense
                        readonly
                        v-model="insidePagesFinish"
                      >
                        <template v-slot:append-outer>
                          <v-slide-x-reverse-transition mode="out-in">
                            <v-icon @click="changInsidePagesFinish"
                              >date_range</v-icon
                            >
                          </v-slide-x-reverse-transition>
                        </template>
                      </v-text-field>
                    </div>

                    <div class="">合同完成时间 ：</div>
                    <div>
                      <v-text-field
                        filled
                        rounded
                        dense
                        readonly
                        v-model="contractCompleted"
                      >
                        <template v-slot:append-outer>
                          <v-slide-x-reverse-transition mode="out-in">
                            <v-icon @click="changeContractCompleted"
                              >date_range</v-icon
                            >
                          </v-slide-x-reverse-transition>
                        </template>
                      </v-text-field>
                    </div>

                    <div class="">预估完成时间 ：</div>
                    <div>
                      <v-text-field
                        filled
                        rounded
                        dense
                        readonly
                        v-model="estimatedTime"
                      >
                        <template v-slot:append-outer>
                          <v-slide-x-reverse-transition mode="out-in">
                            <v-icon @click="estimatedTimeF()"
                              >date_range</v-icon
                            >
                          </v-slide-x-reverse-transition>
                        </template>
                      </v-text-field>
                    </div>

                    <div class="">金额到账时间 ：</div>
                    <!-- timeReceiptAmount -->
                    <div>
                      <v-text-field
                        filled
                        rounded
                        dense
                        readonly
                        v-model="timeReceiptAmount"
                      >
                        <template v-slot:append-outer>
                          <v-slide-x-reverse-transition mode="out-in">
                            <v-icon @click="changeTimeReceiptAmount()"
                              >date_range</v-icon
                            >
                          </v-slide-x-reverse-transition>
                        </template>
                      </v-text-field>
                    </div>

                     <div class="">收款完成时间 ：</div>
                    <!-- collectiontime -->

                    <div>
                      <v-text-field
                        filled
                        rounded
                        dense
                        readonly
                        v-model="collectionTime"
                      >
                        <template v-slot:append-outer>
                          <v-slide-x-reverse-transition mode="out-in">
                            <v-icon @click="changeCollectionTime"
                              >date_range</v-icon
                            >
                          </v-slide-x-reverse-transition>
                        </template>
                      </v-text-field>
                    </div>

                     <div class="">备案完成时间 ：</div>
                    <!-- recordtime -->

                    <div>
                      <v-text-field
                        filled
                        rounded
                        dense
                        readonly
                        v-model="recordTime"
                      >
                        <template v-slot:append-outer>
                          <v-slide-x-reverse-transition mode="out-in">
                            <v-icon @click="changeRecordTime"
                              >date_range</v-icon
                            >
                          </v-slide-x-reverse-transition>
                        </template>
                      </v-text-field>
                    </div>
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
              地址： {{ address }}
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
    <v-dialog width="250" v-model="dialog">
      <date-picker
        type="datetime"
        :open="pickerdialog"
        :lang="lang"
        v-model="pickertime"
      >
        <template v-slot:footer>
          <div>
            <v-btn x-large :loading="lodingbutton" @click="updatapaifa()"
              >确定</v-btn
            >
          </div>
        </template>
      </date-picker>
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
            <template v-slot:append>
              <p class="my-auto">㎡</p>
            </template>
          </v-text-field>
          <v-text-field
            v-model="realMoney"
            label="实际费用"
            outlined
            clearable
            dense
            ><template v-slot:append>
              <p>￥</p>
            </template>
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import ProjectDetailClass from "@/page/task_systems/taskDetail/projectDetail.service";
import orderServe from "@/page/order/order.serves";
import userServes from "@/page/user/user.serves";
import moment from "moment";
import Bus from "@/common/bus";
import { lazyAMapApiLoaderInstance } from "vue-amap";
import { map, switchMap, tap } from "rxjs/operators";

export default {
  components: { DatePicker },
  data: () => ({
    pickerdialog: false,
    lang: {
      formatLocale: {
        // MMMM
        months: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        // MMM
        monthsShort: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        // dddd
        weekdays: [
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
          "星期七",
        ],
        // ddd
        weekdaysShort: ["七", "六", "五", "四", "三", "二", "一"],
        // dd
        weekdaysMin: ["七", "六", "五", "四", "三", "二", "一"],
      },
      monthBeforeYear: false,
    },

    // 这个button的loading
    deletetimeB: false,
    timedialog: false,
    //这个订单的key
    orderkey: null,
    //预估时间
    estimatedTime: null,
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
    type: null,
    ordername: null,
    // 任务开始时间
    orderstartTime: null,
    // 任务结束时间
    orderendTime: null,
    //收款完成时间
    collectionTime:null,
    //备案完成时间
    recordTime:null,
    hasSaved: false,
    model: null,
    // states: [
    //   { name: "Florida", abbr: "FL", id: 1 },
    //   { name: "Georgia", abbr: "GA", id: 2 },
    //   { name: "Nebraska", abbr: "NE", id: 3 },
    //   { name: "California", abbr: "CA", id: 4 },
    //   { name: "New York", abbr: "NY", id: 5 },
    // ],

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
    dialog(val) {
      if (val == true) {
        console.log("弹出", val);
        setTimeout(() => {
          this.pickerdialog = true;
        }, 400);
      } else {
        console.log("收", val);
        this.pickerdialog = false;
      }
    },
  },

  created() {
    // 初始化页面所有数据
    let routedata = JSON.parse(unescape(this.$route.query.id));
    console.log(routedata);
    this.orderkey = {
      hash: routedata.hash,
      range: routedata.range,
      index: routedata.range,
    };

    userServes
      .getUserInformation({
        hash: routedata.creatorkey.hash,
        range: routedata.creatorkey.range,
        index: routedata.creatorkey.index,
      })
      .pipe(
        switchMap((data) => {
          this.userName = data.usernickname;
          return orderServe.bykeygetorder({
            hash: routedata.hash,
            range: routedata.range,
            index: routedata.index,
          });
        })
      )
      .subscribe((data) => {
        this.ordername = data.ordername;
        this.orderstartTime = data.orderstartTime;
        this.orderendTime = data.orderendTime;
        this.figuetime = data.figuetime;
        this.type = data.type;
        this.area = data.area;
        this.timeAfterDistribution = data.timeAfterDistribution;
        this.technicianCompletionTime = data.technicianCompletionTime;
        this.completionTime = data.completionTime;
        this.insidePagesFinish = data.insidePagesFinish;
        this.contractCompleted = data.contractCompleted;
        this.timeReceiptAmount = data.timeReceiptAmount;
        this.estimatedMoney = data.estimatedMoney;
        this.realMoney = data.realMoney;
        this.estimatedTime = data.estimatedTime;
        this.collectionTime=data.collectionTime;
        this.recordTime=data.recordTime;
        this.ONEinformation = data.ONEinformation;
        lazyAMapApiLoaderInstance.load().then(() => {
          this.map = new AMap.Map("amap-cointainer", {
            zoom: 13, //级别
            center: new AMap.LngLat(data.localPlace.lng, data.localPlace.lat),
          });
          var m1 = new AMap.Marker({
            position: [data.localPlace.lng, data.localPlace.lat],
          });
          this.address = data.localPlace.local;
          this.map.add(m1);
        });
      });

    // 将路由拿到的order信息赋值
  },
  methods: {
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
      this.lodingbutton = true;
      orderServe
        .updateOrderstartTime(this.timeselect, this.pickertime, this.orderkey)
        .subscribe(
          (data) => {
            console.log("1111111111111111", data);
            this.lodingbutton = false;
            this.dialog = false;
            console.log("data", data, this.timeselect);
            this[this.timeselect] = data.value;
            // this[this.timeselect] = moment(data).format("ll");
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
    /**
     * 清除完成时间
     */
    cleanoutTime() {
      this.deletetimeB = true;
      orderServe.qingchuendtime("orderendTime", null, this.orderkey).subscribe(
        (data) => {
          this.deletetimeB = false;
          this.orderendTime = null;
        },
        (err) => {
          console.log(err);
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
      this.dialog = true;
      this.timeselect = "timeAfterDistribution";
    },
    // 更改派发时间参数
    changeTechnicianCompletionTime() {
      console.log("changeTechnicianCompletionTime");
      this.dialog = true;
      this.timeselect = "technicianCompletionTime";
    },
    // 更改外业完成时间
    changeCompletionTime() {
      console.log("changeCompletionTime");
      this.dialog = true;
      this.timeselect = "completionTime";
    },
    // 内业完成时间
    changInsidePagesFinish() {
      console.log("changInsidePagesFinish");
      this.dialog = true;
      this.timeselect = "insidePagesFinish";
    },
    // 预估完成时间
    estimatedTimeF() {
      console.log("estimatedTime");
      this.dialog = true;
      this.timeselect = "estimatedTime";
    },

    // 合同完成时间
    changeContractCompleted() {
      console.log("contractCompleted");
      this.dialog = true;
      this.timeselect = "contractCompleted";
    },
    // 金额到账时间
    changeTimeReceiptAmount() {
      console.log("changeTimeReceiptAmount");
      this.dialog = true;
      this.timeselect = "timeReceiptAmount";
    },
     changeCollectionTime() {
      console.log("changeCollectionTime");
      this.dialog = true;
      this.timeselect = "collectionTime";
    },
     changeRecordTime() {
      console.log("changeRecordTime");
      this.dialog = true;
      this.timeselect = "recordTime";
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
      // this[this.timeselect] = moment(this.picker).format("ll");
      this[this.timeselect] = this.picker;
    },
  },
};
</script>

<style scoped>
#amap-cointainer {
  height: 500px;
}
</style>
