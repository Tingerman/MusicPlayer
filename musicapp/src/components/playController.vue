<template>
    <div class="playController">
        <div class="left" @click="show=!show">
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
            <div class="content">
                <div class="title">{{playlist[playCurrentIndex].name}}</div>
                <div class="tips">横滑可以切换上下首歌</div>
            </div>
        </div>
        <div class="right">
            <svg class="icon play" v-if="paused" aria-hidden="true" @click="play">
                <use xlink:href="#icon-24gl-playCircle"></use>
            </svg>
            <svg class="icon pause" v-else aria-hidden="true" @click="play">
                <use xlink:href="#icon-zanting"></use>
            </svg>  
            <svg class="icon more" aria-hidden="true">
                <use xlink:href="#icon-liebiao"></use>
            </svg>
        </div>

        <play-music :play="play" :paused='paused' @back="show=!show" v-show="show" :playDetail="playlist[playCurrentIndex]"></play-music>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>

<script>
import { onUpdated,ref,watch } from 'vue';
import {mapState,mapMutations} from 'vuex'
import {onMounted,reactive} from 'vue';
import playMusic from '@/components/playMusic.vue'

export default {
    computed:{
        ...mapState(['playlist','playCurrentIndex','playing'])
    },
    components:{playMusic},
    mounted(){
        console.log(this.$refs.audio);
        this.$store.dispatch('reqLyric',{id:this.playlist[this.playCurrentIndex].id});
        this.UpdateTime();
    },
    updated(){
        console.log("updated当前曲目",this.playlist[this.playCurrentIndex]);
        console.log("playing传进来了吗？",this.playing)
        this.$store.dispatch('reqLyric',{id:this.playlist[this.playCurrentIndex].id})
        this.UpdateTime();
        this.UpdatePlaying();
    },
    data(){
        return{
            paused:!this.playing,
            show:false
        }
    },
    methods:{
        play:function(){
            if(this.$refs.audio.paused){
                this.$refs.audio.play();
                this.paused=false;
                this.playing=true;
            }else{
                this.$refs.audio.pause();
                this.paused=true;
                clearInterval(this.$store.state.id);
                this.playing=false;
                // audio_reactive.paused=true;
            }
        },
        UpdateTime(){
            this.$store.state.id=setInterval(()=>{
                this.$store.commit('setCurrentTime',this.$refs.audio.currentTime)
            },1000)
        },
        UpdatePlaying(){
           this.$store.commit('setPlayingStatus',!this.$refs.audio.paused);
           this.paused=!this.playing;
           console.log("playing:",this.playing)
        }
        
    }

}
</script>

<style scoped lang="less">
.playController{
    z-index: calc(var(--el-index-normal) + 2);
    background-color: white;
    border-top:0.4px solid #ccc;
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left:0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        display: flex;
        flex-direction: row;
        .content{
            display: flex;
            flex-direction: column;
            width:4rem;
            .title{
                height: 0.4rem;
                overflow: hidden;
            }

            .tips{
                color:rgb(120, 120, 120);
                font-size: 0.24rem;
                margin-top:0.04rem;
            }
        }
        img{
            width:0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            margin-left: 0.4rem;
            margin-right:0.3rem;
        }

    }
    .right{
        display: flex;
        flex-direction: row;
        margin-right: 0.6rem;
        .icon{
            width:0.5rem;
            height: 0.5rem;
            fill:#333;
            // margin-left:0.4rem;
        }
        .more{
            margin-left:0.4rem;
        }
        .pause{
            width: 0.45rem;
            height: 0.45rem;
            position: relative;
            right:0.02rem;
            bottom:-0.02rem;
        }
    }

}

</style>