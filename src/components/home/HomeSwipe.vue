<template>
  <div class="homeSwipeItem">
    <div class="swipeItemList">
      <van-tabs class="vanSwipe" v-model:active="active" :color="'#000000'">
        <van-tab v-for="(item, i) in itemList" :title="item.name" :key="i"/>
      </van-tabs>
    </div>
    <div class="changeList">
      <img class="icon" src="@/assets/home/listSet.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const itemList = [
      {name: '全部'},
      {name: 'APEX'},
      {name: 'CS:GO'},
      {name: 'DOTA2'},
      {name: '数码硬件'},
      {name: 'Wallpaper'},
      {name: 'VALORANT'}
    ]
    return{
      itemList
    }
  }
}
</script>

<style lang="less" scoped>
.homeSwipeItem{
  display: flex;

  .swipeItemList{
    display: flex;
    width: 6.5rem;
    .vanSwipe{
      width: 100%;
    }

  }
  .changeList{
    margin-top: 0.3rem;
    margin-left: 0.2rem;
    .icon{
      width: 0.31rem;
      height: 0.31rem;
    }
  }
}
</style>
