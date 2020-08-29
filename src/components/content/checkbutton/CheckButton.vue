<template>
  <div class="checkbutton" :class="{active: isChecked}">
    <div class="check-img" v-show="isChecked"></div>
  </div>
</template>

<script>
export default {
  name: "CheckButton", 
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
 
}
</script>

<style scoped>
.checkbutton{
  border-radius: 50%;
  border:1px solid #bbb;
}
.check-img{
  width:100%;
  height:100%;
  background-image: url('~assets/img/cart/yes.png');
  background-position: -8px -8px;
}

.active{
  background:var(--color-high-text)
}
</style>