<template>
  <div @click="btnClick" class="tab-bar-item">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="Activestyle"><slot name="item-text"></slot></div> 
  </div>
</template>

<script>
export default {
  name: "TabBarItem", 
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      
    };
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    Activestyle () {
      return this.isActive? {color: this.activeColor}:{}
    }

  },
  methods: {
    btnClick () {
      this.$router.push(this.path)
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img {
  width: 25px;
  height: 25px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>