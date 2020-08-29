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
export default {
  name: "HomeNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.nav-home {
  background-color: --var(--color-background);
}
.nav-home a {

  display: inline-block;
}
.nav-home a img{
  width:30px;
  height:25px;
  vertical-align:middle;
}
</style>
