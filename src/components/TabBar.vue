<template>
  <van-tabbar class="tabBar" v-model="active">
    <van-tabbar-item replace to="/">
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? icon01.active : icon01.inactive"  alt=""/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/message">
      <span>消息</span>
      <template #icon="props">
        <img :src="props.active ? icon02.active : icon02.inactive"  alt=""/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/shopping">
      <span>商城</span>
      <template #icon="props">
        <img :src="props.active ? icon03.active : icon03.inactive"  alt=""/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/me">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? icon04.active : icon04.inactive"  alt=""/>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(0);
    const icon01 = {
      active : require('@/assets/TabBar/icon01-active.svg'),
      inactive : require('@/assets/TabBar/icon01-inactive.svg')
    }
    const icon02 = {
      active : require('@/assets/TabBar/icon02-active.svg'),
      inactive : require('@/assets/TabBar/icon02-inactive.svg')
    }
    const icon03 = {
      active : require('@/assets/TabBar/icon03-active.svg'),
      inactive : require('@/assets/TabBar/icon03-inactive.svg')
    }
    const icon04 = {
      active : require('@/assets/TabBar/icon04-active.svg'),
      inactive : require('@/assets/TabBar/icon04-inactive.svg')
    }
    return {active, icon01, icon02, icon03, icon04}
  }
}
</script>

<style lang="less" scoped>

</style>
