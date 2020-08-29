<template>
  <div class="list-item">
    <div class="title">{{listitem.title}}</div>
  </div>
</template>
<script>
export default {
  name: "CategoryListItem",
  props: {
    listitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.list-item {
  width:80px;
  font-size: 12px;
  text-align: center;
  background:#f8f8f8;
  
}
.title{
  padding: 10px 13px;
}
</style>