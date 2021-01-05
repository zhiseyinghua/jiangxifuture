<template>
  <v-container class="pa-0" fluid>
    <!-- 这是小导航栏 -->
    <v-card flat tile>
      <v-img
        :src="require('@/assets/software/lou.jpg')"
        :aspect-ratio="3"
        class="white--text align-center"
      >
        <v-card-title class="text-h4 ml-16">未来时刻</v-card-title>
      </v-img>
      <v-toolbar flat class="blue-grey lighten-5">
        <v-toolbar-items class="">
          <v-btn
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            text
            >{{ link.text }}</v-btn
          >
        </v-toolbar-items>
      </v-toolbar>
    </v-card>

    <!-- 这是公司简介 -->
    <p class="mt-16 text-center text-h4">公司简介</p>
    <p class="mt-10 text-center text-h6">未来时刻以科技改变地理测绘的未来。</p>
    <p class="text-center">江西未来时刻科技有限公司隶属敖岸集团。</p>
    <p class="text-center">
      将科技与传统行业结合，致力于提供全面的信息解决方案。
    </p>
    <p class="text-center">
      通过对国产自主可控地理信息平台的研制开发，为国家信息安全保驾护航。
    </p>
    <p class="text-center">
      我们大力投资于人才队伍和推动科技创新，积极参与地理信息系统技术行业协同发展。
    </p>

    <!-- 这是愿景与使命 -->
    <v-card class="mt-16 blue-grey lighten-5" height="240px" flat>
      <v-row no-gutters>
        <v-col>
          <p class="mt-16 text-center text-h4">愿景及使命</p>
        </v-col>
        <v-divider vertical class="mt-10"></v-divider>
        <v-col>
          <p class="mt-16 text-center text-h6">用户为本，科技向善</p>
          <p class="text-center">致力测绘信息化，助推中国地理信息产业升级；</p>
          <p class="text-center">推动科技与文化传承，促进社会的可持续发展。</p>
        </v-col>
      </v-row>
    </v-card>

    <!-- 这是公司文化 -->
    <v-card height="400px" class="mt-16 blue-grey lighten-5" flat tile>
      <v-row no-gutters>
        <v-col>
          <p class="mt-16 text-center text-h4">企业文化</p>
          <!-- <p class="mt-10 text-center blue--text">价值观</p> -->
          <p class="mt-10 text-center text-h6">服从</p>
          <p class="mt-n4 text-center text-body-2">有令必行，令行禁止</p>
          <p class="text-center text-h6">进取</p>
          <p class="mt-n4 text-center text-body-2">独立思考，善于思辨</p>
          <p class="text-center text-h6">协作</p>
          <p class="mt-n4 text-center text-body-2">开放协同，互相探讨</p>
        </v-col>
        <v-col cols="6">
          <v-card
            ><v-img
              height="400px"
              :src="require('@/assets/software/table.jpg')"
            ></v-img
          ></v-card>
        </v-col>
      </v-row>
    </v-card>

    <!-- 这是联系我们 -->
    <v-card class="mt-16" flat>
      <v-row>
        <v-col>
          <p class="text-center text-h3">联系我们</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" offset="3">
          <v-img
            height="400px"
            :src="require('@/assets/software/map.png')"
          ></v-img>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2" offset="3">
          <p class="mt-10 text-center text-body-2">业务电话</p>
          <p class="text-center text-h6">15678945647</p>
        </v-col>
        <v-divider vertical class="mt-10"></v-divider>
        <v-col cols="2">
          <p class="mt-10 text-center text-body-2">人事电话</p>
          <p class="text-center text-h6">15698745632</p>
        </v-col>
        <v-divider vertical class="mt-10"></v-divider>
        <v-col cols="2">
          <p class="mt-10 text-center text-body-2">邮箱</p>
          <p class="text-center text-h6">1457921@1555.com</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" offset="2">
          <p class=" text-center text-h6">江西未来时刻科技有限公司</p>
          <p class="mt-n4 text-center text-body-2">公司地址：江西省九江市永修县垒旺六合城孵化器A101</p>
        </v-col>
      </v-row>
      </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { text: "公司简介", route: "software" },
        { text: "愿景及使命" },
        { text: "技术团队" },
        { text: "企业文化" },
        { text: "人才招聘" },
        { text: "联系我们" },
      ],
    };
  },
};
</script>
