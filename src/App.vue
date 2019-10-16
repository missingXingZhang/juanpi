<template>
  <div id="app">
    <Profile/>
  </div>
</template>

<script>
// 引入Home组件
import Home from './components/Home/Home';
// 引入Profile组件
import Profile from './components/Profile/Profile.vue'
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
