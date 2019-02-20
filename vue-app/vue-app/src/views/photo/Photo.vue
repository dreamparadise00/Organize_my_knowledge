<template>
  <div class="photo">
          <ul class='photo-list'>
              <li v-for="(photo,index) in photoData" :key="index">
                  <router-link :to="'/photo/detail/'+index">
                      <img :src="photo.src" alt="">
                  </router-link>
              </li>
          </ul>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import Axios from 'axios'
export default {
    data(){
        return {
            bgColor: "rgb(63, 81, 181)"
        }
    },
    computed  : {
        ...mapState(["photoData"]),
    },
    methods: {
        ...mapActions(['setPhotoData'])
    },
    mounted(){
        Axios.get('https://hdwanghaocheng.github.io/Organize_my_knowledge/vue-app/vue-app/dist/static/photo-data.json')
        .then((res)=>{
            this.setPhotoData(res.data.photoData);
            
        })
    }

}
</script>

<style scoped>
.photo-list{
    margin  : 1rem 0;
    overflow: hidden;
}
.photo-list li{
    width: 50%;
    float: left;
}
</style>
