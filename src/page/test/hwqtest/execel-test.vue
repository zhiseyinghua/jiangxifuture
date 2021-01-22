<template>
  <div id="app">
    <button @click="downloadExl">导出</button>
    <div id="tableId">
      <table class="table table-bordered" style="min-width: 100%">
        <thead>
          <tr>
            <th>#</th>
            <th v-for="(item, index) in Object.keys(jsonData[0])" :key="index">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in jsonData" :key="index">
            <th scope="row">{{ index }}</th>
            <!-- <td v-for="col in Object.keys(jsonData[0])">{{ row[col] }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
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
          姓名: "小杨",
          联系电话: "021-33829544",
          家庭地址: "浦东新区金桥镇五莲路1706号",
        },
      ],
    };
  },
  methods: {
    downloadExl() {
      let wb = XLSX.utils.table_to_book(document.getElementById("tableId")),
        wopts = {
          bookType: "xlsx",
          bookSST: false,
          type: "binary",
        },
        wbout = XLSX.write(wb, wopts);
      console.log('wbout',wbout)
      FileSaver.saveAs(
        new Blob([this.s2ab(wbout)], {
          type: "application/octet-stream;charset=utf-8",
        }),
        "个人简介表.xlsx"
      );
    },
    s2ab(s) {
      if (typeof ArrayBuffer !== "undefind") {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      } else {
        var buf = new Array(s.length);
        for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }
    },
  },
};
</script>

<style>
.amap-demo {
  height: 300px;
}
</style>
