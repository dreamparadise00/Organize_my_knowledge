<template>
    <div class="music">
        <common-header title="music" nav="<" bgColor="rgb(0, 150, 136)"></common-header>
        <router-view></router-view>
        <!-- <ul class="albums">
          <li v-for='obj in musicList' :key='obj.id'
          :style='{background:"url("+obj.bg+") no repeat"}'>

          </li>
        </ul> -->
        <common-footer bgColor="rgb(0, 150, 136)"></common-footer>
    </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import Axios from 'axios'
export default {
    data(){
        return {
            musicList: []
        }
    },
    mounted(){
        Axios.get('/static/musiclist.json')
        .then((res)=>{
            this.musicList = res.data.albums;
            console.log(this.musicList)
        })
    },
  components:{
      CommonHeader,
      CommonFooter
  }
}
</script>
<style>
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
</style>
