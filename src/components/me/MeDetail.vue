<template>
  <div class="userInfo">
    <div class="userInfoTop">
      <div class="infoLeft">
        <img class="header" :src="userInfo.imgUrl" alt="">
      </div>
      <div class="infoRight">
        <span class="name">{{ userInfo.nickname }}</span>
        <span class="sign">{{ userInfo.sign}}</span>
      </div>
    </div>
    <div class="userInfoBottom">
      <div class="iconItem">
        <h3>{{userInfo.follow}}</h3>
        <span>关注</span>
      </div>
      <span class="devide">|</span>
      <div class="iconItem">
        <h3>{{userInfo.fans}}</h3>
        <span>粉丝</span>
      </div>
      <span class="devide">|</span>
      <div class="iconItem">
        <h3>{{userInfo.collection}}</h3>
        <span>收藏</span>
      </div>
      <span class="devide">|</span>
      <div class="iconItem">
        <h3>{{userInfo.works}}</h3>
        <span>作品</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";

export default {
  setup() {
    const userInfo = store.state.userInfo
    return{
      userInfo
    }
  }
}
</script>

<style lang="less" scoped>
.userInfo{
  .userInfoTop{
    display: flex;
    background-image: linear-gradient(to right, #333, #fff);
    border-radius: 0.2rem;
    margin: 0 0.2rem;
    .infoLeft{
      display: flex;
      align-items: center;
      margin: 0.1rem 0.2rem;
      img.header{
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 0.6rem;
      }
    }
    .infoRight{
      display: flex;
      width: 100vw;
      flex-direction: column;
      align-items: flex-start;
      margin: 0.2rem 0.2rem;

      .name{
        font-size: 0.45rem;
        color: white;
      }
      .sign{
        margin-top: 0.2rem;
        font-size: 0.2rem;
        color: #cccccc;
      }
    }
  }
  .userInfoBottom{
    width: 7.5rem;
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
    align-items: center;
    .devide{
      font-size: 0.5rem;
      font-weight: 10;
    }
    .iconItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      h3{
        margin-bottom: 0;
        margin-top: 0.2rem;
        font-size: 0.4rem;
      }
      span{
        font-size: 0.2rem;
        color: #ccc;
      }
    }
  }
}
</style>
