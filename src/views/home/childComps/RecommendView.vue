<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image">
        <div class="rec-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  },
}
</script>

<style scoped>
.recommend{
  display: flex;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex: 1;
  padding: 10px;
  font-size: 13px;
  text-align: center;
}
.recommend-item a{
  display: inline-block;
}
.recommend-item a img{
  width:100%;
  height:100%;
}
.rec-title{
  margin-top:3px;
}
</style>