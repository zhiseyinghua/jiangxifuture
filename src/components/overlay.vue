<template>
  <div>
    <!-- 消息提示 -->

    <v-snackbar v-model="errorsnackbar" top color="pink">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
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
import Bus from '../common/bus.js';  

export default {
  data() {
    return {
      // 遮罩层的状态
      overlayvalue: false,
      //错误 消息提示
      errorsnackbar: false,
      text: ""
    };
  },
  mounted() {
    Bus.$on("aMsg", (msg) => {
      console.log(msg)
      // A发送来的消息
      this.msg = msg;
      this.overlayvalue = true;
      //错误 消息提示
      this.errorsnackbar = true;
    });
  }
};
</script>
