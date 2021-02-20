<template>
  <v-container>
    <v-sheet class="my-3">
      <v-btn class="green darken-1 white--text">
        +新建项目
      </v-btn>
    </v-sheet>
    <v-row>
      <v-col v-for="i in order" :key="i" cols="12" md="4">
        <v-card>
          <v-card-actions class="float-right my-2"
            ><v-btn
              to="/taskSystems/projectDetail"
              text
              class="light-blue--text text--accent-4"
              >详情</v-btn
            ></v-card-actions
          >{{ i }}
          <v-card-title class="text-center">项目名称：{{i.ordername}}</v-card-title>
          <v-card-subtitle> 甲方信息 </v-card-subtitle>
          <v-card-text> 名字： {{i.ordername}} </v-card-text>
          <v-card-text> 电话： 17607924259 </v-card-text>
          <v-card-subtitle>项目信息</v-card-subtitle>
          <v-card-text> 地点： 吴城 </v-card-text>
          <v-card-text> 面积： 200亩 </v-card-text>
          <v-card-text> 类型： 不动产测绘 </v-card-text>
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
      pagination:6,
      page: 2,
      ordercount: 6,
      order: [],
    };
  },
  watch: {
    page() {
      console.log(this.page);
      orderServe.getfigure(this.page * 12 - 12, 12).subscribe((data) => {
        this.order = data.list
        
        // console.log(data);
      });
    },
  },
  created() {
    console.log("group 创建");
    orderServe.getfigure(this.page - 1, 12).subscribe((data) => {
      this.order = data.list;
      this.pagination = Math.ceil(data['maxsize']/12)
      console.log(data);
    });
  },
};
</script>
