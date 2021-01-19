<template>
  <div style="height:600px" class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" class="amap-demo" :events="events">
    </el-amap>
    <div class="toolbar">
      position: [{{ lng }}, {{ lat }}] address: {{ address }}
    </div>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    let self = this;
    return {
      zoom: 12,
      center: [121.59996, 31.197646],
      address: "",
      events: {
        click(e) {
          let { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;
          console.log("start start", window.AMap);
          // 这里通过高德 SDK 完成。
          var geocoder = new window.AMap.Geocoder({
            radius: 1000,
            extensions: "all",
          });
          console.log(
            "start start",
            new window.AMap.Geocoder({
              radius: 1000,
              extensions: "all",
            })
          );
          geocoder.getAddress([lng, lat], function(status, result) {
            if (status === "complete" && result.info === "OK") {
              console.log(self.$nextTick());
              if (result && result.regeocode) {
                self.address = result.regeocode.formattedAddress;
                self.$nextTick();
              }
            }
          });
        },
      },
      lng: 0,
      lat: 0,
    };
  },
};
</script>

<style>
.amap-demo {
  height: 300px;
}
</style>
