<template>
  <div class="sub-item">
    <img :src="subitem.image" >
    <p>{{subitem.title}}</p>
  </div>
</template>
<script>
export default {
  name: "SubCategoryItem",
  props:{
    subitem:{
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>
<style scoped>
.sub-item{
  margin-top:5px;
  font-size:11px;
  text-align: center;
}
img{
  width:51px;
  height:51px;
}
p{
  white-space:wrap;
  padding:5px 0px;
  width:51px;
}
</style>