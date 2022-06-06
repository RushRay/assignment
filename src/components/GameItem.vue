<template>
  <div class="gameItem">
    <div class="itemLeft">
      <img :src="gameInfo.avaUrl" alt="">
    </div>
    <div class="itemMid">
      <div class="gameName">{{gameInfo.name}}</div>
      <div class="gameTime">{{gameInfo.playtime}}</div>
      <van-progress :percentage="percent" :show-pivot="false" :color="percent > 90 ? 'orange' : 'blue'"/>
    </div>
    <div class="itemRight">
      <span>{{gameInfo.achieve}}/{{gameInfo.achievecount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['gameInfo'],
  setup(props) {
    const percent = props.gameInfo.achieve / props.gameInfo.achievecount * 100
    return {
      percent
    }
  }
}
</script>

<style lang="less" scoped>
.gameItem{
  width: 7.1rem;
  height: 2rem;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  .itemLeft{
    img{
      width: 2.6rem;
      height: 1.4rem;
      border-radius: 0.1rem;
    }
  }
  .itemMid{
    width: 3rem;
    .gameName{
      font-size: 0.35rem;
      margin-bottom: 0.2rem;
    }
  }
  .itemRight{
    font-size: 0.35rem;
    font-weight: 300;
  }
}
</style>
