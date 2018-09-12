import Vue from 'vue'
import Router from 'vue-router'
import MallHome from '@/components/pages/MallHome'

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', name: 'MallHome', component: MallHome}
  ]
})
