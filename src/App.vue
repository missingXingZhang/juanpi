<template>
  <div id="app">
    <Profile />
  </div>
</template>

<script>
import Home from './pages/Home/Home'
// 引入Profile组件
import Profile from './pages/Profile/Profile.vue'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
// 注册轮播图全局组件
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  name: 'App',
  components: {
    Home,
    Profile
  }
}
</script>
<style lang='stylus'	rel='stylesheet/stylus'>
#app
  width 100%
  height 100%
</style>
