<template>
  <div class="catetory-list">
    <category-list-item
      v-for="(item,index) in navlist"
      :key="index"
      :listitem="item"
      :class="{active:index === isActive}"
      @click.native="currentActive(index)"
    />
  </div>
</template>

<script>
import CategoryListItem from "./CategoryListItem";
export default {
  name: "CategoryList",
  props: {
    navlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isActive: 0,
    };
  },
  components: {
    CategoryListItem,
  },
  methods: {
    currentActive(index) {
      this.isActive = index;
      this.$emit('getSubcategory',index)

      
    },
  },
};
</script>
<style scoped>
.active {
  font-weight: 600;
  color: var(--color-high-text);
  border-left: 2px solid var(--color-high-text);
  background:#fff;
}
</style>

