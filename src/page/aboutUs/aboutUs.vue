<template>
  <v-container class="pa-0" fluid>
    <!-- 这是小导航栏 -->
    <v-img
      :src="require('@/assets/software/shitou.jpg')"
      :aspect-ratio="3"
      class="white--text"
    >
      <!-- <v-card-title class="text-h4  align-left-center flex-column">未来时刻</v-card-title> -->
    </v-img>
    <!-- <v-app-bar flat class="grey lighten-5" inverted-scroll>
      <v-tabs show-arrows centered>
        <v-tab v-for="link in links" :key="link.id" >
          <a :href="'#' + link.id" style="text-decoration: none">
            <v-btn text>{{ link.text }} </v-btn>
          </a>
        </v-tab>
      </v-tabs>
    </v-app-bar> -->

    <!-- 这是公司简介 -->
    <v-card flat tile id="1" class="ma-md-16 ma-6 pa-2">
      <v-card-text class="text-center text-h6 text-md-h4">公司简介</v-card-text>
      <v-card-text class="pa-md-1 pa-0 text-center text-subtitle-1 text-md-h6"
        >未来时刻，用科技改变地理测绘的未来。</v-card-text
      >
      <v-card-text
        class="pa-md-1 pa-0 text-md-subtitle-1 text-center text-caption"
        >将科技与传统行业结合，致力于提供全面的信息解决方案。</v-card-text
      >
      <v-card-text
        class="pa-md-1 pa-0 text-md-subtitle-1 text-center text-caption"
        >通过对国产自主可控地理信息平台的研制开发，为国家信息安全保驾护航。</v-card-text
      >
      <v-card-text class="pa-1 text-md-subtitle-1 text-center text-caption"
        >我们大力投资于人才队伍和推动科技创新，积极参与地理信息系统技术行业协同发展。</v-card-text
      >
    </v-card>

    <!-- 这是愿景与使命 -->
    <v-card id="2" class="py-md-16 py-2 px-2 grey lighten-5" flat>
      <v-row no-gutters>
        <v-col>
          <v-card flat tile class="grey lighten-5 d-flex align-center">
            <v-card-text class="d-flex justify-center text-h6 text-md-h4">
              愿景及使命</v-card-text
            ></v-card
          >
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="d-flex justify-center align-center">
          <v-card flat tile class="grey lighten-5">
            <v-card-text class="pa-1 text-center text-subtitle-1 text-md-h6"
              >用户为本，科技向善。</v-card-text
            >
            <v-card-text
              class="pa-1 text-center text-md-subtitle-1 text-caption"
              >致力测绘信息化，助推中国地理信息产业升级；</v-card-text
            >
            <v-card-text
              class="pa-1 text-center text-md-subtitle-1 text-caption"
              >推动科技与文化传承，促进社会的可持续发展。</v-card-text
            ></v-card
          >
        </v-col>
      </v-row>
    </v-card>

    <!-- 这是公司文化 -->
    <v-card id="4" class="mt-md-16" flat tile>
      <v-row no-gutters>
        <v-col md="3" class="d-flex justify-center align-center" offset-md="2">
          <v-card flat tile>
            <v-card-text class="text-h6 text-md-h4 px-1">企业文化</v-card-text>
            <v-card-text class="text-subtitle-1 text-md-h6 pa-1"
              >服从</v-card-text
            >
            <v-card-text class="pa-1">有令必行，令行禁止</v-card-text>
            <v-card-text class="text-subtitle-1 text-md-h6 pa-1"
              >进取</v-card-text
            >
            <v-card-text class="pa-1">独立思考，善于思辨</v-card-text>
            <v-card-text class="text-subtitle-1 text-md-h6 pa-1"
              >协作</v-card-text
            >
            <v-card-text class="pa-1">开放协同，互相探讨</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="5" class="pa-3">
          <v-img
            :aspect-ratio="2"
            :src="require('@/assets/software/table.jpg')"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>

    <!-- 这是人才招聘 -->
    <v-card id="5" flat class="mt-md-16 grey lighten-5">
      <v-card-text class="pa-md-6 text-center text-h6 text-md-h4"
        >人才招聘</v-card-text
      >
      <!-- <v-row>
    <v-col cols="4">
      <v-img :src="require('@/assets/software/tim.jpg')"></v-img>
    </v-col>
    <v-col cols="4">
      <v-img :src="require('@/assets/software/study.jpg')"></v-img>
    </v-col>
    <v-col cols="4">
      <v-img :src="require('@/assets/software/money.jpg')"></v-img>
    </v-col>
  </v-row> -->
      <v-row>
        <v-col cols="10" md="6" offset-md="3" offset="1">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center text-md-subtitle-1 text-caption pa-0">
                    岗位
                  </th>
                  <th class="text-center text-md-subtitle-1 text-caption pa-0">
                    人数
                  </th>
                  <th class="text-center text-md-subtitle-1 text-caption pa-0">
                    学历
                  </th>
                  <th class="text-center text-md-subtitle-1 text-caption pa-0">
                    工作年限
                  </th>
                  <th class="text-center text-md-subtitle-1 text-caption pa-0">
                    薪资待遇
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.name">
                  <td class="text-center text-md-subtitle-1 text-caption pa-0">
                    {{ item.name }}
                  </td>
                  <td class="text-center text-md-subtitle-1 text-caption pa-0">
                    {{ item.counting }}
                  </td>
                  <td class="text-center text-md-subtitle-1 text-caption pa-0">
                    {{ item.edu }}
                  </td>
                  <td class="text-center text-md-subtitle-1 text-caption pa-0">
                    {{ item.year }}
                  </td>
                  <td class="text-center text-md-subtitle-1 text-caption pa-0">
                    {{ item.money }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card>
    <!-- 这是联系我们 -->
    <v-card id="6" class="mt-md-16 mt-2" flat>
      <v-card-text class="pa-md-6 text-center text-h6 text-md-h4"
        >联系我们</v-card-text
      >
      <v-row>
        <v-col cols="10" md=6 offset="1" offset-md="3">
          <v-img
            :aspect-ratio="2"
            :src="require('@/assets/software/map.png')"
          ></v-img>
        </v-col>
      </v-row>
      <v-row no-gutters class="my-3">
        <v-col cols="3" md=2 offset-md="3" offset="1">
          <v-card-text  class="text-center text-md-subtitle-1 text-caption pa-0">业务电话</v-card-text >
          <v-card-text  class="text-center text-md-subtitle-1 text-caption pa-0">15678945647</v-card-text >
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="3" md=2>
          <v-card-text  class="text-center text-md-subtitle-1 text-caption pa-0">人事电话</v-card-text >
          <v-card-text  class="text-center text-md-subtitle-1 text-caption pa-0">15698745632</v-card-text >
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="4" md=2>
          <v-card-text  class="text-center text-md-subtitle-1 text-caption pa-0">邮箱</v-card-text >
          <v-card-text  class="text-center text-md-subtitle-1 text-caption pa-0">1457921@1555.com</v-card-text >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md=6 offset-md="3" >
          <v-card-text  class="text-md-h6 text-subtitle-1 px-md-0">江西未来时刻科技有限公司</v-card-text >
          <v-card-text  class="mt-n8 mt-md-n6 text-caption text-md-body-2 px-md-0 my-10">
            公司地址：江西省九江市永修县垒旺六合城孵化器A101
          </v-card-text >
        </v-col>
      </v-row>
    </v-card>


  </v-container>
</template>
<script>
export default {
  data() {
    return {
      // tab: null,
      // links: [
      //   { text: "公司简介", id: "1" },
      //   { text: "愿景及使命", id: "2" },
      //   { text: "企业文化", id: "4" },
      //   { text: "人才招聘", id: "5" },
      //   { text: "联系我们", id: "6" },
      // ],
      items: [
        {
          name: "测绘测量员",
          counting: "3",
          edu: "大专及以上",
          year: "经验不限",
          money: "3k-6k",
        },
        {
          name: "行政助理",
          counting: "1",
          edu: "大专及以上",
          year: "经验不限",
          money: "4k-6k",
        },
        {
          name: "数据分析师",
          counting: "1",
          edu: "大专及以上",
          year: "经验不限",
          money: "3k-6k",
        },
        {
          name: "软件开发实习生",
          counting: "3",
          edu: "大专及以上",
          year: "经验不限",
          money: "3k-6k",
        },
        {
          name: "软件开发工程师",
          counting: "2",
          edu: "大专及以上",
          year: "3年-5年",
          money: "5k-10k",
        },
      ],
    };
  },
};
</script>
