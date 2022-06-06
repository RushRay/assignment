<template>
  <div class="homeNav">
    <HomeNavBar/>
    <home-swipe/>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar";
import HomeNavBar from "@/components/home/HomeNavBar"
import homeSwipe from "@/components/home/HomeSwipe";

export default {
  components: {HomeNavBar, homeSwipe },
  setup() {
    return { TabBar, homeSwipe }
  }
}
</script>

<style lang="less" scoped>
.homeNav{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
}

</style>
