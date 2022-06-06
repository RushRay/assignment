<template>
<!--  <home-nav></home-nav>-->
  <router-view/>
  <tab-bar v-show="$route.meta.showTabBar"></tab-bar>
</template>

<style lang="less">
</style>

<script>
import TabBar from "@/components/TabBar";
export default {
  components: { TabBar },
  setup() {
    return { TabBar }
  }
}
</script>
