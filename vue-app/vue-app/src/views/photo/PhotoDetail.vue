<template>
  <div class='detail'>

        <!-- <v-touch class='photo-detail' :style="{background:bg}"
        @swipeleft="left" @swiperight="right">
        </v-touch> -->
        {{bg}}
  </div>
</template>
<script>

import {mapState} from 'vuex';
import Axios from 'axios'

export default {
    data(){
      return {
          aa: this.$route.params.index,
        //   photoData: this.$store.state.photoData
      }
    },
    computed: {
        bg(){
            return "url("+ this.$store.state.photoData[this.aa].src +") no-repeat center / contain #000"
        },
        ...mapState(["photoData"])
    },
    methods:{
        left(){
            this.aa++;
        },
        right(){
            this.aa--;
        }
    }
}
</script>
<style>
    .photo-detail{
        position: absolute;
        top     : 1rem;
        bottom  : 0;
        width   : 100%;
    }
</style>
