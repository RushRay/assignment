<template>
  <div class="articleView">
    <ArticleTopNav/>
    <div class="blank" />
    <ArticleContent/>
    <ArticleComment/>
  </div>
</template>

<script>
import ArticleContent from '@/components/article/ArticleContent'
import ArticleComment from '@/components/article/ArticleComment'
import ArticleTopNav from '@/components/article/ArticleTopNav'
export default {
  components: {ArticleContent, ArticleComment, ArticleTopNav},
  setup() {
    return{
      ArticleContent, ArticleComment, ArticleTopNav
    }
  }
}

</script>

<style lang="less" scoped>
.articleView{
  .blank{
    height: 1rem;
  }
}
</style>
