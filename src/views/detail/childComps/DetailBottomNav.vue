<template>
  <div id="bottomnav">
    <div class="bar-item bar-left">
      <div class="service">
        <img src="~assets/img/detail/service.png" alt="">
        <span class="text">客服</span>
      </div>
      <div class="service">
        <img src="~assets/img/detail/shop.png" alt="">
        <span class="text">店铺</span>
      </div>
      <div class="service">
        <img src="~assets/img/detail/cafv.png" alt="">
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="select add-cart" @click="addToCart">加入购物车</div>
      <div class="select buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomNav",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
#bottomnav{
  height:49px;
  background:#fff;
  position: relative;
  bottom:49px;
  left:0;
  right:0;
  display: flex;
  font-size: 11px;
  text-align: center;
  line-height: 49px;
}

.bar-item{
  flex: 1;
}
.bar-left{
  display: flex;
  /* background: blueviolet; */
}
.bar-right{
  display: flex;
}
.service{
  
  text-align: center;
  flex:1;
  position: relative;
 
}
.service img{

  width:18px;
  height:18px;

}
.text{
  display: inline-block;
  position:absolute;
  top:15px;
  right:15.5px;
}
.select{
  font-size: 13px;
  flex:1;
  font-weight: 500;
}

.add-cart{
  background:#ffce00;
}
.buy{
  background:var(--color-tint);
  color:#fff;
}

</style>