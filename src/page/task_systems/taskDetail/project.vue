<template>
  <div>
    <v-container>
      <v-sheet class="my-3">
        <v-row>
          <v-col>
            <v-btn
              :to="{ path: '/order' }"
              class="primary darken-1 white--text mr-10"
            >
              创建任务
            </v-btn>
            <div
              class="mr-10"
              style="height:100px; width:150px; display: inline-block;"
            >
              <v-select
                :items="items"
                value="全部"
                @change="changeRoute"
                dense
                solo
              ></v-select>
            </div>
            <div style="display: inline-block;">
              <section>
                <date-picker
                  :lang="lang"
                  v-model="value1"
                  range
                  placeholder="选择任务的区间"
                  type="date"
                  @close="handleRangeClose"
                >
                </date-picker>
              </section>
            </div>
            <div class="fabC">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    @click="createEx"
                    color="primary"
                    fab
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      arrow_circle_down
                    </v-icon>
                  </v-btn>
                </template>
                <span>将当前页面的任务生成表格</span>
              </v-tooltip>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
      <div v-if="order.length != 0"></div>
      <div v-else justify="center" align="center">没有找到任务</div>
      <v-row>
        <v-col v-for="(item, index) in order" :key="index" cols="12" md="4">
          <v-card>
            <v-app-bar
              v-if="
                item.orderendTime != null &&
                  item.orderendTime != '' &&
                  item.orderendTime != 'Invalid date'
              "
              flat
              color="teal accent-4"
            >
              <v-toolbar-title class="title white--text pl-0">
                已完成
              </v-toolbar-title></v-app-bar
            >
            <v-app-bar v-else flat color="red darken-2">
              <v-toolbar-title class="title white--text pl-0">
                未完成
              </v-toolbar-title></v-app-bar
            >
            <v-card-actions class="float-right my-2"
              ><v-btn
                @click="toprojectDetail(item)"
                text
                class="light-blue--text text--accent-4"
                >详情</v-btn
              ></v-card-actions
            >
            <v-card-title class="text-center"
              >项目名称：{{ item.ordername }}</v-card-title
            >
            <v-card-text> 开始时间： {{ item.orderstartTime }} </v-card-text>
            <v-card-subtitle> 甲方信息 </v-card-subtitle>
            <v-card-text
              v-if="
                item.ONEinformation &&
                  item.ONEinformation.name &&
                  item.ONEinformation.name != ''
              "
            >
              名字： {{ item.ONEinformation.name }}
            </v-card-text>
            <v-card-text v-else> 名字： 未填写 </v-card-text>
            <v-card-text>
              电话： {{ item.ONEinformation && item.ONEinformation.phone }}
            </v-card-text>
            <v-card-subtitle>项目信息</v-card-subtitle>
            <v-card-text v-if="item.localPlace && item.localPlace.local">
              地点： {{ item.localPlace.local }}
            </v-card-text>
            <v-card-text v-else> 地址： 未填写 </v-card-text>
            <!-- <v-card-text v-if="item.area"> 面积： {{ item.area }} </v-card-text>
            <v-card-text v-else> 面积： 未填写 </v-card-text> -->
            <v-card-text v-if="item.type"> 类型： {{ item.type }} </v-card-text>
            <v-card-text v-else> 类型： 未填写 </v-card-text>
            <v-btn
                text

                 @click="oneDelete(item)"
                class="light-blue--text text--accent-4 my-2 float-end-2"
                >删除</v-btn
              >
             <v-dialog
                v-model="dialog"
                persistent
                max-width="290"
                >
             <!-- <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                 v-bind="attrs"
                 v-on="on"
                class="light-blue--text text--accent-4 my-2 float-end-2"
                >删除</v-btn
              >
             </template> -->
      <v-card>
        <v-card-title class="headline">
            确认删除
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            取消
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleorder(item)"
          >
            确认
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

          </v-card>
        </v-col>
      </v-row>
      <br />
      <br />
      <br />
      <div v-show="isshowpagination" class="text-center">
        <v-pagination
          v-model="page"
          :length="pagination"
          :total-visible="7"
        ></v-pagination>
      </div>
      <br />
      <br />
    </v-container>
  </div>
</template>
<script>
var XLSX = require("xlsx");
var FileSaver = require("file-saver");
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import orderServe from "@/page/order/order.serves";
import axios from "axios";
import UrlConfig from "@/page/order/url.config"
export default {
  inject: ['reload'],
  components: { DatePicker },
  data() {
    return {
        deleteDate:null,
        dialog:false,
      //  用于生成ex的模板数据
      jsonData: [
        {
          序列: 1,
          任务名称: 1,
          任务地点: 2,
          任务结束时间: 3,
          任务开始时间: 4,
          任务类型: 5,
          预估时间: 6,
          面积: 7,
          实际派发时间: 8,
          技术员实际完成时间: 9,
          外业完成时间: 10,
          内业完成时间: 11,
          合同完成时间: 12,
          金额到账时间: 13,
          预估费用: 14,
          实际费用: 15,
          甲方电话: 16,
          甲方邮箱: 17,
          甲方名字: 18,
        },
      ],
      header: [
        "序列",
        "任务名称",
        "任务地点",
        "任务结束时间",
        "任务开始时间",
        "任务类型",
        "预估时间",
        "面积(单位平方米)",
        "实际派发时间",
        "技术员实际完成时间",
        "外业完成时间",
        "内业完成时间",
        "合同完成时间",
        "金额到账时间",
        "预估费用(单位元)",
        "实际费用(单位元)",
        "甲方电话",
        "甲方邮箱",
        "甲方名字",
      ],
      value1: null,
      isshowpagination: true,
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

      value1: [],
      items: ["全部", "已完成"],
      pagination: 6,
      page: 1,
      ordercount: 6,
      order: [],
      ischoose: "all",
    };
  },
  watch: {
    page() {
      if (this.ischoose == "all") {
        this.order = [];
        console.log(this.page);
        orderServe
          .getfigure(this.page * 12 - 12 + "", "12")
          .subscribe((data) => {
            this.order = data.list;

            // console.log(data);
          });
      } else {
        this.order = [];
        console.log(this.page);
        orderServe
          .byOrderEndTimeOrder(this.page * 12 - 12 + "", "12")
          .subscribe((data) => {
            this.order = data.list;
            // console.log(data);
          });
      }
    },
  },
  created() {
    console.log("group 创建");
    this.getallfigure();
  },
  
  methods: {
    oneDelete(value){
        this.dialog = true
        this.deleteDate = {
            hash:value.hash,
            range:value.range,
            index:value.index
        }
        console.log(value)
    },
      deleorder() {
      if(this.deleteDate == "" || this.deleteDate == undefined ) {
          console.log("报错");
      } else {
      this.dialog = false;
      axios({
        method: "post",
        // url: `${api}/${figure}/${deleteorder}` ,
        url:"/api/figure/deleteorder",
        data: this.deleteDate
      }).then((res) => {
        this.getallfigure()
        console.log(res.data);
      });
      }
      this.reload();
    }, 

    changeRoute(val) {
      this.isshowpagination = true;
      this.order = [];
      console.log(val);
      if (val == "全部") {
        // 获取全部表单
        this.getallfigure();
      } else {
        // 获取已完成表单
        console.log(val);
        this.byOrderEndTimeGetOrder();
      }
    },

    // 跳转至单个任务页面
    toprojectDetail(value) {
      let strItem = JSON.stringify(value);

      this.$router.push({
        path: "/taskSystems/projectDetail",
        query: { id: escape(strItem) },
      });
    },
    // 获取全部表单
    getallfigure() {
      this.isshowpagination = true;
      console.log("获取全部表单");
      orderServe.getfigure(this.page - 1 + "", "12").subscribe((data) => {
        this.order = data.list;
        this.pagination = Math.ceil(data["maxsize"] / 12);
        console.log(data);
      });
      this.ischoose = "all";
    },
    byOrderEndTimeGetOrder() {
      console.log("获取已完成的表单");
      orderServe
        .byOrderEndTimeOrder(this.page - 1 + "", "12")
        .subscribe((data) => {
          this.order = data.list;
          this.pagination = Math.ceil(data["maxsize"] / 12);
          console.log(data);
        });
      this.ischoose = "";
    },
    /**
     * 获取选取的表单的order
     */
    handleRangeClose() {
      this.isshowpagination = false;
      this.order = [];
      console.log(this.list);
      console.log(this.value1);
      orderServe
        .byOrderTimeOrder(
          "orderstartTime",
          this.value1[0].valueOf(),
          this.value1[1].valueOf()
        )
        .subscribe((data) => {
          console.log(data);
          console.log(data.length);
          this.order = data;
        });
    },
    createEx() {
      let data = orderServe.createExcel(this.order);
      var ws = XLSX.utils.json_to_sheet(data, { header: this.header });
      console.log(ws);
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "People");
      XLSX.writeFile(wb, "sheetjs.xlsx");
    },
  },
};
</script>

<style scoped>
/* .mx-datepicker-popup {
  margin-top: 300px;
  margin-left: 40%;
} */
/* .mx-datepicker {
  display: none;
} */
.fabC {
  position: fixed;
  z-index: 1;
  right: 90px;
  top: 100px;
}
</style>
