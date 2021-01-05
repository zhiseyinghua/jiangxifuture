<template>
  <v-container class="pa-0" fluid>
    <!-- 这是小导航栏 -->
    <v-img
      :src="require('@/assets/software/shitou.jpg')"
      :aspect-ratio="4"
      class="white--text"
    >
      <!-- <v-card-title class="text-h4  align-left-center flex-column">未来时刻</v-card-title> -->
    </v-img>
    <v-app-bar flat class="grey lighten-5 d-flex justify-center">
      <v-tabs>
        <v-tab v-for="link in links" :key="link.id" v-model="link.id">
          <a :href="'#' + link.id" style="text-decoration: none">
            <v-btn text>{{ link.text }} </v-btn>
          </a>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- 这是公司简介 -->
    <v-card flat tile id="1">
      <p class="mt-16 text-center text-h4">公司简介</p>
      <p class="text-center mt-10 text-h6">
        未来时刻，用科技改变地理测绘的未来。
      </p>
      <p class="text-center">
        将科技与传统行业结合，致力于提供全面的信息解决方案。
      </p>
      <p class="text-center">
        通过对国产自主可控地理信息平台的研制开发，为国家信息安全保驾护航。
      </p>
      <p class="text-center">
        我们大力投资于人才队伍和推动科技创新，积极参与地理信息系统技术行业协同发展。
      </p>
    </v-card>

    <!-- 这是愿景与使命 -->
    <v-card id="2" class="mt-16 grey lighten-5" height="240px" flat>
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
    <v-card id="4" height="400px" class="mt-16 grey lighten-5" flat tile>
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

<!-- 这是人才招聘 -->
<v-card id="5" flat class="mt-16 grey lighten-5" >
  <p class="pa-6  text-center text-h4">人才招聘</p>
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
    <v-col cols="6" offset="3">
<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            岗位
          </th>
          <th class="text-center">
            人数
          </th>
          <th class="text-center">
            学历
          </th>
          <th class="text-center">
            工作年限
          </th>
          <th class="text-center">
            薪资待遇
          </th>
        </tr>
      </thead>
      <tbody>
       <tr
          v-for="item in items"
          :key="item.name"
        >
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.counting }}</td>
          <td class="text-center">{{ item.edu }}</td>
          <td class="text-center">{{ item.year }}</td>
          <td class="text-center">{{ item.money }}</td>
        </tr>
      </tbody>
    </template>
   </v-simple-table>
    </v-col>
  </v-row>
   
</v-card>
    <!-- 这是联系我们 -->
    <v-card id="6" class="mt-16" flat>
      <v-row>
        <v-col>
          <p class="text-center text-h4">联系我们</p>
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
          <p class="text-center text-h6">江西未来时刻科技有限公司</p>
          <p class="mt-n4 text-center text-body-2">
            公司地址：江西省九江市永修县垒旺六合城孵化器A101
          </p>
        </v-col>
      </v-row>
    </v-card>

<div class="fixed"  id="searchBar">
</div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      links: [
        { text: "公司简介", id: "1" },
        { text: "愿景及使命", id: "2" },
        { text: "企业文化", id: "4" },
        { text: "人才招聘", id: "5" },
        { text: "联系我们", id: "6" },
      ],
       items: [
        { name: "测绘测量员", counting:"3",edu:"大专及以上",year:"经验不限",money: "3k-6k" },
        { name: "行政助理", counting:"1",edu:"大专及以上",year:"经验不限",money: "4k-6k" },
        { name: "数据分析师", counting:"1",edu:"大专及以上",year:"经验不限",money: "3k-6k" },
        { name: "软件开发实习生", counting:"3",edu:"大专及以上",year:"经验不限",money: "3k-6k" },
        { name: "软件开发工程师", counting:"2",edu:"大专及以上",year:"3年-5年",money: "5k-10k" },
      ],
    };
  },
};
</script>
