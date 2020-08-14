<template>
  <nav-bar class="nav-home">
    <a slot="left" href="#">
      <img src="~assets/img/navbar/nav-left.png" alt="">
    </a>
    <div slot="center">
      <input type="text">
    </div>
    <a slot="right" href="#">
      <img src="~assets/img/navbar/nav-right.png" alt="">
    </a>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import {getHomeMultidata} from 'network/home'

export default {
  name: "Home",
  data () {
    return {
      result: null,
      banners: null,
      recommends: null
    }
  },
  components: {
    NavBar,
  },
  created () {
    getHomeMultidata().then(res => {
      // console.log(res)
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(this.banners)
    })
  }
};
</script>

<style>
.nav-home {
  background-color: --var(--color-background);
}
a {

  display: inline-block;
}
a img{
  width:30px;
  height:25px;
  vertical-align:middle;
}
</style>