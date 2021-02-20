<template>
  <div>
    <!-- 消息提示 -->

    <v-snackbar
      :timeout="timeout"
      v-model="errorsnackbar"
      :bottom="bottom"
      :centered="centered"
      :right="right"
      :left="left"
      :top="top"
      :color="color"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          关掉
        </v-btn>
      </template>
    </v-snackbar>

    <div class="text-center">
      <v-overlay :value="overlayvalue">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>
  </div>
</template>

<script>
import Bus from "../common/bus.js";

export default {
  data() {
    return {
      right: false,
      bottom: false,
      centered: false,
      left: false,
      top: true,
      color: "green",
      // 遮罩层的状态
      overlayvalue: false,
      //错误 消息提示
      errorsnackbar: false,
      text: "",
      timeout: 2000,
    };
  },
  created() {
    // 遮罩层
    Bus.$on("overlayvalue", (msg) => {
      console.log(msg);
      this.overlayvalue = msg.overlayvalue;
    });
    // 提示的时间
    Bus.$on("snackbar", (msg) => {
      console.log('overlay.vue start')
      this.right = msg.right;
      this.bottom = msg.bottom;
      this.centered = msg.centered;
      this.left = msg.left;
      this.top = msg.top;
      this.text = msg.text;
      this.color = msg.color;
      this.timeout = msg.timeout;
      this.errorsnackbar = msg.errorsnackbar;
    });
  },
};
</script>
