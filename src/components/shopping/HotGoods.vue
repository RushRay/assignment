<template>
  <div class="hotGoods">
    <GoodItem :goodDetail="good"/>
    <GoodItem :goodDetail="good"/>
    <GoodItem :goodDetail="good"/>
    <GoodItem :goodDetail="good"/>
    <GoodItem :goodDetail="good"/>
    <GoodItem :goodDetail="good"/>
  </div>
</template>

<script>
import GoodItem from "@/components/GoodItem";

export default {
  components: {GoodItem},
  setup() {
    const good = {
      imgUrl: 'https://cdn.max-c.com/heybox/game/header/1172380_D9N3m.jpg',
      name: '星球大战 绝地：陨落的武士团',
      price: '￥196',

      tags: [
        {name: '单机'},
        {name: '热门'}
      ]
    }
    return {
      GoodItem, good
    }
  }
}
</script>

<style lang="less" scoped>
.hotGoods{
  width: 7.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
