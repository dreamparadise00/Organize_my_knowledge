<template>
  <div class='detail'>

        <v-touch class='photo-detail' :style="{background:bg}"
        @swipeleft="left" @swiperight="right">
        </v-touch>


  </div>
</template>
<script>

import {mapState} from 'vuex';
import Axios from 'axios'
import Vue from 'vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

export default {
    data(){
      return {
          idx: this.$route.params.index
        //   photoData: this.$store.state.photoData
      }
    },
    computed: {
        bg(){
            return "url("+ this.$store.state.photoData[this.idx].src +") no-repeat center / contain #000"
            // console.log(this.idx)
        },
        ...mapState(["photoData"])
    },
    methods:{
        left(){
            this.aa++;
        },
        right(){
            this.aa--;
        },
        why(){
          console.log(this.idx);
        }
    }
}
</script>
<style>
    .photo-detail{
        position: absolute;
        top     : 0.8rem;
        bottom  : 0;
        width   : 100%;
    }
</style>
