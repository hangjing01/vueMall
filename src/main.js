// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Col,Row,Swipe,SwipeItem,Lazyload} from 'vant'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
