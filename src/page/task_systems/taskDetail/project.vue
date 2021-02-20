<template>
  <v-container>
    <v-sheet class="my-3">
      <v-btn class="green darken-1 white--text">
        +新建项目
      </v-btn>
    </v-sheet>
    <v-row>
      <v-col v-for="(item,index) in order" :key="index" cols="12" md="4">
        <v-card>
          <v-card-actions class="float-right my-2"
            ><v-btn
              to="/taskSystems/projectDetail"
              text
              class="light-blue--text text--accent-4"
              >详情</v-btn
            ></v-card-actions
          >{{ item }}
          <v-card-title class="text-center"
            >项目名称：{{ item.ordername }}</v-card-title
          >
          <v-card-subtitle> 甲方信息 </v-card-subtitle>
          <v-card-text
            v-if="item.ONEinformation.name && item.ONEinformation.name != ''"
          >
            名字： {{ item.ONEinformation.name }}
          </v-card-text>
          <v-card-text v-else> 名字： 未填写 </v-card-text>
          <v-card-text> 电话： {{ item.ONEinformation.phone }} </v-card-text>
          <v-card-subtitle>项目信息</v-card-subtitle>
          <v-card-text v-if="item.localPlace.local">
            地点： {{ item.localPlace.local }}
          </v-card-text>
          <v-card-text v-else> 地址： 未填写 </v-card-text>
          <v-card-text> 面积： {{ item.area }} </v-card-text>
          <v-card-text> 类型： {{ item.type }} </v-card-text>
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
</template>
<script>
import orderServe from "@/page/order/order.serves";
export default {
  data() {
    return {
      pagination: 6,
      page: 2,
      ordercount: 6,
      order: [],
    };
  },
  watch: {
    page() {
      console.log(this.page);
      orderServe.getfigure((this.page * 12 - 12) + '', "12").subscribe((data) => {
        this.order = data.list;

        // console.log(data);
      });
    },
  },
  created() {
    console.log("group 创建");
    orderServe.getfigure((this.page - 1)+ '', "12").subscribe((data) => {
      this.order = data.list;
      this.pagination = Math.ceil(data["maxsize"] / 12);
      console.log(data);
    });
  },
};
</script>
