<template>
  <ul class="container">
         <li v-for="(obj,index) in movieList" :key="index" >
             <img :src=obj.images.small alt="">
              <div class="info">
                 <h3>{{obj.title}}</h3>
                 <p><span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}</span></p>
                 <p>{{obj.collect_count}}已观看</p>
                 <p>年份：{{obj.year}}</p>
                 <p>
                   <span v-for="(type,index) in obj.genres" :key="index">
                            {{type}}
                        </span>
                      </p>
             </div>

             <!-- {{obj}} -->
         </li>
         <img class="loading" v-show="isShow" src="@/assets/imgs/loading.gif" alt="" no-repeat>
         <div v-show="isBottom">到底了</div>
     </ul>

</template>

<script>
import Axios from "axios";
  export default {
      data(){
          return {
              movieList:[],
              isShow:false,
              isBottom:false
          }
      },
      created() {
        this.getMovie();
        window.onscroll = () => {
            // 滚动条滚动的高度
            console.log(document.documentElement.scrollTop);
            // 可视区的高度
            console.log(document.documentElement.clientHeight);
            // 整个滚动区的高度
            console.log(document.documentElement.scrollHeight);
            //如果 scrollTop 到底的时候取到的是小数
            // Math.abs(document.documentElement.scrollTop +document.documentElement.clientHeight - document.documentElement.scrollHeight) < 1
            if( document.documentElement.scrollTop +document.documentElement.clientHeight ==  document.documentElement.scrollHeight && !this.isBottom){
                this.getMovie();
            }
        }
      },
      methods:{
        getMovie(){
          // jsonbird  服务器代理 解决跨域 https://bird.ioliu.cn/v1?url=
          this.isShow = true;

          Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start="+this.movieList.length+"&count=10")
          .then((result)=>{
              // console.log(result.data);
              // this.movieList = result.data.subjects;
              // console.log(this.movieList)
                  this.movieList = [...this.movieList,...result.data.subjects];
                  console.log(this.movieList)
                  this.isShow = false;
                  if(this.movieList.length == result.data.total){
                      this.isBottom = true;
                  }
          })
          .catch();
        }
      }
  }
</script>

<style scoped>
.container{
      padding:0.2rem;
  }
  li{
      display: flex;
      border-bottom:1px solid #000;
  }
  li img{
      width:90px;
      height: 123px;
  }
  .info{
      flex-grow: 1;
      margin-left:0.2rem;
  }
</style>
