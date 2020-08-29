<template>
  <div class="shopinfo">
      <div class="info-one">
        <div class="shoplogo">
          <img :src="shops.logo" alt />
        </div>
        <span class="name">{{shops.name}}</span>
      </div>

      <div class="info-two">
        <div class="baseinfo">
          <div class="sells">
            <div class="count">{{shops.sells}}</div>
            <div>总销量</div>
          </div>
          <div class="goodsCount">
            <div class="count">{{shops.goodsCount}}</div>
            <div>全部宝贝</div>
          </div>
        </div>

        <div class="message" v-if="shops.score">
          <div v-for="(item,index) in shops.score" :key="index">
            <div class="message-item">
              <span v-if="item.name">{{item.name}}</span>
              <span class="scroe" :style="{color: item.isBetter? 'red':'green'}">{{item.score}}</span>
              <span class="better" :class="{active:item.isBetter}">{{item.isBetter? '高':'低'}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="enter">
        <a href="#">
          <button class="btn">进店逛逛</button>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: "DetailShop",
  props:{
    shops: {
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shopinfo {
  color: #000;
  font-size: 10px;
  padding: 5px;
  margin: 0px 5px;
  border-bottom: 2px solid #eee;
}
.info-one {
  height: 35px;
  line-height: 35px;
}
.shoplogo {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ccc;
  height: 30px;
  text-align: center;
}

.shoplogo img {
  width: 100%;
  height: 100%;
}
.name {
  padding: 5px;
  font-size: 13px;
  vertical-align: text-bottom;
}
.info-two {
  display: flex;
  text-align: center;
}

.baseinfo {
  flex: 1;
  border-right: 1px solid #eee;
}

.message {
  flex: 1;
  /* border:1px solid #000; */
}
.sells,
.goodsCount {
  display: inline-block;
  padding: 4px 8px;
}
.sells .count,
.goodsCount .count {
  padding: 5px 0px;
  font-size: 13px;
}

.message-item {
  margin-bottom: 8px;
}
.message-item span {
  display: inline-block;
  margin-right: 5px;
}
.message-item .scroe {
  width: 22px;
}
.better {
  color: #fff;
  background-color: green;
}
.active {
  color: #fff;
  background-color: red;
}
.enter{
  margin:10px 0px;
  text-align: center;
  line-height: 20px;

}
a {
  display: inline-block;
}
.btn {
  border-radius: 5px;
  width: 100px;
  height: 20px;
  outline: none;
  border: none;
}
</style>