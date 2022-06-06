<template>
  <div class="card">
    <div class="cardName">
      <img class="ava" alt="" :src="userSteamInfo.imgUrl">
      <span class="name">{{userSteamInfo.nickname}}</span>
    </div>
    <div class="cardContent">
      <div class="item">
        <span class="num">{{userSteamInfo.accountValue}}</span>
        <span>账户价值</span>
      </div>
      <div class="item">
        <span class="num">{{userSteamInfo.gameDuration}}</span>
        <span>游戏时长</span>
      </div>
      <div class="item">
        <span class="num">{{userSteamInfo.gameCount}}</span>
        <span>游戏数量</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";

export default {
  setup() {
    const userSteamInfo = store.state.userSteamInfo
    return{
      userSteamInfo
    }
  }
}
</script>

<style lang="less" scoped>
.card{
  width: 7.1rem;
  height: 2.6rem;
  margin: 0.3rem 0.2rem 0 0.2rem;
  border-radius: 0.2rem;
  background-image: linear-gradient(to right, dodgerblue, deepskyblue);

  .cardName{
    width: 3rem;
    height: 0.8rem;
    padding: 0.2rem 0.4rem;
    display: flex;
    align-items: center;
    .ava{
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 0.2rem;
    }
    .name{
      color: white;
      font-size: 0.4rem;
      margin-left: 0.2rem;
    }
  }

  .cardContent{
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(to right, #0000db, transparent);
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
    }
  }
}
</style>
