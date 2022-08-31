import { createStore } from 'vuex'
import axios from 'axios'
import api from '@/api/index.js'
import { parseStringStyle } from '@vue/shared'

export default createStore({
  //全局对象
  state: {
    playing:false,
    playlist:[{
      id: 167655,
      name: "幻听",
      al:{id: 16932,
      name: "梦游计",
      pic: 109951166118946340,
      picUrl: "http://p3.music.126.net/ifjKrYPuGzRHlbVDNScQfA==/109951166118946328.jpg",
      pic_str: "109951166118946328"}
    }],
    playCurrentIndex:0,
    lyric:'',
    // currentTime:0,
    // intervalId:0,
  },
  getters: {
    lyricList:function(state){
      let arr= state.lyric.split(/\n/igs).map((item,i)=>{
          let min=parseInt(item.slice(1,3));
          let sec=parseInt(item.slice(4,6));
          let mill=parseInt(item.slice(7,item.indexOf(']')));
          return {
            min,sec,mill,
            lyric:item.slice(item.indexOf(']')+1),
            item,
            time:mill+sec*1000+min*60*1000
            // time:parseInt(mill)+parseInt(sec)*1000+parseInt(min)*60*1000
          }
      })
      // console.log("i_max",arr.length-1)
      arr.forEach((item,i)=>{
        // if(i==arr.length-1){
        if(i>=arr.length-3 && (!arr[i+1] || !arr[i+1].lyric||!!arr[i+1].lyric.length)){
          item.next=item.time+4000;
        }
        else item.next=arr[i+1].time;
      })
      // console.log(arr)
      return arr;
    }
  },
  mutations: {
    setPlaylist:function(state,value){ //修改playlist，直接传值
      state.playlist=value;
    },
    pushPlaylist:function(state,value){ //把一首歌塞进歌单，传进尾部，再把播放index调到尾部
      state.playlist.push(value);
      console.log("pushPlaylist里的playlist:",state.playlist)
    },
    setPlayIndex(state,value){
      state.playCurrentIndex=value;
      state.playing=true;
    },
    setLyric(state,value){
      state.lyric=value;
    },
    setCurrentTime(state,value){
      state.currentTime=value;
    },
    setPlayingStatus(state,value){
      state.playing=value;
    }
  },
  actions: {
    async reqLyric(content,payload){
      let result=await api.getLyric(payload.id);
      content.commit('setLyric',result.data.lrc.lyric);
      console.log("lyric:",result.data.lrc.lyric);
    },
    // UpdateTime(content){
    //   content.state.id=setInterval(()=>{
    //     content.commit('setCurrentTime',++content.state.currentTime)
    //   },1000)
    // }
  },
  modules: {
  }
})
