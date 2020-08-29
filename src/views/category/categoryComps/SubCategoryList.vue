<template>
  <div class="sub-category">
    <sub-category-item class="subitem" v-for="(item,index) in sublist" :key="index" :subitem="item"/>
  </div>
</template>

<script>
import SubCategoryItem from './SubCategoryItem'
export default {
  name:"SubCategoryList",
  props: {
    sublist:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components: {
    SubCategoryItem
  }
}
</script>

<style scoped>
.sub-category{
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  justify-content:flex-start;

}
.subitem{
  padding:4px;

}
</style>