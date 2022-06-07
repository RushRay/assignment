<template>
  <div class="topNav">
    <div class="back" @click="$router.back()">
      <img src="@/assets/search/back.svg" alt="">
    </div>
    <div class="mid">
      <span>设置</span>
    </div>
  </div>
  <div class="content">
    <van-cell-group>
      <van-cell center title="头像">
        <template #value>
          <van-uploader :after-read="onRead" multiple :max-count="1">
            <img :src="userInfo.imgUrl" alt="">
          </van-uploader>
        </template>
      </van-cell>
      <van-cell title="设置昵称" >
        <template #value>
          <input style="border-color: white; border-style: dashed" :placeholder="userInfo.nickname" v-model="data.userNickname"
                 @keydown.enter="updateNickname">
        </template>
      </van-cell>
      <van-cell title="设置签名" >
        <template #value>
          <input style="border-color: white; border-style: dashed" :placeholder="userInfo.sign" v-model="data.userSign"
          @keydown.enter="updateSign">
<!--          <button @click="updateSign" style="width: 100%;height: 3px"/>-->
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import store from "@/store";
import axios from 'axios'
import {onMounted, reactive} from "vue";

export default {
  setup() {
    const data = reactive({
      userSign: "",
      userNickname: ""
    })
    const userInfo = store.state.userInfo
    onMounted(() => {
      let user = {
        username: userInfo.username
      }
      axios({
        method: 'get',
        url: 'http://localhost:3000/api/user/find',
        params: user
      }).then(res => {
        console.log(res.data)
        userInfo.imgUrl = res.data[0].avaUrl
        userInfo.sign = res.data[0].sign
        userInfo.nickname = res.data[0].nickName
        store.state.userInfo.imgUrl = res.data[0].avaUrl
        store.state.userInfo.sign = res.data[0].sign
        store.state.userInfo.nickname = res.data[0].nickName
      })
    })
    const onRead = (file) => {
      let formData = new FormData()
      formData.append('avatar', file.file)
      formData.append('username', userInfo.username)
      axios.post('http://localhost:3000/api/user/upload', formData, {
        headers: {
          'enctype': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res.data)
        let user = {
          username: userInfo.username
        }
        axios({
          method: 'get',
          url: 'http://localhost:3000/api/user/find',
          params: user
        }).then(res => {
          console.log(res.data)
          userInfo.imgUrl = res.data[0].avaUrl
          store.state.userInfo.imgUrl = res.data[0].avaUrl
        })
      })
    }
    const updateNickname = () => {
      let user = {
        username: userInfo.username,
        nickName: data.userNickname
      }
      userInfo.nickname = user.nickName
      store.state.userInfo.nickname = user.nickName

      axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/updateNickName',
        params: user
      })
    }
    const updateSign = () => {
      let user = {
        username: userInfo.username,
        sign: data.userSign
      }
      console.log(user)
      userInfo.sign = user.sign
      store.state.userInfo.sign = user.sign
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/updateSign',
        params: user
      })
    }
    return{
      userInfo,
      onRead,
      data,
      updateSign,
      updateNickname
    }
  }
}
</script>

<style lang="less" scoped>
.topNav{
  display: flex;
  width: 7.5rem;
  height: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0;
  background-color: white;
  border-bottom: 1px solid #ccc;
  .back{
    img{
      width: 0.6rem;
      height: 0.6rem;
      margin: 0 0.2rem;
    }
  }
  .mid{
    width: 100vw;
    font-size: 0.4rem;
    span{
      margin-left: 2.2rem;
    }
  }
}
.content{
  img{
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }
}
</style>
