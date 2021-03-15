<template>
  <v-app-bar app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <!-- <v-img
      src="http://chuantu.xyz/t6/741/1614717476x1700338588.png"
      max-height="50"
      max-width="50"
    ></v-img> -->

    <!-- 团队列表 -->
    <!-- <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          团队<v-icon>expand_more</v-icon>
        </v-btn>
      </template>
      <v-list flat dense>
        <v-list-item
          v-for="(item, index) in groupList"
          :key="index"
          :to="item.link"
        >
          <v-list-item-action>
            <v-btn text>{{ item.title }}</v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" text> 创建新团队 </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">介绍一下你的团队吧</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-text-field
                        placeholder="团队名称"
                        v-model="teamName"
                      ></v-text-field>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      取消
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="handleCreateGroup"
                    >
                      确定
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-menu> -->

    <v-spacer></v-spacer>
    <!-- 工具栏 -->
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
    <!-- 信息设置 -->
    <!-- <v-menu offset-y>
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
    </v-menu> -->
    <v-btn text >
      <v-avatar size="30">
        <img
          alt="user"
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3723801689,3918778516&fm=26&gp=0.jpg"
        />
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    teamName: "",
    dialog: false,
    groupList: [{ title: "团队一" }],
    toolbarList: [
      { title: "项目", link: "/taskSystems/project", id: 1 },
      { divider: true, id: 3 },
      { title: "进展", link: "/taskSystems/progresses", id: 2 },

      // { title: "日历", link: "/", id: 4 },
      // { title: "汇报", link: "/", id: 5 },
      // { divider: true, id: 6 },
      // { title: "动态", link: "/", id: 7 },
      // { title: "团队", link: "/taskSystems/group", id: 8 },
      // { title: "我自己", link: "/", id: 9 },
    ],
    setDate: [
      { title: "个人设置", subTitle: "头像、姓名、密码、通知等" },
      { title: "团队设置", subTitle: "付费、团队、应用中心等" },
    ],
  }),
  methods: {
    handleCreateGroup() {
      this.dialog = false;
      const teamname = this.teamName;
      const authorization = localStorage.getItem("token");
      axios({
        method: "post",
        url: "/api/team/insertteaminfo",
        headers: { authorization },
        data: {
          teamid: "4",
          teamname,
          projectid: "1",
          projectname: "web",
          projectprogress: "20",
          type: "normal",
          description: "second",
        },
      }).then((res) => {
        console.log(res.data);
      });
    },
  },
  mounted: function() {},
};
</script>
