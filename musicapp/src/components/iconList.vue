<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tuijianma"></use>
            </svg>
            <span>每日推荐</span>
        </div>

        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-"></use>
            </svg>
            <span>私人FM</span>
        </div>

        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofanggedan"></use>
            </svg>
            <span>歌单</span>
        </div>

        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>

<style lang="less">
.iconList{
    display: flex;
    justify-content: space-between;
    padding:0.4rem;
    margin: 0 0.2rem 0 0.2rem;

    .iconItem{
        display:flex;
        flex-direction: column;
        align-items: center;

        // background: pink;

        .icon{
            width: 0.6rem;
            height: 0.6rem;
        }
    }
}
</style>