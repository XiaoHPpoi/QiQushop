import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods:[],
    shopcar:JSON.parse(localStorage.getItem('shopcar')) || []
  },
  getters: {
  },
  mutations: {
    INITGOODINFO(state,goodInfo){
      state.goods=goodInfo
    },
    // 购物车添加商品
    addShop(state,goodInfo){
      let flag = true

      // 判断购物车中是否有该商品
      state.shopcar.forEach(good => {
        // 有该商品
        if(good.id === goodInfo.id){
          flag = false
          good.count++
        }
      })
      // 没有该商品
      if(flag){
        state.shopcar.push(goodInfo);
      }
      
    },
    // 购物车移除商品
    delShop(state,goodInfo){
      state.shopcar = state.shopcar.filter((shop)=>{
        return shop.info != goodInfo.info
      })
      
    },
    // 添加商品数量
    addCount(state,goodinfo){
      state.shopcar.forEach(good=>{
        if(good.id === goodinfo.id){
          good.count++
        }
      })
    },
    // 减少商品数量
    subCount(state,goodinfo){
      state.shopcar.forEach((good,index)=>{
        if(good.id === goodinfo.id){
          if(--good.count === 0){
            state.shopcar.splice(index,1)
          }
        }
      })
    },
    // 清空购物车
    empty(state){
      state.shopcar = []
    }
  },
  actions: {
    getData({commit}){
      const goodinfo=[
        {
          id:'001',
          imgName: {"url": require("../assets/01.jpg")},
          info:"荣耀Magic4 全新一代骁龙8 双曲屏设计 LTPO屏幕 潜望式长焦摄像头 7P广角主摄",
          price:2345,
          count:1
        },
        {
          id:'002',
          imgName: {"url": require("../assets/02.jpg")},
          info:"荣耀Play5T Pro 6400万双摄 6.6英寸全视屏 22.5W超级快充 4000mAh大电池 全网",
          price:1,
          count:1
        },
        {
          id:'003',
          imgName: {"url": require("../assets/03.jpg")},
          info:"荣耀X30 骁龙6nm疾速5G芯 66W超级快充 120Hz全视屏 全网通版 8GB+128GB",
          price:3456,
          count:1
        },
        {
          id:'004',
          imgName: {"url": require("../assets/03.jpg")},
          info:"荣耀X30 骁龙6nm疾速5G芯 66W超级快充 120Hz全视屏 全网通版 8GB+128GB",
          price:3456,
          count:1
        },
        {
          id:'005',
          imgName: {"url": require("../assets/03.jpg")},
          info:"荣耀X30 骁龙6nm疾速5G芯 66W超级快充 120Hz全视屏 全网通版 8GB+128GB",
          price:3456,
          count:1
        },
        {
          id:'006',
          imgName: {"url": require("../assets/03.jpg")},
          info:"荣耀X30 骁龙6nm疾速5G芯 66W超级快充 120Hz全视屏 全网通版 8GB+128GB",
          price:3456,
          count:1
        },
        {
          id:'007',
          imgName: {"url": require("../assets/03.jpg")},
          info:"荣耀X30 骁龙6nm疾速5G芯 66W超级快充 120Hz全视屏 全网通版 8GB+128GB",
          price:3456,
          count:1
        }
      ]
      setTimeout(()=>{commit('INITGOODINFO',goodinfo)},1500)
    },
    
    
  },
  modules: {
  }
})
