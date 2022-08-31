<template>
    <div class="searchTop">
        <div class="searchTopNav">
            <div class="back" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </div>
            <div class="inputbox">
                <input type="text" v-model="searchKeyword" :placeholder="placeholder" @keydown.enter="saveKeyword">
            </div>

            <div class="right" @click="saveKeyword">
                <svg class="icon search" aria-hidden="true">
                    <use xlink:href="#icon-sousuoxiao"></use>
                </svg>
            </div>

        </div>

        <div class="history" v-show="searchSongs.length==0">
            <div class="historyLeft">历史</div>
            <div class="historyRight">
                <div class="keywordItem" v-for="(item,i) in keywordList" :key="i" @click="searchKeyword=item">{{item}}</div>
                <div class="clearbtn" @click="clearStorage">清空历史</div>
            </div>
        </div>

        <div class="list">
            <div class="playItem" v-for="(item,i) in searchSongs" :key="i">
                <div class="left" @click="setPlay(item)">
                    <div class="index">{{i+1}}</div>
                    <div class="content">
                        <div class="title">{{item.name}}</div>
                        <div class="author">
                            <!-- <span class="tag" v-for="(tag,index) in searchSongs.tags" :key="index">{{tag}}</span> -->
                            <!-- <span>{{item.al.name}}</span> -->
                            {{item.artists[0].name}} · {{item.album.name}}
                        </div>
                    </div>
                </div>
                <div class="right">
                    <svg class="icon play" aria-hidden="true" @click="setPlay(item)">
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

<style lang="less">
.searchTop{
    width:7.5rem;
    padding:0 0.4rem;
    padding-top:0.2rem ;
    // height:6rem;

    .searchTopNav{
        display:flex;
        justify-content: start;
        width: 100%;
        height: 1.2rem;
        align-items: center;
        font-size: 0.35rem;
        .icon{
            width:0.4rem;
            height: 0.4rem;
            fill:#333;
        }
        .search{
            margin-left: 0.3rem;
        }
        .inputbox{
            width: 75%;
            margin-left:0.3rem;
            height: 0.6rem;
            input{
                border: none;
                outline: none;
                border-bottom: 1px solid #666;
                width: 100%;
                height: 0.5rem;
            }
        }

    }
    .history{
        display: flex;
        justify-content: start;
        height: 0.6rem;
        padding: 0 0.1rem;
        flex-wrap: wrap; //自动换行
        flex:1; //占据剩余宽度
        .historyLeft{
            width:1.1rem;
            height: 0.6rem;
            font-weight: 800;
            display:flex;
            align-items: center;
            line-height: 0.6rem;
        }
        .historyRight{
            color:#666;
            display: flex;
            align-items: center;
            width: 70%;
            flex-wrap: wrap; //自动换行
            flex:1; //占据剩余宽度
            .keywordItem{
                display:flex;
                background-color: #eee;
                height: 0.55rem;
                padding: 0 0.2rem;
                align-items: center;
                border-radius: 0.3rem;
                font-size: 0.2rem;
                margin:0 0.08rem 0.16rem 0.08rem;

            }
            .clearbtn{
                font-size: 0.26rem;
                color:#333;
                margin:0.06rem 0rem 0.12rem 0.3rem;
                text-decoration: underline;
            }
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

<script>

import {searchMusic} from '@/api/index.js'
import {setPlayIndex} from '@/api/index.js'
import {mapMutations} from 'vuex';
import {mapState} from "vuex";

export default {
    props:['playlist'],
    computed:{
        ...mapState(['playlist','playCurrentIndex','playing'])
    },
    data:()=>{
        return{
            placeholder:"Racheal Yamagata",
            keywordList:['杨千嬅','方大同'],
            searchKeyword:'',
            searchSongs:[],
        }
    },
    beforeMount(){
        // localStorage.keywordList="";
        console.log("localStorage",localStorage.keywordList)
        this.keywordList=localStorage.keywordList? JSON.parse(localStorage.keywordList):this.keywordList;
    },
    methods:{
        ...mapMutations(['setPlayIndex']),
        saveKeyword:async function(){
            this.keywordList.push(this.searchKeyword);
            this.keywordList=Array.from(new Set(this.keywordList));
            if(this.keywordList.length>10){
                this.keywordList=this.keywordList.slice(this.keywordList.length-10);
            }
            localStorage.keywordList=JSON.stringify(this.keywordList);
            let result=await searchMusic(this.searchKeyword);
            // console.log("search result:",result)
            this.searchSongs=result.data.result.songs;
            console.log(this.searchSongs)
            this.searchKeyword='';
        },
        clearStorage(){
           localStorage.keywordList=""; 
           this.keywordList=[];
        },
        setPlay(item){
            if(!item.al)item.al=item.album;
            // item.al=item.album;
            if(!item.al.picUrl)item.al.picUrl=item.album.artist.picUrl || item.al.artist.img1v1Url;
            console.log(this.$store.state.playlist);
            this.$store.commit('pushPlaylist',item);
            this.$store.commit('setPlayIndex',this.$store.state.playlist.length-1)
            // this.$store.commit('setPlayIndex',2)
        }
    }
}
</script>