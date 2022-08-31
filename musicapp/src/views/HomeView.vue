<template>
  <div class="home">

    <top-nav></top-nav>
    <swiper-com class="homeView"></swiper-com>
    <icon-list></icon-list>
    <music-list class="mLst"></music-list>



  </div>
</template>


<script>
// @ is an alias to /src
import topNav from '@/components/topNav.vue'
import swiperCom from '@/components/swiperCom.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'

export default {
  name: 'HomeView',
  components: {
    topNav,
    swiperCom,
    iconList,
    musicList
  },
  data:function(){
    return{
    }
  },
}
</script>

<style lang="less" scoped>
#d1{
  width:3.75rem;
  height:3.75rem;
  background:skyblue;
  // width:375px;
  // height:375px;
}
.icon{
  width: 0.5rem;
}

.homeView{
  border-radius: 2rem;
  margin:0 0.2rem 0 0.2rem;
}



</style>
