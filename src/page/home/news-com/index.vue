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
      <v-col cols="12" sm="6" md="6" lg="4" >
        <v-img
          :aspect-ratio="16 / 9"
          :src="require('@/assets/home/news/1.png')"
        ></v-img>
        <h3 class="mx-5 title my-16 text-h5 text-sm-h4">地球科学研究院召开工作研讨会</h3>
        <div class="text-h6 text-sm-h5 mb-5 mx-5" @click="handleClick(10)" id="xq">
          查看详情 ->
        </div>
      </v-col>
      <!-- 新闻列表 -->
      <v-col cols="12" sm="6" md="6" lg="5">
        <v-list class="mx-5" flat two-line>
          <v-subheader>新闻</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in newsList" :key="i" @click="handleClick(item.id)">
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1 text-sm-h6">{{item.text}}</v-list-item-title>
                <v-list-item-subtitle class="text-subtitle-2 text-sm-subtitle-1">{{item.time}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <!-- 卡片 -->
      <v-col cols="12" lg="3">
        <v-row  style="height: 100%" align-content="space-between">
          <v-col sm="4" lg="12">
            <v-card style="height:180px">
              <v-img
                 :src="require('@/assets/home/news/2.png')"
                style="height: 100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col sm="4" lg="12">
            <v-card style="height:180px">
              <v-img
               :src="require('@/assets/home/news/3.png')"
                style="height: 100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col sm="4" lg="12">
            <v-card style="height:180px">
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
        { text: "45年來3次測量 珠峰長高了",time:"2020/12/10",id:0 },
        { text: "上海2021年元旦将启用“上海2000坐标系",time:"2020-12-7",id:1 },
        { text: "国家质检中心主编3部国家标准正式发布实施",time:"2020-12-11",id:2 },
        { text: "我国成功发射遥感三十三号卫星 主要用于科学试验、国土资源普查、农产品估产及防灾减灾等领域",time:"2020-12-28",id:3 },
        { text: "青海地质测绘院拓展省外市场",time:"2020-12-23",id:4 },
        { text: "黑龙江省开展测绘统计网络培训",time:"2020-12-24",id:5 },
      ],
    };
  },
  methods: {
     handleClick(id){
       this.$router.push({path:'/newsDetail', query:{id}});
     }
  }
};
</script>

<style lang="scss" scoped>
  #xq{
    cursor:pointer;
    &:hover{
      color:red;
    } 
  }
</style>