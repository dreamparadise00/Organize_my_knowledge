<template >

</template>
<script type="text/javascript">
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      CommonHeader:CommonHeader,
      CommonFooter:CommonFooter
    }
  }
</script>
<style media="screen">

</style>
