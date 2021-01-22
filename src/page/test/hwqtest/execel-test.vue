<template>
  <div>
    <!-- <button @click="downloadExl">导出</button>
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
            <td v-for="col in Object.keys(jsonData[0])">{{ row[col] }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
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

      // console.log(wbout);
    },
  },
};
</script>

<style>
.amap-demo {
  height: 300px;
}
</style>
