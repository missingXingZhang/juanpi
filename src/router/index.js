// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes.js'
// 声明使用
Vue.use(VueRouter)

// 暴露对象
export default new VueRouter({
  mode: 'history',
  routes
})