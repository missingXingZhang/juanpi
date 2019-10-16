<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home/Home';
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
// 注册轮播图全局组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
</style>
