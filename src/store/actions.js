import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-type'
export default {
  addCart(context, payload) {

    return new Promise((resolve) => {
      //查找数组是否有该商品
      let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldproduct) {
        // oldproduct.count += 1;
        context.commit(ADD_COUNTER, oldproduct)
        resolve('商品数量加1')
      } else {
        // payload.count = 1;
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve('已添加当前商品')
      }
    })

  }
}
