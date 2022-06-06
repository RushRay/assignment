<template>
  <div class="shoppingView">
    <div class="newShopping">
      <div class="title">新游上市</div>
      <NewGoods/>
    </div>
    <div class="hotShopping">
      <div class="title">热门游戏</div>
      <HotGoods/>
    </div>
    <div class="blankBottom"/>
  </div>
</template>

<script>
import NewGoods from '@/components/shopping/NewGoods'
import HotGoods from "@/components/shopping/HotGoods";

export default {
  components: { NewGoods, HotGoods },
  setup() {
    return{
    }
  }
}
</script>

<style lang="less" scoped>
.shoppingView{
  width: 7.1rem;
  margin: auto;
  padding-top: 0.2rem;
  .newShopping{
    margin-bottom: 0.4rem;
    .title{
      font-size: 0.38rem;
      font-weight: 600;
    }
  }
  .hotShopping{
    .title{
      font-size: 0.38rem;
      font-weight: 600;
    }
  }
  .blankBottom{
    height: 1.2rem;
  }
}
</style>
