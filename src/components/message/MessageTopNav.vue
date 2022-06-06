<template>
  <div class="messageTopNav">
    <div class="mid">
      <span>消息中心</span>
    </div>
    <div class="right">
      <img src="../../assets/support.svg" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.messageTopNav{
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
  border-bottom: 1px solid #ccc;
  .mid{
    font-size: 0.4rem;
    width: 100vw;
    display: flex;
    span{
      margin: 0 0.5rem;
    }
  }
  .right{
    img{
      width: 0.5rem;
      height: 0.5rem;
      margin: 0 0.2rem;
    }
  }
}
</style>
