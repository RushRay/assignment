<template>
  <div class="articleTopNav">
    <div class="left" @click="$router.back()">
      <img src="../../assets/search/back.svg" alt="">
    </div>
    <div class="mid">
      <span>正文</span>
      <span>评论</span>
    </div>
    <div class="right">
      <img src="../../assets/more.svg" alt="">
    </div>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
.articleTopNav{
  display: flex;
  width: 7.5rem;
  height: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  img{
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 0.2rem;
  }
  .mid{
    font-size: 0.4rem;
    span{
      margin: 0 0.5rem;
    }
  }
}
</style>
