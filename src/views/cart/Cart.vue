<template>
  <div id="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <cart-list />

    <cart-bottom-nav/>
    
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomNav from './childComps/CartBottomNav'
import { mapGetters } from "vuex";
import CheckButton from "components/content/checkbutton/CheckButton";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CheckButton,
    CartBottomNav
  },
  computed: {
    ...mapGetters({
      length: "cartListLength",
    }),
  },
  
};
</script>

<style scoped>
#cart{
  height:100vh;
}
.navbar {
  background: var(--color-tint);
  color: #fff;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

</style>