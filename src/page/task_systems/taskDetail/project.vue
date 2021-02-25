<template>
  <v-container>
    <v-sheet class="my-3">
      <v-row>
        <v-col>
          <v-btn :to="{ path: '/order' }" class="green darken-1 white--text">
            +新建项目
          </v-btn>
        </v-col>
        <v-col>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                生成表单
              </v-expansion-panel-header>
              <v-expansion-panel-content>
             
                    <!-- <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="50"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Picker in menu"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu> -->
                  <v-spacer></v-spacer>
                    <!-- <v-dialog
                      ref="dialog"
                      v-model="modal"
                      :return-value.sync="date"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Picker in dialog"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog> -->
                    <v-btn>生成表单</v-btn>
                    <!-- <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Picker without buttons"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        @input="menu2 = false"
                      ></v-date-picker>
                    </v-menu> -->
                  <v-spacer></v-spacer>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-sheet>
    <v-row>
      <v-col v-for="(item, index) in order" :key="index" cols="12" md="4">
        <v-card>
          <v-card-actions class="float-right my-2"
            ><v-btn
              @click="toprojectDetail(item)"
              text
              class="light-blue--text text--accent-4"
              >详情</v-btn
            ></v-card-actions
          >
          <v-card-title class="text-center"
            >项目名称：{{ item.ordername }}</v-card-title
          >
          <v-card-subtitle> 甲方信息 </v-card-subtitle>
          <v-card-text
            v-if="item.ONEinformation && item.ONEinformation.name && item.ONEinformation.name != ''"
          >
            名字： {{ item.ONEinformation.name }}
          </v-card-text>
          <v-card-text v-else> 名字： 未填写 </v-card-text>
          <v-card-text> 电话： {{ item.ONEinformation && item.ONEinformation.phone }} </v-card-text>
          <v-card-subtitle>项目信息</v-card-subtitle>
          <v-card-text v-if="item.localPlace && item.localPlace.local">
            地点： {{ item.localPlace.local }}
          </v-card-text>
          <v-card-text v-else> 地址： 未填写 </v-card-text>
          <v-card-text v-if="item.area"> 面积： {{ item.area }} </v-card-text>
          <v-card-text v-else> 面积： 未填写 </v-card-text>
          <v-card-text v-if="item.type"> 类型： {{ item.type }} </v-card-text>
          <v-card-text v-else> 类型： 未填写 </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="pagination"
        :total-visible="7"
      ></v-pagination>
    </div>
    <br />
    <br />
  </v-container>
</template>
<script>
import orderServe from "@/page/order/order.serves";
export default {
  data() {
    return {
      pagination: 6,
      page: 1,
      ordercount: 6,
      order: [],
    };
  },
  watch: {
    page() {
      console.log(this.page);
      orderServe.getfigure(this.page * 12 - 12 + "", "12").subscribe((data) => {
        this.order = data.list;
        // console.log(data);
      });
    },
  },
  created() {
    console.log("group 创建");
    orderServe.getfigure(this.page - 1 + "", "12").subscribe((data) => {
      this.order = data.list;
      this.pagination = Math.ceil(data["maxsize"] / 12);
      console.log(data);
    });
  },
  methods: {
    toprojectDetail(value) {
      let strItem = JSON.stringify(value);
     
      this.$router.push({
        path: "/taskSystems/projectDetail",
        // query: {
        //   id: JSON.stringify(value),
        // },
        query: { id: escape(strItem) },
      });
    },
  },
};
</script>
