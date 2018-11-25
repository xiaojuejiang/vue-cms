import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let car = JSON.parse(localStorage.getItem('car')) || []

const store = new Vuex.Store({
  state: {
    car
  },
  mutations: {
    addToCar: function (state, goods) {
      //假设已存在
      let flag = false
      //校验添加的商品是否已存在于购物车中
      state.car.some(item => {
        if (item.id == goods.id) {
          item.count += goods.count
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goods)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters: {
    goodsAll: function (state) {
      let c = 0
      state.car.forEach(e => {
        c += e.count
      });
      return c
    }
  }
})

export default store
