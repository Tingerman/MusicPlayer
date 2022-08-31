<template>
    <div class="playMusic">
        <div class="bg" :style="{backgroundImage:`url(${playDetail.al.picUrl})`}"></div>
        <div class="playTop">
            <div class="back" @click="$emit('back')">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </div>
            <div class="title">
                {{playDetail.name}}
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
            </div>
        </div>
        <!-- <div class="playContent"></div> -->
        <div class="lyric" ref="playLyric">
            <!-- <p v-for="(item,i) in ($store.state.lyric ||'').split(/\n/igs)" :key="i">{{item}}</p> -->
            <p :class="{active:(currentTime*1000<=(item.next)&& currentTime*1000>=item.time)}" v-for="(item,i) in ($store.getters.lyricList)" :key="i">{{item.lyric}}</p>
        </div>
        <div class="progress"></div>
        <div class="playFooter">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiaoxunhuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shangyishoushangyige" @click="goPlay(-1)"></use>
            </svg>  
            <svg class="icon play" v-if="paused" aria-hidden="true" @click="play">
                <use xlink:href="#icon-playCircle-copy"></use>
            </svg>
            <svg class="icon stop" v-else naria-hidden="true" @click="play">
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(1)">
                <use xlink:href="#icon-xiayigexiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-songlist-copy"></use>
            </svg>   
        </div>
    </div>
</template>

<style scoped lang="less">
.playMusic{
    position: fixed;
    left:0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    .bg{
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh; 
        background-size:auto 100%;
        filter:blur(60px);
        background-color: white;
    }
    .playTop{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 7.5rem;
        height:1.2rem;
        position: absolute;
        left:0;
        top:0;
        color:white;
        padding:0rem 0.4rem;
        .back{
            display: flex;
            align-items: center;
        }
        .title{
            width:70%;
            text-align: center;
            font-size: 0.35rem;
            text-shadow: 0.01rem 0.01rem #333 ;
        }

        .icon{
            fill:white;
            width:0.45rem;
            height: 0.45rem;

        }
    }
    .playFooter{
        width: 7.5rem;
        height: 1.8rem;
        position: absolute;
        left:0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 0.4rem;
        .icon{
            fill:white;
            width:0.45rem;
            height: 0.45rem;
        }
        .play.icon{
            width:1.1rem;
            height: 1.1rem; 
        }
        .stop.icon{
            width:1rem;
            height: 1rem; 
            margin: 0 0.05rem;
        }
    }
    .lyric{
        position: absolute;
        width:7.5rem;
        height: 8rem;
        left:0;
        top:2.2rem;
        padding:0 0.6rem;
        overflow: scroll;
        text-align: center;
        color:white;
        text-shadow: 0.01rem 0.01rem #666 ;
        .active{
            font-size: 0.38rem;
            font-weight: 900;
            // margin-bottom: 0.3rem;
            // margin-top: 0.3rem;
            text-shadow: 0.02rem 0.02rem #333 ;
            // color:red;
        }
        p{
            margin-bottom: 0.2rem;
        }
    }
}

</style>

<script>
// import { it } from "node:test";
import {mapState} from "vuex";
export default {
    
    props:['playDetail','paused','play'],
    computed:{
        ...mapState(['lyric','currentTime','playlist','playCurrentIndex']),
        // lyricList:function(){
        //     let arr= this.lyric.split(/\n/igs).map((item,i)=>{
        //         let min=item.slice(1,3);
        //         let sec=item.slice(4,6);
        //         let mill=item.slice(8,11);
        //         console.log(min,sec,mill)
        //         return{
        //             min,sec,mill
        //         }
        //     })
        // }
    },
    watch:{
        currentTime:function(newValue){
            // console.log("new currentTime is:",newValue)
            // console.log("playLyric:",[this.$refs.playLyric])
            // let p={}
            let p=document.querySelector('p.active');
            // console.log([p])
            // console.log("scrollTop",this.$refs.playLyric.scrollTop);
            // console.log("offsetTop",p?.offsetTop);
            let h=this.$refs.playLyric.offsetHeight;
            //active 的歌词滚动到中间位置
            if(p?.offsetTop>h/2){
                //出了屏幕（一半），在当前可见页面的下面
                this.$refs.playLyric.scrollTop=p?.offsetTop-h/2;
            }

        }
    },
    methods:{
        goPlay(num){
            let index=this.playCurrentIndex+num;
            console.log("index:",index)
            if(index<0){
                index=this.playlist.length-1;
            }
            else if(index==this.playlist.length){
                index=0;
            }
            this.$store.commit('setPlayIndex',index);
        }
    }
}
</script>