<template>
  <div>
    

    <div
      :id="id"
      :style="{
        width: width + 'px',
        height: height + 'px',
        margin: '34px auto',
      }"
      class="m-map"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    // 宽度
    width: {
      type: Number,
      default: 500,
    },
    // 高度
    height: {
      type: Number,
      default: 500,
    },
    // 经纬度，默认设为北京
    point: {
      type: Array,
      default() {
        return [116.46, 39.92];
      },
    },
  },
  data() {
    return {
      //地图id，多次调用该地图组件时，id必须动态生成
      id: `map`,
      //高德地图开发者秘钥，调用接口时使用
      key: "0dbc0dfd7c775f2a927174493eab8220",
    };
  },
  watch: {
    //经纬度
    point: function(val, old) {
      console.log("经纬度");
      this.map.setCenter(val);
      this.marker.setPosition(val);
    },
  },
  mounted() {
    let self = this;
    //地图id，多次调用该地图组件时，id必须动态生成
    self.id = `map${Math.random()
      .toString()
      .slice(4, 6)}`;

    // 封装回调函数，为了防止与其他地方定义的load冲突，最好重命名，如onmaploaded
    window.onmaploaded = () => {
      //地图基础控件添加，传递的第一个参数是DOM元素的id
      let map = new window.AMap.Map(self.id, {
        // resizeEnable: true, //是否监控地图容器尺寸变化
        // zoom:11, //初始化地图层级
        // center: [116.397428, 39.90923] //初始化地图中心点
        resizeEnable: true,
        zoom: 11,
        center: self.point,
      });
      //地图图面
      self.map = map;

      // 同时引入工具条插件
      window.AMap.plugin("AMap.ToolBar", () => {
        // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        let toolbar = new window.AMap.ToolBar();
        map.addControl(toolbar);

        //创建地图点标记：
        let marker = new window.AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: self.point,
        });
        self.marker = marker;
        //将创建好的地图点标记控件 添加到地图map
        marker.setMap(map);
      });
    };
    //注意，此处url中传递的回调函数名，必须与上面一致
    const url = `https://webapi.amap.com/maps?v=1.4.10&key=${self.key}&callback=onmaploaded`;
    let jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  },
};
</script>
