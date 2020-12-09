<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h2 transition-swing" style="text-align: center">
          解决方案 <span>SOLUTIONS</span>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8" class="banner_wrap">
        <v-card absolute position-y="0">
          <v-carousel :show-arrows="false" hide-delimiters v-model="model">
            <v-carousel-item v-for="(color, i) in colors" :key="color">
              <v-sheet :color="color" height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">Slide {{ i + 1 }}</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
        <v-list class="banner_nav" nav outlined dense> 
          <v-list-item-group>
            <v-list-item
              v-for="(item, i) in sltTitle"
              :key="i"
              @click="handleTabBanner(i)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"> </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" sm="4"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: 0, //绑定轮播图
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      sltTitle: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
      ],
    };
  },
  methods: {
    /**
     * @param idx 列表索引
     * 切换图片的方法
     */
    handleTabBanner(idx) {
      this.model = idx;
    }
  }
};
</script>

<style lang="scss" scoped>
.banner_wrap{
  position:relative;
  .banner_nav{
    position: absolute;
    left:12px;
    top:12px;
    opacity: 0.3;
    width: 15vw;
  }
}
</style>