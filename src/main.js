// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入主页面App
import App from './App'
// 引入router
import router from './router'

// 引入mint-ui
import MintUI from 'mint-ui'
// 引入mint-ui中的样式
import 'mint-ui/lib/style.css'



Vue.use(MintUI)
// 设置浏览器不提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})
