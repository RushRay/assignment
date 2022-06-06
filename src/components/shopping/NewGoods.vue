<template>
  <div class="newGoods">
    <div v-for="item in goodList"  :key="item">
      <GoodItem :goodDetail=item />
    </div>
  </div>
</template>

<script>
import GoodItem from "@/components/GoodItem";

export default {
  components: {GoodItem},
  setup() {
    const good = {
      imgUrl: 'https://cdn1.epicgames.com/offer/95e09a8c24c44684bca1a6f25aea920c/EGS_EvilDeadTheGame_SaberInteractiveInc_S1_2560x1440-fde136bc32f2b93006b9df0bc421fec0',
      name: 'Evil Dead: The Game',
      price: '￥159',

      tags: [
        {name: '合作'},
        {name: '恐怖'},
        {name: '促销'}
      ]
    }
    const goodList = [good, good, good, good, good, good]
    return {
      GoodItem, good, goodList
    }
  }
}
</script>

<style lang="less" scoped>
.newGoods{
  width: 7.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
