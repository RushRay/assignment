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
<!--          <img :src="userInfo.imgUrl" alt="">-->
          <van-uploader :after-read="onRead" multiple :max-count="1">
            <img :src="userInfo.imgUrl">
          </van-uploader>
        </template>
      </van-cell>
      <van-cell title="设置昵称" value="31901124" />
      <van-cell title="设置签名" />
    </van-cell-group>
  </div>
</template>

<script>
import store from "@/store";
import axios from 'axios'

export default {
  setup() {
    const userInfo = store.state.userInfo
    const onRead = (file) => {
      // console.log(file)
      let formData = new FormData()
      formData.append('avatar', file.file)
      formData.append('username', userInfo.username)
      // console.log(formData)
      // axios({
      //
      // })
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
        // axios.get('http://localhost:3000/api/user/find', user).then(
        //     res => {
        //       console.log(res.data)
        //       // userInfo.imgUrl = res.data.avaUrl
        //       // store.state.userInfo.imgUrl = res.data.avaUrl
        //     }
        // )

      })
    }
    return{
      userInfo, onRead
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
