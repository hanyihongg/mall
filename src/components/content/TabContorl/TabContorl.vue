<template>
  <div class="tab-contorl">
    <div class="tab-contorl-item" v-for="(item,index) in titles" :key="index" @click="ClickActive(index)">
      <span :class="{active:index === ActiveCurrent}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContorl",
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      ActiveCurrent: 0
    }
  },
  methods: {
    ClickActive (index) {
      this.ActiveCurrent = index;
      this.$emit('ItemClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-contorl{
    display: flex;
    height: 40px;
    line-height: 40px;
  }
  .tab-contorl-item {
    flex: 1;
    text-align: center;
  }
  .tab-contorl-item span{
    padding: 5px;
    font-size: 14px;
  }
  .active{
    color: var(--color-tint);
    border-bottom: 2px solid var(--color-tint)
  }

</style>