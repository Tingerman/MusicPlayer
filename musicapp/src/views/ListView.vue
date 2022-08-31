<template>
    <div class="listView">
        <listview-top :playlist="state.playlist"></listview-top>
        <play-list :playlist="state.playlist"></play-list>
    </div>
</template>

<script>
import listviewTop from '@/components/listviewTop.vue'
import playList from '@/components/playList.vue'

import { getPlayListDetail } from '@/api/index';
import {onMounted,reactive} from 'vue';
import {useRoute} from 'vue-router';

import store from '@/store/index.js'

export default {
    setup(){
        const route=useRoute();
        let state=reactive({
            list:[],
            playlist:{
                creator:{
                    // avatarUrl: "http://p1.music.126.net/qRFbvij0Bc6_b2fqzLAP3w==/109951167601809187.jpg",
                    // backgroundImgId: 109951166640164350,
                    // backgroundImgIdStr: "109951166640164345",
                    // backgroundUrl: "http://p1.music.126.net/Tb8Ktmkz3TOqnupwnxaxLQ==/109951166640164345.jpg",
                    // birthday: 0,
                    // nickname: "0000FF少抽烟"
                },
                trackCount:-1,
                tracks:[],
            },
            })

        onMounted(async()=>{
            let id=route.query.id;
            let result=await getPlayListDetail(id);
            state.playlist=result.data.playlist;
            store.commit('setPlaylist',state.playlist.tracks);
            // console.log("父页面查询结果：",result);
            console.log("store里传值成功了吗？",store.state.playlist)
            // console.log("父页面传值playlist：",state.playlist);
        })

        return {
            state
        }
    },
    components:{
        listviewTop,
        playList
    }
}
</script>