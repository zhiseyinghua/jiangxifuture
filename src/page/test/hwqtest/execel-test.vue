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
        { S: 1, h: 2, e: 3, e_1: 4, t: 5, J: 6, id: 7 },
        { S: 2, h: 3, e: 4, e_1: 5, t: 6, J: 7, id: 8 },
      ],
      header: ["id", "S","h","e","e_1","t","J"]
    };
  },
  methods: {
    downloadExl() {
      var ws = XLSX.utils.json_to_sheet(this.jsonData, {header:this.header});
      console.log(ws)
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
