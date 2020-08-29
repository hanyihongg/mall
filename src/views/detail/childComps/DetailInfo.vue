<template>
   <div class="detailInfo">
      <div class="desc">
        <div class="linebar start">
          <i class="i-start"></i>
        </div>
        <div class="shopdesc">{{details.desc}}</div>
        <div class="linebar end">
          <i class="i-end"></i>
        </div>
      </div>

      <div class="detail-image" v-if="details.image">
        <span>{{details.key}}</span>
        <div  class="image" v-for="index in details.image.length-1" :key="index">
          <img :src="details.image[index-1]" @load="loadImage" >
        </div>
        <img class="ruledesc" :src="details.image[details.image.length-1]" alt="">
      </div>
    </div>

</template>

<script>
export default {
  name: "DetailInfo",
  data() {
    return {
      counter: 0
    }
  },
  props: {
    details: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  
  methods: {
    loadImage () {
      this.counter += 1;
      if(this.counter === this.details.image.length-1){
        this.$emit('imageLoad')

      }
    }
  }
  
}
</script>

<style scoped>
.detailInfo {
  padding:0px 2px;
  font-size: 12px;
  color: #000;
}
.desc{
  position: relative;
  padding:5px 0px;
  margin-top:10px;
  /* border:1px solid #000; */
}
.shopdesc {
  position: relative;
  padding: 8px 0px;
  /* border:1px solid #000; */

}
.linebar {
  position: relative;
  width: 100px;
  height: 1px;
  background-color: #a3a3a5;
}
.linebar.start{
  position: absolute;
  top:0px;
  left:0px;
}
.linebar.end{
  position: absolute;
  bottom:0px;
  right:0px;
}
.linebar i {
  position: absolute;
  top: -2.5px;
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #000;
  border-radius: 20%;
}
.i-start{
  left:0
}
.i-end{
  right:0
}
.detail-image{
  margin-top:10px;
}
.detail-image span{
  display: inline-block;
  margin:3px 0px;
}
.image{
  width:100%;
  height:350px;
}
.image img{
  width:100%;
  height:100%;
}
.ruledesc{
  width:100%;
  height:150px;
}
</style>