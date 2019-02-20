<template>
    <div class='player'>
      <a-player :music="musicList[0]" :list="musicList"  v-if="isShow">
      </a-player>
        <!-- {{$route.params.id}} -->
        <!-- <aplayer autoplay :music="musicList"/> -->

    </div>

</template>

<script>
import Axios from "axios"
import APlayer from 'vue-aplayer'

export default {

  data(){
      return {
          musicData: [],
          musicList: [],
          isShow   : false

      }
  },
  mounted(){
      Axios.get('@/assets/music-data.json')
      .then((res)=>{
          this.musicData = res.data.musicData;
          console.log(res.data.musicData);
          for(var i=0;i< this.musicData.length;i++){
              let obj     =  {
                  title  : this.musicData[i].title,
                  artist : this.musicData[i].author,
                  src    : this.musicData[i].src,
                  pic    : this.musicData[i].musicImgSrc,
                  lrc    : "/static/"+this.musicData[i].lrc
                }
                  this.musicList.push(obj);
                    // console.log(this.musicList);
          }
          console.log(this.musicList);
          this.isShow = true;
      });
  },
  components:{
      APlayer
  }

}
</script>
<style>
    .player{
        margin-top: 1rem;
    }
</style>
