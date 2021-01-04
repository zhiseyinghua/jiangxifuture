<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="text-h5 text-sm-h4 text-md-h3 transition-swing" style="text-align: center">
          新闻中心 <span>NEWS</span>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <!-- 主图片 -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-img
          :aspect-ratio="16 / 9"
          :src="require('@/assets/home/news/1.png')"
        ></v-img>
        <h3 class="mx-5 title my-16 text-h5 text-sm-h4">地球科学研究院召开工作研讨会</h3>
        <div class="text-h6 text-sm-h5 mb-5 mx-5">
          查看详情 ->
        </div>
      </v-col>
      <!-- 新闻列表 -->
      <v-col cols="12" sm="6" md="6" lg="5">
        <v-list class="mx-5" min-width="340px" flat dense two-line>
          <v-subheader>新闻</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in newsList" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
                <v-list-item-subtitle v-text="item.time"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <!-- 卡片 -->
      <v-col cols="12" lg="3">
        <v-row align-content="space-between" style="height: 100%">
          <v-col sm="4" lg="12">
            <v-card style="height: 140px">
              <v-img
                 :src="require('@/assets/home/news/2.png')"
                style="height: 100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col sm="4" lg="12">
            <v-card style="height: 140px">
              <v-img
               :src="require('@/assets/home/news/3.png')"
                style="height: 100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col sm="4" lg="12">
            <v-card style="height: 140px">
              <v-img
               :src="require('@/assets/home/news/4.png')"
                style="height: 100%"
              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 0,
      newsList: [
        { text: "国家测绘地理信息局党组部署2017年巡视工作",time:"2020-12-9" },
        { text: "国家测绘地理信息局召开离退休干部春节茶话会",time:"2020-12-7" },
        { text: "国家测绘地理信息局党组开展春节走访慰问活动",time:"2020-12-4" },
      ],
    };
  },
};
</script>