<template>
  <div class="core-entry">
    <div class="core-item">
      <img src="~assets/img/profile/message.png" alt="">
      <span>我的消息</span>
    </div>
    <div class="core-item">
      <img src="~assets/img/profile/points.png" alt="">
      <span>积分商城</span>    
    </div>
    <div class="core-item">
      <img src="~assets/img/profile/vip.png" alt="">
      <span>会员卡</span>   
    </div>
    <div class="core-item cart">
      <img src="~assets/img/profile/cart.png" alt="">
      <span>我的购物车</span>   
    </div>
    <div class="core-item">
      <img src="~assets/img/profile/load.png" alt="">
      <span>下载购物APP</span>   
    </div>
  </div>
</template>

<script>

export default {
  name:"ProfileCoreEntry"
}
</script>

<style scoped>
.core-item{
  display: flex;
  padding:8px;
  align-items: center;
  border-top:1.5px solid #eee;
}
img{
  width:17px;
  height:17px;
}
span{
  padding-left:5px;
  flex: 1;
  font-size: 12px;
}
.core-item.cart{
  border-top:10px solid #eee;
}
</style>