<template>
  <v-container fluid>
    <v-img
      src="https://photo.orsoon.com/180429/180429_103/Nk6ub405kG_small.jpg"
      aspect-ratio="3"
    >
    </v-img>
    <div class="text-center my-4">
      <h2 class="text-h4 pa-2">专业专注，精益求精</h2>
      <h3 class="text-subtitle-1 pa-2">为行业持续提供优质的解决方案</h3>
    </div>
    <v-container>
      <v-tabs class="white" light show-arrows grow v-model="tab">
        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

        <v-tab v-for="item in sltList" :key="item.id">
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in sltList" :key="item.id">
          <v-row>
            <v-col v-for="item1 in item.picList" :key="item1.title" cols="6">
              <v-card>
                <v-img :src="item1.picUrl" aspect-ratio="1.6"> </v-img>
                <v-card-title>
                  <v-btn class="text-button text-sm-boby1" text>{{
                    item1.title
                  }}</v-btn>
                </v-card-title>
                <v-card-text>
                  <v-btn class="text-caption text-sm-boby2" text>{{
                    item1.subTitle
                  }}</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      sltList: [
        {
          title: "无人机航测",
          id: 1,
          picList: [
            {
              picUrl:
                "https://pic1.zhimg.com/v2-a13187c882c74b8a8c58801344277f23_1440w.jpg?source=172ae18b",
              title: "无人机倾斜三维摄影测量",
              subTitle: "三维地形测绘",
            },
            {
              picUrl:
                "https://pic1.zhimg.com/v2-a13187c882c74b8a8c58801344277f23_1440w.jpg?source=172ae18b",
              title: "专业的无人机航空测量方案",
              subTitle: "地形图测绘",
            },
            {
              picUrl:
                "https://pic1.zhimg.com/v2-a13187c882c74b8a8c58801344277f23_1440w.jpg?source=172ae18b",
              title: "北京市某地区地质灾害航飞项目",
              subTitle: "地质灾害航飞",
            },
          ],
        },
        {
          title: "三维激光测量",
          id: 2,
          picList: [
            {
              picUrl:
                "https://file.elecfans.com/web1/M00/BA/F3/pIYBAF6eT7WAQ8fDAAICZ5va3q4826.jpg",
              title: "移动测量系统大比例尺地形图测绘",
              subTitle: "推动城市信息化建设新型项目",
            },
          ],
        },
        {
          title: "室内定位导航",
          id: 3,
          picList: [
            {
              picUrl:
                "https://www.masters.tw/wp-content/uploads/2019/04/indoor-positioning.jpg",
              title: "引领新的三维数据革命",
              subTitle: "室内数字化及定位导航系统",
            },
          ],
        },
        {
          title: "精准位置服务",
          id: 4,
          picList: [
            {
              picUrl: "https://img95.699pic.com/photo/40090/4320.jpg_wh300.jpg",
              title: "电力行业解决方案",
              subTitle: "致力于电力行业信息化",
            },
          ],
        },
        {
          title: "变形监测",
          id: 5,
          picList: [
            {
              picUrl:
                "https://lh3.googleusercontent.com/proxy/WgUPB3VFHijppki4rEZQNst-JUVCnusuB1xTThMP0rtJZVrnAE_8Qv7-IK2AfaVbTkq9AceocJEOP_JA4ugqoVIT3pA_4UM",
              title: "精密检测多行业应用解决方案",
              subTitle: "为行业提供优质的解决方案",
            },
          ],
        },
        {
          title: "轨道交通精密监测与测量",
          id: 6,
          picList: [
            {
              picUrl: "https://pic.17qq.com/uploads/ijegehdfijz.jpeg",
              title: "轨道交通精密测量",
              subTitle:
                "面向高速铁路、城市轨道和城际轨道三大领域的智慧施工、大数据管理、智慧运维",
            },
          ],
        },
      ],
    };
  },
  
};
</script>