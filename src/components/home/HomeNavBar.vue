<template>
  <div class="homeNavBar">
    <div class="navBarLeft">
      <span class="navBarBtn">动态</span>
      <span class="navBarBtn navBarBtnActive">推荐</span>
    </div>
    <div class="navBarRight">
      <img class="icon" src="../../assets/home/search.svg" alt="" @click="$router.push('/search')">
      <img class="icon" src="../../assets/home/message.svg" alt="" >
    </div>
  </div>
</template>

<style lang="less" scoped>
.homeNavBar{
  width: 7.5rem;
  height: 1.4rem;
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
