<template>
  <MeNavBar/>
  <div class="blank" />
  <MeDetail/>
  <MeCard/>
  <div v-for="item in gameList" :key="item">
    <GameItem :gameInfo=item />
  </div>
  <div class="bottomBlank" />
</template>

<script>
import MeNavBar from '@/components/me/MeNavBar'
import MeDetail from "@/components/me/MeDetail"
import MeCard from '@/components/me/MeCard'
import GameItem from "@/components/GameItem";

export default {
  components: { MeNavBar, MeDetail, MeCard, GameItem },
  setup () {
    const gameInfo = {
      avaUrl: 'https://cdn.max-c.com/heybox/game/header/39140_BpP6e.jpg',
      name: '最终幻想7',
      playtime: '672 h',
      achieve: '12',
      achievecount: '12'
    }
    const gameInfo1 = {
      avaUrl: 'https://cdn2.unrealengine.com/egs-kenabridgeofspirits-emberlab-s5-1920x1080-182980366.jpg',
      name: '科娜：精神之桥',
      playtime: '86 h',
      achieve: '56',
      achievecount: '97'
    }
    const gameList = [gameInfo, gameInfo, gameInfo1, gameInfo1, gameInfo1]
    return{ MeNavBar, MeDetail, MeCard, GameItem, gameInfo, gameInfo1, gameList }
  }
}
</script>

<style lang="less" scoped>
.blank{
  margin-top: 1.3rem;
}
.bottomBlank{
  margin-bottom: 0.9rem;
}
</style>
