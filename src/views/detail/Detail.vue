<template>
  <div id="detail">
    <detail-nav class="detailnav" @navClick="navClick" :tab-index="tabIndex" ref="nav" />

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="controlScroll">
      <detail-swiper :swiperimage="swiperimage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shops="shops" />
      <detail-info :details="details" @imageLoad="imageLoad" />
      <detail-params ref="params" :params="params" />
      <detail-comment-info ref="comment" :comments="comments" />
      <good-list ref="recommend" :goods="recommends" />

      <ul>
        <li v-for="(item,index) in $store.state.cartList" :key="index">{{item}}</li>
      </ul>

    </scroll>

    <detail-bottom-nav @addToCart="addToCart"></detail-bottom-nav>

    <top-back @click.native="topBack" v-show="isShow"></top-back>
    <toast></toast>
  </div>
</template>
<script>
import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShop from "./childComps/DetailShop";
import DetailInfo from "./childComps/DetailInfo";
import DetailParams from "./childComps/DetailParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomNav from './childComps/DetailBottomNav'

import GoodList from "components/content/goodlist/GoodList";
import Scroll from "components/common/scroll/Scroll";
import Toast from "components/common/toast/Toast"


import {
  getDetail,
  Goods,
  Shops,
  Details,
  Params,
  Comments,
  getRecommend,
} from "network/detail";

import { debounce } from "common/utils";
import { topBackMixin} from 'common/mixin';
import { mapActions } from 'vuex'

export default {
  name: "Detail",
  mixins: [topBackMixin],
  data() {
    return {
      iid: null,
      swiperimage: [],
      goods: {},
      shops: {},
      details: {},
      params: {},
      comments: {},
      paramsOffsetTop: null,
      recommends: {},
      themeTopYs: [],
      getThemeTopY: null,
      tabIndex: 0,

    };
  },
  compute: {
    isBetter() {},
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailInfo,
    Scroll,
    DetailParams,
    DetailCommentInfo,
    GoodList,
    DetailBottomNav,
    Toast

  },
  created() {
    // console.log(this.$route.params)
    //1.保存id
    this.iid = this.$route.params.id;

    //2.请求详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      this.swiperimage = res.result.itemInfo.topImages;

      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);

      //获取店铺信息
      this.shops = new Shops(data.shopInfo);

      //获取商品信息
      this.details = new Details(data.detailInfo, data.itemParams);

      //获取商品参数
      this.params = new Params(data.itemParams);

      //获取评论信息
      if (data.rate.list) {
        this.comments = new Comments(data.rate.list[0]);
      }
    });

    //3.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  mounted() {
    const newRefresh = debounce(this.$refs.scroll.refresh, 20);
    this.$bus.$on("detailitemLoadImg", () => {
      newRefresh();
    });
  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh();

      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    },

    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 400);
    },

    controlScroll(position) {

      //是否显示topback按钮
      this.isShow = position.y < -1000

      //滑动不同的距离对应不同的标题
      const positionY = -position.y;

      for (let i in this.themeTopYs) {
        //这里得到的i 是 string型,化成Number
        const numberI = parseInt(i);

        if (
          this.tabIndex !== numberI &&
          positionY >= this.themeTopYs[numberI] &&
          positionY < this.themeTopYs[numberI + 1]
        ) {
          this.tabIndex = numberI;
          this.$refs.nav.isActive = numberI;
        }
      }
    },

    addToCart () {

      // 获取购物车数据信息
      const product = {}
      product.image = this.swiperimage[0];
      product.price = this.goods.newprice;
      product.title = this.goods.title;
      product.desc = this.details.desc;
      product.iid = this.iid

      //添加到购物车中
      // this.$store.dispatch('addCart', product).then(res => console.log(res))

      this.addCart(product).then(res => {this.$toast.show(res)})
      
    } 
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 5;
  overflow: hidden;
  background-color: #fff;
}
.detailnav {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.content {
  height: calc(100% - 44px);
  /* padding: 2px; */
  overflow: hidden;
  position: relative;
}
</style>
