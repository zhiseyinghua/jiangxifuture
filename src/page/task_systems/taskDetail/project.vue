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
              +新建项目
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
                  type="date"
                  range
                  placeholder="选择任务的区间"
                ></date-picker>
              </section>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
      <v-row>
        <v-col v-for="(item, index) in order" :key="index" cols="12" md="4">
          <v-card>
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
            <v-card-text v-if="item.area"> 面积： {{ item.area }} </v-card-text>
            <v-card-text v-else> 面积： 未填写 </v-card-text>
            <v-card-text v-if="item.type"> 类型： {{ item.type }} </v-card-text>
            <v-card-text v-else> 类型： 未填写 </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br />
      <br />
      <br />
      <div class="text-center">
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import orderServe from "@/page/order/order.serves";
export default {
  components: { DatePicker },
  data() {
    return {
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
    };
  },
  watch: {
    page() {
      this.order = [];
      console.log(this.page);
      orderServe.getfigure(this.page * 12 - 12 + "", "12").subscribe((data) => {
        this.order = data.list;
        // console.log(data);
      });
    },
  },
  created() {
    console.log("group 创建");
    this.getallfigure();
  },
  methods: {
    changeRoute(val) {
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
      console.log("获取全部表单");
      orderServe.getfigure(this.page - 1 + "", "12").subscribe((data) => {
        this.order = data.list;
        this.pagination = Math.ceil(data["maxsize"] / 12);
        console.log(data);
      });
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
    },
  },
};
</script>

<style>
/* .mx-datepicker-popup {
  margin-top: 300px;
  margin-left: 40%;
} */
/* .mx-datepicker {
  display: none;
} */
</style>
