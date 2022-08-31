<template>
    <div class="musicList">
        <div class="musicList-top">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>

        <div class="mlist">
            <!-- 可以轮播 -->
              <el-carousel :interval="4000" type="card" height="200px" indicator-position="none">
                <el-carousel-item v-for="item in imgs" :key="item" label="{{item.name}}">
                <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
                <router-link :to="{path:'/listview',query:{id:item.id}}" class="mlitem">
                    <div class="count">
                        <!-- <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-q24gl-play"></use>
                        </svg> -->
                        <span class="symbol-play">▷</span>
                        <span>{{parseInt(item.playCount/10000)}}万</span>
                    </div>
                    <img class="mlimg" :src="item.coverImgUrl" alt=""/>
                    <div class="covername">{{item.name}}</div>
                </router-link>
                </el-carousel-item>
            </el-carousel>

        </div>
    </div>
</template>

<style lang="less" scoped>
.musicList{
    width:7.5rem;
    /* margin:0.2rem; */
    padding:0 0.3rem;
    .musicList-top{
        display: flex;
        justify-content: space-between;
        height:0.6rem;
        .title{
            font-size:0.35rem;
            font-weight: 900;
            padding-left: 0.1rem;
        }
        .more{
            font-size:0.26rem;
            padding-top: 0.09rem;
            padding-right:0.1rem;
        }
    }

    .mlist{
        width:8rem;

        .mlitem{
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: start;

            .mlimg{
                height: 80%;
                width:80%;
                margin:0.1rem;
                border-radius: 0.1rem;
            }
            .covername{
                margin:0.02rem 0.04rem;
                font-size: 0.04rem;
                height: 30%;
                width:80%;
                text-align: center;
                
            }
            .count{
                position:absolute;
                right:0.3rem;
                top:0.2rem;
                font-size: 0.04rem;
                color:#e6e6e6;
                margin-right:0.05rem;
                text-shadow: 0.01rem 0.01rem #333 ;
                .icon{
                    // fill:rgba(255, 255, 255, 0.776);
                    fill:white;
                    height:0.2rem;
                    width:0.2rem;
                    margin-right:0.05rem;

                    // box-shadow: 0.01rem 0.01rem #333;
                    // -webkit-box-shadow: -2px -2px 0.3rem #333;
                }
                .symbol-play{
                    margin-right:0.03rem;
                    // font-weight: 900;
                    font-size:0.01rem;
                }
            }
        }
    }
}

.el-carousel__item{
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 0.1rem;
}

.el-carousel__item:nth-child(2n) {
  background-color: white;
//   background-color: skyblue;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}
</style>

<script>
import axios from 'axios';
import {getMusicList} from '@/api/index'
export default {
    data() {
        return {
            //定义跑马灯的图片路径
            imgs:[
                { coverImgUrl: require("../assets/joshua.png") },
                { coverImgUrl: require("../assets/daniela.webp") },
                { coverImgUrl: require("../assets/roysterlee2.webp") }, 
            ]
        };
    },

    async mounted(){
        let res=await getMusicList();//默认是get方法
        // console.log("musiclist的res",res)
        this.imgs=res.data.playlists;
    }

}
</script>