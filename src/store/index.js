import Vue from 'vue'
import Vuex, {
  Store
} from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    cartList: [] //['商品1', '商品2']
  },
  mutations,
  actions,
  getters
})

export default store
