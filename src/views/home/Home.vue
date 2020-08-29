<template>
  <div id="home">
    <!-- <home-nav-bar class="home-nav"></home-nav-bar> -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-contorl
        class="tab-contorl"
        :titles="['流行', '新款', '精选']"
        @ItemClick="tabClick"
        ref="tabContorl1"
        v-show="isTabFixed"
      ></tab-contorl>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      @pullUpLoad="loadMore"
      :pullUpLoad="true"
    >
      <home-swiper :banners="banners" @loadSwiperImg="loadSwiperImg"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <tab-contorl
        class="tab-contorl"
        :titles="['流行', '新款', '精选']"
        @ItemClick="tabClick"
        ref="tabContorl2"
      ></tab-contorl>
      <good-list :goods="showGoods"></good-list>
    </scroll>

    <top-back @click.native="topBack" v-show="isShow"></top-back>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabContorl from "components/content/TabContorl/TabContorl";
import GoodList from "components/content/goodlist/GoodList";
import Scroll from "components/common/scroll/Scroll";
import TopBack from "components/content/topback/TopBack";

import { debounce } from "common/utils";

import { getHomeMultidata, getHomeGoods } from "network/home";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodstype: "pop",
      isShow: false,
      tabOffsetTop: null,
      isTabFixed: false,
      saveY: null

    };
  },
  computed: {
    showGoods() {
      return this.goods[this.goodstype].list;
    },
  },
  components: {
    NavBar,
    TabContorl,
    GoodList,
    HomeSwiper,
    RecommendView,
    Scroll,
    TopBack,
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();

    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //监听item中图片加载是否完成
    const refresh = debounce(this.$refs.scroll.refresh, 20);
    this.$bus.$on("homeitemLoadImg", () => {
      // this.$refs.scroll.refresh();
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY * 1 , 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScroll();
  },

  methods: {
    /**
     * 监听事件方法
     */

    tabClick(index) {
      switch (index) {
        case 0:
          this.goodstype = "pop";
          break;
        case 1:
          this.goodstype = "new";
          break;
        case 2:
          this.goodstype = "sell";
          break;
      }
      this.$refs.tabContorl1.ActiveCurrent = index;
      this.$refs.tabContorl2.ActiveCurrent = index;
    },

    //点击返回顶部
    topBack() {
      this.$refs.scroll.scrollTo(0, 0);
    },


    contentScroll(position) {
      //回到顶部出现的位置
      this.isShow = (position.y) < -1000;

      //决定tabcontorl是否吸顶
      this.isTabFixed = (position.y) < -this.tabOffsetTop;
    },
    loadMore() {
      // console.log("上拉加载更多");
      this.getHomeGoods(this.goodstype);
    },

    loadSwiperImg() {
      // console.log(this.$refs.tabContorl2.$el);
      this.tabOffsetTop = this.$refs.tabContorl2.$el.offsetTop
    },

    /**
     * 网络请求的方法
     */

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;

  /* padding-top: 44px; */
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}
.tab-contorl {
  background-color: #fff;
  z-index: 9;
}

/* .content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
} */
.content {
  height: calc(100vh - 93px);

  overflow: hidden;
}
</style>