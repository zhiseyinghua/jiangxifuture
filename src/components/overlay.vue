<template>
  <div>
    <!-- 消息提示 -->

    <v-snackbar v-model="errorsnackbar " top :color=color>
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn  text v-bind="attrs" @click="snackbar = false">
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
import Bus from "../common/bus.js";

export default {
  data() {
    return {
      color:"green",
      // 遮罩层的状态
      overlayvalue: false,
      //错误 消息提示
      errorsnackbar: false,
      text:''
    };
  },
  mounted() {
    Bus.$on("overlayvalue", (msg) => {
      console.log(msg);
      this.text  = msg.text;
      this.color = msg.color;
      this.overlayvalue = msg.overlayvalue;
    });
  },
};
</script>
