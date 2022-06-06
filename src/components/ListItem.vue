<template>
  <div class="article" @click="$router.push('/article')">
      <div class="left">
        <div class="title">
          <span>{{ articleInfo.title }}</span>
        </div>
        <div class="detail">
          <div class="detailLeft">
            <span class="detailLeftItem">{{ calTime(articleInfo.timestamp) }}</span>
            <span class="detailLeftItem">.</span>
            <span class="detailLeftItem">{{ articleInfo.tags[0] }}</span>
          </div>
          <div class="detailRight">
            <img class="icon" src="@/assets/comment.svg" alt="">
            <span>{{ articleInfo.commentNums }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img :src="articleInfo.imgUrl" alt>
      </div>
  </div>
</template>

<script>
export default {
  props: ['articleInfo'],
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
.article {
  display: flex;
  width: 7.5rem;
  height: 2rem;
  position: relative;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  .right {
    align-items: center;

    img {
      width: 2.8rem;
      height: 1.6rem;
      margin: 0.2rem;
      border-radius: 0.1rem;
    }
  }

  .left {
    width: 4.5rem;
    margin: 0.2rem;

    .title {
      color: #000;
      font-size: 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .detail {
      position: absolute;
      width: 4.1rem;
      bottom: 0.2rem;
      display: flex;
      color: #ccc;
      font-size: 0.2rem;
      align-items: flex-end;

      .detailLeft {
        display: flex;

        .detailLeftItem {
          margin-right: 0.08rem;
        }
      }

      .detailRight {
        display: flex;
        position: absolute;
        right: 0.2rem;

        .icon {
          margin: 0 0.1rem;
          width: 0.3rem;
          height: 0.3rem;
        }

      }
    }
  }
}
</style>
