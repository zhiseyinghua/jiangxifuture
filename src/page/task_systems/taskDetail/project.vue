<template>
  <v-container>
    <v-sheet class="my-3">
        <v-btn class="green darken-1 white--text">
            +新建项目
        </v-btn>
    </v-sheet>
    <v-row>
      <v-col v-for="i in 9" :key="i" cols="12" md="4">
        <v-card>
          <v-card-actions class="float-right my-2"><v-btn to="/taskSystems/projectDetail" text class="light-blue--text text--accent-4">详情</v-btn></v-card-actions>
          <v-card-title class="text-center pb-2">项目名称：吴城测绘</v-card-title>
          <v-card-text class="py-1"> 名字： 咚咚呱 </v-card-text>
          <v-card-text class="py-1"> 电话： 17607924259 </v-card-text>
          <v-card-text class="py-1"> 地点： 吴城 </v-card-text>
          <v-card-text class="py-1"> 面积： 200亩 </v-card-text>
          <v-card-text class="py-1"> 类型： 不动产测绘 </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>