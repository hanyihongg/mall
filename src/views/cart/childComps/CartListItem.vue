<template>
   <div class="goods">
        <div class="selector">
          <check-button class="check-button" :is-checked="itemInfo.checked" @click.native="checkClick"></check-button>
        </div>
        <div class="item-img">
          <img :src="itemInfo.image" alt />
        </div>
        <div class="base-info">
          <p class="title">{{itemInfo.title}}</p>
          <p class="desc">{{itemInfo.desc}}</p>
          <div class="bottom-info">
            <div class="label price">￥{{itemInfo.price}}</div>
            <div class="label counter">
              <button @click="addClick">+</button>
              <button @click="subClick">-</button>
            </div> 
            <div class="label count">x{{itemInfo.count}}</div>
          </div>
        </div>
      </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";
import { mapGetters } from "vuex";

export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default () {
        return {}
      }
    },
   
  },
  computed: {
    ...mapGetters({    
      cartlist: 'cartList'
    }),
  },
  components:{
    CheckButton,

  },
  methods: {
    checkClick() {
      const index = this.cartlist.findIndex(item => {return item.iid === this.itemInfo.iid})
      this.$store.commit('check', index)

    },
    addClick() {
      this.itemInfo.count ++;
    },
    subClick() {
    
      this.itemInfo.count--;
      if(this.itemInfo.count === 0){
        let deleteindex = this.cartlist.findIndex(item => item.iid === this.itemInfo.iid)
        this.cartlist.splice(deleteindex,1)
      }
    }
  },
}
</script>

<style scoped>
.goods {
  display: flex;
  padding: 5px;
  border-bottom: 2px solid #eee;
}
.selector {
  display: flex;
  margin: auto 0;
  margin-right: 5px;
  /* border: 1px solid #ccc; */
}
.check-button {
  width: 20px;
  height: 20px;
}
.goods img {
  border-radius: 3px;
  width: 65px;
  height: 80px;
  display: block;
}
.base-info {
  /* border: 1px solid #000; */
  padding: 0px 5px;
  position: relative;
  overflow: hidden;
}
.title,
.desc {
  margin-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title {
  color: #000;
  font-size: 13px;
}
.desc {
  font-size: 11px;
}

.bottom-info {
  margin-top: 40px;
  position: relative;
}
.label {
  position: absolute;
}
.price {
  left: 0;
  bottom: 0;
  color: var(--color-high-text);
  font-size: 14px;
}
.counter{
  bottom:0;
  right:30px;
}
.counter button{
  width:20px;
  height:20px;
  line-height: 10px;
  text-align: center;
  margin-right:5px;
  /* border:none; */
  outline: none;
}
.count {
  right: 0;
  bottom: 0;
  font-size: 14px;
}
</style>