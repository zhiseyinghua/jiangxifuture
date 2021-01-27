<template>
  <v-container>
    <div class="font-weight-medium" style="font-size: 1.5em;">
      任务详情
    </div>
    <v-divider class="mt-5 mb-12"></v-divider>
    <v-row>
      <v-col>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text style="height:80px" v-bind="attrs" v-on="on">
              <v-row>
                <v-col>
                  <v-icon v-show="false" color="green darken-2">
                    mdi-alarm-check
                  </v-icon>
                  <v-icon v-show="false" color="green darken-2">
                    mdi-alarm
                  </v-icon>
                  <v-icon v-show="true" size="70" color="green darken-2">
                    mdi-alarm-off
                  </v-icon>
                </v-col>
                <v-col class="mt-2">
                  <div style="font-size: 1.5em;" class="grey--text mb-2">
                    进行时
                  </div>
                  <p>当前状态</p>
                </v-col>
              </v-row>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="abs">
              <v-list-item-title>
                <v-icon>mdi-alarm-off</v-icon>
                <span>完成</span>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="abs">
              <v-list-item-title>
                <v-icon>mdi-alarm-off</v-icon>
                <span>未完成</span>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="abs">
              <v-list-item-title>
                <v-icon>mdi-alarm-off</v-icon>
                <span>进行时</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col>
        <div>
          <v-row>
            <v-col cols="3">
              <v-avatar size="70">
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
          <v-btn text style="height:80px">
            <v-row>
              <v-col>
                <v-icon v-show="true" size="70" color="green darken-2">
                  mdi-alarm-off
                </v-icon>
              </v-col>
              <v-col class="mt-2">
                <div style="font-size: 1.5em;" class="grey--text mb-2">
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
          <v-btn text style="height:80px">
            <v-row>
              <v-col>
                <v-icon v-show="true" size="70" color="green darken-2">
                  mdi-alarm-off
                </v-icon>
              </v-col>
              <v-col class="mt-2">
                <div style="font-size: 1.5em;" class="grey--text mb-2">
                  截止时间
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
                  <v-btn class="mt-3">修改甲方信息</v-btn>
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

    <!-- <v-divider class="mt-5 mb-12"></v-divider> -->

    <div class="ml-12 mt-12">
      <div>
        <div class="mb-2 grey--text">项目时间详情 ：</div>
        <div class="mt-6 ml-6">
          <span>实际派发时间 ：</span>

          <span>
            <v-text-field
              append-icon="mdi-eye-off"
              style="width: 150px;"
              value="John Doe"
              @click:append="show()"
            ></v-text-field>
          </span>

          <div class="">技术员实际完成时间 ：</div>
          <div>
            <v-text-field
              height="20px"
              style="width: 100px;"
              value="John Doe"
              disabled
            ></v-text-field>
          </div>

          <div class="">实际派发时间 ：</div>
          <div>
            <v-text-field
              height="20px"
              style="width: 100px;"
              value="John Doe"
              disabled
            ></v-text-field>
          </div>

          <div class="">实际派发时间 ：</div>
          <div>
            <v-text-field
              height="20px"
              style="width: 100px;"
              value="John Doe"
              disabled
            ></v-text-field>
          </div>
          <div class="mb-2">
            技术员实际完成时间 ：{{ ONEinformation.email }}
          </div>
          <div class="mb-2">外业完成时间 ：{{ ONEinformation.name }}</div>
          <div class="mb-2">内业完成时间 ：{{ ONEinformation.phone }}</div>
          <div class="mb-2">合同完成时间 ：{{ ONEinformation.email }}</div>
          <div class="mb-2">金额到账时间 ：{{ ONEinformation.name }}</div>
        </div>
      </div>
    </div>
    <span>
      <v-text-field
       :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
        value="Pa"
        @click:append="show4 = !show4"
      ></v-text-field>
    </span>
    <div style="height:100px"></div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
     password: "Password",

    ONEinformation: {
      phone: "18779868511",
      // 邮箱
      email: "1870132537@qq.com",
      name: "黄文强",
    },
    desserts: [
      {
        name: "项目名称",
        calories: "洪城项目",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
      {
        name: "Gingerbread",
        calories: 356,
      },
      {
        name: "Jelly bean",
        calories: 375,
      },
      {
        name: "Lollipop",
        calories: 392,
      },
      {
        name: "Honeycomb",
        calories: 408,
      },
      {
        name: "Donut",
        calories: 452,
      },
      {
        name: "KitKat",
        calories: 518,
      },
    ],
  }),
  methods: {
    abs() {},
    show(){
      console.log("111111111111");
    }
  },
};
</script>

<style lang="scss" scoped></style>
