import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-type'
export default {

  [ADD_COUNTER](state, payload) {

    state.cartList.find(item => {return item === payload}).count ++;
  },
  [ADD_TO_CART](state, payload) {
    payload.count = 1;
    payload.checked = false
    state.cartList.push(payload)
  },
  check(state,index) {
    state.cartList[index].checked = !state.cartList[index].checked
  }
}
