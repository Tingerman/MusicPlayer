<template>

  <div class="block text-center" m="t-4">
    <!-- <span class="demonstration">Switch when indicator is clicked</span> -->

    <el-carousel trigger="click" height="150px" arrow="never">
      <!-- <el-carousel-item v-for="item in carouseData" :key="item"> -->
        <el-carousel-item v-for="item in imgs" :key="item.pic">
        <!-- <h3 class="small justify-center" text="2xl">{{ item+100 }}</h3> -->
            <!-- <img :src="item.url" alt=""/> -->
            <img :src="item.pic" alt=""/>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<style scoped lang="less">

    /deep/.el-carousel__indicators--horizontal {
 
        .el-carousel__indicator--horizontal button {
            width: 0.1rem;
            height: 0.1rem;
            background: #ffffff;
            border-radius: 50%;
            opacity: 0.5;
        }
 
        .el-carousel__indicator--horizontal.is-active button {
            width: 0.3rem;
            height: 0.1rem;
            background: #ffffff;
            opacity: 0.5;
            border-radius: 10px;
        }
    }
    

.el-carousel__item.is-active.is-animating {
    border-radius: 0.1rem;
}
img{
    width:8.32rem;
    overflow: hidden;
    /* position:absolute;
    clip:rect(0rem 10rem 22rem 0px); */
}

.demonstration {
  color: var(--el-text-color-secondary);
}

</style>

<script>
import axios from 'axios';
import {getBanner} from '@/api/index'
export default {
    data() {
    return {
      //定义跑马灯的图片路径
      carouseData: [
        // { url: require("../assets/yama2.webp") },
        { url: require("../assets/joshua.png") },
        { url: require("../assets/daniela.webp") },
        { url: require("../assets/roysterlee2.webp") },
        { url: require("../assets/yama4.webp") },
      ],
      imgs:[
        { pic: require("../assets/joshua.png") },
        { pic: require("../assets/daniela.webp") },
        { pic: require("../assets/roysterlee2.webp") },
        { pic: require("../assets/yama4.webp") },
        { pic: require("../assets/yama4.webp") }, 
        { pic: require("../assets/yama4.webp") },  
      ]
    };
    },

    async mounted(){
        let res=await getBanner(1)//默认是get方法
        this.imgs=res.data.banners
    }

}
</script>