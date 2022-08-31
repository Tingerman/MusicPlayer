<template>
  <div>
    <router-view/>
    <play-controller></play-controller>
  </div>
</template>

<style lang="less">
*{
  margin:0;
  padding:0;
  box-sizing:border-box;//宽度是多少就是多少，不会应为内边距被撑大了
  font-family: '微软雅黑';
}
.icon{
  font-size:0.3rem;
  width: 0.3rem;
  height: 0.3rem;
}
a{
  color: #333;
  text-decoration:none;
}
</style>

<script>
import playController from '@/components/playController.vue'
export default {
  components:{
    playController
  }
}
</script>
