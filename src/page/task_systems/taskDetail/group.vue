<template>
  <v-container>
    <v-card>
      <v-card-actions>
        <v-btn> 所有成员 </v-btn>
        <v-btn> 访客 </v-btn>
        <v-btn> 分组管理 </v-btn>
      </v-card-actions>
      <div class="d-flex justify-space-between">
        <v-card-title>
          团队名 <v-card-subtitle>（共1人）</v-card-subtitle>
        </v-card-title>
        <v-card-actions>
          <v-btn>邀请新成员</v-btn>
        </v-card-actions>
      </div>
      <v-divider class="mx-4"></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-action >
            <v-list-item-avatar>
              <v-avatar
                ><img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
              /></v-avatar>
            </v-list-item-avatar>
            <v-list-item-action-text>咚咚呱</v-list-item-action-text
            ><v-list-item-action-text>超级管理员</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>