<template>
  <div class="goodlist">
    <good-list-item :item="item" v-for="(item, index) in goods" :key="index"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";

export default {
  name: "GoodList",
  props: ["goods"],
  components: {
    GoodListItem,
  },
};
</script>

<style scoped>
.goodlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>