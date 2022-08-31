<template>
    <div class="playlist">
        <div class="playlist-top">
            <div class="left">
                <svg class="icon more" aria-hidden="true">
                    <use xlink:href="#icon-bofangqi-bofangshu"></use>
                </svg>
                <div class="title">播放全部</div>
                <div class="num" v-if="(typeof playlist)!='undefined'">（共{{playlist.trackCount}}首）</div>
            </div>
            <div class="btn">
                + 收藏 ({{parseInt(playlist.subscribedCount/10000)}}万)
            </div>
        </div>

        <div class="list">
            <div class="playItem" v-for="(item,i) in playlist.tracks" :key="i">
                <div class="left" @click="setPlayIndex(i)">
                    <div class="index">{{i+1}}</div>
                    <div class="content">
                        <div class="title">{{item.name}}</div>
                        <div class="author">
                            <!-- <span class="tag" v-for="(tag,index) in playlist.tags" :key="index">{{tag}}</span> -->
                            <!-- <span>{{item.al.name}}</span> -->
                            {{item.ar[0].name}} · {{item.al.name}}
                        </div>
                    </div>
                </div>
                <div class="right">
                    <svg class="icon play" aria-hidden="true" @click="setPlayIndex(i)">
                        <use xlink:href="#icon-24gl-playCircle"></use>
                    </svg> 
                    <svg class="icon more" aria-hidden="true">
                        <use xlink:href="#icon-diandiandianshu"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { onMounted } from 'vue';
import {mapMutations} from 'vuex';

export default {
    
    props:['playlist'],
    // data(){     
    //     return {play:{trackCount:-1}}
    // },
    setup(props){
        onMounted(()=>{
            // console.log("test",props)
            // console.log("playlist? ",state.$store.playlist)
        })
    },
    methods:{
        ...mapMutations(['setPlayIndex'])
    }

}
</script>

<style scoped lang="less">
.playlist{
    width: 7.5rem;
    padding:0.3rem 0.4rem 0 0.4rem;
    background-color: white;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top:0.4rem;
    .playlist-top{
        display: flex;
        justify-content: space-between;
        height: 0.8rem;
        align-items: center;
        .left{
            display: flex;
            align-items: center;
            .icon{
                height: 0.4rem;
                width: 0.4rem;
                margin-right:0.1rem;
                fill:#333;
            }
            .title{
                font-size: 0.32rem;
                font-weight: 600;
                color: #333;
            }
            .num{
                font-size: 0.25rem;
                color:#333;
            }
        }
        .btn{
            color:white;
            margin-right:0rem ;
            padding:0.12rem;
            padding-top:0.19rem;
            padding-left:0.17rem;
            background-color: #a40010f7;
            box-shadow:0.03rem 0.03rem #ccc;
            // background-color: #C20C0C;
            font-size: 0.24rem;
            height:0.7rem;
            width:2rem;
            // line-height: 0.6rem;
            border-radius: 0.4rem;
            justify-content: center;
            text-align: center;
        }
    }
    .list{
        .playItem{
            display: flex;
            justify-content: space-between;
            padding:0.2rem;
            .left{
                display: flex;
                align-items: center;
                .index{
                    color:rgb(120, 120, 120);
                }
                .content{
                    margin-left:0.4rem;
                    .title{
                        font-size: 0.3rem;
                        color:#333;
                    }
                    .author{
                       font-size: 0.1rem;
                       color:rgb(120, 120, 120); 
                       margin-top:0.02rem;
                    }
                }
            }
            .right{
                display: flex;
                align-items:center ;
                .icon{
                    width:0.4rem;
                    height: 0.4rem;
                    fill:#333;
                    margin-left:0.2rem;
                }
            }
        }
    }
}


</style>