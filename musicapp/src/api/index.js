import axios from 'axios';


//获取轮播图的api，type：0是pc，1是安卓，2是iphone，3是ipad
export function getBanner(type=1){
    return axios.get(`http://localhost:3000/banner?type=${type}`)
}

//获取推荐歌单
export function getMusicList(limit=8,order='hot'){
    return axios.get(`http://localhost:3000/top/playlist?limit=${limit}&order=${order}`)
}

//获取歌单详情
export function getPlayListDetail(id){
    return axios.get(`http://localhost:3000/playlist/detail?id=${id}`)
}

//获取歌词
export function getLyric(id){
    return axios.get(`http://localhost:3000/lyric?id=${id}`)
}

//搜索歌曲
export function searchMusic(keyword){
    return axios.get(`http://localhost:3000/search?keywords=${keyword}`)
}


export default{
    getBanner,getMusicList,getPlayListDetail,getLyric,searchMusic
}