<template>
  <div class="homeNavBar">
    <div class="navBarLeft">
      <span class="navBarBtn navBarBtnActive">数据</span>
      <span class="navBarBtn">动态</span>
    </div>
    <div class="navBarRight">
      <img class="icon" src="../../assets/home/search.svg" alt="" @click="$router.push('/search')">
      <img class="icon" src="../../assets/me/set.svg" alt="" @click="$router.push('/setting')">
      <img class="icon" src="../../assets/home/message.svg" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.homeNavBar{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;

  width: 7.5rem;
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navBarLeft{
    width: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    font-size: 0.3rem;
    margin: 0 0.2rem;
    .navBarBtnActive{
      font-size: 0.38rem;
      transition: all 500ms;
    }
  }
  .navBarRight{
    display: flex;
    .icon{
      width: 0.5rem;
      height: 0.5rem;
      margin: 0 0.2rem;
    }
  }
}
</style>
