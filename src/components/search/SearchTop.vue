<template>
  <div class="searchViewTop">
    <div class="searchViewTopNav">
      <div class="back" @click="$router.back()">
        <img src="../../assets/search/back.svg" alt="">
      </div>
      <div class="right">
        <van-search v-model="searchKeyword" :placeholder="placeholder" @keydown.enter="saveKeyWord" />
      </div>
    </div>
    <div class="history" v-show="keywordList.length > 0">
      <div class="historyTop">
        <div class="left">搜索历史</div>
        <div class="right" @click="clearKeywordList">
          <img class="icon" src="../../assets/search/clear.svg" v-show="keywordList.length > 0" alt=""/>
          <span class="text">清空</span>
        </div>
      </div>
      <div class="historyBottom">
        <div @click="historySearch(item)" class="keywordItem" v-for="(item, i) in keywordList" :key="i">{{ item }}</div>
      </div>
    </div>
    <div class="searchItemList">
      <div class="leftList">
        <div class="title">热门搜索</div>
        <div class="hotSearchItem" v-for="(item, i) in hotSearchList" :key="i">
          <div class="order" :style="colorList[i]" v-if="i < 4">{{i + 1}}</div>
          <div class="order" v-else style="color: #ccc">{{i + 1}}</div>
          <div class="itemName" @click="searchKeyWord(item)">{{item}}</div>
        </div>
      </div>
      <div class="rightList">
        <div class="title">热议话题</div>
        <div class="hotArgueItem" v-for="(item, i) in hotArgueList" :key="i" @click="saveKeyWord">
          <div class="order" :style="colorList[i]" v-if="i < 4">{{i + 1}}</div>
          <div class="order" v-else style="color: #ccc">{{i + 1}}</div>
          <div class="itemName" @click="searchKeyWord(item)">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {search} from "@/api";

export default {
  data: function () {
    return {
      placeholder: '请输入搜索内容',
      keywordList: [],
      searchKeyword: '',
      searchArticle: [],
      hotSearchList: this.$store.state.hotSearchList,
      hotArgueList: this.$store.state.hotArgueList,
      colorList: ['color: red', 'color: orange', 'color: blue', 'color: green']
    }
  },
  beforeMount () {
    this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : []
  },
  methods: {
    saveKeyWord: async function () {
      this.keywordList.push(this.searchKeyword)
      this.keywordList = Array.from(new Set(this.keywordList))
      if (this.keywordList.length > 5) {
        this.keywordList = this.keywordList.slice(this.keywordList.length - 5, this.keywordList.length)
      }
      localStorage.keywordList = JSON.stringify(this.keywordList)
      console.log(localStorage.keywordList)
      this.searchArticle = await search(this.searchKeyword)
    },
    searchKeyWord: async function (str) {
      this.searchKeyword = str
      this.keywordList.push(this.searchKeyword)
      this.keywordList = Array.from(new Set(this.keywordList))
      if (this.keywordList.length > 5) {
        this.keywordList = this.keywordList.slice(this.keywordList.length - 5, this.keywordList.length)
      }
      localStorage.keywordList = JSON.stringify(this.keywordList)
      console.log(localStorage.keywordList)
      this.searchArticle = await search(this.searchKeyword)
    },
    historySearch (keyword) {
      this.searchKeyword = keyword
      this.saveKeyWord()
    },
    clearKeywordList () {
      this.keywordList = []
      localStorage.keywordList = []
    },
  }
}
</script>

<style lang="less" scoped>
.searchViewTop{
  .searchViewTopNav{
    display: flex;
    align-items: center;
    margin: 0.2rem 0;
    .back{
      img{
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 0.2rem;
      }
    }
    .right{
      width: 100vw;
    }
  }

  .history{
    margin: 0.2rem;
    display: flex;
    flex-direction: column;
    .historyTop{
      width: 7.1rem;
      justify-content: space-between;
      align-items: center;
      margin: auto;
      display: flex;
      .left{
        font-size: 0.35rem;
        font-weight: 900;
      }
      .right{
        display: flex;
        align-items: center;
        .icon{
          width: 0.4rem;
          height: 0.4rem;
          margin: 0.3rem 0.1rem;
        }
        .text{
          color: #ccc;
          font-size: 0.28rem;
        }
      }
    }
    .historyBottom{
      color: #666;
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      .keywordItem{
        background-color: #eee;
        height: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 0.1rem;
        line-height: 0.6rem;
        margin: 0.2rem 0.1rem;
      }
    }
  }

  .searchItemList{
    width: 7.1rem;
    display: flex;
    justify-content: space-between;
    margin: auto;
    .leftList{
      width: 3.5rem;
      background-image: linear-gradient(#eee, #fff);
      border-top-left-radius: 0.2rem;
      border-top-right-radius: 0.2rem;
      .title{
        padding: 0.2rem 0 0.2rem 0.1rem;
        font-size: 0.35rem;
      }
      .hotSearchItem{
        display: flex;
        margin: 0.2rem 0 0.2rem 0.1rem;
        align-content: center;
        .order{
          margin-right: 0.2rem;
        }
      }
    }
    .rightList{
      width: 3.5rem;
      background-image: linear-gradient(#eee, #fff);
      border-top-left-radius: 0.2rem;
      border-top-right-radius: 0.2rem;
      .title{
        padding: 0.2rem 0 0.2rem 0.1rem;
        font-size: 0.35rem;
      }
      .hotArgueItem{
        display: flex;
        margin: 0.2rem 0 0.2rem 0.1rem;
        align-content: center;
        .order{
          margin-right: 0.2rem;
        }
      }
    }
  }
}

</style>
