<template>
  <v-container>
    <v-card max-width="800" class="mx-auto">
      <v-card-title class="d-flex justify-center"> 创建订单 </v-card-title>
      <v-form>
        <v-card-subtitle>甲方信息</v-card-subtitle>
        <v-row dense>
          <v-col cols="12" md="6">
            <v-text-field outlined dense label="姓名"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field outlined dense label="电话"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field outlined dense label="邮箱"></v-text-field>
          </v-col>
        </v-row>
        <v-card-subtitle>项目信息</v-card-subtitle>
        <v-row dense>
          <v-col cols="12" md="6">
            <v-text-field outlined dense label="技术员"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field outlined dense label="地点"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field outlined dense label="类型"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field outlined dense label="预估时间"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field outlined dense label="面积"></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
    <!-- <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Name of step 1
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Name of step 2
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="200px">
            <v-card-subtitle>甲方信息</v-card-subtitle>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field outlined dense label="姓名"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field outlined dense label="电话"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field outlined dense label="邮箱"></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px">
            <v-card-subtitle>项目信息</v-card-subtitle>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field outlined dense label="技术员"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field outlined dense label="地点"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field outlined dense label="类型"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field outlined dense label="预估时间"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field outlined dense label="面积"></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      el: 1,
    };
  },
};
</script>