import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Stomp from '@/views/Stomp'
import ECharts from '@/views/ECharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/stomp',
      name: 'Stomp',
      component: Stomp
    },
    {
      path: '/echarts',
      name: 'ECharts',
      component: ECharts
    }
  ]
})
