<template>
  <div id="app">
    <router-view></router-view>
    <Footer  />
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import { reqShopList } from './api'
import Footer from './components/Footer/Footer.vue'
// 注册轮播图全局组件
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  name: 'App',
  components: {
    Footer
  },
  async mounted(){
   // let result = await reqShopList()
    // console.log(result)
    // console.log(this.$route)
  }
}
</script>
<style lang='stylus'	rel='stylesheet/stylus'>
#app
  width 100%
  height 100%
</style>
