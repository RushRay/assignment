<template>
  <home-nav/>
  <van-swipe class="my-swipe" indicator-color="white" lazy-render autoplay="5000">
    <van-swipe-item v-for="item in imgUrl" :key="item">
      <img :src="item" alt="">
    </van-swipe-item>
  </van-swipe>
  <div v-for="(item, i) in articles" :key="i">
    <ListItem :articleInfo="item"/>
  </div>
  <div class="bottomBlank"/>
</template>

<script>
import ListItem from "@/components/ListItem";
import HomeNav from "@/components/home/HomeNav";

export default {
  components: {HomeNav, ListItem},
  setup() {
    const articles = [
      {
        title: "你好！我觉得你应该进来看看",
        timestamp: Date.parse(new Date()) / 1000 - 100,
        tags: ["CS:GO"],
        imgUrl: "https://imgheybox.max-c.com/web/2022/05/22/9e6adb5a876b3fec3ee834ac134b938d/thumb.jpeg",
        commentNums: 1
      },
      {
        title: "你所不知道的小道消息",
        timestamp: Date.parse(new Date()) / 1000 - 400,
        tags: ["数码硬件"],
        imgUrl: "https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-s3-2560x1440-dce5ab087b4c.jpg",
        commentNums: 23
      },
      {
        title: "震惊！XXXXXXXXXXX",
        timestamp: Date.parse(new Date()) / 1000 - 800,
        tags: ["杂谈"],
        imgUrl: "https://imgheybox.max-c.com/web/2022/05/22/9e6adb5a876b3fec3ee834ac134b938d/thumb.jpeg",
        commentNums: 46
      }, {
        title: "恭喜RNG夺得2022MSI冠军！",
        timestamp: Date.parse(new Date()) / 1000 - 1200,
        tags: ["英雄联盟"],
        imgUrl: "https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-s3-2560x1440-dce5ab087b4c.jpg",
        commentNums: 50
      }, {
        title: "配置教程",
        timestamp: Date.parse(new Date()) / 1000 - 1500,
        tags: ["APEX"],
        imgUrl: "https://imgheybox.max-c.com/web/2022/05/22/9e6adb5a876b3fec3ee834ac134b938d/thumb.jpeg",
        commentNums: 120
      }, {
        title: "你好！1234567898546",
        timestamp: Date.parse(new Date()) / 1000 - 2000,
        tags: ["数码硬件"],
        imgUrl: "https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-s3-2560x1440-dce5ab087b4c.jpg",
        commentNums: 96
      }
    ]
    const imgUrl = [
      "https://cdn.max-c.com/heybox/game/header/1330470_BmeMb.jpg",
      "https://cdn.max-c.com/heybox/game/header/1091500_3olJW.jpg",
      "https://imgheybox.max-c.com/oa/2022/03/24/df2ec972769b25c09d089e74181dde4f.jpeg",
      "https://cdn.max-c.com/heybox/game/header/1252330_WOfyf.jpg"
    ]
    return {ListItem, HomeNav, articles, imgUrl}
  }
}
</script>

<style lang="less" scoped>
.my-swipe {
  margin-top: 2.16rem;

  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;

    img {
      width: 100%;
      height: 200px;
      display: block;
      //-webkit-user-select: none;
      //margin: auto;
      //cursor: zoom-in;
      //background-color: hsl(0, 0%, 90%);
      //transition: background-color 300ms;
    }
  }
}

.bottomBlank {
  height: 0.9rem;
}
</style>
