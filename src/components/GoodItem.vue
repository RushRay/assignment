<template>
  <div class="goodItem">
    <div class="goodTop">
      <img :src="goodDetail.imgUrl" alt=""/>
    </div>
    <div class="goodBottom">
      <div class="name">{{goodDetail.name}}</div>
      <div class="price">{{goodDetail.price}}</div>
      <div class="tags">
        <div v-for="(item, i) in goodDetail.tags" :key="i">
          <div class="tag">
            <div v-if="item.name === '促销'" style="background-color: green">{{item.name}}</div>
            <div v-else-if="item.name === '热门'" style="background-color: red">{{item.name}}</div>
            <div v-else style="background-color: #666">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['goodDetail'],
  setup() {
    return{
    }
  }
}
</script>

<style lang="less" scoped>
.goodItem{
  width: 3.5rem;
  margin-top: 0.1rem;
  .goodTop{
    img{
      width: 3.5rem;
      height: 1.8rem;
      border-radius: 0.2rem;
    }
  }
  .goodBottom{
    .name{
      font-size: 0.28rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .price{
      font-size: 0.2rem;
    }
    .tags{
      display: flex;

      .tag{
        font-size: 0.2rem;
        margin-right: 0.1rem;
        padding: 2px;
        background-color: #666;
        color: white;
      }
    }
  }
}
</style>
