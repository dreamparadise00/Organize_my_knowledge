<template>
  <div class="book">
      <swipe class="my-swipe">
          <swipe-item class="slide1"></swipe-item>
          <swipe-item class="slide2"></swipe-item>
          <swipe-item class="slide3"></swipe-item>
      </swipe>
  </div>
</template>

<script>
import {Swipe, SwipeItem} from 'vue-swipe'
export default {
  components:{

      Swipe,
      SwipeItem,
  }
}
</script>

<style >
/* 不要加scoped,会污染样式，导航的小圆点就不显示了 */
@import "../../assets/css/vue-swipe.css";
.my-swipe {
  height    : 8rem;
  color     : #fff;
  font-size : 30px;
  text-align: center;
  margin-top: 1.5rem;
}

.slide1 {
  background: url('https://img3.doubanio.com/lpic/s24468373.jpg')  no-repeat;
  background-size: cover;
  color     : #fff;
}

.slide2 {
  background: url('https://img3.doubanio.com/lpic/s27102925.jpg') no-repeat;
  background-size: cover;
  color     : #000;
}

.slide3 {
  background: url('https://img3.doubanio.com/lpic/s6989253.jpg') no-repeat;
  background-size: cover;
  color     : #fff;
}
</style>
