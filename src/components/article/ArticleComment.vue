<template>
  <div class="comment-section">
    <div class="nav">
      <p class="nav-title">评论区</p>
    </div>
    <div class="comment-item">
      <div class="left">
        <img src="https://cdn.max-c.com/heybox/profile/avatar/heygirl_13.png" alt="">
      </div>
      <div class="right">
        <div class="inner-section-1">
          <div class="name-box">
            <p class="name">
              肾仔肾仔
            </p>
            <p class="time">7天前</p>
          </div>
          <div class="thumb-box">
            <img src="../../assets/thumb.svg" alt="">
            <p class="like-number">693</p>
          </div>
        </div>
        <p class="inner-section-2">
          我会坚定不移贯彻落实白嫖到底的方针一百年不动摇，有好兄弟跟我一起的，就是不想在epic上花钱
        </p>
      </div>
    </div>
    <div class="comment-item">
      <div class="left">
        <img src="https://imgheybox.max-c.com/avatar/2022/03/21/c36115701e117ef54d8607ce1982bfc9.jpeg" alt="">
      </div>
      <div class="right">
        <div class="inner-section-1">
          <div class="name-box">
            <p class="name">
              sc005x
            </p>
            <p class="time">7天前</p>
          </div>
          <div class="thumb-box">
            <img src="../../assets/thumb.svg" alt="">
            <p class="like-number">97</p>
          </div>
        </div>
        <p class="inner-section-2">我宣布：育碧暂时获得折学家称号</p>
      </div>
    </div>
    <div class="message">已加载全部评论</div>
  </div>
</template>

<style lang="less" scoped>
.comment-section {
  position: relative;
  padding-top: 4px;
  width: 100%;

  .nav {
    position: relative;
    padding: 14px 10px;

    ::before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 4px;
      background: #fafbfc;
    }

    .nav-title {
      font-size: 14px;
      font-weight: 700;
    }
  }

  .comment-item {
    position: relative;
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
    padding: 14px 0;
    border-top: 1px solid #ccc;

    .left {
      padding: 0 10px;

      img {
        height: 34px;
        width: 34px;
        border-radius: 50%;
      }
    }

    .right {
      -webkit-box-flex: 1;
      flex: 1;
      width: 0;
      padding-right: 10px;

      .inner-section-1 {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-between;
        -webkit-box-pack: justify;

        .name-box {
          .name {
            font-size: 14px;
            line-height: 18px;
            font-weight: 600;
            margin-right: 3px;
            max-width: 160px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #14191e;
          }

          .time {
            font-size: 12px;
            color: #8c9196;
          }
        }

        .thumb-box {
          display: flex;
          -webkit-box-align: center;
          align-items: center;

          img {
            transform: translateY(-1px);
            width: 20px;
            height: 20px;
          }

          .like-number {
            margin: 0 6px;
            font-size: 12px;
            color: #8c9196;
          }
        }
      }
    }
  }

  .message{
    display: flex;
    height: 3rem;
    font-size: 0.28rem;
    color: #cccccc;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
