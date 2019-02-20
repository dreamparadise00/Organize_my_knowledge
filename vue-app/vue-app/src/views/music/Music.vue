<template>
  <div class="music-list">
      <ul class='albums'>

          <li v-for='obj in musicList' :key="obj.id">
              <router-link :to="'/music/music_player/'+obj.id">
                  <img :src="obj.bg" alt="">
              </router-link>
          </li>
      </ul>
      <!-- 音乐 -->
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            musicList: []
        }
    },
    mounted(){
        Axios.get('https://hdwanghaocheng.github.io/Organize_my_knowledge/vue-app/vue-app/dist/static/musiclist.json')
        .then((res)=>{
            this.musicList = res.data.albums;
            // console.log(res.data.albums)
        })
    },
}
</script>

<style scoped>
.albums{
    position: absolute;
    top     : 1rem;
    bottom  : 1rem;
    width   : 100%;
}
.albums li{
    width : 50%;
    height: 33.33%;
    float : left;
}
.albums li img{
     width : 100%;
     height: 100%;
}
</style>
