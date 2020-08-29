<template>
  <div class="gooditem" @click="detailId">
    <img v-lazy="item.img || showImage " @load="loadImg" />
    <div>
      <p>{{item.title}}</p>
      <span class="price">{{showPrice || item.price}}</span>
      <span class="cfav">
        {{item.cfav}}
        <img src="~assets/img/goods/cfav.png" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.item.image || this.item.show.img;
    },
    showPrice() {
      return this.item.price;
    },
  },
  methods: {
    loadImg() {
      if (this.$route.path.indexOf("/home")) {
        this.$bus.$emit("homeitemLoadImg");
      }else if(this.$route.path.indexOf('/detail')){
        this.$bus.$emit("detailitemLoadImg")
      }else if(this.$route.path.indexOf('category')){
        this.$bus.$emit("categoryitemLoadImg")
      }
    },
    detailId() {
      this.$router.push("/detail/" + (this.item.iid || this.item.shop_id));
    },
  },
};
</script>

<style scoped>
.gooditem {
  position: relative;
  width: 48%;
  font-size: 12px;
  margin-bottom: 2px;
  text-align: center;
}
.gooditem img {
  border-radius: 5px;
  width: 100%;
  height:86%;

}
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(51, 51, 51);
}
.price {
  display: inline-block;
  color: var(--color-high-text);
  font-size: 13px;
  font-weight: 700;
}
.cfav {
  display: inline-block;
  margin-left: 10px;
}
.cfav img {
  display: inline-block;
  width: 11px;
  height: 11px;
  vertical-align: middle;
}
</style>