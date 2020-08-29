<template>
  <div class="detailnav">
    <nav-bar>
      <div class="back" slot="left" @click="backHome">
        <img src="~assets/img/navbar/back.png" alt="">
      </div>
      <div class="title" slot="center">
        <div class="titleitem" v-for="(item,index) in titles" :key="index" :class="{active:index === isActive}" @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNav",
  // props: {
  //   tabIndex: {
  //     type: Number,
  //     default: 0
  //   }
  // },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      isActive: 0
    };
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick (index) {
      this.isActive = index
      this.$emit('navClick', index)
    },
    backHome (){
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>

.title{
  display: flex;
  font-size: 13px;
}
.titleitem{
  flex: 1;
}
.active{
  color: var(--color-high-text)
}
.back img{
  width:20px;
  height: 20px;
  vertical-align: middle;
}
</style>

