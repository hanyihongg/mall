<template>
  <div class="cart-bottom-nav">
    <div class="checkall">
      <check-button class="checkbutton" :is-checked="selectAll" ref="checkbutton" @click.native="selectClick" />
      <span>全选</span>
    </div>

    <div class="totalPrice">合计：{{totalPrice}}</div>
    <div class="caculate" @click="caculateClick">去计算</div>



  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomNav",

  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters({
      cartlist: "cartList",
    }),
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked === true;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    selectAll() {
      return !(
        !this.cartlist.length ||
        this.cartlist.find((item) => {
          return item.checked === false;
        })
      );
    },
  },
  methods: {
    selectClick() {
      if(this.selectAll){
        for(let i in this.cartlist){
          this.cartlist[parseInt(i)].checked = false
        }
      }else{
        for(let i in this.cartlist){
          this.cartlist[parseInt(i)].checked = true
        }
      }
    },
    caculateClick() {
     if(!this.cartlist.find(item => {return item.checked === true})){
       this.$toast.show('请选择你要买的商品')
     }
    }
  },
};
</script>

<style scoped>
.cart-bottom-nav {
  height: 40px;
  position: relative;
  display: flex;
  background-color: #f9f9f9;
}
.checkall,
.totalPrice {
  margin: auto 0;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.checkall {
  padding: 0px 5px;
}

.totalPrice {
  margin: 0px 30px;
}
.caculate {
  width: 90px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: var(--color-tint);
  position: absolute;
  bottom: 0;
  right: 0;
}
.checkbutton {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>