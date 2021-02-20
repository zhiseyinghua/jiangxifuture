<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2
          class="text-h5 text-sm-h4 text-md-h3 transition-swing"
          style="text-align: center"
        >
          解决方案 <span>SOLUTIONS</span>
        </h2>
      </v-col>
    </v-row>
    <v-row class="d-flex d-md-none">
      <v-col>
        <v-tabs class="white" light show-arrows grow v-model="model">
          <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
          <v-tab v-for="item in sltTitle" :key="item.id">
            {{ item.text }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" class="banner_wrap">
        <v-card>
          <v-responsive :aspect-ratio="16 / 9">
            <v-carousel
              :show-arrows="false"
              hide-delimiters
              cycle
              continuous
              v-model="model"
              height="100%"
            >
              <v-carousel-item v-for="item in bannerList" :key="item.id">
                <v-sheet height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-img :src="item.src" width="100%" :aspect-ratio="16 / 9">
                    </v-img>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-responsive>
        </v-card>
        <v-list
          class="banner_nav transparent d-none d-md-flex"
          outlined
          flat
          height="100%"
          width="50%"
        >
          <v-responsive aspect-ratio="0.7">
            <v-list-item-group :value="model" height="100%">
              <v-list-item
                v-for="(item, i) in sltTitle"
                :key="item.id"
                @click="handleTabBanner(i)"
              >
                <v-list-item-icon>
                  <v-icon
                    v-text="item.icon"
                    class="white--text text-body-1 text-lg-h6"
                  ></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.text"
                    class="white--text text-body-1 text-lg-h6"
                  >
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-responsive>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="solutions_content_wrap">
        <h2 class="text-h5 text-lg-h4 font-weight-black my-md-5 my-lg-10 ml-5">
          {{ sltTitle[model].text }}
        </h2>
        <p class="text-body-2 text-lg-body-1 mx-5">
          {{ textList[model] }}
        </p>
        <div class="ml-5 mb-10 learnMore">了解更多 -></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: 0, //绑定轮播图
      bannerList: [
        {
          src: require("@/assets/home/solutions/wrj.png"),
          id: 1,
        },
        {
          src: require("@/assets/home/solutions/jgcl.png"),
          id: 2,
        },
        {
          src: require("@/assets/home/solutions/sndw.png"),
          id: 3,
        },
        {
          src: require("@/assets/home/solutions/jzdw.png"),
          id: 4,
        },
      ],
      sltTitle: [
        { text: "无人机航测", icon: "mdi-drone", id: 1 },
        { text: "三维激光测量", icon: "mdi-laser-pointer", id: 2 },
        { text: "室内定位导航", icon: "mdi-warehouse", id: 3 },
        { text: "精准位置服务", icon: "mdi-location-enter", id: 4 },
      ],
      textList: [
        "拥有固定翼、多旋翼全系列产品线，引领无人机航测的低成本产业化、应用新业态；庞大的无人机航测团队：遍布全国各地超400人的航测技术团队，专业专注，优质的无人机航测解决方案：实施航测项目超过1000个，实施面积超过60000平方公里，持续为多行业领域提供服务。",
        "多传感器集成，实现车载、机载等多平台应用，快速安装，精准定位，高效获取海量点云与高清影像数据，广泛应用于地形测量、城市园林普查、交通勘测设计、交通信息化普查、街景地图服务、高精度电子地图制作、数字三维城市等领域。",
        "面向各类大型室内空间场景数字化需求，从数据采集、自动后处理、数据发布到后期应用及定位导航的全方位解决方案。",
        "深入研究不同行业作业模式，洞察终端实际应用需求，打造基于高精度位置信息的系统集成应用方案，助力传统作业模式向信息化、智能化时代迈进。各类型解决方案现已广泛应用于测绘、电力、燃气、水利、能源、资源调查、国土规划、管线调查、地质安全监测、交通维护运营等领域。",
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
    },
  },
};
</script>

<style lang="scss" scoped>
.banner_wrap {
  position: relative;
  .banner_nav {
    position: absolute;
    left: 12px;
    top: 0px;
  }
}
</style>