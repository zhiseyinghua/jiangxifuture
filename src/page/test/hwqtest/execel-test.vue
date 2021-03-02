<template>
  <div>
    <v-btn @click="downloadExl"></v-btn>
  </div>
</template>
<script>
var XLSX = require("xlsx");
var FileSaver = require("file-saver");
module.exports = {
  data() {
    return {
      jsonData: [
        {
          序列: 1,
          任务名称: 1,
          任务地点: 2,
          任务结束时间: 3,
          任务开始时间: 4,
          任务类型: 5,
          预估时间: 6,
          面积: 7,
          实际派发时间: 8,
          技术员实际完成时间: 9,
          外业完成时间: 10,
          内业完成时间: 11,
          合同完成时间: 12,
          金额到账时间: 13,
          预估费用: 14,
          实际费用: 15,
          甲方电话: 16,
          甲方邮箱: 17,
          甲方名字: 18,
        },
      ],
      header: [
        "序列",
        "任务名称",
        "任务地点",
        "任务结束时间",
        "任务开始时间",
        "任务类型",
        "预估时间",
        "面积",
        "实际派发时间",
        "技术员实际完成时间",
        "外业完成时间",
        "内业完成时间",
        "合同完成时间",
        "金额到账时间",
        "预估费用",
        "实际费用",
        "甲方电话",
        "甲方邮箱",
        "甲方名字",
      ],
    };
  },
  methods: {
    downloadExl() {
      var ws = XLSX.utils.json_to_sheet(this.jsonData, { header: this.header });
      console.log(ws);
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "People");
      XLSX.writeFile(wb, "sheetjs.xlsx");
    },
  },
};
</script>
<style>
.amap-demo {
  height: 300px;
}
</style>
