<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao2"></use>
            </svg> 
        </div>
        <div class="topCenter">
            <span class="navBtn">我的</span>
            <span class="navBtn active">发现</span>
            <span class="navBtn">云村</span>
            <span class="navBtn">视频</span>
        </div>

        <div class="topRight" @click="$router.push('/searchview')">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg> 
        </div>
    </div>

</template>

<style lang="less" scoped>
    .topNav{
        width:7.5rem;
        height:1rem;
        display:flex;
        justify-content: space-between;//space-around 是平均分布
        // justify-content: space-around;
        align-items: center; //侧轴居中
        padding:0.2rem;
        // margin:
        
        .icon{//less可以这么写
            width:0.5rem;
            height: 0.5rem;

        }
        .topCenter{
            width:4.5rem;
            display: flex;
            justify-content: space-around;
            .active{
                font-weight: 900;
            }
        }
    }
    .icon{
        width: 0.3rem;
        height: 0.3rem;
    }
</style>