<template>
  <div class="order-act">
    <div class="act">
      <p>
        <span class="money">0.00</span>元
      </p>
      <p>我的余额</p>
    </div>
    <div class="act center">
      <p>
        <span class="money">0</span>个
      </p>
      <p>我的优惠</p>
    </div>
    <div class="act">
      <p>
        <span class="money">0</span>分
      </p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderAct",
};
</script>
<style scoped>
.order-act {
  font-size: 12px;
  display: flex;
  border-bottom:10px solid #eee;
}
.act {
  flex: 1;
  padding:10px;
  text-align: center;
}
.center{
  border-left:1.5px solid #eee;
  border-right:1.5px solid #eee;
}
.money {
  color: rgb(241, 107, 98);
  font-weight: 700;
  font-size: 20px;
}
</style>