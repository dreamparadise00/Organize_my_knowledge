<template>
  <div class="header">
    <button>首页</button>
    <h2>movie</h2>
  </div>
</template>
<script>
</script>
<style>
  .header{
    height: 1rem;
    background-color: rgb(33,150,243);
    display:flex;
    position: fixed;
    width: 100%;
  }
  .header button{
    width:1rem;
    height:1rem;
    color:#fff;
    background-color: rgb(33,150,243);
    border: 0;
    padding: 0;
    float: left;
  }
  .header h2{
    float: left;
    color: #fff;
    text-align: center;
    flex: 1;
    text-indent: -1rem;
    /* 文本块中首行文本的缩进 */

  }
</style>
