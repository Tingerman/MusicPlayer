<template>
    <div class="listViewTop">
        <img class="bg" :src="playlist.coverImgUrl" alt="">
        <div class="listViewTopNav">
            <div class="back" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
                <div class="title">
                    歌单
                </div>
            </div>

            <div class="right">
                <svg class="icon search" aria-hidden="true">
                    <use xlink:href="#icon-sousuoxiao-copy"></use>
                </svg>
                <svg class="icon more" aria-hidden="true">
                    <use xlink:href="#icon-diandiandianshu"></use>
                </svg>

            </div>

        </div>

        <div class="content">
            <div class="contentLeft">
                <img :src="playlist.coverImgUrl" alt="">
                <div class="count">
                    <!-- <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang2-copy-copy"></use>
                    </svg> -->
                    <span class="symbol-play">▷</span>
                    <span>{{parseInt(playlist.playCount/10000)}}万</span>
                </div>
            </div>
            <div class="contentRight">
                <h3>{{playlist.name}}</h3>
               <!-- <h3>{{playlist.trackCount}}</h3>  -->
                <div class="author">
                    <img :src="playlist.creator.avatarUrl" class="avatar">
                    <span>{{playlist.creator.nickname}}</span>
                </div>
                <div class="description">
                    {{playlist.description}}
                </div>

            </div>
        </div>

        <div class="iconList">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                </svg>
                <span>{{playlist.commentCount}}</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <span>{{playlist.shareCount}}</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-show_duoxuan"></use>
                </svg>
                <span>多选</span>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.listViewTop{
    width:7.5rem;
    padding:0 0.4rem;
    // height:6rem;
    .bg{
        position:fixed;
        left: 0;
        top:0;
        width:7.5rem;
        height: auto;
        z-index:-1;
        filter:blur(60px);
    }

    .listViewTopNav{
        display:flex;
        justify-content: space-between;
        height: 1.2rem;
        align-items: center;
        font-size: 0.35rem;
        .icon{
            width:0.4rem;
            height: 0.4rem;
            fill:#fff;
        }
        .title{
            margin-left:0.4rem;

        }
        .search{
            margin-right: 0.5rem;
        }
        .more{
            height: 0.5rem;
            width:0.5rem;
            margin-top: -0.05rem;
        }


    }
    .back,.right{
        display: flex;
        color:#fff;
    }
    
    .content{
        display: flex;
        justify-content: space-between;
        padding:0.6rem 0;
        .contentLeft{
            position:relative;
            img{
                width: 2.8rem;
                height: 2.8rem;
                border-radius: 0.1rem;
            }
            .count{
                position: absolute;
                right:0.05rem;
                top:0.1rem;
                font-size: 0.04rem;
                color:#e6e6e6;
                margin-right:0.05rem;
                text-shadow: 0.01rem 0.01rem #333 ;
                .icon{
                    // fill:rgba(255, 255, 255, 0.776);
                    fill:#e6e6e6;
                    height:0.25rem;
                    width:0.25rem;
                    margin-right:0.02rem;
                }
                .symbol-play{
                    margin-right:0.03rem;
                    // font-weight: 900;
                    font-size:0.01rem;
                }
            }
        }
        .contentRight{
            width:3.5rem;
            h3{
                color:white;
            }
            .author{
                display: flex;
                align-items: center;
                color:white;
                margin: 0.2rem 0;
                font-size: 0.28rem;
                img.avatar{
                    width:0.6rem;
                    height: 0.6rem;
                    border-radius: 50%;
                    margin-right:0.16rem;
                }
            }
            .description{
                font-size:0.24rem;
                color:white;
                height: 0.7rem;
                overflow: hidden;
            }

        }
    }

    .iconList{
        padding:0 0.5rem;
        .iconItem{
            color:white;
            
            .icon{
                fill:white;
                width: 0.5rem;
            }
            span{
                font-size:0.24rem;
                margin-top:0.1rem;
            }
        }
    }
}

</style>

<script>

import { onMounted } from 'vue';

export default {
    props:['playlist'],
    // setup(props){
    //     onMounted(()=>console.log("listviewtop的传值成功了没？",props.playlist))
    // }
}
</script>