<template>
  <v-navigation-drawer
    permanent
    absolute
    width="220"
    :mini-variant.sync="mini"
    v-model="drawer"
    expand-on-hover
  >
    <v-btn text block @click.stop="mini = !mini"> |||</v-btn>
    <v-menu offset-x open-on-hover>
        <!-- open-on-hover 悬停时打开 a -->
        <!-- 菜单按钮 -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" text v-bind="attrs">
            <span>工单</span>
            <v-icon>expand_more</v-icon>
          </v-btn>
        </template>
        <!-- 下拉列表 -->
        <!-- <v-list flat>
          <v-list-item
            v-for="link in links1"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list> -->
      </v-menu>
  </v-navigation-drawer>
</template> 
<script>
export default {
  data() {
    return {
      mini: false,
      drawer: true,
    }
  },
};
</script>