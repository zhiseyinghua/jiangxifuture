<template>
  <v-app-bar app>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          团队<v-icon>expand_more</v-icon>
        </v-btn>
      </template>
      <v-list flat>
        <v-list-item
          v-for="(item, index) in groupList"
          :key="index"
          :to="item.link"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-toolbar dense flat max-width="500" class="transparent">
      <v-toolbar-items
        v-for="item in toolbarList"
        :key="item.id"
        class="align-center"
      >
        <v-toolbar-title v-if="item.title">
          <v-btn :to="item.link" text> {{ item.title }}</v-btn>
        </v-toolbar-title>
        <v-divider v-if="item.divider" vertical class="mx-4" inset></v-divider>
      </v-toolbar-items>
    </v-toolbar>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          <v-avatar color="indigo" size="18"> </v-avatar>
          <v-icon>expand_more</v-icon>
        </v-btn>
      </template>
      <v-list flat>
        <v-list-item>
          <v-list-item-title> 咚咚呱 </v-list-item-title>
          <v-list-item-subtitle> 未来时刻 </v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="(item, index) in setDate" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.subTitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    groupName: "创建新团队",
    groupList: [{ title: "团队一" }, { title: "团队二" }, { title: "团队三" }],
    toolbarList: [
      { title: "项目", link: "/taskSystems/project", id: 1 },
      { title: "进展", link: "/taskSystems/progresses", id: 2 },
      { divider: true, id: 3 },
      { title: "日历", link: "/", id: 4 },
      { title: "汇报", link: "/", id: 5 },
      { divider: true, id: 6 },
      { title: "动态", link: "/", id: 7 },
      { title: "团队", link: "/taskSystems/group", id: 8 },
      { title: "我自己", link: "/", id: 9 },
    ],
    setDate: [
      { title: "个人设置", subTitle: "头像、姓名、密码、通知等" },
      { title: "团队设置", subTitle: "付费、团队、应用中心等" },
    ],
  }),
};
</script>