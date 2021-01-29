<template>
  <v-container>
    <div class="font-weight-medium" style="font-size: 1.5em;">
      任务详情
    </div>
    <v-divider class="mt-5 mb-12"></v-divider>
    <v-row>
      <v-col>
        <div>
          <v-row>
            <v-col cols="3">
              <v-avatar size="55">
                <img
                  alt="user"
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3846290151,2766954484&fm=26&gp=0.jpg"
                />
              </v-avatar>
            </v-col>
            <v-col class="mt-5">
              <p class="">
                John Doe
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col>
        <div>
          <v-btn @click="starttime()" text style="height:80px">
            <v-row>
              <v-col>
                <v-icon v-show="true" size="55" color="green darken-2">
                  mdi-alarm-off
                </v-icon>
              </v-col>
              <v-col class="">
                <div style="font-size: 1.5em;" class="grey--text mb-1">
                  开始时间
                </div>
                <p>2020.8.23</p>
              </v-col>
            </v-row>
          </v-btn>
        </div>
      </v-col>

      <v-col>
        <div>
          <v-btn @click="changecontractCompleted()" text style="height:80px">
            <v-row>
              <v-col>
                <v-icon v-show="true" size="55" color="green darken-2">
                  mdi-alarm-off
                </v-icon>
              </v-col>
              <v-col class="">
                <div style="font-size: 1.5em;" class="grey--text mb-1">
                  任务完成时间
                </div>
                <p>2020.8.23</p>
              </v-col>
            </v-row>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider class="mt-5 mb-3"></v-divider>
    <div>
      <div style="display: inline-block;">
        <v-icon
          large
          color="black darken-2"
          style="font-size: 2.3em; display: inline-block;"
        >
          list
        </v-icon>
      </div>
      <div style="display: inline-block;" class="font-weight-medium mt-2 ml-1 ">
        任务信息
      </div>
    </div>

    <div class="ml-12 mt-7">
      <div>
        <v-row>
          <v-col>
            <div class="grey--text">项目名称 ：</div>
            <div class="mt-2">
              <div style=" display: inline-block;">
                <v-icon
                  large
                  color=""
                  style="font-size: 2.3em; display: inline-block;"
                >
                  assignment
                </v-icon>
              </div>
              <div
                style="display: inline-block;"
                class="font-weight-medium mt-2 ml-1 "
              >
                我的项目
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="grey--text">任务类型 ：</div>
            <div class="mt-2">
              <div style=" display: inline-block;">
                <v-icon
                  large
                  color=""
                  style="font-size: 2.3em; display: inline-block;"
                >
                  note
                </v-icon>
              </div>
              <div
                style="display: inline-block;"
                class="font-weight-medium mt-2 ml-1 "
              >
                不动产测试
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="ml-12 mt-7">
      <div>
        <v-row>
          <v-col>
            <div class=" mt-12">
              <div>
                <div class="mb-2 grey--text">甲方信息 ：</div>
                <div class="mt-6 ml-6">
                  <div class="mb-2">名称 ：{{ ONEinformation.name }}</div>
                  <div class="mb-2">电话 ：{{ ONEinformation.phone }}</div>
                  <div class="mb-2">邮箱 ：{{ ONEinformation.email }}</div>
                  <v-btn class="mt-3" @click="changefristPart()"
                    >修改甲方信息</v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class=" mt-12">
              <div>
                <div class="mb-2 grey--text">其他信息 ：</div>
                <div class="mt-6 ml-6">
                  <div class="mb-2">任务面积 ：{{ ONEinformation.name }}</div>
                  <div class="mb-2">实际费用 ：{{ ONEinformation.phone }}</div>
                  <v-btn class="mt-11">修改其他信息</v-btn>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="ml-12 mt-12">
      <div>
        <v-card elevation="0" style="width: 500px;" class="overflow-hidden">
          <v-toolbar flat>
            <!-- <v-icon>mdi-account</v-icon> -->
            <v-toolbar-title class="mb-2  grey--text">
              项目时间详情
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              class="mr-6"
              :disabled="!isEditing"
              color="success"
              @click="save"
            >
              保存
            </v-btn>
            <v-btn color=" darken-3" fab small @click="isEditing = !isEditing">
              <v-icon v-if="isEditing">
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-pencil
              </v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <span>实际派发时间 ：</span>
            <!-- timeAfterDistribution -->
            <v-text-field
              filled
              :disabled="!isEditing"
              append-icon="date_range"
              value="John Doe"
              @click:append="changedata()"
            ></v-text-field>

            <div class="">技术员实际完成时间 ：</div>
            <!-- technicianCompletionTime -->
            <v-text-field
              filled
              :disabled="!isEditing"
              append-icon="date_range"
              value="John Doe"
              @click:append="changedata()"
            ></v-text-field>

            <div class="">外业完成时间 ：</div>
            <!-- completionTime -->
            <v-text-field
              filled
              :disabled="!isEditing"
              append-icon="date_range"
              value="John Doe"
              @click:append="changedata()"
            ></v-text-field>

            <div class="">内业完成时间 ：</div>
            <!-- insidePagesFinish -->
            <v-text-field
              filled
              :disabled="!isEditing"
              append-icon="date_range"
              value="John Doe"
              @click:append="changedata()"
            ></v-text-field>

            <div class="">金额到账时间 ：</div>
            <!-- timeReceiptAmount -->
            <v-text-field
              filled
              :disabled="!isEditing"
              append-icon="date_range"
              value="John Doe"
              @click:append="changedata()"
            ></v-text-field>

            <div class="">合同完成时间 ：</div>
            <!-- contractCompleted -->
            <v-text-field
              filled
              :disabled="!isEditing"
              append-icon="date_range"
              value="John Doe"
              @click:append="changedata()"
            ></v-text-field>

            <v-text-field
              filled
              :disabled="!isEditing"
              append-icon="date_range"
              value="John Doe"
              @click:append="changedata()"
            ></v-text-field>

            <v-text-field
              filled
              :disabled="!isEditing"
              append-icon="date_range"
              value="John Doe"
              @click:append="changedata()"
            ></v-text-field>
            <div class="mb-2">
              技术员实际完成时间 ：{{ ONEinformation.email }}
            </div>
            <div class="mb-2">外业完成时间 ：{{ ONEinformation.name }}</div>
            <div class="mb-2">内业完成时间 ：{{ ONEinformation.phone }}</div>
            <div class="mb-2">合同完成时间 ：{{ ONEinformation.email }}</div>
            <div class="mb-2">金额到账时间 ：{{ ONEinformation.name }}</div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn :disabled="!isEditing" color="success" @click="save">
              Save
            </v-btn> -->
          </v-card-actions>
          <!-- <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
            Your profile has been updated
          </v-snackbar> -->
        </v-card>

        <div class="mt-6 ml-6"></div>
      </div>
    </div>

    <v-dialog v-model="dialog" width="500">
      <v-date-picker
        v-model="picker"
        :first-day-of-week="0"
        locale="zh-cn"
      ></v-date-picker>
      <v-btn x-large color="primary" @click="updatapaifa()">确定</v-btn>
    </v-dialog>
    <div style="height:100px" @click="changedata()"></div>
    // 修改甲方信息
  </v-container>
</template>

<script>
export default {
  data: () => ({
    hasSaved: false,
    isEditing: null,
    model: null,
    states: [
      { name: "Florida", abbr: "FL", id: 1 },
      { name: "Georgia", abbr: "GA", id: 2 },
      { name: "Nebraska", abbr: "NE", id: 3 },
      { name: "California", abbr: "CA", id: 4 },
      { name: "New York", abbr: "NY", id: 5 },
    ],

    disabled: true,
    // 用户选择的时间，用于判断选择的是那个时间（例如：派发时间、操作员时间）
    timeselect: "",
    dialog: false,
    password: "Password",
    // 时间选择器选择的时间
    picker: new Date().toISOString().substr(0, 10),
    ONEinformation: {
      phone: "18779868511",
      // 邮箱
      email: "1870132537@qq.com",
      name: "黄文强",
    },
  }),
  watch: {
    picker(val) {
      console.log(val);
    },
  },
  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },

    changedata() {
      this.dialog = true;
      this.timeselect = "timeAfterDistribution";
    },
    show() {
      console.log("111111111111");
    },
    updatapaifa() {
      console.log(this.timeselect);
    },
    abs() {},

    starttime() {
      this.timeselect = "timeselect";
      console.log("timeselect");
      this.dialog = true;
    },

    changefristPart() {
      this.timeselect = "orderstart";
      console.log("orderstart");
      console.log("changefristPart");
    },

    // 任务完成时间
    changecontractCompleted() {
      this.timeselect = "changecontractCompleted";
      console.log("changecontractCompleted");
      this.dialog = true;
      console.log("changecontractCompleted");
    },
  },
};
</script>

<style lang="scss" scoped></style>
