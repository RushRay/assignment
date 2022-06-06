<template>
  <div class="messageView">
    <MessageTopNav/>
    <div class="blank" />
    <div v-for="item in messageList" :key="item">
      <MessageItem :userMessage=item />
    </div>
  </div>
</template>

<script>
import MessageItem from "@/components/MessageItem";
import MessageTopNav from '@/components/message/MessageTopNav'
export default {
  components: { MessageItem, MessageTopNav },
  setup() {
    const userMessage = {
      name: '系统消息',
      avaUrl: 'https://cdn.max-c.com/heybox/profile/avatar/heygirl_13.png',
      message: [
        {
          text: '这是一条测试信息111',
        timestamp: Date.parse(new Date()) / 1000 - 600
        },
        {
          text: '这是一条测试信息',
          timestamp: Date.parse(new Date()) / 1000 - 600
        }
      ]
    }
    const friendMessage = {
      name: '好友消息',
      avaUrl: 'https://cdn.max-c.com/heybox/profile/avatar/heygirl_13.png',
      message: [
        {
          text: '你好啊！',
          timestamp: Date.parse(new Date()) / 1000 - 800
        },
        {
          text: '这是一条测试信息',
          timestamp: Date.parse(new Date()) / 1000 - 600
        }
      ]
    }
    const messageList = [userMessage, friendMessage]
    return{
      MessageItem, userMessage, MessageTopNav, friendMessage, messageList
    }
  }
}
</script>

<style lang="less" scoped>
.messageView{
  .blank{
    height: 1.2rem;
  }
}
</style>
