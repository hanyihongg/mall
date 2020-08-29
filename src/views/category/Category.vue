<template>
  <div id="category">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <div class="main">
      <scroll class="content">
        <category-list :navlist="navlist" @getSubcategory="getSubcategory"></category-list>
      </scroll>

      <scroll class="content1" ref="scroll">
        <sub-category-list class="sub-category" :sublist="sublist"></sub-category-list>
        <tab-contorl :titles="['综合','新品','销量']" @ItemClick="tabClick"></tab-contorl>
        <tab-control-detail :detaillist="detaillist"></tab-control-detail>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import TabContorl from "components/content/TabContorl/TabContorl";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";

import CategoryList from "./categoryComps/CategoryList";
import SubCategoryList from "./categoryComps/SubCategoryList";
import TabControlDetail from "./categoryComps/TabControlDetail";

import { debounce } from "common/utils";
export default {
  name: "Category",
  data() {
    return {
      navlist: null,
      sublist: null,
      detaillist: null,
      currentIndex: -1,
      tabType: null,
    };
  },
  components: {
    Scroll,
    NavBar,
    CategoryList,
    SubCategoryList,
    TabContorl,
    TabControlDetail,
  },
  mounted() {
    //防抖操作
    const refresh = debounce(this.$refs.scroll.refresh, 30)
    this.$bus.$on('categoryitemLoadImg', () =>{
      refresh()
    })
  },
  created() {
    //1.获取分类数据
    getCategory().then((res) => {
      console.log(res);
      this.navlist = res.data.category.list;
      this.getSubcategory(0);
    });
  },
  methods: {
    getSubcategory(index) {
      this.currentIndex = index;
      const maitKey = this.navlist[index].maitKey;
      const miniWallkey = this.navlist[index].miniWallkey;
      getSubcategory(maitKey).then((res) => {
        this.sublist = res.data.list;
      });
      this.getCategoryDetail("pop");
      this.getCategoryDetail("new");
      this.getCategoryDetail("sell");
    },

    getCategoryDetail(type) {
      const miniWallkey = this.navlist[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.detaillist = res;
      });
    },

    tabClick(index) {
      switch (index) {
        case 0: {
          this.tabType = "pop";
          break;
        }
        case 1: {
          this.tabType = "new";
          break;
        }
        case 2: {
          this.tabType = "sell";
          break;
        }
      }

      this.getCategoryDetail(this.tabType)
    },

    
  },
};
</script>

<style scoped>
#category {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.navbar {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}
.content {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.main {
  display: flex;
  overflow: hidden;
  position: relative;
  height: calc(100% - 49px - 44px);
}
.sub-category {
  flex: 1;
}
.content1 {
  height: 100%;
  flex: 1;
}
</style>