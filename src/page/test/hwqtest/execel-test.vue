<template>
  <div style="height:600px" class="amap-page-container">
    <el-amap
      vid="amapDemo"
      :zoom="zoom"
      class="amap-demo"
      :events="events"
    >
    </el-amap>
    <div class="toolbar">
      position: [{{ lng }}, {{ lat }}] address: {{ address }}
    </div>
  </div>
</template>
<script>
    module.exports = {
      data: function() {
        return {
          
        };
      }
    };
</script>

<style>
.amap-demo {
  height: 300px;
}
</style>
