<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message, duration=1000){
      this.message = message;
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      },duration) 
    }
  }
}
</script>

<style scoped>
.toast{
  position:fixed;
  left:50%;
  top:50%;
  padding:8px 10px;
  transform: translate(-50%,-50%);
  z-index: 999;
  background:rgb(0, 0, 0, 0.75);
  color:#fff
}
</style>