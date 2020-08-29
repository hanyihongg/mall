<template>
  <div class="tab-control-detail">
    <good-list class="goodlist" :goods="detaillist"> 
    </good-list>
  </div>
</template>

<script>
import GoodList from 'components/content/goodlist/GoodList'


export default {
  name: "TabControlDetail",
  props: {
    detaillist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodList,
  }
}
</script>

<style scoped>
.tab-control-detail{
  position: relative;
  width:240px;
}
.goodlist{
  width:100%;
  height:100%;
}

</style>