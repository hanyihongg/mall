<template>
  <div class="comment">
    <p class="theme">
      <span>用户评价</span>
      <a class="more" href="#">更多</a>
    </p>

    <div class="comment-info">
      <div class="user-info">
        <img :src="comments.avatar" alt />
        <span>{{comments.uname}}</span>
      </div>
      <p class="content">{{comments.content}}</p>
      <p class="style">
        <span class="time">{{comments.time | dateShow}}</span>
        <span v-for="(item,index) in comments.style" :key="index">{{item}}</span>
      </p>
      <div class="image">
        <img :src="item" v-for="(item,index) in comments.image" :key="index" alt />
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name: "DetailCommentInfo",
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    dateShow(time) {
      const date = new Date(time * 1000);

      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
};
</script>

<style scoped>
.comment {
  font-size: 11px;
  padding: 10px 10px;
  color: #000;

}
.comment .theme {
  position: relative;
  padding: 8px 0px;
  border-bottom: 1.5px solid #eee;
}
.comment .theme .more {
  position: absolute;
  top: 8px;
  right: 10px;
  color: #000;
}

.user-info {
  padding: 10px 0px;
}
.user-info img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 8px;
}
.content {
  line-height: 15px;
  color:#555;
}
.time{
  padding-right:5px;
}
.style {
  margin: 10px 0px;
  color: #888;
}
.image img{
  width: 80px;
  height: 80px;
}
</style>