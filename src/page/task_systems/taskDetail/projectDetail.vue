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
          <v-btn text style="height:80px" v-bind="attrs" v-on="on">
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
          <v-btn text style="height:80px" v-bind="attrs" v-on="on">
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
      <div style=" display: inline-block;">
        <v-icon
          large
          color="black darken-2"
          style="font-size: 2.3em; display: inline-block;"
        >
          list
        </v-icon>
      </div>
      <div
        style="display: inline-block;"
        class="font-weight-medium mt-2 ml-1 "
      >
        任务信息
      </div>
    </div>

    <div class="ml-5 mt-4">
      <div>
        <v-row>
          <v-col>
            <div>项目名称 ：</div>
          </v-col>
          <v-col>
            <div>任务类型 ：</div>
          </v-col>
          <v-col> </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
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
  },
};
</script>

<style lang="scss" scoped></style>
