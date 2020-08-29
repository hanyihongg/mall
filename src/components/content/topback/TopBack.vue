<template>
  <div class="topback" ref="topback">
    <img src="~assets/img/topback/topback.png" alt />
  </div>
</template>

<script>

export default {
  name: "TopBack"

};
</script>

<style scoped>
.topback {
  position: fixed;
  bottom: 60px;
  right:10px;
  background:#fff;
  width:32px;
  height:32px;
  border-radius: 50%;
}

</style>
