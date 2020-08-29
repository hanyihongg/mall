<template>
  <div class="detailInfo">
        <p class="title">{{goods.title}}</p>
        <div class="priceInfo">
          <span class="newprice">{{goods.newprice}}</span>
          <span class="lowPrice">￥{{goods.lowPrice}}</span>
          <span class="desc" :style="{backgroundColor:goods.descColor}">{{goods.desc}}</span>
        </div>
        <div class="columns">
          <span  v-for="(item,index) in goods.columns" :key="index">
            <span>{{item}}</span>
          </span>
        </div> 
        <div class="servicesInfo" v-if="goods.services" >
          <!-- 0,1,2,3,4 -->
          <div class="services-item" v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index].icon" alt="">
            <span>{{goods.services[index].name}}</span>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detailInfo{
  padding:5px;
  font-size: 10px;
}
.detailInfo .title{
  font-size: 13px;
  color: #000;

}
.priceInfo{
  margin:8px 0px
}
.priceInfo span{
  display: inline-block;
  margin-right:3px;
}
.newprice{
  font-size: 15px;
  color: var(--color-high-text);

}

.lowPrice{
  
  text-decoration-line:line-through;
}
.desc{
  padding:1px 4px;
  font-size:10px;
  color:var(--color-background);
  border-radius: 5px;
  vertical-align: top;
}
.columns{
  padding:8px 0px;
  display: flex;
  justify-content: space-between;

  border-bottom:2px solid #eee;
}
.servicesInfo{
  padding:15px 0px;
  border-bottom:2px solid #eee;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color:#000;
}


.services-item img{
  width:10px;
  height: 10px;

}
</style>