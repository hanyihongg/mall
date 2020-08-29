<template>
  <div id="cartlist">


    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartlist" :key="index" :itemInfo="item"/>
    </scroll>

  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from './CartListItem';
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters({    
      cartlist: 'cartList'
    }),
  },
  
};
</script>

<style scoped>
#cartlist {
  overflow: hidden;
  height: calc(100% - 93px - 40px);

}

.content {
  height: 100%;
}

</style>