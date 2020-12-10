<template>
<div>
  <div>新闻</div>
  <v-carousel hide-delimiters cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>S
    <div style="background:#DDDDDD;">
      <div class="anSlogan">公司简章</div>
<<<<<<< HEAD
=======
      <v-content>
>>>>>>> e
        <v-container>
          <v-layout align-center justify-center >
            <v-flex md12 lg8 xl4 >
              <div class="flex">
                   <v-img src="http://file06.16sucai.com/2018/0509/c947a1cafcb9d5b5b2bec9128df554e8.jpg" weight="800px" height="300px" ></v-img>
                   <textarea rows="4" cols="30" class="input" type="font-family:fantasy;">江西未来时刻科技有限公司隶属于敖岸集团资产，集团创业于2017年12月，是一家在赣江新区的科技类公司。敖岸集团，公司2017与美国Esri公司建立合作关系。是国内，首批将地理信息系统技术应用到日常生活、日常工作当中的科技型综合性公司</textarea>
                   <p style="text-align:left; margin-left:10px;"><a>查看更多</a></P>
              </div>   
            </v-flex>
          </v-layout>
        </v-container>
<<<<<<< HEAD
=======
      </v-content>
>>>>>>> e
    </div>
      <div class="anSlogan">集团新闻</div>
      <div class="flex"></div>
     <v-row justify="center">
      <v-col v-for="n in 2" :key="n" cols="auto">      
        <v-card :elevation="n" height="300" width="600" class="secondary">
          <v-img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3216580012,3595411567&fm=26&gp=0.jpg" weight="200px" height="300px" ></v-img>
          <v-row
            class="fill-height"
            align="center"
            justify="center"  
          ></v-row>
        </v-card>
      </v-col>
    </v-row>
 </div>
</template>

<script>
import deviceCard from "@/page/home/library/deviceCard.vue";
export default {
  name: "newhomepage",
  data() {
    return {     
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
  font-size:40px;
  margin-top: 20px;
  text-align:center;
  font-weight:bold;
  font-family:fantasy;
}
.anSlogan:hover{
  color:blue;
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
.flex {
  display: flex;
  flex-flow: wrap;
  grid-row-gap: 40px;
  grid-column-gap: 10px;
  padding: 20px;
}
</style>