<template>
  <v-container app>
    <v-row>
      <v-col>
        <h2 class="text-h2 transition-swing" style="text-align: center">
          新闻中心 <span>NEWS</span>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <!-- 主图片 -->
      <v-col cols="12" sm="6" md="6" lg="4" class="red lighten-5">
        <v-img
          :aspect-ratio="16 / 9"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
        <h3 class="mx-5 title my-16 text-h4">一段标题一段标题一段标题</h3>
        <div class="text-h5 mb-5 mx-5">
          查看详情 <v-icon>mdi-domain</v-icon>
        </div>
      </v-col>
      <!-- 新闻列表 -->
      <v-col cols="12" sm="6" md="6" lg="5" class="blue lighten-5">
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
      <v-col cols="12" lg="3" class="lime lighten-5">
        <v-row align-content="space-between" style="height: 100%">
          <v-col sm="4" lg="12">
            <v-card style="height: 120px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                style="height: 100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col sm="4" lg="12">
            <v-card style="height: 120px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                style="height: 100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col sm="4" lg="12">
            <v-card style="height: 120px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
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
        { text: "新闻一",time:"2020-12-9" },
        { text: "新闻二",time:"2020-12-7" },
        { text: "新闻三",time:"2020-12-4" },
      ],
    };
  },
};
</script>