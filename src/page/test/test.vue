<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-group v-for="item in items" :key="item.text" link>
        <template v-slot:activator>
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-group sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
         title:"账号中心",
        icon:"mdi-account-cog-outline",
        route: "/user/account",
          items:[
          {
            title: "账号信息",
            route: "/user/account",
          },
          {
            title: "成员管理",
            route: "/",
          },
          {
            title: "账号安全",
            route: "/",
          }
        ],
      },
      { title:"工单系统", icon:"mdi-file-document-multiple"},
      { title:"费用中心", icon:"mdi-clipboard-file"},
    ],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
  }),
};
</script>