<template>
  <v-container>
    <v-list>
      <template v-for="(item, index) in items">
        <v-divider v-if="item.divider" :key="index"></v-divider>
        <v-list-item v-else :key="item.title" @click="handleClick(item.id)">
          <v-list-item-content class="d-flex justify-space-between">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text v-text="item.time"> </v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "newlist-com",
  data: () => ({
    items: [
      {
        title: "45年來3次測量 珠峰長高了",
        time:"2020/12/10",
        id:0
      },
      { divider: true },
      {
        title: "上海2021年元旦将启用“上海2000坐标系",
        time:"2020-12-29",
        id:1
      },
      { divider: true },
      {
        title: "国家质检中心主编3部国家标准正式发布实施",
        time:"2020-12-11",
        id:2
      },
      { divider: true },
      {
        title: "我国成功发射遥感三十三号卫星 主要用于科学试验、国土资源普查、农产品估产及防灾减灾等领域",
        time:"2020-12-28",
        id:3
      },
      { divider: true },
      {
        title: "青海地质测绘院拓展省外市场",
        time:"2020-12-23",
        id:4
      },
      { divider: true },
      {
        title:"黑龙江省开展测绘统计网络培训",
        time:"2020-12-24",
        id:5
      },
      { divider: true },
      {
        title:"我国着手制定测绘标准外文版",
        time:"2020-04-20",
        id:6
      },
      { divider: true },
      {
        title:"自然资源部办公厅关于组织开展第51个世界地球日主题宣传活动周的通知",
        time:"2020-04-20",
        id:7
      },
      { divider: true },
      {
        title:"新华社 | “雪龙2”号完成首向和尾向破冰试验",
        time:"2019-12-02",
        id:8
      },
      { divider: true },
      {
        title:"《自然资源部信息化建设总体方案》公布",
        time:"2019-12-02",
        id:9
      },
      { divider: true },
    ],
  }),
  methods: {
     handleClick(id){
       this.$router.push({path:'/newsDetail', query:{id}});
     }
  }
};
</script>