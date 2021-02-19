<template>
  <v-container>
    <v-card max-width="800" class="mx-auto">
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
        <template>
          <v-list-item>
            <v-row>
              <v-col cols="2">
                <v-list-item-action style="width: 100%">
                  <v-list-item-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-list-item-avatar>
                  <v-list-item-action-text class="mx-auto"
                    >咚咚呱咚咚呱咚咚呱</v-list-item-action-text
                  >
                  <v-list-item-action-text class="mx-auto"
                    >超级管理员</v-list-item-action-text
                  >
                </v-list-item-action>
              </v-col>
            </v-row>
          </v-list-item>
          <v-divider></v-divider>
        </template>
        <template>
          <v-list-item>
            <v-row>
              <v-col cols="2">
                <v-list-item-action style="width: 100%">
                  <v-list-item-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-list-item-avatar>
                  <v-list-item-action-text class="mx-auto"
                    >咚咚</v-list-item-action-text
                  >
                  <v-list-item-action-text class="mx-auto"
                    >超级管理员</v-list-item-action-text
                  >
                </v-list-item-action>
              </v-col>
            </v-row>
          </v-list-item>
          <v-divider></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  }
};
</script>
