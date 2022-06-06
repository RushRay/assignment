<template>
  <div class="messageItem">
    <div class="left">
      <img :src="userMessage.avaUrl" alt="">
    </div>
    <div class="mid">
      <div class="name">{{userMessage.name}}</div>
      <div class="lastMessage">{{userMessage.message[0].text}}</div>
    </div>
    <div class="right">{{calTime(userMessage.message[0].timestamp)}}</div>
  </div>
</template>

<script>
export default {
  props: ['userMessage'],
  setup() {
    function calTime(dateTimeStamp) {
      let timestamp = Date.parse(new Date());
      timestamp = timestamp / 1000;
      const difference = timestamp - dateTimeStamp;
      if (difference < 60) {
        return '刚刚';
      } else if (difference < 3600) {
        return Math.floor(difference / 60) + '分钟前';
      } else if (difference < 86400) {
        return Math.floor(difference / 3600) + '小时前';
      } else {
        return Math.floor(difference / 86400) + '天前';
      }
    }

    return {
      calTime
    }
  }
}
</script>

<style lang="less" scoped>
.messageItem{
  width: 7.1rem;
  height: 1.6rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  .left{
    img{
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  .mid{
    width: 100vw;
    margin-left: 0.2rem;
    .name{
      font-size: 0.35rem;
      margin-bottom: 0.2rem;
    }
    .lastMessage{
      font-size: 0.28rem;
      color: #ccc;
    }
  }
  .right{
    width: auto;
    white-space: nowrap;
  }
}
</style>
