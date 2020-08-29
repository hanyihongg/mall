<template>
    <swiper>
      <swiper-item class="swiperitem" v-for="(item,index) in swiperimage" :key="index">
        <img :src="item"/>
      </swiper-item>
    </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  name: "DetailSwiper",
  props: {
    swiperimage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.swiperitem{
  width:100%;
  height: 250px;
}
.swiperitem img{

  height: 250px;
 
}
</style>