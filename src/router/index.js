import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Home.vue'
import shopCar from '../components/shopCar.vue'
import articleDetailed from '../components/articleDetailed.vue'
import aboutMe from '../components/aboutMe.vue'
import thisWeb from '../components/thisWeb.vue'
import payMoney from '../components/payMoney.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path: '/shopCar',
    name: 'shopCar',
    component:shopCar
  },
  {
    path: '/articleDetailed',
    name: 'articleDetailed',
    component:articleDetailed,
    props($router){
      return {goodInfo:$router.query.goodInfo}
    }
  },
  {
    path: '/aboutMe',
    name: 'aboutMe',
    component:aboutMe
  },
  {
    path: '/thisWeb',
    name: 'thisWeb',
    component:thisWeb
  },
  {
    path: '/payMoney',
    name: 'payMoney',
    component:payMoney,
    props($router){
      return {payMoney:$router.query.payMoney}
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
