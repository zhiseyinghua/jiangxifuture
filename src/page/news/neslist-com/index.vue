<template>
  <v-container>
    <v-list>
      <template v-for="(item, index) in items">
        <v-divider v-if="item.divider" :key="index"></v-divider>
        <v-list-item v-else :key="item.title">
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
        title: "央广网：测量珠峰高程 国产测绘仪器装备大展身手",
        time:"2020-12-12"
      },
      { divider: true },
      {
        title: "珠峰高程测量背后的广州科技力量：国产设备承受住极端环境考验",
        time:"2020-12-11"
      },
      { divider: true },
      {
        title: "广西测绘行业职业技能竞赛开赛 200余名队员参与角逐",
        time:"2020-12-11"
      },
      { divider: true },
      {
        title: "测绘装备“中国造”是这样炼成的",
        time:"2020-12-11"
      },
      { divider: true },
      {
        title: "2019年全国高职院校大学生测绘技能大赛在渝举办——青春逢盛世，奋斗正当时",
        time:"2020-12-11"
      },
      { divider: true },
    ],
  }),
};
</script>