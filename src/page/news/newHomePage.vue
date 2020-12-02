<template>
<div>
  <div>新闻</div>
  <v-carousel hide-delimiters cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  <div class="anSlogan">公司简章</div>
  <div class="center">
  <img src="http://file06.16sucai.com/2018/0509/c947a1cafcb9d5b5b2bec9128df554e8.jpg" weight="300px" height="300px" >
  <textarea rows="10" cols="50" class="input">测绘服务，建筑劳务分包，海员外派业务，职业中介活动，施工专业作业，建设工程勘察，地质灾害治理工程勘查（依法须经批准的项目，经相关部门批准后方可开展经营活动） 一般项目：软件开发，网络技术服务，信息系统集成服务，软件销售，计算机软硬件及辅助设备零售，物联网设备销售，集成电路销售，互联网设备销售，信息技术咨询服务，智能控制系统集成，地理遥感信息服务，电子产品销售，仪器仪表销售，计量服务，国内贸易代理，会议及展览服务，信息系统运行维护服务，地质勘探和地震专用仪器销售，劳务服务（不含劳务派遣），绘图、计算及测量仪器销售（除许可业务外，可自主依法经营法律法规非禁止或限制的项目）</textarea>
  <a herf="" id="a">查看详情</a>
    </div> 
  <div class="anSlogan">集团新闻</div>
  
<div class="container">
  <p style="text-align:right;">
    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3323229334,1212626492&fm=26&gp=0.jpg" weight="20px" height="300px" ></p>
    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=242524239,3606885721&fm=26&gp=0.jpg" weight="200px" height="300px" >
    <p style="text-align:right;">
    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644266269,902528338&fm=26&gp=0.jpg" weight="20px" height="300px" ></p>
    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3216580012,3595411567&fm=26&gp=0.jpg" weight="200px" height="300px" >
    <vm-deviceCard :devicemsg="devicemsg" ></vm-deviceCard>
</div>
  <div class="anSlogan">行业新闻</div>
    <p ><a herf="" id="a">新闻1</a><br></p>
    <p ><a herf="" id="a">新闻2</a><br></p>
    <p ><a herf="" id="a">新闻3</a><br></p>
</div>
</template>

<script>
import deviceCard from "@/page/home/library/deviceCard.vue";
export default {
  name: "newhomepage",
  data() {
    return {   
      devicemsg:{
        url:'http',
      },
      items: [
        {
          src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1045539846,4150480572&fm=26&gp=0.jpg',
        },
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606798526932&di=dda4e7a0cd13623943eeec46a8e4fee3&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F55%2F02%2F67579b6f57839e3.jpg',
        },
        {
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2813922787,514458759&fm=26&gp=0.jpg',
        },
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606798526927&di=4359cb1804675acfc06c389e539cc802&imgtype=0&src=http%3A%2F%2Fbeidouradius.com%2Fimages%2F8a16453463ec607ca1f45cbeb327103c.jpg',
        },
      ],
    }
  },
 methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};

</script>

<style>
.anSlogan {
  color:black;
  font-size:25px;
  margin-top: 20px;
  text-align:center;
  font-weight:bold;
}
.anSlogan:hover{
  color:blue;
}
.center{
  margin-top: 20px;;
  display:flex;
  justify-content:space-evenly;
  align-items: center;
  padding:20px;
}
.input {
border:0; 
padding:10px; 
font-size:medium; 
width:800px;
outline: none;
resize: none;
}
input:focus { 
    outline: none;
    box-shadow:none;
    resize: none;
}
.a:link{
  text-decoration: none;
  color:gray;
  font-size:20px;
  ;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  justify-content: center;
}
</style>